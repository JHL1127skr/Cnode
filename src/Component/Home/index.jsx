import React, { Component } from 'react'
import Panel from './Component/Panel'
import SideBar from './Component/SideBar'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <>
                <SideBar />
                <Panel />
            </>
        )
    }
}
