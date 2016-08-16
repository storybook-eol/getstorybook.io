import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    margin: '10% 0',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: '28px',
  },

  heading: {
    fontSize: 28,
    letterSpacing: '2px',
    margin: '0 0 2% 0',
  },

  addonList: {
    margin: '2% 0',
  },

  links: {
    margin: '1% 0 0 0',
  },

  link: {
    ...theme.text,
    textDecoration: 'none',
    margin: '0 2%',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
};

export default styles;
