import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    margin: '5% 0',
    padding: '5% 0 5% 0',
    textAlign: 'center',
  },

  heading: {
    letterSpacing: '2px',
    margin: '0 0 4% 0',
    fontSize: 28,
    '@media (max-width: 500px)': {
      fontSize: 24
    },
  },

  pre: {
    backgroundColor: '#F0F0F0',
    padding: '3% 0 3% 15%',
    margin: 'auto',
    maxWidth: 400,
    textAlign: 'left',
    fontSize: 20,
    '@media (max-width: 500px)': {
      fontSize: 16
    },
  }
};

export default styles;
