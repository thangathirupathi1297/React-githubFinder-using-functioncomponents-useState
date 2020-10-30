import React from 'react'

const spinner = () => {
    return (
        <div>
            <div className="d-flex spin c0l-12 align-items-center">
  <strong>Loading...</strong>
  <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div>
        </div>
    )
}
export  default spinner