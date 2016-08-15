import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    padding: '50px 0 50px 0',
    textAlign: 'center',
  },

  links: {
    fontWeight: 600,
    fontSize: 24,
  },

  link: {
    ...theme.text,
    textDecoration: 'none',
    margin: '0 5px 0 5px',
  }
};

export default styles;
