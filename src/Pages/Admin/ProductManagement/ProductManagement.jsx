import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductManagement() {

  const navigate = useNavigate();
 
  const login =  async () => {
    //Giả lập call api
    await setTimeout(() => {
      console.log('login api')
    }, 1000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
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
