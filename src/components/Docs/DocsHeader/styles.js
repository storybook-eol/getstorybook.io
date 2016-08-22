import theme from '../../theme';

export default {
  container: {
    ...theme.base,
    padding: "0 0 20px 0"
  },

  h1: {
    fontSize: 35,
    margin: "0 0 5px 0",
    padding: 0,
    '@media (max-width: 670px)': {
      fontSize: 30,
    },
    '@media (max-width: 570px)': {
      fontSize: 25,
    },
  },

  links: {
    ...theme.text,
    fontSize: 15,
  },

  link: {
    ...theme.text,
    textDecoration: 'none',

  }
};
