import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    margin: '3% 0',
    padding: '7% 0',
    textAlign: 'center',
    backgroundColor: '#424242',
    color: '#FFF',
  },

  heading: {
    letterSpacing: '2px',
    margin: '0 0 5% 0',
    fontSize: 28,
    '@media (max-width: 500px)': {
      fontSize: 24
    },
  },

  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontSize: 20,
    '@media (max-width: 500px)': {
      fontSize: 16
    },
  },

  li: {
    padding: '4px 0',
  }
};

export default styles;
