import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    margin: '100px 0',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: "28px"
  },

  heading: {
    fontSize: 28,
    letterSpacing: '2px',
    margin: '0 0 20px 0'
  },

  addonList: {
    margin: '20px 0'
  },

  links: {
    margin: "10px 0 0 0"
  },

  link: {
    ...theme.text,
    textDecoration: 'none',
    margin: '0 20px',
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
};

export default styles;
