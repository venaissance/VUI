// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  collectCoverage: true,
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: ['lib/**/*.{ts,tsx}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
})
