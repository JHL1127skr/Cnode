import React, { Component } from 'react'
import { GetUserByName } from '../../server/topics'
import { Link } from 'react-router-dom'
import QRcode from '../sideBar/QRcode'
import Community from '../sideBar/community'
import { listByIdAPI } from '../../server/topics'
import { setTime, setType } from '../../utils/topics'
import './User.scss'

export class UserDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: '',
            recent_topics: [],
            recent_replies: []
        }
    }
    componentDidMount() {
        let newRecent_topics = []
        let newRecent_replies = []
        GetUserByName(this.props.match.params.id)
            .then(res => {

                if (res.success) {
                    // console.log(res.data.recent_replies);
                    // 最近参与的话题 数据获取
                    res.data.recent_replies.forEach(v => {
                        if (res.data.recent_replies.length >= 5) {
                            listByIdAPI(v.id)
                                .then(res => {
                                    res.data.time = setTime(res.data.last_reply_at)
                                    res.data.label = setType(res.data.top, res.data.good, res.data.tab)
                                    newRecent_replies.push(res.data)
                                    if (newRecent_replies.length === 5) {
                                        this.setState({
                                            recent_replies: newRecent_replies
                                        })
                                    }
                                })
                        } else {
                            let leng = res.data.recent_replies.length
                            listByIdAPI(v.id)
                                .then(res => {
                                    res.data.time = setTime(res.data.last_reply_at)
                                    res.data.label = setType(res.data.top, res.data.good, res.data.tab)
                                    newRecent_replies.push(res.data)
                                    if (newRecent_replies.length === leng) {
                                        this.setState({
                                            recent_replies: newRecent_replies
                                        })
                                    }
                                })
                        }

                    })
                    // 最近创建的话题 数据获取
                    res.data.recent_topics.splice(0, 5).forEach(v => {
                        if (res.data.recent_topics.length >= 5) {
                            listByIdAPI(v.id)
                                .then(res => {
                                    res.data.time = setTime(res.data.last_reply_at)
                                    res.data.label = setType(res.data.top, res.data.good, res.data.tab)
                                    newRecent_topics.push(res.data)
                                    if (newRecent_topics.length === 5) {
                                        this.setState({
                                            recent_topics: newRecent_topics
                                        })
                                    }
                                })
                        } else {
                            let leng = res.data.recent_topics.length
                            listByIdAPI(v.id)
                                .then(res => {
                                    res.data.time = setTime(res.data.last_reply_at)
                                    res.data.label = setType(res.data.top, res.data.good, res.data.tab)
                                    newRecent_topics.push(res.data)
                                    if (newRecent_topics.length === leng) {
                                        this.setState({
                                            recent_topics: newRecent_topics
                                        })
                                    }
                                })
                        }

                    })
                    res.data.createTime = setTime(res.data.create_at)
                    this.setState({
                        details: res.data,
                    })
                }
            })
    }
    render() {
        const { details, recent_topics, recent_replies } = this.state
        return (
            <>
                <div className="sideBar">
                    <div className="sideBar_item">
                        <div className="sideBar_header">
                            <span className="col_fade">作者</span>
                        </div>
                        <div className="sideBar_inner">
                            <div className="user_card">
                                <Link to={{
                                    pathname: '/UserDetails/' + details.loginname
                                }}><img src={details.avatar_url} alt="" /></Link>
                                <Link to={{
                                    pathname: '/UserDetails/' + details.loginname
                                }}><span className="user_name">{details.loginname}</span></Link>
                                <div className="board_clearfix">
                                    积分: {details.score}
                                </div>
                                <span className="signature"></span>
                            </div>
                        </div>
                    </div>
                    <Community />
                    <QRcode />

                </div>
                {/* 用户信息 */}
                <div className="panel">
                    <div className="panel_header ">
                        <ul className="breadcrumb">
                            <li>
                                <Link to="/">主页</Link >
                                <span className="divider"> / </span>
                            </li>
                        </ul>
                    </div>
                    <div className="panel_inner userinfo">
                        <img src={details.avatar_url} alt="" />
                        <Link to="/" className="user_name">{details.loginname}</Link>
                        <p className="col_fade createTime">注册时间 {details.createTime}</p>
                    </div>
                </div>

                {/* 最近创建的话题 */}
                <div className="panel">
                    <div className="panel_header panel_header_user">
                        <span className="col_fade">最近创建的话题</span>
                    </div>
                    <div className="panel_inner ">
                        <div className="topic_list">
                            {recent_topics.length > 0 ? (
                                recent_topics.map(v => {
                                    return (
                                        <div className="cell" key={v.id} >
                                            <Link to={{ pathname: '/UserDetails/' + v.author.loginname }} className="user_avatar">
                                                <img src={v.author.avatar_url} title={v.author.loginname} />
                                            </Link>
                                            <span className="reply_count">
                                                <span>{v.reply_count}</span>
                                                <span>/</span>
                                                <span>{v.visit_count}</span>
                                            </span>
                                            <Link to={{ pathname: '/topic/' + v.id, }} className="last_time" >{v.time}</Link>
                                            <div className="topic_title_wrapper">
                                                {v.label === '精品' || v.label === '置顶' ? <span className={v.label === '置顶' || v.label === '精品' ? "put_top" : 'put_top about'}>{v.label}</span> : <></>}
                                                <Link to={{
                                                    pathname: '/topic/' + v.id,
                                                }} className="  topic_title " id='blue' title={v.title}>   {v.title}</Link>

                                            </div>
                                        </div>
                                    )
                                })) : <div className="cell">无内容</div>}
                            {recent_topics.length > 0 ? < div className="cell more">
                                <span>查看等多&gt;&gt;</span>
                            </div> : null}
                        </div>
                    </div>
                </div>
                {/* 最近参与的话题 */}
                <div className="panel">
                    <div className="panel_header panel_header_user">
                        <span className="col_fade">最近参与的话题</span>
                    </div>
                    <div className="panel_inner">
                        <div className="topic_list">
                            {recent_topics.length > 0 ? recent_replies.map(v => {
                                return (
                                    <div className="cell" key={v.id} >
                                        <Link to={{ pathname: '/UserDetails/' + v.author.loginname }} className="user_avatar">
                                            <img src={v.author.avatar_url} title={v.author.loginname} />
                                        </Link>
                                        <span className="reply_count">
                                            <span>{v.reply_count}</span>
                                            <span>/</span>
                                            <span>{v.visit_count}</span>
                                        </span>
                                        <Link to={{ pathname: '/topic/' + v.id, }} className="last_time" >{v.time}</Link>
                                        <div className="topic_title_wrapper">
                                            {v.label === '精品' || v.label === '置顶' ? <span className={v.label === '置顶' || v.label === '精品' ? "put_top" : 'put_top about'}>{v.label}</span> : <></>}
                                            <Link to={{
                                                pathname: '/topic/' + v.id,
                                            }} className="topic_title" id='blue' title={v.title}>   {v.title}</Link>

                                        </div>
                                    </div>
                                )
                            }) : <div className="cell">无内容</div>}
                            {recent_topics.length > 0 ? <div className="cell more">
                                <span>查看等多&gt;&gt;</span>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UserDetails
