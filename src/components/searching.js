import React, { useState } from 'react'
import Search from './Search'

function  Searching(props)  {
   
        const [text,setText]=useState('')
    
   const onSubmit =(e) =>
    {
        e.preventDefault();
        if(text === ""){
         props.setAlert('enter somthing.....')

        }else
        {
      props.searchUsers(text)
           setText('')
        }
    }
   const onChange =(e) =>
    {
        setText(e.target.value)
        
    }
    
  
        const {showClear,clearUser}=props
        return (
            <div>
               
               <form onSubmit={onSubmit} className="container-fluied">
                <input style={{width:'100%',display:'block',padding:'14px'}} 
                type="text" placeholder="search users..."
                 onChange={onChange} value={text} />
                <input style={{display:'block',marginLeft:'auto',marginRight:'auto'}} 
                type="Submit" value="Search" className="btn btn-dark btn-block" /> 
            </form>
            {showClear && (<button className=" m-2 btn btn-light btn-block" onClick={clearUser}>Clear</button>)}
           
            </div>
        )
    }


export default Searching
