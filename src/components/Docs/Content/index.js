import React from 'react';
import { Flex, Box } from 'reflexbox';
import radium, { StyleRoot } from 'radium';
import ReactMarkdown from 'react-markdown';
import styles from './styles';

const Content = ({title, content}) => (
  <Flex>
    <Box>
      <div style={ styles.container }>
        <h2 style={ styles.h2 }>{ title }</h2>
        <div>
          <ReactMarkdown source={content} />
        </div>
      </div>
    </Box>
  </Flex>
);

export default radium(Content);
