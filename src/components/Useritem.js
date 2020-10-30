import React from 'react'
import {Link} from 'react-router-dom'
// import {CardGroup,Card} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
const Useritem = props => {
   
   
        const {login,avatar_url,html_url} = props.user;
        return (
 
<>

  <Card>
    <Card.Img style={{width:'75%',marginLeft:'auto',marginRight:'auto'}}variant="top"className='rounded-circle' src={avatar_url} />
    <Card.Body>
        <Card.Title>{login}</Card.Title>
      
    </Card.Body>
    <Card.Footer>
    <Link to={ `/user/${login}`} className="btn btn-primary">More</Link>
    </Card.Footer>
  </Card>


</>
     
        
            
        )
   
}

export default Useritem
