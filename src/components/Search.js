// import React from 'react'


// const Search = (props) => {
// const    {onChange,onSubmit}= props
//     return (
//         <div>
//             <form onSubmit={onSubmit} className="container-fluied">
//                 <input style={{width:'100%',display:'block',padding:'14px'}} type="text" placeholder="search users..." value={onChange} />
//                 <input style={{display:'block',marginLeft:'auto',marginRight:'auto'}} type="submit" value="Search" className="btn btn-dark" /> 
//             </form>
//         </div>
//     )
// }

// export default Search

import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:'',
             dis:'',
             divstyle:null
        }
    }
    nullify =(a) =>{
        this.setState({divstyle:{a}})
        setTimeout(()=> this.setState({divstyle:{}}),2000)
    }
    changeCon(e)
    {
          this.setState({content:e.target.value})
    }

    onSub(e)
    {
        e.preventDefault();
        if(this.state.content === "")
        {
            this.nullify("sorry input field is empty"  )
            this.setState({dis:""})
            }
            else
              {
                  
              this.setState({dis:this.state.content})
              } 
             }
             
            
          
        
    
   
    
    render() {
const {divstyle,content,dis}=this.state
        return (
            <>
                {divstyle!==null && (<div className='bg-dark text-warning'>{divstyle.a}</div>)}
                <form onSubmit={this.onSub.bind(this)}>
                <input type="text" onChange={this.changeCon.bind(this)}/>
              <button type='submit'>hi</button>
                </form>
                        <div>{dis}</div>
              
          </>
        );
    }
}


export default Search
