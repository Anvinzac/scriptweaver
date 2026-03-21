import { generateAllScripts } from './generateMockData';

// Single shared instance of demo data — generated once, reused everywhere
export const demoScripts = generateAllScripts();
