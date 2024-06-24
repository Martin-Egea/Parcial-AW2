import { API } from "./api.js";

//trae todos los Ingredientes
export const infoIngredientes = async()=>{
    try {
        const res = await fetch(`${API}/ingredientes/infoIngredientes`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })       
        const data = await res.json()
        
        if (data != '') {
            return data
        } else {
            return []
        }        

    } catch (error) {
        console.log(error)
    }
}

//crea un nuevo ingrediente
export const nuevoIngrediente = async(nombre)=>{
    try {
        const res = await fetch(`${API}/ingredientes/agregarIngredientes`,{
            method: 'POST',
            body: JSON.stringify({nombre}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res

    } catch (error) {
        console.log(error)
    }
}

