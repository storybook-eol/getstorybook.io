import theme from '../../theme';

export default {
  container: {
    ...theme.base,
    maxWidth: 800,
    margin: '3% auto',
  },

  box: {
    padding: '0 3%',
  },

  heading: {
    ...theme.text,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
    margin: '0 0 4% 0',
    fontSize: 20,
    '@media (max-width: 775px)': {
      fontSize: 18
    },
  },

  description: {
    ...theme.text,
    lineHeight: '25px',
    margin: '40px 0 0 0',
    fontSize: 18,
    '@media (max-width: 775px)': {
      fontSize: 16
    },
  },

  link: {
    color: '#565AFF',
    textDecoration: 'none',
    fontSize: 18,
    '@media (max-width: 775px)': {
      fontSize: 16
    },
  },

  content: {},

  image: {
    width: '100%',
  }
};
