import React from 'react';
import Docs from '../components/Docs';
import {
  getDocIds,
  getNavigationData,
  getItem,
  getFirstItem,
  getFirstItemOfSection
} from '../docs';

class DocsContainer extends React.Component {
  render() {
    const { docId, sectionId, itemId } = this.props.params;
    
    let selectedItem;
    const selectedDocId = docId || getDocIds()[0];

    if (!sectionId) {
      selectedItem = getFirstItem(selectedDocId);
    } else if (!itemId) {
      selectedItem = getFirstItemOfSection(selectedDocId, sectionId);
    } else {
      selectedItem = getItem(selectedDocId, sectionId, itemId);
    }

    const selectedSectionId = sectionId || 'basics';
    const selectedItemId = selectedItem.id;

    const props = {
      docIds: getDocIds(),
      selectedDocId,
      sections: getNavigationData(selectedDocId),
      selectedItem,
      selectedSectionId,
      selectedItemId,
    };

    return (<Docs {...props}/>);
  }
}

export default DocsContainer;
