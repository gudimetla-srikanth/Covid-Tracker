import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CreateContactPage from './components/CreateContactPage'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store/Store'
import AllContacts from './components/AllContacts'
import ContactView from './components/ContactView'
import EditContact from './components/EditContact'
import ChartandMap from './components/ChartandMap'
import LeafLet from './components/LeafLet'
import LineChart from './components/LineChart'
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <div className='flex'>
            <div className=' w-60  bg-slate-100' >
              <Sidebar />
            </div>
            <div className='grow  bg-slate-200'>
              <Routes>
                <Route index element={<Home />} />
                <Route path='/createpage' element={<CreateContactPage />} />
                <Route path='/contacts' element={<AllContacts />} />
                <Route path='/contactview' element={<ContactView />} />
                <Route path='/editcontact' element={<EditContact />} />
                <Route path='/chartandmap' element={<ChartandMap />} />
                <Route path='/linechart' element={<LineChart />} />
                <Route path='/map' element={<LeafLet />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

