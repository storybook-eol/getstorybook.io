import React from 'react';
import Docs from '../components/Docs';
import { getNavigationData, getItem, getFirstItem } from '../docs'

class DocsContainer extends React.Component {
  render() {
    const { sectionId, itemId } = this.props.params;
    const selectedItem = !sectionId? getFirstItem() : getItem(sectionId, itemId);

    const props = {
      sections: getNavigationData(),
      selectedItem,
      selectedSectionId: sectionId,
      selectedItemId: itemId,
    };

    return (<Docs {...props}/>);
  }
}

export default DocsContainer;
