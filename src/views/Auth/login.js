import React from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../../context/authContext'
import API from '../../api'

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      no_wa: e.target.noWa.value,
      password: e.target.password.value
    }
    API.login(form).then(res => {
      login(res)
      navigate("/gift", { replace: true })
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className='private-content-wrapper'>
    <div className='flext-column'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="noWa" className='form-label fw-bold'>Nomor Handphone</label>
            <input className='form-control' type="text" name="noWa" id="noWa" defaultValue="081234567890" placeholder="Masukan nomor yang di daftarkan" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className='form-label fw-bold'>Password</label>
            <input className='form-control' type="password" name="password" id="password" defaultValue="123456" placeholder="Masukan password yang di daftarkan" />
          </div>
          <div className='d-grid gap-2 mt-4'>
            <button type="submit" className='btn btn-primary rounded-pill text-white'>Login</button>
          </div>
        </form>
      <div className='d-flex justify-content-center mt-2'>
          <span className='me-md-3'>Belum Register ?</span>
          <span role="button" className='fw-bold text-primary' onClick={() => navigate('/register', { replace: true })}>REGISTER</span>
      </div>
      </div>
    </div>
  )
}

export default Login