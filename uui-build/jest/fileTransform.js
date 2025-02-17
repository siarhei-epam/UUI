'use strict';

const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process(src, filename) {
    const assetFilename = JSON.stringify(path.basename(filename));

    if (filename.match(/\.svg$/)) {

      return `module.exports = {
        viewBox: '0 0 12 24',
        id: ${assetFilename}
      };`;
    }

    return `module.exports = ${assetFilename};`;
  },
};
