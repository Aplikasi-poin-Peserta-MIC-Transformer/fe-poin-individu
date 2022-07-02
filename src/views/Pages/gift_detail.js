/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useParams } from 'react-router-dom'
import API from '../../api'

const gift_detail = () => {
  const { id } = useParams()

  const [gift, setGift] = React.useState({})

  React.useEffect(() => {
    API.getGiftId(id).then(res => {
      setGift(res)
    }).catch(err => {
      console.log(err)
    })
  }, [id])

  return (
    <>
      <div className='card mb-3'>
        <div className='card-body d-flex justify-content-start'>
          <img
            alt=""
            src={gift?.gambar || "https://via.placeholder.com/120.png?text=No+Image"}
            style={{ "width": "120px", "height": "120px", "marginRight": "1rem" }}
            className='card-img'
          />
          <div>
            <h5 className='card-title'> {gift?.nama}</h5>
            <div className='card-text'> Point : {gift?.harga} </div>
            <div className='card-text'> Stock : {gift?.stok} </div>
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