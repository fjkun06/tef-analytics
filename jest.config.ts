// jest.config.ts
import nextJest from "next/jest";

// Provide the path to your Next.js app to load next.config.js
// and .env files in your test environment
const createJestConfig = nextJest({
  dir: "./",
});

// Custom Jest configuration
const customJestConfig = {
  // Setup files executed after the testing framework is installed in the environment
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Test environment simulating a browser
  testEnvironment: "jsdom",

  // Map TypeScript paths from tsconfig.json to Jest moduleNameMapper
  moduleNameMapper: {
    // ...pathsToModuleNameMapper(compilerOptions.paths || {}, {
    //   prefix: "<rootDir>/src/",
    // }),
    "^@/(.*)$": "<rootDir>/src/$1",
    // Mock CSS and static assets
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },

  // Collect coverage information
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,ts,jsx,tsx}",
    "!src/components/icons/*.{js,ts,jsx,tsx}",
    "!src/components/cards/*.{js,ts}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "!src/utils/**/*.{js,ts,jsx,tsx}",
    "src/utils/functions/*.{js,ts,jsx,tsx}",
    "!src/pages/_app.{js,ts,jsx,tsx}",
    "!src/pages/_document.{js,ts,jsx,tsx}",
    "!**/node_modules/**",
  ],
  coverageDirectory: "<rootDir>/coverage",

  // Recognize TypeScript and JS/JSX/TSX files
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Transform using ts-jest for TypeScript files
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Ignore unnecessary paths
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],

  // Optional: verbose output
  verbose: true,
};

// Export the Jest config, ensuring next/jest can load Next.js config asynchronously
export default createJestConfig(customJestConfig);
