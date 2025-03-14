const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Jest setup file
  testEnvironment: 'jest-environment-jsdom', // Use jsdom for simulating the browser
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Handle module aliases
  },
}

module.exports = createJestConfig(customJestConfig)
