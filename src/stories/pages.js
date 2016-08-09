import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import WithDesign from './with_design';
import { WithNote } from '../../.storybook/notes_addon';

const stories = storiesOf('Pages');
const homepageDesign = require('../design/homepage.png');

stories.add('homepage', () => (
  <WithNote
    note={`
We need to implement this simple page.
Currently as the font, I'm using Arial.
But when you are implementing it, try to use the following font-face:

-apple-system, ".SFNSText-Regular", "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif

That'll give Github's font :D.
If this is ugly, we could change it.
    `}
  >
    <WithDesign design={homepageDesign}>

    </WithDesign>
  </WithNote>
));
