import theme from '../../theme';

export default {
  container: {
    ...theme.base,
    textAlign: 'center',
    padding: '12% 0 0 0',
  },

  logo: {
    margin: 'auto',
  },

  h2: {
    ...theme.text,
    fontWeight: 400,
    lineHeight: '30px',
    fontSize: 25,
    '@media (max-width: 580px)': {
      fontSize: 20
    },
  },

  love: {
    color: 'red',
    fontSize: 35,
    '@media (max-width: 580px)': {
      fontSize: 30
    },
  }
};
