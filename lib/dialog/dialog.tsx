import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';
import './dialog.scss';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>,
  onClose: React.MouseEventHandler;
  maskClose?: Boolean;
}

const scopedClass = scopedClassMaker('vui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<Props> = (props) => {

  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };

  const onClickMaskClose: React.MouseEventHandler = (e) => {
    if (props.maskClose) {
      props.onClose(e);
    }
  };

  const dialog = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMaskClose}>
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
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
      </div>
    </Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(dialog, document.body)
  );
};

Dialog.defaultProps = {
  maskClose: false
};

const alert = (content: string) => {
  const component = <Dialog onClose={() => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }} visible={true}>
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = <Dialog onClose={onNo} visible={true} buttons={[
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ]}>
    {content}
  </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};


export {alert, confirm};

export default Dialog;
