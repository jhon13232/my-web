import { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import Logo from '../imagenes/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar =()=>{
  const [isNavShowing,setIsNavShowing]=useState(false);

  return(
    <nav>
      <div className='container nav_container'>
        <Link to="/" className='logo' onClick={()=>setIsNavShowing(false)}>
          <img  src={Logo} alt='Nav Logo'/>
        </Link>
        <ul className={`nav_links ${isNavShowing ?'show_nav': 'hide_Nav' }`}>
          {
            links.map(({name,path},index)=>{
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive})=>isActive ? 'active-nav' : ' '}
                  onClick={() => setIsNavShowing(prev =>!prev)}> {name}</NavLink>
                </li>
              )
            })
          } 
        </ul> 
        <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev =>!prev)}>
          {
            isNavShowing ? <MdOutlineClose />: <GoThreeBars/>                                                    
          }

        </button>
      </div>
    </nav>
  )
    
}

export default Navbar ;