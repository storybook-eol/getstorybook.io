import React from 'react';
import Docs from '../components/Docs';
import { getNavigationData, getItem, getFirstItem } from '../docs'

class DocsContainer extends React.Component {
  render() {
    const { sectionId, itemId } = this.props.params;
    const selectedItem = !sectionId? getFirstItem() : getItem(sectionId, itemId);
    const selectedSectionId = sectionId || 'basics';
    const selectedItemId = selectedItem.id;

    const props = {
      sections: getNavigationData(),
      selectedItem,
      selectedSectionId,
      selectedItemId,
    };

    return (<Docs {...props}/>);
  }
}

export default DocsContainer;
