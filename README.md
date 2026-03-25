# Merge and Release Workflows

Reusable GitHub Action workflows for merging branches with optional release creation.

## Available Workflows

### 1. Merge Development to Staging
Merges `development` → `staging`

**Inputs:**
| Input | Description | Default |
|-------|-------------|---------|
| `create_release` | Create a GitHub release | `false` |
| `release_tag` | Release tag (e.g., `v1.0.0-rc.1`) | - |
| `release_name` | Custom release name | tag value |

### 2. Merge Staging to Master
Merges `staging` → `master`

**Inputs:**
| Input | Description | Default |
|-------|-------------|---------|
| `create_release` | Create a GitHub release | `true` |
| `release_tag` | Release tag (e.g., `v1.0.0`) | - |
| `release_name` | Custom release name | tag value |

## Usage

### Via GitHub UI
1. Go to **Actions** tab
2. Select the workflow (e.g., "Merge Staging to Master")
3. Click **Run workflow**
4. Fill in optional release details
5. Click **Run workflow**

### Via CLI
```bash
# Merge development to staging (no release)
gh workflow run "Merge Development to Staging"

# Merge development to staging with pre-release
gh workflow run "Merge Development to Staging" \
  -f create_release=true \
  -f release_tag=v1.2.0-rc.1

# Merge staging to master with release
gh workflow run "Merge Staging to Master" \
  -f create_release=true \
  -f release_tag=v1.2.0 \
  -f release_name="Version 1.2.0"
```

## Architecture

```
_merge-and-release.yml     # Reusable workflow (workflow_call)
    ↑
    ├── merge-development-to-staging.yml   # Fixed: development → staging
    └── merge-staging-to-master.yml        # Fixed: staging → master
```

The reusable workflow (`_merge-and-release.yml`) contains all the merge logic. The caller workflows have **fixed source and target branches** that cannot be changed without modifying the workflow files.

## Branch Protection

If you have branch protection rules, add `github-actions[bot]` to "Allow specified actors to bypass required pull requests" in your branch protection settings.

## Auto-Generated Release Notes

When creating a release, GitHub automatically generates notes including:
- Merged pull requests since the last release
- New contributors
- Full changelog link

Customize the format by adding `.github/release.yml` to your repository.
