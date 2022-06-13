import React from 'react'
import QRCode from "react-qr-code";

const barcode = () => {
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='d-block'>
      <QRCode value="https://www.google.com" size={250} className='d-block mb-3' />
      <h2 className='fw-bold d-flex justify-content-center'>Nama User</h2>
      </div>
    </div>
  )
}

export default barcode