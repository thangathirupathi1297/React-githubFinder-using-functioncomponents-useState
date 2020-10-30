import React from 'react'

const Alert = ({alert}) => {
    return (
    alert !== null && (<div className='bg-muted text-danger' >{alert.msg}</div>)
    )
}

export default Alert
