import { infoIngredientes, nuevoIngrediente } from "../../api/ing.api.js"

const btnCreate = document.getElementById("create")

window.addEventListener('load', async()=> {
    /*Llenar lista con los ingredientes existentes*/
    const ingredientData = await infoIngredientes()

    ingredientData.forEach(e => {
        const li = document.createElement('li')
        li.textContent = `${e.id} - ${e.nombre}`
        document.getElementById('list').appendChild(li)
    });
    
    /*Creación de nuevo ingrediente */
    btnCreate.addEventListener('click',async()=>{
        const name = document.getElementById("name").value
        
        if (name != '') {
            await nuevoIngrediente(name)
            location.reload()
        } else {
            alert('el campo de nombre es obligatorio!!')
        }
    
    })

})