module.exports = {
  preset: "ts-jest",
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ],
  verbose: true,
};
