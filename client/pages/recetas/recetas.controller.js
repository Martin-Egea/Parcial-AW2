import { infoRecetas, nuevaReceta } from "../../api/recipe.api.js"
import { recipe } from "../../components/recipe.js"
import { infoIngredientes } from "../../api/ing.api.js"


const btnAdd = document.getElementById("add")
const btnCancel = document.getElementById("cancel")
const btnCreate = document.getElementById('create')

const arrIng = []

btnCreate.addEventListener('click', async()=>{
    const recipeName = document.getElementById("name").value
    

    /*Se debe añadir la receta creada al servidor */
    if (arrIng.length === 0) {
        window.alert('Ingredientes o Campos Vacios!!')
    } else {
        const auxReceta = {"nombre":recipeName, "ingredientes":arrIng}  
        //console.log(auxReceta)      
        nuevaReceta(auxReceta)
    }    

})

btnAdd.addEventListener('click', ()=>{
    const cantidad = document.getElementById("quantity").value
    const id = document.getElementById("ing").value
    
    const li = document.createElement('li')


    arrIng.push({id, cantidad})
    li.textContent = `${id}: ${cantidad}`
    document.getElementById('list').appendChild(li)    
})


btnCancel.addEventListener('click',()=>{
    arrIng.splice(0,arrIng.length)
    document.getElementById('list').innerHTML = ''
})

window.addEventListener('load', async()=> {
    /*Llenar lista con las recetas existentes
        Se debe usar el componente recipe que recibe dos parametros, title y un array con los ingredientes de la receta llamado ing
    */
        const recetasData = await infoRecetas()        
        const ingredientData = await infoIngredientes()
              
        //Carga el Select/ComboBox de la pagina de recetas
        ingredientData.forEach(e =>{   
            const cmbOption = document.createElement('option')         
            cmbOption.textContent =`${e.nombre}`
            cmbOption.value = e.id
            document.getElementById('ing').appendChild(cmbOption)
        })

        //Carga del listado de recetas existentes
        let ListaDeRecetas = ''
        recetasData.forEach(e => {
            ListaDeRecetas += recipe(e.nombre, e.ingredientes)
        });
        document.getElementById('listRecipe').innerHTML = ListaDeRecetas    
        //document.getElementById('listRecipe').innerHTML = recipe("Pizza", [{name:"Queso", quantity:120}, {name:"Salsa", quantity:150}])

        
})