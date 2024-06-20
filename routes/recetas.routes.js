import { Router } from "express";
import { readFile, writeFile } from 'fs/promises'

const recipeFile = await readFile('./data/recetas.json', 'utf-8')
const recipeData = JSON.parse(recipeFile)

const router = Router()

//Obtener todas las recetas
router.get('/infoRecetas', async (req, res) => {
    try {
        res.status(200).json(recipeData)
    } catch (error) {
        console.log(error)
        readFile.status(400)
    }
})

//Crear nueva receta
router.post('/agregarRecetas', (req, res) => {
    const id = recipeData[recipeData.length -1].id +1
    const nombre = req.body.nombre
    const ingredientes = req.body.ingredientes

    const nuevaReceta = {
        id,
        nombre,
        ingredientes
    }

    try {
        recipeData.push(nuevaReceta)
        writeFile('./data/recetas.json', JSON.stringify(recipeData,null,2))
        res.status(200).json({status:true})
    } catch (error) {
        console.log(error)
        res.status(400).json({status:false})
    }

})

export default router