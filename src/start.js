import { AnarchySystem } from './modules/anarchy-system.js';
// Ensure a globally available system id at runtime for asset resolution
globalThis.__ANARCHY_SYSTEM_ID__ =
  (typeof __SYSTEM_ID__ !== 'undefined' && __SYSTEM_ID__) || 'anarchy';

AnarchySystem.start();

import './styles/global.scss';
