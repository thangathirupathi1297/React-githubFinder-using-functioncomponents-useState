import React from 'react'

const repos = ({repo}) => {
    return  repo.map(repo =><div className="card m-1 p-2" key={repo.id}> 
    
    <a className="text-success" href={repo.html_url}>{repo.name}</a>
           
        </div> )
        
 
}

export default repos
