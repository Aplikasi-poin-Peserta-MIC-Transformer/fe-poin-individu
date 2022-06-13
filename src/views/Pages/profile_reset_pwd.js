import React from 'react'

const profile_reset_pwd = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="password">Password</label>
          <input className='form-control' type="password" name="password" id="password" placeholder="Isi Password Anda" />
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="passwordConfirm">Konfirmasi Password</label>
          <input className='form-control' type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Isi Konfirmasi Password Anda" />
        </div>
        <div className='d-grid gap-2 mt-4'>
          <button type="submit" className='btn btn-primary rounded-pill text-white'>Daftar</button>
        </div>
      </form>
    </>
  )
}

export default profile_reset_pwd