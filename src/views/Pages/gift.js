import React from 'react'
import { useNavigate } from "react-router-dom"

const Klasmen = () => {
  const navigate = useNavigate()
  return (
    <>
      {Array.from(Array(15).keys()).map((idx) => (
        <div key={idx} className='card mb-3'>
          <div className='card-body d-flex justify-content-start'>
            <img
              alt=""
              src="https://via.placeholder.com/120.png?text=No+Image"
              style={{ "width": "120px", "height": "120px", "marginRight": "1rem" }}
              className='card-img'
            />
            <div>
              <h5 className='card-title'> {`GIFT ${idx+1} (Nama Barang)`}</h5>
              <div className='card-text'> Point : 10 </div>
              <div className='card-text'> Stock : 10 </div>
              <button 
                type='button' 
                className='btn btn-warning rounded-pill mt-2 fw-bold'
                onClick={() => navigate(`/gift/${idx+1}`, { replace: true })}
              > 
              GET GIFT 
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Klasmen