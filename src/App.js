import './App.css';
import TopNav from "./Component/TopNav";
import Footer from "./Component/Footer";
import { useEffect, useState } from 'react'
import { indexRouters } from './router/index'
import { Route, withRouter, useLocation } from 'react-router-dom'

function App(poops) {
  const { pathname } = useLocation()
  const [topNavFlag, setTopNavFlag] = useState(true)
  //  隐藏TopNav栏  通过 withRouter  获取来的pathname 地址 
  //  判断是否是 注册页
  useEffect(() => {
    if (pathname === '/register') {
      setTopNavFlag(false)
    } else {
      setTopNavFlag(true)
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

      </div>
      < Footer />
    </div>
  );
}

export default withRouter(App);
