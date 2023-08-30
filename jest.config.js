module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  moduleNameMapper: {
    '^@testing-library/jest-dom/extend-expect$': require.resolve('@testing-library/jest-dom'),
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/index.{js,jsx,ts,tsx}',
    '!src/App.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
}
