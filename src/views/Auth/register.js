import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo1 from '../../assets/logo1.png'
import Select from 'react-select';

const Register = () => {
  const navigate = useNavigate()
  const [showAlert, setShowAlert] = React.useState(null)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    setShowAlert(
      <div className='success-register'>
        <img src={logo1} alt='' className='logo-1' />
        <span>SELAMAT TEAM SUDAH TERDAFTAR</span>
        <div className='content-center'>
          <button onClick={() => navigate('/login', { replace: true })} className='btn-white'>LOGIN</button>
        </div>
      </div>
    )
  }
  return (
    <div className='flext-column px-4'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="event" className='form-label fw-bold'>Pilih Event</label>
          <Select
            value={selectedOption}
            options={options}
            onChange={handleSelectChange}
            className='select-event'
            placeholder='Pilih Event'
            isClearable={true}
            isSearchable={true}
            isDisabled={false}
            isLoading={false}
            isRounded={true}
            isMulti={false}
          />
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="namaLengkap">Nama Lengkap</label>
          <input className='form-control' type="text" name="nama" id="namaLengkap" placeholder="Isi Nama Lengkap Anda" />
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="Perusahaan">Perusahaan</label>
          <input className='form-control' type="text" name="perusahaan" id="Perusahaan" placeholder="Isi Nama Perusahaan/Institusi Anda" />
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="noHp">No Handphone</label>
          <input className='form-control' type="text" name="noHp" id="noHp" placeholder="Isi No Handphone Anda" />
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="password">Password</label>
          <input className='form-control' type="password" name="password" id="password" placeholder="Isi Password Anda" />
        </div>
        <div className="mb-3">
          <label className='form-label fw-bold' htmlFor="passwordConfirm">Konfirmasi Password</label>
          <input className='form-control' type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Isi Konfirmasi Password Anda" />
        </div>
        <div className='mb-3'>
          {/* input checked text */}
          <div className='d-flex justify-content-start' style={{ alignItems: "center" }}>
            <input className="form-check-input mt-0 me-md-3" type="checkbox" value="" aria-label="Checkbox for following text input"/>
            <label htmlFor="checkbox" className='form-label'>Saya menyetujui Syarat Ketentuan dan Kebijakan Privasi</label>
            </div>
        </div>
        <div className='d-grid gap-2 mt-4'>
          <button type="submit" className='btn btn-primary rounded-pill text-white'>Daftar</button>
        </div>
      </form>
      {showAlert}
    </div>
  )
}

export default Register