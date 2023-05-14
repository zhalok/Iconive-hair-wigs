import React from 'react'
import './Subscription.css'

export default function Subscription() {
  return (
   <>
    <div className='my90 d-flex flex-column'>
      <div className='d-flex flex-column'>
      <h2 className="fw-bold">WANT $ <span className='fs-1'>10</span> OFF ?</h2>
        <p className='text-18 text-theme-gray pt-3 pb-4'>Join us and get the exclusive sales, product launches, wig tips & more directly delivered to your inbox.</p>
      </div>
        <div class="d-flex justify-center mx-auto">
          <input
            class="w-200 me-2 border-top-0 border-start-0 border-end-0 border-bottom border border-secondary"
            type="search"
            placeholder="  Your e-mail address"
            aria-label="Search"
          />
          <button class="btn btnsub  px-3" type="submit">
            Subscribe
          </button>
        </div>
    </div>
   </>
  )
}
