import React from 'react'

    const EducationsContainer = (props) => {
        let education = props.education
        return (
            <>
            <div class="ui main container">
                <h4 class="ui header">{education.school}</h4>

                <div class="description">
                    {education.education}
                </div>
            </div>
            </>
        )
    }

export default EducationsContainer
