import React from "react"
import { UndrawAstronaut } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="ui main container">
          <div class="ui stackable two column grid">
            <div class="column">
              <UndrawAstronaut UndrawDashboard primaryColor='#12283a' height='200px' />
            </div>
            <div class="column">
              <h1 className="ui header">About Me</h1>
              <p>A little about me</p>
            </div>
          </div>
        </div>
      )
    
}

export default About