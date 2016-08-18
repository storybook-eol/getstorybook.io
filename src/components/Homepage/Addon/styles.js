import theme from '../../theme';

export default {
  container: {
    ...theme.base,
    maxWidth: 800,
    margin: '6% auto',
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
  },

  description: {
    ...theme.text,
    lineHeight: '25px',
    margin: '40px 0 0 0',
  },

  link: {
    color: '#565AFF',
    textDecoration: 'none'
  },

  content: {},

  image: {
    width: '100%',
  }
};
