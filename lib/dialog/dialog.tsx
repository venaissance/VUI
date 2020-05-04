import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';
import './dialog.scss';

interface Props {
  visible: boolean,
  buttons?: Array<ReactElement>,
  onClose: React.MouseEventHandler,
  maskClose?: Boolean,
  enableMask?: Boolean
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

  const dialog = props.visible &&
    <Fragment>
      {
        props.enableMask &&
        <div className={sc('mask')} onClick={onClickMaskClose}/>
      }
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
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )}
          </footer>
        }
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(dialog, document.body)
  );
};

Dialog.defaultProps = {
  maskClose: false,
  enableMask: true
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, closeCallback?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component =
    <Dialog onClose={() => {
      close();
      closeCallback && closeCallback();
    }}
            visible={true}
            buttons={buttons}>
      {content}
    </Dialog>;
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
};

export {alert, confirm, modal};

export default Dialog;