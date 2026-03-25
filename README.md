# Merge and Release Action

A GitHub Action workflow that merges one branch into another and optionally creates a GitHub release with auto-generated release notes.

## Features

- Merge any source branch into a target branch
- Optionally create a GitHub release after merge
- Auto-generate release notes from merged PRs and commits
- Configurable via workflow_dispatch inputs

## Usage

### Triggering the Workflow

1. Go to the **Actions** tab in your repository
2. Select **Merge Branch and Release** from the workflows list
3. Click **Run workflow**
4. Fill in the inputs:
   - **source_branch**: The branch to merge from (e.g., `develop`)
   - **target_branch**: The branch to merge into (e.g., `main`)
   - **create_release**: Check this to create a GitHub release
   - **release_tag**: Required if creating a release (e.g., `v1.0.0`)
   - **release_name**: Optional custom name for the release

### Example Scenarios

#### Merge develop into main (no release)
- source_branch: `develop`
- target_branch: `main`
- create_release: `false`

#### Merge and create release
- source_branch: `develop`
- target_branch: `main`
- create_release: `true`
- release_tag: `v1.2.0`
- release_name: `Version 1.2.0`

## Permissions

The workflow requires `contents: write` permission to:
- Push merged changes to the target branch
- Create releases and tags

## Auto-Generated Release Notes

When creating a release, GitHub automatically generates release notes that include:
- List of merged pull requests since the last release
- New contributors
- Full changelog link

You can customize the format by adding a `.github/release.yml` file to your repository.
