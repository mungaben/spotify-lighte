import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'
import queryString from 'query-string';
import qs from 'qs';

let api = {
  client_id: import.meta.env.VITE_CLIENT_ID,
  client_secret: import.meta.env.VITE_CLIENT_SECRET,
  
};

const Register = () => {
  const [tokens, settokens] = useState();
  console.log(tokens);

  
 
  const authEndpoint = "https://accounts.spotify.com/authorize"
  const client_id ='23ddda49adf1411eb477e123e91fa619'
  const redirect_uri='http://localhost:5173'
  const response_type='token'
  const client_secret='bb35de38bce94f5e9a025a163b426925'
  

  // serach artist  get artist ,tracks,albums,playlists
  


    // client_id:client_secret

  

   
    
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: client_id,
        password: client_secret,
      },
    };
    const data = {
      grant_type: 'client_credentials',
    };
  

    const gettoken=()=>{
      const response =  axios.post(
        'https://accounts.spotify.com/api/token',
        qs.stringify(data),
        headers
      ).then((res)=>{
        console.log(res.data);
        settokens(res.data.access_token)
        localStorage.setItem('sportify_access',JSON.stringify(res.data.access_token))
      }).catch((errors)=>{
        console.log(errors);

      });

    }

  // const getData= async()=>{
  //   const data=await axios.get("https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",{
  //     headers:{'Authorization':`Bearer ${tokens}`}
  //   }).then((res)=>{
  //     console.log(res.data);
  //   }).catch((errors)=>{
  //     console.log(errors);
  //   })
  // }
    // gettoken()

  
  
    useEffect(()=>{

      gettoken()
      // tokens && getData()
      // tokens && search_data()

    },[])

   
    
      
      
  
  


  
  
  
     
  


  return (
    <div>
        {/* <p>print env secret to HTML</p>
       <pre>{process.env.REACT_APP_SECRET_NAME}</pre> */}
      
    </div>
  )
}

export default Register
