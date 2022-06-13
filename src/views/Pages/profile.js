/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const profile = () => {
  const { logout } = useAuth();
  return (
    <>
      <div className='d-flex justify-content-center mb-4' style={{ alignItems: "center" }}>
        <svg className='mr-3 bg-primary p-2 rounded-circle' width="70" height="70" viewBox="0 0 24 24"><path fill='#fff' d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
        <div className='d-flex' style={{ flexDirection: "column" }}>
          <span className='fw-bold'>Nama User</span>
          <span className='fw-bold'>0812 123 123</span>
          <span className='fw-bold'>Nama Event</span>
        </div>
      </div>

      <div className='list-group'>
        <Link to='/profile/edit' className='list-group-item list-group-item-action fw-bold'>
          Edit Profile
        </Link>
        <Link to='/profile/reset-password' className='list-group-item list-group-item-action fw-bold'>
          Ganti Password
        </Link>
        <Link to='/profile/my-gift' className='list-group-item list-group-item-action fw-bold'>
          GIFT saya
        </Link>
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <button className='btn btn-danger rounded-pill px-5 fw-bold text-white' onClick={() => logout()}>Keluar</button>
      </div>
    </>
  )
}

export default profile