import Dialog, {alert, confirm, modal} from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [z, setZ] = useState(false);

  const modalClose = () => {
    const close = modal(<h1>Modal
      <button onClick={() => close()}>close</button>
    </h1>);
  };

  return (
    <div>
      <div>
        <h1>Modal</h1>
        <button onClick={modalClose}>modal</button>
      </div>
      <div>
        <h1>Alert</h1>
        <button onClick={() => alert('1')}>alert</button>
      </div>
      <div>
        <h1>Confirm</h1>
        <button onClick={() => confirm('1', () => {console.log('yes');}, () => {console.log('no');})}>confirm</button>
      </div>
      <div>
        <h1>Default Dialog</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={[
          <button onClick={() => setX(false)}>1</button>,
          <button onClick={() => setX(false)}>2</button>
        ]} onClose={() => setX(false)}>
          <strong>dialog</strong>
        </Dialog>
      </div>

      <div>
        <h1>Dialog with MaskClose</h1>
        <button onClick={() => setY(!y)}>click</button>
        <Dialog visible={y} maskClose={true} buttons={
          [
            <button onClick={() => {setY(false);}}>1</button>,
            <button onClick={() => {setY(false);}}>2</button>
          ]
        } onClose={() => {setY(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>

      <div>
        <h1>Dialog with Mask Disabled</h1>
        <button onClick={() => setZ(!z)}>click</button>
        <Dialog visible={z} maskClose={true} enableMask={false} buttons={
          [
            <button onClick={() => {setZ(false);}}>1</button>,
            <button onClick={() => {setZ(false);}}>2</button>
          ]
        } onClose={() => {setZ(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>
    </div>
  );
};

export default DialogExample;
