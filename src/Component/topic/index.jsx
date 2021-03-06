import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { listByIdAPI, GetUserByName } from '../../server/topics'
import { setType, setTime } from '../../utils/topics'
import Reply from '../sideBar/reply'
import './topic.scss'
export class Topic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailData: '',
            userDetail: '',
            list: [],
            replies: []
        }
    }
    componentDidMount() {

        listByIdAPI(this.props.match.params.id)
            .then(res => {
                console.log(res.data.replies);
                if (res.success) {
                    res.data.time = setTime(res.data.create_at)
                    res.data.label = setType(res.data.top, res.data.good, res.data.tab)
                    GetUserByName(res.data.author.loginname)
                        .then(result => {
                            if (result.success) {
                                this.setState({
                                    userDetail: result.data,
                                    list: result.data.recent_topics,
                                })

                            }
                        })
                    res.data.replies.forEach(v => {
                        v.time = setTime(v.create_at)

                    })
                    this.setState({
                        detailData: res.data,
                        name: res.data.author.loginname,
                        imgurl: res.data.author.avatar_url,
                        replies: res.data.replies
                    })
                }
            })
    }
    render() {
        const { detailData, userDetail, list, replies } = this.state
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
                                    pathname: '/UserDetails/' + userDetail.loginname
                                }}><img src={userDetail.avatar_url} alt="" /></Link>
                                <Link to={{
                                    pathname: '/UserDetails/' + userDetail.loginname
                                }}><span className="user_name">{userDetail.loginname}</span></Link>
                                <div className="board_clearfix">
                                    积分: {userDetail.score}
                                </div>
                                <span className="signature"></span>
                            </div>
                        </div>
                    </div>

                    <div className="sideBar_item">
                        <div className="sideBar_header">
                            <span className="col_fade">作者其它话题</span>
                        </div>
                        <div className="sideBar_inner">
                            <ul className="unstyled">
                                {list.reverse().splice(0, 5).map(v => {
                                    return <li key={v.id}> <a href={v.author.avatar_url}>{v.title}</a> </li>
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <Reply />
                </div>


                <div className="panel">
                    <div className="panel_topic_header">
                        <span className="topic_full_title">
                            {detailData.label === '置顶' || detailData.label === '精品' ? <span className="put_top">{detailData.label}</span> : null}
                            &nbsp;
                            {detailData.title}
                        </span>
                        <div className="changes">
                            <span>发布于 {detailData.time}</span>
                            <span>作者  {userDetail.loginname}</span>
                            <span>{detailData.visit_count} 次浏览</span>
                            <span>来自 分享</span>
                        </div>
                    </div>
                    <div className="panel_inner inner_topic" dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
                </div>

                {/* 评论区域 */}
                <div className="panel">
                    <div className="panelItem">
                        <div className="panel_header panel_header_user">
                            <span className="col_fade">{replies.length} 回复</span>
                        </div>


                        {replies.map((v, i) => {
                            return <div className="replies" key={v.id}>
                                <div className="author_content">
                                    <Link to={{ pathname: '/UserDetails/' + v.author.loginname }} >
                                        <img src={v.author.avatar_url} alt="" />
                                    </Link>
                                    <div className="user_info">
                                        <Link to='/' className="dark reply_author">{v.author.loginname}</Link>
                                        <Link to="/" className="reply_time">{1}楼•{v.time}</Link>
                                    </div>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: v.content }} ></div>
                            </div>
                        })}


                    </div>
                </div>
            </>
        )
    }
}

export default Topic
