import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <div className="sideBar_item">
                <div className="sideBar_header">
                    <span className="col_fade">
                        关于
                    </span>
                </div>
                <div className="sideBar_inner">
                    <p>CNode：Node.js专业中文社区</p>
                    <p>在这里你可以：</p>
                    <ul className="list">
                        <li>向别人提出你遇到的问题</li>
                        <li>帮助遇到问题的人</li>
                        <li>分享自己的知识</li>
                        <li>和其它人一起进步</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default index
