import React from 'react';
import { Flex, Box } from 'reflexbox';
const { localStorage } = window;

const styles = {
  design: {
    width: '100%',
  },

  toolbar: {
    marginBottom: 10,
  },

  toolbarButton: {
    marginRight: 10,
    border: 0,
    backgroundColor: '#fff',
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 0,
    letterSpacing: 0.5,
    WebkitFontSmoothing: 'antialiased',
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
  },

  container: {
    border: '1px dashed #DDD',
  }
};

export default class WithDesign extends React.Component {
  constructor(...args) {
    super(...args);
    const type = localStorage.getItem('WITH_DESIGN_TYPE') || 'COMPARE';
    this.state = { type };

    this.calculateScale = this.calculateScale.bind(this);
  }

  calculateScale() {
    const designImage = this.refs.design;
    if (!designImage) {
      this.setState({ implementationScale: 1 });
      return;
    }

    const implementationScale = designImage.width / designImage.naturalWidth;
    this.setState({ implementationScale });
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateScale);
    this.calculateScale();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateScale);
  }

  renderToolbar() {
    const { type: currentType } = this.state;

    const changeState = (type) => {
      return () => {
        localStorage.setItem('WITH_DESIGN_TYPE', type);
        this.setState({ type });

        // We need to update
        setTimeout(() => {
          this.calculateScale();
        }, 50);
      };
    };

    const buttons = [
      ['Side by Side', 'COMPARE'],
      ['One After Other', 'SHOW_BOTH'],
      ['Design', 'SHOW_DESIGN'],
      ['Implementation', 'SHOW_IMPLEMENTATION'],
    ].map(([caption, typeName]) => {
      const style = {
        ...styles.toolbarButton,
        fontWeight: currentType === typeName? 600 : 400,
      };

      return (
        <button
          style={style}
          onClick={changeState(typeName)}
          key={typeName}
        >
          {caption}
        </button>
      );
    });

    return (
      <div style={styles.toolbar}>
        {buttons}
      </div>
    );
  }

  renderDesign() {
    const { design } = this.props;

    return (
      <div>
        <div style={styles.container}>
          <img ref='design' style={styles.design} src={design} />
        </div>
      </div>
    );
  }

  renderImplementation() {
    const { children } = this.props;
    const { implementationScale = 1 } = this.state;

    const containerStyle = {
      ...styles.container,
      zoom: implementationScale,
    };

    return (
      <div>
        <div style={containerStyle}>
          {children}
        </div>
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
