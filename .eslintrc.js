module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    curly: [2, 'multi-line'], // allow single line if statements, e.g for returning early: if (!data) return;
    // prevent asserting types with "!", like myObject!.aProperty to prevent crashes for undefined objects,
    // can be allowed with: eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    '@typescript-eslint/no-non-null-assertion': 'error',
  },
};
