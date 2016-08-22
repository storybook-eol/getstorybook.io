import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    margin: '10% 0',
    textAlign: 'center',
    lineHeight: '28px',
    fontSize: 20,
    '@media (max-width: 775px)': {
      fontSize: 16
    },
  },

  heading: {
    letterSpacing: '2px',
    margin: '0 0 2% 0',
    fontSize: 28,
    '@media (max-width: 775px)': {
      fontSize: 24
    },
  },

  addonList: {
    margin: '2% 0',
  },

  links: {
    margin: '1% 0 0 0',
    clear: 'both',
  },

  linkUl: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },

  linkLi: {
    display: 'inline',
    padding: 0,
    '@media (max-width: 775px)': {
      display: 'inherit',
      paddingBottom: '3px',
    },
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
