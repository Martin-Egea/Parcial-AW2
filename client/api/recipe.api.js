import { API } from "./api.js";

//trae todos las recetas
export const infoRecetas = async()=>{
    try {
        const res = await fetch(`${API}/recetas/infoRecetas`,{
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

//crea una nueva receta
export const nuevaReceta = async(nuevaReceta)=>{
    try {
        const res = await fetch(`${API}/recetas/agregarRecetas`,{
            method: 'POST',
            body: JSON.stringify(nuevaReceta),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return res.json()

    } catch (error) {
        console.log(error)
    }
}