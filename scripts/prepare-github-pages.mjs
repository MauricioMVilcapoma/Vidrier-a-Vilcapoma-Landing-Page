import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const repoName = 'Vidrier-a-Vilcapoma-Landing-Page';
const projectRoot = process.cwd();
const deployDir = path.join(os.tmpdir(), 'vilcapoma-github-pages-deploy');

const distClient = path.join(projectRoot, 'dist', 'client');
const prerenderedRoutes = path.join(projectRoot, 'dist', 'server', 'prerendered-routes');

if (!fs.existsSync(path.join(prerenderedRoutes, 'index.html'))) {
  throw new Error('Run `npx vinext build --prerender-all` before preparing GitHub Pages.');
}

fs.rmSync(deployDir, { recursive: true, force: true });
fs.mkdirSync(deployDir, { recursive: true });
fs.cpSync(distClient, deployDir, { recursive: true });
fs.copyFileSync(path.join(prerenderedRoutes, 'index.html'), path.join(deployDir, 'index.html'));
fs.copyFileSync(path.join(prerenderedRoutes, '404.html'), path.join(deployDir, '404.html'));
fs.writeFileSync(path.join(deployDir, '.nojekyll'), '');

const textExtensions = new Set(['.html', '.js', '.css', '.json', '.svg']);

function rewriteForProjectPages(filePath) {
  let contents = fs.readFileSync(filePath, 'utf8');
  contents = contents
    .replace(/(^|[^A-Za-z0-9])\/(assets|_next)\//g, `$1/${repoName}/$2/`)
    .replace(/(^|[^A-Za-z0-9])\/favicon\.svg/g, `$1/${repoName}/favicon.svg`);
  fs.writeFileSync(filePath, contents);
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (textExtensions.has(path.extname(entry.name))) {
      rewriteForProjectPages(fullPath);
    }
  }
}

walk(deployDir);

console.log(deployDir);
