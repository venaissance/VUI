import React from 'react';
import {scopedClassMaker} from '../classes';

const sc = scopedClassMaker('vui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <section className={sc('footer', {extra: className})} {...rest}>
      {props.children}
    </section>
  );
};

export default Footer;