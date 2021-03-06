import React, { Component } from 'react'
import './TopNav.scss'
import { Link } from 'react-router-dom'
import { indexRouters } from '../../router'


export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="TopNav">
                <div className='TopNav_inner'>
                    <h1 className="logo">
                        <a href="/" title="cNode">cNode</a>
                    </h1>
                    <input type="text" className='search' />
                    <ul className="nav">
                        {
                            indexRouters.map((v, i) => {
                                return (
                                    <li key={i}>
                                        <Link to={v.path} >{v.label} </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div >
        )
    }
}
