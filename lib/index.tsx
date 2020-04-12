import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';

const fn = () => {
  console.log('fn');
};

ReactDOM.render(<div>
  <Icon name="wechat" onClick={fn}/>
  <Icon name="alipay"/>
  <Icon name="user"/>
</div>, document.querySelector('#root'));




