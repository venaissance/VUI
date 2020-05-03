import Dialog from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <button onClick={() => setX(!x)}>click</button>
        <Dialog visible={x} buttons={[
          <button onClick={() => setX(false)}>1</button>,
          <button onClick={() => setX(false)}>2</button>
        ]} onClose={() => setX(false)}>
          <strong>dialog</strong>
        </Dialog>
      </div>

      <div>
        <h1>Example 2</h1>
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

    </div>
  );
};

export default DialogExample;
