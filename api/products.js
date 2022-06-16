import axios from "axios"

export const APISettings =  {
    token: '',
    headers : new Headers({
        'Accept' : 'application/json'

    }),
    baseURL: 'https://fakestoreapi.com/products'

}
 
export default {
    index( params) {
        return axios.get(baseURL, {
            params: params
        })

    },
    show( id ){
        return axios.get(baseURL + '/' + id);

    },
    create( data ) {
        return axios.post(baseURL, data);
        
    },

    update(id, data) {
        // data._method = 'PUT';
        return axios.put(baseURL + '/'+ id, data);
        
    },

    delete (id ){
        return axios.delete(baseURL + '/' + id)

    }


}
