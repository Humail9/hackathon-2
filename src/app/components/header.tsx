import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <div  className= "ing">
      <Image
        src={"/navbar-dark.png"}
        alt={'img'}
        width={1000}
        height={1000}
        className='larImg w-full'
        />
    </div>
  )
}

export default Header
