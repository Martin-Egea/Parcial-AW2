import express from 'express'

const app = express()
const port = 3001

app.listen(port, ()=>{
    console.log(`Servidor levantado en el puerto: ${port}`)
})

app.use(express.json())
app.use(express.static('./client'))