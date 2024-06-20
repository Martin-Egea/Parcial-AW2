import express from 'express'
import ingredientRouter from './routes/ingredientes.routes.js'
import recipeRouter from './routes/recetas.routes.js'

const app = express()
const port = 3001

app.listen(port, ()=>{
    console.log(`Servidor levantado en el puerto: ${port}`)
})

app.use(express.json())
app.use(express.static('./client'))
app.use('/ingredientes', ingredientRouter)
app.use('/recetas', recipeRouter)
