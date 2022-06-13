/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom'

const gift_detail = () => {
  const { id } = useParams()
  return (
    <>
      <div className='card mb-3'>
        <div className='card-body d-flex justify-content-start'>
          <img
            alt=""
            src="https://via.placeholder.com/120.png?text=No+Image"
            style={{ "width": "120px", "height": "120px", "marginRight": "1rem" }}
            className='card-img'
          />
          <div>
            <h5 className='card-title'> {`GIFT ${id} (Nama Barang)`}</h5>
            <div className='card-text'> Point : 10 </div>
            <div className='card-text'> Stock : 10 </div>
          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <div className='d-flex' style={{ flexDirection: "column" }}>
        <span className='fw-bold mb-2'>Point Anda : 10</span>
        <button type='button' className='btn btn-success rounded-pill px-3 fw-bold'>
            Tukar Point
        </button>
        </div>
      </div>
    </>
  )
}

export default gift_detail