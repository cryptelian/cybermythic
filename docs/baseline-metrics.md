### Baseline metrics — 2025-10-02

- CSS total in `public/style/`: 60K
- Vite production build:
  - `dist/style.css`: 49.85 kB (gzip ~5.10 kB)
  - `dist/index.mjs`: 206.57 kB (gzip ~44.31 kB)
  - Build time: ~1.08s

Build command used:

```bash
npm run build
```

Environment:

- Node 18
- Vite 5
- Sass legacy API deprecation warnings observed (non-blocking)
