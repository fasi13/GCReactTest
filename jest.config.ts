// jest.config.ts
import type { Config } from '@jest/types';

// Or async function
export default async (): Promise<Config.InitialOptions> => ({
	verbose: true,
	testEnvironment: 'jsdom',
	testResultsProcessor: 'jest-junit',
	moduleNameMapper: {
		'\\.(css|less|scss|sass|svg|png)$': '<rootDir>/config/CSSStub.js',
	},
	reporters: ['default', 'jest-junit'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	preset: 'ts-jest',
	transform: {
		'^.+\\.(ts|tsx)?$': 'babel-jest',
	},
});
