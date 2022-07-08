module.exports = {
    preset: "jest-puppeteer",
    //collectCoverage: true,
    testRegex:"/*/.*\\.(test|Page)\\.[tj]sx?$",
    //testMatch:["<rootDir>/**/__specs__/*.Page.js" ]
    watchPlugins: ['./WatchPlugin.js'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    watchPathIgnorePatterns: ['globalConfig'],
    transform: {
      "^.+\\.js?$": "babel-jest"
    },
    
  };
