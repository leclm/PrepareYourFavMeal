module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.css$": "jest-css-modules-transform",
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/))(test|spec)\\.(jsx?|tsx?)$',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  },
};