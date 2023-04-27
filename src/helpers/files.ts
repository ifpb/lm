import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

export function readFile(path: string) {
  const file = resolve('./public' + path);

  const code = existsSync(file) ? readFileSync(file, 'utf8') : 'Code not found';

  return code;
}

export function existsFile(path: string) {
  const file = resolve('./public' + path);

  return existsSync(file);
}
