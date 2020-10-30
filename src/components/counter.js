import React, { Component } from 'react'

 class counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            count:1 
         }
         this.increment=this.increment.bind(this)
         this.decrement=this.decrement.bind(this)
         this.reset=this.reset.bind(this)
        
     }
     increment()
     {
         this.setState({
             count: this.state.count +1
         })
     }
     decrement()
     {
         if (this.state.count <= 0) {
             this.setState({
                 count:0
             })
            }
             else
             {
                 this.setState({
                     count:this.state.count -1
                 })
             }
         }
     
   reset()
   {
       this.setState({
           count:0
       })
   }
     
    

    render() {
        return (
            <div>
                
                <button className="bg-warning ,text-dark" onClick={this.increment}>increment</button>
                <span className={this.state.count === 0 ? "text-dark mr-3 ml-3 badge-muted" : "text-danger mr-3 ml-3 badge-muted"}>{this.state.count}</span>
                <button className="bg-success ,text-dark" onClick={this.decrement}>decrement</button>
                <button className="bg-danger ,text-dark" onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default counter
