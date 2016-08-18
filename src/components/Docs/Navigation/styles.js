import theme from '../../theme';

const styles = {
  container: {
    ...theme.base,
    ...theme.text,
    margin: 0,
  },

  h3: {
    margin: '25px 0 7px',
    padding: 0,
  },

  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    lineHeight: '36px',
  },

  item: {
    ...theme.text,
    textDecoration: 'none',
  },
};

styles.selectedItem = {
  ...styles.item,
  fontWeight: 600,
};

export default styles;
