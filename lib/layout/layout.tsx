import React from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss';


const sc = scopedClassMaker('vui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Layout: React.FunctionComponent<Props> = (props) => {

  const {className, ...rest} = props;

  return (
    <section className={sc('', {extra: className})} {...rest}>
      {props.children}
    </section>
  );
};

export default Layout;