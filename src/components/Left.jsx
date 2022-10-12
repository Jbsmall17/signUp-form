import React from 'react'
import flower from "../images/flowers.jpg"
import odin from "../images/odin.png"
export default function Left() {
  return (
    <article className='left'>
      <img src={flower} />
      <div className='logo-container'>
        <img className="logo" src={odin} />
        <p>ODIN</p>
      </div>
    </article>
  )
}
