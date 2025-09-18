import React from 'react'
import AboutSection from '../sections/About'
import Breadcrumb from '../components/Breadcrumb'

export default function page() {
  return (
    <div className='bg-white dark:bg-white'>
      <Breadcrumb name={'About Us'} />
        <AboutSection />
    </div>
  )
}
