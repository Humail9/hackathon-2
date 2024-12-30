import React from 'react'
import Image from 'next/image'
// import '../../../public/style/header.css'

const Navbar = () => {
  return (
    <div>
      <Image
       src={"/dark.png"}
       alt={'img'}
       width={1000}
       height={1000}
       className='larImg w-full'
       />
    </div>
  )
}

export default Navbar
