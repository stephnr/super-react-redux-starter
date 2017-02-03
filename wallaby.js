module.exports = (wallaby) => {
  return {
    files: [
      'src/**/*.js',
      'src/**/*.jsx',
    ],

    tests: [
      '__tests__/**/*spec.js',
    ],

    env: {
      type: 'node',
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({ babelrc: true }),
    },

    testFramework: 'ava',

    // debug: true,
  };
};
