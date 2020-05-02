import PropTypes from 'prop-types'
import React from 'react'

import './Banner.css'


const Banner = ({ banner, title, description }) => (
    <div className={`head`}>
        <h1 class={"auto"}>{title}</h1>
        <p class={"auto"}>
            <em>{description}</em>
        </p>
        <div class={"btn-toolbar"}></div>
    </div>

)

export default Banner