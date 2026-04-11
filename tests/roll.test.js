import { describe, it, expect } from "vitest";
import { AnarchyRoll } from "../src/modules/roll/roll.js";

describe("AnarchyRoll", () => {
  it("initializes with default values", () => {
    const roll = new AnarchyRoll({ pool: 6 });
    expect(roll.pool).toBe(6);
    expect(roll.param.target).toBe(5);
  });

  it("calculates pool hits", async () => {
    const roll = new AnarchyRoll({ pool: 6 });
    await roll.evaluate();
    // Our mock Roll returns count/3 hits. 6/3 = 2.
    expect(roll.total).toBe(2);
  });

  it("handles risk die", async () => {
    const roll = new AnarchyRoll({ pool: 6, risk: 1 });
    await roll.evaluate();
    // Risk mock returns 5 (hit).
    // Pool mock returns 2.
    // Total should be 2 + 1 = 3.
    expect(roll.total).toBe(3);
    expect(roll.riskOutcome).toBe("prowess");
  });
});
