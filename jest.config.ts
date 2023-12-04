/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', '<rootDir>'],
};

export default config;
