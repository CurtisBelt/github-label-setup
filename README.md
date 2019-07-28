# Github Label Setup

Using `github-label-sync` (https://github.com/Financial-Times/github-label-sync) to keep label configuration in sync across multiple repositories.

## Labels

- `#0366d6` &nbsp;&nbsp; ![#0366d6](https://placehold.it/30x12/0366d6/000000?text=+) &nbsp;&nbsp; **dependencies** <i><small>[Dependabot] Pull requests that update a dependency file</i></small>
- `#ee0701` &nbsp;&nbsp; ![#ee0701](https://placehold.it/30x12/ee0701/000000?text=+) &nbsp;&nbsp; **security** <i><small>[Dependabot] Pull requests that address a security vulnerability</i></small>
- `#7057ff` &nbsp;&nbsp; ![#7057ff](https://placehold.it/30x12/7057ff/000000?text=+) &nbsp;&nbsp; **good first issue** <i><small>Good for newcomers</i></small>
- `#008672` &nbsp;&nbsp; ![#008672](https://placehold.it/30x12/008672/000000?text=+) &nbsp;&nbsp; **help wanted** <i><small>Extra attention is needed</i></small>
- `#eeeeee` &nbsp;&nbsp; ![#eeeeee](https://placehold.it/30x12/eeeeee/000000?text=+) &nbsp;&nbsp; **status: abandoned** <i><small>Leave comment with brief explanation.</i></small>
- `#eeeeee` &nbsp;&nbsp; ![#eeeeee](https://placehold.it/30x12/eeeeee/000000?text=+) &nbsp;&nbsp; **status: duplicate** <i><small>Leave comment with link to duplicate issue.</i></small>
- `#f7d931` &nbsp;&nbsp; ![#f7d931](https://placehold.it/30x12/f7d931/000000?text=+) &nbsp;&nbsp; **status: need more info**
- `#ff8787` &nbsp;&nbsp; ![#ff8787](https://placehold.it/30x12/ff8787/000000?text=+) &nbsp;&nbsp; **type: bug**
- `#6018bf` &nbsp;&nbsp; ![#6018bf](https://placehold.it/30x12/6018bf/000000?text=+) &nbsp;&nbsp; **type: enhancement**

## Usage

#### Step 1: Install

```bash
yarn install
```

#### Step 2: Update aliases in labels.json (optional)

If you want to transfer any existing labels to one of the standard labels, you can add it as an alias in the config.

For example, the label `wontfix` will be updated to `status: abandoned`.

```json
{
  "name": "status: abandoned",
  "color": "000000",
  "description": "Please comment with brief explanation.",
  "aliases": ["wontfix", "invalid", "status: not a bug", "status: wontfix"]
}
```

#### Step 3: Perform dry-run and review results

```bash
yarn github-label-sync --access-token xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx organization/repo-name --allow-added-labels  --dry-run
```

#### Step 4: Sync labels

```bash
yarn github-label-sync --access-token xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx organization/repo-name --allow-added-labels
```

##### Tips:

- Remove `--allow-added-labels` if you want to delete non-standard labels.
- Setup environment variable `GITHUB_ACCESS_TOKEN` on your OS to skip `--access-token`.

## Generate Labels Markdown for README

#### Step 1: Modify labels.json as needed

It's pretty self-explanitory, but for the full documentation see: https://github.com/Financial-Times/github-label-sync#label-json

#### Step 2: Update labels list in README using provided script

```bash
yarn generate-labels-markdown
```

The markdown will be printed to stdout. Simply copy/paste to README, replacing the old markdown.
