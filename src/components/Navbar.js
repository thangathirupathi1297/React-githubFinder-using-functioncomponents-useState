
import React  from 'react'
import {Link} from 'react-router-dom'
import propType from '../../node_modules/prop-types'

 const Navbar =(props)=>  {
     const {title,icon}= props
     const list=[
         {
             id:1,
             link:'/',
             text:'home'
         },
         {
             id:2,
             link:'/about',
             text:'About'

         }

     ]
    
        return (
            <nav className="navbar navbar-expand-sm bg-dark">
                <a href="/" className="text-danger navbar-brand m-1"><span className={icon}>{title}</span></a>
                  <ul className="navbar nav mr-0 text-danger">
                      {list.map(list =>(<li className="nav-item " key={list.id}>
                      <Link className='nav-link' to={list.link}>{list.text}</Link>
                      </li>)   )}
                      
                  </ul>
            </nav>
        )
    
}
Navbar.defaultprop={
    title:"git-finder",
    icon:" fa fa-github"
}
Navbar.propType={
    title:propType.string.isRequired,
    icon:propType.string.isRequired
}
export default Navbar

