import React from 'react';
import { Flex, Box } from 'reflexbox';
import radium, { StyleRoot } from 'radium';
import Highlight from 'react-highlight';
import styles from './styles';
import 'highlight.js/styles/atom-one-light.css';

import marked from 'marked';
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

const Content = ({title, content}) => (
  <Flex>
    <StyleRoot>
      <Box>
        <div style={ styles.container }>
          <h2 style={ styles.h2 }>{ title }</h2>
          <div style={ styles.content }>
            <Highlight innerHTML={true}>
              {marked(content)}
            </Highlight>
          </div>
        </div>
      </Box>
    </StyleRoot>
  </Flex>
);

export default radium(Content);
