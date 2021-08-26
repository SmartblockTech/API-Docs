import fs from 'fs-extra';
import cp from 'child_process';
import path from 'path';
import jsYaml from 'js-yaml';

(() => {
  const spaConfig = {
    include: [
      '_next',
      '_app.js',
      '_error.js',
      '_document.js',
    ]
  },
  projectRoot = path.resolve(__dirname, '..', '..');

  cp.execSync('yarn export');

  fs.writeFileSync(
    path.join(projectRoot, 'dist', '_config.yml'),
    jsYaml.dump(spaConfig, {
      indent: 2,
    })
  )

  fs.writeFileSync(
    path.join(projectRoot, 'dist', '.nojekyll'),
    ''
  );

  if (process.env.GH_CUSTOM_DOMAIN)
    fs.writeFileSync(
      path.join(projectRoot, 'dist', 'CNAME'),
      process.env.GH_CUSTOM_DOMAIN
    )
})();
