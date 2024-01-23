import {Router} from 'express';
import pool from '../database';

const router = Router();

router.get('/list', async(req, res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM people');
        console.log(result);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

export default router;