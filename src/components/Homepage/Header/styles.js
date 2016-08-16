import theme from '../../theme';

const styles = {
  link: {
    ...theme.base,
    color: '#333',
    padding: '0 5px',
    textDecoration: 'none',
    fontSize: 15
  },

  container: {
    textAlign: 'right',
    padding: '29% 0',
  },
};

styles.currentLink = {
  ...styles.link,
  fontWeight: 600,
};

export default styles;
