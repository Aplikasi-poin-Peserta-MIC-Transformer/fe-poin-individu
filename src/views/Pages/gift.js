import React from 'react'
import { useNavigate } from "react-router-dom"
import API from "../../api"

const Klasmen = () => {
  const navigate = useNavigate()

  const [giftData, setGiftData] = React.useState([])

  React.useEffect(() => {
    API.getGifts().then(res => {
      setGiftData(res)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <>
      {giftData?.map((gift, idx) => (
        <div key={idx} className='card mb-3'>
          <div className='card-body d-flex justify-content-start'>
            <img
              alt=""
              src={gift.gambar || "https://via.placeholder.com/120.png?text=No+Image"}
              style={{ "width": "120px", "height": "120px", "marginRight": "1rem" }}
              referrerPolicy="no-referrer"
              className='card-img'
            />
            <div>
              <h5 className='card-title'> {gift?.nama}</h5>
              <div className='card-text'> Point : {gift?.harga} </div>
              <div className='card-text'> Stock : {gift?.stok} </div>
              <button
                type='button'
                className='btn btn-warning rounded-pill mt-2 fw-bold'
                onClick={() => navigate(`/gift/${gift.id}`, { replace: true })}
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