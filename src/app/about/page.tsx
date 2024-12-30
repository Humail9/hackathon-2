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
         src={"/img-22.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
        />
        <Image
         src={"/img-23.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
        />
        <Image
         src={"/img-24.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
        />
        <Image
         src={"/img-25.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
        />
        <Image
         src={"/img-26.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
        />
        <Image
         src={"/img-27.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
        />
        <Image
         src={"/img-28.png"}
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
