import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import Header from './lib/layout/header';
import Layout from './lib/layout/layout';
import Sider from './lib/layout/sider';
import Content from './lib/layout/content';
import './example.scss';
import Footer from './lib/layout/footer';
import IconDemo from './lib/icon/icon.demo';

// const logo = require('./assets/logo.png');

ReactDOM.render(
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="vui-logo">
          {/*<img src={logo.default} alt='vui'/>*/}
          <h1>VUI</h1>
        </div>
      </Header>
      <Layout>
        <Sider className='site-sider'>
          <h2>组件列表</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon 图标组件</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog 对话框组件</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout 布局组件</NavLink>
            </li>
          </ul>
        </Sider>
        <Content className='site-content'>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className='site-footer'>
        &copy; VUI
      </Footer>
    </Layout>
  </Router>, document.querySelector('#root')
);