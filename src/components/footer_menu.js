import React from 'react'
import { Link } from "react-router-dom";

const footer_menu = () => {
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <div className='fixed-bottom'>
      <div className='footer-menu-wrapper d-flex justify-content-center container-width bg-secondary' style={{ borderRadius: "10px 10px 0px 0px" }}>
        <ul className='list-group list-group-horizontal'>
          <li>
            <Link className='list-group-item text-primary bg-secondary border-left border-right border-0 hover-overlay mx-1 text-center' to='gift'>
              <span className='d-flex justify-content-center'>
                <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z" /></svg>
              </span>
              GIFT
            </Link>
          </li>
          <li>
            <Link className='list-group-item text-primary bg-secondary border-left border-right border-0 hover-overlay mx-1 text-center' to='barcode'>
              <span className='d-flex justify-content-center'>
                <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z" /></svg>
              </span>
              Barcode
            </Link>
          </li>
          <li>
            <Link className='list-group-item text-primary bg-secondary border-left border-right border-0 hover-overlay mx-1 text-center' to='point'>
              <span className='d-flex justify-content-center'>
                <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M16 12C18.76 12 21 9.76 21 7S18.76 2 16 2 11 4.24 11 7 13.24 12 16 12M21.45 17.6C21.06 17.2 20.57 17 20 17H13L10.92 16.27L11.25 15.33L13 16H15.8C16.15 16 16.43 15.86 16.66 15.63S17 15.12 17 14.81C17 14.27 16.74 13.9 16.22 13.69L8.95 11H7V20L14 22L22.03 19C22.04 18.47 21.84 18 21.45 17.6M5 11H.984V22H5V11Z" /></svg>
              </span>
              Point
            </Link>
          </li>
          <li>
            <Link className='list-group-item text-primary bg-secondary border-left border-right border-0 hover-overlay mx-1 text-center' to='profile'>
              <span className='d-flex justify-content-center'>
                <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
              </span>
              Profile
            </Link>
          </li>
          <li>
            <div className='list-group-item text-primary bg-secondary border-left border-right border-0 hover-overlay mx-1 text-center' onClick={refreshPage}>
              <span className='d-flex justify-content-center'>
                <svg fill='currentColor' width="24" height="24" viewBox="0 0 24 24"><path d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z" /></svg>
              </span>
              RELOAD
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default footer_menu