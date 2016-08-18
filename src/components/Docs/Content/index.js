import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './styles';

const Content = ({title, content}) => (
  <div style={ styles.container }>
    <h2 style={ styles.h2 }>{ title }</h2>
    <ReactMarkdown source={content} />
  </div>
);

export default Content;
