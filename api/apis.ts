import axios from 'axios'

const URL ='http://localhost:8000';

// console.log(URL)
// console.log(process.env.NEX/T_APP_BACKEND_URL/)

type User  = {
 fullname:string;
 email:string;
 password:string;

}
type UserSignIn  = {
 email:string;
 password:string;

}

type PorjectDetails = {
    title: string;
    shortdiscription: string;
    category: string;
    theme: string;
    description: string;
    teckstack: string;
    projectlink: string;
    status: string;
    photo?: string;
    universityname: string;
    qualification: string;
    collaborator?: string;
    userid:string;
  };

export const SignUpRequest = async(user:User) =>{
    try{
      return await axios.post(`${URL}/signup`,user)
    }catch(err:any){
        console.log("Error in making Sign Up request")
        return ;
    }
}

export const SignInRequest = async(user:UserSignIn) =>{
    try{
      
      return await axios.post(`${URL}/signin`,user);
    }catch(err:any){
        console.log("Error in making Sign in request")
        return;
    }
}

// projects upload 
export const uploadProjects = async(project:PorjectDetails) =>{
    try{
      return await axios.post(`${URL}/uploadprojects`,project);
    }catch(err:any){
        console.log("Error in uploading projects ")
        return;
    }
}

export const getProjectDeatils = async(id:number) =>{
      
    try{
      return await axios.get(`${URL}/getprojectsdetails/${id}`);
    }catch(err:any){
        console.log("Error in getting  projects description")
        return;
    }
}