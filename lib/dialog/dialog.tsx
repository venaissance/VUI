import React, {Fragment} from 'react';

interface Props {
  visible: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className="vui-dialog-mask">
        </div>
        <div className="vui-dialog">{props.children}
        </div>
      </Fragment>
      :
      null
  );
};

export default Dialog;
