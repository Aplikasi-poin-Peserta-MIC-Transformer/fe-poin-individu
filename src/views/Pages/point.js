import React from 'react'

const point = () => {
  return (
    <>
      <div className='d-flex justify-content-center mb-4' style={{ alignItems: "center" }}>
        <svg className='me-md-3 bg-warning p-2 rounded-circle' width="60" height="60" viewBox="0 0 24 24"><path fill='#fff' d="M13.5 3H7V12H5V14H7V16H5V18H7V21H9V18H13V16H9V14H13.5C16.54 14 19 11.54 19 8.5S16.54 3 13.5 3M13.5 12H9V5H13.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12Z" /></svg>
        <h1 className='fw-bold'>90</h1>
      </div>

      <span className='h6 mt-5'>Riwayat Point</span>

      <div className='mt-3 d-flex border-bottom pb-2' style={{ flexDirection: "column" }}>
        <span>1 juni 2022</span>
        <span className='text-danger'>dibelanjakan 10 point</span>
      </div>

      <div className='mt-3 d-flex border-bottom pb-2' style={{ flexDirection: "column" }}>
        <span>1 juni 2022</span>
        <span className='text-success'>Mendapatkan 10 point</span>
      </div>

      <div className='mt-3 d-flex border-bottom pb-2' style={{ flexDirection: "column" }}>
        <span>1 juni 2022</span>
        <span className='text-success'>Mendapatkan 90 point</span>
      </div>
    </>
  )
}

export default point