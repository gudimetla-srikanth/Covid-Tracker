import React from 'react'
import { Link } from 'react-router-dom'

export default function ChartandMap() {
  return (
    <div className='pt-5 pl-5 pb-5 pr-5 text-lg'>
      <div>
        <Link to='/linechart'>Covid Cases Chart</Link>
      </div>
      <div>
        <Link to='/map'>Covid Cases Map</Link>
      </div>
    </div>
  )
}


