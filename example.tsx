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

const logo = require('./assets/logo.png');

ReactDOM.render(
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="vui-logo">
          <img src={logo.default} alt='vui'/>
          <span>VUI</span>
        </div>
      </Header>
      <Layout>
        <Sider className='site-sider'>
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
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
        &copy; 米大王
      </Footer>
    </Layout>
  </Router>, document.querySelector('#root')
);