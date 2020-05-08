import Layout from './layout';
import React from 'react';
import Sider from './sider';
import Header from './header';
import Content from './content';
import Footer from './footer';
import './layout.example.scss';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
      <div className='example'>
        <h1>第四个例子</h1>
        <Layout className='sider-example'>
          <Sider className='example-sider'>Sider</Sider>
          <Layout>
            <Header className='example-header'>header</Header>
            <Content className='example-content'>content</Content>
            <Footer className='example-footer'>footer</Footer>
          </Layout>
        </Layout>
      </div>

      <div>
        <h1>第一个例子</h1>
        <Layout className='aaa'>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout>
          <Header>header</Header>
          <Layout className='sider-example'>
            <Sider>sider</Sider>
            <Content>content</Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout>
          <Header>header</Header>
          <Layout className='sider-example'>
            <Content>content</Content>
            <Sider>sider</Sider>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>

    </div>
  );
};

export default LayoutExample;