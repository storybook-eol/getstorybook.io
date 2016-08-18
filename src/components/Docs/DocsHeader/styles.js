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
  },

  links: {
    ...theme.text,
    fontSize: 20,
  },

  link: {
    ...theme.text,
    textDecoration: 'none',

  }
};
