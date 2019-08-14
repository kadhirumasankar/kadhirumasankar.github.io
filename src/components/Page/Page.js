import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import './Page.css';
import PageHeader from './PageHeader/PageHeader'
import Navbar from './Navbar/Navbar'
import PageBody from './PageBody/PageBody'

function Page() {
  return(
    <Router>
      <div id="page-container">
        <PageHeader />
        <Navbar />
        <PageBody />
      </div>
    </Router>
  )
}

export default Page
