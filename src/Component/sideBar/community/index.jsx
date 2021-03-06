import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <div className="sideBar_item">
                <div className="sideBar_header">
                    <span className="col_fade">
                        友情社区
                    </span>
                </div>
                <div className="sideBar_inner">
                    <ol className="friendship-community">
                        <li><img src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="" /></li>
                        <div className="sep10"></div>
                        <li><img src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="" /></li>
                        <div className="sep10"></div>
                        <li><img src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="" /></li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default index
