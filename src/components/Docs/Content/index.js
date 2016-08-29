import React from 'react';
import Highlight from 'react-highlight';
import styles from './styles';
import 'highlight.js/styles/github-gist.css';
import './styles.css';

import marked from 'marked';
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const Content = ({title, content}) => (
  <div style={ styles.container } className="docs-content">
    <h2 style={ styles.h2 }>{ title }</h2>
    <Highlight innerHTML={true}>
      {marked(content)}
    </Highlight>
  </div>
);

export default Content;
