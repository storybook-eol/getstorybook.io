import React from 'react';
import { Flex, Box } from 'reflexbox';
const { localStorage } = window;

const styles = {
  design: {
    width: '100%',
  },

  toolbarButton: {
    marginRight: 10,
  },

  wrapper: {
    padding: 10,
  },

  heading: {
    fontFamily: "monospace",
    textTransform: "uppercase",
    fontSize: 20,
    margin: "10px 0",
    padding: "0",
  }
};

export default class WithDesign extends React.Component {
  constructor(...args) {
    super(...args);
    const type = localStorage.getItem('WITH_DESIGN_TYPE') || 'COMPARE';
    this.state = { type };
  }

  renderToolbar() {
    const changeState = (type) => {
      return () => {
        localStorage.setItem('WITH_DESIGN_TYPE', type);
        this.setState({ type });
      };
    };

    return (
      <div>
        <button style={styles.toolbarButton} onClick={changeState('COMPARE')}>Compare</button>
        <button style={styles.toolbarButton} onClick={changeState('SHOW_DESIGN')}>Show Design</button>
        <button style={styles.toolbarButton} onClick={changeState('SHOW_IMPLEMENTATION')}>Show Implementation</button>
        <button style={styles.toolbarButton} onClick={changeState('SHOW_BOTH')}>One After Other</button>
      </div>
    );
  }

  renderDesign() {
    const { design } = this.props;

    return (
      <div>
        <h3 style={styles.heading}>Design</h3>
        <img style={styles.design} src={design} />
      </div>
    );
  }

  renderImplementation() {
    const { children } = this.props;

    return (
      <div>
        <h3 style={styles.heading}>Implementation</h3>
        {children}
      </div>
    );
  }

  render() {
    const { type } = this.state;

    switch (type) {
      case 'SHOW_DESIGN':
        return (
          <div style={styles.wrapper} >
            {this.renderToolbar()}
            {this.renderDesign()}
          </div>
        );

      case 'SHOW_IMPLEMENTATION':
        return (
          <div style={styles.wrapper} >
            {this.renderToolbar()}
            {this.renderImplementation()}
          </div>
        );

      case 'COMPARE':
        return (
          <div style={styles.wrapper} >
            {this.renderToolbar()}
            <Flex>
              <Box col={6}>{this.renderDesign()}</Box>
              <Box col={6}>{this.renderImplementation()}</Box>
            </Flex>
          </div>
        );

      case 'SHOW_BOTH':
      default:
        return (
          <div style={styles.wrapper} >
            {this.renderToolbar()}
            {this.renderDesign()}
            {this.renderImplementation()}
          </div>
        );
    }
  }
}
