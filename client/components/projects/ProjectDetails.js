import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div className="container section projet-details">
      <div className="card z-depth-0">
        <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem Ipsum</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by the Vicky Rohilla</div>
            <div>29 October, 2018 12:00 PM</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
