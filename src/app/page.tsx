import React from 'react'
import '../../public/style/home.css'
import Image from 'next/image'
import Navbar from './components/navbar'
import Header from './components/header'
import Header1 from './components/header1'

const page = () => {
  return (
    <main>
          
     <Header/>
     <Header1/>
    <div className='imgwrapper'>
      <Image
      src={"/full.png"}
      alt={'img'}
      width={1000}
      height={60}
      className='largeImg  w-full '
      />
    </div>

    <div className='box2'>
      <div className='hadding'>
      <h3>{`EDITOR’S PICK`}</h3>
      <p>Problems trying to resolve the conflict between </p>
      </div>
      <Image
      src={"/img-1.png"}
      alt={'img'}
       height={1000}
       width={1000}
      className='centerImg'
        />
    </div>

    <div className='box3'>
    <Image
      src={"/img-11.png"}
      alt={'img'}
      width={1000}
      height={1000}
    
      className='lar-5Img'
      />
    </div>

    <div className='box4'>
    <Image
      src={"/img-7.png"}
      alt={'img'}
      width={1000}
      height={1000}
      
      className='larImg'
      />

<Image
      src={"/img-8.png"}
      alt={'img'}
      width={1000}
      height={1000}
      
      className='lar-2Img'
      />

<Image
      src={"/img-9.png"}
      alt={'img'}
      width={1000}
      height={1000}
      className='lar-3Img'
      />
    </div>
    </main>
      
  )
}

export default page

