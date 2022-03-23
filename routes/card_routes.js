import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import CardModel from '../model/cardModel.js'


const router = express.Router();




//all routes in here are starting with /users
router.get('/', (req,res) => {
    
    res.send('Hello');
});




router.post('/addCard',async (req,res) => {

    try {
        const card = req.body;

    const cardID = uuidv4();


    const Card = new CardModel({...card,id:cardID});
    await Card.save();
    
    res.status(200).send('Card added to the database');
    } catch (error) {
        res.status(503);
    }
});

router.get('/:id',async (req,res) => {
   try {
    const {id} = req.params;

   const card = await CardModel.findOne({id:id});
    if(!card){
        res.status(404).send({msg:"book not found"})

    }else{

        res.status(200).send(card)
    }
   } catch (e) {
    res.status(503);

   }
});

router.delete('/:id',async (req,res) => {
    const { id } = req.params;

   try {
    const isDeleted = await CardModel.deleteOne({id:id});
    if(isDeleted){
        res.status(200).send({msg:"success"})
        
    }else{
        
        res.status(404).send({msg:"book not found"})
    }
   
   } catch (error) {
    res.status(503);

   }
});

router.patch('/:id',async (req,res) => {
    const {id} = req.params;



    try {
        const card = await CardModel.updateOne({id:id},req.body);
        if (card.error) {
            res.status(500).json({
              message: card.error,
              card: card.data
            })
          }
          res.status(200).json({
              message: 'success',
              card: card.data
            }) 
    } catch (e) {
        res.status(503)
    }
    


})

export default router;