// src/framework/ui/components/monitor.js
/**
 * Generates the context data for a Monitor component.
 * @param {Object} config - { value, max, label }
 * @returns {Object} Context for the template
 */
export function createMonitorContext(config) {
  const { value, max, label } = config;
  const pips = [];

  for (let i = 1; i <= max; i++) {
    pips.push({
      index: i,
      filled: i <= value,
      classes: i <= value ? "filled" : "empty",
    });
  }

  return {
    label,
    value,
    max,
    pips,
  };
}
