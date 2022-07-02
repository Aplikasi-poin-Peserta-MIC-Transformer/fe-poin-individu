import React from 'react'
import { useAuthContext } from '../../context/authContext';
import QRCode from "react-qr-code";

const Barcode = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='d-block'>
      <QRCode value={user?.no_wa} size={250} className='d-block mb-3' />
        <h2 className='fw-bold d-flex justify-content-center'>{user?.nama}</h2>
      </div>
    </div>
  )
}

export default Barcode