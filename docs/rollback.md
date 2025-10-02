### Rollback guide

Use these steps to recover the current stable baseline if needed.

Baseline identifiers:

- Branch: `baseline/2025-10-02`
- Tag: `baseline-2025-10-02`

Recover locally (preferred):

```bash
git fetch --all --tags
git checkout -B recovery baseline/2025-10-02
npm ci
npm run build
```

Recover from tag (immutable point-in-time):

```bash
git fetch --all --tags
git checkout -B recovery baseline-2025-10-02
npm ci
npm run build
```

Re-point to main after recovery testing:

```bash
git checkout -
```

Notes:

- Branch allows cherry-picks and hotfixes; tag is read-only reference.
- No pushes are required to perform a local rollback for verification.
