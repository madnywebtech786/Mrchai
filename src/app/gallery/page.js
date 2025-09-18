import React from 'react'
import GallerySection from '../sections/Gallery'
import Breadcrumb from '../components/Breadcrumb'

export default function page() {
  return (
    <div className='bg-white dark:bg-white'>
      <Breadcrumb name={'Our Gallery'} />
        <GallerySection />
    </div>
  )
}
