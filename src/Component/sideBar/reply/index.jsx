import React from 'react'

export default function index() {
    return (
        <div className='sideBar_item'>
            <div className="sideBar_header">
                <div className="col_fade">无人回复的话题</div>
            </div>
            <div className="sideBar_inner">
                <ul className="unstyled">
                    <li>验证码：五福临门</li>
                    <li>慕课Web前端架构师</li>
                    <li>用child_process如何调用一个需要后续输入数据的命令？</li>
                    <li>比webpack快10～100倍的构建工具：esbuild</li>
                    <li>React有没有适合数据大的状态共享库？</li>
                </ul>
            </div>
        </div>
    )
}
