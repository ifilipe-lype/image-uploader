
export default function handler(req, res){
    const { method } = req;
  
    if(method.toUpperCase() === "POST"){
      console.log(req.body)
      res.status(200).json({ name: 'John Doe' });
    }
  
  }
  
  export const config = {
    api: {
      bodyParser: false
    }
  }
  