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
    fontSize: 28,
    letterSpacing: '2px',
    margin: '0 0 4% 0'
  },

  pre: {
    backgroundColor: '#F0F0F0',
    padding: '3% 0 3% 15%',
    fontSize: 20,
    margin: 'auto',
    maxWidth: 400,
    textAlign: 'left',
  }
};

export default styles;
