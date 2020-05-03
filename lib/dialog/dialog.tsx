import React, {Fragment, ReactElement} from 'react';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';
import './dialog.scss';

interface Props {
  visible: boolean,
  buttons: Array<ReactElement>,
  onClose: React.MouseEventHandler,
}

const scopedClass = scopedClassMaker('vui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  return (
    props.visible ?
      <Fragment>
        <div className={sc('mask')}>
        </div>
        <div className={sc()}>
          <div className={sc('close')} onClick={onClickClose}>
            <Icon name="close"/>
          </div>
          <header className={sc('header')}>
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            {props.buttons &&
            props.buttons.map((button, index) => {
              React.cloneElement(button, {key: index});
            })}
          </footer>
        </div>
      </Fragment>
      :
      null
  );
};

export default Dialog;
