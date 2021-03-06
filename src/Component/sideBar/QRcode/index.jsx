import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <div className="sideBar_item">
                <div className="sideBar_header">
                    <div className="col_fade">客户端二维码</div>
                </div>
                <div className="sideBar_inner code">
                    <img src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="" />
                    <br />
                    <a href="https://github.com/soliury/noder-react-native">客户端源码地址</a>
                </div>
            </div>
        )
    }
}

export default index
