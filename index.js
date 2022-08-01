import express from 'express'
import { addCeleb, getAllCelebs } from './src/celebrities.js'

//import {cors} from 'cors'
//import functions from celebrities
const app = express()
app.use(express.json())
const port = 4003

 app.get('/celebrities', getAllCelebs)
 app.post('/celebrities/add', addCeleb)

app.listen(port, ()=>{
console.log ('its working')
})