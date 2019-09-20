import React, { Component } from "react"
import axios from "axios";
import EducationsContainer from "./EducationsContainer"
import JobsContainer from "./JobsContainer"

class Cv extends Component {
    constructor() {
        super();
        this.state = {
            jobs: [],
            education: []
        };
    }


    componentDidMount(){
    this.getJob()
    this.getEducation()
    }



    getJob() {
        axios.get('./src/data/Jobs.json')
        .then(response => {
            this.setState({
                jobs: response.data
            })
        })
    }


    getEducation() {
        axios.get('./src/data/Education.json')
        .then(response => {
            this.setState({
                education: response.data
            })
        })
    }




    render() {
        const jobs = this.state.jobs
        const educations = this.state.education
        let educationsList
        let jobsList

        if (jobs.length > 0) {
            jobsList = jobs.map(job => {
                return (
                    <div key={job.id}>
                        <JobsContainer job={job}/>
                    </div>
                )
            })
        }


        if (educations.length > 0) {
            educationsList = educations.map(education => {
                return(
                    <div key={education.id}>
                        <EducationsContainer education={education}/>
                    </div>
                )
            })
        }





        return (
                <div className="ui main container">
                    <div className="ui stackable two column grid">
                        <div className="column" id="left">
                        <h1 className="ui header">My Resume</h1>
                        <img src="jonascv.jpeg">
                        </img>
                        <h3 className="ui header">Work experiences</h3>
                        {educationsList}
                        <h3 className="ui header">Education</h3>
                        {jobsList}
                        </div>
                        <div className="column">

                        </div>
                    </div>  
                </div>
        )






    }





}


export default Cv