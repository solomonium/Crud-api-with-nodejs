 import express from "express";
 import bodyparser from "body-parser";
 import getUserDetails from "../controllers/userController";
 
 const router = express.Router();

 const userInfo = [
     {
        "name": "Solomon",
        "age": 25,
        "message": "Starting out with Node.js",
        "createDate": Date.now
     }
 ]

 router.use(bodyparser.json())
 router.get('/users', getUserDetails.getUserDetails)
 router.post('/users', getUserDetails.getUserDetails)
 router.put('/users:id', getUserDetails.getUserDetails)
 router.delete('/users:id', getUserDetails.getUserDetails)

//   router = (app) => {
//     app.route('/')
//     .get((req, res) => res.send('Successful GET Request'))
//     .post((req, res) => res.send('Successful POST Request'));
//     app.route('/:ID')
//     .delete((req, res) => res.send('Successful DELETE Request'))
//     .put((req, res) => res.send('Successful PUT Request'))
// }

export default router;