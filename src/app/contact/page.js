import React from 'react'
import ContactSection from '../sections/ContactForm'
import Breadcrumb from '../components/Breadcrumb'

export default function page() {
  return (
    <div className='bg-white dark:bg-white'>
      <Breadcrumb name={'Contact Us'} />
        <ContactSection />
    </div>
  )
}
