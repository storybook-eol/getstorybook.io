const data = {
  'storybook-hub': require('./storybook-hub').default,
  'react-storybook': require('./storybook-hub').default,
};

export function getDocIds() {
  return Object.keys(data);
}

export function getNavigationData(docId) {
  if (!docId) {
    docId = getDocIds[0];
  }

  return data[docId].sections;
}

export function getItem(docId, sectionId, itemId) {
  if (!docId) {
    docId = getDocIds[0];
  }

  const section = data[docId].sections.find(section => section.id === sectionId);
  if (!section) return null;

  const item = section.items.find(item => item.id === itemId);
  return item;
}

export function getFirstItemOfSection(docId, sectionId) {
  if (!docId) {
    docId = getDocIds[0];
  }

  const section = data[docId].sections.find(section => section.id === sectionId);
  if (!section) return null;

  return section.items[0];
}

export function getFirstItem(docId) {
  if (!docId) {
    docId = getDocIds[0];
  }

  const sections = data[docId].sections || [];
  if (sections.length === 0) return null;

  return sections[0].items[0];
}
