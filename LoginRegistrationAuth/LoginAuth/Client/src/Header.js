import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                     <Link to='/' class="nav-link">Home</Link>                       
                    </li>
                    <li class="nav-item">
                    <Link to='/login' class="nav-link">Login</Link>                        
                    </li>  
                    <li class="nav-item">
                    <Link to='/register' class="nav-link">Registration</Link>                        
                    </li>              
                </ul>
                
            </div>
            </nav>
    </>
  )
}

export default Header