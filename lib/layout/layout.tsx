import React from 'react';


const Layout: React.FunctionComponent = (props) => {
  return (
    <section>
      {props.children}
    </section>
  );
};

export default Layout;