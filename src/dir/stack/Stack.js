import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// import Home from '../pages/Home'
import Policy from '../pages/Policy'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import LeagueStanding from '../pages/LeagueStanding'

import DMCA from '../pages/DMCA'
import Disclaimer from '../pages/Disclaimer'
import Matches from '../pages/Matches'
import Preview from '../pages/Preview'
import Index from '../pages/Index'
import { Maintenance } from '../component/Maintenance'
import Home from '../pages/Home'

const Stack = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Index />} /> */}
          <Route index element={<Home />} />
          {/* <Route index element={<Maintenance />} /> */}
          <Route path="/policy" element={<Policy />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/league-standing" element={<LeagueStanding />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/Disclaimer" element={<Disclaimer />} />
          <Route path="/match-details/:id/:link" element={<Preview />} />
          <Route path="/live-streaming" element={<Matches />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default Stack
