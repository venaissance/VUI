import Dialog from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  return (
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
  );
};

export default DialogExample;
