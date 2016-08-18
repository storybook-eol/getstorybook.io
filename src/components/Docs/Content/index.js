import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './styles';
import Container from '../Container';

const Content = ({title, content}) => (
  <Container>
    <div style={ styles.container }>
      <h2 style={ styles.h2 }>{ title }</h2>
      <ReactMarkdown source={content} />
    </div>
  </Container>
);

export default Content;
