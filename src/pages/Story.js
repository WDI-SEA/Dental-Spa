import React from 'react';

const Story = props => (
  <div>
    <h1>Our Story</h1>
    <p>This is a bunch of text. lorem ipsum ...</p>
    <p>More stuff about {props.name}</p>
    <ul>
      <li>Thing A</li>
      <li>Thing B</li>
      <li>And you won't believe it.... Thing C</li>
    </ul>
  </div>
);

export default Story;
