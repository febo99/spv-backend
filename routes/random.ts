import { Router } from 'express';


const route = Router();

route.get('/decision/:num', (req, res) => {
    console.log(req.params.num)


    res.sendStatus(200)
})



export default route