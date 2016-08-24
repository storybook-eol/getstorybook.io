import theme from '../../theme';

const styles = {
  container: {
    sidebarNav: {
      ...theme.base,
      ...theme.text,
      borderRight: '1px solid #ECECEC',
      marginRight: 30,
      width: '100%',
    },
    dropdownNav: {
      ...theme.base,
      ...theme.text,
      width: '100%',
    },
  },

  h3: {
    color: '#000',
    margin: '25px 0 7px 0',
    padding: 0,
    fontSize: 20,
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

  dropdown: {
    width: '100%',
    marginBottom: '5px',
  }
};

styles.selectedItem = {
  ...styles.item,
  fontWeight: 600,
};

export default styles;

  // container: {
  //   sidebarNav: {
  //     ...theme.base,
  //     ...theme.text,
  //     borderRight: '1px solid #ECECEC',
  //     marginRight: 30,
  //     marginLeft: '35%',
  //     width: '100%',
  //     display: 'block',
  //     '@media (max-width: 570px)': {
  //       display: 'none',
  //     },
  //   },
  //   dropdownNav: {
  //     ...theme.base,
  //     ...theme.text,
  //     width: '100%',
  //     marginRight: 30,
  //     marginLeft: '35%',
  //     display: 'none',
  //     '@media (max-width: 570px)': {
  //       display: 'block',
  //     },
  //   },
  // },
