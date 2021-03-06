import React, { Component } from 'react'

export class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>123</h1>
            </div>
        )
    }
}

export default Topic
