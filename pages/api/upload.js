import middleware from './middleware'
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
	try {
		const file = req.files.image;
		const body = req.body;
		// do stuff with files and body

		// returns the response ok
		setTimeout(() => {
			res.status(201).json({ img: file.path });
		}, 1500)
	} catch (err) {
		res.status(400).json({error: err.message});
	}
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;
