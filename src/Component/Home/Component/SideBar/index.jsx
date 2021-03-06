import React, { Component } from 'react'
import './SideBar.scss'
import SideBar_log from '../../../sideBar/login_reg'
import Reply from '../../../sideBar/reply'
import Rank from '../../../sideBar/rank'
import Community from '../../../sideBar/community'
import QR_code from '../../../sideBar/QRcode'
export default class index extends Component {
    render() {
        return (
            <div className="sideBar">
                <SideBar_log />
                <Reply />
                <Rank />
                <Community />
                <QR_code />
            </div>
        )
    }
}
