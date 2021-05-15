import nextConnect from 'next-connect';
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import middleware from './middleware'

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRECT
});

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
	try {
		const file = req.files.image;
		// Stream upload
		const upload_stream = cloudinary.uploader.upload_stream({ tags: 'image_upload_sample_app' }, function (err, image) {
			if (err){
				return res.status(500).json({ err: "Failled to upload image!" });
			}

			return res.status(201).json({
				img: {
					public_id: image.public_id,
					url: image.url,
				}
			});
		});
		fs.createReadStream(file.path).pipe(upload_stream);

	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

export const config = {
	api: {
		bodyParser: false,
	},
}

export default handler;
