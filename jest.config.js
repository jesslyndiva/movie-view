module.exports = {
  testEnvironment: './customTestEnv.js',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
  coverageProvider: 'v8',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'App.js',
    '.*.styles.js',
    '.*.config.js',
    '/src/Fixture',
    '/src/Constant'
  ],
  setupFilesAfterEnv: ['./setupFilesAfterEnv.js']
};
