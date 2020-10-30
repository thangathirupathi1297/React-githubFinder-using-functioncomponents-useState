import React, { Component } from 'react'

class todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[],
             currentitems:{
                 text:'',
                 key:''
             }
        }
        this.changenam=this.changenam.bind(this)

    this.additems=this.additems.bind(this)
    }
   
 changenam(e)
 {
  this.setState({
      currentitems:{
          text:e.target.value,
          key:Date.now()
      }
     
  }) 
 }
additems(e)
{
    e.preventDefault()
    const newitem=this.state.currentitems;
    if(newitem.text !=="")
    {
        const item=[...this.state.item,newitem];
        this.setState({
            items:item,
            currentitems:{
                text:'',
                key:''
            }
        
        })
       
    }
   
   
}

    render() {
        
        return (
            <div className="min-div">
               <form onSubmit={this.additems}>
                <input type='text' placeholder="Enter text" value={this.state.currentitems.text} onChange={this.changenam}/>
                <button type='submit'></button>
                
                
                </form>
                
            </div>
        )
    }
}

export default todo
