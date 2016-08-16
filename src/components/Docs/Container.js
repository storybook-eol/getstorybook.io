import React from 'react';

const style = {
  padding: '0 50px',
  maxWidth: 1024,
  margin: 'auto',
};

const Container = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

Container.propTypes = {
  children: React.PropTypes.node,
};

export default Container;
