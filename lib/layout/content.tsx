import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('vui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;

  return (
    <section className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </section>
  );
};

export default Content;