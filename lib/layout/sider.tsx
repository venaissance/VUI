import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('vui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Sider: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <section className={sc('sider', {extra: className})} {...rest}>
      {props.children}
    </section>
  );
};

export default Sider;