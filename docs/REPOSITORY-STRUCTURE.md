# Repository Structure - Public/Private Split

## Overview

This repository maintains a strict separation between public (clean-room) code and private (copyrighted) content.

## Branch Structure

### `main` - Public Branch

- **Purpose**: Public release, clean-room implementation
- **Content**: No copyrighted or licensed Shadowrun material
- **Remote**: Tracks `origin/master` (public GitHub)
- **Status**: Safe to share, fork, and distribute

### `ninjanarchy` - Private Branch

- **Purpose**: Full implementation with licensed content
- **Content**: Includes copyrighted Shadowrun Anarchy material
- **Remote**: Should track `private/main` (private GitHub repo - NOT YET CONFIGURED)
- **Status**: Must remain private, never push to origin

## Remote Configuration

```bash
origin   → https://github.com/cryptelian/cybermythic.git (PUBLIC)
upstream → https://github.com/VincentVk9373/anarchy.git (original project)
private  → [TO BE ADDED] (PRIVATE repo for ninjanarchy)
```

## Workflow

### Working on Public Features

```bash
git checkout main
# Make changes...
git commit -m "feat: New public feature"
git push origin main:master
```

### Syncing Main → Ninjanarchy

```bash
git checkout ninjanarchy
git merge main -m "chore: Sync public improvements"
git push private ninjanarchy:main  # After private remote is configured
```

### ⚠️ FORBIDDEN OPERATIONS

- **NEVER** merge ninjanarchy → main
- **NEVER** push ninjanarchy to origin (public)
- **NEVER** cherry-pick copyrighted content into main

## Protection Mechanisms

### Pre-Push Hook

Location: `.git/hooks/pre-push`

Prevents accidental push of ninjanarchy to origin:

```bash
# This will fail:
git push origin ninjanarchy
# ERROR: Cannot push ninjanarchy branch to public remote
```

## Next Steps

1. **Create Private GitHub Repository**
   - Name: `cybermythic-ninjanarchy` (or your choice)
   - Visibility: **PRIVATE**
   - Do NOT initialize with README

2. **Add Private Remote**

   ```bash
   git remote add private https://github.com/cryptelian/cybermythic-ninjanarchy.git
   git push private ninjanarchy:main
   ```

3. **Set Up Git Worktree** (Optional but Recommended)
   ```bash
   git worktree add ../cybermythic-ninjanarchy ninjanarchy
   ```
   This creates separate directories:
   - `./cybermythic/` → main branch (public)
   - `../cybermythic-ninjanarchy/` → ninjanarchy branch (private)

## Content Boundaries

### Public Branch (`main`) - Allowed Content

- ✅ System mechanics and rules implementation
- ✅ UI/UX code
- ✅ Build tools and configuration
- ✅ Documentation
- ✅ Generic game system framework

### Private Branch (`ninjanarchy`) - Additional Content

- 📦 `Anarchy Full.md` - Full Shadowrun Anarchy rules text
- 📦 `src/packs/anarchy-actors/` - Pre-generated characters (320 files)
- 📦 `src/packs/anarchy-items-gear/` - Gear compendiums
- 📦 `src/packs/anarchy-items-weapons/` - Weapon compendiums
- 📦 `src/packs/anarchy-wiki/` - Wiki entries
- 📦 `tools/importAnarchyMarkdown.mjs` - Content import tools

## Validation

### Test Public Branch is Clean

```bash
git checkout main
test -f "Anarchy Full.md" && echo "❌ FAIL" || echo "✅ PASS"
```

### Test Private Branch Has Content

```bash
git checkout ninjanarchy
test -f "Anarchy Full.md" && echo "✅ PASS" || echo "❌ FAIL"
ls src/packs/anarchy-actors/ | wc -l  # Should show ~320
```

## History

- **2025-10-03**: Repository split into public/private structure
- **Previous State**: Mixed public and copyrighted content
- **Resolution**: Reverted main to clean state, preserved full content in ninjanarchy

## References

See `.cursor/rules/` for detailed policies:

- `prime-directive.mdc` - Core separation principle
- `content-boundaries.mdc` - What goes where
- `repo-topology.mdc` - Repository structure
- `flow-of-changes.mdc` - Allowed sync directions
- `branch-remote-guardrails.mdc` - Push protection rules
