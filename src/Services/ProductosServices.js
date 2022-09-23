import axios from "../Configuracion/axios"
import firebase from "../Configuracion/firebase"

export async function getProductosFirebase (){
    const querySnapShot = await firebase.firestore().collection('productos').get()
    return querySnapShot.docs
}

export async function getByIdProductosFirebase (id){
    return await firebase.firestore().doc('productos/'+ id).get()
}

export async function update (id, data){
    return await firebase.firestore().doc('productos/'+ id).set(data)
}

////////////////////////////////////////////////////////

export async function getAllProductos (){
    return axios.get('/3/movie/popular?api_key=9f65d3a91912519ce8ddbfbe32b5ab12&language=es-ES')
}

export async function getByIdProductos (id){ 
    return axios.get(`/3/movie/${id}?api_key=9f65d3a91912519ce8ddbfbe32b5ab12&append_to_response=videos,images&language=es-ES`)
}
