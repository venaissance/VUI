import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import Header from './lib/layout/header';
import Layout from './lib/layout/layout';
import Sider from './lib/layout/sider';
import Content from './lib/layout/content';
import './example.scss';
import Footer from './lib/layout/footer';

ReactDOM.render(
  <Router>
    <Layout className='site-page'>
      <Header className='site-header'>
        <div className="vui-logo">
          <img src='./assets/cyber-logo.png' alt='vui'/>
          <span>VUI</span>
        </div>
      </Header>
      <Layout>
        <Sider className='site-sider'>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </Sider>
        <Content className='site-content'>
          <Route path="/icon" component={IconExample}/>
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