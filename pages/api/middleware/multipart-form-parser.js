import  formidable  from  'formidable';

const  form = formidable({ multiples:  false });

export  default  async  function  parseMultipartForm(req, res, next) {
	const  contentType = req.headers['content-type'];
	if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
		form.parse(req, (err, fields, file) => {
			if (!err) {
				req.body = fields; // sets the body field in the request object
				req.file = file; // sets the file field in the request object
			}
			next(); // continues to the next middleware or to the route
		})
	} else {
		next();
	}
}
