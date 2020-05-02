import Dialog from './dialog';
import React, {useState} from 'react';

const DialogExample: React.FunctionComponent = () => {
  const [x, setX] = useState(false);
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x}>
        <strong>dialog</strong>
      </Dialog>
    </div>
  );
};

export default DialogExample;
