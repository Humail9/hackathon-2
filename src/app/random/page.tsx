import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Header1 from '../components/header1'

const page = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Header1/>
        <Image
         src={"/img-18.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
         />
         <Image
         src={"/img-19.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
         />
         <Image
         src={"/img-20.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
         />
         <Image
         src={"/img-21.png"}
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
    </div>
  )
}

export default page
