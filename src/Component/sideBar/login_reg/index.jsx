import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class index extends Component {
    render() {
        return (
            <div>
                <div className="sideBar_item">
                    <div className="sideBar_inner">
                        <p>CNode：Node.js专业中文社区</p>
                        <div>
                            您可以 <Link to="/login">登录</Link> 或 <Link to="/register">注册</Link> , 也可以 <Link to="/register">
                                <span className="span-info"> 通过 GitHub 登录 </span>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default index
