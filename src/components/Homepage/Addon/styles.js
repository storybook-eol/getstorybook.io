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
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    margin: '0 0 4% 0',
  },

  description: {
    ...theme.text,
    fontSize: 18,
    lineHeight: '25px',
    margin: '40px 0 0 0',
  },

  link: {
    color: '#565AFF',
    fontSize: 18,
    textDecoration: 'none'
  },

  content: {},

  image: {
    width: '100%',
  }
};
