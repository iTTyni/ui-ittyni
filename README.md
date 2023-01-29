# ITTYNI.COM user interface guide

> **Warning**

> this UI is reserved for [www.ittyni.com][https://ittyni.com]

## Commands

### Example

Then run the example inside another:

```bash
$ git clone {repo}
cd ui-ittyni
npm i # or yarn to install dependencies
```

### Storybook

Run inside another terminal:

```bash
 npm run storybook# or yarn storybook
```
> NOTE: open http://localhost:6006 to open storybook


This loads the stories from `./stories`.


## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Setup Files

This is the folder structure we set up for you:

```txt
/ui-ittyni
  index.html
  index.tsx       # test your component here in a demo app
  package.json
  tsconfig.json
./src
  ./components
     statefullComoponent.tsx
  ./ui
     statelessComponent.tsx
  index.tsx       # EDIT THIS
./test
  component.test.tsx   # EDIT THIS
./stories
  statefullComponent.stories.tsx # EDIT THIS
  statelessComponent.stories.tsx # EDIT THIS
./.storybook
  main.js
  preview.js
.gitignore
package.json
README.md         # EDIT THIS
tsconfig.json
```

#### React Testing Library


### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions



## Optimizations


