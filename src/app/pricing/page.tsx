import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Header1 from '../components/header1'

const pricing = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Header1/>
      <Image
         src={"/img-30.jpg"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
          />
          <Image
         src={"/img-31.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
          />
          <Image
         src={"/img-32.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
          />
           <Image
         src={"/img-33.png"}
         alt={'img'}
         width={1000}
         height={1000}
         objectFit='cover'
         className='larImg w-full'
          />
          
         
    </div>
  )
}

export default pricing
