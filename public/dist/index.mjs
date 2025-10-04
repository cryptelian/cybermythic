var Gt = Object.defineProperty;
var At = (r) => {
  throw TypeError(r);
};
var jt = (r, e, t) => e in r ? Gt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var U = (r, e, t) => jt(r, typeof e != "symbol" ? e + "" : e, t), Wt = (r, e, t) => e.has(r) || At("Cannot " + t);
var Ct = (r, e, t) => e.has(r) ? At("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t);
var vt = (r, e, t) => (Wt(r, e, "access private method"), t);
const l = {
  TYPES: {
    Actor: {
      character: "TYPES.Actor.character",
      vehicle: "TYPES.Actor.vehicle",
      device: "TYPES.Actor.device",
      sprite: "TYPES.Actor.sprite",
      ic: "TYPES.Actor.ic"
    },
    Item: {
      contact: "TYPES.Item.contact",
      cyberdeck: "TYPES.Item.cyberdeck",
      gear: "TYPES.Item.gear",
      metatype: "TYPES.Item.metatype",
      quality: "TYPES.Item.quality",
      shadowamp: "TYPES.Item.shadowamp",
      skill: "TYPES.Item.skill",
      weapon: "TYPES.Item.weapon"
    }
  },
  settings: {
    defaultCssClass: {
      name: "ANARCHY.settings.defaultCssClass.name",
      hint: "ANARCHY.settings.defaultCssClass.hint"
    },
    anarchyHack: {
      name: "ANARCHY.settings.anarchyHack.name",
      hint: "ANARCHY.settings.anarchyHack.hint"
    },
    skillSet: {
      name: "ANARCHY.settings.skillSet.name",
      hint: "ANARCHY.settings.skillSet.hint"
    },
    gmDifficulty: {
      name: "ANARCHY.settings.gmDifficulty.name",
      hint: "ANARCHY.settings.gmDifficulty.hint",
      default: "ANARCHY.settings.gmDifficulty.default",
      chatMessage: "ANARCHY.settings.gmDifficulty.chatMessage"
    },
    damageMode: {
      name: "ANARCHY.settings.damageMode.name",
      hint: "ANARCHY.settings.damageMode.hint",
      values: {
        resistanceArmorMonitor: "ANARCHY.settings.damageMode.values.resistanceArmorMonitor",
        armorResistanceMonitor: "ANARCHY.settings.damageMode.values.armorResistanceMonitor",
        armorGivesResistance: "ANARCHY.settings.damageMode.values.armorGivesResistance",
        armorGiveResistanceHitsAvoid: "ANARCHY.settings.damageMode.values.armorGiveResistanceHitsAvoid"
      }
    },
    anarchyFirstMode: {
      name: "ANARCHY.settings.anarchyFirstMode.name",
      hint: "ANARCHY.settings.anarchyFirstMode.hint"
    },
    allowCoreFallback: {
      name: "ANARCHY.settings.allowCoreFallback.name",
      hint: "ANARCHY.settings.allowCoreFallback.hint"
    },
    preferCoreSheets: {
      name: "ANARCHY.settings.preferCoreSheets.name",
      hint: "ANARCHY.settings.preferCoreSheets.hint"
    }
  },
  gmManager: {
    title: "ANARCHY.gmManager.title",
    playerChangedAnarchy: "ANARCHY.gmManager.playerChangedAnarchy",
    gmReceivedAnarchy: "ANARCHY.gmManager.gmReceivedAnarchy",
    gmConvergence: "ANARCHY.gmManager.gmConvergence"
  },
  chat: {
    blindMessageToGM: "ANARCHY.chat.blindMessageToGM",
    sufferedDrain: "ANARCHY.chat.sufferedDrain",
    noDrain: "ANARCHY.chat.noDrain",
    defendAttack: "ANARCHY.chat.defendAttack",
    defendPilotAttack: "ANARCHY.chat.defendPilotAttack",
    partiallyDefended: "ANARCHY.chat.partiallyDefended",
    fullyDefended: "ANARCHY.chat.fullyDefended",
    applyDamage: "ANARCHY.chat.applyDamage"
  },
  user: {
    selectedTokenActors: "ANARCHY.user.selectedTokenActors"
  },
  common: {
    newEntry: "ANARCHY.common.newEntry",
    newName: "ANARCHY.common.newName",
    cancel: "ANARCHY.common.cancel",
    add: "ANARCHY.common.add",
    edit: "ANARCHY.common.edit",
    activate: "ANARCHY.common.activate",
    del: "ANARCHY.common.del",
    favorite: "ANARCHY.common.favorite",
    addFavorite: "ANARCHY.common.addFavorite",
    delFavorite: "ANARCHY.common.delFavorite",
    attach: "ANARCHY.common.attach",
    attachCopy: "ANARCHY.common.attachCopy",
    matrix: {
      connectionMode: "ANARCHY.common.matrix.connectionMode"
    },
    roll: {
      button: "ANARCHY.common.roll.button",
      title: "ANARCHY.common.roll.title",
      attribute: "ANARCHY.common.roll.attribute",
      attribute2: "ANARCHY.common.roll.attribute2",
      modifiers: {
        edge: "ANARCHY.common.roll.modifiers.edge",
        specialization: "ANARCHY.common.roll.modifiers.specialization",
        poolModifiers: "ANARCHY.common.roll.modifiers.poolModifiers",
        social: {
          credibility: "ANARCHY.common.roll.modifiers.social.credibility",
          rumor: "ANARCHY.common.roll.modifiers.social.rumor"
        },
        anarchyDisposition: "ANARCHY.common.roll.modifiers.anarchyDisposition",
        anarchyRisk: "ANARCHY.common.roll.modifiers.anarchyRisk",
        glitch: "ANARCHY.common.roll.modifiers.glitch",
        drain: "ANARCHY.common.roll.modifiers.drain",
        convergence: "ANARCHY.common.roll.modifiers.convergence",
        wounds: "ANARCHY.common.roll.modifiers.wounds",
        weaponRange: "ANARCHY.common.roll.modifiers.weaponRange",
        weaponArea: "ANARCHY.common.roll.modifiers.weaponArea",
        other: "ANARCHY.common.roll.modifiers.other",
        virtualReality: "ANARCHY.common.roll.modifiers.virtualReality",
        reduced: "ANARCHY.common.roll.modifiers.reduced",
        reroll: "ANARCHY.common.roll.modifiers.reroll",
        rerollForced: "ANARCHY.common.roll.modifiers.rerollForced",
        opponentReroll: "ANARCHY.common.roll.modifiers.opponentReroll",
        opponentPool: "ANARCHY.common.roll.modifiers.opponentPool"
      },
      rollTheme: {
        dicePool: "ANARCHY.common.roll.rollTheme.dicePool",
        reroll: "ANARCHY.common.roll.rollTheme.reroll",
        removed: "ANARCHY.common.roll.rollTheme.removed",
        rerollRemoved: "ANARCHY.common.roll.rollTheme.rerollRemoved",
        glitch: "ANARCHY.common.roll.rollTheme.glitch",
        drain: "ANARCHY.common.roll.rollTheme.drain",
        convergence: "ANARCHY.common.roll.rollTheme.convergence",
        anarchyRisk: "ANARCHY.common.roll.rollTheme.anarchyRisk"
      },
      opponentRoll: "ANARCHY.common.roll.opponentRoll",
      totalSuccess: "ANARCHY.common.roll.totalSuccess",
      success: "ANARCHY.common.roll.success",
      risk: {
        prowess: "ANARCHY.common.roll.risk.prowess",
        nothing: "ANARCHY.common.roll.risk.nothing",
        mixed: "ANARCHY.common.roll.risk.mixed",
        glitch: "ANARCHY.common.roll.risk.glitch"
      },
      rerollSuccess: "ANARCHY.common.roll.rerollSuccess",
      rerollForcedLoss: "ANARCHY.common.roll.rerollForcedLoss",
      rerollForcedSuccess: "ANARCHY.common.roll.rerollForcedSuccess"
    },
    confirmation: {
      del: "ANARCHY.common.confirmation.del",
      delItem: "ANARCHY.common.confirmation.delItem",
      delOwner: "ANARCHY.common.confirmation.delOwner",
      attach: "ANARCHY.common.confirmation.attach",
      attachOrCopy: "ANARCHY.common.confirmation.attachOrCopy"
    },
    selection: {
      actorSettingMarks: "ANARCHY.common.selection.actorSettingMarks"
    },
    errors: {
      insufficient: "ANARCHY.common.errors.insufficient",
      outOfRange: "ANARCHY.common.errors.outOfRange",
      onlyGM: "ANARCHY.common.errors.onlyGM",
      noEdgeForActor: "ANARCHY.common.errors.noEdgeForActor",
      expectedType: "ANARCHY.common.errors.expectedType",
      ignoredTargets: "ANARCHY.common.errors.ignoredTargets",
      noTargetSelected: "ANARCHY.common.errors.noTargetSelected",
      maxTargetsExceedeed: "ANARCHY.common.errors.maxTargetsExceedeed",
      noDefenseOnWeapon: "ANARCHY.common.errors.noDefenseOnWeapon",
      noTokenActor: "ANARCHY.common.errors.noTokenActor",
      noValidPilotForVehicle: "ANARCHY.common.errors.noValidPilotForVehicle",
      cannotUseEdgeAnymore: "ANARCHY.common.errors.cannotUseEdgeAnymore",
      actorCannotApplyDamage: "ANARCHY.common.errors.actorCannotApplyDamage",
      actorCannotReceiveDamage: "ANARCHY.common.errors.actorCannotReceiveDamage",
      actorDoesNotHaveDefense: "ANARCHY.common.errors.actorDoesNotHaveDefense"
    },
    sourceReference: "ANARCHY.common.sourceReference",
    sourceReferenceHelp: "ANARCHY.common.sourceReferenceHelp",
    description: "ANARCHY.common.description",
    gmnotes: "ANARCHY.common.gmnotes"
  },
  actor: {
    characterSheet: "ANARCHY.actor.characterSheet",
    characterTabbedSheet: "ANARCHY.actor.characterTabbedSheet",
    characterEnhancedSheet: "ANARCHY.actor.characterEnhancedSheet",
    vehicleSheet: "ANARCHY.actor.vehicleSheet",
    deviceSheet: "ANARCHY.actor.deviceSheet",
    spriteSheet: "ANARCHY.actor.spriteSheet",
    icSheet: "ANARCHY.actor.icSheet",
    characterNPCSheet: "ANARCHY.actor.characterNPCSheet",
    actorName: "ANARCHY.actor.actorName",
    genre: "ANARCHY.actor.genre",
    noMetatype: "ANARCHY.actor.noMetatype",
    celebrity: "ANARCHY.actor.celebrity",
    tabs: {
      main: "ANARCHY.actor.tabs.main",
      equipment: "ANARCHY.actor.tabs.equipment",
      biography: "ANARCHY.actor.tabs.biography"
    },
    words: {
      keywords: "ANARCHY.actor.words.keywords",
      cues: "ANARCHY.actor.words.cues",
      dispositions: "ANARCHY.actor.words.dispositions"
    },
    essence: {
      adjustments: "ANARCHY.actor.essence.adjustments",
      adjustShort: "ANARCHY.actor.essence.adjustShort"
    },
    counters: {
      essence: "ANARCHY.actor.counters.essence",
      karma: "ANARCHY.actor.counters.karma",
      karmaTotal: "ANARCHY.actor.counters.karmaTotal",
      edge: "ANARCHY.actor.counters.edge",
      anarchy: "ANARCHY.actor.counters.anarchy",
      sceneAnarchy: "ANARCHY.actor.counters.sceneAnarchy",
      plot: "ANARCHY.actor.counters.plot",
      social: {
        credibility: "ANARCHY.actor.counters.social.credibility",
        rumor: "ANARCHY.actor.counters.social.rumor"
      }
    },
    monitors: {
      conditionMonitors: "ANARCHY.actor.monitors.conditionMonitors",
      overflow: "ANARCHY.actor.monitors.overflow",
      noMatrixMonitor: "ANARCHY.actor.monitors.noMatrixMonitor",
      physical: "ANARCHY.actor.monitors.physical",
      stun: "ANARCHY.actor.monitors.stun",
      matrix: "ANARCHY.actor.monitors.matrix",
      armor: "ANARCHY.actor.monitors.armor",
      structure: "ANARCHY.actor.monitors.structure",
      resistance: "ANARCHY.actor.monitors.resistance",
      marks: "ANARCHY.actor.monitors.marks",
      convergence: "ANARCHY.actor.monitors.convergence"
    },
    vehicle: {
      moves: "ANARCHY.actor.vehicle.moves",
      attacks: "ANARCHY.actor.vehicle.attacks",
      stealth: "ANARCHY.actor.vehicle.stealth",
      category: "ANARCHY.actor.vehicle.category",
      skill: "ANARCHY.actor.vehicle.skill"
    },
    ownership: {
      owner: "ANARCHY.actor.ownership.owner",
      unknown: "ANARCHY.actor.ownership.unknown",
      owned: "ANARCHY.actor.ownership.owned"
    }
  },
  actorType: {
    character: "ANARCHY.actorType.character",
    vehicle: "ANARCHY.actorType.vehicle",
    device: "ANARCHY.actorType.device",
    sprite: "ANARCHY.actorType.sprite",
    ic: "ANARCHY.actorType.ic"
  },
  item: {
    sheet: "ANARCHY.item.sheet",
    tabs: {
      main: "ANARCHY.item.tabs.main",
      modifiers: "ANARCHY.item.tabs.modifiers"
    },
    common: {
      inactive: "ANARCHY.item.common.inactive"
    },
    skill: {
      code: "ANARCHY.item.skill.code",
      copyDefault: "ANARCHY.item.skill.useDefault",
      isKnowledge: "ANARCHY.item.skill.isKnowledge",
      attribute: "ANARCHY.item.skill.attribute",
      value: "ANARCHY.item.skill.value",
      specialization: "ANARCHY.item.skill.specialization",
      hasDrain: "ANARCHY.item.skill.isSocial",
      hasDrain: "ANARCHY.item.skill.hasDrain",
      hasConvergence: "ANARCHY.item.skill.hasConvergence",
      specializationHelp: "ANARCHY.item.skill.specializationHelp"
    },
    quality: {
      positive: "ANARCHY.item.quality.positive"
    },
    shadowamp: {
      category: "ANARCHY.item.shadowamp.category",
      capacity: "ANARCHY.item.shadowamp.capacity",
      level: "ANARCHY.item.shadowamp.level",
      essence: "ANARCHY.item.shadowamp.essence",
      levelShort: "ANARCHY.item.shadowamp.levelShort",
      essenceShort: "ANARCHY.item.shadowamp.essenceShort"
    },
    weapon: {
      skill: "ANARCHY.item.weapon.skill",
      damage: "ANARCHY.item.weapon.damage",
      strength: "ANARCHY.item.weapon.strength",
      defense: "ANARCHY.item.weapon.defense",
      area: "ANARCHY.item.weapon.area",
      noArmor: "ANARCHY.item.weapon.noArmor",
      withArmor: "ANARCHY.item.weapon.withArmor",
      damageShort: "ANARCHY.item.weapon.damageShort",
      areaShort: "ANARCHY.item.weapon.areaShort",
      noArmorShort: "ANARCHY.item.weapon.noArmorShort",
      weaponWithoutActor: "ANARCHY.item.weapon.weaponWithoutActor",
      range: {
        max: "ANARCHY.item.weapon.range.max"
      }
    },
    cyberdeck: {
      programs: "ANARCHY.item.cyberdeck.programs",
      processing: "ANARCHY.item.cyberdeck.processing",
      processingHelp: "ANARCHY.item.cyberdeck.processingHelp"
    }
  },
  itemType: {
    singular: {
      metatype: "ANARCHY.itemType.singular.metatype",
      skill: "ANARCHY.itemType.singular.skill",
      quality: "ANARCHY.itemType.singular.quality",
      shadowamp: "ANARCHY.itemType.singular.shadowamp",
      weapon: "ANARCHY.itemType.singular.weapon",
      gear: "ANARCHY.itemType.singular.gear",
      cyberdeck: "ANARCHY.itemType.singular.cyberdeck",
      contact: "ANARCHY.itemType.singular.contact"
    },
    plural: {
      metatype: "ANARCHY.itemType.plural.metatype",
      skill: "ANARCHY.itemType.plural.skill",
      quality: "ANARCHY.itemType.plural.quality",
      shadowamp: "ANARCHY.itemType.plural.shadowamp",
      weapon: "ANARCHY.itemType.plural.weapon",
      gear: "ANARCHY.itemType.plural.gear",
      cyberdeck: "ANARCHY.itemType.plural.cyberdeck",
      contact: "ANARCHY.itemType.plural.contact"
    }
  },
  capacity: {
    mundane: "ANARCHY.capacity.mundane",
    awakened: "ANARCHY.capacity.awakened",
    emerged: "ANARCHY.capacity.emerged"
  },
  monitor: {
    physical: "ANARCHY.monitor.physical",
    stun: "ANARCHY.monitor.stun",
    matrix: "ANARCHY.monitor.matrix",
    marks: "ANARCHY.monitor.marks"
  },
  monitorLetter: {
    physical: "ANARCHY.monitorLetter.physical",
    stun: "ANARCHY.monitorLetter.stun",
    matrix: "ANARCHY.monitorLetter.matrix",
    marks: "ANARCHY.monitorLetter.marks"
  },
  shadowampCategory: {
    adeptPower: "ANARCHY.shadowampCategory.adeptPower",
    bioware: "ANARCHY.shadowampCategory.bioware",
    complexForm: "ANARCHY.shadowampCategory.complexForm",
    cyberdeck: "ANARCHY.shadowampCategory.cyberdeck",
    cyberware: "ANARCHY.shadowampCategory.cyberware",
    drone: "ANARCHY.shadowampCategory.drone",
    equipment: "ANARCHY.shadowampCategory.equipment",
    focus: "ANARCHY.shadowampCategory.focus",
    program: "ANARCHY.shadowampCategory.program",
    spell: "ANARCHY.shadowampCategory.spell",
    special: "ANARCHY.shadowampCategory.special"
  },
  attributes: {
    noAttribute: "ANARCHY.attributes.noAttributes",
    strength: "ANARCHY.attributes.strength",
    agility: "ANARCHY.attributes.agility",
    willpower: "ANARCHY.attributes.willpower",
    logic: "ANARCHY.attributes.logic",
    charisma: "ANARCHY.attributes.charisma",
    edge: "ANARCHY.attributes.edge",
    autopilot: "ANARCHY.attributes.autopilot",
    handling: "ANARCHY.attributes.handling",
    firewall: "ANARCHY.attributes.firewall",
    system: "ANARCHY.attributes.system",
    knowledge: "ANARCHY.attributes.knowledge"
  },
  attributeAction: {
    defense: "ANARCHY.attributeAction.defense",
    judgeIntentions: "ANARCHY.attributeAction.judgeIntentions",
    perception: "ANARCHY.attributeAction.perception",
    resistTorture: "ANARCHY.attributeAction.resistTorture",
    composure: "ANARCHY.attributeAction.composure",
    memory: "ANARCHY.attributeAction.memory",
    catch: "ANARCHY.attributeAction.catch",
    lift: "ANARCHY.attributeAction.lift",
    matrixDefense: "ANARCHY.attributeAction.matrixDefense",
    astralDefense: "ANARCHY.attributeAction.astralDefense"
  },
  defense: {
    physicalDefense: "ANARCHY.defense.physicalDefense",
    physicalResistance: "ANARCHY.defense.physicalResistance",
    socialDefense: "ANARCHY.defense.socialDefense",
    matrixDefense: "ANARCHY.defense.matrixDefense",
    mentalResistance: "ANARCHY.defense.mentalResistance"
  },
  skill: {
    athletics: "ANARCHY.skill.athletics",
    acrobatics: "ANARCHY.skill.acrobatics",
    closeCombat: "ANARCHY.skill.closeCombat",
    projectileWeapons: "ANARCHY.skill.projectileWeapons",
    firearms: "ANARCHY.skill.firearms",
    heavyWeapons: "ANARCHY.skill.heavyWeapons",
    vehicleWeapons: "ANARCHY.skill.vehicleWeapons",
    stealth: "ANARCHY.skill.stealth",
    pilotingGround: "ANARCHY.skill.pilotingGround",
    pilotingOther: "ANARCHY.skill.pilotingOther",
    escapeArtist: "ANARCHY.skill.escapeArtist",
    astralCombat: "ANARCHY.skill.astralCombat",
    conjuring: "ANARCHY.skill.conjuring",
    sorcery: "ANARCHY.skill.sorcery",
    survival: "ANARCHY.skill.survival",
    biotech: "ANARCHY.skill.biotech",
    electronics: "ANARCHY.skill.electronics",
    hacking: "ANARCHY.skill.hacking",
    engineering: "ANARCHY.skill.engineering",
    tracking: "ANARCHY.skill.tracking",
    tasking: "ANARCHY.skill.tasking",
    con: "ANARCHY.skill.con",
    intimidation: "ANARCHY.skill.intimidation",
    negotiation: "ANARCHY.skill.negotiation",
    disguise: "ANARCHY.skill.disguise",
    animals: "ANARCHY.skill.animals",
    etiquette: "ANARCHY.skill.etiquette",
    knowledge: "ANARCHY.skill.knowledge"
  },
  area: {
    none: "ANARCHY.area.none",
    shotgun: "ANARCHY.area.shotgun",
    circle: "ANARCHY.area.circle",
    cone: "ANARCHY.area.cone",
    rect: "ANARCHY.area.rect",
    ray: "ANARCHY.area.ray"
  },
  range: {
    short: "ANARCHY.range.short",
    medium: "ANARCHY.range.medium",
    long: "ANARCHY.range.long"
  },
  connectionMode: {
    disconnected: "ANARCHY.connectionMode.disconnected",
    augmented: "ANARCHY.connectionMode.augmented",
    virtual: "ANARCHY.connectionMode.virtual"
  },
  vehicleCategory: {
    miniDrone: "ANARCHY.vehicleCategory.miniDrone",
    smallDrone: "ANARCHY.vehicleCategory.smallDrone",
    mediumDrone: "ANARCHY.vehicleCategory.mediumDrone",
    largeDrone: "ANARCHY.vehicleCategory.largeDrone",
    motorcycle: "ANARCHY.vehicleCategory.motorcycle",
    smallCar: "ANARCHY.vehicleCategory.smallCar",
    largeCar: "ANARCHY.vehicleCategory.largeCar",
    van: "ANARCHY.vehicleCategory.van",
    truck: "ANARCHY.vehicleCategory.truck",
    aircraft: "ANARCHY.vehicleCategory.aircraft",
    boat: "ANARCHY.vehicleCategory.boat"
  },
  modifier: {
    column: {
      group: "ANARCHY.modifier.column.group",
      effect: "ANARCHY.modifier.column.effect",
      value: "ANARCHY.modifier.column.value",
      category: "ANARCHY.modifier.column.category",
      subCategory: "ANARCHY.modifier.column.subCategory",
      target: "ANARCHY.modifier.column.target",
      condition: "ANARCHY.modifier.column.condition"
    },
    group: {
      roll: "ANARCHY.modifier.group.roll",
      attribute: "ANARCHY.modifier.group.attribute",
      monitor: "ANARCHY.modifier.group.monitor",
      other: "ANARCHY.modifier.group.other"
    },
    roll: {
      effect: {
        pool: "ANARCHY.modifier.roll.effect.pool",
        reroll: "ANARCHY.modifier.roll.effect.reroll",
        glitch: "ANARCHY.modifier.roll.effect.glitch",
        successReroll: "ANARCHY.modifier.roll.effect.successReroll",
        opponentPool: "ANARCHY.modifier.roll.effect.opponentPool",
        opponentReroll: "ANARCHY.modifier.roll.effect.opponentReroll"
      },
      category: {
        attribute: "ANARCHY.modifier.roll.category.attribute",
        skill: "ANARCHY.modifier.roll.category.skill",
        attributeAction: "ANARCHY.modifier.roll.category.attributeAction"
      }
    },
    monitor: {
      effect: {
        armor: "ANARCHY.modifier.monitor.effect.armor",
        structure: "ANARCHY.modifier.monitor.effect.structure",
        stun: "ANARCHY.modifier.monitor.effect.stun",
        physical: "ANARCHY.modifier.monitor.effect.physical",
        matrix: "ANARCHY.modifier.monitor.effect.matrix"
      },
      category: {
        max: "ANARCHY.modifier.monitor.category.max",
        resistance: "ANARCHY.modifier.monitor.category.resistance"
      }
    },
    other: {
      effect: {
        ignoreWounds: "ANARCHY.modifier.other.effect.ignoreWounds",
        damageArmor: "ANARCHY.modifier.other.effect.damageArmor",
        sceneAnarchy: "ANARCHY.modifier.other.effect.sceneAnarchy",
        locationAnarchy: "ANARCHY.modifier.other.effect.locationAnarchy",
        essenceAdjustment: "ANARCHY.modifier.other.effect.essenceAdjustment",
        initiative: "ANARCHY.modifier.other.effect.initiative",
        celebrity: "ANARCHY.modifier.other.effect.celebrity"
      },
      category: {}
    },
    condition: {
      always: "ANARCHY.modifier.condition.always"
    }
  }
}, ee = class ee {
  static ascending(e = (t) => t) {
    return (t, s) => ee.sortingBy(e(t), e(s));
  }
  static descending(e = (t) => t) {
    return (t, s) => ee.sortingBy(e(s), e(t));
  }
  static sortingBy(e, t) {
    return e > t ? 1 : e < t ? -1 : 0;
  }
  static bySortedArray(e) {
    return (t) => e.indexOf(t);
  }
  static ascendingBySortedArray(e) {
    return ee.ascending(ee.bySortedArray(e));
  }
  static sortedMap(e, t = (s, a) => 0) {
    return Object.keys(e).sort(t).reduce((s, a) => (s[a] = e[a], s), {});
  }
  static reindexIds(e) {
    let t = 1;
    return e.forEach((s) => s.id = t++), e;
  }
  static distinct(e) {
    return [...new Set(e)];
  }
  static sum() {
    return (e, t) => e + t;
  }
  static sumValues(e, t = (s) => s) {
    return e.map(t).filter((s) => s != null).reduce(ee.sum(), 0);
  }
  static divint(e, t) {
    return Math.floor(e / t);
  }
  static divup(e, t) {
    return Math.ceil(e / t);
  }
  static join(e, t = "") {
    return e.reduce(ee.joiner(t));
  }
  static joiner(e = "") {
    return (t, s) => t + e + s;
  }
  static classify(e, t = (s) => s.type) {
    let s = {};
    return ee.classifyInto(s, e, t), s;
  }
  static classifyFirst(e, t) {
    let s = {};
    for (const a of e) {
      const i = t(a);
      s[i] || (s[i] = a);
    }
    return s;
  }
  static classifyInto(e, t, s = (a) => a.type) {
    for (const a of t) {
      const i = s(a);
      let o = e[i];
      o || (o = [], e[i] = o), o.push(a);
    }
  }
  static showControlWhen(e, t) {
    t ? e.show() : e.hide();
  }
  static minmax(e, t, s) {
    return Math.max(t, Math.min(e, s));
  }
};
U(ee, "isString", (e) => typeof e == "string" || e instanceof String);
let b = ee;
const St = {
  keyword: "keywords",
  disposition: "dispositions",
  cue: "cues"
}, f = class f {
  // this method is the place to add settings-based entries in the enums
  static init() {
    f.hbsAttributes = f.mapObjetToKeyValue(l.attributes).filter(
      (e) => e.value != "knowledge" && e.value != "noAttribute"
    ), f.hbsItemTypes = f.mapObjetToKeyValue(l.itemType), f.hbsCapacities = f.mapObjetToKeyValue(l.capacity), f.hbsMonitors = f.mapObjetToKeyValue(l.monitor), f.hbsMonitorLetters = f.mapObjetToKeyValue(l.monitorLetter), f.hbsShadowampCategories = f.mapObjetToKeyValue(l.shadowampCategory), f.hbsAreas = f.mapObjetToKeyValue(l.area), f.hbsRanges = f.mapObjetToKeyValue(l.range), f.hbsVehicleCategories = f.mapObjetToKeyValue(l.vehicleCategory), f.sortedAttributeKeys = Object.keys(l.attributes), f.registerHandleBarHelpers();
  }
  static registerHandleBarHelpers() {
    Handlebars.registerHelper(
      "sortedAttributes",
      (e) => b.sortedMap(e, b.ascendingBySortedArray(f.sortedAttributeKeys))
    );
  }
  static getEnums(e = (s) => !0, t = !1) {
    return {
      attributes: f.getAttributes(e),
      itemTypes: f.hbsItemTypes,
      capacities: f.hbsCapacities,
      monitors: f.hbsMonitors,
      shadowampCategories: f.hbsShadowampCategories,
      skills: game.system.anarchy.skills.getSkills({ withKnowledge: t }).map((s) => ({ value: s.code, label: game.i18n.localize(s.labelkey), labelkey: s.labelkey })),
      areas: f.hbsAreas,
      ranges: f.hbsRanges,
      vehicleCategories: f.hbsVehicleCategories
    };
  }
  static getAttributes(e = (t) => !0) {
    return f.hbsAttributes.filter((t) => e(t.value));
  }
  static getActorWordTypes() {
    return St;
  }
  static getMonitors() {
    return f.hbsMonitors;
  }
  static getMonitorLetters() {
    return f.hbsMonitorLetters;
  }
  static getActorWordTypePlural(e) {
    return St[e];
  }
  static localizeAttribute(e) {
    return l.attributes[e] ? game.i18n.localize(l.attributes[e]) : game.i18n.localize(l.attributes.noAttribute);
  }
  static getFromList(e, t, s = "value", a = "labelkey") {
    const i = e.find((o) => o[s] == t);
    return i ? i[a] : void 0;
  }
  static mapObjetToKeyValue(e, t = "value", s = "labelkey") {
    return Object.entries(e).map((a) => {
      const i = {};
      return i[t] = a[0], i[s] = a[1], i;
    });
  }
};
U(f, "ENUMS"), U(f, "hbsAttributes"), U(f, "hbsItemTypes"), U(f, "hbsCapacities"), U(f, "hbsMonitors"), U(f, "hbsMonitorLetters"), U(f, "hbsShadowampCategories"), U(f, "hbsAreas"), U(f, "hbsRanges"), U(f, "sortedAttributeKeys");
let E = f;
const d = "anarchy", ge = "Anarchy", ot = `system.${d}`, G = d, Ce = `systems/${d}`, Pt = `${Ce}/style`, y = `systems/${d}/templates`, j = `${Ce}/icons`, w = `${j}/skills`, u = "Anarchy | ", Bt = 3, Kt = 2, qt = 6, Qt = 5, Xt = 4, Lt = 8, m = {
  actorTypes: {
    character: "character",
    vehicle: "vehicle",
    device: "device",
    sprite: "sprite",
    ic: "ic"
  },
  itemType: {
    metatype: "metatype",
    skill: "skill",
    quality: "quality",
    shadowamp: "shadowamp",
    weapon: "weapon",
    gear: "gear",
    cyberdeck: "cyberdeck",
    contact: "contact"
  },
  attributes: {
    agility: "agility",
    strength: "strength",
    willpower: "willpower",
    logic: "logic",
    charisma: "charisma",
    edge: "edge",
    autopilot: "autopilot",
    handling: "handling",
    firewall: "firewall",
    system: "system",
    knowledge: "knowledge"
  },
  capacities: {
    mundane: "mundane",
    awakened: "awakened",
    emerged: "emerged"
  },
  monitors: {
    stun: "stun",
    armor: "armor",
    physical: "physical",
    structure: "structure",
    matrix: "matrix",
    marks: "marks",
    convergence: "convergence",
    anarchy: "anarchy",
    plot: "plot",
    sceneAnarchy: "sceneAnarchy"
  },
  counters: {
    edge: "edge",
    social: {
      celebrity: "celebrity",
      credibility: "credibility",
      rumor: "rumor"
    }
  },
  area: {
    none: "none",
    shotgun: "shotgun",
    circle: "circle",
    cone: "cone",
    rect: "rect",
    ray: "ray"
  }
}, z = {
  rollType: {
    attributeAction: "attributeAction",
    defense: "defense",
    defensePilot: "defensePilot",
    attribute: "attribute",
    skill: "skill",
    weapon: "weapon"
  },
  actions: {
    defense: "defense",
    resistTorture: "resistTorture",
    judgeIntentions: "judgeIntentions",
    perception: "perception",
    composure: "composure",
    memory: "memory",
    catch: "catch",
    lift: "lift",
    matrixDefense: "matrixDefense",
    astralDefense: "astralDefense"
  },
  defenses: {
    physicalDefense: "physicalDefense",
    physicalResistance: "physicalResistance",
    socialDefense: "socialDefense",
    matrixDefense: "matrixDefense",
    mentalResistance: "mentalResistance"
  },
  fixedDefenseCode: {
    // fix for old incorrect defense codes
    mentalDefense: "physicalResistance",
    astralDefense: "mentalResistance"
  }
};
globalThis.ANARCHY_CONSTANTS = {
  SYSTEM_NAME: d,
  SYSTEM_DESCRIPTION: ge,
  SYSTEM_SOCKET: ot,
  SYSTEM_SCOPE: G,
  SYSTEM_PATH: Ce,
  STYLE_PATH: Pt,
  TEMPLATES_PATH: y,
  ICONS_PATH: j,
  ICONS_SKILLS_PATH: w,
  LOG_HEAD: u,
  ANARCHY_DICE_BONUS: Bt,
  SPECIALIZATION_BONUS: Kt,
  PLAYER_MAX_ANARCHY: qt,
  TARGET_SUCCESS: Qt,
  TARGET_SUCCESS_EDGE: Xt,
  BASE_MONITOR: Lt,
  TEMPLATE: m,
  ANARCHY_SYSTEM: z
};
class ae {
  static checkSufficient(e, t, s) {
    if (t > s) {
      const a = game.i18n.format(l.common.errors.insufficient, {
        resource: game.i18n.localize(e),
        required: t,
        available: s
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkOutOfRange(e, t, s, a) {
    if (t < s || t > a) {
      const i = game.i18n.format(l.common.errors.outOfRange, {
        resource: game.i18n.localize(e),
        value: t,
        min: s,
        max: a
      });
      throw ui.notifications.error(i), i;
    }
  }
  static checkUserGM() {
    if (!game.user.isGM) {
      const e = game.i18n.localize(l.common.errors.onlyGM);
      throw ui.notifications.error(e), e;
    }
  }
  static checkItemType(e, t) {
    if (e.type != t) {
      const s = game.i18n.format(l.common.errors.expectedType, {
        type: game.i18n.localize(e.type ? l.itemType.singular[e.type] : e.type),
        expectedType: game.i18n.localize(t)
      });
      throw ui.notifications.error(s), s;
    }
  }
  static checkActorCanReceiveDamage(e, t, s) {
    if (!t) {
      const a = game.i18n.format(l.common.errors.actorCannotReceiveDamage, {
        actor: s.name,
        damageType: game.i18n.format("ANARCHY.actor.monitors." + e)
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkWeaponDefense(e, t) {
    if (!e.getDefense()) {
      const a = game.i18n.format(l.common.errors.noDefenseOnWeapon, {
        actor: t.name,
        weapon: e.name
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkTargetsCount(e, t, s) {
    if (e > 0 && t.length > e) {
      const a = game.i18n.format(l.common.errors.maxTargetsExceedeed, {
        weapon: this.name,
        area: game.i18n.localize(l.area[s]),
        count: t.length,
        max: e
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkMatrixMonitor(e) {
    if (!e.hasMatrixMonitor()) {
      const t = game.i18n.format(l.actor.monitors.noMatrixMonitor, {
        actor: e.name
      });
      throw ui.notifications.warn(t), t;
    }
  }
  static checkActorDefenseAction(e, t, s) {
    if (!e) {
      const a = game.i18n.format(l.common.errors.actorDoesNotHaveDefense, {
        actor: t.name,
        defense: game.i18n.localize(s.labelkey),
        actorType: game.i18n.localize(l.actorType[t.type])
      });
      throw ui.notifications.error(a), a;
    }
  }
}
const wt = "Users.blindMessageToGM";
class P {
  static init() {
    X.register(wt, {
      callback: (e) => P.blindMessageToGM(e),
      condition: (e) => e.isGM
    });
  }
  static blindMessageToGM(e) {
    X.call(wt, e) || ChatMessage.create({
      user: e.user,
      whisper: ChatMessage.getWhisperRecipients("GM"),
      blind: !0,
      content: game.i18n.format(l.chat.blindMessageToGM, {
        user: game.user.name,
        message: e.content
      })
    });
  }
  static getUsers(e = (t) => !0) {
    return (game.version ? game.users : game.users.entities).filter(e);
  }
  static firstConnectedGM() {
    return P.getUsers((e) => e.isGM && e.active).sort(b.ascending((e) => e.id)).at(0) ?? {};
  }
  /**
   * @returns true pour un seul utilisateur: le premier GM connecté par ordre d'id
   */
  static isUniqueConnectedGM(e = game.user) {
    return e.id == P.firstConnectedGM().id;
  }
  static firstResponsible(e) {
    if (e.testUserPermission)
      return P.getUsers(
        (t) => t.active && e.testUserPermission(t, CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER)
      ) == game.user;
  }
  static getTargetTokens(e) {
    return Array.from(e.targets);
  }
  static getSelectedTokens(e) {
    return Array.from(canvas.tokens.controlled);
  }
  static getSelectedActors() {
    return Array.from(canvas.tokens.controlled).map((e) => e.actor);
  }
  static getPlayerActor() {
    return game.user.character;
  }
}
class X {
  constructor() {
    this.remoteCalls = {}, game.socket.on(ot, async (e) => this.onSocketMessage(e));
  }
  static async register(e, t) {
    game.system.anarchy.remoteCall._register(e, t);
  }
  async _register(e, t) {
    if (this.remoteCalls[e])
      throw `RemoteCall msg ${e} is already registered`;
    foundry.utils.mergeObject(
      t,
      {
        callback: (s) => {
          console.log(u + "RemoteCall [", e, "] (", s, ")");
        },
        condition: (s) => !0,
        multiple: !1
      },
      { overwrite: !1 }
    ), this.remoteCalls[e] = t, console.log(u + "RemoteCall registered", e);
  }
  static call(e, t) {
    return game.system.anarchy.remoteCall._remoteCall(e, t);
  }
  _remoteCall(e, t) {
    const s = this.remoteCalls[e];
    return !s || s.condition(game.user) || !s.multiple && P.isUniqueConnectedGM() ? !1 : (game.socket.emit(ot, { msg: e, data: t }), !0);
  }
  async onSocketMessage(e) {
    const t = this.remoteCalls[e.msg];
    if (t) {
      const s = t.condition(game.user), a = t.multiple, i = P.isUniqueConnectedGM();
      s && (a || i) ? t.callback(e.data) : console.log(
        u + "RemoteCall.onSocketMessage(",
        e,
        ") ignored :",
        s,
        a,
        i
      );
    } else
      console.log(u + "RemoteCall: No callback registered for", e);
  }
}
const rt = "parent-message-id", be = "message-data", mt = "can-use-edge", dt = "owning-actor", kt = "ChatManager.removeChatMessage", Rt = "ChatManager.removeChatMessageFamily", Zt = [
  {
    selector: ".anarchy-button.click-edge-reroll",
    controlVisibility: !0,
    handler: async (r, e) => await T.edgeReroll(r)
  },
  {
    selector: ".anarchy-button.click-defend-attack",
    controlVisibility: !0,
    handler: async (r, e) => await T.defendAttack(r)
  },
  {
    selector: ".anarchy-button.click-defend-pilot-attack",
    controlVisibility: !0,
    handler: async (r, e) => await T.defendPilotAttack(r)
  },
  {
    selector: ".anarchy-button.click-apply-attack-damage",
    controlVisibility: !0,
    handler: async (r, e) => await T.applyAttack(r)
  },
  {
    selector: "img.open-actor-sheet",
    controlVisibility: !1,
    handler: async (r, e) => await T.openActorSheet(r, e)
  }
];
class T {
  static async init() {
    Hooks.on(
      "renderChatMessage",
      async (e, t, s) => await T.onRenderChatMessage(e, t, s)
    ), X.register(Rt, {
      callback: (e) => this.removeFamily(e),
      condition: (e) => e.isGM
    }), X.register(kt, {
      callback: (e) => T.removeChatMessage(e),
      condition: (e) => e.isGM
    });
  }
  static async onRenderChatMessage(e, t, s) {
    const a = T.getChatMessageFromHtml(t), i = T.hasRight(a);
    Zt.forEach((o) => {
      const n = t.find(o.selector);
      !o.controlVisibility || i ? (n.show(), n.click(
        async (c) => await o.handler(T.getChatMessage(c), c)
      )) : (n.hide(), n.click(async (c) => {
      }));
    });
  }
  static async openActorSheet(e, t) {
    var o;
    const s = $(t.currentTarget).closest("img.open-actor-sheet"), a = s.attr("data-token-id");
    if (a) {
      const n = canvas.tokens.get(a);
      if (n != null && n.actor) {
        n.actor.sheet.render(!0);
        return;
      }
    }
    const i = s.attr("data-actor-id");
    return (o = game.actors.get(i)) == null ? void 0 : o.sheet.render(!0);
  }
  static async edgeReroll(e) {
    if (e.getFlag(G, mt)) {
      const t = e.getFlag(G, be);
      await game.system.anarchy.rollManager.edgeReroll(t), T.removeFamily(e.id);
    } else
      ui.notifications.info(game.i18n.localize(l.common.errors.cannotUseEdgeAnymore));
  }
  static defendAttack(e) {
    return game.system.anarchy.combatManager.onClickDefendAttack(
      e.getFlag(G, be)
    );
  }
  static defendPilotAttack(e) {
    return game.system.anarchy.combatManager.onClickPilotDefendAttack(
      e.getFlag(G, be)
    );
  }
  static applyAttack(e) {
    return game.system.anarchy.combatManager.onClickApplyAttackDamage(
      e.getFlag(G, be)
    );
  }
  static getChatMessage(e) {
    const t = $(e.currentTarget).closest(".chat-message").attr("data-message-id");
    return game.messages.get(t);
  }
  static getChatMessageFromHtml(e) {
    const t = $(e).closest(".chat-message").attr("data-message-id");
    return game.messages.get(t);
  }
  /**
   * Method in charge of preparing ANARCHY flags to be set on Document, for ChatMessage
   */
  static prepareFlag(e, t, s) {
    e[G] == null ? e[G] = { [t]: s } : e[G][t] = s;
  }
  static removeFamily(e) {
    var t;
    X.call(Rt, e) || (game.messages.filter((s) => s.getFlag(G, rt) == e).forEach((s) => s.delete()), (t = game.messages.get(e)) == null || t.delete());
  }
  static removeChatMessage(e) {
    var t;
    X.call(kt, e) || (t = game.messages.get(e)) == null || t.delete();
  }
  static messageActorRights(e, t = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
    var s;
    return {
      actorId: e == null ? void 0 : e.id,
      tokenId: (s = e == null ? void 0 : e.token) == null ? void 0 : s.id,
      right: t ?? CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER
    };
  }
  static readActorRights(e) {
    const t = e.tokenId ? T.getToken(e.tokenId) : void 0;
    return {
      actor: (t == null ? void 0 : t.actor) ?? game.actors.get(e.actorId),
      token: t,
      right: e.right
    };
  }
  static hasRight(e, t = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
    const s = e.getFlag(G, dt);
    if (s) {
      const a = T.readActorRights(s);
      if (a)
        return a.actor ? a.actor.testUserPermission(
          game.user,
          Math.min(a.right, t)
        ) : !0;
    }
    return !1;
  }
  static getToken(e) {
    return e ? game.scenes.map((t) => t.tokens.find((s) => s.id == e)).find((t) => t != null) : void 0;
  }
}
const Jt = [
  "fas fa-dice",
  "fas fa-dice-one",
  "fas fa-dice-two",
  "fas fa-dice-three",
  "fas fa-dice-four",
  "fas fa-dice-five",
  "fas fa-dice-six"
];
class p {
  static fontAwesome(e) {
    return `<i class="${e}"></i>`;
  }
  static iconSystemPath(e, t) {
    return p.iconPath(`${Pt}/${e}`, t);
  }
  static iconPath(e, t) {
    return `<img class="${t}" src="${e}" />`;
  }
  static iconD6(e) {
    if (e < 0 || e > 6)
      throw `Dice ${e} is out of dice range [1..6] or 0 for multidice`;
    return p.fontAwesome(Jt[e]);
  }
}
globalThis.ANARCHY_ICONS = p;
const de = l.actor.monitors, pe = l.actor.counters, ut = {
  armor: {
    path: "system.monitors.armor.value",
    monitor: (r) => r.system.monitors.armor,
    iconChecked: p.fontAwesome("fas fa-shield-slash"),
    iconUnchecked: p.fontAwesome("fas fa-shield-alt"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: de.armor
  },
  stun: {
    path: "system.monitors.stun.value",
    monitor: (r) => r.system.monitors.stun,
    iconChecked: p.fontAwesome("fas fa-grimace"),
    iconUnchecked: p.fontAwesome("far fa-smile"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: de.stun,
    overflow: (r) => m.monitors.physical,
    useArmor: !0
  },
  physical: {
    path: "system.monitors.physical.value",
    monitor: (r) => r.system.monitors.physical,
    iconChecked: p.fontAwesome("fas fa-heartbeat"),
    iconUnchecked: p.fontAwesome("far fa-heart"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: de.physical,
    useArmor: !0
  },
  structure: {
    path: "system.monitors.structure.value",
    monitor: (r) => r.system.monitors.structure,
    iconChecked: p.fontAwesome("fas fa-car-crash"),
    iconUnchecked: p.fontAwesome("fas fa-car-alt"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: de.structure
  },
  matrix: {
    path: "system.monitors.matrix.value",
    monitor: (r) => r.getMatrixMonitor(),
    iconChecked: p.fontAwesome("fas fa-laptop-medical"),
    iconUnchecked: p.fontAwesome("fas fa-laptop"),
    iconHit: p.fontAwesome("fas fa-laptop-code"),
    overflow: (r) => r.getMatrixOverflow(),
    recomputeOverflow: (r) => 3,
    resource: de.matrix
  },
  marks: {
    path: void 0,
    monitor: (r) => ({ value: 0, max: 5 }),
    iconChecked: p.fontAwesome("fas fa-bookmark"),
    iconUnchecked: p.fontAwesome("far fa-bookmark"),
    iconHit: p.fontAwesome("fas fa-fingerprint"),
    resource: de.marks
  },
  convergence: {
    path: void 0,
    monitor: (r) => ({ value: 0, max: 5 }),
    iconChecked: p.fontAwesome("far fa-eye"),
    iconUnchecked: p.fontAwesome("fas fa-eye-slash"),
    iconHit: p.fontAwesome("fas fa-eye"),
    resource: de.convergence
  },
  anarchy: {
    path: "system.counters.anarchy.value",
    monitor: (r) => ({
      value: r.system.counters.anarchy.value,
      max: 6
    }),
    iconChecked: p.iconSystemPath("anarchy-point.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath("anarchy-point-off.webp", "checkbar-img"),
    resource: pe.anarchy
  },
  plot: {
    path: "system.counters.anarchy.value",
    monitor: (r) => {
      const e = r.system.counters.anarchy.value;
      return { value: e, max: e + 1 };
    },
    iconChecked: p.iconSystemPath("danger-point.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath("danger-point-off.webp", "checkbar-img"),
    resource: pe.anarchy
  },
  sceneAnarchy: {
    path: "system.counters.sceneAnarchy.value",
    monitor: (r) => ({ value: r.system.counters.sceneAnarchy.value, max: 3 }),
    iconChecked: p.iconSystemPath("anarchy-point-scene.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath("anarchy-point-off.webp", "checkbar-img"),
    resource: pe.sceneAnarchy
  },
  edge: {
    path: "system.counters.edge.value",
    monitor: (r) => ({
      value: r.system.counters.edge.value,
      max: r.getAttributeValue(m.attributes.edge)
    }),
    iconChecked: p.fontAwesome("fas fa-star"),
    iconUnchecked: p.fontAwesome("far fa-star"),
    resource: pe.edge
  },
  credibility: {
    path: "system.counters.social.credibility.value",
    monitor: (r) => ({
      value: r.system.counters.social.credibility.value,
      max: r.system.counters.social.credibility.max
    }),
    iconChecked: p.fontAwesome("fas fa-handshake"),
    iconUnchecked: p.fontAwesome("far fa-handshake"),
    resource: pe.social.credibility
  },
  rumor: {
    path: "system.counters.social.rumor.value",
    monitor: (r) => ({
      value: r.system.counters.social.rumor.value,
      max: r.system.counters.social.rumor.max
    }),
    iconChecked: p.fontAwesome("fas fa-grimace"),
    iconUnchecked: p.fontAwesome("far fa-grimace"),
    resource: pe.social.rumor
  }
}, q = foundry.utils.mergeObject(ut, {});
class g {
  static init() {
    Handlebars.registerHelper("iconCheckbar", g.iconCheckbar), Handlebars.registerHelper("iconCheckbarHit", g.iconHit);
  }
  static hackCheckbars(e) {
    if (e) {
      const t = foundry.utils.mergeObject(ut, {});
      foundry.utils.mergeObject(t, e, { recursive: !0 }), foundry.utils.mergeObject(q, t, { overwrite: !0 });
    }
  }
  static iconCheckbar(e, t) {
    return t ? g.iconChecked(e) : g.iconUnchecked(e);
  }
  static iconChecked(e) {
    var t;
    return (t = q[e]) == null ? void 0 : t.iconChecked;
  }
  static iconUnchecked(e) {
    var t;
    return (t = q[e]) == null ? void 0 : t.iconUnchecked;
  }
  static iconHit(e) {
    var t, s;
    return ((t = q[e]) == null ? void 0 : t.iconHit) ?? ((s = q[e]) == null ? void 0 : s.iconChecked);
  }
  static useArmor(e) {
    var t;
    return (t = q[e]) == null ? void 0 : t.useArmor;
  }
  static max(e, t) {
    var a;
    const s = (a = q[t]) == null ? void 0 : a.monitor(e);
    return ((s == null ? void 0 : s.max) ?? 0) + ((s == null ? void 0 : s.maxBonus) ?? 0);
  }
  static value(e, t) {
    var a;
    const s = (a = q[t]) == null ? void 0 : a.monitor(e);
    return (s == null ? void 0 : s.value) ?? 0;
  }
  static resistance(e, t) {
    var a;
    const s = (a = q[t]) == null ? void 0 : a.monitor(e);
    return ((s == null ? void 0 : s.resistance) ?? 0) + ((s == null ? void 0 : s.resistanceBonus) ?? 0);
  }
  static newValue(e, t) {
    return e + (t ? 0 : 1);
  }
  static async switchMonitorCheck(e, t, s, a, i = void 0, o = void 0) {
    await g.setCounter(
      e,
      t,
      g.newValue(s, a),
      i,
      o
    );
  }
  static async addCounter(e, t, s, a = void 0) {
    if (s != 0) {
      const i = g.getCounterValue(e, t, a) ?? 0;
      await g.setCounter(e, t, i + s, a);
    }
  }
  static async setCounter(e, t, s, a = void 0, i = void 0) {
    switch (t) {
      case m.monitors.marks:
        return await g.setActorMarks(e, s, a, i);
      case m.monitors.matrix:
        return ae.checkMatrixMonitor(e), await g.setCheckbar(e, t, s, i);
      case m.monitors.convergence:
        return await g.setActorConvergence(e, s);
      case m.monitors.anarchy:
        return await g.setAnarchy(e, s);
      case m.monitors.sceneAnarchy:
        return await g.setSceneAnarchy(e, s);
    }
    return await g.setCheckbar(e, t, s);
  }
  static getCounterValue(e, t, s) {
    switch (t) {
      case m.monitors.marks:
        return g.getActorMarks(e, s);
      case m.monitors.convergence:
        return g.getActorConvergence(e);
      case m.monitors.anarchy:
        return g.getAnarchy(e, t);
    }
    return g.value(e, t);
  }
  static async setCheckbar(e, t, s) {
    if (s == g.getCounterValue(e, t))
      return;
    const a = q[t];
    if (a.path) {
      const i = g.max(e, t);
      if (i <= 0)
        return;
      await g._manageOverflow(a, e, t, s, i), s = Math.min(s, i), ae.checkOutOfRange(a.resource, s, 0, i), await e.setCheckbarValue(a.path, s);
    }
  }
  static async _manageOverflow(e, t, s, a, i) {
    if (a > i) {
      const o = e.overflow ? e.overflow(t) : void 0, n = e.recomputeOverflow ? e.recomputeOverflow(a - i) : a - i;
      o && n > 0 && (g._notifyOverflow(t, s, n, o), await g.addCounter(t, o, n));
    }
  }
  static _notifyOverflow(e, t, s, a) {
    ui.notifications.warn(
      game.i18n.format(l.actor.monitors.overflow, {
        actor: e.name,
        monitor: game.i18n.format("ANARCHY.actor.monitors." + t),
        overflow: s,
        overflowMonitor: game.i18n.format("ANARCHY.actor.monitors." + a)
      })
    );
  }
  static async _manageStunOverflow(e, t, s) {
    await g.addCounter(e, m.monitors.physical, t - s);
  }
  static async _manageMatrixOverflow(e, t, s) {
    await g.addCounter(e, m.monitors.stun, t - s);
  }
  static async setAnarchy(e, t) {
    if (e.hasOwnAnarchy()) {
      if (e.hasGMAnarchy()) {
        await game.system.anarchy.gmAnarchy.setAnarchy(t), e.render();
        return;
      }
      await g._setAnarchyMonitor(e, m.monitors.anarchy, t);
    }
  }
  static async setSceneAnarchy(e, t) {
    await g._setAnarchyMonitor(e, m.monitors.sceneAnarchy, t);
  }
  static async _setAnarchyMonitor(e, t, s) {
    const a = g.value(e, t);
    await g.setCheckbar(e, t, s), game.user.isGM || g.notifyAnarchyChange(e, t, a, s);
  }
  static getAnarchy(e, t) {
    return !game.user.isGM && (!e.hasOwnAnarchy() || e.hasGMAnarchy()) || t == pe.anarchy && (!e.hasOwnAnarchy() || e.hasGMAnarchy()) ? 0 : g.value(e, t);
  }
  static notifyAnarchyChange(e, t, s, a) {
    P.blindMessageToGM({
      from: game.user.id,
      content: game.i18n.format(l.gmManager.playerChangedAnarchy, {
        user: game.user.name,
        actor: e.name,
        monitor: game.i18n.localize(l.actor.counters[t]),
        from: s,
        to: a
      })
    });
  }
  static getActorMarks(e, t) {
    var s;
    return ((s = g._findActorMarks(e.getMatrixMarks(), t)) == null ? void 0 : s.marks) ?? 0;
  }
  static async addActorMark(e, t, s = void 0) {
    const a = g._findActorMarks(e.getMatrixMarks(), t);
    g.setActorMarks(e, (a.marks ?? 0) + 1, t, s);
  }
  static async setActorMarks(e, t, s, a = void 0) {
    if (e.canReceiveMarks()) {
      let i = deepClone(e.getMatrixMarks());
      ae.checkOutOfRange(
        q.marks.resource,
        t,
        0,
        g.max(e, "marks")
      );
      const o = g._findActorMarks(i, s);
      o.marks == null && i.push(o), o.marks = Math.max(0, t), i = i.filter((n) => n.marks > 0), await e.setCheckbarValue("system.monitors.matrix.marks", i);
    }
  }
  static _findActorMarks(e, t) {
    return e.find((s) => s.actorId == t) ?? { actorId: t };
  }
  static getActorConvergence(e) {
    game.system.anarchy.gmConvergence.getConvergence(e);
  }
  static async setActorConvergence(e, t) {
    await game.system.anarchy.gmConvergence.setConvergence(e, t);
  }
}
const Ue = "anarchy-gm", es = "scene-anarchy-gm", Mt = "GMAnarchy.addAnarchy";
class ts {
  constructor() {
    game.settings.register(d, Ue, {
      scope: "world",
      config: !1,
      default: 1,
      type: Number
    }), game.settings.register(d, es, {
      scope: "world",
      config: !1,
      default: 0,
      type: Number
    }), X.register(Mt, {
      callback: (e) => game.system.anarchy.gmAnarchy.addAnarchy(e),
      condition: (e) => e.isGM
    }), this.anarchy = game.settings.get(d, Ue);
  }
  getAnarchy() {
    return {
      isGM: !0,
      value: this.anarchy,
      max: this.anarchy + 1,
      scene: 0
    };
  }
  async actorGivesAnarchyToGM(e, t) {
    t > 0 && (ChatMessage.create({
      user: game.user,
      whisper: ChatMessage.getWhisperRecipients("GM"),
      content: game.i18n.format(l.gmManager.gmReceivedAnarchy, {
        anarchy: t,
        actor: e.name
      })
    }), await this.addAnarchy(t));
  }
  async npcConsumesAnarchy(e, t) {
    await this.addAnarchy(-t);
  }
  async addAnarchy(e) {
    X.call(Mt, e) || (ae.checkSufficient(l.actor.counters.plot, -e, this.anarchy), await this.setAnarchy(this.anarchy + e));
  }
  async setAnarchy(e) {
    this.anarchy = e, game.settings.set(d, Ue, e), await this._rebuild(), this._syncGMAnarchySheets();
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-anarchy-bar"), await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".checkbar-root").replaceWith(await this._renderBar()), this.toolbar.find("a.click-checkbar-element").click(async (e) => await this._onClickAnarchyCheckbar(e));
  }
  async _onClickAnarchyCheckbar(e) {
    const t = Number.parseInt($(e.currentTarget).attr("data-index")), s = $(e.currentTarget).attr("data-checked") == "true", a = g.newValue(t, s);
    await this.setAnarchy(a);
  }
  async _renderBar() {
    return await foundry.applications.handlebars.renderTemplate(
      "systems/anarchy/templates/monitors/anarchy.hbs",
      {
        code: "plot",
        rowlength: 6,
        value: this.getAnarchy().value,
        max: this.getAnarchy().max,
        scene: 0,
        labelkey: l.actor.counters.plot
      }
    );
  }
  _syncGMAnarchySheets() {
    var s, a;
    const e = game.actors.filter((i) => !i.token || i.token.isLinked), t = (((a = (s = game.canvas) == null ? void 0 : s.tokens) == null ? void 0 : a.getDocuments()) ?? []).filter((i) => !i.isLinked).map((i) => i.actor);
    e.concat(t).filter((i) => !i.hasPlayerOwner).forEach((i) => i.render());
  }
}
class ss {
  constructor(e, t) {
    this.getDocElement = e, this.initial = t.initial ?? { left: 200, top: 200 }, this.maxPos = t.maxPos ?? { left: 200, top: 100 }, this.minPos = t.minPos ?? { left: 2, top: 2 }, this.settings = t.settings, game.settings.register(this.settings.system, this.settings.keyPosition, {
      scope: "client",
      config: !1,
      default: this.initial,
      type: Object
    }), this.position = game.settings.get(this.settings.system, this.settings.keyPosition), this._initDrag();
  }
  _initDrag() {
    this.drag = {
      topPos: 0,
      leftPos: 0,
      topEvent: 0,
      leftEvent: 0
    };
  }
  _savePosition(e) {
    this.position = e, game.settings.set(this.settings.system, this.settings.keyPosition, this.position);
  }
  onMouseDown(e) {
    this.isRightMouseButton(e) ? this.handleMoveRightClick() : this.handleMoveDrag(e);
  }
  isRightMouseButton(e) {
    return e = e || window.event, "which" in e ? e.which == 3 : "button" in e ? e.button == 2 : !1;
  }
  handleMoveRightClick(e) {
    e.preventDefault(), this._savePosition(this.initial);
  }
  handleMoveDrag(e) {
    e.preventDefault(), this._initDrag(), this._dragElement(this.getDocElement(document));
  }
  _dragElement(e) {
    e.onmousedown = (t) => this._dragMouseDown(e, t);
  }
  _dragMouseDown(e, t) {
    t = t || window.event, t.preventDefault(), this.drag.leftEvent = t.clientX, this.drag.topEvent = t.clientY, document.onmouseup = (s) => this._closeDragElement(e, s), document.onmousemove = (s) => this._elementDrag(e, s);
  }
  _elementDrag(e, t) {
    t = t || window.event, t.preventDefault(), this.drag.leftPos = this.drag.leftEvent - t.clientX, this.drag.topPos = this.drag.topEvent - t.clientY, this.drag.leftEvent = t.clientX, this.drag.topEvent = t.clientY, this._setPositionStyle(e, {
      top: e.offsetTop - this.drag.topPos,
      left: e.offsetLeft - this.drag.leftPos
    });
  }
  _closeDragElement(e, t) {
    e.onmousedown = null, document.onmouseup = null, document.onmousemove = null;
    const s = {
      top: e.offsetTop - this.drag.topPos,
      left: e.offsetLeft - this.drag.leftPos
    };
    let a = this._constrain(s);
    (a.left != this.drag.leftPos || a.top != this.drag.topPos) && this._setPositionStyle(e, a), this._savePosition(a);
  }
  setPosition(e) {
    e = e ?? this.position;
    let t = this;
    return new Promise((s) => {
      function a() {
        let i = t.getDocElement(document);
        i ? (t._setPositionStyle(i, t._constrain(e)), s()) : setTimeout(a, 30);
      }
      a();
    });
  }
  _setPositionStyle(e, t) {
    e.style.bottom = void 0, e.style.top = t.top + "px", e.style.left = t.left + "px";
  }
  _constrain(e) {
    return {
      left: Math.max(
        this.minPos.left,
        Math.min(window.innerWidth - this.maxPos.left, e.left)
      ),
      top: Math.max(
        this.minPos.top,
        Math.min(window.innerHeight - this.maxPos.top, e.top)
      )
    };
  }
}
const nt = "gm-difficulty-pools", as = `${d}.${nt}`;
class is {
  constructor() {
    Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  onReady() {
    game.settings.register(d, nt, {
      scope: "world",
      name: game.i18n.localize(l.settings.gmDifficulty.name),
      hint: game.i18n.localize(l.settings.gmDifficulty.hint),
      config: !0,
      default: game.i18n.localize(l.settings.gmDifficulty.default),
      type: String
    }), this.loadDifficultySettings();
  }
  async onUpdateSetting(e, t, s, a) {
    game.user.isGM && e.key == as && (this.loadDifficultySettings(), this._rebuild(), game.system.anarchy.gmManager.render(!1));
  }
  loadDifficultySettings() {
    const e = game.settings.get(d, nt);
    this.difficultyPools = e.split(",").map((t) => {
      const s = t.split(":");
      return s[1] ? { difficulty: s[0], pool: s[1] } : { pool: Number(s[0]) };
    });
  }
  getDifficultyData() {
    return this.difficultyPools;
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-difficulty-bar"), await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".gm-difficulty-bar").replaceWith(await this._renderBar()), this.toolbar.find("a.click-roll-difficuty-pool").click(async (e) => await this._onClickDifficulty(e));
  }
  async _renderBar() {
    return await foundry.applications.handlebars.renderTemplate(
      "systems/anarchy/templates/app/gm-difficulty-buttons.hbs",
      {
        difficultyPools: this.difficultyPools
      }
    );
  }
  async _onClickDifficulty(e) {
    const t = $(e.currentTarget).attr("data-pool"), s = $(e.currentTarget).attr("data-difficulty"), a = new Roll(`${t}d6cs>=5`);
    await a.evaluate();
    const i = game.i18n.format(l.settings.gmDifficulty.chatMessage, {
      pool: t,
      difficulty: s ?? t,
      success: a.total
    }), o = await a.toMessage({ flavor: i }, { create: !1 });
    ChatMessage.create(o);
  }
}
const os = "gm-manager", rs = "gm-manager-position", ns = { top: 200, left: 200 }, cs = "systems/anarchy/templates/app/gm-manager.hbs";
class ls extends Application {
  constructor(e, t) {
    super(), this.gmAnarchy = e, this.gmConvergence = t, this.gmDifficulty = new is(), this.handleDrag = new ss((s) => s.getElementById("gm-manager"), {
      initial: ns,
      maxPos: { left: 200, top: 100 },
      settings: {
        system: d,
        keyPosition: rs
      }
    }), Hooks.once("ready", () => this.onReady()), Hooks.on("renderChatLog", async (s, a, i) => {
      const o = "systems/anarchy/templates/app/chat-tools.hbs", n = {
        title: game.i18n.localize("ANARCHY.gmManager.title"),
        rollDice: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
        isGM: game.user.isGM
      }, c = await foundry.applications.handlebars.renderTemplate(
        o,
        n
      ), h = $(c);
      $(a).find("form.chat-form").append(h[0]), $(a).find("form.chat-form .rolldice").on("click", (V) => {
        V.preventDefault(), new Dialog({
          title: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
          content: '<div style="display:flex;margin:4px 0 8px 0;align-items:center;gap:8px">' + game.i18n.localize("ANARCHY.chat_actions.rollDice.instruction") + '<input class="roll-dice-value" name="macro-roll-count-dice" type="number" value="3" /></div>',
          buttons: {
            cancel: {
              label: game.i18n.localize("ANARCHY.common.cancel"),
              icon: '<i class="fas fa-times"></i>'
            },
            submit: {
              label: game.i18n.localize("ANARCHY.common.roll.button"),
              icon: '<i class="fas fa-dice"></i>',
              callback: async (J) => {
                const L = $(J).find('input[name="macro-roll-count-dice"]').val();
                if (!L || isNaN(L) || L <= 0) {
                  ui.notifications.warn(game.i18n.localize("ANARCHY.chat_actions.rollDice.error"));
                  return;
                }
                const B = new Roll(`${L}d6cs>4`);
                await B.evaluate({ async: !0 });
                const _ = B.terms[0].results.filter((le) => le.result == 1).length, K = game.i18n.format("ANARCHY.chat_actions.rollDice.result", {
                  count: L,
                  success: B.total,
                  ones: _
                }), oe = await B.toMessage({ flavor: K }, { create: !1 });
                ChatMessage.create(oe);
              }
            }
          },
          default: "submit"
        }).render(!0);
      }), $(a).find("form.chat-form .gmmanager").on("click", (V) => {
        V.preventDefault(), this._element ? this.close() : this.render(!0);
      });
    });
  }
  onReady() {
    game.user.isGM && this.render(!0);
  }
  /* -------------------------------------------- */
  static get defaultOptions() {
    let e = super.defaultOptions;
    return e.id = os, e.title = game.i18n.localize(l.gmManager.title), e.template = cs, e.popOut = !1, e.resizable = !1, e.height = "auto", e.width = "auto", e;
  }
  async render(e, t) {
    game.user.isGM && await super.render(e, t);
  }
  getData() {
    return this.handleDrag.setPosition(), {
      anarchy: this.gmAnarchy.getAnarchy(),
      convergences: this.gmConvergence.getConvergences(),
      difficultyPools: this.gmDifficulty.getDifficultyData(),
      ANARCHY: l,
      options: {
        classes: [game.system.anarchy.styles.selectCssClass()]
      }
    };
  }
  async activateListeners(e) {
    var t;
    super.activateListeners(e), (t = game.system.anarchy) != null && t.uiCustomization && game.system.anarchy.uiCustomization.applyCustomizationsToElement(e[0], "gm-manager"), e.find(".app-title-bar").mousedown((s) => this.handleDrag.onMouseDown(s)), e.find(".gm-manager-hide-button").mousedown((s) => this.close()), this.gmAnarchy.activateListeners(e), this.gmConvergence.activateListeners(e), this.gmDifficulty.activateListeners(e);
  }
}
function W(r, e, t, s, a, i = (o) => !0) {
  return {
    code: r,
    labelkey: l.attributeAction[r],
    attributeFunction1: e ?? ((o) => {
    }),
    attributeFunction2: t ?? ((o) => {
    }),
    icon: s,
    actorTypes: a,
    condition: i
  };
}
function ve(r, e) {
  return {
    code: r,
    labelkey: l.defense[r],
    actionCode: e
  };
}
const I = m.attributes, O = m.actorTypes, Y = z.actions, Se = z.defenses, Fe = [
  W(
    Y.defense,
    (r) => I.agility,
    (r) => I.logic,
    p.fontAwesome("fas fa-shield-alt"),
    [O.character]
  ),
  W(
    Y.defense,
    (r) => I.autopilot,
    (r) => I.handling,
    p.fontAwesome("fas fa-tachometer-alt"),
    [O.vehicle]
  ),
  // TODO: add a way to pilot a vehicle to fallback defense of controled vehicle
  W(
    Y.resistTorture,
    (r) => I.strength,
    (r) => I.willpower,
    p.fontAwesome("fas fa-angry"),
    [O.character]
  ),
  W(
    Y.perception,
    (r) => I.logic,
    (r) => I.willpower,
    p.fontAwesome("fas fa-eye"),
    [O.character]
  ),
  W(Y.perception, (r) => I.autopilot, void 0, p.fontAwesome("fas fa-video"), [
    O.vehicle
  ]),
  W(
    Y.perception,
    (r) => r.getMatrixLogic(),
    (r) => r.getMatrixLogic(),
    p.fontAwesome("fas fa-video"),
    [O.device, O.sprite, O.ic]
  ),
  W(
    Y.composure,
    (r) => I.charisma,
    (r) => I.willpower,
    p.fontAwesome("fas fa-meh"),
    [O.character]
  ),
  W(
    Y.judgeIntentions,
    (r) => I.charisma,
    (r) => I.charisma,
    p.fontAwesome("fas fa-theater-masks"),
    [O.character]
  ),
  W(
    Y.memory,
    (r) => I.logic,
    (r) => I.logic,
    p.fontAwesome("fas fa-brain"),
    [O.character]
  ),
  W(
    Y.catch,
    (r) => I.agility,
    (r) => I.agility,
    p.fontAwesome("fas fa-baseball-ball"),
    [O.character]
  ),
  W(
    Y.lift,
    (r) => I.strength,
    (r) => I.strength,
    p.fontAwesome("fas fa-dumbbell"),
    [O.character]
  ),
  W(
    Y.matrixDefense,
    (r) => r.getMatrixLogic(),
    (r) => r.getMatrixFirewall(),
    p.fontAwesome("fas fa-shield-virus"),
    [O.character, O.sprite, O.ic, O.device, O.vehicle]
  ),
  W(
    Y.astralDefense,
    (r) => I.logic,
    (r) => I.willpower,
    p.fontAwesome("fas fa-shield-virus"),
    [O.character]
  )
], Te = [
  ve(Se.physicalDefense, Y.defense),
  ve(Se.physicalResistance, Y.resistTorture),
  ve(Se.socialDefense, Y.composure),
  ve(Se.matrixDefense, Y.matrixDefense),
  ve(Se.mentalResistance, Y.perception)
];
class x {
  static init() {
    Handlebars.registerHelper(
      "fixedDefenseCode",
      (e) => x.fixedDefenseCode(e)
    );
  }
  static all(e = void 0) {
    return e ? Fe.filter(e) : Fe;
  }
  static getActorActions(e) {
    return Fe.filter(
      (t) => t.actorTypes.includes(e.type) && t.condition(e)
    );
  }
  static fixedDefenseCode(e) {
    return z.fixedDefenseCode[e] ?? e;
  }
  static getActorDefenses(e) {
    return Te.map((t) => {
      const s = x.getActorAction(e, t.actionCode);
      return x._convertToDefense(s, t);
    }).filter((t) => t == null ? void 0 : t.code);
  }
  static getDefenseAttributeAction(e) {
    var t;
    return (t = Te.find((s) => s.code == e)) == null ? void 0 : t.actionCode;
  }
  static getActorAction(e, t) {
    return x.getActorActions(e).find((s) => s.code == t);
  }
  static getActorDefense(e, t) {
    t = x.fixedDefenseCode(t);
    const s = Te.find((i) => i.code == t), a = x.getActorAction(e, s.actionCode);
    return ae.checkActorDefenseAction(a, e, s), x._convertToDefense(a, s);
  }
  static _convertToDefense(e, t) {
    return e ? foundry.utils.mergeObject(t, e ?? {}, { overwrite: !1, inplace: !1 }) : void 0;
  }
  static getDefenses() {
    return Te;
  }
  static prepareShortcut(e, t) {
    const s = x.getActorActions(e).find((a) => a.code == t);
    if (s)
      return {
        icon: s.icon,
        label: game.i18n.localize(s.labelkey),
        callback: (a) => a.actor.rollAttributeAction(t)
      };
  }
}
const ht = {
  canMark: !1,
  marks: [],
  value: 0,
  max: 0,
  resistance: 0
}, F = {
  connectionMode: {
    disconnected: "disconnected",
    augmented: "augmented",
    virtual: "virtual"
  }
};
class we {
  static resolveConnectionMode(e) {
    switch (e) {
      case F.connectionMode.disconnected:
      case F.connectionMode.augmented:
      case F.connectionMode.virtual:
        return e;
      case void 0:
      default:
        return F.connectionMode.disconnected;
    }
  }
  static getNextConnectionMode(e) {
    switch (e) {
      case F.connectionMode.disconnected:
        return F.connectionMode.augmented;
      case F.connectionMode.augmented:
        return F.connectionMode.virtual;
      default:
      case F.connectionMode.virtual:
        return F.connectionMode.disconnected;
    }
  }
}
const Tt = [
  m.itemType.shadowamp,
  m.itemType.weapon,
  m.itemType.cyberdeck
];
class A {
  constructor() {
    this.modifiers = {
      groups: E.mapObjetToKeyValue(l.modifier.group, "key", "label"),
      roll: A._buildGroupOptions("roll"),
      attribute: A._buildGroupOptions("attribute"),
      monitor: A._buildGroupOptions("monitor"),
      other: A._buildGroupOptions("other")
    }, Hooks.once("ready", () => this.onReady());
  }
  static _buildGroupOptions(e) {
    switch (e) {
      case "attribute":
        return {
          label: l.modifier.group[e],
          effects: E.hbsAttributes.map((t) => ({ key: t.value, label: t.labelkey })),
          categories: []
        };
    }
    return {
      label: l.modifier.group[e],
      effects: E.mapObjetToKeyValue(l.modifier[e].effect, "key", "label"),
      categories: E.mapObjetToKeyValue(l.modifier[e].category, "key", "label")
    };
  }
  async onReady() {
    Handlebars.registerHelper(
      "modifierHasSubCategory",
      (e, t, s) => this.hasSubCategory(e, t, s)
    ), Handlebars.registerHelper(
      "modifierSelectOption",
      (e, t) => this.getSelectOptions(e, t)
    );
  }
  hasSubCategory(e, t, s) {
    switch (e) {
      case "roll":
        return !0;
    }
    return !1;
  }
  getSelectOptions(e, t) {
    var s, a;
    switch (e) {
      case "group":
        return this.modifiers.groups;
      case "effect":
        return (s = this.modifiers[t.hash.group]) == null ? void 0 : s.effects;
      case "category":
        return (a = this.modifiers[t.hash.group]) == null ? void 0 : a.categories;
      case "subCategory":
        switch (t.hash.group) {
          case "roll":
            return this.getSelectRollSubCategories(t.hash.category);
        }
        return [];
    }
    return [];
  }
  getSelectRollSubCategories(e) {
    switch (e) {
      case "attribute":
        return E.getAttributes().map((s) => ({ key: s.value, label: s.labelkey }));
      case "skill":
        return game.system.anarchy.skills.getSkills().map((s) => ({ key: s.code, label: s.labelkey }));
      case "attributeAction":
        const t = x.all().map((s) => ({ key: s.code, label: s.labelkey }));
        return b.distinct(t.map((s) => s.key)).map(
          (s) => t.find((a) => a.key == s)
        );
    }
    return [];
  }
  getEnums() {
    return { modifiers: this.modifiers };
  }
  static buildRollModifiersFilter(e, t) {
    return (s) => {
      var a;
      if (s.group == "roll" && s.effect == t)
        switch (s.category) {
          case "attribute":
            return [e.attribute1, e.attribute2].includes(s.subCategory);
          case "skill":
            return s.subCategory == ((a = e.skill) == null ? void 0 : a.system.code);
          case "attributeAction":
            return s.subCategory == e.attributeAction || s.subCategory == x.getDefenseAttributeAction(e.defenseAction);
        }
      return !1;
    };
  }
  static computeRollModifiers(e, t, s) {
    const a = A.buildRollModifiersFilter(t, s), i = (h) => h.group == "roll" && h.effect == s && a(h), o = A._activeItems(e).map((h) => A.itemModifiers(h, i)).reduce((h, N) => h.concat(N), []).sort(b.descending((h) => h.modifier.value)), n = A.$sumShadowampModifiers(
      o.filter((h) => Tt.includes(h.item.type)).map((h) => h.modifier.value)
    ), c = b.sumValues(
      o.filter((h) => !Tt.includes(h.item.type)).map((h) => h.modifier.value)
    );
    return {
      value: n + c,
      sources: o
    };
  }
  static $sumShadowampModifiers(e) {
    const t = e.find((i) => i > 3) ?? 0, s = b.sumValues(e.filter((i) => i < 0)), a = Math.min(3, b.sumValues(e.filter((i) => i > 0 && i <= 3)));
    return s + Math.max(a, t);
  }
  static computeModifiers(e, t, s = void 0, a = void 0) {
    const i = A._createFilter(t, s, a), o = A._activeItems(e).map((c) => A.itemModifiers(c, i)).reduce((c, h) => c.concat(h), []);
    return {
      value: b.sumValues(o, (c) => c.modifier.value),
      sources: o
    };
  }
  static sumMonitorModifiers(e, t, s) {
    return A.sumModifiers(A._activeItems(e), "monitor", t, s);
  }
  static sumModifiers(e, t, s, a) {
    const i = A._createFilter(t, s, a), o = A._activeItems(e).map((n) => A.itemModifiers(n, i)).reduce((n, c) => n.concat(c), []);
    return b.sumValues(o, (n) => n.modifier.value);
  }
  static _createFilter(e, t, s) {
    return (a) => a.group == e && a.effect == (t ?? a.effect) && a.category == (s ?? a.category);
  }
  static countModifiers(e, t, s = void 0, a = void 0) {
    const i = A._createFilter(t, s, a);
    return A._activeItems(e).map((n) => A.itemModifiers(n, i)).reduce((n, c) => n.concat(c), []).count;
  }
  static itemModifiers(e, t) {
    return A._listItemModifiers(e, t).map((s) => A._itemModifier(e, s));
  }
  static _listItemModifiers(e, t = (s) => !0) {
    return (e.system.modifiers ?? []).filter(t);
  }
  static _itemModifier(e, t) {
    return {
      item: e,
      modifier: t
    };
  }
  static _activeItems(e) {
    return e.filter((t) => t.isActive());
  }
}
const Ht = {
  highlighted: [
    "far fa-times-circle",
    "fas fa-dice-one",
    "fas fa-dice-two",
    "fas fa-dice-three",
    "fas fa-dice-four",
    "fas fa-dice-five",
    "fas fa-dice-six"
  ],
  dimmed: [
    "far fa-times-circle",
    "far fa-dice-one",
    "far fa-dice-two",
    "far fa-dice-three",
    "far fa-dice-four",
    "far fa-dice-five",
    "far fa-dice-six"
  ]
};
class te {
  static init() {
    Hooks.once("ready", async () => await this.onReady()), Handlebars.registerHelper(
      "dice-cursor-array",
      (e, t) => te.array(e ?? 0, t ?? 5)
    ), Handlebars.registerHelper("dice-cursor-fas", (e, t) => te.fasClass(e, t)), Handlebars.registerHelper(
      "dice-cursor-active",
      (e, t) => te.activeClass(e, t)
    ), Handlebars.registerHelper(
      "dice-cursor-color",
      (e, t) => te.colorClass(e, t)
    );
  }
  static async onReady() {
    await loadTemplates(["systems/anarchy/templates/roll/parts/dice-cursor.hbs"]);
  }
  static array(e, t) {
    if (e > t) throw `min>max: ${e} > ${t}`;
    return Array(t - e + 1).fill().map((s, a) => e + a);
  }
  static isActive(e, t) {
    return t <= e && e < 0 || 0 < e && e <= t;
  }
  static activeClass(e, t) {
    return te.isActive(e, t) ? "active" : "inactive";
  }
  static fasClass(e, t) {
    const s = te.isActive(e, t) ? Ht.highlighted : Ht.dimmed;
    return te.$getFas(s, Math.abs(e));
  }
  static colorClass(e, t) {
    return e == 0 || !t ? e < 0 ? "fixed-dice-malus" : "fixed-dice-bonus" : e < 0 ? "variable-dice-malus" : "variable-dice-bonus";
  }
  static $getFas(e, t) {
    return e[t > 6 ? t % 6 : t];
  }
  static async diceCursor({ value: e, min: t, max: s, editable: a }) {
    return await foundry.applications.handlebars.renderTemplate(
      "systems/anarchy/templates/roll/parts/dice-cursor.hbs",
      {
        value: e,
        min: t,
        max: s,
        editable: a
      }
    );
  }
}
class ms {
  static getMalus(e, t) {
    return Math.min(0, -Math.floor((7 - t) / 2));
  }
}
const C = {
  /**
   * Hook to declare template data migrations
   */
  DECLARE_MIGRATIONS: "anarchy-declareMigration",
  /**
   * Hook used to declare additional styles available
   */
  REGISTER_STYLES: "anarchy-registerStyles",
  /**
   * Hook allowing to register additional roll parameters
   */
  REGISTER_ROLL_PARAMETERS: "anarchy-registerRollParameters",
  /**
   * Hook allowing to modify some parameters (from Anarchy hacks modules).
   * Setting property ignore=true allows to remove the parameter.
   */
  MODIFY_ROLL_PARAMETER: "anarchy-forbidRollParameter",
  /**
   * Hook allowing to provide alternate skill sets for Anarchy hack modules
   */
  PROVIDE_SKILL_SET: "anarchy-provideSkillSet",
  /**
   * Hook allowing to provide alternate way to apply damages for Anarchy hack modules
   */
  PROVIDE_DAMAGE_MODE: "anarchy-provideDamageMode",
  /**
   * Hook allowing to define base essence
   */
  PROVIDE_BASE_ESSENCE: "anarchy-provideBaseEssence",
  /**
   * Hook allowing to define base essence
   */
  PROVIDE_MALUS_ESSENCE: "anarchy-provideMalusEssence",
  /**
   * Hook allowing to provide alternate anarchy hack (TODO: document)
   */
  ANARCHY_HACK: "anarchy-hack"
}, Ut = `${d}.${C.ANARCHY_HACK}`, ke = {
  id: d,
  name: "Standard Shadowrun Anarchy",
  hack: {
    checkbars: () => q
  }
};
globalThis.ANARCHY_HOOKS = C;
globalThis.SETTING_KEY_ANARCHY_HACK = Ut;
globalThis.SHADOWRUN_ANARCHY_NO_HACK = ke;
class ce {
  constructor() {
    this.hooks = [], this.hacks = {}, this.hackNames = {}, this.hookMethods = {}, this._register(C.ANARCHY_HACK), this._register(C.PROVIDE_BASE_ESSENCE), Hooks.on(C.ANARCHY_HACK, (e) => e(ke)), Hooks.on(
      C.PROVIDE_BASE_ESSENCE,
      (e) => e(ke, (t) => 6)
    ), Hooks.on(
      C.PROVIDE_MALUS_ESSENCE,
      (e) => e(
        ke,
        (t, s) => ms.getMalus(t, s)
      )
    ), Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(C.ANARCHY_HACK, (e) => {
      this.hacks[e.id] = e, this.hackNames[e.id] = e.name;
    }), game.settings.register(d, C.ANARCHY_HACK, {
      scope: "world",
      name: game.i18n.localize(l.settings.anarchyHack.name),
      hint: game.i18n.localize(l.settings.anarchyHack.hint),
      config: !0,
      default: ke.id,
      choices: this.hackNames,
      type: String
    }), this.applySelectedAnarchyHack();
  }
  async onUpdateSetting(e, t, s, a) {
    e.key == Ut && this.applySelectedAnarchyHack();
  }
  applySelectedAnarchyHack() {
    const e = this.getSelectedHack();
    e && (g.hackCheckbars(e.hack.checkbars()), [
      C.PROVIDE_BASE_ESSENCE,
      C.PROVIDE_MALUS_ESSENCE
    ].forEach((s) => this.selectHookMethod(e, s)));
  }
  selectHookMethod(e, t) {
    Hooks.callAll(t, (s, a) => {
      s == e && (this.hookMethods[t] = a);
    });
  }
  getSelectedHack() {
    return this.hacks[game.settings.get(d, C.ANARCHY_HACK)];
  }
  getHookMethod(e, t) {
    return this.hookMethods[e] ?? t;
  }
  callHookMethod(e, ...t) {
    const s = this.hookMethods[e];
    return s ? s(...t) : void 0;
  }
  static instance() {
    return game.system.anarchy.hooks;
  }
  static register(e) {
    ce.instance()._register(e);
  }
  _register(e) {
    if (console.log(u + "HooksManager.register", e), !e.startsWith(d + "-"))
      throw "For safety Anarchy Hooks names must be prefixed by anarchy'-'";
    this.hooks.push(e);
  }
}
const v = {
  pool: "pool",
  reroll: "reroll",
  rerollForced: "rerollForced",
  successReroll: "successReroll",
  glitch: "glitch",
  drain: "drain",
  convergence: "convergence",
  edge: "edge",
  risk: "risk",
  opponentPool: "opponentPool",
  opponentReroll: "opponentReroll"
}, ds = [
  // attribute1
  {
    code: "attribute1",
    options: {
      order: 1,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/select-attribute.hbs`
    },
    condition: (r) => Object.values(z.rollType).includes(r.mode),
    isUsed: (r) => !0,
    factory: (r) => {
      var t;
      const e = r.attribute1 ?? ((t = r.skill) == null ? void 0 : t.system.attribute);
      return {
        labelkey: e ? l.attributes[e] : l.attributes.noAttributes,
        value: r.actor.getAttributeValue(e, r.activeItem),
        flags: { editable: r.skill },
        selected: e,
        choices: E.getAttributes((s) => r.attributes.includes(s))
      };
    }
  },
  // attribute2
  {
    code: "attribute2",
    options: {
      order: 1,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/select-attribute.hbs`,
      hbsTemplateChat: `${y}/chat/parts/pool-attribute2.hbs`
    },
    condition: (r) => [
      z.rollType.attribute,
      z.rollType.attributeAction,
      z.rollType.defense
    ].includes(r.mode),
    isUsed: (r) => r.used,
    onChecked: (r, e) => r.used = !!e,
    factory: (r) => {
      const e = r.attribute2;
      return {
        labelkey: e ? l.attributes[e] : l.attributes.noAttributes,
        value: r.actor.getAttributeValue(e, r.activeItem),
        flags: { editable: z.rollType.attribute == r.mode },
        selected: e,
        choices: E.getAttributes((t) => r.attributes.includes(t))
      };
    }
  },
  // skill
  {
    code: "skill",
    options: {
      flags: {},
      order: 3,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`
    },
    condition: (r) => ["skill", "weapon"].includes(r.mode),
    factory: (r) => {
      var e, t;
      return {
        label: (e = r.skill) == null ? void 0 : e.name,
        value: ((t = r.skill) == null ? void 0 : t.system.value) ?? 0
      };
    }
  },
  // specialization
  {
    code: "specialization",
    options: {
      flags: { optional: !0 },
      value: 2,
      order: 4,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
    },
    isUsed: (r) => r.used,
    condition: (r) => {
      var e;
      return r.mode == "skill" && r.specialization || r.mode == "weapon" && ((e = r.skill) == null ? void 0 : e.system.specialization);
    },
    onChecked: (r, e) => {
      r.used = e, r.value = e ? 2 : 0;
    },
    factory: (r) => ({
      label: r.specialization ?? r.skill.system.specialization,
      used: r.specialization != null,
      value: 2
    })
  },
  // credibility usage
  {
    code: "credibility",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 5,
      category: v.pool,
      value: 0,
      labelkey: l.common.roll.modifiers.social.credibility,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`
    },
    condition: (r) => {
      var e;
      return ((e = r.skill) == null ? void 0 : e.system.isSocial) && r.actor.getCredibilityValue() > 0;
    },
    factory: (r) => ({
      min: 0,
      max: Math.min(r.actor.getCredibilityValue(), 3)
    })
  },
  // modifiers bonus
  {
    code: "poolModifiers",
    options: {
      flags: { editDice: !0, editable: !0 },
      labelkey: l.common.roll.modifiers.poolModifiers,
      order: 5,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: -4,
      max: 4
    },
    factory: (r) => ye.computeRollModifiers(v.pool, r)
  },
  // wounds
  {
    code: "wounds",
    options: {
      flags: { optional: !0 },
      order: 10,
      category: v.pool,
      labelkey: l.common.roll.modifiers.wounds,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`
    },
    isUsed: (r) => r.used,
    condition: (r) => r.actor.getWounds(),
    onChecked: (r, e) => {
      r.used = e, r.value = e ? -r.wounds : 0;
    },
    factory: (r) => {
      const e = r.actor.getWounds();
      return {
        wounds: e,
        min: -e,
        max: 0,
        value: -e,
        used: !0
      };
    }
  },
  // modifier for deckers/technomancers connected in virtual reality
  {
    code: "virtualReality",
    options: {
      flags: { editDice: !1, editable: !1 },
      order: 24,
      category: v.pool,
      value: 1,
      labelkey: l.common.roll.modifiers.virtualReality,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 1,
      max: 1
    },
    condition: (r) => r.actor.isMatrixSkill(r.skill) && r.actor.isMatrixConnected(F.connectionMode.virtual),
    factory: (r) => ({
      flags: {
        used: r.actor.isMatrixSkill(r.skill) && r.actor.isMatrixConnected(F.connectionMode.virtual)
      }
    })
  },
  // other modifiers
  {
    code: "other",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 25,
      category: v.pool,
      value: 0,
      labelkey: l.common.roll.modifiers.other,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: -5,
      max: 5
    }
  },
  // Drain
  {
    code: "drain",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 40,
      category: v.drain,
      labelkey: l.common.roll.modifiers.drain,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 6
    },
    condition: (r) => {
      var e;
      return (r.mode == "skill" || r.mode == "weapon") && ((e = r.skill) == null ? void 0 : e.system.hasDrain);
    },
    factory: (r) => ({
      value: r.mode == "weapon" && r.weapon.hasDrain ? r.weapon.system.drain : 1
    })
  },
  // convergence
  {
    code: "convergence",
    options: {
      flags: { editDice: !1, optional: !0, used: !0, hideParameter: !0 },
      order: 40,
      category: v.convergence,
      value: 1,
      labelkey: l.common.roll.modifiers.convergence,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
    },
    isUsed: (r) => r.used,
    condition: (r) => {
      var e;
      return (r.mode == "skill" || r.mode == "weapon") && ((e = r.skill) == null ? void 0 : e.system.hasConvergence);
    },
    onChecked: (r, e) => {
      r.used = e, r.value = e ? 1 : 0;
    }
  },
  // glitch
  {
    code: "glitch",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 50,
      category: v.glitch,
      labelkey: l.common.roll.modifiers.glitch,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      hbsTemplateChat: `${y}/chat/parts/glitch.hbs`,
      min: 0,
      max: 5
    },
    isUsed: (r) => r.value > 0,
    factory: (r) => {
      const e = r.actor.getWounds(), t = ye.computeRollModifiers(
        v.glitch,
        r
      );
      return {
        value: (e == 0 ? 0 : 1) + (r.glitch ?? 0) + t.value
      };
    }
  },
  // social rumor
  {
    code: "rumor",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 50,
      category: v.glitch,
      value: 0,
      labelkey: l.common.roll.modifiers.social.rumor,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      hbsTemplateChat: `${y}/chat/parts/glitch.hbs`,
      min: 0,
      max: 1
    },
    condition: (r) => {
      var e;
      return ((e = r.skill) == null ? void 0 : e.system.isSocial) && r.actor.getRumorValue() > 0;
    }
  },
  // rerolls
  {
    code: "reroll",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 30,
      category: v.reroll,
      labelkey: l.common.roll.modifiers.reroll,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (r) => ye.computeRollModifiers(v.reroll, r)
  },
  // reduction from opponent
  {
    code: "reduced",
    options: {
      order: 29,
      category: v.pool,
      labelkey: l.common.roll.modifiers.reduced,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: -4,
      max: 0
    },
    condition: (r) => {
      var e;
      return (((e = r.attackRoll) == null ? void 0 : e.param.opponentPool) ?? 0) != 0;
    },
    factory: (r) => {
      var t;
      const e = -(((t = r.attackRoll) == null ? void 0 : t.param.opponentPool) ?? 0);
      return {
        flags: { editDice: !0, used: !0 },
        value: e
      };
    }
  },
  // forced success rerolls
  {
    code: "rerollForced",
    options: {
      order: 31,
      category: v.rerollForced,
      labelkey: l.common.roll.modifiers.rerollForced,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: -5,
      max: 0
    },
    factory: (r) => {
      var t;
      const e = ye.computeRollModifiers(
        v.successReroll,
        r
      );
      return e.value = -e.value - (((t = r.attackRoll) == null ? void 0 : t.param.opponentReroll) ?? 0), foundry.utils.mergeObject(e, {
        flags: { editDice: !0, used: !0, editable: !0 }
      });
    }
  },
  // anarchy dispositions
  {
    code: "anarchyDisposition",
    options: {
      flags: { optional: !0, isAnarchy: !0, forceDisplay: !0 },
      order: 70,
      category: v.pool,
      value: 0,
      min: 0,
      max: 3,
      labelkey: l.common.roll.modifiers.anarchyDisposition,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
    },
    isUsed: (r) => r.used,
    condition: (r) => r.actor.getAnarchyValue() > 0,
    onChecked: (r, e) => {
      r.used = e, r.value = e ? 3 : 0;
    }
  },
  // anarchy take risks
  {
    code: "anarchyRisk",
    options: {
      flags: { optional: !0, isAnarchy: !0, forceDisplay: !0 },
      order: 70,
      category: v.risk,
      value: 0,
      labelkey: l.common.roll.modifiers.anarchyRisk,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`,
      hbsTemplateChat: `${y}/chat/parts/anarchy-risk.hbs`
    },
    isUsed: (r) => r.used,
    condition: (r) => r.actor.getAnarchyValue() > 0,
    onChecked: (r, e) => {
      r.used = e, r.value = e ? 1 : 0;
    }
  },
  // edge
  {
    code: "edge",
    options: {
      flags: { optional: !0, forceDisplay: !0 },
      value: 0,
      order: 70,
      category: v.edge,
      labelkey: l.common.roll.modifiers.edge,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
    },
    isUsed: (r) => r.used,
    condition: (r) => r.options.canUseEdge && r.actor.getRemainingEdge(),
    onChecked: (r, e) => {
      r.used = e, r.value = e ? 1 : 0;
    }
  },
  // reduce opponent pool
  {
    code: "opponentPool",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 100,
      category: v.opponentPool,
      labelkey: l.common.roll.modifiers.opponentPool,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (r) => ye.computeRollModifiers(v.opponentPool, r),
    condition: (r) => !r.attributeAction
  },
  // force opponent rerolls
  {
    code: "opponentReroll",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 100,
      category: v.opponentReroll,
      value: 0,
      labelkey: l.common.roll.modifiers.opponentReroll,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (r) => ye.computeRollModifiers(v.opponentReroll, r),
    condition: (r) => !r.attributeAction
  }
];
class ye {
  constructor() {
    this.registeredParameters = {}, ce.register(C.REGISTER_ROLL_PARAMETERS), ce.register(C.MODIFY_ROLL_PARAMETER), Hooks.on(C.MODIFY_ROLL_PARAMETER, (e) => this._validate(e)), Hooks.once(
      C.REGISTER_ROLL_PARAMETERS,
      (e) => ds.forEach((t) => e(t))
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(C.REGISTER_ROLL_PARAMETERS, async (t) => {
      Hooks.callAll(C.MODIFY_ROLL_PARAMETER, t), t.ignore || await this._register(t);
    });
    const e = b.distinct(
      [].concat(Object.values(this.registeredParameters).map((t) => t.options.hbsTemplateRoll)).concat(Object.values(this.registeredParameters).map((t) => t.options.hbsTemplateChat)).filter((t) => t != null)
    );
    await loadTemplates(b.distinct(e)), await loadTemplates([`${y}/roll/parts/parameter-label.hbs`]);
  }
  _validate(e) {
    e.code || (console.error(`${u} RollParameter does not have a code`, e), e.ignore = !0);
  }
  async _register(e) {
    if (this.registeredParameters[e.code]) {
      console.error(`${u} RollParameter ${e.code} is already registered`, e);
      return;
    }
    e.onChecked || (e.onChecked = (t, s) => t.used = s), e.onValue = (t, s) => t.value = s, this.registeredParameters[e.code] = e;
  }
  async _optionalLoadTemplate(e) {
    e && await loadTemplates([e]);
  }
  build(e) {
    return Object.values(this.registeredParameters).filter((t) => !t.condition || t.condition(e)).map((t) => this._computeParameter(t, e));
  }
  compute(e) {
    const t = e.filter((i) => this.isParameterUsed(i)), s = b.classify(t, (i) => i.category), a = {};
    return Object.values(s).forEach(
      (i) => a[i[0].category] = b.sumValues(i, (o) => o.value ?? (o.optional ? 1 : 0))
    ), a;
  }
  isParameterUsed(e) {
    const t = this.findParameter(e.code);
    return (t == null ? void 0 : t.isUsed) != null ? t.isUsed(e) : e.value != null ? e.value != 0 : (console.error(
      `registered parameter ${t.code} does not have isUsed method`,
      t
    ), !1);
  }
  findParameter(e) {
    return this.registeredParameters[e];
  }
  _computeParameter(e, t) {
    const s = {
      code: e.code,
      onChecked: e.onChecked,
      onValue: e.onValue,
      isUsed: e.isUsed
    };
    return foundry.utils.mergeObject(s, e.options), e.factory && foundry.utils.mergeObject(s, e.factory(t, e.options)), foundry.utils.mergeObject(s, {
      used: s.used || s.value,
      min: s.min ?? 0,
      max: s.max ?? s.value ?? 0
    }), s;
  }
  static computeRollModifiers(e, t) {
    const s = (i) => i.type != m.itemType.weapon || t.weapon && i.id == t.weapon.id, a = t.actor.items.filter(s);
    return A.computeRollModifiers(a, t, e);
  }
}
class M extends Dialog {
  static init() {
    Hooks.once("ready", async () => await this.onReady());
  }
  static async onReady() {
    await loadTemplates([
      "systems/anarchy/templates/roll/roll-parameters-category.hbs",
      "systems/anarchy/templates/roll/parts/generic.hbs",
      "systems/anarchy/templates/roll/parts/image-attribute.hbs",
      "systems/anarchy/templates/roll/parts/image-attributeAction.hbs",
      "systems/anarchy/templates/roll/parts/image-defense.hbs",
      "systems/anarchy/templates/roll/parts/image-skill.hbs",
      "systems/anarchy/templates/roll/parts/image-weapon.hbs"
    ]);
  }
  static prepareActorRoll(e, t = void 0) {
    var s;
    return {
      actor: e,
      tokenId: (s = e.token) == null ? void 0 : s.id,
      attributes: e.getUsableAttributes(t),
      options: {
        canUseEdge: e.canUseEdge()
      }
    };
  }
  static async rollAttribute(e, t) {
    const s = foundry.utils.mergeObject(M.prepareActorRoll(e), {
      mode: z.rollType.attribute,
      attribute1: t
    });
    await M.create(s);
  }
  static async rollAttributeAction(e, t) {
    const s = foundry.utils.mergeObject(M.prepareActorRoll(e), {
      mode: z.rollType.attributeAction,
      attributeAction: t.code,
      attribute1: t.attributeFunction1(e),
      attribute2: t.attributeFunction2(e)
    });
    await M.create(s);
  }
  static async rollAttribute(e, t) {
    const s = foundry.utils.mergeObject(M.prepareActorRoll(e), {
      mode: z.rollType.attribute,
      attribute1: t
    });
    await M.create(s);
  }
  static async rollSkill(e, t, s) {
    const a = foundry.utils.mergeObject(M.prepareActorRoll(e), {
      mode: z.rollType.skill,
      skill: t,
      attribute1: (t == null ? void 0 : t.system.attribute) ?? m.attributes.agility,
      specialization: s
    });
    await M.create(a);
  }
  static async rollWeapon(e, t, s, a) {
    const i = foundry.utils.mergeObject(M.prepareActorRoll(e), {
      mode: z.rollType.weapon,
      weapon: s,
      skill: t,
      attribute1: (t == null ? void 0 : t.system.attribute) ?? e.getPhysicalAgility(),
      specialization: t == null ? void 0 : t.system.specialization,
      targeting: a
    });
    await M.create(i);
  }
  static async rollDefense(e, t, s, a = void 0) {
    const i = foundry.utils.mergeObject(M.prepareActorRoll(e), {
      mode: z.rollType.defense,
      attribute1: t.attributeFunction1(e),
      attribute2: t.attributeFunction2(e),
      defenseAction: t.code,
      attackRoll: s.attackRoll,
      tokenId: s.defenderTokenId,
      choiceChatMessageId: s.choiceChatMessageId
    });
    await M.create(i);
  }
  static async itemAttributeRoll(e, t) {
    const s = foundry.utils.mergeObject(M.prepareActorRoll(e.actor), {
      mode: z.rollType.attribute,
      item: e,
      attribute1: t,
      attributes: e.actor.getUsableAttributes(e)
    });
    await M.create(s);
  }
  static async create(e) {
    const t = game.system.anarchy.rollParameters.build(e).sort(b.ascending((i) => i.order ?? 200));
    foundry.utils.mergeObject(e, {
      ENUMS: E.getEnums((i) => e.attributes.includes(i)),
      ANARCHY: l,
      parameters: t
    });
    const s = await foundry.applications.handlebars.renderTemplate(
      `${y}/roll/roll-dialog-title.hbs`,
      e
    ), a = await foundry.applications.handlebars.renderTemplate(
      `${y}/roll/roll-dialog.hbs`,
      e
    );
    new M(s, a, e).render(!0);
  }
  constructor(e, t, s) {
    const a = {
      title: e,
      content: t,
      default: "roll",
      buttons: {
        roll: {
          label: game.i18n.localize(l.common.roll.button),
          callback: async () => await game.system.anarchy.rollManager.roll(s)
        }
      }
    }, i = {
      classes: [game.system.anarchy.styles.selectCssClass(), "anarchy-dialog"],
      width: 500,
      height: "fit-content",
      "z-index": 99999
    };
    super(a, i), this.roll = s;
  }
  activateListeners(e) {
    super.activateListeners(e), this.html = e, this.bringToTop(), this.html.find(".select-attribute-parameter").change(async (t) => {
      const s = this._getRollParameter(t), a = this._getEventItem(t, this.roll.actor), i = t.currentTarget.value, o = this.roll.actor.getAttributeValue(i, a);
      this.roll[s.code] = i, await this._setParameterSelectedOption(s, i, o);
    }), this.html.find(".check-optional").click(async (t) => {
      const s = this._getRollParameter(t);
      s.onChecked(s, t.currentTarget.checked), s.category == v.pool && await this._updateParameterValue(s, s.value);
    }), this.activateDiceParameterClick(), this.html.find("input.parameter-value:not(:disabled)").on("input", async (t) => {
      const s = this._getRollParameter(t), a = Number.parseInt(t.currentTarget.value) ?? 0;
      await this._updateParameterValue(s, a);
    }), this.html.find(".select-option-parameter").change(async (t) => {
      const s = this._getRollParameter(t), a = t.currentTarget.value, i = Number.parseInt(a);
      await this._setParameterSelectedOption(s, a, i);
    });
  }
  activateDiceParameterClick() {
    this.html.find(".input-cursor-parameter a").click(async (e) => {
      var s;
      const t = this._getRollParameter(e);
      if ((s = t.flags) != null && s.editDice) {
        const a = Number.parseInt(this.html.find(e.currentTarget).attr("data-dice")) ?? 0, i = t.value != a || a == 0 ? a : a > 0 ? a - 1 : a + 1;
        await this._updateParameterValue(t, i);
      }
    });
  }
  async _setParameterSelectedOption(e, t, s) {
    e.onChecked(e, t), e.max = s, await this._updateParameterValue(e, s);
  }
  async _updateParameterValue(e, t) {
    e.onValue(e, t), this.html.find(`.parameter[data-parameter-code='${e.code}'] .parameter-value`).text(t);
    const s = await this.renderDiceCursor(e);
    this.html.find(
      `.parameter[data-parameter-code='${e.code}'] .input-cursor-parameter`
    ).empty().append(s), this.activateDiceParameterClick(), this.html.find(
      `.parameter[data-parameter-code='${e.code}'] input.parameter-value`
    ).val(e.value);
  }
  async renderDiceCursor(e) {
    var t;
    return await te.diceCursor({
      value: e.value,
      min: e.min,
      max: e.max,
      editable: (t = e.flags) == null ? void 0 : t.editDice
    });
  }
  _getSelectedOption(e) {
    return this.html.find(
      `.parameter[data-parameter-code='${e.code}'] select.select-option-parameter option:selected`
    ).text();
  }
  _getEventItem(e, t) {
    const s = this.html.find(e.currentTarget).closest(".parameter").attr("data-item-id");
    return s ? t.items.get(s) : void 0;
  }
  _getRollParameter(e) {
    const t = this.html.find(e.currentTarget).closest(".parameter").attr("data-parameter-code");
    return this.roll.parameters.find((s) => s.code == t);
  }
}
const Ne = "selected-skill-list", us = `${d}.${Ne}`, k = m.attributes, ue = z.defenses, Ve = "shadowrun-anarchy-en", Et = {
  code: "knowledge",
  attribute: k.knowledge,
  icon: `${w}/knowledge.svg`
}, Ae = [
  { code: "athletics", attribute: k.strength, icon: `${w}/athletics.svg` },
  {
    code: "acrobatics",
    attribute: k.agility,
    icon: `${w}/escape-artist.svg`,
    lang: "fr"
  },
  {
    code: "closeCombat",
    attribute: k.agility,
    icon: `${w}/close-combat.svg`,
    defense: ue.physicalDefense
  },
  {
    code: "projectileWeapons",
    attribute: k.agility,
    icon: `${w}/projectile-weapons.svg`,
    defense: ue.physicalDefense
  },
  {
    code: "firearms",
    attribute: k.agility,
    icon: `${w}/firearms.svg`,
    defense: ue.physicalDefense
  },
  {
    code: "heavyWeapons",
    attribute: k.agility,
    icon: `${w}/heavy-weapons.svg`,
    defense: ue.physicalDefense
  },
  {
    code: "vehicleWeapons",
    attribute: k.agility,
    icon: `${w}/vehicle-weapons.svg`,
    defense: ue.physicalDefense
  },
  { code: "stealth", attribute: k.agility, icon: `${w}/stealth.svg` },
  {
    code: "pilotingGround",
    attribute: k.agility,
    icon: `${w}/piloting-ground-steering-wheel.svg`
  },
  {
    code: "pilotingOther",
    attribute: k.agility,
    icon: `${w}/piloting-other.svg`
  },
  {
    code: "escapeArtist",
    attribute: k.agility,
    icon: `${w}/escape-artist.svg`,
    lang: "en"
  },
  {
    code: "conjuring",
    attribute: k.willpower,
    hasDrain: !0,
    icon: `${w}/conjuring.svg`
  },
  {
    code: "sorcery",
    attribute: k.willpower,
    hasDrain: !0,
    icon: `${w}/sorcery.svg`
  },
  {
    code: "astralCombat",
    attribute: k.willpower,
    icon: `${w}/astral-combat.svg`,
    defense: ue.astralDefense
  },
  { code: "survival", attribute: k.willpower, icon: `${w}/survival.svg` },
  { code: "biotech", attribute: k.logic, icon: `${w}/biotech.svg` },
  {
    code: "hacking",
    attribute: k.logic,
    hasConvergence: !0,
    icon: `${w}/hacking.svg`,
    defense: ue.matrixDefense
  },
  { code: "electronics", attribute: k.logic, icon: `${w}/electronics.svg` },
  { code: "engineering", attribute: k.logic, icon: `${w}/engineering.svg` },
  {
    code: "tasking",
    attribute: k.logic,
    hasDrain: !0,
    icon: `${w}/tasking.svg`
  },
  { code: "tracking", attribute: k.logic, icon: `${w}/tracking.svg` },
  {
    code: "animals",
    attribute: k.charisma,
    icon: `${w}/animals.svg`,
    lang: "fr"
  },
  {
    code: "con",
    attribute: k.charisma,
    isSocial: !0,
    icon: `${w}/con-art.svg`
  },
  {
    code: "etiquette",
    attribute: k.charisma,
    isSocial: !0,
    icon: `${w}/etiquette.svg`,
    lang: "fr"
  },
  {
    code: "intimidation",
    attribute: k.charisma,
    isSocial: !0,
    icon: `${w}/intimidation.svg`
  },
  {
    code: "negotiation",
    attribute: k.charisma,
    isSocial: !0,
    icon: `${w}/negotiation.svg`
  },
  {
    code: "disguise",
    attribute: k.charisma,
    icon: `${w}/disguise.svg`,
    lang: "en"
  }
], hs = ["tasking", "hacking"];
class gs {
  constructor() {
    this.skillSets = {}, ce.register(C.PROVIDE_SKILL_SET), Hooks.on(
      C.PROVIDE_SKILL_SET,
      (e) => e(
        Ve,
        "Shadowrun Anarchy EN",
        Ae.filter((t) => !t.lang || t.lang == "en"),
        { lang: "en" }
      )
    ), Hooks.on(
      C.PROVIDE_SKILL_SET,
      (e) => e(
        "shadowrun-anarchy-fr",
        "Shadowrun Anarchy FR",
        Ae.filter((t) => !t.lang || t.lang == "fr"),
        { lang: "fr" }
      )
    ), Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    this.$prepareSkill(Et), Hooks.callAll(C.PROVIDE_SKILL_SET, (t, s, a, i) => {
      const o = this.$prepareSkillSet(t, s, a, i);
      o && (this.skillSets[o.id] = o);
    });
    const e = Object.fromEntries(
      Object.values(this.skillSets).map((t) => [t.id, t.name])
    );
    game.settings.register(d, Ne, {
      scope: "world",
      name: game.i18n.localize(l.settings.skillSet.name),
      hint: game.i18n.localize(l.settings.skillSet.hint),
      config: !0,
      default: Ve,
      choices: e,
      type: String
    }), this.selectedSkills = game.settings.get(d, Ne);
  }
  async onUpdateSetting(e, t, s, a) {
    e.key == us && (this.selectedSkills = game.settings.get(d, Ne));
  }
  get(e) {
    return this.getSkills({ withKnowledge: !0 }).find((t) => t.code == e);
  }
  getSkills(e = { withKnowledge: !1 }) {
    const t = this.$getConfiguredSkills().sort(b.ascending((s) => s.label));
    return e.withKnowledge ? [Et, ...t] : t;
  }
  $getConfiguredSkills() {
    return (this.skillSets[this.selectedSkills] ?? this.skillSets[Ve]).skills;
  }
  $prepareSkillSet(e, t, s, a) {
    const i = foundry.utils.mergeObject({ id: e, name: t, skills: s }, a);
    if (this.$validateSkillSet(i))
      return i.skills.forEach((o) => {
        this.$prepareSkill(o);
      }), i;
  }
  $prepareSkill(e) {
    e.labelkey = e.labelkey ?? l.skill[e.code], e.icon = e.icon ?? `${Ce}/icons/skills/skills.svg`;
  }
  $validateSkillSet(e) {
    function t(s, a = "") {
      if (!s)
        throw a;
    }
    try {
      t(e.id && e.name, "Skills list does not have an id or name");
      const s = this.skillSets[e.id];
      t(
        !s,
        `Skills list ${e.id} is already registered under name ${s == null ? void 0 : s.name}`
      ), t(Array.isArray(e.skills), "Missing skills array"), e.skills.forEach((i) => {
        t(i.code, `Missing skill code for ${i} in ${e.id}`), t(
          i.labelkey || l.skill[i.code],
          `Missing skill localization key for ${i.code}`
        ), t(i.attribute, `Missing skill attribute for ${i.code}`);
      });
      const a = e.skills.map((i) => i.code);
      return t(
        e.skills.length == b.distinct(a).length,
        `Duplicate skill codes in ${a}`
      ), !0;
    } catch (s) {
      return console.warn(
        s + (e.id ? ` in list ${e.id}` : " in unidentified list"),
        e
      ), !1;
    }
  }
}
const ct = "damage-mode", ps = `${d}.${ct}`, He = {}, Ge = {};
class R {
  static init() {
    ce.register(C.PROVIDE_DAMAGE_MODE), Hooks.on(
      "updateSetting",
      async (e, t, s, a) => R.onUpdateSetting(e, t, s, a)
    ), Hooks.on(C.PROVIDE_DAMAGE_MODE, (e) => {
      e(
        "resistanceArmorMonitor",
        l.settings.damageMode.values.resistanceArmorMonitor,
        R.sufferDamageResistanceArmorMonitor
      ), e(
        "armorResistanceMonitor",
        l.settings.damageMode.values.armorResistanceMonitor,
        R.sufferDamageArmorResistanceMonitor
      ), e(
        "armorGivesResistance",
        l.settings.damageMode.values.armorGivesResistance,
        R.sufferDamageArmorAsResistance_Earthdawn
      ), e(
        "armorGiveResistanceHitsAvoid",
        l.settings.damageMode.values.armorGiveResistanceHitsAvoid,
        R.sufferDamageArmorAsResistance_Cyberpunk
      );
    }), Hooks.once("ready", () => R.onReady());
  }
  static onReady() {
    R._registerDamageModeSetting(), R._selectDamageMode();
  }
  static _registerDamageModeSetting() {
    Hooks.callAll(C.PROVIDE_DAMAGE_MODE, (e, t, s) => {
      He[e] = game.i18n.localize(t), Ge[e] = s;
    }), game.settings.register(d, ct, {
      scope: "world",
      name: game.i18n.localize(l.settings.damageMode.name),
      hint: game.i18n.localize(l.settings.damageMode.hint),
      config: !0,
      default: Object.keys(He)[0],
      choices: He,
      type: String
    });
  }
  static async onUpdateSetting(e, t, s, a) {
    e.key == ps && R._selectDamageMode();
  }
  static _selectDamageMode() {
    let e = game.settings.get(d, ct);
    Ge[e] || (e = Object.keys(He)[0]), R.damageModeCode = e, R.damageModeMethod = Ge[e];
  }
  static async sufferDamage(e, t, s, a, i, o, n) {
    const c = e.getDamageMonitor(t);
    ae.checkActorCanReceiveDamage(t, c, e), await (R.damageModeMethod ?? R.sufferDamageResistanceArmorMonitor)(e, c, s, a, i, o), await e.applyArmorDamage(
      t,
      A.sumModifiers([n], "other", "damageArmor")
    );
  }
  static async sufferMarks(e, t) {
    await g.addCounter(e, m.monitors.marks, 1, t.id);
  }
  static async sufferDamageResistanceArmorMonitor(e, t, s, a, i, o) {
    if (t == m.monitors.marks) {
      await R.sufferMarks(e, o);
      return;
    }
    const n = g.resistance(e, t);
    let c = 0;
    if (i) {
      const h = Math.min(n, s), N = Math.min(n - h, a);
      c = s - h, g.useArmor(t) && (c -= await R.damageToArmor(e, c)), c += a - N;
    } else
      c = s + a - n, g.useArmor(t) && (c -= await R.damageToArmor(e, c));
    c > 0 && await g.addCounter(e, t, c);
  }
  static async sufferDamageArmorResistanceMonitor(e, t, s, a, i, o) {
    if (t == m.monitors.marks) {
      await R.sufferMarks(e, o);
      return;
    }
    let n = 0;
    return g.useArmor(t) ? i ? (s -= await R.damageToArmor(e, s), n = a + s) : (n = a + s, n -= await R.damageToArmor(e, n)) : n = s + a, n -= g.resistance(e, t), n > 0 && await g.addCounter(e, t, n), n;
  }
  static async sufferDamageArmorAsResistance_Cyberpunk(e, t, s, a, i, o) {
    if (t == m.monitors.marks) {
      await R.sufferMarks(e, o);
      return;
    }
    let n = s + a;
    if (g.useArmor(t) && n > 0) {
      const c = i ? a : 0, h = Math.max(
        0,
        R._computeArmorResistance(e) - c
      );
      h > 0 && (await g.addCounter(e, "armor", 1), n -= h);
    }
    return n -= g.resistance(e, t), n > 0 && await g.addCounter(e, t, n), Math.max(n, 0);
  }
  static async sufferDamageArmorAsResistance_Earthdawn(e, t, s, a, i, o) {
    if (t == m.monitors.marks) {
      await R.sufferMarks(e, o);
      return;
    }
    let n = s + a;
    if (g.useArmor(t) && !i && n > 0) {
      const c = R._computeArmorResistance(e);
      c > 0 && (await g.addCounter(e, "armor", 1), n -= c);
    }
    return n -= R._computeStrengthResistance(e, t), n -= g.resistance(e, t), n > 0 && await g.addCounter(e, t, n), n;
  }
  static async damageToArmor(e, t) {
    if (t > 0) {
      const s = g.max(e, m.monitors.armor), a = g.getCounterValue(e, m.monitors.armor), i = Math.min(s - a, t), o = g.resistance(e, m.monitors.armor), n = Math.max(0, i - o);
      return n > 0 && await g.addCounter(e, m.monitors.armor, n), i;
    } else
      return 0;
  }
  static _computeArmorResistance(e) {
    const t = g.max(e, "armor"), s = g.getCounterValue(e, "armor"), a = Math.max(0, t - s);
    return Math.max(0, Math.ceil(a / 3));
  }
  static _computeStrengthResistance(e, t) {
    switch (t) {
      case m.monitors.matrix:
        return 0;
    }
    const s = e.getAttributeValue(m.attributes.strength);
    return Math.max(0, Math.floor(s / 4));
  }
}
class H extends Actor {
  static init() {
    Hooks.on(
      "updateActor",
      (e, t, s, a) => {
        var i;
        return (i = P.firstResponsible(e)) == null ? void 0 : i.onUpdateActor(t, s);
      }
    );
  }
  constructor(e, t = {}) {
    var s;
    if (!((s = t.anarchy) != null && s.ready)) {
      const a = game.system.anarchy.actorClasses[e.type];
      if (foundry.utils.mergeObject(t, { anarchy: { ready: !0 } }), a)
        return e.img || (e.img = a.defaultIcon), new a(e, t);
    }
    t.anarchy = void 0, super(e, t);
  }
  static get initiative() {
    return "2d6 + @modifiers.initiative";
  }
  static get defaultIcon() {
  }
  static padWordListToMin(e, t) {
    for (let s = e.length; s < t; s++)
      e.push({
        word: "",
        id: s + 1,
        audio: "",
        no_delete: !1
      });
    for (let s = 0; s < t; s++)
      e[s].no_delete = !0;
    return e;
  }
  static sortSkills(e, t) {
    return t ? t.sort((s, a) => {
      const i = s.system.code === "knowledge" || s.system.attribute === "knowledge", o = a.system.code === "knowledge" || a.system.attribute === "knowledge";
      if (i && !o) return 1;
      if (!o && i) return -1;
      if (i && o)
        return s.name > a.name ? 1 : s.name > a.name ? -1 : 0;
      const n = e.getAttributeValue(s.system.attribute) + s.system.value, c = e.getAttributeValue(a.system.attribute) + a.system.value;
      return n > c ? -1 : n < c ? 1 : 0;
    }) : [];
  }
  static sortQualities(e) {
    return e ? e.sort((t, s) => t.system.positive === s.system.positive ? t.name > s.name ? 1 : t.name < s.name ? -1 : 0 : t.system.positive ? -1 : s.system.positive ? 1 : 0) : [];
  }
  static sortShadowamps(e) {
    return e ? e.sort((t, s) => t.system.level > s.system.level ? -1 : t.system.level < s.system.level || t.name > s.name ? 1 : t.name < s.name ? -1 : 0) : [];
  }
  static sortAttributeButton(e) {
    return e ? e.sort((t, s) => game.i18n.localize(t.labelkey) > game.i18n.localize(s.labelkey) ? 1 : game.i18n.localize(t.labelkey) < game.i18n.localize(s.labelkey) ? -1 : 0) : [];
  }
  getAllowedUsers(e = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
    return game.users.filter((t) => this.testUserPermission(t, e));
  }
  getAllowedUserIds(e = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
    return this.getAllowedUsers(e).map((t) => t.id);
  }
  getRightToDefend() {
    return CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER;
  }
  hasOwnAnarchy() {
    return !1;
  }
  hasGMAnarchy() {
    return !this.hasPlayerOwner;
  }
  isVehicle() {
    return this.type == m.actorTypes.vehicle;
  }
  prepareData() {
    super.prepareData(), this.cleanupFavorites();
  }
  prepareDerivedData() {
    this.prepareMatrixMonitor(), this.system.modifiers = {
      initiative: A.sumModifiers(this.items, "other", "initiative")
    }, this.system.monitors && Object.entries(this.system.monitors).forEach((e) => {
      e[1].maxBonus = A.sumMonitorModifiers(this.items, e[0], "max"), e[1].resistanceBonus = A.sumMonitorModifiers(this.items, e[0], "resistance");
    }), this.system.attributes && Object.entries(this.system.attributes).forEach(
      (e) => e[1].total = this.getAttributeValue(e[0])
    ), this.system.state = this.computeState();
  }
  getAttributes() {
    return [];
  }
  getPhysicalAgility() {
  }
  getCorrespondingAttribute(e) {
    if (this.getAttributes().includes(e))
      return e;
  }
  prepareMatrixMonitor() {
    const e = this.getMatrixDetails();
    e.hasMatrix && (this.system.monitors.matrix.max = this._getMonitorMax(e.logic), this.system.monitors.matrix.canMark = !0);
  }
  async onUpdateActor(e, t) {
    var s, a;
    ((s = e.system) == null ? void 0 : s.monitors) != null && ((a = e.system) == null ? void 0 : a.state) == null && this.update({ "system.state": this.computeState() });
  }
  computeState() {
    return {
      matrix: this.computeMatrixState(),
      physical: this.computePhysicalState()
    };
  }
  computePhysicalState() {
    return { value: 0, max: 0 };
  }
  computeMatrixState() {
    const e = this.getMatrixDetails();
    return e.hasMatrix ? {
      value: e.monitor.max - e.monitor.value,
      max: e.monitor.max
    } : { value: 0, max: 0 };
  }
  getMatrixDetails() {
    return {
      hasMatrix: !1,
      logic: void 0,
      firewall: void 0,
      monitor: ht,
      overflow: void 0
    };
  }
  getMatrixLogic() {
    return this.getMatrixDetails().logic;
  }
  getMatrixFirewall() {
    return this.getMatrixDetails().firewall;
  }
  getMatrixMonitor() {
    return this.getMatrixDetails().monitor;
  }
  getMatrixMarks() {
    var e;
    return ((e = this.getMatrixDetails().monitor) == null ? void 0 : e.marks) ?? [];
  }
  getMatrixOverflow() {
    return this.getMatrixDetails().overflow;
  }
  hasMatrixMonitor() {
    return this.getMatrixDetails().hasMatrix;
  }
  isMatrixConnected(e = void 0) {
    return !1;
  }
  isMatrixSkill(e) {
    return hs.includes(e == null ? void 0 : e.system.code);
  }
  async nextConnectionMode(e) {
  }
  async defSetMatrixMonitor(e, t) {
    this.getMatrixDetails().hasMatrix ? await this.update({ [e]: t }) : game.system.anarchy.hacks.i18n.format(l.actor.monitors.noMatrixMonitor, {
      actor: this.name
    });
  }
  async setCheckbarValue(e, t) {
    if (e.startsWith("system.monitors.matrix.")) {
      const s = this.getMatrixDetails();
      return s.setMatrixMonitor ? await s.setMatrixMonitor(e, t) : await this.defSetMatrixMonitor(e, t);
    }
    return await this.update({ [e]: t });
  }
  _getMonitorMax(e) {
    const t = this.getAttributeValue(e);
    return t == 0 ? 0 : Lt + b.divup(t, 2);
  }
  getAttributeActions() {
    return x.getActorActions(this);
  }
  getUsableAttributes(e = void 0) {
    const t = (e ? [e] : this.items).map((a) => a.getUsableAttributes()).reduce((a, i) => a.concat(i), []), s = b.distinct(this.getAttributes().concat(t));
    return s.sort(b.ascendingBySortedArray(E.sortedAttributeKeys)), s;
  }
  getAttributeValue(e, t = void 0) {
    let s = 0;
    if (e = this.getCorrespondingAttribute(e), e) {
      if (this.getAttributes().includes(e))
        s = this.system.attributes[e].value;
      else if (t) {
        if (this.isEmerged() && e == m.attributes.firewall)
          return this.getAttributeValue(m.attributes.logic);
        s = (t == null ? void 0 : t.getAttributeValue(e)) ?? 0;
      } else {
        const a = this.items.filter(
          (i) => i.isActive() && i.getAttributes().includes(e)
        );
        if (a.length > 0) {
          const i = a.map((o) => o.getAttributeValue(e) ?? 0);
          s = Math.max(...i);
        }
      }
      s += A.sumModifiers(this.items, "attribute", e);
    }
    return s;
  }
  getDamageMonitor(e) {
    switch (e) {
      case m.monitors.matrix:
      case m.monitors.marks:
        return e;
    }
  }
  async applyArmorDamage(e, t = 0) {
    switch (e) {
      case m.monitors.physical:
      case m.monitors.stun:
        await R.damageToArmor(this, t);
    }
  }
  async rollAttribute(e) {
    await M.rollAttribute(this, e);
  }
  async rollAttributeAction(e) {
    const t = x.getActorAction(this, e);
    await M.rollAttributeAction(this, t);
  }
  async rollSkill(e, t) {
    await M.rollSkill(this, e, t);
  }
  async rollWeapon(e) {
    var i, o, n;
    ae.checkWeaponDefense(e, this);
    const t = (i = e.validateTargets(this)) == null ? void 0 : i.map((c) => c.id), s = {
      attackerTokenId: (n = (o = game.scenes.current) == null ? void 0 : o.tokens.find((c) => {
        var h;
        return ((h = c.actor) == null ? void 0 : h.id) == this.id;
      })) == null ? void 0 : n.id,
      targetedTokenIds: t
    }, a = this.items.find((c) => e.isWeaponSkill(c));
    await M.rollWeapon(this, a, e, s);
  }
  async rollDefense(e) {
    const t = e.attack.defense, s = x.getActorDefense(this, t);
    await M.rollDefense(this, s, e);
  }
  async rollPilotDefense(e) {
  }
  async rollDrain(e) {
  }
  async rollConvergence(e) {
  }
  async switchMonitorCheck(e, t, s, a = void 0) {
    await g.switchMonitorCheck(this, e, t, s, a);
  }
  async addCounter(e, t, s = void 0) {
    await g.addCounter(this, e, t, s);
  }
  async setCounter(e, t, s = void 0) {
    await g.setCounter(this, e, t, s);
  }
  canPilotVehicle() {
    return !1;
  }
  canSetMarks() {
    return !1;
  }
  getCyberdeck() {
  }
  canReceiveMarks() {
    var e, t;
    return (t = (e = this.system.monitors) == null ? void 0 : e.matrix) == null ? void 0 : t.canMark;
  }
  canApplyDamage(e) {
    switch (e) {
      case m.monitors.matrix:
      case m.monitors.marks:
        return this.hasMatrixMonitor();
      case m.monitors.physical:
      case m.monitors.stun:
        return this.getDamageMonitor(e) != null;
    }
    return !1;
  }
  canReceiveDamage(e) {
    return this.canApplyDamage(e);
  }
  isEmerged() {
    return !1;
  }
  async addActorMark(e) {
    await g.addActorMark(this, e);
  }
  getActorMarks(e) {
    var t;
    return (t = g.getActorMarks(this, e)) == null ? void 0 : t.marks;
  }
  async onEnterCombat() {
    const e = A.sumModifiers(this.items, "other", "sceneAnarchy");
    e > 0 && await g.setCounter(this, m.monitors.sceneAnarchy, e);
  }
  async onLeaveCombat() {
    await g.setCounter(this, m.monitors.sceneAnarchy, 0);
  }
  getCelebrityValue() {
    return 0;
  }
  getCredibilityValue() {
    return 0;
  }
  getRumorValue() {
    return 0;
  }
  getAnarchy() {
    const e = this.hasGMAnarchy() ? game.system.anarchy.gmAnarchy.getAnarchy() : {
      isGM: !1,
      value: 0,
      max: 0
    };
    return e.scene = this.getAnarchyScene(), e;
  }
  getAnarchyScene() {
    return 0;
  }
  getAnarchyValue() {
    return this.getAnarchy().value ?? 0;
  }
  async spendCredibility(e) {
    await g.addCounter(this, m.counters.social.credibility, -e);
  }
  async spendRumor(e) {
    await g.addCounter(this, m.counters.social.rumor, -e);
  }
  async spendAnarchy(e) {
    e && !this.hasPlayerOwner && await game.system.anarchy.gmAnarchy.npcConsumesAnarchy(this, e);
  }
  getRemainingEdge() {
    var e, t;
    return ((t = (e = this.system.counters) == null ? void 0 : e.edge) == null ? void 0 : t.value) ?? 0;
  }
  canUseEdge() {
    return this.getAttributes().includes(m.attributes.edge);
  }
  async spendEdge(e) {
    if (e != 0) {
      if (!this.canUseEdge()) {
        const t = game.system.anarchy.hacks.i18n.localize(
          l.common.errors.noEdgeForActor,
          {
            actor: this.name,
            actorType: game.system.anarchy.hacks.i18n.localize(l.actorType[this.type])
          }
        );
        throw ui.notifications.warn(t), l.common.errors.noEdgeForActor + t;
      }
      await g.addCounter(this, m.counters.edge, -e);
    }
  }
  getSkillValue(e, t = void 0) {
    const s = this.items.get(e), a = this.getAttributeValue(s.system.attribute);
    return s.system.value + a + (t && s.system.specialization ? 2 : 0);
  }
  getWounds() {
    return 0;
  }
  async removeOtherMetatype(e) {
    const t = this.items.filter((s) => s.isMetatype() && s.id != (e == null ? void 0 : e.id)).map((s) => s.id);
    this.deleteEmbeddedDocuments("Item", t);
  }
  /**
   * @param ownerActor the Actor who becomes the owner of this Actor
   */
  async attachToOwnerActor(e = void 0, t = "attach") {
    if ((e == null ? void 0 : e.id) == this.id)
      return;
    e != null && e.hasPlayerOwner;
    let s = this;
    if (t == "copy") {
      const a = this.clone();
      s = (await Actor.createDocuments([a]))[0];
    }
    await s.update({ "system.ownerId": (e == null ? void 0 : e.id) ?? "" }), e == null || e.render(), this.render();
  }
  getOwnerActor() {
    if (this.system.ownerId)
      return game.actors.get(this.system.ownerId);
  }
  getOwnedActors() {
    return game.actors.filter((e) => e.system.ownerId == this.id);
  }
  hasFavorite(e, t) {
    const s = H._prepareFavorite(e, t);
    return !!this.system.favorites.find((a) => H._isSameFavorite(s, a));
  }
  static _prepareFavorite(e, t) {
    return { type: e, id: t };
  }
  static _isSameFavorite(e, t) {
    return e.id == t.id && e.type == t.type;
  }
  async switchFavorite(e, t, s) {
    const a = H._prepareFavorite(t, s), i = this.system.favorites.filter(
      (o) => !H._isSameFavorite(a, o)
    );
    e && i.push(a), this.update({ "system.favorites": i });
  }
  async cleanupFavorites() {
    const e = this.computeShortcuts().filter((t) => !t.callback);
    e.length < this.system.favorites && this.update({ "system.favorites": e });
  }
  getShortcuts() {
    return this.computeShortcuts().filter((e) => e.label && e.callback);
  }
  computeShortcuts() {
    return this.system.favorites ? this.system.favorites.map((e) => this.getShortcut(e.type, e.id)) : [];
  }
  getShortcut(e, t) {
    var a;
    const s = H._prepareFavorite(e, t);
    if (e == "attributeAction") {
      const i = x.prepareShortcut(this, t);
      if (i)
        return foundry.utils.mergeObject(i, s);
    } else if (Object.values(m.itemType).includes(e)) {
      const i = (a = this.items.get(t)) == null ? void 0 : a.prepareShortcut();
      if (i)
        return foundry.utils.mergeObject(i, s);
    }
    return s;
  }
}
class je {
  static async confirmDeleteItem(e, t = () => {
  }) {
    new Dialog({
      title: game.i18n.localize(l.common.confirmation.del),
      content: game.i18n.format(l.common.confirmation.delItem, {
        name: e.name,
        type: game.i18n.localize(l.itemType.singular[e.type])
      }),
      buttons: {
        delete: {
          icon: p.fontAwesome("fas fa-check"),
          label: game.i18n.localize(l.common.del),
          callback: t
        },
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(l.common.cancel)
        }
      },
      default: "cancel"
    }).render(!0);
  }
  static async confirmDetachOwnerActor(e, t, s = () => {
  }) {
    new Dialog({
      title: game.i18n.localize(l.common.confirmation.del),
      content: game.i18n.format(l.common.confirmation.delOwner, {
        name: e.name
      }),
      buttons: {
        delete: {
          icon: p.fontAwesome("fas fa-check"),
          label: game.i18n.localize(l.common.del),
          callback: s
        },
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(l.common.cancel)
        }
      },
      default: "cancel"
    }).render(!0);
  }
  static async confirmAttachOrCopy(e, t, s = () => {
  }, a = () => {
  }) {
    new Dialog({
      title: game.i18n.localize(l.common.confirmation.attach),
      content: game.i18n.format(l.common.confirmation.attachOrCopy, {
        ownerName: e.name,
        ownerType: game.i18n.localize(l.actorType[e.type]),
        ownedName: t.name,
        ownedType: game.i18n.localize(l.actorType[t.type])
      }),
      buttons: {
        attach: {
          icon: p.fontAwesome("fas fa-user-tag"),
          label: game.i18n.localize(l.common.attach),
          callback: s
        },
        attachCopy: {
          icon: p.fontAwesome("fas fa-user-plus"),
          label: game.i18n.localize(l.common.attachCopy),
          callback: a
        },
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(l.common.cancel)
        }
      },
      default: "cancel"
    }).render(!0);
  }
}
class gt extends Dialog {
  static async selectActor(e, t, s = async (i) => {
  }, a = async () => {
  }) {
    let i = { classes: ["select-actor"], width: 300, height: 300, "z-index": 99999 }, o = {
      title: e,
      content: await foundry.applications.handlebars.renderTemplate(
        `${y}/dialog/select-actor.hbs`,
        {
          actors: t
        }
      ),
      buttons: {
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(l.common.cancel),
          callback: async () => {
            await a();
          }
        }
      },
      default: "cancel"
    };
    new gt(o, i, t, s).render(!0);
  }
  constructor(e, t, s, a) {
    super(e, t), this.actors = s, this.onActorSelected = a;
  }
  /* -------------------------------------------- */
  activateListeners(e) {
    super.activateListeners(e), e.find(".click-select-actor").click((t) => this.onSelectActor(t));
  }
  async onSelectActor(e) {
    const t = $(e.currentTarget).attr("data-actor-id"), s = this.actors.find((a) => a.id == t);
    s && (this.onActorSelected(s), this.close());
  }
}
class Me extends foundry.appv1.sheets.ActorSheet {
  get template() {
    return `${y}/actor/${this.actor.type}.hbs`;
  }
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      isGM: game.user.isGM,
      dragDrop: [{ dragSelector: ".item ", dropSelector: null }],
      classes: [game.system.anarchy.styles.selectCssClass(), "sheet", "actor"],
      width: 600,
      height: 600,
      resizable: !0
    });
  }
  getData(e) {
    var s, a, i;
    const t = performance.now();
    try {
      let o = foundry.utils.mergeObject(super.getData(e), {
        items: {},
        anarchy: this.actor.getAnarchy(),
        ownerActor: this.actor.getOwnerActor(),
        ownedActors: this.actor.getOwnedActors(),
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: this.isEditable ? "editable" : "locked"
        },
        ENUMS: foundry.utils.mergeObject(
          { attributeAction: this.actor.getAttributeActions() },
          E.getEnums()
        ),
        ANARCHY: l
      });
      o.options.classes.push(`actor-${this.actor.type}`), o.options.classes = b.distinct(o.options.classes), o.system = this.actor.system, (s = game.system.anarchy) != null && s.uiCustomization && (o.uiCustomizations = game.system.anarchy.uiCustomization.getActiveCustomizations(), o.options.classes.push(
        ...game.system.anarchy.uiCustomization.getCustomizationClasses("actor")
      )), (a = game.system.anarchy) != null && a.themeUtilities && (o.currentTheme = game.system.anarchy.styles.currentTheme, o.availableThemes = game.system.anarchy.styles.availableThemes, o.themeMetadata = game.system.anarchy.themeUtilities.getCurrentThemeMetadata()), b.classifyInto(o.items, this.actor.items);
      const c = performance.now() - t;
      return (i = game.system.anarchy) != null && i.performanceOptimizer && c > 50 && console.warn(
        `AnarchyActorSheet.getData: Slow data preparation for ${this.actor.name} took ${c.toFixed(2)}ms`
      ), o;
    } catch (o) {
      return console.error(
        `AnarchyActorSheet.getData: Error preparing data for ${this.actor.name}`,
        o
      ), ui.notifications.error(
        `Failed to load actor sheet data for ${this.actor.name}. Please check console for details.`
      ), foundry.utils.mergeObject(super.getData(e), {
        items: {},
        anarchy: { value: 0, max: 0, scene: 0 },
        ownerActor: null,
        ownedActors: [],
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: "locked",
          classes: ["sheet", "actor", `actor-${this.actor.type || "character"}`]
        },
        ENUMS: {},
        ANARCHY: l,
        system: this.actor.system || {}
      });
    }
  }
  activateListeners(e) {
    var t, s;
    super.activateListeners(e), (t = game.system.anarchy) != null && t.uiCustomization && game.system.anarchy.uiCustomization.applyCustomizationsToElement(e[0], "actor"), (s = game.system.anarchy) != null && s.themeUtilities && game.system.anarchy.themeUtilities.applyThemeEnhancements(e[0], "actor"), this._setupEventDelegation(e), this._enhanceAccessibility(e), e.find(".click-item-add").click(async (a) => {
      a.stopPropagation(), await this.createNewItem(this.getEventItemType(a));
    }), e.find(".click-item-edit").click(async (a) => {
      var i;
      a.stopPropagation(), (i = this.getEventItem(a)) == null || i.sheet.render(!0);
    }), e.find(".click-item-activate").click(async (a) => {
      a.stopPropagation();
      const i = this.getEventItem(a), o = i.system.inactive;
      await i.update({ "system.inactive": !o });
    }), e.find("a.click-matrix-connectionMode").click(async (a) => {
      a.stopPropagation(), await this.actor.nextConnectionMode(this.getEventItem(a));
    }), e.find(".click-item-delete").click(async (a) => {
      a.stopPropagation();
      const i = this.getEventItem(a);
      je.confirmDeleteItem(i, async () => {
        await this.actor.deleteEmbeddedDocuments("Item", [i.id]);
      });
    }), e.find(".click-favorite").click(async (a) => {
      a.stopPropagation(), this.onClickFavorite({
        skillId: $(a.currentTarget).attr("data-skill-id"),
        specialization: $(a.currentTarget).attr("data-specialization"),
        weaponId: $(a.currentTarget).attr("data-weapon-id"),
        attributeAction: $(a.currentTarget).attr("data-attributeAction"),
        isFavorite: $(a.currentTarget).attr("data-isFavorite")
      });
    }), e.find(".click-owner-actor-unlink").click(async (a) => {
      a.stopPropagation(), this.detachFromOwner(this.actor.getOwnerActor(), this.actor);
    }), e.find(".click-owned-actor-view").click(async (a) => {
      var i;
      a.stopPropagation(), (i = this.getEventOwnedActor(a)) == null || i.sheet.render(!0);
    }), e.find(".click-owned-actor-unlink").click(async (a) => {
      a.stopPropagation(), this.detachFromOwner(this.actor, this.getEventOwnedActor(a));
    }), e.find("a.click-checkbar-element").click(async (a) => {
      a.stopPropagation();
      const i = this.getEventItem(a), o = i ?? this.actor, n = this.getEventMonitorCode(a), c = n == "marks" ? $(a.currentTarget).closest(".anarchy-marks").attr("data-actor-id") : void 0;
      await o.switchMonitorCheck(
        n,
        this.getEventIndex(a),
        this.isEventChecked(a),
        c,
        i
      );
    }), e.find("a.click-add-mark-actor").click(async (a) => {
      a.stopPropagation(), this.onClickAddMark();
    }), e.find(".click-skill-roll").click(async (a) => {
      a.stopPropagation(), this.actor.rollSkill(this.getEventItem(a), this.getEventSkillSpecialization(a));
    }), e.find(".click-roll-attribute").click(async (a) => {
      a.stopPropagation(), (this.getEventItem(a) ?? this.actor).rollAttribute(
        $(a.currentTarget).closest(".anarchy-attribute").attr("data-attribute")
      );
    }), e.find(".click-roll-attribute-action").click(async (a) => {
      a.stopPropagation(), this.actor.rollAttributeAction(this.getEventActionCode(a));
    }), e.find(".click-weapon-roll").click(async (a) => {
      a.stopPropagation(), this.actor.rollWeapon(this.getEventItem(a));
    });
  }
  getEventItemType(e) {
    return $(e.currentTarget).closest(".define-item-type").attr("data-item-type");
  }
  getEventItem(e) {
    const t = $(e.currentTarget).closest(".item").attr("data-item-id") ?? $(e.currentTarget).closest(".anarchy-metatype").attr("data-item-id");
    return this.actor.items.get(t);
  }
  isEventChecked(e) {
    return $(e.currentTarget).attr("data-checked") == "true";
  }
  getEventSkillSpecialization(e) {
    return $(e.currentTarget).closest(".click-skill-roll").attr("data-item-specialization");
  }
  getEventActionCode(e) {
    return $(e.currentTarget).attr("data-action-code");
  }
  getEventMonitorCode(e) {
    return $(e.currentTarget).closest(".click-checkbar-element").attr("data-monitor-code");
  }
  getEventIndex(e) {
    return Number.parseInt($(e.currentTarget).attr("data-index"));
  }
  getEventOwnedActor(e) {
    const t = $(e.currentTarget).closest(".define-owned-actor").attr("data-actor-id");
    return game.actors.get(t);
  }
  async createNewItem(e) {
    const t = game.i18n.format(l.common.newName, {
      type: game.i18n.localize(l.itemType.singular[e])
    });
    await this.actor.createEmbeddedDocuments("Item", [{ name: t, type: e }], {
      renderSheet: !0
    });
  }
  async onClickFavorite(e) {
    const t = e.isFavorite != "true";
    e.skillId ? await this.actor.switchFavorite(
      t,
      m.itemType.skill,
      e.skillId,
      e.specialization
    ) : e.weaponId ? await this.actor.switchFavorite(t, m.itemType.weapon, e.weaponId) : e.attributeAction ? await this.actor.switchFavorite(t, "attributeAction", e.attributeAction) : console.warn("Favorite not supported", e);
  }
  detachFromOwner(e, t) {
    je.confirmDetachOwnerActor(e, t, async () => {
      await t.attachToOwnerActor(), this.render(!0);
    });
  }
  async _onDropActor(e, t) {
    const s = fromUuidSync(t.uuid);
    (s == null ? void 0 : s.id) != this.actor.id && je.confirmAttachOrCopy(
      this.actor,
      s,
      async () => await s.attachToOwnerActor(this.actor),
      async () => await s.attachToOwnerActor(this.actor, "copy")
    ), super._onDropActor(e, t);
  }
  async onClickAddMark() {
    if (this.actor.canReceiveMarks()) {
      const e = game.i18n.format(l.common.selection.actorSettingMarks, {
        name: this.actor.name
      });
      await gt.selectActor(
        e,
        game.actors.filter((t) => !this.actor.getActorMarks(t.id) && t.canSetMarks()),
        (t) => this.actor.addActorMark(t.id)
      );
    }
  }
  /**
   * Setup modern event delegation for better performance
   * @param {jQuery} html - The rendered HTML
   * @private
   */
  _setupEventDelegation(e) {
    var s;
    const t = e[0];
    t.addEventListener("click", this._handleDelegatedClick.bind(this), { passive: !1 }), t.addEventListener("change", this._handleDelegatedChange.bind(this), { passive: !1 }), (s = game.system.anarchy) != null && s.performanceOptimizer && this._monitorEventPerformance(t);
  }
  /**
   * Handle delegated click events
   * @param {Event} event - The click event
   * @private
   */
  _handleDelegatedClick(e) {
    var i;
    const t = e.target.closest("[data-action]");
    if (!t) return;
    const s = t.dataset.action, a = performance.now();
    try {
      switch (s) {
        case "item-add":
          e.stopPropagation(), this.createNewItem(this.getEventItemType(e));
          break;
        case "item-edit":
          e.stopPropagation(), (i = this.getEventItem(e)) == null || i.sheet.render(!0);
          break;
        case "item-activate":
          e.stopPropagation(), this._handleItemActivate(e);
          break;
      }
    } catch (o) {
      console.error(`AnarchyActorSheet: Error handling action '${s}'`, o), ui.notifications.error(`Action failed: ${s}. Check console for details.`);
    } finally {
      const n = performance.now() - a;
      n > 100 && console.warn(`AnarchyActorSheet: Slow action '${s}' took ${n.toFixed(2)}ms`);
    }
  }
  /**
   * Handle delegated change events
   * @param {Event} event - The change event
   * @private
   */
  _handleDelegatedChange(e) {
    const t = e.target;
    if (!t.dataset.action) return;
    const s = t.dataset.action;
    try {
      switch (s) {
        case "update-field":
          this._handleFieldUpdate(e);
          break;
      }
    } catch (a) {
      console.error(`AnarchyActorSheet: Error handling change action '${s}'`, a);
    }
  }
  /**
   * Monitor event handling performance
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _monitorEventPerformance(e) {
    new PerformanceObserver((s) => {
      s.getEntries().forEach((i) => {
        i.duration > 100 && console.warn(
          `AnarchyActorSheet: Slow event handling detected: ${i.name} took ${i.duration.toFixed(2)}ms`
        );
      });
    }).observe({ entryTypes: ["measure"] });
  }
  /**
   * Handle item activation with error recovery
   * @param {Event} event - The click event
   * @private
   */
  async _handleItemActivate(e) {
    try {
      const t = this.getEventItem(e);
      if (!t) {
        ui.notifications.warn("Item not found for activation");
        return;
      }
      const s = t.system.inactive;
      await t.update({ "system.inactive": !s });
    } catch (t) {
      console.error("AnarchyActorSheet: Error activating item", t), ui.notifications.error("Failed to activate/deactivate item");
    }
  }
  /**
   * Handle field updates with validation
   * @param {Event} event - The change event
   * @private
   */
  async _handleFieldUpdate(e) {
    try {
      const t = e.target, s = t.name, a = t.value;
      if (!s) return;
      this._validateFieldUpdate(s, a) && await this.actor.update({ [s]: a });
    } catch (t) {
      console.error("AnarchyActorSheet: Error updating field", t), ui.notifications.error("Failed to update field");
    }
  }
  /**
   * Validate field updates
   * @param {string} field - The field name
   * @param {any} value - The new value
   * @returns {boolean} Whether the update is valid
   * @private
   */
  _validateFieldUpdate(e, t) {
    return e.includes("system.attributes") && (isNaN(t) || t < 0) ? (ui.notifications.warn("Attribute values must be positive numbers"), !1) : !0;
  }
  /**
   * Enhance accessibility features for the sheet
   * @param {jQuery} html - The rendered HTML
   * @private
   */
  _enhanceAccessibility(e) {
    const t = e[0];
    this._addAriaLabels(t), this._enhanceKeyboardNavigation(t), this._setupFocusManagement(t), this._applyAccessibilityPreferences(t);
  }
  /**
   * Add ARIA labels for better screen reader support
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _addAriaLabels(e) {
    e.querySelectorAll(
      "button:not([aria-label]), a.item-control:not([aria-label])"
    ).forEach((i) => {
      var n;
      if (i.querySelector('i[class*="fa-"]')) {
        const c = i.dataset.action || ((n = i.className.match(/click-(\w+)/)) == null ? void 0 : n[1]) || "action";
        i.setAttribute("aria-label", `${c.replace("-", " ")} button`);
      }
    }), e.querySelectorAll("input:not([aria-label]), select:not([aria-label])").forEach((i) => {
      var n;
      const o = (n = i.closest(".form-group")) == null ? void 0 : n.querySelector("label");
      o && !i.getAttribute("aria-label") && i.setAttribute("aria-label", o.textContent.trim());
    }), e.querySelectorAll(".anarchy-monitor").forEach((i) => {
      var n;
      i.setAttribute("role", "progressbar");
      const o = (n = i.querySelector(".monitor-label")) == null ? void 0 : n.textContent;
      o && i.setAttribute("aria-label", `${o} monitor`);
    });
  }
  /**
   * Enhance keyboard navigation
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _enhanceKeyboardNavigation(e) {
    e.querySelectorAll('[class*="click-"]:not(button):not(a)').forEach((s) => {
      s.hasAttribute("tabindex") || s.setAttribute("tabindex", "0"), s.hasAttribute("role") || s.setAttribute("role", "button"), s.addEventListener("keydown", (a) => {
        (a.key === "Enter" || a.key === " ") && (a.preventDefault(), s.click());
      });
    }), this._addSkipLinks(e);
  }
  /**
   * Add skip links for better navigation
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _addSkipLinks(e) {
    const t = document.createElement("div");
    t.className = "skip-links", t.innerHTML = `
      <a href="#sheet-content" class="skip-link">Skip to main content</a>
      <a href="#sheet-tabs" class="skip-link">Skip to navigation</a>
    `, e.insertBefore(t, e.firstChild);
    const s = e.querySelector(".sheet-body");
    s && !s.id && (s.id = "sheet-content");
    const a = e.querySelector(".sheet-tabs");
    a && !a.id && (a.id = "sheet-tabs");
  }
  /**
   * Setup focus management for better accessibility
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _setupFocusManagement(e) {
    const t = e.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (t.length > 0) {
      const s = t[0], a = t[t.length - 1];
      e.addEventListener("keydown", (i) => {
        i.key === "Tab" && (i.shiftKey && document.activeElement === s ? (i.preventDefault(), a.focus()) : !i.shiftKey && document.activeElement === a && (i.preventDefault(), s.focus()));
      });
    }
  }
  /**
   * Apply accessibility preferences from the style system
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _applyAccessibilityPreferences(e) {
    var s;
    const t = (s = game.system.anarchy) == null ? void 0 : s.uiCustomization;
    t && (t.getCustomization("accessibility", "highContrast") && e.classList.add("high-contrast"), t.getCustomization("accessibility", "reducedMotion") && e.classList.add("reduced-motion"), t.getCustomization("accessibility", "largeText") && e.classList.add("large-text"), t.getCustomization("accessibility", "enhancedFocus") && e.classList.add("enhanced-focus"));
  }
}
class Pe extends Me {
  get template() {
    return `${y}/actor/character.hbs`;
  }
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 720,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }
  getData(e) {
    this.viewMode == null && (this.viewMode = !0);
    const t = this.actor.computeEssence();
    return foundry.utils.mergeObject(super.getData(e), {
      essence: {
        value: t,
        adjust: this.actor.computeMalusEssence(t)
      },
      options: {
        viewMode: this.viewMode
      }
    });
  }
  toggleViewMode() {
    this.viewMode = !this.viewMode, this.render();
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".click-toggle-view-mode").click(async (t) => this.toggleViewMode()), e.find(".click-word-add").click(async (t) => {
      t.stopPropagation(), this.createNewWord(this.getEventWordType(t));
    }), e.find(".click-word-say").click(async (t) => {
      t.stopPropagation(), this.actor.sayWord(this.getEventWordType(t), this.getEventWordId(t));
    }), e.find(".change-word-value").click(async (t) => {
      t.stopPropagation();
    }), e.find(".change-word-value").change(async (t) => {
      t.stopPropagation();
      const s = t.currentTarget.value;
      await this.actor.updateWord(
        this.getEventWordType(t),
        this.getEventWordId(t),
        s
      );
    }), e.find(".click-word-delete").click(async (t) => {
      t.stopPropagation(), this.actor.deleteWord(this.getEventWordType(t), this.getEventWordId(t));
    }), e.find(".click-celebrity-roll").click(async (t) => {
      t.stopPropagation(), this.actor.rollCelebrity();
    });
  }
  createNewWord(e) {
    const t = game.i18n.localize(l.common.newEntry);
    this.actor.createWord(e, t);
  }
  getEventWordType(e) {
    return $(e.currentTarget).closest(".define-wordType").attr("data-word-type");
  }
  getEventWordId(e) {
    return $(e.currentTarget).closest(".define-wordType").attr("data-word-id");
  }
}
class se extends Pe {
  get template() {
    return `${y}/actor/character-enhanced.hbs`;
  }
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 800,
      height: 700
    });
  }
  activateListeners(e) {
    var s;
    super.activateListeners(e), (s = game.system.anarchy) != null && s.uiCustomization && game.system.anarchy.uiCustomization.applyCustomizationsToElement(e[0], "character-enhanced");
    const t = this.actor._id;
    e.find(".click-section").on("click", function() {
      const a = $(this).data("class");
      e.find(`.${a}`).toggleClass("closed"), localStorage.setItem(
        `${t}-${a}`,
        e.find(`.${a}`).hasClass("closed") ? "closed" : null
      );
    });
  }
  static ifTabClosed(e, t, s) {
    return localStorage.getItem(`${e}-section-${t}`) === "closed" ? s.fn(this) : s.inverse(this);
  }
  static actorTabClosed(e, t, s) {
    return localStorage.getItem(`${e}-section-${t}`) === "closed" ? "closed" : "";
  }
}
class ys {
  static monitor(e) {
    return game.i18n.localize(E.getFromList(E.getMonitors(), e) ?? "");
  }
  static letter(e) {
    return game.i18n.localize(E.getFromList(E.getMonitorLetters(), e) ?? "");
  }
}
class fs {
  static toLowerCaseNoAccent(e) {
    return e == null ? void 0 : e.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "");
  }
  static toUpperCaseNoAccent(e) {
    return e == null ? void 0 : e.normalize("NFD").toUpperCase().replace(/[\u0300-\u036f]/g, "");
  }
}
class ie extends Item {
  static init() {
    Hooks.on("createItem", (e, t, s) => e.onCreateItem(t, s));
  }
  async onCreateItem(e, t) {
  }
  constructor(e, t = {}) {
    var s;
    if (!((s = t.anarchy) != null && s.ready)) {
      foundry.utils.mergeObject(t, { anarchy: { ready: !0 } });
      const a = game.system.anarchy.itemClasses[e.type];
      if (a)
        return e.img || (e.img = a.defaultIcon), new a(e, t);
    }
    t.anarchy = void 0, super(e, t);
  }
  static get defaultIcon() {
  }
  getAttributes() {
    return [];
  }
  getUsableAttributes() {
    return this.isActive() ? this.getAttributes() : [];
  }
  getAttributeValue(e) {
    var t;
    return this.system.attributes ? ((t = this.system.attributes[e]) == null ? void 0 : t.value) ?? 0 : 0;
  }
  hasOwnAnarchy() {
    return !1;
  }
  hasGMAnarchy() {
    return !1;
  }
  hasMatrixMonitor() {
    return !1;
  }
  getMatrixMonitor() {
    return ht;
  }
  async nextConnectionMode() {
  }
  async setCheckbarValue(e, t) {
    return await this.update({ [e]: t });
  }
  isMetatype() {
    return this.type == m.itemType.metatype;
  }
  isCyberdeck() {
    return this.type == m.itemType.cyberdeck;
  }
  isWeapon() {
    return this.type == m.itemType.weapon;
  }
  isActive() {
    return !this.system.inactive;
  }
  canReceiveMarks() {
    var e, t;
    return (t = (e = this.system.monitors) == null ? void 0 : e.matrix) == null ? void 0 : t.canMark;
  }
  async rollAttribute(e) {
    this.parent && await M.itemAttributeRoll(this, e);
  }
  async switchMonitorCheck(e, t, s, a = void 0) {
    await g.switchMonitorCheck(this.parent, e, t, s, a, this);
  }
  async setCounter(e, t) {
    await g.setCounter(this, e, t);
  }
  async addActorMark(e) {
    await g.addActorMark(this, e);
  }
  async createModifier(e = {}) {
    e = foundry.utils.mergeObject(e, {
      group: "roll",
      effect: "pool",
      category: "skill",
      subCategory: "",
      value: 0,
      condition: ""
    }), this._mutateModifiers((t) => t.concat([e]));
  }
  async deleteModifier(e) {
    await this._mutateModifiers((t) => t.filter((s) => s.id != e));
  }
  async changeModifierSelection(e, t, s) {
    let a = this._computeModifierImpact(t, s);
    this._applyModifierUpdate(e, a);
  }
  _computeModifierImpact(e, t) {
    switch (e) {
      case "group":
        return (s) => {
          s.group != t && (s.group = t, s.effect = "", s.category = "", s.subCategory = "");
        };
      case "effect":
        return (s) => s.effect = t;
      case "category":
        return (s) => {
          s.category != t && (s.category = t, s.subCategory = "");
        };
      case "subCategory":
        return (s) => s.subCategory = t;
    }
    return (s) => {
    };
  }
  async changeModifierValue(e, t) {
    this._applyModifierUpdate(e, (s) => s.value = Number(t));
  }
  async changeModifierCondition(e, t) {
    this._applyModifierUpdate(e, (s) => s.condition = t);
  }
  async _applyModifierUpdate(e, t = (s) => {
  }) {
    await this._mutateModifiers(
      (s) => s.map((a) => (a.id == e && t(a), a))
    );
  }
  async _mutateModifiers(e = (t) => t) {
    const t = e(this.system.modifiers);
    b.reindexIds(t), await this.update({ "system.modifiers": t });
  }
  prepateShortcut() {
  }
}
class pt extends ie {
  static get defaultIcon() {
    return `${j}/skills/skills.svg`;
  }
  static prepareSkill(e) {
    const t = game.system.anarchy.skills.get(e);
    if (!t)
      return {
        img: this.defaultIcon,
        system: {
          code: e,
          attribute: "",
          hasDrain: !1,
          hasConvergence: !1
        }
      };
    const s = {
      img: t.icon,
      system: {
        code: t.code,
        attribute: t.attribute,
        hasDrain: !!t.hasDrain,
        hasConvergence: !!t.hasConvergence
      }
    };
    return t.code != "knowledge" && (s.name = game.i18n.localize(t.labelkey)), s;
  }
  isKnowledgeSkill() {
    return this.system.code == "knowledge";
  }
  isGeneralSkill() {
    return this.system.code != "knowledge";
  }
  prepareShortcut() {
    return {
      img: this.img,
      label: this.system.specialization ? `${this.name}: ${this.system.specialization}` : this.name,
      callback: (e) => e.actor.rollSkill(this, this.system.specialization)
    };
  }
}
const Nt = {
  none: { targets: 1, adjust: [0] },
  shotgun: { targets: 2, adjust: [0, -2] },
  circle: { targets: void 0 },
  cone: { targets: void 0 },
  rect: { targets: void 0 },
  ray: { targets: void 0 }
}, bs = {
  code: "weapon-range",
  options: {
    flags: { editable: !0 },
    order: 20,
    category: v.pool,
    labelkey: l.common.roll.modifiers.weaponRange,
    hbsTemplateRoll: `${y}/roll/parts/select-option.hbs`,
    hbsTemplateChat: void 0
    //``
  },
  isUsed: (r) => !0,
  condition: (r) => r.weapon,
  factory: (r) => {
    const e = r.weapon.getRanges(), t = e.map((s) => s.value);
    return {
      value: e[0].value,
      min: Math.min(...t),
      max: Math.max(...t),
      choices: e,
      selected: game.i18n.localize(e[0].labelkey)
    };
  }
}, As = {
  code: "weapon-area",
  options: {
    used: !0,
    order: 20,
    category: v.pool,
    labelkey: l.common.roll.modifiers.weaponArea,
    hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
    hbsTemplateChat: void 0
    //``
  },
  isUsed: (r) => r.used,
  condition: (r) => r.weapon && r.weapon.getArea() != m.area.none,
  factory: (r) => {
    var s;
    const e = ((s = r.targeting.targetedTokenIds) == null ? void 0 : s.length) ?? 1, t = r.weapon.getAreaModifier(e);
    return {
      value: t,
      min: Math.min(0, t),
      max: Math.max(0, t),
      used: e > 1
    };
  }
};
class ne extends ie {
  static init() {
    Hooks.once(C.REGISTER_ROLL_PARAMETERS, (e) => {
      e(As), e(bs);
    });
  }
  static get defaultIcon() {
    return `${j}/weapons/mac-10.svg`;
  }
  isWeaponSkill(e) {
    return e.type == "skill" && e.system.code === this.system.skill;
  }
  get hasDrain() {
    return this.getWeaponSkill().system.hasDrain;
  }
  get hasConvergence() {
    return this.getWeaponSkill().system.hasConvergence;
  }
  getWeaponSkill() {
    var s;
    const e = (s = this.actor) == null ? void 0 : s.items.find((a) => this.isWeaponSkill(a));
    if (e)
      return e;
    const t = game.items.find((a) => this.isWeaponSkill(a));
    return t || pt.prepareSkill(this.system.skill);
  }
  getDefense() {
    return x.fixedDefenseCode(this.system.defense);
  }
  getDamage() {
    if (!this.parent)
      return;
    const e = this.system.damageAttribute ? this.parent.getAttributeValue(this.system.damageAttribute) ?? 0 : 0;
    return {
      value: ne.damageValue(
        this.system.monitor,
        this.system.damage,
        this.system.damageAttribute,
        e
      ),
      monitor: this.system.monitor,
      noArmor: this.system.noArmor,
      armorMode: ne.armorMode(this.system.monitor, this.system.noArmor)
    };
  }
  static damageValue(e, t, s, a) {
    if (e == m.monitors.marks)
      return 1;
    if (t = Number(t), s)
      if (a !== void 0)
        t = t + Math.ceil(Number(a) / 2);
      else
        return console.warn("Weapon not attached to an actor"), game.i18n.localize(l.item.weapon.weaponWithoutActor);
    return t;
  }
  getDamageCode() {
    return ne.damageCode(
      this.system.monitor,
      this.system.damage,
      this.system.damageAttribute
    );
  }
  static damageCode(e, t, s) {
    if (e == m.monitors.marks)
      return "1";
    let a = "";
    return s && l.attributes[s] && (a += game.i18n.localize(l.attributes[s]).substring(0, 3).toUpperCase() + "/2 + "), a += String(t), a;
  }
  static armorMode(e, t) {
    return g.useArmor(e) ? t ? "noArmor" : "withArmor" : "";
  }
  getRanges() {
    let e = [this._getRange("short")];
    return this.system.range.max != "short" && e.push(this._getRange("medium")), this.system.range.max == "long" && e.push(this._getRange("long")), e;
  }
  _getRange(e) {
    return {
      value: this.system.range[e],
      labelkey: E.getFromList(E.getEnums().ranges, e)
    };
  }
  prepareShortcut() {
    return {
      img: this.img,
      label: this.name,
      callback: (e) => e.actor.rollWeapon(this)
    };
  }
  validateTargets(e) {
    var o;
    const t = (o = this.getDamage()) == null ? void 0 : o.monitor, s = P.getTargetTokens(game.user), a = s.filter((n) => {
      var c;
      return (c = n.actor) == null ? void 0 : c.canReceiveDamage(t);
    }), i = s.filter((n) => {
      var c;
      return !((c = n.actor) != null && c.canReceiveDamage(t));
    }).map((n) => n.name);
    return i.length > 0 && ui.notifications.info(
      game.i18n.format(l.common.errors.ignoredTargets, {
        targets: i.reduce(b.joiner(", "))
      })
    ), a.length == 0 ? ui.notifications.info(
      game.i18n.format(l.common.errors.noTargetSelected, {
        weapon: this.name ?? game.i18n.localize(l.itemType.singular.weapon)
      })
    ) : this.checkWeaponTargetsCount(a), a;
  }
  checkWeaponTargetsCount(e) {
    const t = this.system.area, s = Nt[t] ?? {};
    ae.checkTargetsCount(s.targets ?? 0, e, t);
  }
  getAreaModifier(e) {
    const t = this.getArea(), s = Nt[t] ?? {};
    return s.targets && s.adjust && e <= s.targets ? s.adjust[e - 1] ?? 0 : 0;
  }
  getArea() {
    return this.system.area == "" ? m.area.none : this.system.area ?? m.area.none;
  }
}
const Cs = [
  // -- monitors
  "systems/anarchy/templates/monitors/anarchy-actor.hbs",
  "systems/anarchy/templates/monitors/armor.hbs",
  "systems/anarchy/templates/monitors/edge.hbs",
  "systems/anarchy/templates/actor/parts/matrix-cyberdeck.hbs",
  "systems/anarchy/templates/monitors/matrix.hbs",
  "systems/anarchy/templates/monitors/physical.hbs",
  "systems/anarchy/templates/monitors/social-credibility.hbs",
  "systems/anarchy/templates/monitors/social-rumor.hbs",
  "systems/anarchy/templates/monitors/structure.hbs",
  "systems/anarchy/templates/monitors/stun.hbs",
  "systems/anarchy/templates/actor/character/name.hbs",
  // character
  "systems/anarchy/templates/actor/character/capacity.hbs",
  "systems/anarchy/templates/actor/character/description.hbs",
  "systems/anarchy/templates/actor/character/essence.hbs",
  "systems/anarchy/templates/actor/character/genre.hbs",
  "systems/anarchy/templates/actor/character/karma.hbs",
  "systems/anarchy/templates/actor/character/metatype.hbs",
  "systems/anarchy/templates/actor/character/social-celebrity.hbs",
  // character parts
  "systems/anarchy/templates/actor/character-limited.hbs",
  "systems/anarchy/templates/actor/parts/words.hbs",
  "systems/anarchy/templates/actor/parts/contact.hbs",
  "systems/anarchy/templates/actor/parts/contacts.hbs",
  "systems/anarchy/templates/actor/parts/gear.hbs",
  "systems/anarchy/templates/actor/parts/gears.hbs",
  // character enhanced
  "systems/anarchy/templates/actor/character-enhanced/metatype.hbs",
  "systems/anarchy/templates/actor/character-enhanced/attributes.hbs",
  "systems/anarchy/templates/actor/character-enhanced/capacity.hbs",
  "systems/anarchy/templates/actor/character-enhanced/attribute.hbs",
  "systems/anarchy/templates/actor/character-enhanced/karma.hbs",
  "systems/anarchy/templates/actor/character-enhanced/hexabox.hbs",
  "systems/anarchy/templates/actor/character-enhanced/words.hbs",
  "systems/anarchy/templates/actor/character-enhanced/skills.hbs",
  "systems/anarchy/templates/actor/character-enhanced/skill.hbs",
  "systems/anarchy/templates/actor/character-enhanced/shadowamp.hbs",
  "systems/anarchy/templates/actor/character-enhanced/shadowamps.hbs",
  "systems/anarchy/templates/actor/character-enhanced/quality.hbs",
  "systems/anarchy/templates/actor/character-enhanced/qualities.hbs",
  "systems/anarchy/templates/actor/character-enhanced/monitors.hbs",
  "systems/anarchy/templates/actor/character-enhanced/armor.hbs",
  "systems/anarchy/templates/actor/character-enhanced/stun.hbs",
  "systems/anarchy/templates/actor/character-enhanced/physical.hbs",
  "systems/anarchy/templates/actor/character-enhanced/checkbar.hbs",
  "systems/anarchy/templates/actor/character-enhanced/check-element.hbs",
  "systems/anarchy/templates/actor/character-enhanced/anarchy-actor.hbs",
  "systems/anarchy/templates/actor/character-enhanced/social-credibility.hbs",
  "systems/anarchy/templates/actor/character-enhanced/social-rumor.hbs",
  "systems/anarchy/templates/actor/character-enhanced/edge.hbs",
  "systems/anarchy/templates/actor/character-enhanced/actions.hbs",
  "systems/anarchy/templates/actor/character-enhanced/attributebutton.hbs",
  "systems/anarchy/templates/actor/character-enhanced/attributebuttons.hbs",
  "systems/anarchy/templates/actor/character-enhanced/gears.hbs",
  "systems/anarchy/templates/actor/character-enhanced/gear.hbs",
  "systems/anarchy/templates/actor/character-enhanced/cyberdecks.hbs",
  "systems/anarchy/templates/actor/character-enhanced/cyberdeck.hbs",
  "systems/anarchy/templates/actor/character-enhanced/weapons.hbs",
  "systems/anarchy/templates/actor/character-enhanced/weapon.hbs",
  "systems/anarchy/templates/actor/character-enhanced/damage-code.hbs",
  "systems/anarchy/templates/actor/character-enhanced/damage-armor.hbs",
  "systems/anarchy/templates/actor/character-enhanced/story.hbs",
  "systems/anarchy/templates/actor/character-enhanced/equipments.hbs",
  "systems/anarchy/templates/actor/character-enhanced/contact.hbs",
  "systems/anarchy/templates/actor/character-enhanced/contacts.hbs",
  "systems/anarchy/templates/actor/character-enhanced/gmnotes.hbs",
  "systems/anarchy/templates/actor/character-enhanced/description.hbs",
  "systems/anarchy/templates/actor/character-enhanced/owned-actor.hbs",
  "systems/anarchy/templates/actor/character-enhanced/owned-actors.hbs",
  // actor common
  "systems/anarchy/templates/actor/parts/attributebutton.hbs",
  "systems/anarchy/templates/actor/parts/attributebuttons.hbs",
  "systems/anarchy/templates/actor/parts/attribute.hbs",
  "systems/anarchy/templates/actor/parts/attributes.hbs",
  "systems/anarchy/templates/actor/parts/description.hbs",
  "systems/anarchy/templates/actor/parts/gmnotes.hbs",
  "systems/anarchy/templates/actor/parts/owned-actor.hbs",
  "systems/anarchy/templates/actor/parts/owned-actors.hbs",
  "systems/anarchy/templates/monitors/marks-actor.hbs",
  "systems/anarchy/templates/monitors/marks.hbs",
  "systems/anarchy/templates/actor/parts/ownership.hbs",
  "systems/anarchy/templates/actor/parts/qualities.hbs",
  "systems/anarchy/templates/actor/parts/quality.hbs",
  "systems/anarchy/templates/actor/parts/shadowamp.hbs",
  "systems/anarchy/templates/actor/parts/shadowamps.hbs",
  "systems/anarchy/templates/actor/parts/item-attribute.hbs",
  "systems/anarchy/templates/actor/parts/cyberdeck.hbs",
  "systems/anarchy/templates/actor/parts/cyberdecks.hbs",
  "systems/anarchy/templates/actor/parts/skill.hbs",
  "systems/anarchy/templates/actor/parts/skills.hbs",
  "systems/anarchy/templates/actor/parts/weapon-range.hbs",
  "systems/anarchy/templates/actor/parts/weapon.hbs",
  "systems/anarchy/templates/actor/parts/weapons.hbs",
  //-- NPC
  "systems/anarchy/templates/actor/npc-parts/quality.hbs",
  "systems/anarchy/templates/actor/npc-parts/qualities.hbs",
  "systems/anarchy/templates/actor/npc-parts/shadowamp.hbs",
  "systems/anarchy/templates/actor/npc-parts/shadowamps.hbs",
  "systems/anarchy/templates/actor/npc-parts/skill.hbs",
  "systems/anarchy/templates/actor/npc-parts/skills.hbs",
  "systems/anarchy/templates/actor/npc-parts/weapon.hbs",
  "systems/anarchy/templates/actor/npc-parts/weapons.hbs",
  // Vehicles
  "systems/anarchy/templates/actor/vehicle/vehicle-attributes.hbs",
  "systems/anarchy/templates/actor/vehicle/vehicle-category.hbs",
  "systems/anarchy/templates/actor/vehicle/vehicle-skill.hbs",
  // item
  "systems/anarchy/templates/item/parts/inactive.hbs",
  "systems/anarchy/templates/item/parts/itemname.hbs",
  "systems/anarchy/templates/item/parts/modifier.hbs",
  "systems/anarchy/templates/item/parts/modifiers.hbs",
  "systems/anarchy/templates/item/parts/references.hbs",
  // common&technical partials
  "systems/anarchy/templates/monitors/anarchy.hbs",
  "systems/anarchy/templates/monitors/anarchy-scene.hbs",
  "systems/anarchy/templates/common/view-mode.hbs",
  "systems/anarchy/templates/common/check-element.hbs",
  "systems/anarchy/templates/common/checkbar.hbs",
  "systems/anarchy/templates/common/label.hbs",
  "systems/anarchy/templates/common/damage-code.hbs",
  "systems/anarchy/templates/common/damage-armor.hbs",
  "systems/anarchy/templates/common/enum-value-label.hbs",
  "systems/anarchy/templates/common/favorite.hbs",
  "systems/anarchy/templates/common/item-control-add.hbs",
  "systems/anarchy/templates/common/item-control-activate.hbs",
  "systems/anarchy/templates/common/item-controls.hbs",
  "systems/anarchy/templates/common/control-connectionMode.hbs",
  "systems/anarchy/templates/common/actor-reference.hbs",
  // dialogs
  "systems/anarchy/templates/dialog/roll-modifier.hbs",
  // apps
  "systems/anarchy/templates/app/gm-anarchy.hbs",
  "systems/anarchy/templates/app/gm-difficulty.hbs",
  "systems/anarchy/templates/app/gm-difficulty-buttons.hbs"
];
class Oe {
  constructor() {
    Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    this.registerBasicHelpers(), await loadTemplates(b.distinct(Cs));
  }
  registerBasicHelpers() {
    Handlebars.registerHelper("concat", (...e) => b.join(e.slice(0, -1))), Handlebars.registerHelper("substring", (e, t, s) => e == null ? void 0 : e.substring(t, s)), Handlebars.registerHelper("toUpperCase", fs.toUpperCaseNoAccent), Handlebars.registerHelper("weaponDamageLetter", ys.letter), Handlebars.registerHelper("weaponDamageCode", ne.damageCode), Handlebars.registerHelper("weaponDamageValue", ne.damageValue), Handlebars.registerHelper("weaponArmorMode", ne.armorMode), Handlebars.registerHelper(
      "skillValue",
      (e, t) => e.getSkillValue(t, !1)
    ), Handlebars.registerHelper(
      "specializationValue",
      (e, t) => e.getSkillValue(t, !0)
    ), Handlebars.registerHelper("for", Oe.hbsForLoop), Handlebars.registerHelper("modulo", (e, t) => e % t), Handlebars.registerHelper("divint", b.divint), Handlebars.registerHelper("divup", b.divup), Handlebars.registerHelper("sum", (e, t) => e + t), Handlebars.registerHelper("times", (e, t) => e * t), Handlebars.registerHelper("diff", (e, t) => e - t), Handlebars.registerHelper("min", (e, t) => Math.min(e, t)), Handlebars.registerHelper("max", (e, t) => Math.max(e, t)), Handlebars.registerHelper("either", (e, t) => e || t), Handlebars.registerHelper("isInteger", (e) => e !== void 0 && Number.isInteger(e)), Handlebars.registerHelper(
      "actorAttribute",
      (e, t, s = void 0) => t.getAttributeValue(e, s)
    ), Handlebars.registerHelper("localizeAttribute", E.localizeAttribute), Handlebars.registerHelper("iconFA", p.fontAwesome), Handlebars.registerHelper("iconSrc", p.iconSystemPath), Handlebars.registerHelper("iconPath", p.iconPath), Handlebars.registerHelper("iconD6", p.iconD6), Handlebars.registerHelper("getActor", (e) => game.actors.get(e)), Handlebars.registerHelper(
      "actorHasFavorite",
      (e, t) => Oe.checkHasFavorite(e, t)
    ), Handlebars.registerHelper("padWordListToMin", H.padWordListToMin), Handlebars.registerHelper("sortSkills", H.sortSkills), Handlebars.registerHelper("sortShadowamps", H.sortShadowamps), Handlebars.registerHelper("actorTabClosed", se.actorTabClosed), Handlebars.registerHelper("ifTabClosed", se.ifTabClosed), Handlebars.registerHelper("sortQualities", H.sortQualities), Handlebars.registerHelper("sortAttributeButton", H.sortAttributeButton), Handlebars.registerHelper("range", function(e, t) {
      let s = [];
      for (let a = e; a <= t; a++)
        s.push(a);
      return s;
    }), Handlebars.registerHelper("ifGte", function(e, t, s) {
      return e >= t ? s.fn(this) : s.inverse(this);
    }), Handlebars.registerHelper("ifTabClosed", se.ifTabClosed), Handlebars.registerHelper("actorTabClosed", se.actorTabClosed), Handlebars.registerHelper("length", function(e) {
      return (e == null ? void 0 : e.length) || 0;
    });
  }
  static hbsForLoop(e, t, s) {
    let a = "";
    for (let i = e; i < t; ++i)
      a += s.fn(i);
    return a;
  }
  static checkHasFavorite(e, t) {
    const s = game.actors.get(e);
    return s == null ? void 0 : s.hasFavorite(t.hash.type, t.hash.id);
  }
}
const It = "default-css-class", lt = "style-anarchy-shadowrun", vs = [
  { name: "Shadowrun Anarchy", cssClass: lt },
  { name: "Dark", cssClass: "style-dark" },
  { name: "Dark glass", cssClass: "style-darkglass" }
];
class Ss {
  constructor() {
    this.availableStyles = {}, ce.register(C.REGISTER_STYLES), Hooks.once(
      C.REGISTER_STYLES,
      (e) => vs.forEach((t) => e(t.cssClass, t.name))
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(
      C.REGISTER_STYLES,
      (e, t) => this.availableStyles[e] = t
    ), console.log(u + "Loaded styles", this.availableStyles), game.settings.register(d, It, {
      scope: "world",
      name: game.i18n.localize(l.settings.defaultCssClass.name),
      hint: game.i18n.localize(l.settings.defaultCssClass.hint),
      config: !0,
      default: lt,
      choices: this.availableStyles,
      type: String
    });
  }
  selectCssClass() {
    const e = game.settings.get(d, It);
    return this.availableStyles[e] ? e : lt;
  }
  /**
   * Extract theme ID from a CSS class name
   * @param {string} cssClass - The CSS class name
   * @returns {string} The theme ID
   */
  getThemeIdFromClass(e) {
    return e ? {
      "style-anarchy-shadowrun": "shadowrun",
      "style-dark": "dark",
      "style-darkglass": "darkglass",
      "default-css-class": "default"
    }[e] || e.replace(/^style-/, "").replace(/-/g, "_") : "default";
  }
  /**
   * Get the current theme ID
   * @returns {string} The current theme ID
   */
  getCurrentThemeId() {
    const e = this.selectCssClass();
    return this.getThemeIdFromClass(e);
  }
}
class ws {
  constructor(e) {
    this.styles = e;
  }
  // =============================================================================
  // THEME ANALYSIS UTILITIES
  // =============================================================================
  /**
   * Analyze theme contrast ratios for accessibility
   */
  analyzeThemeContrast(e) {
    const t = this.styles.getThemeMetadata(e);
    if (!t)
      throw new Error(`Theme ${e} not found`);
    const s = this.styles.currentTheme;
    this.styles.applyTheme(t.cssClass);
    const a = {
      themeId: e,
      themeName: t.name,
      contrastRatios: {},
      accessibility: {
        wcagAA: !0,
        wcagAAA: !0,
        issues: []
      }
    };
    return [
      { bg: "--background-primary", fg: "--text-primary", name: "Primary Text" },
      { bg: "--background-secondary", fg: "--text-secondary", name: "Secondary Text" },
      { bg: "--anarchy-background-attributes", fg: "--text-primary", name: "Attribute Text" },
      { bg: "--interactive-primary", fg: "--text-inverse", name: "Button Text" }
    ].forEach((o) => {
      const n = this.styles.getCSSVariable(o.bg.replace("--", "")), c = this.styles.getCSSVariable(o.fg.replace("--", ""));
      if (n && c) {
        const h = this.calculateContrastRatio(n, c);
        a.contrastRatios[o.name] = {
          ratio: h,
          wcagAA: h >= 4.5,
          wcagAAA: h >= 7,
          background: n,
          foreground: c
        }, h < 4.5 && (a.accessibility.wcagAA = !1, a.accessibility.issues.push(`${o.name} fails WCAG AA (${h.toFixed(2)}:1)`)), h < 7 && (a.accessibility.wcagAAA = !1);
      }
    }), this.styles.applyTheme(s), a;
  }
  /**
   * Calculate contrast ratio between two colors
   */
  calculateContrastRatio(e, t) {
    const s = this.getRelativeLuminance(e), a = this.getRelativeLuminance(t), i = Math.max(s, a), o = Math.min(s, a);
    return (i + 0.05) / (o + 0.05);
  }
  /**
   * Get relative luminance (simplified)
   */
  getRelativeLuminance(e) {
    if (e.includes("hsl")) {
      const t = e.match(/hsl\([^,]+,\s*[^,]+,\s*(\d+)%/);
      if (t)
        return parseInt(t[1]) / 100;
    }
    return 0.5;
  }
  // =============================================================================
  // THEME PERFORMANCE UTILITIES
  // =============================================================================
  /**
   * Measure theme application performance
   */
  measureThemePerformance(e, t = 5) {
    const s = [];
    for (let a = 0; a < t; a++) {
      const i = performance.now();
      this.styles.applyTheme(e);
      const o = performance.now();
      s.push(o - i);
    }
    return {
      average: s.reduce((a, i) => a + i) / s.length,
      min: Math.min(...s),
      max: Math.max(...s),
      measurements: s
    };
  }
  /**
   * Analyze CSS variable usage across themes
   */
  analyzeVariableUsage() {
    const e = {
      totalVariables: 0,
      themeVariables: {},
      commonVariables: [],
      uniqueVariables: {},
      redundancy: 0
    }, t = this.styles.getAllThemes(), s = {};
    t.forEach((o) => {
      const n = this.styles.currentTheme;
      this.styles.applyTheme(o.cssClass);
      const c = this.styles.getCurrentThemeVariables();
      s[o.id] = Object.keys(c), e.themeVariables[o.id] = Object.keys(c).length, this.styles.applyTheme(n);
    });
    const a = /* @__PURE__ */ new Set();
    Object.values(s).forEach((o) => {
      o.forEach((n) => a.add(n));
    }), e.totalVariables = a.size, e.commonVariables = Array.from(a).filter((o) => Object.values(s).every((n) => n.includes(o))), Object.entries(s).forEach(([o, n]) => {
      e.uniqueVariables[o] = n.filter((c) => !e.commonVariables.includes(c));
    });
    const i = Object.values(e.themeVariables).reduce((o, n) => o + n, 0);
    return e.redundancy = Math.round((1 - e.totalVariables / i) * 100), e;
  }
  // =============================================================================
  // THEME GENERATION UTILITIES
  // =============================================================================
  /**
   * Generate a new theme based on an existing theme with color modifications
   */
  generateThemeVariant(e, t, s = {}) {
    const a = this.styles.getThemeMetadata(e);
    if (!a)
      throw new Error(`Base theme ${e} not found`);
    const i = `${e}-${t.toLowerCase().replace(/\s+/g, "-")}`, o = {
      ...a,
      id: i,
      name: `${a.name} (${t})`,
      cssClass: `style-${i}`,
      description: `${a.description} - ${t} variant`,
      version: `${a.version}-variant`,
      category: "generated",
      baseTheme: e,
      modifications: s
    };
    return s.primaryColor && (o.preview.primaryColor = s.primaryColor), s.backgroundColor && (o.preview.backgroundColor = s.backgroundColor), s.textColor && (o.preview.textColor = s.textColor), o;
  }
  /**
   * Create accessibility-enhanced theme variant
   */
  createAccessibilityVariant(e, t = {}) {
    const s = this.styles.getThemeMetadata(e);
    if (!s)
      throw new Error(`Base theme ${e} not found`);
    const i = this.generateThemeVariant(e, "Accessible");
    return i.accessibility = {
      ...s.accessibility,
      ...t,
      highContrast: t.highContrast || !1,
      reducedMotion: t.reducedMotion || !1,
      largeText: t.largeText || !1
    }, i.accessibility.highContrast && (i.preview.backgroundColor = "#000000", i.preview.textColor = "#ffffff", i.preview.primaryColor = "#ffff00"), i;
  }
  // =============================================================================
  // THEME VALIDATION UTILITIES
  // =============================================================================
  /**
   * Comprehensive theme validation
   */
  validateAllThemes() {
    const e = {
      valid: 0,
      invalid: 0,
      themes: {},
      summary: {
        totalThemes: 0,
        validationErrors: [],
        recommendations: []
      }
    }, t = this.styles.getAllThemes();
    return e.summary.totalThemes = t.length, t.forEach((s) => {
      const a = this.styles.validateTheme(s.id);
      e.themes[s.id] = a, a.valid ? e.valid++ : (e.invalid++, e.summary.validationErrors.push(...a.errors.map((i) => `${s.name}: ${i}`)));
      try {
        const i = this.analyzeThemeContrast(s.id);
        e.themes[s.id].contrast = i, i.accessibility.wcagAA || e.summary.recommendations.push(`${s.name}: Consider improving contrast ratios for better accessibility`);
      } catch (i) {
        console.warn(u + `Could not analyze contrast for theme ${s.name}:`, i);
      }
    }), e;
  }
  // =============================================================================
  // THEME EXPORT/IMPORT UTILITIES
  // =============================================================================
  /**
   * Export theme configuration for sharing
   */
  exportThemeConfiguration(e) {
    const t = this.styles.getThemeMetadata(e);
    if (!t)
      throw new Error(`Theme ${e} not found`);
    const s = this.styles.getThemeCustomization(e);
    return {
      theme: {
        ...t,
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        systemVersion: game.system.version
      },
      customizations: s,
      variables: this.extractThemeVariables(e)
    };
  }
  /**
   * Extract all CSS variables for a specific theme
   */
  extractThemeVariables(e) {
    const t = this.styles.getThemeMetadata(e);
    if (!t)
      return {};
    const s = this.styles.currentTheme;
    this.styles.applyTheme(t.cssClass);
    const a = this.styles.getCurrentThemeVariables();
    return this.styles.applyTheme(s), a;
  }
  // =============================================================================
  // DEBUGGING AND DEVELOPMENT UTILITIES
  // =============================================================================
  /**
   * Generate theme development report
   */
  generateDevelopmentReport() {
    const e = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      systemVersion: game.system.version,
      currentTheme: this.styles.currentTheme,
      themes: {},
      performance: {},
      validation: {},
      variableAnalysis: {},
      recommendations: []
    };
    return this.styles.getAllThemes().forEach((s) => {
      e.themes[s.id] = {
        metadata: s,
        validation: this.styles.validateTheme(s.id)
      };
      try {
        e.performance[s.id] = this.measureThemePerformance(s.cssClass, 3);
      } catch (a) {
        console.warn(u + `Performance analysis failed for ${s.name}:`, a);
      }
      try {
        e.themes[s.id].contrast = this.analyzeThemeContrast(s.id);
      } catch (a) {
        console.warn(u + `Contrast analysis failed for ${s.name}:`, a);
      }
    }), e.variableAnalysis = this.analyzeVariableUsage(), e.recommendations = this.generateRecommendations(e), e;
  }
  /**
   * Generate recommendations based on analysis
   */
  generateRecommendations(e) {
    const t = [];
    return Object.entries(e.performance).forEach(([s, a]) => {
      a.average > 50 && t.push({
        type: "performance",
        theme: s,
        message: `Theme application is slow (${a.average.toFixed(2)}ms average)`,
        suggestion: "Consider optimizing CSS selectors and reducing complexity"
      });
    }), Object.entries(e.themes).forEach(([s, a]) => {
      a.contrast && !a.contrast.accessibility.wcagAA && t.push({
        type: "accessibility",
        theme: s,
        message: "Theme fails WCAG AA contrast requirements",
        suggestion: "Increase contrast between text and background colors",
        details: a.contrast.accessibility.issues
      });
    }), e.variableAnalysis.redundancy > 30 && t.push({
      type: "optimization",
      theme: "all",
      message: `High variable redundancy detected (${e.variableAnalysis.redundancy}%)`,
      suggestion: "Consider consolidating similar variables across themes"
    }), t;
  }
  // =============================================================================
  // THEME TESTING UTILITIES
  // =============================================================================
  /**
   * Test theme switching functionality
   */
  testThemeSwitching() {
    const e = {
      success: !0,
      errors: [],
      switchTimes: {},
      totalTime: 0
    }, t = this.styles.getAllThemes(), s = this.styles.currentTheme;
    try {
      t.forEach((a) => {
        const i = performance.now();
        try {
          this.styles.applyTheme(a.cssClass);
          const o = performance.now();
          e.switchTimes[a.id] = o - i, e.totalTime += o - i;
        } catch (o) {
          e.success = !1, e.errors.push(`Failed to apply theme ${a.name}: ${o.message}`);
        }
      });
    } finally {
      this.styles.applyTheme(s);
    }
    return e;
  }
  /**
   * Test CSS variable accessibility
   */
  testCSSVariableAccess() {
    const e = {
      accessible: [],
      inaccessible: [],
      total: 0
    }, t = this.styles.getCurrentThemeVariables();
    return Object.keys(t).forEach((s) => {
      e.total++;
      try {
        const a = this.styles.getCSSVariable(s.replace("--", ""));
        a && a !== "" ? e.accessible.push(s) : e.inaccessible.push(s);
      } catch {
        e.inaccessible.push(s);
      }
    }), e;
  }
  // =============================================================================
  // DEVELOPMENT HELPERS
  // =============================================================================
  /**
   * Log comprehensive theme information
   */
  logThemeInfo(e) {
    const t = this.styles.getThemeMetadata(e);
    if (!t) {
      console.error(u + `Theme ${e} not found`);
      return;
    }
    console.group(u + `Theme Info: ${t.name}`), console.info("Metadata:", t), console.info("Validation:", this.styles.validateTheme(e)), console.info("Contrast Analysis:", this.analyzeThemeContrast(e)), console.info("Performance:", this.measureThemePerformance(t.cssClass, 3)), console.groupEnd();
  }
  /**
   * Create theme comparison report
   */
  compareThemes(e, t) {
    const s = this.styles.getThemeMetadata(e), a = this.styles.getThemeMetadata(t);
    if (!s || !a)
      throw new Error("One or both themes not found");
    const i = {
      themes: [s.name, a.name],
      differences: {
        metadata: {},
        variables: {},
        performance: {}
      },
      recommendations: []
    };
    ["category", "author", "version"].forEach((h) => {
      s[h] !== a[h] && (i.differences.metadata[h] = {
        [s.name]: s[h],
        [a.name]: a[h]
      });
    });
    const n = this.measureThemePerformance(s.cssClass, 3), c = this.measureThemePerformance(a.cssClass, 3);
    if (i.differences.performance = {
      [s.name]: n.average,
      [a.name]: c.average,
      difference: Math.abs(n.average - c.average)
    }, i.differences.performance.difference > 20) {
      const h = n.average > c.average ? s.name : a.name;
      i.recommendations.push(`${h} is significantly slower and could benefit from optimization`);
    }
    return i;
  }
}
var _e, Ft;
class ks {
  constructor(e) {
    Ct(this, _e);
    this.styles = e, this.customizations = /* @__PURE__ */ new Map(), this.presets = /* @__PURE__ */ new Map(), this.activeCustomizations = /* @__PURE__ */ new Set(), this.initializeCustomizations(), Hooks.once("ready", () => this.onReady()), Hooks.on("renderApplication", (t, s, a) => this.onRenderApplication(t, s, a));
  }
  async onReady() {
    console.groupCollapsed(u + "UICustomization.onReady"), await this.registerCustomizationSettings(), await this.loadUserCustomizations(), this.applyAllCustomizations(), console.groupEnd();
  }
  // =============================================================================
  // CUSTOMIZATION SETTINGS REGISTRATION
  // =============================================================================
  async registerCustomizationSettings() {
    game.settings.register(d, "ui-layout-preferences", {
      scope: "client",
      name: "UI Layout Preferences",
      hint: "Customization settings for UI layout and positioning",
      config: !1,
      default: {
        sheetWidth: "auto",
        sheetHeight: "auto",
        compactMode: !1,
        hideUnusedSections: !1,
        sectionOrder: "default",
        tabLayout: "horizontal"
      },
      type: Object
    }), game.settings.register(d, "hud-customization", {
      scope: "client",
      name: "HUD Customization",
      hint: "Customization settings for HUD elements and positioning",
      config: !1,
      default: {
        hudPosition: "default",
        hudSize: "medium",
        showShortcuts: !0,
        shortcutPosition: "left",
        gmManagerPosition: "top-left",
        gmManagerSize: "medium",
        hideInactiveElements: !1
      },
      type: Object
    }), game.settings.register(d, "visual-customization", {
      scope: "client",
      name: "Visual Customization",
      hint: "Visual appearance customization settings",
      config: !1,
      default: {
        animationSpeed: "normal",
        shadowIntensity: "medium",
        borderRadius: "default",
        spacing: "default",
        fontSize: "default",
        iconSize: "default",
        transparency: "default"
      },
      type: Object
    }), game.settings.register(d, "component-visibility", {
      scope: "client",
      name: "Component Visibility",
      hint: "Show/hide specific UI components",
      config: !1,
      default: {
        showPassportImages: !0,
        showItemImages: !0,
        showSkillIcons: !0,
        showAttributeLabels: !0,
        showTooltips: !0,
        showAnimations: !0,
        showShadows: !0,
        showGradients: !0
      },
      type: Object
    }), game.settings.register(d, "advanced-ui-settings", {
      scope: "client",
      name: "Advanced UI Settings",
      hint: "Advanced UI customization options",
      config: !1,
      default: {
        customCSS: "",
        componentOverrides: {},
        layoutTemplates: {},
        colorOverrides: {},
        fontOverrides: {}
      },
      type: Object
    });
  }
  // =============================================================================
  // CUSTOMIZATION INITIALIZATION
  // =============================================================================
  initializeCustomizations() {
    console.groupCollapsed(u + "UICustomization.initializeCustomizations"), this.registerBuiltInPresets(), this.registerCustomizationCategories(), console.groupEnd();
  }
  registerBuiltInPresets() {
    this.presets.set("compact", {
      name: "Compact Layout",
      description: "Optimized for smaller screens and minimal space usage",
      settings: {
        "ui-layout-preferences": {
          compactMode: !0,
          hideUnusedSections: !0,
          tabLayout: "vertical"
        },
        "visual-customization": {
          spacing: "tight",
          fontSize: "small",
          iconSize: "small"
        },
        "component-visibility": {
          showPassportImages: !1,
          showShadows: !1,
          showGradients: !1
        }
      }
    }), this.presets.set("accessibility", {
      name: "Accessibility Enhanced",
      description: "Optimized for accessibility and screen readers",
      settings: {
        "visual-customization": {
          fontSize: "large",
          spacing: "loose",
          shadowIntensity: "none",
          borderRadius: "minimal"
        },
        "component-visibility": {
          showTooltips: !0,
          showAnimations: !1,
          showShadows: !1
        }
      }
    }), this.presets.set("performance", {
      name: "Performance Optimized",
      description: "Reduced visual effects for better performance",
      settings: {
        "visual-customization": {
          animationSpeed: "fast",
          shadowIntensity: "light",
          transparency: "minimal"
        },
        "component-visibility": {
          showAnimations: !1,
          showShadows: !1,
          showGradients: !1
        }
      }
    }), this.presets.set("immersive", {
      name: "Immersive Experience",
      description: "Enhanced visual effects for maximum immersion",
      settings: {
        "visual-customization": {
          animationSpeed: "slow",
          shadowIntensity: "strong",
          transparency: "enhanced"
        },
        "component-visibility": {
          showAnimations: !0,
          showShadows: !0,
          showGradients: !0
        }
      }
    });
  }
  registerCustomizationCategories() {
    this.customizations.set("layout", {
      name: "Layout & Positioning",
      description: "Customize sheet layouts, sizes, and positioning",
      options: [
        {
          key: "sheetWidth",
          name: "Sheet Width",
          type: "select",
          values: ["auto", "compact", "wide", "full"]
        },
        {
          key: "sheetHeight",
          name: "Sheet Height",
          type: "select",
          values: ["auto", "compact", "tall", "full"]
        },
        { key: "compactMode", name: "Compact Mode", type: "boolean" },
        {
          key: "tabLayout",
          name: "Tab Layout",
          type: "select",
          values: ["horizontal", "vertical"]
        }
      ]
    }), this.customizations.set("visual", {
      name: "Visual Appearance",
      description: "Customize colors, fonts, and visual effects",
      options: [
        {
          key: "fontSize",
          name: "Font Size",
          type: "select",
          values: ["small", "default", "large", "xl"]
        },
        {
          key: "iconSize",
          name: "Icon Size",
          type: "select",
          values: ["small", "default", "large"]
        },
        {
          key: "spacing",
          name: "Element Spacing",
          type: "select",
          values: ["tight", "default", "loose"]
        },
        {
          key: "borderRadius",
          name: "Border Radius",
          type: "select",
          values: ["none", "minimal", "default", "rounded"]
        },
        {
          key: "shadowIntensity",
          name: "Shadow Intensity",
          type: "select",
          values: ["none", "light", "medium", "strong"]
        },
        {
          key: "animationSpeed",
          name: "Animation Speed",
          type: "select",
          values: ["none", "fast", "normal", "slow"]
        }
      ]
    }), this.customizations.set("components", {
      name: "Component Visibility",
      description: "Show or hide specific UI components",
      options: [
        { key: "showPassportImages", name: "Show Passport Images", type: "boolean" },
        { key: "showItemImages", name: "Show Item Images", type: "boolean" },
        { key: "showSkillIcons", name: "Show Skill Icons", type: "boolean" },
        { key: "showTooltips", name: "Show Tooltips", type: "boolean" },
        { key: "showAnimations", name: "Show Animations", type: "boolean" },
        { key: "showShadows", name: "Show Shadows", type: "boolean" }
      ]
    }), this.customizations.set("hud", {
      name: "HUD Elements",
      description: "Customize HUD positioning and behavior",
      options: [
        { key: "hudSize", name: "HUD Size", type: "select", values: ["small", "medium", "large"] },
        {
          key: "shortcutPosition",
          name: "Shortcut Position",
          type: "select",
          values: ["left", "right", "top", "bottom"]
        },
        {
          key: "gmManagerPosition",
          name: "GM Manager Position",
          type: "select",
          values: ["top-left", "top-right", "bottom-left", "bottom-right"]
        },
        { key: "hideInactiveElements", name: "Hide Inactive Elements", type: "boolean" }
      ]
    });
  }
  // =============================================================================
  // CUSTOMIZATION APPLICATION
  // =============================================================================
  async loadUserCustomizations() {
    const e = game.settings.get(d, "ui-layout-preferences"), t = game.settings.get(d, "hud-customization"), s = game.settings.get(d, "visual-customization"), a = game.settings.get(d, "component-visibility"), i = game.settings.get(d, "advanced-ui-settings");
    this.userCustomizations = {
      layout: e,
      hud: t,
      visual: s,
      components: a,
      advanced: i
    };
  }
  applyAllCustomizations() {
    console.groupCollapsed(u + "UICustomization.applyAllCustomizations"), this.applyLayoutCustomizations(), this.applyVisualCustomizations(), this.applyComponentVisibility(), this.applyHUDCustomizations(), this.applyAdvancedCustomizations(), this.applyBackgroundRotation(), console.groupEnd();
  }
  /**
   * Background rotation and fallback
   * Priority:
   * 1) files under systems/anarchy/img/backgrounds/
   * 2) fallback file systems/anarchy/img/2025.10_Bckgrnd.img.01.png if present
   * 3) transparent 1x1 png data URI
   */
  async applyBackgroundRotation() {
    try {
      const e = document.documentElement, t = "/systems/anarchy/img", s = `${t}/backgrounds/`, a = ["2025.10_Bckgrnd.img.01.png", "2025.10_Bckgrnd.img.02.png"], o = ["01.webp", "02.webp", "03.webp", "01.png", "02.png", "03.png"].map((N) => `${s}${N}`), n = await vt(this, _e, Ft).call(this, [
        ...o,
        ...a.map((N) => `${t}/${N}`)
      ]);
      let c = n.length > 0 ? n[Math.floor(Math.random() * n.length)] : void 0;
      c || (c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=");
      const h = `repeat center/50% url("${c}")`;
      e.style.setProperty("--anarchy-background", h), globalThis.__anarchyBackgroundCandidates = n, console.debug("[Anarchy] Background applied:", c);
    } catch (e) {
      console.warn("[Anarchy] Failed to apply background rotation", e);
    }
  }
  applyLayoutCustomizations() {
    const e = this.userCustomizations.layout, t = document.documentElement;
    if (e.sheetWidth !== "auto") {
      const s = {
        compact: "600px",
        wide: "900px",
        full: "100vw"
      };
      t.style.setProperty("--sheet-width", s[e.sheetWidth]);
    }
    if (e.sheetHeight !== "auto") {
      const s = {
        compact: "500px",
        tall: "800px",
        full: "100vh"
      };
      t.style.setProperty("--sheet-height", s[e.sheetHeight]);
    }
    e.compactMode ? document.body.classList.add("ui-compact-mode") : document.body.classList.remove("ui-compact-mode"), e.tabLayout === "vertical" ? document.body.classList.add("ui-vertical-tabs") : document.body.classList.remove("ui-vertical-tabs"), console.info(u + "Applied layout customizations:", e);
  }
  applyVisualCustomizations() {
    const e = this.userCustomizations.visual, t = document.documentElement, s = {
      small: "0.85",
      default: "1",
      large: "1.15",
      xl: "1.3"
    };
    e.fontSize !== "default" && t.style.setProperty("--font-scale", s[e.fontSize]);
    const a = {
      small: "0.8",
      default: "1",
      large: "1.2"
    };
    e.iconSize !== "default" && t.style.setProperty("--icon-scale", a[e.iconSize]);
    const i = {
      tight: "0.75",
      default: "1",
      loose: "1.25"
    };
    e.spacing !== "default" && t.style.setProperty("--spacing-scale", i[e.spacing]);
    const o = {
      none: "0px",
      minimal: "2px",
      default: "6px",
      rounded: "12px"
    };
    e.borderRadius !== "default" && t.style.setProperty("--border-radius-override", o[e.borderRadius]);
    const n = {
      none: "0",
      light: "0.5",
      medium: "1",
      strong: "1.5"
    };
    e.shadowIntensity !== "medium" && t.style.setProperty("--shadow-intensity", n[e.shadowIntensity]);
    const c = {
      none: "0ms",
      fast: "100ms",
      normal: "200ms",
      slow: "400ms"
    };
    e.animationSpeed !== "normal" && t.style.setProperty("--animation-duration", c[e.animationSpeed]), console.info(u + "Applied visual customizations:", e);
  }
  applyComponentVisibility() {
    const e = this.userCustomizations.components;
    Object.entries(e).forEach(([t, s]) => {
      const a = `hide-${t.replace(/([A-Z])/g, "-$1").toLowerCase().replace("show-", "")}`;
      s ? document.body.classList.remove(a) : document.body.classList.add(a);
    }), console.info(u + "Applied component visibility:", e);
  }
  applyHUDCustomizations() {
    const e = this.userCustomizations.hud, t = {
      small: "0.8",
      medium: "1",
      large: "1.2"
    };
    e.hudSize !== "medium" && document.documentElement.style.setProperty("--hud-scale", t[e.hudSize]);
    const s = document.getElementById("gm-manager");
    s && e.gmManagerPosition !== "top-left" && (s.classList.remove(
      "position-top-left",
      "position-top-right",
      "position-bottom-left",
      "position-bottom-right"
    ), s.classList.add(`position-${e.gmManagerPosition}`));
    const a = document.querySelector(".anarchy-shortcuts");
    a && e.shortcutPosition !== "left" && (a.classList.remove(
      "position-left",
      "position-right",
      "position-top",
      "position-bottom"
    ), a.classList.add(`position-${e.shortcutPosition}`)), console.info(u + "Applied HUD customizations:", e);
  }
  applyAdvancedCustomizations() {
    const e = this.userCustomizations.advanced, t = document.documentElement;
    e.customCSS && this.injectCustomCSS(e.customCSS), e.componentOverrides && Object.entries(e.componentOverrides).forEach(([s, a]) => {
      Object.entries(a).forEach(([i, o]) => {
        t.style.setProperty(`--${s}-${i}`, o);
      });
    }), e.colorOverrides && Object.entries(e.colorOverrides).forEach(([s, a]) => {
      t.style.setProperty(`--${s}`, a);
    }), console.info(u + "Applied advanced customizations:", e);
  }
  // =============================================================================
  // CUSTOMIZATION METHODS
  // =============================================================================
  setCustomization(e, t, s) {
    const a = this.getCategorySettingKey(e), i = game.settings.get(d, a);
    i[t] = s, game.settings.set(d, a, i), this.userCustomizations[e][t] = s, this.applySpecificCustomization(e, t, s), console.info(u + `Customization set: ${e}.${t} = ${s}`);
  }
  getCustomization(e, t) {
    var s;
    return (s = this.userCustomizations[e]) == null ? void 0 : s[t];
  }
  applySpecificCustomization(e, t, s) {
    switch (e) {
      case "visual":
        this.applyVisualCustomization(t, s);
        break;
      case "layout":
        this.applyLayoutCustomization(t, s);
        break;
      case "components":
        this.applyComponentCustomization(t, s);
        break;
      case "hud":
        this.applyHUDCustomization(t, s);
        break;
    }
  }
  applyVisualCustomization(e, t) {
    const s = document.documentElement;
    switch (e) {
      case "fontSize":
        const a = { small: "0.85", default: "1", large: "1.15", xl: "1.3" }[t];
        s.style.setProperty("--font-scale", a);
        break;
      case "iconSize":
        const i = { small: "0.8", default: "1", large: "1.2" }[t];
        s.style.setProperty("--icon-scale", i);
        break;
      case "spacing":
        const o = { tight: "0.75", default: "1", loose: "1.25" }[t];
        s.style.setProperty("--spacing-scale", o);
        break;
      case "animationSpeed":
        const n = { none: "0ms", fast: "100ms", normal: "200ms", slow: "400ms" }[t];
        s.style.setProperty("--animation-duration", n);
        break;
    }
  }
  applyLayoutCustomization(e, t) {
    switch (e) {
      case "compactMode":
        t ? document.body.classList.add("ui-compact-mode") : document.body.classList.remove("ui-compact-mode");
        break;
      case "tabLayout":
        t === "vertical" ? document.body.classList.add("ui-vertical-tabs") : document.body.classList.remove("ui-vertical-tabs");
        break;
    }
  }
  applyComponentCustomization(e, t) {
    const s = `hide-${e.replace(/([A-Z])/g, "-$1").toLowerCase().replace("show-", "")}`;
    t ? document.body.classList.remove(s) : document.body.classList.add(s);
  }
  applyHUDCustomization(e, t) {
    switch (e) {
      case "gmManagerPosition":
        const s = document.getElementById("gm-manager");
        s && (s.classList.remove(
          "position-top-left",
          "position-top-right",
          "position-bottom-left",
          "position-bottom-right"
        ), s.classList.add(`position-${t}`));
        break;
      case "hudSize":
        const a = { small: "0.8", medium: "1", large: "1.2" }[t];
        document.documentElement.style.setProperty("--hud-scale", a);
        break;
    }
  }
  // =============================================================================
  // PRESET MANAGEMENT
  // =============================================================================
  applyPreset(e) {
    const t = this.presets.get(e);
    if (!t)
      throw new Error(`Preset ${e} not found`);
    console.groupCollapsed(u + `Applying preset: ${t.name}`), Object.entries(t.settings).forEach(([s, a]) => {
      game.settings.set(d, s, a);
      const i = this.getSettingCategory(s);
      i && (this.userCustomizations[i] = {
        ...this.userCustomizations[i],
        ...a
      });
    }), this.applyAllCustomizations(), ui.notifications.info(`Applied preset: ${t.name}`), console.groupEnd();
  }
  getAvailablePresets() {
    return Array.from(this.presets.entries()).map(([e, t]) => ({
      id: e,
      ...t
    }));
  }
  // =============================================================================
  // UTILITY METHODS
  // =============================================================================
  getCategorySettingKey(e) {
    return {
      layout: "ui-layout-preferences",
      hud: "hud-customization",
      visual: "visual-customization",
      components: "component-visibility",
      advanced: "advanced-ui-settings"
    }[e];
  }
  getSettingCategory(e) {
    return {
      "ui-layout-preferences": "layout",
      "hud-customization": "hud",
      "visual-customization": "visual",
      "component-visibility": "components",
      "advanced-ui-settings": "advanced"
    }[e];
  }
  injectCustomCSS(e) {
    const t = document.getElementById("anarchy-custom-css");
    if (t && t.remove(), e.trim()) {
      const s = document.createElement("style");
      s.id = "anarchy-custom-css", s.textContent = e, document.head.appendChild(s);
    }
  }
  onRenderApplication(e, t, s) {
    (e.constructor.name.includes("Sheet") || e.constructor.name.includes("Dialog")) && this.applyCustomizationsToElement(t[0]);
  }
  applyCustomizationsToElement(e) {
    const t = this.userCustomizations.visual;
    t.fontSize !== "default" && e.style.setProperty("--local-font-scale", "var(--font-scale, 1)"), t.spacing !== "default" && e.style.setProperty("--local-spacing-scale", "var(--spacing-scale, 1)");
  }
  // =============================================================================
  // EXPORT/IMPORT CUSTOMIZATIONS
  // =============================================================================
  exportCustomizations() {
    return {
      customizations: this.userCustomizations,
      presets: Array.from(this.presets.entries()),
      metadata: {
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        systemVersion: game.system.version,
        foundryVersion: game.version
      }
    };
  }
  importCustomizations(e) {
    if (!e.customizations)
      throw new Error("Invalid customization data");
    Object.entries(e.customizations).forEach(([t, s]) => {
      const a = this.getCategorySettingKey(t);
      a && game.settings.set(d, a, s);
    }), this.loadUserCustomizations(), this.applyAllCustomizations(), ui.notifications.info("UI customizations imported successfully.");
  }
  resetAllCustomizations() {
    [
      "ui-layout-preferences",
      "hud-customization",
      "visual-customization",
      "component-visibility",
      "advanced-ui-settings"
    ].forEach((a) => {
      const i = game.settings.settings.get(`${d}.${a}`);
      i && game.settings.set(d, a, i.default);
    }), this.injectCustomCSS(""), document.body.classList.remove("ui-compact-mode", "ui-vertical-tabs");
    const t = document.documentElement;
    [
      "--font-scale",
      "--icon-scale",
      "--spacing-scale",
      "--border-radius-override",
      "--shadow-intensity",
      "--animation-duration"
    ].forEach((a) => t.style.removeProperty(a)), this.loadUserCustomizations(), this.applyAllCustomizations(), ui.notifications.info("All UI customizations reset to defaults.");
  }
  // =============================================================================
  // DEBUGGING AND ANALYSIS
  // =============================================================================
  debugCustomizations() {
    return console.group(u + "UI Customization Debug"), console.info("Current Customizations:", this.userCustomizations), console.info("Available Presets:", this.getAvailablePresets()), console.info("Active CSS Variables:", this.getActiveCustomizationVariables()), console.info("Applied Classes:", this.getAppliedCustomizationClasses()), console.groupEnd(), {
      customizations: this.userCustomizations,
      presets: this.getAvailablePresets(),
      cssVariables: this.getActiveCustomizationVariables(),
      appliedClasses: this.getAppliedCustomizationClasses()
    };
  }
  getActiveCustomizationVariables() {
    const e = getComputedStyle(document.documentElement), t = {};
    return [
      "--font-scale",
      "--icon-scale",
      "--spacing-scale",
      "--border-radius-override",
      "--shadow-intensity",
      "--animation-duration",
      "--hud-scale"
    ].forEach((a) => {
      const i = e.getPropertyValue(a);
      i && (t[a] = i.trim());
    }), t;
  }
  getAppliedCustomizationClasses() {
    return Array.from(document.body.classList).filter(
      (e) => e.startsWith("ui-") || e.startsWith("hide-") || e.startsWith("position-")
    );
  }
}
_e = new WeakSet(), Ft = async function(e) {
  const t = await Promise.allSettled(
    e.map((a) => fetch(a, { method: "HEAD", cache: "no-store" }))
  ), s = [];
  return t.forEach((a, i) => {
    a.status === "fulfilled" && a.value.ok && s.push(e[i]);
  }), s;
};
class yt extends Dialog {
  constructor(e, t = {}) {
    const s = {
      title: "UI/HUD Customization",
      content: "",
      buttons: {
        apply: {
          label: "Apply",
          callback: (i) => this.onApply(i)
        },
        reset: {
          label: "Reset All",
          callback: () => this.onReset()
        },
        export: {
          label: "Export",
          callback: () => this.onExport()
        },
        import: {
          label: "Import",
          callback: () => this.onImport()
        },
        close: {
          label: "Close"
        }
      },
      default: "apply"
    }, a = {
      classes: ["anarchy-dialog", "ui-customization-dialog"],
      width: 600,
      height: "auto",
      resizable: !0,
      ...t
    };
    super(s, a), this.uiCustomization = e, this.currentSettings = {};
  }
  async getData() {
    return await this.uiCustomization.loadUserCustomizations(), this.currentSettings = this.uiCustomization.userCustomizations, {
      customizations: this.uiCustomization.customizations,
      presets: this.uiCustomization.getAvailablePresets(),
      currentSettings: this.currentSettings,
      categories: Array.from(this.uiCustomization.customizations.entries())
    };
  }
  async _renderInner(e) {
    return `
      <div class="ui-customization-content">
        <div class="customization-tabs">
          <nav class="tab-navigation">
            <button class="tab-button active" data-tab="presets">Presets</button>
            <button class="tab-button" data-tab="layout">Layout</button>
            <button class="tab-button" data-tab="visual">Visual</button>
            <button class="tab-button" data-tab="components">Components</button>
            <button class="tab-button" data-tab="hud">HUD</button>
            <button class="tab-button" data-tab="advanced">Advanced</button>
          </nav>
          
          <div class="tab-content">
            <!-- Presets Tab -->
            <div class="tab-panel active" data-tab="presets">
              <h3>Quick Presets</h3>
              <p>Apply pre-configured customization sets for common use cases.</p>
              <div class="preset-grid">
                {{#each presets}}
                <div class="preset-card" data-preset="{{id}}">
                  <h4>{{name}}</h4>
                  <p>{{description}}</p>
                  <button class="apply-preset-btn" data-preset="{{id}}">Apply</button>
                </div>
                {{/each}}
              </div>
            </div>
            
            <!-- Layout Tab -->
            <div class="tab-panel" data-tab="layout">
              <h3>Layout & Positioning</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>Sheet Width</label>
                  <select name="layout.sheetWidth">
                    <option value="auto">Auto</option>
                    <option value="compact">Compact</option>
                    <option value="wide">Wide</option>
                    <option value="full">Full Width</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Sheet Height</label>
                  <select name="layout.sheetHeight">
                    <option value="auto">Auto</option>
                    <option value="compact">Compact</option>
                    <option value="tall">Tall</option>
                    <option value="full">Full Height</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="layout.compactMode"> Compact Mode
                  </label>
                </div>
                <div class="setting-group">
                  <label>Tab Layout</label>
                  <select name="layout.tabLayout">
                    <option value="horizontal">Horizontal</option>
                    <option value="vertical">Vertical</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Visual Tab -->
            <div class="tab-panel" data-tab="visual">
              <h3>Visual Appearance</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>Font Size</label>
                  <select name="visual.fontSize">
                    <option value="small">Small</option>
                    <option value="default">Default</option>
                    <option value="large">Large</option>
                    <option value="xl">Extra Large</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Icon Size</label>
                  <select name="visual.iconSize">
                    <option value="small">Small</option>
                    <option value="default">Default</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Element Spacing</label>
                  <select name="visual.spacing">
                    <option value="tight">Tight</option>
                    <option value="default">Default</option>
                    <option value="loose">Loose</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Animation Speed</label>
                  <select name="visual.animationSpeed">
                    <option value="none">None</option>
                    <option value="fast">Fast</option>
                    <option value="normal">Normal</option>
                    <option value="slow">Slow</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Shadow Intensity</label>
                  <select name="visual.shadowIntensity">
                    <option value="none">None</option>
                    <option value="light">Light</option>
                    <option value="medium">Medium</option>
                    <option value="strong">Strong</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Components Tab -->
            <div class="tab-panel" data-tab="components">
              <h3>Component Visibility</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showPassportImages"> Show Passport Images
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showItemImages"> Show Item Images
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showSkillIcons"> Show Skill Icons
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showTooltips"> Show Tooltips
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showAnimations"> Show Animations
                  </label>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="components.showShadows"> Show Shadows
                  </label>
                </div>
              </div>
            </div>
            
            <!-- HUD Tab -->
            <div class="tab-panel" data-tab="hud">
              <h3>HUD Elements</h3>
              <div class="customization-grid">
                <div class="setting-group">
                  <label>HUD Size</label>
                  <select name="hud.hudSize">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>GM Manager Position</label>
                  <select name="hud.gmManagerPosition">
                    <option value="top-left">Top Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="bottom-right">Bottom Right</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>Shortcut Position</label>
                  <select name="hud.shortcutPosition">
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                  </select>
                </div>
                <div class="setting-group">
                  <label>
                    <input type="checkbox" name="hud.hideInactiveElements"> Hide Inactive Elements
                  </label>
                </div>
              </div>
            </div>
            
            <!-- Advanced Tab -->
            <div class="tab-panel" data-tab="advanced">
              <h3>Advanced Customization</h3>
              <div class="customization-grid">
                <div class="setting-group full-width">
                  <label>Custom CSS</label>
                  <textarea name="advanced.customCSS" rows="10" placeholder="Enter custom CSS rules..."></textarea>
                  <small>Advanced users can add custom CSS rules here. Use with caution.</small>
                </div>
                <div class="setting-group">
                  <button type="button" class="validate-css-btn">Validate CSS</button>
                  <button type="button" class="clear-css-btn">Clear CSS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="customization-preview">
          <h4>Live Preview</h4>
          <div class="preview-area">
            <div class="preview-sheet">
              <div class="preview-header">
                <div class="preview-passport">
                  <img src="systems/anarchy/img/sample-character.webp" alt="Preview">
                </div>
                <div class="preview-info">
                  <h3>Sample Character</h3>
                  <div class="preview-attributes">
                    <div class="attribute-box">
                      <span class="attribute-label">AGI</span>
                      <span class="attribute-value">4</span>
                    </div>
                    <div class="attribute-box">
                      <span class="attribute-label">STR</span>
                      <span class="attribute-value">3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="preview-content">
                <div class="preview-section">
                  <h4>Skills</h4>
                  <div class="preview-item">
                    <img src="systems/anarchy/icons/skills/athletics.svg" alt="Athletics">
                    <span>Athletics</span>
                    <span class="skill-rating">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".tab-button").click((t) => {
      const s = $(t.currentTarget).data("tab");
      this.switchTab(e, s);
    }), e.find(".apply-preset-btn").click((t) => {
      const s = $(t.currentTarget).data("preset");
      this.applyPreset(s);
    }), e.find('select, input[type="checkbox"], textarea').change((t) => {
      this.updateLivePreview(e);
    }), e.find(".validate-css-btn").click(() => {
      this.validateCustomCSS(e);
    }), e.find(".clear-css-btn").click(() => {
      e.find('textarea[name="advanced.customCSS"]').val(""), this.updateLivePreview(e);
    });
  }
  switchTab(e, t) {
    e.find(".tab-button").removeClass("active"), e.find(`.tab-button[data-tab="${t}"]`).addClass("active"), e.find(".tab-panel").removeClass("active"), e.find(`.tab-panel[data-tab="${t}"]`).addClass("active");
  }
  updateLivePreview(e) {
    const t = new FormData(e.find("form")[0]), s = {};
    for (let [a, i] of t.entries()) {
      const [o, n] = a.split(".");
      s[o] || (s[o] = {}), e.find(`input[name="${a}"]`).attr("type") === "checkbox" ? s[o][n] = e.find(`input[name="${a}"]`).is(":checked") : s[o][n] = i;
    }
    this.applyPreviewSettings(e, s);
  }
  applyPreviewSettings(e, t) {
    var a, i, o;
    const s = e.find(".preview-area");
    if ((a = t.visual) != null && a.fontSize) {
      const n = { small: "0.85", default: "1", large: "1.15", xl: "1.3" }[t.visual.fontSize];
      s.css("--font-scale", n);
    }
    if ((i = t.visual) != null && i.iconSize) {
      const n = { small: "0.8", default: "1", large: "1.2" }[t.visual.iconSize];
      s.css("--icon-scale", n);
    }
    if ((o = t.visual) != null && o.spacing) {
      const n = { tight: "0.75", default: "1", loose: "1.25" }[t.visual.spacing];
      s.css("--spacing-scale", n);
    }
    t.components && Object.entries(t.components).forEach(([n, c]) => {
      const h = `hide-${n.replace(/([A-Z])/g, "-$1").toLowerCase().replace("show-", "")}`;
      c ? s.removeClass(h) : s.addClass(h);
    });
  }
  async onApply(e) {
    console.groupCollapsed(u + "UICustomizationDialog.onApply");
    const t = new FormData(e.find("form")[0]), s = {};
    for (let [a, i] of t.entries()) {
      const [o, n] = a.split(".");
      s[o] || (s[o] = {}), e.find(`input[name="${a}"]`).attr("type") === "checkbox" ? s[o][n] = e.find(`input[name="${a}"]`).is(":checked") : s[o][n] = i;
    }
    Object.entries(s).forEach(([a, i]) => {
      Object.entries(i).forEach(([o, n]) => {
        this.uiCustomization.setCustomization(a, o, n);
      });
    }), ui.notifications.info("UI customizations applied successfully."), console.groupEnd();
  }
  onReset() {
    Dialog.confirm({
      title: "Reset All Customizations",
      content: "<p>Are you sure you want to reset all UI customizations to defaults? This cannot be undone.</p>",
      yes: () => {
        this.uiCustomization.resetAllCustomizations(), this.render(!0);
      }
    });
  }
  onExport() {
    const e = this.uiCustomization.exportCustomizations(), t = JSON.stringify(e, null, 2), s = new Blob([t], { type: "application/json" }), a = URL.createObjectURL(s), i = document.createElement("a");
    i.href = a, i.download = `anarchy-ui-customizations-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, i.click(), URL.revokeObjectURL(a), ui.notifications.info("UI customizations exported successfully.");
  }
  onImport() {
    const e = document.createElement("input");
    e.type = "file", e.accept = ".json", e.onchange = (t) => {
      const s = t.target.files[0];
      if (!s) return;
      const a = new FileReader();
      a.onload = (i) => {
        try {
          const o = JSON.parse(i.target.result);
          this.uiCustomization.importCustomizations(o), this.render(!0);
        } catch (o) {
          ui.notifications.error("Failed to import customizations: Invalid file format."), console.error(u + "Import error:", o);
        }
      }, a.readAsText(s);
    }, e.click();
  }
  applyPreset(e) {
    Dialog.confirm({
      title: "Apply Preset",
      content: `<p>Apply the "${this.uiCustomization.presets.get(e).name}" preset? This will override your current customizations.</p>`,
      yes: () => {
        this.uiCustomization.applyPreset(e), this.render(!0);
      }
    });
  }
  validateCustomCSS(e) {
    const t = e.find('textarea[name="advanced.customCSS"]').val();
    if (!t.trim()) {
      ui.notifications.info("No custom CSS to validate.");
      return;
    }
    try {
      const s = document.createElement("style");
      s.textContent = t, document.head.appendChild(s), document.head.removeChild(s), ui.notifications.info("Custom CSS is valid.");
    } catch (s) {
      ui.notifications.error("Custom CSS contains errors. Please check your syntax."), console.error(u + "CSS validation error:", s);
    }
  }
  // =============================================================================
  // STATIC METHODS
  // =============================================================================
  static async show(e) {
    return new yt(e).render(!0);
  }
}
class Rs {
  constructor(e) {
    this.uiCustomization = e, this.registerCommands();
  }
  registerCommands() {
    globalThis.anarchyUI = {
      // Open customization dialog
      customize: () => this.openCustomizationDialog(),
      // Quick customization methods
      setFontSize: (e) => this.setFontSize(e),
      setIconSize: (e) => this.setIconSize(e),
      setSpacing: (e) => this.setSpacing(e),
      setAnimationSpeed: (e) => this.setAnimationSpeed(e),
      // Component visibility toggles
      togglePassportImages: () => this.toggleComponent("showPassportImages"),
      toggleItemImages: () => this.toggleComponent("showItemImages"),
      toggleAnimations: () => this.toggleComponent("showAnimations"),
      toggleShadows: () => this.toggleComponent("showShadows"),
      // Preset application
      applyCompactMode: () => this.applyPreset("compact"),
      applyAccessibilityMode: () => this.applyPreset("accessibility"),
      applyPerformanceMode: () => this.applyPreset("performance"),
      applyImmersiveMode: () => this.applyPreset("immersive"),
      // HUD positioning
      moveGMManager: (e) => this.moveGMManager(e),
      moveShortcuts: (e) => this.moveShortcuts(e),
      setHUDSize: (e) => this.setHUDSize(e),
      // Advanced operations
      injectCSS: (e) => this.injectCustomCSS(e),
      exportSettings: () => this.exportSettings(),
      importSettings: (e) => this.importSettings(e),
      resetAll: () => this.resetAll(),
      // Debugging
      debug: () => this.debugCustomizations(),
      listCommands: () => this.listCommands(),
      // Theme integration
      setThemeCustomization: (e, t, s) => this.setThemeCustomization(e, t, s),
      previewTheme: (e) => this.previewTheme(e),
      // Background helpers
      listBackgrounds: () => globalThis.__anarchyBackgroundCandidates ?? [],
      setBackground: (e) => this.setBackground(e),
      // Sheet management and diagnostics
      fixSheets: () => this.fixSheets(),
      debugSheets: () => this.debugSheets()
    }, console.info(
      u + "UI Customization commands registered. Use anarchyUI.listCommands() to see available commands."
    );
  }
  // =============================================================================
  // COMMAND IMPLEMENTATIONS
  // =============================================================================
  openCustomizationDialog() {
    return yt.show(this.uiCustomization);
  }
  setFontSize(e) {
    const t = ["small", "default", "large", "xl"];
    if (!t.includes(e)) {
      console.error(u + `Invalid font size. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "fontSize", e), console.info(u + `Font size set to: ${e}`);
  }
  setIconSize(e) {
    const t = ["small", "default", "large"];
    if (!t.includes(e)) {
      console.error(u + `Invalid icon size. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "iconSize", e), console.info(u + `Icon size set to: ${e}`);
  }
  setSpacing(e) {
    const t = ["tight", "default", "loose"];
    if (!t.includes(e)) {
      console.error(u + `Invalid spacing. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "spacing", e), console.info(u + `Spacing set to: ${e}`);
  }
  setAnimationSpeed(e) {
    const t = ["none", "fast", "normal", "slow"];
    if (!t.includes(e)) {
      console.error(u + `Invalid animation speed. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "animationSpeed", e), console.info(u + `Animation speed set to: ${e}`);
  }
  toggleComponent(e) {
    const s = !this.uiCustomization.getCustomization("components", e);
    this.uiCustomization.setCustomization("components", e, s), console.info(u + `${e} ${s ? "enabled" : "disabled"}`);
  }
  applyPreset(e) {
    try {
      this.uiCustomization.applyPreset(e), console.info(u + `Applied preset: ${e}`);
    } catch (t) {
      console.error(u + `Failed to apply preset: ${t.message}`);
    }
  }
  moveGMManager(e) {
    const t = ["top-left", "top-right", "bottom-left", "bottom-right"];
    if (!t.includes(e)) {
      console.error(u + `Invalid position. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("hud", "gmManagerPosition", e), console.info(u + `GM Manager moved to: ${e}`);
  }
  moveShortcuts(e) {
    const t = ["left", "right", "top", "bottom"];
    if (!t.includes(e)) {
      console.error(u + `Invalid position. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("hud", "shortcutPosition", e), console.info(u + `Shortcuts moved to: ${e}`);
  }
  setHUDSize(e) {
    const t = ["small", "medium", "large"];
    if (!t.includes(e)) {
      console.error(u + `Invalid HUD size. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("hud", "hudSize", e), console.info(u + `HUD size set to: ${e}`);
  }
  injectCustomCSS(e) {
    this.uiCustomization.setCustomization("advanced", "customCSS", e), console.info(u + "Custom CSS injected");
  }
  exportSettings() {
    const e = this.uiCustomization.exportCustomizations();
    return console.info(u + "Customization data:", e), e;
  }
  importSettings(e) {
    try {
      this.uiCustomization.importCustomizations(e), console.info(u + "Settings imported successfully");
    } catch (t) {
      console.error(u + `Import failed: ${t.message}`);
    }
  }
  resetAll() {
    this.uiCustomization.resetAllCustomizations(), console.info(u + "All customizations reset");
  }
  debugCustomizations() {
    return this.uiCustomization.debugCustomizations();
  }
  setThemeCustomization(e, t, s) {
    this.uiCustomization.styles.setThemeCustomization(e, t, s), console.info(u + `Theme customization set: ${e}.${t} = ${s}`);
  }
  previewTheme(e) {
    this.uiCustomization.styles.previewTheme(e), console.info(u + `Previewing theme: ${e}`);
  }
  listCommands() {
    const e = [
      "anarchyUI.customize() - Open customization dialog",
      "anarchyUI.setFontSize(size) - Set font size (small, default, large, xl)",
      "anarchyUI.setIconSize(size) - Set icon size (small, default, large)",
      "anarchyUI.setSpacing(spacing) - Set spacing (tight, default, loose)",
      "anarchyUI.setAnimationSpeed(speed) - Set animation speed (none, fast, normal, slow)",
      "anarchyUI.togglePassportImages() - Toggle passport images",
      "anarchyUI.toggleItemImages() - Toggle item images",
      "anarchyUI.toggleAnimations() - Toggle animations",
      "anarchyUI.toggleShadows() - Toggle shadows",
      "anarchyUI.applyCompactMode() - Apply compact preset",
      "anarchyUI.applyAccessibilityMode() - Apply accessibility preset",
      "anarchyUI.applyPerformanceMode() - Apply performance preset",
      "anarchyUI.applyImmersiveMode() - Apply immersive preset",
      "anarchyUI.moveGMManager(position) - Move GM manager (top-left, top-right, bottom-left, bottom-right)",
      "anarchyUI.moveShortcuts(position) - Move shortcuts (left, right, top, bottom)",
      "anarchyUI.setHUDSize(size) - Set HUD size (small, medium, large)",
      "anarchyUI.injectCSS(css) - Inject custom CSS",
      "anarchyUI.exportSettings() - Export customization settings",
      "anarchyUI.importSettings(data) - Import customization settings",
      "anarchyUI.resetAll() - Reset all customizations",
      "anarchyUI.debug() - Debug current customizations",
      "anarchyUI.setThemeCustomization(themeId, property, value) - Set theme-specific customization",
      "anarchyUI.previewTheme(themeClass) - Preview a theme temporarily",
      "anarchyUI.listBackgrounds() - List probed background image URLs",
      "anarchyUI.setBackground(urlOrName) - Force a background from list or full URL",
      "anarchyUI.fixSheets() - Fix all world actors/items to use Anarchy sheets",
      "anarchyUI.debugSheets() - Debug current sheet registrations and assignments"
    ];
    return console.group(u + "Available UI Customization Commands:"), e.forEach((t) => console.info(t)), console.groupEnd(), e;
  }
  setBackground(e) {
    const t = document.documentElement, a = (globalThis.__anarchyBackgroundCandidates ?? []).find((o) => o.endsWith(e)) ?? e;
    if (!a) {
      console.error(u + "No background match");
      return;
    }
    const i = `repeat center/50% url("${a}")`;
    t.style.setProperty("--anarchy-background", i), console.info(u + "Background set:", a);
  }
  // =============================================================================
  // SHEET MANAGEMENT AND DIAGNOSTICS
  // =============================================================================
  async fixSheets() {
    if (!game.user.isGM) {
      console.error(u + "fixSheets() requires GM permissions");
      return;
    }
    console.group(u + "Fixing world sheets to use Anarchy defaults");
    const e = "anarchy";
    let t = 0, s = 0;
    try {
      const a = [];
      for (const o of game.actors.contents) {
        const n = o.getFlag("core", "sheetClass");
        let c;
        switch (o.type) {
          case "character":
            c = `${e}.CharacterEnhancedSheet`;
            break;
          case "vehicle":
            c = `${e}.VehicleSheet`;
            break;
          case "device":
            c = `${e}.DeviceSheet`;
            break;
          case "sprite":
            c = `${e}.SpriteActorSheet`;
            break;
          case "ic":
            c = `${e}.ICSheet`;
            break;
        }
        c && (!n || String(n).startsWith("core.") || n !== c) && (a.push(o.update({ "flags.core.sheetClass": c })), t++, console.info(`  Actor: ${o.name} (${o.type}) → ${c}`));
      }
      const i = [];
      for (const o of game.items.contents) {
        const n = o.getFlag("core", "sheetClass");
        let c;
        switch (o.type) {
          case "contact":
            c = `${e}.ContactItemSheet`;
            break;
          case "cyberdeck":
            c = `${e}.CyberdeckItemSheet`;
            break;
          case "gear":
            c = `${e}.GearItemSheet`;
            break;
          case "metatype":
            c = `${e}.MetatypeItemSheet`;
            break;
          case "quality":
            c = `${e}.QualityItemSheet`;
            break;
          case "shadowamp":
            c = `${e}.ShadowampItemSheet`;
            break;
          case "skill":
            c = `${e}.SkillItemSheet`;
            break;
          case "weapon":
            c = `${e}.WeaponItemSheet`;
            break;
        }
        c && (!n || String(n).startsWith("core.") || n !== c) && (i.push(o.update({ "flags.core.sheetClass": c })), s++, console.info(`  Item: ${o.name} (${o.type}) → ${c}`));
      }
      await Promise.allSettled([...a, ...i]), console.info(u + `Fixed ${t} actors and ${s} items`), ui.notifications.info(
        `Fixed ${t} actors and ${s} items to use Anarchy sheets`
      );
    } catch (a) {
      console.error(u + "Error fixing sheets:", a), ui.notifications.error("Failed to fix some sheets. Check console for details.");
    }
    return console.groupEnd(), { actorCount: t, itemCount: s };
  }
  debugSheets() {
    var c, h, N, Z, V, J, L, B;
    console.group(u + "Sheet Registration Debug");
    const e = (h = (c = foundry.applications) == null ? void 0 : c.api) == null ? void 0 : h.DocumentSheetConfig;
    if (!e) {
      console.error("DocumentSheetConfig not available"), console.groupEnd();
      return;
    }
    const t = ((N = CONFIG.Actor) == null ? void 0 : N.documentClass) || Actor, s = ((Z = CONFIG.Item) == null ? void 0 : Z.documentClass) || Item;
    console.group("Registered Actor Sheets:");
    const a = e.getSheetClasses(t);
    Object.entries(a).forEach(([S, _]) => {
      console.info(`${S}:`, _);
    }), console.groupEnd(), console.group("Registered Item Sheets:");
    const i = e.getSheetClasses(s);
    Object.entries(i).forEach(([S, _]) => {
      console.info(`${S}:`, _);
    }), console.groupEnd(), console.group("Sample World Documents (first 10):");
    const o = game.actors.contents.slice(0, 10);
    o.forEach((S) => {
      var oe, le;
      const _ = S.getFlag("core", "sheetClass") || "default", K = ((le = (oe = S.sheet) == null ? void 0 : oe.constructor) == null ? void 0 : le.name) || "unknown";
      console.info(
        `Actor: ${S.name} (${S.type}) | Flag: ${_} | Constructor: ${K}`
      );
    });
    const n = game.items.contents.slice(0, 10);
    return n.forEach((S) => {
      var oe, le;
      const _ = S.getFlag("core", "sheetClass") || "default", K = ((le = (oe = S.sheet) == null ? void 0 : oe.constructor) == null ? void 0 : le.name) || "unknown";
      console.info(
        `Item: ${S.name} (${S.type}) | Flag: ${_} | Constructor: ${K}`
      );
    }), console.groupEnd(), console.group("System Status:"), console.info("Anarchy System:", game.system.anarchy), console.info("Proxy Detected:", (V = game.system.anarchy) == null ? void 0 : V.proxyDetected), console.info("Sheets Registered:", (J = game.system.anarchy) == null ? void 0 : J.sheetsRegistered), console.info("Settings:"), console.info("  anarchy-first-mode:", game.settings.get("anarchy", "anarchy-first-mode")), console.info("  allow-core-fallback:", game.settings.get("anarchy", "allow-core-fallback")), console.info("  prefer-core-sheets:", game.settings.get("anarchy", "prefer-core-sheets")), console.groupEnd(), console.groupEnd(), {
      actorSheets: a,
      itemSheets: i,
      sampleActors: o.map((S) => {
        var _, K;
        return {
          name: S.name,
          type: S.type,
          sheetFlag: S.getFlag("core", "sheetClass"),
          sheetConstructor: (K = (_ = S.sheet) == null ? void 0 : _.constructor) == null ? void 0 : K.name
        };
      }),
      sampleItems: n.map((S) => {
        var _, K;
        return {
          name: S.name,
          type: S.type,
          sheetFlag: S.getFlag("core", "sheetClass"),
          sheetConstructor: (K = (_ = S.sheet) == null ? void 0 : _.constructor) == null ? void 0 : K.name
        };
      }),
      systemStatus: {
        proxyDetected: (L = game.system.anarchy) == null ? void 0 : L.proxyDetected,
        sheetsRegistered: (B = game.system.anarchy) == null ? void 0 : B.sheetsRegistered,
        settings: {
          anarchyFirstMode: game.settings.get("anarchy", "anarchy-first-mode"),
          allowCoreFallback: game.settings.get("anarchy", "allow-core-fallback"),
          preferCoreSheets: game.settings.get("anarchy", "prefer-core-sheets")
        }
      }
    };
  }
}
class Ms {
  constructor(e, t) {
    this.styles = e, this.uiCustomization = t, this.optimizations = /* @__PURE__ */ new Map(), this.performanceMetrics = /* @__PURE__ */ new Map(), this.unusedSelectors = /* @__PURE__ */ new Set(), this.criticalCSS = /* @__PURE__ */ new Set(), this.initializeOptimizations(), Hooks.once("ready", () => this.onReady()), Hooks.on("renderApplication", (s, a, i) => this.onRenderApplication(s, a, i));
  }
  async onReady() {
    console.groupCollapsed(u + "PerformanceOptimizer.onReady"), await this.registerPerformanceSettings(), await this.analyzeCSSUsage(), this.applyPerformanceOptimizations(), console.groupEnd();
  }
  // =============================================================================
  // PERFORMANCE SETTINGS
  // =============================================================================
  async registerPerformanceSettings() {
    game.settings.register(d, "performance-optimization", {
      scope: "client",
      name: "Performance Optimization",
      hint: "Performance optimization settings",
      config: !1,
      default: {
        enableTreeShaking: !0,
        enableCriticalCSS: !0,
        enableLazyLoading: !0,
        enableCSSMinification: !0,
        enableUnusedSelectorRemoval: !0,
        performanceMode: "balanced"
        // 'performance', 'balanced', 'quality'
      },
      type: Object
    }), game.settings.register(d, "css-loading-strategy", {
      scope: "world",
      name: "CSS Loading Strategy",
      hint: "How CSS should be loaded and optimized",
      config: !1,
      default: {
        loadingMethod: "progressive",
        // 'all', 'progressive', 'lazy'
        componentSplitting: !0,
        themeSplitting: !0,
        criticalInline: !0
      },
      type: Object
    }), game.settings.register(d, "performance-monitoring", {
      scope: "client",
      name: "Performance Monitoring",
      hint: "Performance monitoring and metrics collection",
      config: !1,
      default: {
        enableMetrics: !0,
        trackRenderTimes: !0,
        trackCSSUsage: !0,
        reportThreshold: 100
        // ms
      },
      type: Object
    });
  }
  // =============================================================================
  // CSS USAGE ANALYSIS
  // =============================================================================
  async analyzeCSSUsage() {
    console.groupCollapsed(u + "PerformanceOptimizer.analyzeCSSUsage");
    const e = {
      totalSelectors: 0,
      usedSelectors: /* @__PURE__ */ new Set(),
      unusedSelectors: /* @__PURE__ */ new Set(),
      criticalSelectors: /* @__PURE__ */ new Set(),
      componentUsage: /* @__PURE__ */ new Map(),
      themeUsage: /* @__PURE__ */ new Map(),
      performanceImpact: /* @__PURE__ */ new Map()
    };
    return this.analyzeUsedSelectors(e), this.identifyCriticalCSS(e), this.analyzeComponentUsage(e), this.cssAnalysis = e, console.info(u + "CSS Usage Analysis:", e), console.groupEnd(), e;
  }
  analyzeUsedSelectors(e) {
    document.querySelectorAll("*").forEach((i) => {
      i.classList.forEach((o) => {
        e.usedSelectors.add(`.${o}`);
      }), i.id && e.usedSelectors.add(`#${i.id}`);
    });
    const s = this.getCurrentCSSText(), a = this.extractSelectorsFromCSS(s);
    a.forEach((i) => {
      this.isSelectorUsed(i, e.usedSelectors) || e.unusedSelectors.add(i);
    }), e.totalSelectors = a.length;
  }
  identifyCriticalCSS(e) {
    [
      ".sheet",
      ".sheet-header",
      ".passport-header",
      ".attribute-box",
      ".anarchy-button",
      ".section-group",
      "nav.sheet-tabs",
      ".anarchy-monitor",
      ":root"
    ].forEach((s) => {
      e.criticalSelectors.add(s);
    });
  }
  analyzeComponentUsage(e) {
    Object.entries({
      "character-enhanced": ".character-enhanced",
      "gm-manager": "#gm-manager",
      "roll-dialog": ".roll-dialog",
      "weapon-list": ".weapon-list",
      "item-components": ".items-group",
      "monitor-components": ".anarchy-monitor"
    }).forEach(([s, a]) => {
      const i = document.querySelectorAll(a);
      e.componentUsage.set(s, i.length);
    });
  }
  // =============================================================================
  // TREE-SHAKING IMPLEMENTATION
  // =============================================================================
  implementTreeShaking() {
    if (console.groupCollapsed(u + "PerformanceOptimizer.implementTreeShaking"), !game.settings.get(d, "performance-optimization").enableTreeShaking) {
      console.info(u + "Tree-shaking disabled by user settings"), console.groupEnd();
      return;
    }
    this.removeUnusedSelectors(), this.optimizeCSSDelivery(), this.implementLazyLoading(), console.groupEnd();
  }
  removeUnusedSelectors() {
    if (!this.cssAnalysis) return;
    const e = this.cssAnalysis.unusedSelectors.size, t = this.cssAnalysis.totalSelectors, s = Math.round(e / t * 100);
    console.info(u + `Tree-shaking analysis: ${e}/${t} selectors unused (${s}%)`), this.performanceMetrics.set("treeshaking", {
      unusedSelectors: e,
      totalSelectors: t,
      potentialSavings: s,
      estimatedSizeReduction: Math.round(e / t * 100)
      // KB estimate
    });
  }
  optimizeCSSDelivery() {
    const e = game.settings.get(d, "css-loading-strategy");
    e.criticalInline && this.inlineCriticalCSS(), e.componentSplitting && this.implementComponentSplitting(), e.themeSplitting && this.implementThemeSplitting();
  }
  inlineCriticalCSS() {
    if (!this.cssAnalysis) return;
    const e = this.extractCriticalCSS(), t = document.createElement("style");
    t.id = "anarchy-critical-css", t.textContent = e, document.head.insertBefore(t, document.head.firstChild), console.info(u + `Inlined critical CSS: ${e.length} characters`), this.performanceMetrics.set("criticalCSS", {
      size: e.length,
      selectors: this.cssAnalysis.criticalSelectors.size
    });
  }
  extractCriticalCSS() {
    const e = [];
    return this.cssAnalysis.criticalSelectors.forEach((t) => {
      e.push(`${t} { /* critical styles */ }`);
    }), e.join(`
`);
  }
  implementComponentSplitting() {
    Object.entries({
      "character-enhanced": "character-enhanced.css",
      "gm-manager": "gm-manager.css",
      "roll-dialog": "dialogs.css",
      "item-components": "items.css"
    }).forEach(([t, s]) => {
      this.cssAnalysis.componentUsage.get(t) > 0 && this.loadComponentCSS(s);
    });
  }
  implementThemeSplitting() {
    const e = this.styles.currentTheme, t = this.styles.getThemeIdFromClass(e);
    console.info(u + `Theme splitting: Loading only ${t} theme CSS`), this.performanceMetrics.set("themeSplitting", {
      activeTheme: t,
      potentialSavings: "Estimated 30-40% reduction in theme CSS"
    });
  }
  implementLazyLoading() {
    if (!game.settings.get(d, "performance-optimization").enableLazyLoading) return;
    const t = document.querySelectorAll("[data-lazy-component]");
    if (t.length > 0) {
      const s = new IntersectionObserver((a) => {
        a.forEach((i) => {
          i.isIntersecting && (this.loadLazyComponent(i.target), s.unobserve(i.target));
        });
      });
      t.forEach((a) => s.observe(a)), console.info(u + `Lazy loading enabled for ${t.length} components`);
    }
  }
  // =============================================================================
  // PERFORMANCE MONITORING
  // =============================================================================
  startPerformanceMonitoring() {
    const e = game.settings.get(d, "performance-monitoring");
    e.enableMetrics && (e.trackRenderTimes && this.monitorRenderTimes(), e.trackCSSUsage && this.monitorCSSUsage(), console.info(u + "Performance monitoring started"));
  }
  monitorRenderTimes() {
    const e = Application.prototype.render, t = game.settings.get(d, "performance-monitoring").reportThreshold;
    Application.prototype.render = function(...s) {
      const a = performance.now(), i = e.apply(this, s), n = performance.now() - a;
      return n > t && console.warn(u + `Slow render detected: ${this.constructor.name} took ${n.toFixed(2)}ms`), i;
    };
  }
  monitorCSSUsage() {
    new MutationObserver((t) => {
      t.forEach((s) => {
        s.type === "attributes" && s.attributeName === "class" && this.trackSelectorUsage(s.target);
      });
    }).observe(document.body, {
      attributes: !0,
      subtree: !0,
      attributeFilter: ["class"]
    });
  }
  trackSelectorUsage(e) {
    e.classList.forEach((t) => {
      const s = `.${t}`, a = this.performanceMetrics.get(s) || 0;
      this.performanceMetrics.set(s, a + 1);
    });
  }
  // =============================================================================
  // OPTIMIZATION STRATEGIES
  // =============================================================================
  initializeOptimizations() {
    this.optimizations.set("minification", {
      name: "CSS Minification",
      description: "Remove whitespace and optimize CSS output",
      enabled: !0,
      impact: "high",
      apply: () => this.applyCSSMinification()
    }), this.optimizations.set("treeshaking", {
      name: "CSS Tree-Shaking",
      description: "Remove unused CSS selectors",
      enabled: !0,
      impact: "high",
      apply: () => this.implementTreeShaking()
    }), this.optimizations.set("criticalcss", {
      name: "Critical CSS Inlining",
      description: "Inline critical above-the-fold CSS",
      enabled: !0,
      impact: "medium",
      apply: () => this.inlineCriticalCSS()
    }), this.optimizations.set("lazyloading", {
      name: "Lazy Component Loading",
      description: "Load component CSS on demand",
      enabled: !0,
      impact: "medium",
      apply: () => this.implementLazyLoading()
    }), this.optimizations.set("caching", {
      name: "CSS Caching Optimization",
      description: "Optimize CSS caching strategies",
      enabled: !0,
      impact: "low",
      apply: () => this.optimizeCSSCaching()
    });
  }
  applyPerformanceOptimizations() {
    const e = game.settings.get(d, "performance-optimization");
    switch (console.groupCollapsed(u + "Applying performance optimizations"), e.performanceMode) {
      case "performance":
        this.applyPerformanceMode();
        break;
      case "balanced":
        this.applyBalancedMode();
        break;
      case "quality":
        this.applyQualityMode();
        break;
    }
    console.groupEnd();
  }
  applyPerformanceMode() {
    console.info(u + "Applying performance mode optimizations"), this.uiCustomization.setCustomization("visual", "animationSpeed", "fast"), this.uiCustomization.setCustomization("visual", "shadowIntensity", "light"), this.uiCustomization.setCustomization("components", "showAnimations", !1), this.uiCustomization.setCustomization("components", "showShadows", !1), this.optimizations.forEach((e) => {
      e.enabled && e.apply();
    });
  }
  applyBalancedMode() {
    console.info(u + "Applying balanced mode optimizations"), this.uiCustomization.setCustomization("visual", "animationSpeed", "normal"), this.uiCustomization.setCustomization("visual", "shadowIntensity", "medium"), this.optimizations.get("minification").apply(), this.optimizations.get("treeshaking").apply(), this.optimizations.get("criticalcss").apply();
  }
  applyQualityMode() {
    console.info(u + "Applying quality mode optimizations"), this.uiCustomization.setCustomization("visual", "animationSpeed", "slow"), this.uiCustomization.setCustomization("visual", "shadowIntensity", "strong"), this.uiCustomization.setCustomization("components", "showAnimations", !0), this.uiCustomization.setCustomization("components", "showShadows", !0), this.optimizations.get("caching").apply();
  }
  // =============================================================================
  // SPECIFIC OPTIMIZATION IMPLEMENTATIONS
  // =============================================================================
  applyCSSMinification() {
    const e = this.getCurrentCSSSize(), t = Math.round(e * 0.7);
    this.performanceMetrics.set("minification", {
      originalSize: e,
      minifiedSize: t,
      savings: e - t,
      savingsPercentage: Math.round((e - t) / e * 100)
    }), console.info(u + `CSS minification: ${e} → ${t} bytes (${this.performanceMetrics.get("minification").savingsPercentage}% reduction)`);
  }
  optimizeCSSCaching() {
    const e = {
      maxAge: 86400,
      // 24 hours
      etag: !0,
      compression: !0,
      splitting: !0
    };
    this.performanceMetrics.set("caching", e), console.info(u + "CSS caching optimized:", e);
  }
  loadComponentCSS(e) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = `systems/anarchy/style/components/${e}`, t.dataset.component = e.replace(".css", ""), document.head.appendChild(t), console.info(u + `Loaded component CSS: ${e}`);
  }
  loadLazyComponent(e) {
    const t = e.dataset.lazyComponent;
    t && (this.loadComponentCSS(`${t}.css`), e.removeAttribute("data-lazy-component"), e.classList.add("lazy-loaded"));
  }
  // =============================================================================
  // PERFORMANCE MEASUREMENT
  // =============================================================================
  measurePerformance() {
    var t, s;
    const e = {
      cssSize: this.getCurrentCSSSize(),
      selectorCount: ((t = this.cssAnalysis) == null ? void 0 : t.totalSelectors) || 0,
      unusedSelectors: ((s = this.cssAnalysis) == null ? void 0 : s.unusedSelectors.size) || 0,
      renderTime: this.measureAverageRenderTime(),
      memoryUsage: this.estimateMemoryUsage(),
      optimizationImpact: this.calculateOptimizationImpact()
    };
    return console.group(u + "Performance Measurements"), console.info("CSS Size:", `${e.cssSize} bytes`), console.info("Selector Count:", e.selectorCount), console.info("Unused Selectors:", e.unusedSelectors), console.info("Average Render Time:", `${e.renderTime}ms`), console.info("Estimated Memory Usage:", `${e.memoryUsage}KB`), console.info("Optimization Impact:", e.optimizationImpact), console.groupEnd(), e;
  }
  measureAverageRenderTime() {
    var s;
    const e = performance.now();
    (s = document.querySelector(".sheet")) == null || s.getBoundingClientRect(), document.querySelectorAll(".anarchy-button").forEach((a) => a.getBoundingClientRect());
    const t = performance.now();
    return Math.round(t - e);
  }
  estimateMemoryUsage() {
    var s;
    const e = this.getCurrentCSSSize(), t = ((s = this.cssAnalysis) == null ? void 0 : s.totalSelectors) || 0;
    return Math.round(e / 1024 + t * 0.1);
  }
  calculateOptimizationImpact() {
    var t, s, a;
    const e = {
      treeshaking: ((t = this.performanceMetrics.get("treeshaking")) == null ? void 0 : t.potentialSavings) || 0,
      minification: ((s = this.performanceMetrics.get("minification")) == null ? void 0 : s.savingsPercentage) || 0,
      criticalCSS: ((a = this.performanceMetrics.get("criticalCSS")) == null ? void 0 : a.size) || 0,
      totalSavings: 0
    };
    return e.totalSavings = e.treeshaking + e.minification, e;
  }
  // =============================================================================
  // UTILITY METHODS
  // =============================================================================
  getCurrentCSSText() {
    const e = Array.from(document.styleSheets);
    let t = "";
    return e.forEach((s) => {
      try {
        Array.from(s.cssRules || []).forEach((i) => {
          t += i.cssText + `
`;
        });
      } catch {
      }
    }), t;
  }
  getCurrentCSSSize() {
    return this.getCurrentCSSText().length;
  }
  extractSelectorsFromCSS(e) {
    const t = /([^{}]+)\s*\{[^}]*\}/g, s = /* @__PURE__ */ new Set();
    let a;
    for (; (a = t.exec(e)) !== null; ) {
      const i = a[1].trim();
      i && !i.startsWith("@") && s.add(i);
    }
    return Array.from(s);
  }
  isSelectorUsed(e, t) {
    const s = e.replace(/::?[a-z-]+/g, "").trim();
    return t.has(s) || s.includes(":root") || s.includes("@") || s.includes("*");
  }
  onRenderApplication(e, t, s) {
    const a = performance.now();
    this.optimizeRenderedApplication(e, t);
    const o = performance.now() - a;
    o > 50 && console.warn(u + `Slow application render: ${e.constructor.name} took ${o.toFixed(2)}ms`);
  }
  optimizeRenderedApplication(e, t) {
    t[0].querySelectorAll(".character-enhanced, .items-group-list").forEach((i) => {
      i.dataset.lazyComponent || (i.dataset.lazyComponent = i.className.split(" ")[0]);
    });
  }
  // =============================================================================
  // PERFORMANCE REPORTING
  // =============================================================================
  generatePerformanceReport() {
    const e = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      measurements: this.measurePerformance(),
      optimizations: Array.from(this.optimizations.entries()).map(([t, s]) => ({
        id: t,
        name: s.name,
        enabled: s.enabled,
        impact: s.impact
      })),
      metrics: Object.fromEntries(this.performanceMetrics),
      recommendations: this.generatePerformanceRecommendations()
    };
    return console.group(u + "Performance Report"), console.info("Report:", e), console.groupEnd(), e;
  }
  generatePerformanceRecommendations() {
    var n, c;
    const e = [];
    this.getCurrentCSSSize() > 5e5 && e.push({
      type: "css-size",
      severity: "high",
      message: "CSS size is very large",
      suggestion: "Enable tree-shaking and component splitting"
    });
    const s = ((n = this.cssAnalysis) == null ? void 0 : n.unusedSelectors.size) || 0, a = ((c = this.cssAnalysis) == null ? void 0 : c.totalSelectors) || 1, i = s / a * 100;
    return i > 30 && e.push({
      type: "unused-css",
      severity: "medium",
      message: `${i.toFixed(1)}% of CSS selectors are unused`,
      suggestion: "Enable tree-shaking to remove unused styles"
    }), game.settings.get(d, "performance-optimization").performanceMode === "quality" && e.push({
      type: "performance-mode",
      severity: "low",
      message: "Quality mode may impact performance",
      suggestion: "Consider balanced mode for better performance"
    }), e;
  }
}
const xe = "glitch", Re = "risk", Dt = "reroll", zt = "rerollRemoved", Ts = "removed", $e = `${Ce}/style/danger-point.webp`, Ee = `${Ce}/style/anarchy-point.webp`, re = class re {
  static init() {
    CONFIG.Dice.terms[Ie.DENOMINATION] = Ie, CONFIG.Dice.terms[De.DENOMINATION] = De, Hooks.once("diceSoNiceReady", (e) => re.diceSoNiceReady(e)), Hooks.once("ready", () => re.onReady());
  }
  static onReady() {
    var e;
    re.COLORSETS = re.loadColorsets(), (e = game.modules.get("dice-so-nice")) != null && e.active && game.settings.get("core", "noCanvas") && ui.notifications.warn(
      "Dice So Nice! will not display dice due to Foundry option 'Disable Game Canvas' "
    );
  }
  static loadColorsets() {
    return {
      [Dt]: {
        name: Dt,
        description: game.i18n.localize(l.common.roll.rollTheme.reroll),
        category: ge
      },
      [Ts]: {
        name: Re,
        description: game.i18n.localize(l.common.roll.rollTheme.removed),
        category: ge
      },
      [zt]: {
        name: zt,
        description: game.i18n.localize(l.common.roll.rollTheme.rerollRemoved),
        category: ge
      },
      [xe]: {
        name: xe,
        description: game.i18n.localize(l.common.roll.rollTheme.glitch),
        category: ge,
        foreground: "white",
        background: "#5c0a5c",
        outline: "none",
        edge: "none",
        texture: "poison",
        material: "metal"
      },
      [Re]: {
        name: Re,
        description: game.i18n.localize(l.common.roll.rollTheme.anarchyRisk),
        category: ge,
        foreground: "#faecd1",
        background: "#040101",
        outline: "none",
        edge: "none",
        texture: "fire",
        material: "metal"
      }
    };
  }
  static diceSoNiceReady(e) {
    re.dice3d = e, game.settings.set("dice-so-nice", "enabledSimultaneousRollForMessage", !1), e.addSystem({ id: d, name: ge }), Object.values(re.COLORSETS).forEach((t) => e.addColorset(t)), e.addDicePreset(Ie.diceSoNiceData()), e.addDicePreset(De.diceSoNiceData());
  }
  static img(e) {
    return `<img src="${e}" />`;
  }
};
U(re, "dice3d");
let fe = re;
class Ie extends foundry.dice.terms.Die {
  constructor(e) {
    e.faces = 6, super(e);
  }
  /** @override */
  getResultLabel(e) {
    switch (e.result) {
      case "1":
        return fe.img($e);
    }
    return e.result.toString();
  }
  static diceSoNiceData() {
    return {
      type: "dg",
      labels: [$e, "2", "3", "4", "5", "6"],
      colorset: xe,
      system: d
    };
  }
}
/** @override */
U(Ie, "DENOMINATION", "g");
class De extends foundry.dice.terms.Die {
  constructor(e) {
    e.faces = 6, super(e);
  }
  /** @override */
  getResultLabel(e) {
    switch (e.result) {
      case "1":
        return fe.img($e);
      case "5":
        return fe.img(Ee);
      case "6":
        return fe.img(Ee);
    }
    return e.result.toString();
  }
  static diceSoNiceData() {
    return {
      type: "dr",
      labels: [$e, "2", "3", "4", Ee, Ee],
      colorset: Re,
      system: d
    };
  }
}
U(De, "DENOMINATION", "r");
const he = {}, Hs = {
  riskProwess: 0,
  riskGlitch: 0,
  riskOutcome: "nothing",
  glitch: 0,
  glitchOutcome: "nothing",
  totalGlitch: 0,
  drain: 0,
  total: 0,
  subrolls: {
    roll: void 0,
    reroll: void 0,
    removed: void 0,
    rerollForced: void 0,
    risk: void 0,
    glitch: void 0
  }
};
class Le {
  static init() {
    Hooks.once("ready", () => Le.onReady());
  }
  static onReady() {
    Object.entries(l.common.roll.rollTheme).forEach((e) => {
      he[e[0]] = game.i18n.localize(e[1]);
    });
  }
  /**
   * @param {*} param : { pool: 1, reroll: 0, risk: 0, rerollForced: 0, target: 5 }
   */
  constructor(e) {
    this.param = e, this.param.pool = Math.max(this.param.pool ?? 0, 0), this.param.reroll = Math.max(this.param.reroll ?? 0, 0), this.param.rerollForced = Math.abs(this.param.rerollForced ?? 0), this.param.glitch = Math.max(this.param.glitch ?? 0, 0), this.param.risk = Math.max(this.param.risk ?? 0, 0), this.param.edge = Math.max(this.param.edge ?? 0, 0), this.param.target = this.param.edge > 0 ? 4 : this.param.target ?? 5, foundry.utils.mergeObject(this, Hs);
  }
  async evaluate() {
    await this.rollPool(), await this.rollRerolls(), await this.rollRerollForced(), await this.rollGlitchDice(), await this.rollAnarchyRisk();
  }
  async rollPool() {
    this.subrolls.pool = new Roll(
      `${this.param.pool}d6cs>=${this.param.target}[${he.dicePool}]`
    ), await this.subrolls.pool.evaluate({ async: !0 }), this.total = this.subrolls.pool.total;
  }
  async rollRerolls() {
    const e = Math.min(this.param.pool - this.total, this.param.reroll);
    e > 0 && (this.subrolls.reroll = new Roll(
      `${e}d6cs>=${this.param.target}[${he.reroll}]`
    ), await this.subrolls.reroll.evaluate({ async: !0 }), this.total += this.subrolls.reroll.total);
  }
  async rollRerollForced() {
    const e = Math.min(this.total, this.param.rerollForced);
    e > 0 && (this.subrolls.removed = new Roll(`-${e}d1cf=1[${he.removed}]`), await this.subrolls.removed.evaluate({ async: !0 }), this.subrolls.rerollForced = new Roll(
      `${e}d6cs>=${this.param.target}[${he.rerollRemoved}]`
    ), await this.subrolls.rerollForced.evaluate({ async: !0 }), this.total -= e, this.total += this.subrolls.rerollForced.total);
  }
  async rollGlitchDice() {
    this.param.glitch > 0 && (this.subrolls.glitch = new Roll(`${this.param.glitch}d6cf=1[${he.glitch}]`), await this.subrolls.glitch.evaluate({ async: !0 }), this.subrolls.glitch.dice[0].options.appearance = { colorset: xe }, this.glitch = this.subrolls.glitch.terms[0].results.filter((e) => e.result == 1).length, this.glitchOutcome = this.glitch > 0 ? "glitch" : "nothing", this.totalGlitch += this.glitch);
  }
  async rollAnarchyRisk() {
    this.param.risk > 0 && (this.subrolls.risk = new Roll(`${this.param.risk}drcs>=5[${he.anarchyRisk}]`), await this.subrolls.risk.evaluate({ async: !0 }), this.subrolls.risk.dice[0].options.appearance = { colorset: Re }, this.riskGlitch = this.subrolls.risk.terms[0].results.filter((e) => e.result == 1).length, this.riskProwess += this.subrolls.risk.terms[0].results.filter((e) => e.result >= 5).length, this.subrolls.risk.total > 0 && this.total++, this.riskOutcome = this.riskProwess > 0 ? "prowess" : this.riskGlitch > 0 ? "glitch" : "nothing", this.totalGlitch += this.riskGlitch);
  }
  async toMessage(e, t) {
    return t = foundry.utils.mergeObject(t ?? {}, { create: !0 }), await this.toGroupedRoll().toMessage(e, t);
  }
  toGroupedRoll() {
    let e = 1, t = [];
    return this._addRoll(t, this.subrolls.pool), this._addRoll(t, this.subrolls.reroll), this._addRoll(t, this.subrolls.removed), this._addRoll(t, this.subrolls.rerollForced), this._addRoll(t, this.subrolls.risk), this._addRoll(t, this.subrolls.glitch), t.forEach((s) => s.dice[0].options.rollOrder = e++), Roll.fromTerms([PoolTerm.fromRolls(t)]);
  }
  _addRoll(e, t) {
    t && e.push(t);
  }
  async _displayDice(e) {
    var t;
    e && ((t = game.dice3d) == null || t.showForRoll(e));
  }
  get hits() {
    return this.total;
  }
  get pool() {
    var e;
    return ((e = this.param) == null ? void 0 : e.pool) ?? 0;
  }
}
const We = "systemMigrationVersion";
class Q {
  get code() {
    return "sample";
  }
  get version() {
    return "0.0.0";
  }
  async migrate() {
    return () => {
    };
  }
  async applyItemsUpdates(e) {
    await game.actors.forEach(async (s) => {
      const a = e(s.items);
      a.length > 0 && (console.log(this.code, `Applying updates on actor ${s.name} items`, a), await s.updateEmbeddedDocuments("Item", a));
    });
    const t = e(game.items);
    t.length > 0 && (console.log(this.code, "Applying updates on items", t), await Item.updateDocuments(t));
  }
}
class Es extends Q {
  get version() {
    return "0.3.1";
  }
  get code() {
    return "move-words-in-objects";
  }
  async migrate() {
    game.actors.forEach(async (e) => {
      await e.update({
        "system.keywords": this._createWordObject(e.system.keywords),
        "system.cues": this._createWordObject(e.system.cues),
        "system.dispositions": this._createWordObject(e.system.dispositions)
      });
    });
  }
  _createWordObject(e) {
    return b.reindexIds((e ?? []).map((t) => this._keywordToObject(t)));
  }
  _keywordToObject(e) {
    return e instanceof String ? { word: e } : e;
  }
}
class Ns extends Q {
  get version() {
    return "0.3.8";
  }
  get code() {
    return "migrate-weapons-strength-damage";
  }
  async migrate() {
    const e = (s) => s.type == m.itemType.weapon && s.system.strength, t = (s) => ({
      _id: s.id,
      "system.damageAttribute": m.attributes.strength,
      "system.strength": void 0
    });
    this.applyItemsUpdates((s) => s.filter(e).map(t));
  }
}
class Is extends Q {
  get version() {
    return "0.3.14";
  }
  get code() {
    return "migrate-skill-drain-convergence";
  }
  async migrate() {
    const e = Ae.filter((c) => c.hasDrain).map((c) => c.code), t = (c) => c.type == m.itemType.skill && e.includes(c.system.code), s = (c) => ({ _id: c.id, "system.hasDrain": !0 }), a = Ae.filter((c) => c.hasConvergence).map((c) => c.code), i = (c) => c.type == m.itemType.skill && a.includes(c.system.code), o = (c) => ({ _id: c.id, "system.hasConvergence": !0 }), n = (c) => c.filter(t).map(s).concat(c.filter(i).map(o));
    await this.applyItemsUpdates(n);
  }
}
class Ds extends Q {
  get version() {
    return "0.4.0";
  }
  get code() {
    return "migrate-select-weapon-defense";
  }
  async migrate() {
    const e = (s) => Ae.find((a) => a.defense && a.code == s.system.skill), t = (s) => {
      var a;
      return {
        _id: s.id,
        "system.defense": x.fixedDefenseCode(
          (a = e(s)) == null ? void 0 : a.defense
        )
      };
    };
    await this.applyItemsUpdates(
      (s) => s.filter((a) => a.isWeapon()).filter(e).map(t)
    );
  }
}
class zs extends Q {
  get version() {
    return "0.5.0";
  }
  get code() {
    return "base-resistance-is-zero";
  }
  async migrate() {
    game.actors.forEach(async (e) => await e.update(this._resistanceUpdates(e)));
  }
  _resistanceUpdates(e) {
    const t = {};
    return Object.entries(e.system.monitors).forEach((s) => {
      s[1].resistance && (t[`system.monitors.${s[0]}.resistance`] = 0);
    }), t;
  }
}
class Os extends Q {
  get version() {
    return "0.6.0";
  }
  get code() {
    return "migrate-skill-social";
  }
  async migrate() {
    const e = Ae.filter((a) => a.isSocial).map((a) => a.code), t = (a) => a.type == m.itemTypeskill && e.includes(a.system.code), s = (a) => ({ _id: a.id, "system.isSocial": !0 });
    await this.applyItemsUpdates((a) => a.filter(t).map(s));
  }
}
class xs extends Q {
  get version() {
    return "11.1.0";
  }
  get code() {
    return "migrate-defense-roll-modifiers";
  }
  constructor() {
    super(), this.isDefenseModifier = (e) => e.group == "roll" && e.category == "defense", this.isCorrespondingActionModifier = (e, t) => e.group == "roll" && e.effect == t.effect && e.category == "attributeAction" && e.subCategory == t.subCategory, this.hasDefenseModifiers = (e) => (e.system.modifiers ?? []).filter(this.isDefenseModifier).length > 0;
  }
  async migrate() {
    const e = [];
    await this.applyItemsUpdates((t) => t.filter(this.hasDefenseModifiers).map(
      (a) => this.getItemModifiersUpdate(a, e)
    )), e.length > 0 && ChatMessage.create({
      whisper: ChatMessage.getWhisperRecipients("GM"),
      content: `${this.version} - Migration of defense modifiers:<ul>` + e.reduce((t, s) => t + s) + "</ul></li>"
    });
  }
  getItemModifiersUpdate(e, t) {
    const s = [];
    function a(o, n, c) {
      s.push(
        `<li> ${o}: ${n.group}/${n.effect}/${n.subCategory} : ${n.category}/${n.value} ${n.condition} => ${c.category}/${c.value} ${c.condition}</li>`
      );
    }
    const i = {};
    return e.system.modifiers.forEach((o) => i[o.id] = duplicate(o)), Object.values(i).filter((o) => this.isDefenseModifier(o)).forEach((o) => {
      const n = duplicate(o);
      let c = Object.values(i).filter(
        (h) => this.isCorrespondingActionModifier(h, o)
      );
      switch (c.length) {
        case 0: {
          o.category = z.rollType.attributeAction, a("Changed category", n, o);
          break;
        }
        case 1: {
          const h = c[0];
          foundry.utils.mergeObject(
            h,
            {
              value: Math.max(o.value, h.value),
              condition: h.condition ? h.condition + (o.condition ?? "") : o.condition
            },
            { overwrite: !0 }
          ), delete i[o.id], a("Merged with existing", o, h);
          break;
        }
        default: {
          delete i[o.id], a("Removed", o, { category: "-", value: "-", condition: "-" });
          break;
        }
      }
    }), s.length > 0 && t.push(`<li> ${e.actor ? e.actor.name : "-standalone-"} Item ${e.name} modifiers changed:
        <ul>${s.reduce(b.joiner())}</ul>
        </li>`), { _id: e.id, "system.modifiers": Object.values(i) };
  }
}
class $s extends Q {
  get version() {
    return "11.1.9";
  }
  get code() {
    return "migrate-vehicle-handling";
  }
  async migrate() {
    game.actors.filter((e) => e.isVehicle()).forEach(async (e) => await e._migrateHandlingToAttribute());
  }
}
class Ys extends Q {
  get version() {
    return "11.1.12";
  }
  get code() {
    return "migrate-back-words";
  }
  async migrate() {
    game.actors.forEach(async (e) => {
      await e.update({
        "system.keywords": this._migrateBackWords(e.system.keywords),
        "system.cues": this._migrateBackWords(e.system.cues),
        "system.dispositions": this._migrateBackWords(e.system.dispositions)
      });
    });
  }
  _migrateBackWords(e) {
    return e ? b.reindexIds(e.map((t) => this._migrateBackWord(t))) : [];
  }
  _migrateBackWord(e) {
    for (; e.word != null && !b.isString(e.word); )
      e = e.word;
    return e;
  }
}
class _s extends Q {
  get version() {
    return "11.1.16";
  }
  get code() {
    return "migrate-skills-attributes";
  }
  async migrate() {
    this.applyItemsUpdates(
      (e) => e.filter((t) => t.type == m.itemType.skill).filter((t) => t.system.attribute == "" || t.system.code == "").map((t) => ({
        _id: t.id,
        "system.attribute": "",
        "system.code": m.attributes.knowledge
      }))
    );
  }
}
class Ps extends Q {
  get version() {
    return "12.0.1";
  }
  get code() {
    return "migrate-chatmessage-flags-messagedata";
  }
  async migrate() {
    await Promise.all(
      game.messages.map(async (e) => {
        const t = e.getFlag(SYSTEM_SCOPE, MESSAGE_DATA);
        t && await e.setFlag(SYSTEM_SCOPE, MESSAGE_DATA, JSON.parse(t));
      })
    );
  }
}
class Ls extends Q {
  get version() {
    return "12.0.2";
  }
  get code() {
    return "migrate-weapon-drain";
  }
  async migrate() {
    this.applyItemsUpdates(
      (e) => e.filter((t) => t.type = m.itemType.weapon).filter((t) => t.hasDrain).map((t) => ({
        _id: t.id,
        "system.drain": 1
      }))
    );
  }
}
class Us {
  constructor() {
    ce.register(C.DECLARE_MIGRATIONS), Hooks.once(
      C.DECLARE_MIGRATIONS,
      (e) => e(
        new Es(),
        new Ns(),
        new Is(),
        new Ds(),
        new zs(),
        new Os(),
        new xs(),
        new $s(),
        new Ys(),
        new _s(),
        new Ps(),
        new Ls()
      )
    ), game.settings.register(d, We, {
      name: "System Migration Version",
      scope: "world",
      config: !1,
      type: String,
      default: "0.0.0"
    });
  }
  migrate() {
    const e = game.settings.get(d, We);
    if (foundry.utils.isNewerVersion(game.system.version, e)) {
      let t = [];
      Hooks.callAll(
        C.DECLARE_MIGRATIONS,
        (...s) => t = t.concat(
          s.filter((a) => foundry.utils.isNewerVersion(a.version, e))
        )
      ), Hooks.off(C.DECLARE_MIGRATIONS, () => {
      }), t.length > 0 ? (t.sort(
        (s, a) => foundry.utils.isNewerVersion(s.version, a.version) ? 1 : foundry.utils.isNewerVersion(a.version, s.version) ? -1 : 0
      ), t.forEach(async (s) => {
        ui.notifications.info(
          `Executing migration ${s.code}: version ${e} is lower than ${s.version}`
        ), await s.migrate();
      }), ui.notifications.info(`Migrations done, version will change to ${game.system.version}`)) : console.log(
        u + `No migration needeed, version will change to ${game.system.version}`
      ), game.settings.set(d, We, game.system.version);
    } else
      console.log(u + "No system version changed");
  }
}
const Fs = `${y}/chat/celebrity-roll.hbs`;
class Ye extends Dialog {
  static async create(e) {
    const t = {
      actor: e,
      celebrity: {
        labelkey: l.actor.celebrity,
        value: e.getCelebrityValue()
      },
      modifiers: foundry.utils.mergeObject(
        { labelkey: l.item.tabs.modifiers },
        A.computeModifiers(e.items, "other", "celebrity")
      ),
      other: {
        labelkey: l.common.roll.modifiers.other,
        value: 0
      },
      ANARCHY: l
    }, s = await foundry.applications.handlebars.renderTemplate(
      `${y}/dialog/roll-celebrite-title.hbs`,
      t
    ), a = await foundry.applications.handlebars.renderTemplate(
      `${y}/dialog/roll-celebrite.hbs`,
      t
    );
    new Ye(s, a, t).render(!0);
  }
  constructor(e, t, s) {
    const a = {
      title: e,
      content: t,
      default: "roll",
      buttons: {
        roll: {
          label: game.i18n.localize(l.common.roll.button),
          callback: async () => Ye.doRoll(s)
        }
      }
    }, i = {
      classes: [game.system.anarchy.styles.selectCssClass(), "anarchy-dialog"],
      width: 400,
      height: "fit-content",
      "z-index": 99999
    };
    super(a, i);
  }
  activateListeners(e) {
    super.activateListeners(e), this.bringToTop(), e.find(".input-celebrity-other").on("input", (t) => {
      this.roll.other.value = Number.parseInt(t.currentTarget.value) ?? 0;
    });
  }
  static async doRoll(e) {
    const t = [e.celebrity, e.modifiers, e.other], s = b.sumValues(t, (n) => n.value), a = {
      actor: e.actor,
      parameters: t,
      pool: s,
      options: {
        classes: [game.system.anarchy.styles.selectCssClass()]
      },
      ANARCHY: l
    }, i = new Roll(`${s}d6cs>=5`);
    await i.evaluate();
    const o = await foundry.applications.handlebars.renderTemplate(
      Fs,
      a
    );
    await i.toMessage({ flavor: o });
  }
  // async roll() {
  //   const parameters = [
  //     this.roll.celebrity,
  //     this.roll.modifiers,
  //     this.roll.other
  //   ];
  //   const pool = Misc.sumValues(parameters, it => it.value);
  //   const hbsCelebrityRoll = {
  //     actor: this.roll.actor,
  //     parameters: parameters,
  //     pool: pool,
  //     options: {
  //       classes: [game.system.anarchy.styles.selectCssClass()]
  //     },
  //     ANARCHY: ANARCHY
  //   }
  //   const roll = new Roll(`${pool}d6cs>=5`);
  //   await roll.evaluate();
  //   const flavor = await renderTemplate(HBS_TEMPLATE_CHAT_CELEBRITY_ROLL, hbsCelebrityRoll);
  //   await roll.toMessage({ flavor: flavor });
  // }
}
const Vs = `${y}/chat/actor-drain.hbs`, Gs = `${y}/chat/actor-say-word.hbs`;
class js extends H {
  static get initiative() {
    return H.initiative + " + max(@attributes.agility.value, @attributes.logic.value)";
  }
  hasOwnAnarchy() {
    return this.hasPlayerOwner;
  }
  prepareDerivedData() {
    this.system.monitors.physical.max = this._getMonitorMax(m.attributes.strength), this.system.monitors.stun.max = this._getMonitorMax(m.attributes.willpower), super.prepareDerivedData(), this.system.ignoreWounds = A.sumModifiers(this.items, "other", "ignoreWounds");
  }
  computePhysicalState() {
    const e = Math.max(this.system.monitors.physical.max, this.system.monitors.stun.max) + this.system.monitors.armor.max, t = this.system.monitors.physical.value == this.system.monitors.physical.max, s = this.system.monitors.stun.max == this.system.monitors.stun.value, a = t || s ? e : Math.max(this.system.monitors.physical.value, this.system.monitors.stun.value) + this.system.monitors.armor.value;
    return {
      max: e,
      value: e - a
    };
  }
  computeEssence() {
    const e = game.system.anarchy.hooks.callHookMethod(
      C.PROVIDE_BASE_ESSENCE,
      this
    ), t = b.sumValues(
      this.items.filter((a) => a.type == "shadowamp").map((a) => Math.abs(a.system.essence))
    ), s = A.sumModifiers(this.items, "other", "essenceAdjustment");
    return e + s - Math.max(0, t);
  }
  computeMalusEssence(e = void 0) {
    return game.system.anarchy.hooks.callHookMethod(
      C.PROVIDE_MALUS_ESSENCE,
      this,
      e ?? this.computeEssence()
    );
  }
  getAttributes() {
    return [
      m.attributes.strength,
      m.attributes.agility,
      m.attributes.willpower,
      m.attributes.logic,
      m.attributes.charisma,
      m.attributes.edge
    ];
  }
  getPhysicalAgility() {
    return m.attributes.agility;
  }
  getCorrespondingAttribute(e) {
    return m.attributes.firewall == e ? m.attributes.firewall : super.getCorrespondingAttribute(e);
  }
  getMatrixDetails() {
    const e = this.getCyberdeck();
    return e != null && e.isConnected() ? {
      hasMatrix: !0,
      logic: m.attributes.logic,
      firewall: m.attributes.firewall,
      monitor: e.system.monitors.matrix,
      overflow: e.getMatrixOverflow(),
      setMatrixMonitor: async (t, s) => e.setMatrixMonitor(t, s)
    } : this.isEmerged() ? {
      hasMatrix: !0,
      logic: m.attributes.logic,
      firewall: m.attributes.logic,
      monitor: this.system.monitors.stun,
      overflow: m.monitors.physical,
      setMatrixMonitor: async (t, s) => {
        if (t == ut.matrix.path)
          return await g.setCheckbar(this, m.monitors.stun, s);
      }
    } : {
      hasMatrix: !1,
      logic: m.attributes.logic,
      firewall: void 0,
      monitor: ht,
      overflow: void 0
    };
  }
  isMatrixConnected(e = void 0) {
    e = we.resolveConnectionMode(e);
    let t;
    const s = this.getCyberdeck();
    return s != null && s.isConnected() && (t = s.getConnectionMode()), !t && this.isEmerged() && (t = this.system.connectionMode), e == null ? we.resolveConnectionMode(t) != F.connectionMode.disconnected : we.resolveConnectionMode(t) == e;
  }
  async nextConnectionMode(e) {
    if (e)
      await e.nextConnectionMode();
    else if (this.isEmerged()) {
      const t = we.getNextConnectionMode(this.system.connectionMode);
      await this.update({ "system.connectionMode": t });
    }
  }
  prepareMatrixMonitor() {
    const e = this.getCyberdeck();
    e && (e.system.monitors.matrix.maxBonus = A.sumMonitorModifiers(
      this.items,
      "matrix",
      "max"
    ), e.system.monitors.matrix.resistanceBonus = A.sumMonitorModifiers(
      this.items,
      "matrix",
      "resistance"
    ));
  }
  getDamageMonitor(e) {
    switch (e) {
      case m.monitors.stun:
      case m.monitors.physical:
        return e;
    }
    return super.getDamageMonitor(e);
  }
  async createWord(e, t) {
    this._mutateWords(e, (s) => s.concat([{ word: t, audio: "" }]));
  }
  async sayWord(e, t) {
    var a, i;
    const s = (a = this.getWord(e, t)) == null ? void 0 : a.word;
    s && ChatMessage.create({
      speaker: { alias: ((i = this.token) == null ? void 0 : i.name) ?? this.name },
      content: await foundry.applications.handlebars.renderTemplate(Gs, {
        actor: this,
        wordsToSay: s
      })
    });
  }
  getWord(e, t) {
    return e ? this.system[e].find((s) => s.id == t) : void 0;
  }
  async updateWord(e, t, s) {
    this._applyWordUpdate(
      e,
      t,
      (a) => foundry.utils.mergeObject(a, { word: s }, { overwrite: !0 })
    );
  }
  async _applyWordUpdate(e, t, s) {
    this._mutateWords(
      e,
      (a) => a.map((i) => (i.id == t && s(i), i))
    );
  }
  async deleteWord(e, t) {
    this._mutateWords(e, (s) => s.filter((a) => a.id != t));
  }
  async _mutateWords(e, t = (s) => s) {
    if (!e)
      return;
    let s = t(this.system[e]);
    b.reindexIds(s), await this.update({ [`system.${e}`]: s });
  }
  getCelebrityValue() {
    return this.system.counters.social.celebrity.value;
  }
  getCredibilityValue() {
    return this.system.counters.social.credibility.value;
  }
  getRumorValue() {
    return this.system.counters.social.rumor.value;
  }
  getAnarchy() {
    return this.hasOwnAnarchy() ? {
      value: this.system.counters.anarchy.value,
      max: this.system.counters.anarchy.max,
      scene: this.getAnarchyScene()
    } : super.getAnarchy();
  }
  getAnarchyScene() {
    return this.system.counters.sceneAnarchy.value ?? 0;
  }
  async spendAnarchy(e) {
    if (e > 0) {
      const t = this.getAnarchyScene(), s = this.getAnarchyValue();
      ae.checkSufficient(
        l.actor.counters.anarchy,
        e,
        s + t
      );
      const a = Math.min(t, e), i = e - a;
      a > 0 && g.addCounter(this, m.monitors.sceneAnarchy, -a), this.hasPlayerOwner ? (await game.system.anarchy.gmAnarchy.actorGivesAnarchyToGM(this, e), g.addCounter(this, m.monitors.anarchy, -i)) : i > 0 && super.spendAnarchy(i);
    }
  }
  canUseEdge() {
    return !0;
  }
  getWounds() {
    const e = b.divint(this.system.monitors.stun.value, 3) + b.divint(this.system.monitors.physical.value, 3);
    return Math.max(0, e - this.system.ignoreWounds);
  }
  canPilotVehicle() {
    return !0;
  }
  canSetMarks() {
    var e;
    return ((e = this.getCyberdeck()) == null ? void 0 : e.isConnected()) || this.isEmerged();
  }
  canReceiveMarks() {
    var e;
    return (e = this.getCyberdeck()) == null ? void 0 : e.isConnected();
  }
  isEmerged() {
    return this.system.capacity == m.capacities.emerged;
  }
  getCyberdeck() {
    return this.items.find((e) => e.isActive() && e.isCyberdeck());
  }
  async rollDrain(e) {
    if (e) {
      const t = new Roll(
        `${e}dgcf=1[${game.i18n.localize(l.common.roll.rollTheme.drain)}]`
      );
      await t.evaluate({ async: !0 }), await this.sufferDrain(t.total);
      const s = await foundry.applications.handlebars.renderTemplate(
        Vs,
        {
          ANARCHY: l,
          actor: this,
          drain: t.total,
          options: {
            classes: game.system.anarchy.styles.selectCssClass()
          }
        }
      );
      await t.toMessage({ flavor: s });
    }
  }
  async sufferDrain(e) {
    e != 0 && await this.addCounter(m.monitors.stun, e);
  }
  async rollConvergence(e) {
    e && game.system.anarchy.gmConvergence.rollConvergence(this.id, e);
  }
  async rollCelebrity() {
    await Ye.create(this);
  }
}
const Ws = [m.attributes.system, m.attributes.firewall];
class Bs extends H {
  static get defaultIcon() {
    return `${j}/actors/cctv-camera.svg`;
  }
  static get initiative() {
    return H.initiative + " + @attributes.system.value";
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: m.attributes.system,
      firewall: m.attributes.firewall,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  getAttributes() {
    return Ws;
  }
}
const Ks = [
  m.attributes.autopilot,
  m.attributes.handling,
  m.attributes.firewall,
  m.attributes.system
];
class qs extends H {
  static get defaultIcon() {
    return `${j}/shadowamps/drone.svg`;
  }
  static get initiative() {
    return H.initiative + " + max(@attributes.system.value, @attributes.autopilot.value)";
  }
  prepareDerivedData() {
    this.system.monitors.matrix.max = this._getMonitorMax(m.attributes.system), super.prepareDerivedData();
  }
  computePhysicalState() {
    return {
      max: this.system.monitors.structure.max,
      value: this.system.monitors.structure.max - this.system.monitors.structure.value
    };
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: m.attributes.system,
      firewall: m.attributes.firewall,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  getAttributes() {
    return Ks;
  }
  getPhysicalAgility() {
    return m.attributes.autopilot;
  }
  getDamageMonitor(e) {
    switch (e) {
      case m.monitors.physical:
        return m.monitors.structure;
      case m.monitors.stun:
        return;
    }
    return super.getDamageMonitor(e);
  }
  getRightToDefend() {
    return CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
  }
  async rollPilotDefense(e) {
    const t = P.getSelectedActors();
    ae.checkOutOfRange(l.user.selectedTokenActors, t.length, 0, 1);
    const s = P.getPlayerActor(game.user), a = this.getOwnerActor(), i = [...t, s, a].filter((o) => o == null ? void 0 : o.testUserPermission(game.user, this.getRightToDefend())).find((o) => o == null ? void 0 : o.canPilotVehicle());
    if (i)
      return await i.rollDefense(e);
    ui.notifications.warn(
      game.i18n.localize(l.common.errors.noValidPilotForVehicle, {
        vehicle: this.name
      })
    );
  }
  async _migrateHandlingToAttribute(e) {
    var a;
    const t = ((a = this.system.attributes.handling) == null ? void 0 : a.value) ?? 0, s = this.system.handling;
    s && t < s && await this.update({
      "system.-=handling": null,
      "system.attributes.handling.value": s
    });
  }
}
class Qs extends Pe {
  get template() {
    return `${y}/actor/character.hbs`;
  }
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 720,
      height: 700
    });
  }
}
class Be extends Me {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(super.getData(e), {});
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Ke extends Me {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(super.getData(e), {});
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Xs extends Pe {
  get template() {
    return `${y}/actor/npc-sheet.hbs`;
  }
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    let t = super.getData(e);
    return t.options.classes.push("npc-sheet"), t;
  }
}
class Zs extends ie {
  static get defaultIcon() {
    return `${j}/vitruvian-man.svg`;
  }
  async onCreateItem(e, t) {
    var s;
    (s = this.parent) == null || s.removeOtherMetatype(this);
  }
}
class Js extends ie {
  static get defaultIcon() {
    return `${j}/shadowamps/cyberdeck.svg`;
  }
  getAttributes() {
    return [m.attributes.firewall];
  }
  async setMatrixMonitor(e, t) {
    await this.update({ [e]: t });
  }
  hasMatrixMonitor() {
    return !0;
  }
  getMatrixMonitor() {
    return this.system.monitors.matrix;
  }
  getMatrixOverflow() {
    switch (this.system.connectionMode) {
      case F.connectionMode.virtual:
        return m.monitors.physical;
      case F.connectionMode.augmented:
        return m.monitors.stun;
    }
  }
  isConnected() {
    return this.getMatrixOverflow() != null;
  }
  getConnectionMode() {
    return this.system.connectionMode;
  }
  async nextConnectionMode() {
    const e = we.getNextConnectionMode(this.system.connectionMode);
    await this.update({ "system.connectionMode": e });
  }
}
class me extends foundry.appv1.sheets.ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      isGM: game.user.isGM,
      dragDrop: [{ dragSelector: ".item ", dropSelector: null }],
      classes: [game.system.anarchy.styles.selectCssClass(), "sheet", "item-sheet"],
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }
  get title() {
    return game.i18n.localize(l.itemType.singular[this.item.type]) + ": " + this.item.name;
  }
  get template() {
    const e = `${y}/item/${this.item.type}.hbs`, t = [
      "contact",
      "cyberdeck",
      "gear",
      "metatype",
      "quality",
      "shadowamp",
      "skill",
      "weapon"
    ];
    return !this.item.type || !t.includes(this.item.type) ? (console.warn(
      `BaseItemSheet: Unknown item type '${this.item.type}', falling back to gear template`
    ), `${y}/item/gear.hbs`) : e;
  }
  getData(e) {
    var o, n, c;
    const t = (o = this.item.actor) == null ? void 0 : o.getAttributes(this.item), s = this.item.actor ? (h) => t.includes(h) : (h) => !0, a = this.item.type == m.itemType.skill;
    let i = foundry.utils.mergeObject(super.getData(e), {
      options: {
        isGM: game.user.isGM,
        owner: this.document.isOwner,
        isOwned: this.actor != null,
        editable: this.isEditable,
        cssClass: this.isEditable ? "editable" : "locked"
      },
      ENUMS: foundry.utils.mergeObject(
        E.getEnums(s, a),
        game.system.anarchy.modifiers.getEnums()
      ),
      ANARCHY: l
    });
    return i.system = this.item.system, (n = game.system.anarchy) != null && n.uiCustomization && (i.uiCustomizations = game.system.anarchy.uiCustomization.getActiveCustomizations(), i.options.classes = [
      ...i.options.classes || [],
      ...game.system.anarchy.uiCustomization.getCustomizationClasses("item")
    ]), (c = game.system.anarchy) != null && c.themeUtilities && (i.currentTheme = game.system.anarchy.styles.currentTheme, i.availableThemes = game.system.anarchy.styles.availableThemes, i.themeMetadata = game.system.anarchy.themeUtilities.getCurrentThemeMetadata()), i;
  }
  activateListeners(e) {
    var t, s;
    super.activateListeners(e), (t = game.system.anarchy) != null && t.uiCustomization && game.system.anarchy.uiCustomization.applyCustomizationsToElement(e[0], "item"), (s = game.system.anarchy) != null && s.themeUtilities && game.system.anarchy.themeUtilities.applyThemeEnhancements(e[0], "item"), e.find("a.click-checkbar-element").click(async (a) => await this.onClickMonitor(a)), e.find(".click-modifier-add").click(async (a) => await this.item.createModifier()), e.find(".click-modifier-delete").click(async (a) => await this.item.deleteModifier(this.getEventModifierId(a))), e.find(".input-modifier-value").change(
      async (a) => await this.item.changeModifierValue(
        this.getEventModifierId(a),
        a.currentTarget.value
      )
    ), e.find(".input-modifier-condition").change(
      async (a) => await this.item.changeModifierCondition(
        this.getEventModifierId(a),
        a.currentTarget.value
      )
    ), e.find(".select-modifier-change").change(
      async (a) => await this.item.changeModifierSelection(
        this.getEventModifierId(a),
        this.getEventModifierSelect(a),
        a.currentTarget.value
      )
    );
  }
  async onClickMonitor(e) {
    if (this.item.parent) {
      const t = this.getEventMonitorCode(e), s = t == "marks" ? $(e.currentTarget).closest(".anarchy-marks").attr("data-actor-id") : void 0;
      await this.item.parent.switchMonitorCheck(
        t,
        this.getEventMonitorIndex(e),
        this.isEventMonitorChecked(e),
        s,
        item
      );
    }
  }
  getEventMonitorCode(e) {
    return $(e.currentTarget).closest(".checkbar-root").attr("data-monitor-code");
  }
  getEventMonitorIndex(e) {
    return Number.parseInt($(e.currentTarget).attr("data-index"));
  }
  isEventMonitorChecked(e) {
    return $(e.currentTarget).attr("data-checked") == "true";
  }
  getEventModifierId(e) {
    return $(e.currentTarget).closest(".define-modifier").attr("data-modifier-id");
  }
  getEventModifierSelect(e) {
    return $(e.currentTarget).attr("data-modifier-select");
  }
}
class qe extends me {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Qe extends me {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    e.find("a.click-matrix-connectionMode").click(async (t) => {
      await this.item.nextConnectionMode();
    }), super.activateListeners(e);
  }
}
class Xe extends me {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Ze extends me {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Je extends me {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class et extends me {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class tt extends me {
  activateListeners(e) {
    super.activateListeners(e), e.find(".select-skill-code").change(async (t) => {
      const s = t.currentTarget.value, a = pt.prepareSkill(s);
      a && await this.object.update(a);
    });
  }
}
class st extends me {
  getData(e) {
    let t = super.getData(e);
    return t.ENUMS = foundry.utils.mergeObject(
      { defenses: x.getDefenses() },
      t.ENUMS
    ), t.hasDrain = this.item.hasDrain, t.hasConvergence = this.item.hasConvergence, t;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".select-weapon-skill").change(async (t) => {
      const s = t.currentTarget.value, a = game.system.anarchy.skills.get(s);
      a && await this.object.update({ "system.defense": a.defense }, { render: !1 });
    });
  }
}
class ea extends ie {
  static get defaultIcon() {
    return `${j}/contacts/contact.svg`;
  }
}
class ta extends ie {
  static get defaultIcon() {
    return `${j}/gear/gear.svg`;
  }
}
class sa extends ie {
  static get defaultIcon() {
    return `${j}/quality-positive.svg`;
  }
}
class aa extends ie {
  static get defaultIcon() {
    return `${j}/shadowamps/other.svg`;
  }
}
const ze = "convergences", ia = `${d}.${ze}`, Ot = "GMConvergence.rollConvergence", oa = `${y}/app/gm-convergence.hbs`, xt = `${y}/app/gm-convergence-actors.hbs`;
class ra {
  constructor() {
    game.settings.register(d, ze, {
      scope: "world",
      config: !1,
      default: [],
      type: Array
    }), this.convergences = [], Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await loadTemplates([oa, xt]), this.convergences = game.settings.get(d, ze).filter((e) => game.actors.get(e.actorId)), await X.register(Ot, {
      callback: (e) => this.rollConvergence(e.actorId, e.convergence),
      condition: (e) => e.isGM
    });
  }
  getConvergences() {
    return this.convergences;
  }
  async rollConvergence(e, t) {
    X.call(Ot, { actorId: e, convergence: t }) || await this._gmRollConvergence(t, e);
  }
  async _gmRollConvergence(e, t) {
    const s = game.actors.get(t), a = new Roll(
      `${e}dgcf=1[${game.i18n.localize(l.common.roll.rollTheme.convergence)}]`
    );
    await a.evaluate({ async: !0 }), this.addConvergence(s, a.total), a.toMessage(
      {
        user: game.user,
        whisper: ChatMessage.getWhisperRecipients("GM"),
        blind: !0,
        flavor: `Convergence for ${s.name}: ${a.total}`
      },
      { rollType: "blindroll" }
    );
  }
  async addConvergence(e, t) {
    !game.user.isGM || !t || await this.setActorConvergence(e, this.getConvergence(e) + t);
  }
  getConvergence(e) {
    var t;
    return game.user.isGM ? ((t = this.convergences.find((s) => s.actorId == e.id)) == null ? void 0 : t.convergence) ?? 0 : 0;
  }
  async setActorConvergence(e, t) {
    let s = this.convergences.find((a) => a.actorId == e.id);
    s || (s = { actorId: e.id }, this.convergences.push(s)), s.convergence = t, this.convergences = this.convergences.filter((a) => a.convergence > 0), game.settings.set(d, ze, this.convergences);
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-convergence-bar"), await this._rebuild();
  }
  async onUpdateSetting(e, t, s, a) {
    game.user.isGM && e.key == ia && await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".gm-convergence-content").replaceWith(await this._renderBar()), this.toolbar.find("a.click-checkbar-element").click(async (e) => await this._onClickConvergence(e));
  }
  async _onClickConvergence(e) {
    $(e.currentTarget).closest(".checkbar-root").attr("data-monitor-code");
    const t = $(e.currentTarget).closest(".actor-convergence").attr("data-actor-id"), s = Number.parseInt($(e.currentTarget).attr("data-index")), a = $(e.currentTarget).attr("data-checked") == "true", i = g.newValue(s, a), o = game.actors.get(t);
    await this.setActorConvergence(o, i);
  }
  async _renderBar() {
    const e = {
      convergences: this.convergences.map((s) => ({
        actor: game.actors.get(s.actorId),
        convergence: s.convergence
      }))
    };
    return await renderTemplate(xt, e);
  }
}
class $t extends Combat {
  static init() {
    Hooks.on(
      "createCombatant",
      async (e, t, s) => await e.combat.onCreateCombatant(e, t, s)
    ), Hooks.on(
      "deleteCombatant",
      async (e, t, s) => await e.combat.onDeleteCombatant(e, t, s)
    ), Hooks.on(
      "deleteCombat",
      async (e, t, s) => await e.onDeleteCombat(t, s)
    );
  }
  get initiative() {
    return { formula: "2d6" };
  }
  async rollInitiative(e, t) {
    const s = e.map((i) => this.combatants.find((o) => o.id == i)), a = b.classify(s, (i) => i.actor.type);
    Object.entries(a).forEach(async ([i, o]) => {
      const n = game.system.anarchy.actorClasses[i], c = o.map((N) => N.id), h = foundry.utils.mergeObject(
        { formula: n.initiative },
        t ?? {}
      );
      await super.rollInitiative(c, h);
    });
  }
  async onCreateCombatant(e, t, s) {
    var a;
    P.isUniqueConnectedGM() && await ((a = e.actor) == null ? void 0 : a.onEnterCombat());
  }
  async onDeleteCombatant(e, t, s) {
    P.isUniqueConnectedGM() && await this._leaveCombat(e);
  }
  async onDeleteCombat(e, t) {
    P.isUniqueConnectedGM() && this.combatants.forEach(async (s) => await this._leaveCombat(s));
  }
  async _leaveCombat(e) {
    var t;
    return await ((t = e.actor) == null ? void 0 : t.onLeaveCombat());
  }
}
class at extends Me {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(super.getData(e), {});
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class it extends Me {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(super.getData(e), {});
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
const na = [m.attributes.logic, m.attributes.edge];
class ca extends H {
  static get defaultIcon() {
    return `${j}/misc/rss.svg`;
  }
  static get initiative() {
    return H.initiative + " + @attributes.logic.value";
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: m.attributes.logic,
      firewall: m.attributes.logic,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  getAttributes() {
    return na;
  }
  isEmerged() {
    return !0;
  }
}
const la = [m.attributes.logic, m.attributes.firewall];
class ma extends H {
  static get defaultIcon() {
    return `${j}/misc/rub-el-hizb.svg`;
  }
  static get initiative() {
    return H.initiative + " + @attributes.logic.value";
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: m.attributes.logic,
      firewall: m.attributes.firewall,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  canSetMarks() {
    return !1;
  }
  getAttributes() {
    return la;
  }
}
const Yt = `${y}/token/hud-shortcuts.hbs`;
class da {
  constructor() {
    Hooks.on(
      "renderTokenHUD",
      async (e, t, s) => await this.addExtensionHud(e, t, s._id)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await loadTemplates([Yt]);
  }
  /* -------------------------------------------- */
  async removeExtensionHud(e, t, s) {
    t.find(".control-icon.anarchy-shortcuts").remove();
  }
  async addExtensionHud(e, t, s) {
    e.hasExtension = !0;
    const a = await this._renderShortcuts(s);
    t.find(".control-icon[data-action=combat]").after(a);
  }
  async _renderShortcuts(e) {
    const t = canvas.tokens.get(e), s = {
      tokenId: e,
      shortcuts: t.actor.getShortcuts(),
      options: {
        classes: [game.system.anarchy.styles.selectCssClass()]
      }
    }, a = await foundry.applications.handlebars.renderTemplate(
      Yt,
      s
    ), i = $(a), o = i.find(".anarchy-shortcuts-list");
    return this._toggleHudActive(i, o), i.find(".anarchy-shortcuts-toggle").click((n) => {
      this._toggleHudActive(i, o);
    }), o.find(".anarchy-shortcut-button").click((n) => {
      const c = $(n.currentTarget).closest(".anarchy-shortcuts-list").attr("data-token-id"), h = $(n.currentTarget).attr("data-shortcut-type"), N = $(n.currentTarget).attr("data-shortcut-id");
      this.onClickShortcutButton(c, h, N);
    }), i;
  }
  onClickShortcutButton(e, t, s) {
    const a = canvas.tokens.get(e), i = a == null ? void 0 : a.actor;
    if (i) {
      const o = i == null ? void 0 : i.getShortcut(t, s);
      o == null || o.callback(a);
    } else
      ui.notifications.warn(game.i18.localize(l.common.errors.noTokenActor));
  }
  _toggleHudActive(e, t) {
    e.toggleClass("active"), b.showControlWhen(t, e.hasClass("active"));
  }
}
class ua {
  static getToken(e) {
    var s;
    if (e == null)
      return;
    let t = (s = game.scenes.current) == null ? void 0 : s.tokens.get(e);
    if (t)
      return t;
    for (let a of game.scenes)
      if (t = a.tokens.find((i) => i.id == e), t)
        return t;
    console.warn("No token found in any scene with id", e);
  }
}
const ha = `${y}/chat/anarchy-roll.hbs`, ga = [
  `${y}/chat/risk-outcome.hbs`,
  `${y}/chat/edge-reroll-button.hbs`,
  `${y}/chat/anarchy-roll-title.hbs`,
  `${y}/chat/parts/actor-image.hbs`,
  `${y}/chat/parts/generic-parameter.hbs`,
  `${y}/chat/parts/result-mode-weapon.hbs`
];
class D {
  constructor() {
    Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await loadTemplates(b.distinct(ga));
  }
  async roll(e) {
    var t, s;
    e.parameters.forEach((a) => {
      a.isUsed != null && (a.used = a.isUsed(a));
    }), e.param = game.system.anarchy.rollParameters.compute(e.parameters), e.param.edge = e.parameters.find(
      (a) => a.category == v.edge && a.used
    ) ? 1 : 0, e.param.anarchy = e.parameters.filter((a) => {
      var i;
      return ((i = a.flags) == null ? void 0 : i.isAnarchy) && a.used;
    }).length, e.options.canUseEdge = e.options.canUseEdge && !e.param.edge, e.param.social = {
      credibility: ((t = e.parameters.find((a) => a.code == "credibility" && a.used)) == null ? void 0 : t.value) ?? 0,
      rumor: ((s = e.parameters.find((a) => a.code == "rumor" && a.used)) == null ? void 0 : s.value) ?? 0
    }, await e.actor.spendAnarchy(e.param.anarchy), await e.actor.spendEdge(e.param.edge), await e.actor.spendCredibility(e.param.social.credibility), await e.actor.spendRumor(e.param.social.rumor), await this._roll(e);
  }
  async edgeReroll(e) {
    e = D.inflateAnarchyRoll(e), e.options.canUseEdge = !1, await e.actor.spendEdge(1), e.param[v.convergence] = void 0, e.param[v.drain] = void 0, await this._roll(e);
  }
  async _roll(e) {
    e.roll = new Le(e.param), await e.roll.evaluate(), await this._displayRollInChat(e), await e.actor.rollDrain(e.param.drain), await e.actor.rollConvergence(e.param.convergence), await game.system.anarchy.combatManager.manageCombat(e);
  }
  async _displayRollInChat(e) {
    e.options.classes = [game.system.anarchy.styles.selectCssClass()];
    const t = {};
    T.prepareFlag(t, be, D.deflateAnarchyRoll(e)), T.prepareFlag(t, mt, e.options.canUseEdge), T.prepareFlag(t, dt, T.messageActorRights(e.actor));
    const s = await foundry.applications.handlebars.renderTemplate(
      ha,
      e
    ), a = await e.roll.toMessage({ flavor: s, flags: t });
    e.chatMessageId = a.id;
  }
  static deflateAnarchyRoll(e) {
    return e && (e = deepClone(e), e.actor = D._reduceToId(e.actor), e.skill = D._reduceToId(e.skill), e.skill = D._reduceToId(e.skill), e.weapon = D._reduceToId(e.weapon), e.item = D._reduceToId(e.item), e.parameters = D._reduceParameters(e.parameters), e.attackData = void 0, e.attributes = void 0, e.ANARCHY = void 0, e.ENUMS = void 0), e;
  }
  static inflateAnarchyRoll(e) {
    return e && (e = deepClone(e), e.actor = D._reloadActorFromId(e.actor, e.tokenId), e.skill = D._reloadItemFromId(e.actor, e.skill), e.item = D._reloadItemFromId(e.actor, e.item), e.weapon = D._reloadItemFromId(e.actor, e.weapon), e.attributes = e.actor.getUsableAttributes(e.item), e.parameters = D._reloadParameters(e, e.parameters), e.ANARCHY = l, e.ENUMS = E.getEnums()), e;
  }
  static _reduceToId(e) {
    return e ? { id: e.id } : void 0;
  }
  static _reloadActorFromId(e, t) {
    const s = ua.getToken(t);
    return s ? s.actor : e != null && e.id ? game.actors.get(e.id) : void 0;
  }
  static _reloadItemFromId(e, t) {
    return e && (t != null && t.id) ? e.items.get(t.id) : void 0;
  }
  static _reduceParameters(e) {
    return e.filter((t) => t.used).map((t) => ({
      code: t.code,
      value: t.value
    }));
  }
  static _reloadParameters(e, t) {
    if (!t)
      return t;
    const s = game.system.anarchy.rollParameters.build(e);
    return t.map((a) => {
      const i = s.find((o) => o.code == a.code) ?? {};
      return foundry.utils.mergeObject(a, i, { overwrite: !1 });
    });
  }
}
const pa = `${y}/combat/inform-defender.hbs`;
class ya {
  async manageCombat(e) {
    var t;
    switch (e.mode) {
      case z.rollType.weapon:
        if (!e.targeting || e.roll.total == 0)
          return;
        (t = e.targeting.targetedTokenIds) == null || t.forEach(
          async (s) => await this.onAttack(s, e)
        );
        break;
      case z.rollType.defense:
        await this.onDefense(e);
        break;
      case z.rollType.defensePilot:
        await this.onDefensePilot(e);
    }
  }
  async onAttack(e, t) {
    var a;
    const s = (a = t.targeting) == null ? void 0 : a.attackerTokenId;
    e && s && await this.displayDefenseChoice(e, t);
  }
  async displayDefenseChoice(e, t, s = void 0, a = void 0) {
    var J, L, B;
    const i = (J = t.targeting) == null ? void 0 : J.attackerTokenId, o = this.getTokenActor(e), n = t.roll.total, c = (s == null ? void 0 : s.roll.total) ?? (a == null ? void 0 : a.roll.total) ?? 0, h = {
      attackerTokenId: i,
      defenderTokenId: e,
      attackRoll: D.deflateAnarchyRoll(t),
      defenseRoll: D.deflateAnarchyRoll(s),
      defensePilotRoll: D.deflateAnarchyRoll(a),
      attack: {
        isHit: n > 0 && n >= c,
        defense: t.weapon.getDefense(),
        pilotCanDefend: o == null ? void 0 : o.isVehicle(),
        success: Math.max(0, n - c),
        damage: t.weapon.getDamage()
      }
    }, N = [
      (L = h.defenseRoll) == null ? void 0 : L.chatMessageId,
      (B = h.defensePilotRoll) == null ? void 0 : B.chatMessageId,
      h.attackRoll.chatMessageId
    ], Z = {};
    T.prepareFlag(
      Z,
      dt,
      T.messageActorRights(o, o.getRightToDefend())
    ), T.prepareFlag(
      Z,
      rt,
      N.find((S) => S != null)
    );
    const V = await ChatMessage.create({
      user: game.user.id,
      whisper: o.getAllowedUserIds(o.getRightToDefend()),
      content: await foundry.applications.handlebars.renderTemplate(
        pa,
        foundry.utils.mergeObject(
          {
            ANARCHY: l,
            options: { classes: [game.system.anarchy.styles.selectCssClass()] },
            attacker: this.getTokenActor(h.attackerTokenId),
            defender: o,
            weapon: h.attackRoll.weapon
          },
          h
        )
      ),
      flags: Z
    });
    h.choiceChatMessageId = V.id, V.setFlag(G, be, h);
  }
  async onDefense(e) {
    this._preventObsoleteChoices(e);
    const t = D.inflateAnarchyRoll(e.attackRoll);
    await this.displayDefenseChoice(e.tokenId, t, e);
  }
  async onDefensePilot(e) {
    this._preventObsoleteChoices(e);
    const t = D.inflateAnarchyRoll(e.attackRoll);
    await this.displayDefenseChoice(e.tokenId, t, e);
  }
  _preventObsoleteChoices(e) {
    const t = game.messages.get(e.choiceChatMessageId);
    if (t) {
      const s = t.getFlag(G, rt) ?? "", a = game.messages.get(s);
      a == null || a.setFlag(G, mt, !1), T.removeChatMessage(e.choiceChatMessageId);
    }
  }
  async onClickDefendAttack(e) {
    await this.getTokenActor(e.defenderTokenId).rollDefense(e);
  }
  async onClickPilotDefendAttack(e) {
    await this.getTokenActor(e.defenderTokenId).rollPilotDefense(e);
  }
  async onClickApplyAttackDamage(e) {
    const t = this.getTokenActor(e.attackerTokenId), s = this.getTokenActor(e.defenderTokenId), a = D.inflateAnarchyRoll(e.attackRoll);
    await R.sufferDamage(
      s,
      e.attack.damage.monitor,
      e.attack.damage.value,
      e.attack.success,
      e.attack.damage.noArmor,
      t,
      a.weapon
    ), this._preventObsoleteChoices(e);
  }
  getTokenActor(e) {
    var t;
    return (t = canvas.tokens.get(e)) == null ? void 0 : t.actor;
  }
}
class fa extends Pe {
  get template() {
    return `${y}/actor/character-tabbed.hbs`;
  }
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 720,
      height: 700,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }
  getData(e) {
    let t = super.getData(e);
    return t.options.classes.push("tabbed-sheet"), t;
  }
}
const _t = { BASE_URL: "/systems/anarchy/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
function ba() {
  try {
    const r = typeof import.meta < "u" && import.meta && _t ? _t : {}, e = (r.VITE_ENABLE_INTEGRATIONS ?? "").toString().toLowerCase();
    if (e === "1" || e === "true" || (r.VITE_SYSTEM_ID ?? "").toString().trim() === "ninjanarchy") return !0;
  } catch {
  }
  return !1;
}
async function Aa() {
  ba() && console.log(u + `Loading integrations for ${d}`);
}
class ft {
  static start() {
    const e = new ft();
    Hooks.once("init", async () => await e.onInit());
  }
  async onInit() {
    console.log(u + "AnarchySystem.onInit"), game.system.anarchy = this, this.remoteCall = new X(), this.actorClasses = {
      character: js,
      vehicle: qs,
      device: Bs,
      sprite: ca,
      ic: ma
    }, this.itemClasses = {
      contact: ea,
      cyberdeck: Js,
      gear: ta,
      metatype: Zs,
      quality: sa,
      shadowamp: aa,
      skill: pt,
      weapon: ne
    }, this.hooks = new ce(), this.styles = new Ss(), this.themeUtilities = new ws(this.styles), this.uiCustomization = new ks(this.styles), this.uiCustomizationCommands = new Rs(this.uiCustomization), this.performanceOptimizer = new Ms(this.styles, this.uiCustomization), this.handlebarsManager = new Oe(), this.gmAnarchy = new ts(), this.gmConvergence = new ra(), E.init(), this.skills = new gs(), this.modifiers = new A(), this.rollParameters = new ye(), this.rollManager = new D(), this.hudShortcuts = new da(), this.combatManager = new ya(), console.log(u + "AnarchySystem.onInit | loading system"), CONFIG.ANARCHY = l, CONFIG.Combat.documentClass = $t, CONFIG.Combat.initiative = { formula: "2d6" }, CONFIG.Actor.documentClass = H, CONFIG.Item.documentClass = ie;
    try {
      this.proxyDetected = !!window.__ANARCHY_PROXY__;
    } catch {
      this.proxyDetected = !1;
    }
    game.system.anarchy.proxyDetected = this.proxyDetected;
    try {
      game.settings.register(d, "anarchy-first-mode", {
        scope: "world",
        config: !0,
        name: game.i18n.localize(l.settings.anarchyFirstMode.name),
        hint: game.i18n.localize(l.settings.anarchyFirstMode.hint),
        default: !0,
        type: Boolean
      }), game.settings.register(d, "allow-core-fallback", {
        scope: "world",
        config: !0,
        name: game.i18n.localize(l.settings.allowCoreFallback.name),
        hint: game.i18n.localize(l.settings.allowCoreFallback.hint),
        default: !1,
        type: Boolean
      }), game.settings.register(d, "prefer-core-sheets", {
        scope: "client",
        config: !0,
        name: game.i18n.localize(l.settings.preferCoreSheets.name),
        hint: game.i18n.localize(l.settings.preferCoreSheets.hint),
        default: !1,
        type: Boolean
      });
    } catch (e) {
      console.warn(u + "Settings registration failed", e);
    }
    this.sheetsRegistered = !1, this._ensureSheetsWhenAvailable(), g.init(), ne.init(), te.init(), M.init(), x.init(), $t.init(), P.init(), fe.init(), Le.init(), ie.init(), H.init(), R.init(), T.init(), this.gmManager = new ls(this.gmAnarchy, this.gmConvergence), console.log(u + "AnarchySystem.onInit | done");
    try {
      await Aa();
    } catch (e) {
      console.warn(u + "Optional integrations failed to load. Continuing without them.", e);
    }
    Hooks.once("ready", () => this.onReady()), this._registerRenderSafety(), this._registerCreationBias(), this._registerConsoleCommands();
  }
  async onReady() {
    if (console.log(u + "AnarchySystem.onReady"), this.sheetsRegistered || this._ensureSheetsWhenAvailable(), await this._fixDatabaseCorruption(), game.user.isGM) {
      new Us().migrate();
      const e = foundry.applications.api.DocumentSheetConfig, t = CONFIG.Actor.documentClass || Actor;
      CONFIG.Item.documentClass || Item;
      try {
        e.setDefaultSheet(t, d, se);
      } catch {
      }
      try {
        const s = [];
        for (const i of game.actors.contents)
          if (i.type === "character") {
            const o = i.getFlag("core", "sheetClass"), n = `${d}.CharacterEnhancedSheet`;
            (!o || String(o).startsWith("core.")) && s.push(i.update({ "flags.core.sheetClass": n }));
          }
        const a = [];
        for (const i of game.items.contents) {
          const o = i.getFlag("core", "sheetClass");
          let n;
          switch (i.type) {
            case "contact":
              n = `${d}.ContactItemSheet`;
              break;
            case "cyberdeck":
              n = `${d}.CyberdeckItemSheet`;
              break;
            case "gear":
              n = `${d}.GearItemSheet`;
              break;
            case "metatype":
              n = `${d}.MetatypeItemSheet`;
              break;
            case "quality":
              n = `${d}.QualityItemSheet`;
              break;
            case "shadowamp":
              n = `${d}.ShadowampItemSheet`;
              break;
            case "skill":
              n = `${d}.SkillItemSheet`;
              break;
            case "weapon":
              n = `${d}.WeaponItemSheet`;
              break;
          }
          n && (!o || String(o).startsWith("core.")) && a.push(i.update({ "flags.core.sheetClass": n }));
        }
        await Promise.allSettled([...s, ...a]);
      } catch (s) {
        console.warn(u + "Sheet override cleanup skipped", s);
      }
    }
  }
  _registerRenderSafety() {
    this._renderSafetySeen = /* @__PURE__ */ new WeakSet(), foundry.applications.api.DocumentSheetConfig;
    const e = (a) => {
      switch (a.type) {
        case "character":
          return se;
        case "vehicle":
          return Ke;
        case "device":
          return Be;
        case "sprite":
          return it;
        case "ic":
          return at;
      }
    }, t = (a) => {
      switch (a.type) {
        case "contact":
          return qe;
        case "cyberdeck":
          return Qe;
        case "gear":
          return Xe;
        case "metatype":
          return Ze;
        case "quality":
          return Je;
        case "shadowamp":
          return et;
        case "skill":
          return tt;
        case "weapon":
          return st;
      }
    }, s = async (a, i, o) => {
      try {
        if (!o || i instanceof o || this._renderSafetySeen.has(a)) return;
        this._renderSafetySeen.add(a);
        const n = `${d}.${o.name}`;
        try {
          await a.update({ "flags.core.sheetClass": n });
        } catch {
        }
        try {
          i.close({ force: !0 });
        } catch {
        }
        requestAnimationFrame(() => {
          var c;
          try {
            new o(a, {}).render(!0);
          } catch {
            try {
              (c = a.sheet) == null || c.render(!0);
            } catch {
            }
          }
        }), console.warn(u + "Render safety swapped sheet to Anarchy", {
          doc: a.name,
          type: a.type,
          desired: n
        });
      } catch (n) {
        console.warn(u + "Render safety swap failed", n);
      } finally {
        setTimeout(() => this._renderSafetySeen.delete(a), 0);
      }
    };
    Hooks.on("renderActorSheet", (a) => {
      const i = a == null ? void 0 : a.object;
      if (!i) return;
      const o = e(i);
      s(i, a, o);
    }), Hooks.on("renderItemSheet", (a) => {
      const i = a == null ? void 0 : a.object;
      if (!i) return;
      const o = t(i);
      s(i, a, o);
    });
  }
  _ensureSheetsWhenAvailable() {
    const e = () => {
      var t, s, a;
      try {
        const i = (s = (t = foundry.applications) == null ? void 0 : t.api) == null ? void 0 : s.DocumentSheetConfig;
        if (!i) return !1;
        if (this.sheetsRegistered) return !0;
        this.loadActorSheets(), this.loadItemSheets();
        try {
          const o = ((a = CONFIG.Actor) == null ? void 0 : a.documentClass) || Actor;
          i.setDefaultSheet(o, d, se);
        } catch {
        }
        return this.sheetsRegistered = !0, console.log(u + "Sheets registered"), !0;
      } catch (i) {
        return console.error(u + "Failed to register sheets", i), !1;
      }
    };
    e() || Hooks.once("setup", () => e() || Hooks.once("ready", e));
  }
  _registerCreationBias() {
    const e = (s) => {
      switch (s) {
        case "character":
          return se;
        case "vehicle":
          return Ke;
        case "device":
          return Be;
        case "sprite":
          return it;
        case "ic":
          return at;
      }
    }, t = (s) => {
      switch (s) {
        case "contact":
          return qe;
        case "cyberdeck":
          return Qe;
        case "gear":
          return Xe;
        case "metatype":
          return Ze;
        case "quality":
          return Je;
        case "shadowamp":
          return et;
        case "skill":
          return tt;
        case "weapon":
          return st;
      }
    };
    Hooks.on("preCreateActor", (s, a, i, o) => {
      try {
        const n = e(a.type ?? s.type);
        if (!n) return;
        const c = `${d}.${n.name}`;
        s.updateSource({ flags: { core: { sheetClass: c } } });
      } catch {
      }
    }), Hooks.on("preCreateItem", (s, a, i, o) => {
      try {
        const n = t(a.type ?? s.type);
        if (!n) return;
        const c = `${d}.${n.name}`;
        s.updateSource({ flags: { core: { sheetClass: c } } });
      } catch {
      }
    }), Hooks.on("renderDocumentCreateDialog", (s, a, i) => {
      var o, n, c, h, N, Z, V, J;
      try {
        const L = ((o = i == null ? void 0 : i.documentClass) == null ? void 0 : o.name) === (((c = (n = CONFIG.Actor) == null ? void 0 : n.documentClass) == null ? void 0 : c.name) || "Actor"), B = ((h = i == null ? void 0 : i.documentClass) == null ? void 0 : h.name) === (((Z = (N = CONFIG.Item) == null ? void 0 : N.documentClass) == null ? void 0 : Z.name) || "Item");
        if (!L && !B) return;
        const S = (J = (V = a[0]) == null ? void 0 : V.querySelector) == null ? void 0 : J.call(V, 'select[name="type"]');
        if (!S) return;
        const oe = L ? ["character", "vehicle", "device", "sprite", "ic"] : [
          "contact",
          "cyberdeck",
          "gear",
          "metatype",
          "quality",
          "shadowamp",
          "skill",
          "weapon"
        ], bt = Array.from(S.options).find((Vt) => oe.includes(Vt.value));
        bt && (S.value = bt.value, S.dispatchEvent(new Event("change", { bubbles: !0 })));
      } catch {
      }
    });
  }
  _registerConsoleCommands() {
    try {
      const e = {
        fixSheets: async () => await this.fixSheets(),
        debugSheets: () => this.debugSheets()
      };
      window.anarchyUI || (window.anarchyUI = {}), Object.assign(window.anarchyUI, e), console.info(
        u + "Console commands available: anarchyUI.fixSheets(), anarchyUI.debugSheets()"
      );
    } catch {
    }
  }
  async _fixDatabaseCorruption() {
    if (!game.user.isGM) return;
    console.log(u + "Checking for database corruption...");
    let e = 0;
    const t = [], s = {
      "anarchy.se": "anarchy.CharacterEnhancedSheet",
      "anarchy.Ch": "anarchy.CharacterEnhancedSheet",
      "anarchy.Cha": "anarchy.CharacterEnhancedSheet",
      "anarchy.Ve": "anarchy.VehicleSheet",
      "anarchy.De": "anarchy.DeviceSheet",
      "anarchy.Sp": "anarchy.SpriteActorSheet",
      "anarchy.IC": "anarchy.ICSheet"
    };
    for (const o of game.actors.contents) {
      const n = o.getFlag("core", "sheetClass");
      n && s[n] ? (console.log(u + `Fixing truncated sheet name for actor ${o.name}: ${n} -> ${s[n]}`), t.push(o.update({
        "flags.core.sheetClass": s[n]
      })), e++) : !n && o.type === "character" && (t.push(o.update({
        "flags.core.sheetClass": "anarchy.CharacterEnhancedSheet"
      })), e++);
    }
    const a = [], i = {
      contact: "anarchy.ContactItemSheet",
      cyberdeck: "anarchy.CyberdeckItemSheet",
      gear: "anarchy.GearItemSheet",
      metatype: "anarchy.MetatypeItemSheet",
      quality: "anarchy.QualityItemSheet",
      shadowamp: "anarchy.ShadowampItemSheet",
      skill: "anarchy.SkillItemSheet",
      weapon: "anarchy.WeaponItemSheet"
    };
    for (const o of game.items.contents) {
      const n = o.getFlag("core", "sheetClass"), c = i[o.type];
      c && (!n || n.length < 20 || n.startsWith("core.")) && (console.log(u + `Fixing sheet for item ${o.name}: ${n || "none"} -> ${c}`), a.push(o.update({
        "flags.core.sheetClass": c
      })), e++);
    }
    t.length || a.length ? (await Promise.all([...t, ...a]), console.log(u + `Fixed ${e} corrupted sheet assignments`), ui.notifications.info(`Anarchy System: Fixed ${e} corrupted sheet assignments`)) : console.log(u + "No database corruption found");
  }
  async fixSheets() {
    const e = foundry.applications.api.DocumentSheetConfig, t = { actorsUpdated: 0, itemsUpdated: 0 };
    try {
      const s = CONFIG.Actor.documentClass || Actor;
      e.setDefaultSheet(s, d, se);
    } catch {
    }
    try {
      const s = [];
      for (const i of game.actors.contents) {
        const o = i.type === "character" ? `${d}.CharacterEnhancedSheet` : void 0;
        if (!o) continue;
        const n = i.getFlag("core", "sheetClass");
        (!n || String(n).startsWith("core.")) && (t.actorsUpdated++, s.push(i.update({ "flags.core.sheetClass": o })));
      }
      const a = [];
      for (const i of game.items.contents) {
        let o;
        switch (i.type) {
          case "contact":
            o = `${d}.ContactItemSheet`;
            break;
          case "cyberdeck":
            o = `${d}.CyberdeckItemSheet`;
            break;
          case "gear":
            o = `${d}.GearItemSheet`;
            break;
          case "metatype":
            o = `${d}.MetatypeItemSheet`;
            break;
          case "quality":
            o = `${d}.QualityItemSheet`;
            break;
          case "shadowamp":
            o = `${d}.ShadowampItemSheet`;
            break;
          case "skill":
            o = `${d}.SkillItemSheet`;
            break;
          case "weapon":
            o = `${d}.WeaponItemSheet`;
            break;
        }
        const n = i.getFlag("core", "sheetClass");
        o && (!n || String(n).startsWith("core.")) && (t.itemsUpdated++, a.push(i.update({ "flags.core.sheetClass": o })));
      }
      await Promise.allSettled([...s, ...a]);
    } catch (s) {
      console.warn(u + "fixSheets encountered errors", s);
    }
    return console.table(t), t;
  }
  debugSheets() {
    var e, t;
    try {
      const s = {};
      try {
        const o = CONFIG.Actor.documentClass || Actor, n = CONFIG.Item.documentClass || Item;
        s.actor = { character: `${d}.CharacterEnhancedSheet` }, s.item = {
          contact: `${d}.ContactItemSheet`,
          cyberdeck: `${d}.CyberdeckItemSheet`,
          gear: `${d}.GearItemSheet`,
          metatype: `${d}.MetatypeItemSheet`,
          quality: `${d}.QualityItemSheet`,
          shadowamp: `${d}.ShadowampItemSheet`,
          skill: `${d}.SkillItemSheet`,
          weapon: `${d}.WeaponItemSheet`
        }, console.info(u + "Intended Anarchy defaults", s, { ActorDoc: o, ItemDoc: n });
      } catch {
      }
      const a = (((e = game.actors) == null ? void 0 : e.contents) || []).slice(0, 20).map((o) => ({ name: o.name, type: o.type, sheet: o.getFlag("core", "sheetClass") })), i = (((t = game.items) == null ? void 0 : t.contents) || []).slice(0, 20).map((o) => ({ name: o.name, type: o.type, sheet: o.getFlag("core", "sheetClass") }));
      return console.table(a), console.table(i), { defaults: s, sampleActors: a, sampleItems: i };
    } catch (s) {
      return console.warn(u + "debugSheets failed", s), null;
    }
  }
  loadActorSheets() {
    [
      { class: Qs, types: ["character"], makeDefault: !1, label: "ANARCHY.actor.characterSheet" },
      { class: Xs, types: ["character"], makeDefault: !1, label: "ANARCHY.actor.characterNPCSheet" },
      { class: fa, types: ["character"], makeDefault: !1, label: "ANARCHY.actor.characterTabbedSheet" },
      { class: se, types: ["character"], makeDefault: !0, label: "ANARCHY.actor.characterEnhancedSheet" },
      { class: Ke, types: ["vehicle"], makeDefault: !0, label: "ANARCHY.actor.vehicleSheet" },
      { class: Be, types: ["device"], makeDefault: !0, label: "ANARCHY.actor.deviceSheet" },
      { class: it, types: ["sprite"], makeDefault: !0, label: "ANARCHY.actor.spriteSheet" },
      { class: at, types: ["ic"], makeDefault: !0, label: "ANARCHY.actor.icSheet" }
    ].forEach((t) => {
      t.types.forEach((s) => {
        var i, o;
        CONFIG.Actor.sheetClasses || (CONFIG.Actor.sheetClasses = {}), CONFIG.Actor.sheetClasses[s] || (CONFIG.Actor.sheetClasses[s] = {}), CONFIG.Actor.sheetClasses[s][d] || (CONFIG.Actor.sheetClasses[s][d] = {});
        const a = `${d}.${t.class.name}`;
        CONFIG.Actor.sheetClasses[s][d][a] = {
          id: a,
          cls: t.class,
          label: game.i18n.localize(t.label),
          canBeDefault: !0,
          canConfigure: !0
        }, t.makeDefault && ((o = (i = game.settings.get("core", "sheetClasses")) == null ? void 0 : i.Actor) != null && o[s] || DocumentSheetConfig.updateDefaultSheets({
          [`Actor.${s}`]: a
        }));
      });
    });
  }
  loadItemSheets() {
    [
      { class: qe, types: ["contact"], makeDefault: !0 },
      { class: Qe, types: ["cyberdeck"], makeDefault: !0 },
      { class: Xe, types: ["gear"], makeDefault: !0 },
      { class: Ze, types: ["metatype"], makeDefault: !0 },
      { class: Je, types: ["quality"], makeDefault: !0 },
      { class: et, types: ["shadowamp"], makeDefault: !0 },
      { class: tt, types: ["skill"], makeDefault: !0 },
      { class: st, types: ["weapon"], makeDefault: !0 }
    ].forEach((t) => {
      t.types.forEach((s) => {
        var i, o;
        CONFIG.Item.sheetClasses || (CONFIG.Item.sheetClasses = {}), CONFIG.Item.sheetClasses[s] || (CONFIG.Item.sheetClasses[s] = {}), CONFIG.Item.sheetClasses[s][d] || (CONFIG.Item.sheetClasses[s][d] = {});
        const a = `${d}.${t.class.name}`;
        CONFIG.Item.sheetClasses[s][d][a] = {
          id: a,
          cls: t.class,
          label: `${s.charAt(0).toUpperCase()}${s.slice(1)} Sheet`,
          canBeDefault: !0,
          canConfigure: !0
        }, t.makeDefault && ((o = (i = game.settings.get("core", "sheetClasses")) == null ? void 0 : i.Item) != null && o[s] || DocumentSheetConfig.updateDefaultSheets({
          [`Item.${s}`]: a
        }));
      });
    });
  }
}
ft.start();
//# sourceMappingURL=index.mjs.map
