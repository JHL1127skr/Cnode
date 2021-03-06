import React, { Component } from 'react'
import './Footer.scss'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="footer">
                <div className="footer_main">
                    <div className="links">
                        <a href="https://cnodejs.org/rss" >RSS</a>
                        &nbsp;|&nbsp;
                        <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
                    </div>
                    <div className="col_fade">
                        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                        <p>服务器搭建在
                            <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                                <img src="https://static2.cnodejs.org/public/images/digitalocean.png" alt="" />
                            </a> ，
                            存储赞助商为
                            <a href="https://www.qiniu.com/?ref=cnode">
                                <img src="https://static2.cnodejs.org/public/images/qiniu.png" alt="" />
                            </a>
                        </p>
                        <p>新手搭建 Node.js 服务器，推荐使用无需备案的
                            <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}
