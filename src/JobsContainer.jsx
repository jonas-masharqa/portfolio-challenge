import React from 'react'

    const JobsContainer = (props) => {
        let job = props.job
        return (
            <>
            <div class="ui main container">
                <h4 class="ui header">{job.job}</h4>

                <div class="description">
                    {job.role}
                </div>
            </div>
            </>
        )
    }

export default JobsContainer
