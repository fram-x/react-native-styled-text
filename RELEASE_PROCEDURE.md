## Publish new release

### Make changes

- Make neccessary changes, verify that tests run and not type issues
- Update CHANGELOG.md with changes for the to-be version
- Commit changes and merge branch to develop

### Bump version and publish

- Copy REAMD.md and LICENSE to ./lib folder
- From ./lib folder run one of:
  - npm version patch
  - npm version minor
  - npm version major

npm version will update in package.json, create a corresponding tag and push changes and tags to github repository. A github action will trigger on new tag and publish the new version to npm and create a new release in the github repository.
