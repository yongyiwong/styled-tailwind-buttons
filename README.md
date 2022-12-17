# Some components using cracao


### Tech Stack

What is this codebase using

- React
- Language: Typescript
- Styles: Tailwind css, styled-component, twin-macro

### Get Started

Installing dependencies:
`yarn`

Running
`yarn start`

Updating libraries
`yarn upgrade-interactive --latest`


### Testing

To check for project wide typescript errors:
`yarn tsc --noEmit`

### Code Guidelines

##### Readability

Auto formatting provided by prettier and eslint
the configuration files can be found in:
`.prettierrc.js`
`.eslintrc.js`

Guidelines for suggested code format

- Sensible, descriptive, unique & full (non-abbreviated) names variables, methods & classes

##### Patterns

- Subdirectories and general file names: camelCase
- Component folder/file names: PascalCase
- prefer exporting functions with the function keyword instead of const (although not high priority)
