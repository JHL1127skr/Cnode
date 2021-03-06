import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import About from '../sideBar/about'

export default class index extends Component {
    render() {
        return (
            <>
                <div className="sideBar">
                    <About />
                </div>
                <div className="panel">
                    <div className="panel_header"></div>
                    <div className="panel_inner"></div>
                </div>

            </>
        )
    }
}
