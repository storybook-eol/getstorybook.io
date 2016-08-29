import {stripIndent} from 'common-tags'

export default {
  id: "serving-static-files",
  title: "Serving Static Files",
  content: stripIndent`
    It's often useful to load static files like images and videos when creating components and stories.

    Storybook provides two ways to do that.

    ## 1. Via Imports

    You can import any media assets by simply importing (or requiring) them as shown below.


    ~~~js
    import React from 'react';
    import { storiesOf, action } from '@kadira/storybook';

    import imageFile from './static/image.png';

    storiesOf('<img>', module)
      .add('with a image', () => (
        <img src={imageFile} />
      ));
    ~~~


    This is enabled with our [default config](/docs/configurations/default-config). But, if you are using a [custom Webpack config](/docs/configurations/custom-webpack-config), you need to add the [file-loader](https://github.com/webpack/file-loader) into your custom Webpack config.

    ## 2. Via a Directory

    You can also configure a directory (or a list of directories) for searching static content when you are starting Storybook. You can do that with the -s flag.

    See the following npm script on how to use it:

    ~~~js
    {
      "scripts": {
        "start-storybook": "start-storybook -s ./public -p 9001"
      }
    }
    ~~~


    Here \`./public\` is our static directory. Now you can use static files in the public directory in your components or stories like this.

    ~~~js
    import React from 'react';
    import { storiesOf, action } from '@kadira/storybook';

    // assume image.png is located in the "public" directory.
    storiesOf('<img>', module)
      .add('with a image', () => (
        <img src="/image.png" />
      ));
    ~~~


    > You can also pass a list of directories, instead of a single directory, as shown below.
    > ~~~js
    > {
    >   "scripts": {
    >     "start-storybook": "start-storybook -s ./public,./static -p 9001"
    >   }
    > }
    > ~~~

    ## Absolute versus relative paths

    Sometimes, you may want to deploy your storybook into a subpath, like https://kadira-samples.github.io/react-button.

    In this case, you need to have all your images and media files with relative paths. Otherwise, Storybook cannot locate those files.

    If you load static content via importing, this is automatic and you do not have to do anything.

    If you are using a static directory, then you need to use _relative paths_ to load images.
  `
};
