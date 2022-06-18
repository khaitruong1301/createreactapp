import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const login =  async () => {
      //Giả lập call api
      const getApi = () => new Promise(resolve => {
         setTimeout(() => {
            resolve('login');
          }, 2000);

      });
      let result = await getApi();
      console.log(result);
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await login(); //Giả lập call api
      navigate('/');
      //navigate('/',{replace:true})
    }
    return (
      <form onSubmit={handleSubmit} className="container">
          <h3>Login</h3>
          <div className='form-group'>
            <p>username</p>
            <input className='form-control' id="username" />
          </div>
          <div className='form-group'>
            <p>username</p>
            <input className='form-control' id="password" type={""} />
          </div>
          <div className='form-group'>
            <button className='btn btn-success' type='submit'>Submit</button>
          </div>
      </form>
    )
}
