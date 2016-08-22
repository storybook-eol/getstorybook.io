const data = {
  sections: [
    {
      id: 'basics',
      heading: 'Basics',
      items: [
        require('./basics/getting_started').default,
        require('./basics/slow_start').default,
      ]
    },
    {
      id: 'configurations',
      heading: 'Configurations',
      items: [
        require('./configurations/default_config').default,
        require('./configurations/webpack').default,
      ]
    },
  ],
};

export function getNavigationData() {
  return data.sections;
}

export function getItem(sectionId, itemId) {
  const section = data.sections.find(section => section.id === sectionId);
  if (!section) return null;

  const item = section.items.find(item => item.id === itemId);
  return item;
}

export function getFirstItem() {
  const sections = data.sections || [];
  if (sections.length === 0) return null;

  return sections[0].items[0];
}
