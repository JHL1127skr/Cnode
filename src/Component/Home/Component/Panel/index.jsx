import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { listByPageAPI } from '../../../../server/topics'
import { setType, setTime } from '../../../../utils/topics'
import './panel.scss'
const tab = [
    {
        label: '全部',
        type: 'all',
    },
    {
        label: '精华',
        type: 'good',
    },
    {
        label: '分享',
        type: 'share',
    },
    {
        label: '问答',
        type: 'ask',
    },
    {
        label: '招聘',
        type: 'job',
    },
    {
        label: '客户端测试',
        type: 'dev',
    },
]
class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            type: 'all',
            page: '1'
        }

    }
    componentDidMount() {
        listByPageAPI({ page: this.state.page, type: this.state.type })
            .then(({ data }) => {
                data.forEach(item => {
                    item.time = setTime(item.last_reply_at)
                    item.label = setType(item.top, item.good, item.tab)
                    this.setState({
                        list: data
                    })
                });
            })
    }
    x = () => {
        this.props.history.push('/user')
    }
    render() {
        return (
            <div className="panel">
                <div className="panel_header ">
                    <ul>
                        {tab.map((v, i) => {
                            return <li key={i} onClick={() => {
                                this.setState({
                                    type: v.type
                                })
                            }}
                                className={this.state.type === v.type ? 'topic_tab current_tab' : 'topic_tab'}
                            >{v.label}</li>
                        })}
                    </ul>
                </div>
                <div className="panel_inner">
                    <div className="topic_list">
                        {this.state.list.map(v => {
                            return (
                                <div className="cell" key={v.id} >
                                    <a href="" className="user_avatar">
                                        <img src={v.author.avatar_url} title={v.author.loginname} />
                                    </a>
                                    <span className="reply_count">
                                        <span>{v.reply_count}</span>
                                        <span>/</span>
                                        <span>{v.visit_count}</span>
                                    </span>
                                    <a href="#" className="last_time" onClick={this.x}>{v.time}</a>
                                    <div className="topic_title_wrapper">
                                        {v.label !== '' ? <span className={v.label == '置顶' || v.label == '精品' ? "put_top" : 'put_top about'}>{v.label}</span> : <></>}
                                        <a href="" className="topic_title" title={v.title}>
                                            {v.title} </a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="pagination"></div>
                </div>
            </div >
        )
    }
}

export default withRouter(index)