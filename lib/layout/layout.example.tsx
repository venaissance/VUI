import Layout from './layout';
import React from 'react';
import Sider from './sider';
import Header from './header';
import Content from './content';
import Footer from './footer';

const LayoutExample: React.FunctionComponent = () => {
  return (
    <div>
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
          <Layout>
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
          <Layout>
            <Content>content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>header</Header>
            <Content>content</Content>
            <Footer>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};

export default LayoutExample;