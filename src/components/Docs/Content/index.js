import React from 'react';
import Highlight from 'react-highlight';
import marked from 'marked';
import './style.css';
import 'highlight.js/styles/atom-one-light.css';

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

const DocsContent = ({ title, content }) => (
  <div id="docs-content" className="row">
    <div className="col-xs-12">
      <div className="content">
        <h2>{ title }</h2>
        <Highlight innerHTML={true}>
          { marked(content) }
        </Highlight>
      </div>
    </div>
  </div>
);

DocsContent.propTypes = {
  title: React.PropTypes.string,
  content: React.PropTypes.node,
};

export default DocsContent;
