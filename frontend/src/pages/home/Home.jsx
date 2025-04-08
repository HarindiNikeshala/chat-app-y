import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
      <Sidebar />
      {/* <MessageContainer/> */}
    </div>
  )
}

export default Home