import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Header1 from '../components/header1'

const contact = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Header1/>
      <Image
         src={"/img-37.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
         />
         <Image
         src={"/img-38.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
         />
         <Image
         src={"/img-39.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
         />
    </div>
  )
}

export default contact
