import middleware from './middleware'
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
	try {
		const file = req.files;
		const body = req.body;
         console.log(file)
		// do stuff with files and body
		res.status(200).json({});
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
