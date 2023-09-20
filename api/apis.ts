import axios from 'axios'

const URL = 'http://localhost:8000';

export const frontend = async() =>{
    try{
       const res = await axios.get(`${URL}/`)
       return res;
    }catch(err:any){
        console.log("Error in making get request")
    }
}