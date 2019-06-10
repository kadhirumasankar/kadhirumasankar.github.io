import React from 'react';
import './Page.css';
import PageHeader from './PageHeader/PageHeader'
import Navbar from './Navbar/Navbar'
import PageBody from './PageBody/PageBody'

function Page() {
  return(
    <div id="page-container">
      <PageHeader />
      <Navbar />
      <PageBody />
    </div>
  )
}

export default Page
