## Release workflow (GitHub Actions)

- Trigger on tag `v*.*.*` or release-please PR merge
- Steps:
  1. Checkout
  2. Setup Node 20, install deps
  3. Build: `npm ci && npm run build && npm run build:styles`
  4. Package: run `node tools/prepareRelease.mjs --repo <OWNER/REPO> --version $GITHUB_REF_NAME`
  5. Upload zip and `.release/system.json` as release assets

Recommended job:

```yaml
name: release
on:
  push:
    tags:
      - 'v*.*.*'

jobs:
  build-package:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build:styles
      - run: npm run -s build
      - run: node tools/prepareRelease.mjs --repo ${{ github.repository }} --version ${{ github.ref_name }}
      - uses: softprops/action-gh-release@v2
        with:
          files: |
            .release/*.zip
            .release/system.json
```
