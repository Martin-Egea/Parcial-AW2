import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const ingredientFile = await readFile('./data/ingredientes.json', 'utf-8')
const ingredientData = JSON.parse(ingredientFile)

const router = Router()

//Obtener todos los ingredientes
router.get('/infoIngredientes', async (req, res) => {
    try {
        res.status(200).json(ingredientData)
    } catch (error) {
        console.log(error)
        readFile.status(400)
    }
})

//Crear nuevo ingrediente
router.post('/agregarIngredientes', (req, res) => {
    const id = ingredientData[ingredientData.length -1].id +1
    const nombre = req.body.nombre

    const nuevoIngrediente = {
        id,
        nombre
    }

    try {
        ingredientData.push(nuevoIngrediente)
        writeFile('./data/ingredientes.json', JSON.stringify(ingredientData,null,2))
        res.status(200).json({status:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({status:false})
    }

})


export default router