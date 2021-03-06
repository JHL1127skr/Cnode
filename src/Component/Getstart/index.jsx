import React, { Component } from 'react'
import SideBar_log from '../sideBar/login_reg'
import Community from '../sideBar/community'
import QR_code from '../sideBar/QRcode'
export default class index extends Component {
    render() {
        return (
            <>
                <div className="sideBar">
                    <SideBar_log />
                    <Community />
                    <QR_code />
                </div>
                <div className="panel">
                    <div className="panel_header"></div>
                    <div className="panel_inner"></div>
                </div>

            </>
        )
    }
}
