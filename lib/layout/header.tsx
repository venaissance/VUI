import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('vui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <section className={sc('header', {extra: className})} {...rest}>
      {props.children}
    </section>
  );
};

export default Header;