import { readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const huskyRuntimeDir = resolve(projectRoot, '.husky', '_');

const HELPER_SOURCE = `#!/usr/bin/env sh
[ "$HUSKY" = "2" ] && set -x
p=$0
n=\${p##*/}
[ "$n" = "$p" ] && n=\${p##*\\\\}
s=\${p%/*}
[ "$s" = "$p" ] && s=\${p%\\\\*}
p=$s
s=\${p%/*}
[ "$s" = "$p" ] && s=\${p%\\\\*}
s="$s/$n"

[ ! -f "$s" ] && exit 0

if [ -f "$HOME/.huskyrc" ]; then
\techo "husky - '~/.huskyrc' is DEPRECATED, please move your code to ~/.config/husky/init.sh"
fi
i="\${XDG_CONFIG_HOME:-$HOME/.config}/husky/init.sh"
[ -f "$i" ] && . "$i"

[ "\${HUSKY-}" = "0" ] && exit 0

export PATH="node_modules/.bin:$PATH"
(
\tset -e
\t. "$s"
)
c=$?

[ $c != 0 ] && echo "husky - $n script failed (code $c)"
[ $c = 127 ] && echo "husky - command not found in PATH=$PATH"
exit $c
`;

const WRAPPER_SOURCE = `#!/usr/bin/env sh
script_dir=\${0%/*}
[ "$script_dir" = "$0" ] && script_dir=\${0%\\\\*}
. "$script_dir/h"
`;

const RUNTIME_FILES_TO_SKIP = new Set(['.gitignore', 'h', 'husky.sh']);

const writeIfChanged = async (path, next) => {
  try {
    const current = await readFile(path, 'utf8');
    if (current === next) return false;
  } catch {
    // Missing files should be written when Husky created the directory incompletely.
  }

  await writeFile(path, next, 'utf8');
  return true;
};

try {
  const entries = await readdir(huskyRuntimeDir, { withFileTypes: true });
  let patchedCount = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (RUNTIME_FILES_TO_SKIP.has(entry.name)) continue;

    const path = resolve(huskyRuntimeDir, entry.name);
    if (await writeIfChanged(path, WRAPPER_SOURCE)) {
      patchedCount += 1;
      console.log(`[patch-husky-gitkraken] Patched ${path}`);
    }
  }

  const helperPath = resolve(huskyRuntimeDir, 'h');
  if (await writeIfChanged(helperPath, HELPER_SOURCE)) {
    patchedCount += 1;
    console.log(`[patch-husky-gitkraken] Patched ${helperPath}`);
  }

  if (patchedCount === 0) {
    console.log('[patch-husky-gitkraken] Hooks already match the Windows-safe runtime patch.');
  }
} catch (error) {
  console.warn(`[patch-husky-gitkraken] Skipped ${huskyRuntimeDir}: ${error.message}`);
}
