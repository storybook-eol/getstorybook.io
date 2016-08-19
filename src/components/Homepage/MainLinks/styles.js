import styles from '../../theme';

export default {
  container: {
    ...styles.base,
    margin: '3% 5%',
    borderTop: '1px solid #EEE',
    borderBottom: '1px solid #EEE',
    padding: '6% 6% 0',
    fontSize: 20,
    '@media (max-width: 775px)': {
      fontSize: 16
    },
  },

  link: {
    width: 250,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },

  a: {
    ...styles.text,
    textDecoration: 'none',
  },

  icon: {
    height: 40,
    margin: 10,
  },

  box: {
    paddingBottom: '6%',
  },
};
