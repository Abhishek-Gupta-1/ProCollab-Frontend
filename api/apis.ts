import axios from 'axios'

const URL = 'http://localhost:8000';

type User  = {
 fullname:string;
 email:string;
 password:string;

}
type UserSignIn  = {
 email:string;
 password:string;

}
export const frontend = async() =>{
    try{
       const res = await axios.get(`${URL}/`)
       return res;
    }catch(err:any){
        console.log("Error in making get request")
    }
}

export const SignUpRequest = async(user:User) =>{
    try{
      return await axios.post(`${URL}/signup`,user)
    }catch(err:any){
        console.log("Error in making get request")
        return ;
    }
}
export const SignInRequest = async(user:UserSignIn) =>{
    try{
      return await axios.post(`${URL}/signin`,user);
    }catch(err:any){
        console.log("Error in making get request")
        return;
    }
}