export default [
  {
    id: 'basics',
    heading: 'Basics',
    items: [
      require('./basics/getting-started').default,
      require('./basics/github-pr-integration').default,
      require('./basics/comments').default,
      require('./basics/private-or-public-apps').default,
      require('./basics/security').default,
    ]
  },
];
