import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar'
import Users from './components/Users'
import User from './components/User'
import Search from './components/Search'
import Searching from './components/searching'
import About from './components/pages/About'
import axios from 'axios'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert  from './components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function  App() 
{
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState({});
    const [repos,setRepos]=useState([]);
    const [loading,setLoading]=useState(false);
    const [alert,setAlert]=useState(null) ; 
     
    

  
  // async componentDidMount(){
   

  //   this.setState({loading:true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   this.setState({users:res.data,loading:false})    
  // }
  //Git search
  const searchUser = async text =>{
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    setUsers(res.data.items)
    setLoading(false)
   
  }
  //get single user profile
  const getUser = async login =>
  {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
    setUser(res.data)
    setLoading(false)
  }
  ///Get user repo

  const getUserrepo = async login =>
  {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=all&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
   setRepos(res.data)
    setLoading(false)
  }
  //clear
  const clearUser=() =>setUsers([])
  //alert
  const setAlerts =(msg) =>{
    setAlert({msg})
    setTimeout(() => setAlert(null),2000)
  }


  
   
  
  return (

    <Router>
    <div className="App">
      {/* <Search /> */}
    <Navbar icon=" fa fa-github" title="Git-Finder"  />
    
    <div className="container">


      <Switch>
<Route  exact path="/" render={() =>
<>
<Alert className=' bg-warning' alert={alert} ></Alert>
<Searching searchUsers={searchUser} 
        clearUser={clearUser}  
        showClear={users.length > 0 ? true : false} 
        setAlert={setAlerts }
        />
      <Users loading={loading}
       users={users} />
  

</>
} />
<Route exact path="/about" component={About} />
<Route exact path="/user/:login" render={(props) =>
( <User {...props} getUser={getUser}
   user={user} loading={loading}
   getUserrepo={getUserrepo} repos={repos} />)

}/>



      </Switch>
   
   
      
    
     
     
        
        </div>  
      
      
     
     
     
     
    </div>
    </Router>
  );
}


export default App;
