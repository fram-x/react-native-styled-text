## Publish new release

### Make changes

- Make neccessary changes, verify that tests run and not type issues
- Update ./lib/CHANGELOG.md with changes for the to-be version
- Commit changes and merge branch to develop

### Bump version and publish

- git checkout develop & git pull
- Copy REAMD.md and LICENSE to ./lib folder
- Run one of:
  - cd ./lib && npm version patch && cd .. && npm version patch && npm publish ./lib
  - cd ./lib && npm version minor && cd .. && npm version minor && npm publish ./lib
  - cd ./lib && npm version major && cd .. && npm version major && npm publish ./lib

npm version will update in package.json, create a corresponding tag and push changes and tags to github repository. A github action will trigger on new tag and publish the new version to npm and create a new release in the github repository.
