// Mock Foundry VTT Globals
global.Hooks = {
  once: (hook, fn) => {
    if (hook === "init" || hook === "ready") fn();
  },
  on: () => {},
  callAll: () => {},
};

global.game = {
  i18n: {
    localize: (str) => str,
  },
  settings: {
    get: () => {},
    register: () => {},
  },
  system: {
    id: "anarchy",
  },
};

global.foundry = {
  utils: {
    mergeObject: (a, b) => Object.assign(a, b),
  },
  dice: {
    terms: {
      PoolTerm: {
        fromRolls: (rolls) => ({ rolls, toMessage: () => {} }),
      },
      Die: class Die {
        constructor() {
          this.options = {};
        }
      },
    },
  },
};

global.Roll = class Roll {
  constructor(formula) {
    this.formula = formula;
    this.total = 0;
    this.dice = [{ options: {} }];
    this.terms = [{ results: [] }];
  }

  evaluateSync() {
    // specific mocking for AnarchyRoll logic
    if (this.formula.includes("d6cs>=")) {
      // Pool roll
      const countMatch = this.formula.match(/(\d+)d6/);
      const count = countMatch ? parseInt(countMatch[1]) : 0;
      this.total = Math.floor(count / 3); // Mock 1/3 hits
      this.dice = [{ options: {} }];
    } else if (this.formula.includes("drcs>=")) {
      // Risk roll
      const countMatch = this.formula.match(/(\d+)dr/);
      const count = countMatch ? parseInt(countMatch[1]) : 0;
      // Mock all hits
      this.total = count;
      this.terms = [{ results: Array(count).fill({ result: 5 }) }];
      this.dice = [{ options: {} }];
    } else if (this.formula.includes("d1cf=1")) {
      // Removed dice
      this.total = 0;
      this.terms = [{ results: [] }];
    } else if (this.formula.includes("d6cf=1")) {
      // Glitch dice
      this.total = 0;
      this.terms = [{ results: [] }];
      this.dice = [{ options: {} }];
    }
    return this;
  }

  async evaluate() {
    return this.evaluateSync();
  }

  static fromTerms(terms) {
    return new Roll("");
  }

  async toMessage() {
    return {};
  }
};

global.ANARCHY = {
  common: {
    roll: {
      rollTheme: {
        dicePool: "ANARCHY.roll.dicePool",
        reroll: "ANARCHY.roll.reroll",
        removed: "ANARCHY.roll.removed",
        rerollRemoved: "ANARCHY.roll.rerollRemoved",
        glitch: "ANARCHY.roll.glitch",
        anarchyRisk: "ANARCHY.roll.anarchyRisk",
      },
    },
  },
};
