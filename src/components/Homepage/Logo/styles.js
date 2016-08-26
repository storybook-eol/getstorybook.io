import styles from '../../theme';

export default {
  container: {
    ...styles.base,
    border: '3px dashed #00BCD4',
    padding: '2% 5% 2% 5%',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontFamily: 'Arial',
    width: 570,
    fontSize: 70,
    '@media (max-width: 780px)': {
      width: 'auto',
    },
    '@media (max-width: 600px)': {
      width: 'auto',
      fontSize: 55
    },
    '@media (max-width: 500px)': {
      width: 'auto',
      fontSize: 45
    },
    '@media (max-width: 415px)': {
      width: 'auto',
      fontSize: 35
    },
    '@media (max-width: 376px)': {
      width: 'auto',
      fontSize: 25
    },
  },

  span: {
    a: {
      color: '#fc5662',
    },
    b: {
      color: '#629e20',
    },
    c: {
      color: '#e4356a',
    },
    d: {
      color: '#8b572a',
    },
    e: {
      color: '#b60fd8',
    },
    f: {
      color: '#000000',
    },
    g: {
      color: '#e063d2',
    },
    h: {
      color: '#d2c32d',
    },
    i: {
      color: '#3cc6ad',
    },
  },
};
