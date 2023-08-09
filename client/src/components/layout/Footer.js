import React from 'react'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <h4 className='text-center'><img style={{height:"60px", width:"60px"}} src={logo} alt="Logo" /></h4>
        <h4 className='text-center' style={{color:"black"}}>All Right Reserved &copy; 2023 IllusionWave</h4>
        <h4 className='text-center'><NavLink to='/policy'>Privacy and Policy</NavLink></h4>
        <h4 className='text-center' style={{color:"black"}}>CONTACT US FOR ANY SUPPORT</h4>
        <h4 className='text-center' style={{color:"black"}}>Phone:8114427622 | Email:jainharish3944@gmail.com</h4>
    </div>
  )
}

export default Footer