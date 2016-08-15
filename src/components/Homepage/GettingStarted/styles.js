import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    margin: '50px 0',
    padding: '50px 0 70px 0',
    textAlign: 'center',
  },

  heading: {
    fontSize: 28,
    letterSpacing: '2px',
    margin: '0 0 40px 0'
  },

  pre: {
    backgroundColor: '#F0F0F0',
    padding: '30px 0 30px 150px',
    fontSize: 20,
    margin: 'auto',
    width: 400,
    textAlign: 'left'
  }
};

export default styles;
