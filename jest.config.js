module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "mjs"],
  testEnvironment: 'jsdom'
};
