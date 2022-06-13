/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Select from 'react-select';

const profile_edit = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', e)
  }
  return (
    <>
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
        <div className='d-grid gap-2 mt-4'>
          <button type="submit" className='btn btn-primary rounded-pill text-white'>Daftar</button>
        </div>
      </form>
    </>
  )
}

export default profile_edit