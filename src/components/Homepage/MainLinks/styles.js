import styles from '../../theme';

export default {
  container: {
    ...styles.base,
    margin: '3% 5%',
    borderTop: '1px solid #EEE',
    borderBottom: '1px solid #EEE',
    padding: '6% 6% 0',
  },

  link: {
    width: 250,
    textTransform: 'uppercase',
    fontSize: 20,
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
