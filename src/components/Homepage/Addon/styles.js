import theme from '../../theme';

export default {
  container: {
    ...theme.base,
    maxWidth: '800px',
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
    fontSize: 18,
    '@media (max-width: 890px)': {
      fontSize: 16
    },
  },

  description: {
    ...theme.text,
    lineHeight: '25px',
    margin: '40px 0 0 0',
    fontSize: 16,
    '@media (max-width: 890px)': {
      fontSize: 14
    },
  },

  link: {
    color: '#565AFF',
    textDecoration: 'none',
    fontSize: 16,
    '@media (max-width: 890px)': {
      fontSize: 14
    },
  },

  content: {},

  image: {
    width: '370px',
  }
};
