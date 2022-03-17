 import express, {Router} from "express";
 
 const router = express.Router();

 router.get('/users', (req, res) => res.json([]))

//   router = (app) => {
//     app.route('/')
//     .get((req, res) => res.send('Successful GET Request'))
//     .post((req, res) => res.send('Successful POST Request'));
//     app.route('/:ID')
//     .delete((req, res) => res.send('Successful DELETE Request'))
//     .put((req, res) => res.send('Successful PUT Request'))
// }

export default router;