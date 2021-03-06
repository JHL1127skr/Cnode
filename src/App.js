import './App.css';
import TopNav from "./Component/TopNav";
import Topic from "./Component/topic";
import Footer from "./Component/Footer";
import UserDetails from "./Component/UserDetails";
import { useEffect, useState } from 'react'
import { indexRouters } from './router/index'
import { Route, withRouter, useLocation } from 'react-router-dom'

function App(props) {
  const { pathname } = useLocation()
  const [topNavFlag, setTopNavFlag] = useState(true)
  const [footer, setFooter] = useState(true)
  //  隐藏TopNav栏  通过 withRouter  获取来的pathname 地址 
  //  判断是否是 注册页
  useEffect(() => {
    if (pathname === '/register') {
      setTopNavFlag(false)
    } else if (pathname === '/login') {
      setFooter(false)
    } else {
      setTopNavFlag(true)
      setFooter(true)
    }

  }, [pathname])
  return (
    <div className="App">
      {topNavFlag ? <TopNav /> : null}
      <div className='content'>

        {
          indexRouters.map((v, i) => {
            return <Route key={i} path={v.path} component={v.component} exact={v.exact ? true : false}></Route>
          })
        }
        <Route path="/topic/:id" component={Topic} />
        <Route path="/UserDetails/:id" component={UserDetails} />
      </div>
      {topNavFlag ? < Footer flag={footer} /> : null}

    </div>
  );
}

export default withRouter(App);
