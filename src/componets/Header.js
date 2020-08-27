import React from 'react'
import BtnWhasapp from '../componets/BtnWhatsapp'
import Logo from '../componets/Logo'

const Header = () => {
  return (
    <div className='p-4
                    bg-indigo-800
                    sm:flex
                    justify-between
                    items-center'
    >
      <Logo />
      <BtnWhasapp />
    </div>
  )
}

export default Header
