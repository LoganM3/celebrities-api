import { dbConnect } from "./dbconnect.js";

export function getAllCelebs(req,res){
    const db = dbConnect()
    //get celebs data
    db.collection('celebrities').get()
    .then(collection =>{
       const celebrities = collection.docs.map(doc => doc.data())
        res.send(celebrities)
    })
    .catch(err => handleError(err,res))
}

export function addCeleb(req,res){
    const db = dbConnect()
    const newCeleb = req.body
    db.collection('celebrities').add(newCeleb)
    .then(collection =>{
        res.status(200).send({
            success: true,
            id: doc.id
        })
    })
    .catch(err => handleError(err,res))
}





 function handleError(err,res){
    console.log(err)
    res.status(500).send(err)
}