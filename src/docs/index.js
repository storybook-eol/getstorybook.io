const data = {
  'react-storybook': {
    title: 'React Storybook',
    sections: require('./react-storybook').default,
  },
  'storybook-hub': {
    title: 'Storybook Hub',
    sections: require('./storybook-hub').default,
  },
};

export function getDocs() {
  const docIds = Object.keys(data);
  const docs = [];

  docIds.forEach(docId => {
    docs.push({
      id: docId,
      title: data[docId].title,
    });
  });

  return docs;
}

export function getNavigationData(docId) {
  if (!docId) {
    docId = getDocs[0].id;
  }

  return data[docId].sections;
}

export function getItem(docId, sectionId, itemId) {
  if (!docId) {
    docId = getDocs[0].id;
  }

  const section = data[docId].sections.find(section => section.id === sectionId);
  if (!section) return null;

  const item = section.items.find(item => item.id === itemId);
  return item;
}

export function getFirstItemOfSection(docId, sectionId) {
  if (!docId) {
    docId = getDocs[0].id;
  }

  const section = data[docId].sections.find(section => section.id === sectionId);
  if (!section) return null;

  return section.items[0];
}

export function getFirstItem(docId) {
  if (!docId) {
    docId = getDocs[0].id;
  }

  const sections = data[docId].sections || [];
  if (sections.length === 0) return null;

  return sections[0].items[0];
}
