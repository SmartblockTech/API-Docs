import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs-extra';

(() => {
  const projectRoot = path.resolve(__dirname, '..', '..');

  if (fs.pathExistsSync(path.join(projectRoot, '.next')))
    rimraf.sync(path.join(projectRoot, '.next'));

  if (fs.pathExistsSync(path.join(projectRoot, 'dist')))
    rimraf.sync(path.join(projectRoot, 'dist'));
})()
