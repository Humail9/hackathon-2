import '../../../public/style/home.css'
import Image from 'next/image'
import React from 'react'
import Navbar from '../components/navbar'
import Header1 from '../components/header1'

const shop = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Header1/>
           <Image
            src={"/img-12.png"}
            alt={'img'}
            width={1000}
            height={1000}
            objectFit='cover'
            className='larImg w-full'
            />

         <Image
            src={"/img-13.png"}
            alt={'img'}
            width={1000}
            height={1000}
            objectFit='cover'
            className='larImg w-full'
            />

          <Image
            src={"/img-14.png"}
            alt={'img'}
            width={1000}
            height={1000}
            objectFit='cover'
            className='larImg w-full'
            />

          <Image
            src={"/img-15.png"}
            alt={'img'}
            width={1000}
            height={1000}
            objectFit='cover'
            className='larImg w-full'
            />

         <Image
            src={"/img-16.png"}
            alt={'img'}
            width={1000}
            height={1000}
            objectFit='cover'
            className='larImg w-full'
            />

          <Image
            src={"/img-17.png"}
            alt={'img'}
            width={1000}
            height={1000}
            objectFit='cover'
            className='larImg w-full'
            />
    </div>
  )
}

export default shop
