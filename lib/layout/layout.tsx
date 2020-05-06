import React, {ReactElement} from 'react';
import './layout.scss';
import Sider from './sider';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('vui-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  const hasSider = 'length' in children &&
    children.reduce((result, node) =>
      result || node.type === Sider,
      false);

  return (
    <section className={sc({'': true, hasSider}, {extra: className})} {...rest}>
      {props.children}
    </section>
  );
};

export default Layout;