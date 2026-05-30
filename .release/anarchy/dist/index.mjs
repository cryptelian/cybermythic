var bs = Object.defineProperty;
var Et = (o) => {
  throw TypeError(o);
};
var Cs = (o, e, t) => e in o ? bs(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var k = (o, e, t) => Cs(o, typeof e != "symbol" ? e + "" : e, t), ws = (o, e, t) => e.has(o) || Et("Cannot " + t);
var Ht = (o, e, t) => e.has(o) ? Et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t);
var Nt = (o, e, t) => (ws(o, e, "access private method"), t);
const c = {
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
    },
    developerMode: {
      name: "ANARCHY.settings.developerMode.name",
      hint: "ANARCHY.settings.developerMode.hint"
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
}, te = class te {
  static ascending(e = (t) => t) {
    return (t, s) => te.sortingBy(e(t), e(s));
  }
  static descending(e = (t) => t) {
    return (t, s) => te.sortingBy(e(s), e(t));
  }
  static sortingBy(e, t) {
    return e > t ? 1 : e < t ? -1 : 0;
  }
  static bySortedArray(e) {
    return (t) => e.indexOf(t);
  }
  static ascendingBySortedArray(e) {
    return te.ascending(te.bySortedArray(e));
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
    return e.map(t).filter((s) => s != null).reduce(te.sum(), 0);
  }
  static divint(e, t) {
    return Math.floor(e / t);
  }
  static divup(e, t) {
    return Math.ceil(e / t);
  }
  static join(e, t = "") {
    return e.reduce(te.joiner(t));
  }
  static joiner(e = "") {
    return (t, s) => t + e + s;
  }
  static classify(e, t = (s) => s.type) {
    let s = {};
    return te.classifyInto(s, e, t), s;
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
      let r = e[i];
      r || (r = [], e[i] = r), r.push(a);
    }
  }
  static showControlWhen(e, t) {
    t ? e.show() : e.hide();
  }
  static minmax(e, t, s) {
    return Math.max(t, Math.min(e, s));
  }
};
k(te, "isString", (e) => typeof e == "string" || e instanceof String);
let b = te;
const Dt = {
  keyword: "keywords",
  disposition: "dispositions",
  cue: "cues"
}, A = class A {
  // this method is the place to add settings-based entries in the enums
  static init() {
    A.hbsAttributes = A.mapObjetToKeyValue(c.attributes).filter(
      (e) => e.value != "knowledge" && e.value != "noAttribute"
    ), A.hbsItemTypes = A.mapObjetToKeyValue(c.itemType), A.hbsCapacities = A.mapObjetToKeyValue(c.capacity), A.hbsMonitors = A.mapObjetToKeyValue(c.monitor), A.hbsMonitorLetters = A.mapObjetToKeyValue(c.monitorLetter), A.hbsShadowampCategories = A.mapObjetToKeyValue(
      c.shadowampCategory
    ), A.hbsAreas = A.mapObjetToKeyValue(c.area), A.hbsRanges = A.mapObjetToKeyValue(c.range), A.hbsVehicleCategories = A.mapObjetToKeyValue(
      c.vehicleCategory
    ), A.sortedAttributeKeys = Object.keys(c.attributes), A.registerHandleBarHelpers();
  }
  static registerHandleBarHelpers() {
    Handlebars.registerHelper(
      "sortedAttributes",
      (e) => b.sortedMap(
        e,
        b.ascendingBySortedArray(A.sortedAttributeKeys)
      )
    );
  }
  static getEnums(e = (s) => !0, t = !1) {
    return {
      attributes: A.getAttributes(e),
      itemTypes: A.hbsItemTypes,
      capacities: A.hbsCapacities,
      monitors: A.hbsMonitors,
      shadowampCategories: A.hbsShadowampCategories,
      skills: game.system.anarchy.skills.getSkills({ withKnowledge: t }).map((s) => ({
        value: s.code,
        label: game.i18n.localize(s.labelkey),
        labelkey: s.labelkey
      })),
      areas: A.hbsAreas,
      ranges: A.hbsRanges,
      vehicleCategories: A.hbsVehicleCategories
    };
  }
  static getAttributes(e = (t) => !0) {
    return A.hbsAttributes.filter((t) => e(t.value));
  }
  static getActorWordTypes() {
    return Dt;
  }
  static getMonitors() {
    return A.hbsMonitors;
  }
  static getMonitorLetters() {
    return A.hbsMonitorLetters;
  }
  static getActorWordTypePlural(e) {
    return Dt[e];
  }
  static localizeAttribute(e) {
    return c.attributes[e] ? game.i18n.localize(c.attributes[e]) : game.i18n.localize(c.attributes.noAttribute);
  }
  static getFromList(e, t, s = "value", a = "labelkey") {
    const i = e.find((r) => r[s] == t);
    return i ? i[a] : void 0;
  }
  static mapObjetToKeyValue(e, t = "value", s = "labelkey") {
    return Object.entries(e).map((a) => {
      const i = {};
      return i[t] = a[0], i[s] = a[1], i;
    });
  }
};
k(A, "ENUMS"), k(A, "hbsAttributes"), k(A, "hbsItemTypes"), k(A, "hbsCapacities"), k(A, "hbsMonitors"), k(A, "hbsMonitorLetters"), k(A, "hbsShadowampCategories"), k(A, "hbsAreas"), k(A, "hbsRanges"), k(A, "sortedAttributeKeys");
let D = A;
const h = "anarchy", ye = "Anarchy", rt = `system.${h}`, G = h, Se = `systems/${h}`, qt = `${Se}/style`, M = `systems/${h}/templates`, B = `${Se}/icons`, R = `${B}/skills`, g = "Anarchy | ";
function vs() {
  var o, e;
  return ((e = (o = globalThis.game) == null ? void 0 : o.system) == null ? void 0 : e.id) || h;
}
function ks(...o) {
  return ["systems", vs(), ...o.filter(Boolean)].join("/");
}
function y(...o) {
  return ks("templates", ...o);
}
const Ss = 3, Rs = 2, Ms = 6, Ts = 5, Es = 4, Qt = 8, m = {
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
}, P = {
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
  SYSTEM_NAME: h,
  SYSTEM_DESCRIPTION: ye,
  SYSTEM_SOCKET: rt,
  SYSTEM_SCOPE: G,
  SYSTEM_PATH: Se,
  STYLE_PATH: qt,
  TEMPLATES_PATH: M,
  ICONS_PATH: B,
  ICONS_SKILLS_PATH: R,
  LOG_HEAD: g,
  ANARCHY_DICE_BONUS: Ss,
  SPECIALIZATION_BONUS: Rs,
  PLAYER_MAX_ANARCHY: Ms,
  TARGET_SUCCESS: Ts,
  TARGET_SUCCESS_EDGE: Es,
  BASE_MONITOR: Qt,
  TEMPLATE: m,
  ANARCHY_SYSTEM: P
};
class ae {
  static checkSufficient(e, t, s) {
    if (t > s) {
      const a = game.i18n.format(c.common.errors.insufficient, {
        resource: game.i18n.localize(e),
        required: t,
        available: s
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkOutOfRange(e, t, s, a) {
    if (t < s || t > a) {
      const i = game.i18n.format(c.common.errors.outOfRange, {
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
      const e = game.i18n.localize(c.common.errors.onlyGM);
      throw ui.notifications.error(e), e;
    }
  }
  static checkItemType(e, t) {
    if (e.type != t) {
      const s = game.i18n.format(c.common.errors.expectedType, {
        type: game.i18n.localize(
          e.type ? c.itemType.singular[e.type] : e.type
        ),
        expectedType: game.i18n.localize(t)
      });
      throw ui.notifications.error(s), s;
    }
  }
  static checkActorCanReceiveDamage(e, t, s) {
    if (!t) {
      const a = game.i18n.format(
        c.common.errors.actorCannotReceiveDamage,
        {
          actor: s.name,
          damageType: game.i18n.format("ANARCHY.actor.monitors." + e)
        }
      );
      throw ui.notifications.error(a), a;
    }
  }
  static checkWeaponDefense(e, t) {
    if (!e.getDefense()) {
      const a = game.i18n.format(c.common.errors.noDefenseOnWeapon, {
        actor: t.name,
        weapon: e.name
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkTargetsCount(e, t, s) {
    if (e > 0 && t.length > e) {
      const a = game.i18n.format(
        c.common.errors.maxTargetsExceedeed,
        {
          weapon: this.name,
          area: game.i18n.localize(c.area[s]),
          count: t.length,
          max: e
        }
      );
      throw ui.notifications.error(a), a;
    }
  }
  static checkMatrixMonitor(e) {
    if (!e.hasMatrixMonitor()) {
      const t = game.i18n.format(c.actor.monitors.noMatrixMonitor, {
        actor: e.name
      });
      throw ui.notifications.warn(t), t;
    }
  }
  static checkActorDefenseAction(e, t, s) {
    if (!e) {
      const a = game.i18n.format(
        c.common.errors.actorDoesNotHaveDefense,
        {
          actor: t.name,
          defense: game.i18n.localize(s.labelkey),
          actorType: game.i18n.localize(c.actorType[t.type])
        }
      );
      throw ui.notifications.error(a), a;
    }
  }
}
const It = "Users.blindMessageToGM";
class j {
  static init() {
    J.register(It, {
      callback: (e) => j.blindMessageToGM(e),
      condition: (e) => e.isGM
    });
  }
  static blindMessageToGM(e) {
    J.call(It, e) || ChatMessage.create({
      user: e.user,
      whisper: ChatMessage.getWhisperRecipients("GM"),
      blind: !0,
      content: game.i18n.format(c.chat.blindMessageToGM, {
        user: game.user.name,
        message: e.content
      })
    });
  }
  static getUsers(e = (t) => !0) {
    return (game.version ? game.users : game.users.entities).filter(e);
  }
  static firstConnectedGM() {
    return j.getUsers((e) => e.isGM && e.active).sort(b.ascending((e) => e.id)).at(0) ?? {};
  }
  /**
   * @returns true pour un seul utilisateur: le premier GM connecté par ordre d'id
   */
  static isUniqueConnectedGM(e = game.user) {
    return e.id == j.firstConnectedGM().id;
  }
  static firstResponsible(e) {
    if (e.testUserPermission)
      return j.getUsers(
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
class J {
  constructor() {
    this.remoteCalls = {}, game.socket.on(
      rt,
      async (e) => this.onSocketMessage(e)
    );
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
          console.log(g + "RemoteCall [", e, "] (", s, ")");
        },
        condition: (s) => !0,
        multiple: !1
      },
      { overwrite: !1 }
    ), this.remoteCalls[e] = t, console.log(g + "RemoteCall registered", e);
  }
  static call(e, t) {
    return game.system.anarchy.remoteCall._remoteCall(e, t);
  }
  _remoteCall(e, t) {
    const s = this.remoteCalls[e];
    return !s || s.condition(game.user) || !s.multiple && j.isUniqueConnectedGM() ? !1 : (game.socket.emit(rt, { msg: e, data: t }), !0);
  }
  async onSocketMessage(e) {
    const t = this.remoteCalls[e.msg];
    if (t) {
      const s = t.condition(game.user), a = t.multiple, i = j.isUniqueConnectedGM();
      s && (a || i) ? t.callback(e.data) : console.log(
        g + "RemoteCall.onSocketMessage(",
        e,
        ") ignored :",
        s,
        a,
        i
      );
    } else
      console.log(g + "RemoteCall: No callback registered for", e);
  }
}
const nt = "parent-message-id", me = "message-data", yt = "can-use-edge", ft = "owning-actor", _t = "ChatManager.removeChatMessage", Ot = "ChatManager.removeChatMessageFamily", Hs = [
  {
    selector: ".anarchy-button.click-edge-reroll",
    controlVisibility: !0,
    handler: async (o, e) => await N.edgeReroll(o)
  },
  {
    selector: ".anarchy-button.click-defend-attack",
    controlVisibility: !0,
    handler: async (o, e) => await N.defendAttack(o)
  },
  {
    selector: ".anarchy-button.click-defend-pilot-attack",
    controlVisibility: !0,
    handler: async (o, e) => await N.defendPilotAttack(o)
  },
  {
    selector: ".anarchy-button.click-apply-attack-damage",
    controlVisibility: !0,
    handler: async (o, e) => await N.applyAttack(o)
  },
  {
    selector: "img.open-actor-sheet",
    controlVisibility: !1,
    handler: async (o, e) => await N.openActorSheet(o, e)
  }
];
class N {
  static async init() {
    Hooks.on(
      "renderChatMessageHTML",
      async (e, t, s) => await N.onRenderChatMessage(e, t, s)
    ), J.register(Ot, {
      callback: (e) => this.removeFamily(e),
      condition: (e) => e.isGM
    }), J.register(_t, {
      callback: (e) => N.removeChatMessage(e),
      condition: (e) => e.isGM
    });
  }
  static async onRenderChatMessage(e, t, s) {
    const a = e, i = N.hasRight(a);
    Hs.forEach((n) => {
      Array.from(t.querySelectorAll(n.selector)).forEach((d) => {
        const f = !n.controlVisibility || i;
        d.style.display = f ? "" : "none", d.onclick = f ? async (_) => await n.handler(N.getChatMessage(_), _) : null;
      });
    }), Array.from(
      t.querySelectorAll("img.open-actor-sheet")
    ).forEach((n) => {
      n.onclick = async (l) => await N.openActorSheet(a, l);
    });
  }
  static async openActorSheet(e, t) {
    var r;
    const s = t.currentTarget, a = s.dataset.tokenId;
    if (a) {
      const n = canvas.tokens.get(a);
      if (n != null && n.actor) {
        n.actor.sheet.render(!0);
        return;
      }
    }
    const i = s.dataset.actorId;
    return (r = game.actors.get(i)) == null ? void 0 : r.sheet.render(!0);
  }
  static async edgeReroll(e) {
    if (e.getFlag(G, yt)) {
      const t = e.getFlag(G, me);
      await game.system.anarchy.rollManager.edgeReroll(t), N.removeFamily(e.id);
    } else
      ui.notifications.info(
        game.i18n.localize(c.common.errors.cannotUseEdgeAnymore)
      );
  }
  static defendAttack(e) {
    return game.system.anarchy.combatManager.onClickDefendAttack(
      e.getFlag(G, me)
    );
  }
  static defendPilotAttack(e) {
    return game.system.anarchy.combatManager.onClickPilotDefendAttack(
      e.getFlag(G, me)
    );
  }
  static applyAttack(e) {
    return game.system.anarchy.combatManager.onClickApplyAttackDamage(
      e.getFlag(G, me)
    );
  }
  static getChatMessage(e) {
    const t = e.currentTarget.closest(".chat-message"), s = t == null ? void 0 : t.dataset.messageId;
    return s ? game.messages.get(s) : null;
  }
  /**
   * Method in charge of preparing ANARCHY flags to be set on Document, for ChatMessage
   */
  static prepareFlag(e, t, s) {
    e[G] == null ? e[G] = { [t]: s } : e[G][t] = s;
  }
  static removeFamily(e) {
    var t;
    J.call(Ot, e) || (game.messages.filter(
      (s) => s.getFlag(G, nt) == e
    ).forEach((s) => s.delete()), (t = game.messages.get(e)) == null || t.delete());
  }
  static removeChatMessage(e) {
    var t;
    J.call(_t, e) || (t = game.messages.get(e)) == null || t.delete();
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
    const t = e.tokenId ? N.getToken(e.tokenId) : void 0;
    return {
      actor: (t == null ? void 0 : t.actor) ?? game.actors.get(e.actorId),
      token: t,
      right: e.right
    };
  }
  static hasRight(e, t = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
    const s = e.getFlag(G, ft);
    if (s) {
      const a = N.readActorRights(s);
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
const Ns = [
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
    return p.iconPath(`${qt}/${e}`, t);
  }
  static iconPath(e, t) {
    return `<img class="${t}" src="${e}" />`;
  }
  static iconD6(e) {
    if (e < 0 || e > 6)
      throw `Dice ${e} is out of dice range [1..6] or 0 for multidice`;
    return p.fontAwesome(Ns[e]);
  }
}
globalThis.ANARCHY_ICONS = p;
const he = c.actor.monitors, fe = c.actor.counters, At = {
  armor: {
    path: "system.monitors.armor.value",
    monitor: (o) => o.system.monitors.armor,
    iconChecked: p.fontAwesome("fas fa-shield-slash"),
    iconUnchecked: p.fontAwesome("fas fa-shield-alt"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: he.armor
  },
  stun: {
    path: "system.monitors.stun.value",
    monitor: (o) => o.system.monitors.stun,
    iconChecked: p.fontAwesome("fas fa-grimace"),
    iconUnchecked: p.fontAwesome("far fa-smile"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: he.stun,
    overflow: (o) => m.monitors.physical,
    useArmor: !0
  },
  physical: {
    path: "system.monitors.physical.value",
    monitor: (o) => o.system.monitors.physical,
    iconChecked: p.fontAwesome("fas fa-heartbeat"),
    iconUnchecked: p.fontAwesome("far fa-heart"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: he.physical,
    useArmor: !0
  },
  structure: {
    path: "system.monitors.structure.value",
    monitor: (o) => o.system.monitors.structure,
    iconChecked: p.fontAwesome("fas fa-car-crash"),
    iconUnchecked: p.fontAwesome("fas fa-car-alt"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: he.structure
  },
  matrix: {
    path: "system.monitors.matrix.value",
    monitor: (o) => o.getMatrixMonitor(),
    iconChecked: p.fontAwesome("fas fa-laptop-medical"),
    iconUnchecked: p.fontAwesome("fas fa-laptop"),
    iconHit: p.fontAwesome("fas fa-laptop-code"),
    overflow: (o) => o.getMatrixOverflow(),
    recomputeOverflow: (o) => 3,
    resource: he.matrix
  },
  marks: {
    path: void 0,
    monitor: (o) => ({ value: 0, max: 5 }),
    iconChecked: p.fontAwesome("fas fa-bookmark"),
    iconUnchecked: p.fontAwesome("far fa-bookmark"),
    iconHit: p.fontAwesome("fas fa-fingerprint"),
    resource: he.marks
  },
  convergence: {
    path: void 0,
    monitor: (o) => ({ value: 0, max: 5 }),
    iconChecked: p.fontAwesome("far fa-eye"),
    iconUnchecked: p.fontAwesome("fas fa-eye-slash"),
    iconHit: p.fontAwesome("fas fa-eye"),
    resource: he.convergence
  },
  anarchy: {
    path: "system.counters.anarchy.value",
    monitor: (o) => ({
      value: o.system.counters.anarchy.value,
      max: 6
    }),
    iconChecked: p.iconSystemPath("anarchy-point.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath(
      "anarchy-point-off.webp",
      "checkbar-img"
    ),
    resource: fe.anarchy
  },
  plot: {
    path: "system.counters.anarchy.value",
    monitor: (o) => {
      const e = o.system.counters.anarchy.value;
      return { value: e, max: e + 1 };
    },
    iconChecked: p.iconSystemPath("danger-point.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath(
      "danger-point-off.webp",
      "checkbar-img"
    ),
    resource: fe.anarchy
  },
  sceneAnarchy: {
    path: "system.counters.sceneAnarchy.value",
    monitor: (o) => ({ value: o.system.counters.sceneAnarchy.value, max: 3 }),
    iconChecked: p.iconSystemPath(
      "anarchy-point-scene.webp",
      "checkbar-img"
    ),
    iconUnchecked: p.iconSystemPath(
      "anarchy-point-off.webp",
      "checkbar-img"
    ),
    resource: fe.sceneAnarchy
  },
  edge: {
    path: "system.counters.edge.value",
    monitor: (o) => ({
      value: o.system.counters.edge.value,
      max: o.getAttributeValue(m.attributes.edge)
    }),
    iconChecked: p.fontAwesome("fas fa-star"),
    iconUnchecked: p.fontAwesome("far fa-star"),
    resource: fe.edge
  },
  credibility: {
    path: "system.counters.social.credibility.value",
    monitor: (o) => ({
      value: o.system.counters.social.credibility.value,
      max: o.system.counters.social.credibility.max
    }),
    iconChecked: p.fontAwesome("fas fa-handshake"),
    iconUnchecked: p.fontAwesome("far fa-handshake"),
    resource: fe.social.credibility
  },
  rumor: {
    path: "system.counters.social.rumor.value",
    monitor: (o) => ({
      value: o.system.counters.social.rumor.value,
      max: o.system.counters.social.rumor.max
    }),
    iconChecked: p.fontAwesome("fas fa-grimace"),
    iconUnchecked: p.fontAwesome("far fa-grimace"),
    resource: fe.social.rumor
  }
}, X = foundry.utils.mergeObject(At, {});
class u {
  static init() {
    Handlebars.registerHelper("iconCheckbar", u.iconCheckbar), Handlebars.registerHelper("iconCheckbarHit", u.iconHit);
  }
  static hackCheckbars(e) {
    if (e) {
      const t = foundry.utils.mergeObject(At, {});
      foundry.utils.mergeObject(t, e, { recursive: !0 }), foundry.utils.mergeObject(X, t, { overwrite: !0 });
    }
  }
  static iconCheckbar(e, t) {
    return t ? u.iconChecked(e) : u.iconUnchecked(e);
  }
  static iconChecked(e) {
    var t;
    return (t = X[e]) == null ? void 0 : t.iconChecked;
  }
  static iconUnchecked(e) {
    var t;
    return (t = X[e]) == null ? void 0 : t.iconUnchecked;
  }
  static iconHit(e) {
    var t, s;
    return ((t = X[e]) == null ? void 0 : t.iconHit) ?? ((s = X[e]) == null ? void 0 : s.iconChecked);
  }
  static useArmor(e) {
    var t;
    return (t = X[e]) == null ? void 0 : t.useArmor;
  }
  static max(e, t) {
    var a;
    const s = (a = X[t]) == null ? void 0 : a.monitor(e);
    return ((s == null ? void 0 : s.max) ?? 0) + ((s == null ? void 0 : s.maxBonus) ?? 0);
  }
  static value(e, t) {
    var a;
    const s = (a = X[t]) == null ? void 0 : a.monitor(e);
    return (s == null ? void 0 : s.value) ?? 0;
  }
  static resistance(e, t) {
    var a;
    const s = (a = X[t]) == null ? void 0 : a.monitor(e);
    return ((s == null ? void 0 : s.resistance) ?? 0) + ((s == null ? void 0 : s.resistanceBonus) ?? 0);
  }
  static newValue(e, t) {
    return e + (t ? 0 : 1);
  }
  static async switchMonitorCheck(e, t, s, a, i = void 0, r = void 0) {
    await u.setCounter(
      e,
      t,
      u.newValue(s, a),
      i,
      r
    );
  }
  static async addCounter(e, t, s, a = void 0) {
    if (s != 0) {
      const i = u.getCounterValue(e, t, a) ?? 0;
      await u.setCounter(
        e,
        t,
        i + s,
        a
      );
    }
  }
  static async setCounter(e, t, s, a = void 0, i = void 0) {
    switch (t) {
      case m.monitors.marks:
        return await u.setActorMarks(
          e,
          s,
          a,
          i
        );
      case m.monitors.matrix:
        return ae.checkMatrixMonitor(e), await u.setCheckbar(e, t, s, i);
      case m.monitors.convergence:
        return await u.setActorConvergence(e, s);
      case m.monitors.anarchy:
        return await u.setAnarchy(e, s);
      case m.monitors.sceneAnarchy:
        return await u.setSceneAnarchy(e, s);
    }
    return await u.setCheckbar(e, t, s);
  }
  static getCounterValue(e, t, s) {
    switch (t) {
      case m.monitors.marks:
        return u.getActorMarks(e, s);
      case m.monitors.convergence:
        return u.getActorConvergence(e);
      case m.monitors.anarchy:
        return u.getAnarchy(e, t);
    }
    return u.value(e, t);
  }
  static async setCheckbar(e, t, s) {
    if (s == u.getCounterValue(e, t))
      return;
    const a = X[t];
    if (a.path) {
      const i = u.max(e, t);
      if (i <= 0)
        return;
      await u._manageOverflow(a, e, t, s, i), s = Math.min(s, i), ae.checkOutOfRange(a.resource, s, 0, i), await e.setCheckbarValue(a.path, s);
    }
  }
  static async _manageOverflow(e, t, s, a, i) {
    if (a > i) {
      const r = e.overflow ? e.overflow(t) : void 0, n = e.recomputeOverflow ? e.recomputeOverflow(a - i) : a - i;
      r && n > 0 && (u._notifyOverflow(t, s, n, r), await u.addCounter(t, r, n));
    }
  }
  static _notifyOverflow(e, t, s, a) {
    ui.notifications.warn(
      game.i18n.format(c.actor.monitors.overflow, {
        actor: e.name,
        monitor: game.i18n.format("ANARCHY.actor.monitors." + t),
        overflow: s,
        overflowMonitor: game.i18n.format(
          "ANARCHY.actor.monitors." + a
        )
      })
    );
  }
  static async _manageStunOverflow(e, t, s) {
    await u.addCounter(e, m.monitors.physical, t - s);
  }
  static async _manageMatrixOverflow(e, t, s) {
    await u.addCounter(e, m.monitors.stun, t - s);
  }
  static async setAnarchy(e, t) {
    if (e.hasOwnAnarchy()) {
      if (e.hasGMAnarchy()) {
        await game.system.anarchy.gmAnarchy.setAnarchy(t), e.render();
        return;
      }
      await u._setAnarchyMonitor(
        e,
        m.monitors.anarchy,
        t
      );
    }
  }
  static async setSceneAnarchy(e, t) {
    await u._setAnarchyMonitor(
      e,
      m.monitors.sceneAnarchy,
      t
    );
  }
  static async _setAnarchyMonitor(e, t, s) {
    const a = u.value(e, t);
    await u.setCheckbar(e, t, s), game.user.isGM || u.notifyAnarchyChange(e, t, a, s);
  }
  static getAnarchy(e, t) {
    return !game.user.isGM && (!e.hasOwnAnarchy() || e.hasGMAnarchy()) || t == fe.anarchy && (!e.hasOwnAnarchy() || e.hasGMAnarchy()) ? 0 : u.value(e, t);
  }
  static notifyAnarchyChange(e, t, s, a) {
    j.blindMessageToGM({
      from: game.user.id,
      content: game.i18n.format(c.gmManager.playerChangedAnarchy, {
        user: game.user.name,
        actor: e.name,
        monitor: game.i18n.localize(c.actor.counters[t]),
        from: s,
        to: a
      })
    });
  }
  static getActorMarks(e, t) {
    var s;
    return ((s = u._findActorMarks(e.getMatrixMarks(), t)) == null ? void 0 : s.marks) ?? 0;
  }
  static async addActorMark(e, t, s = void 0) {
    const a = u._findActorMarks(
      e.getMatrixMarks(),
      t
    );
    u.setActorMarks(
      e,
      (a.marks ?? 0) + 1,
      t,
      s
    );
  }
  static async setActorMarks(e, t, s, a = void 0) {
    if (e.canReceiveMarks()) {
      let i = foundry.utils.deepClone(e.getMatrixMarks());
      ae.checkOutOfRange(
        X.marks.resource,
        t,
        0,
        u.max(e, "marks")
      );
      const r = u._findActorMarks(i, s);
      r.marks == null && i.push(r), r.marks = Math.max(0, t), i = i.filter((n) => n.marks > 0), await e.setCheckbarValue("system.monitors.matrix.marks", i);
    }
  }
  static _findActorMarks(e, t) {
    return e.find((s) => s.actorId == t) ?? {
      actorId: t
    };
  }
  static getActorConvergence(e) {
    game.system.anarchy.gmConvergence.getConvergence(e);
  }
  static async setActorConvergence(e, t) {
    await game.system.anarchy.gmConvergence.setConvergence(e, t);
  }
}
async function ne(o) {
  var t;
  if (!o || o.length === 0) return [];
  const e = (t = foundry.applications) == null ? void 0 : t.handlebars;
  return e != null && e.loadTemplates ? e.loadTemplates(o) : typeof loadTemplates == "function" ? loadTemplates(o) : (console.warn("Anarchy | Handlebars loadTemplates API unavailable"), []);
}
async function q(o, e = {}) {
  var s;
  const t = (s = foundry.applications) == null ? void 0 : s.handlebars;
  return t != null && t.renderTemplate ? t.renderTemplate(o, e) : typeof renderTemplate == "function" ? renderTemplate(o, e) : (console.warn("Anarchy | Handlebars renderTemplate API unavailable", o), "");
}
const et = "anarchy-gm", Ds = "scene-anarchy-gm", Yt = "GMAnarchy.addAnarchy";
class Is {
  constructor() {
    game.settings.register(h, et, {
      scope: "world",
      config: !1,
      default: 1,
      type: Number
    }), game.settings.register(h, Ds, {
      scope: "world",
      config: !1,
      default: 0,
      type: Number
    }), J.register(Yt, {
      callback: (e) => game.system.anarchy.gmAnarchy.addAnarchy(e),
      condition: (e) => e.isGM
    }), this.anarchy = game.settings.get(h, et);
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
      content: game.i18n.format(c.gmManager.gmReceivedAnarchy, {
        anarchy: t,
        actor: e.name
      })
    }), await this.addAnarchy(t));
  }
  async npcConsumesAnarchy(e, t) {
    await this.addAnarchy(-t);
  }
  async addAnarchy(e) {
    J.call(Yt, e) || (ae.checkSufficient(
      c.actor.counters.plot,
      -e,
      this.anarchy
    ), await this.setAnarchy(this.anarchy + e));
  }
  async setAnarchy(e) {
    this.anarchy = e, game.settings.set(h, et, e), await this._rebuild(), this._syncGMAnarchySheets();
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-anarchy-bar"), await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".checkbar-root").replaceWith(await this._renderBar()), this.toolbar.off("click", "a.click-checkbar-element"), this.toolbar.on("click", "a.click-checkbar-element", async (e) => {
      e.preventDefault(), await this._onClickAnarchyCheckbar(e);
    });
  }
  async _onClickAnarchyCheckbar(e) {
    const t = Number.parseInt($(e.currentTarget).attr("data-index")), s = $(e.currentTarget).attr("data-checked") == "true";
    let i = this.anarchy;
    s ? i = t : i = t + 1, await this.setAnarchy(i);
  }
  async _renderBar() {
    return await q(y("monitors", "anarchy.hbs"), {
      code: "plot",
      rowlength: 10,
      value: this.getAnarchy().value,
      max: this.getAnarchy().max,
      scene: 0,
      labelkey: c.actor.counters.plot
    });
  }
  _syncGMAnarchySheets() {
    var s, a;
    const e = game.actors.filter(
      (i) => !i.token || i.token.isLinked
    ), t = (((a = (s = game.canvas) == null ? void 0 : s.tokens) == null ? void 0 : a.getDocuments()) ?? []).filter((i) => !i.isLinked).map((i) => i.actor);
    e.concat(t).filter((i) => !i.hasPlayerOwner).forEach((i) => i.render());
  }
}
class _s {
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
function bt(o, e = {}) {
  return foundry.utils.mergeObject(o, e, { inplace: !1 });
}
function Xt() {
  var o, e, t;
  return ((t = (e = (o = game.system.anarchy) == null ? void 0 : o.styles) == null ? void 0 : e.selectCssClass) == null ? void 0 : t.call(e)) ?? "style-anarchy-shadowrun";
}
function Os(o) {
  var e, t, s;
  return ((s = (t = (e = game.system.anarchy) == null ? void 0 : e.uiCustomization) == null ? void 0 : t.getCustomizationClasses) == null ? void 0 : s.call(t, o)) ?? [];
}
function Ct() {
  var o, e, t;
  return (o = game.system.anarchy) != null && o.themeUtilities ? {
    currentTheme: (e = game.system.anarchy.styles) == null ? void 0 : e.currentTheme,
    availableThemes: (t = game.system.anarchy.styles) == null ? void 0 : t.availableThemes,
    themeMetadata: game.system.anarchy.themeUtilities.getCurrentThemeMetadata()
  } : {};
}
function wt(o) {
  var e;
  return (e = game.system.anarchy) != null && e.uiCustomization ? {
    uiCustomizations: game.system.anarchy.uiCustomization.getActiveCustomizations(),
    customizationClasses: Os(o)
  } : {};
}
function vt(o, e = {}, t = []) {
  var i, r;
  const s = Array.isArray(e.classes) ? e.classes : [], a = b.distinct([
    Xt(),
    ...s,
    ...t
  ]);
  return {
    owner: ((i = o.document) == null ? void 0 : i.isOwner) ?? !1,
    editable: o.isEditable ?? !1,
    limited: ((r = o.document) == null ? void 0 : r.limited) ?? !1,
    cssClass: o.isEditable ? "editable" : "locked",
    classes: a,
    ...e
  };
}
function Ys(o, e = {}, t = "application") {
  const s = wt(t);
  return bt(
    {
      title: o.title,
      document: o.document,
      options: vt(
        o,
        e.options,
        s.customizationClasses
      ),
      ANARCHY: c,
      ...Ct()
    },
    {
      ...e,
      uiCustomizations: s.uiCustomizations
    }
  );
}
function xs(o, e = {}) {
  var n, l, d, f;
  const t = o.actor, s = wt("actor"), a = vt(o, e.options, [
    `actor-${t.type}`,
    ...s.customizationClasses
  ]), i = D.getEnums(), r = bt(
    {
      actor: t,
      document: o.document,
      data: o.document,
      system: t.system,
      items: {},
      anarchy: ((n = t.getAnarchy) == null ? void 0 : n.call(t)) ?? { value: 0, max: 0, scene: 0 },
      ownerActor: ((l = t.getOwnerActor) == null ? void 0 : l.call(t)) ?? null,
      ownedActors: ((d = t.getOwnedActors) == null ? void 0 : d.call(t)) ?? [],
      options: a,
      ENUMS: foundry.utils.mergeObject(
        {
          attributeAction: ((f = t.getAttributeActions) == null ? void 0 : f.call(t)) ?? [],
          capacity: i.capacities,
          shadowampCapacity: i.capacities,
          defenses: D.mapObjetToKeyValue(c.defense)
        },
        i
      ),
      ANARCHY: c,
      ...Ct()
    },
    {
      ...e,
      uiCustomizations: s.uiCustomizations
    }
  );
  return b.classifyInto(r.items, t.items), r;
}
function Ps(o, e = {}, t = {}) {
  var d, f, _, F, O;
  const s = o.item, a = ((f = (d = s.actor) == null ? void 0 : d.getAttributes) == null ? void 0 : f.call(d, s)) ?? [], i = s.actor != null ? (C) => a.includes(C) : () => !0, r = t.withKnowledge ?? s.type === "skill", n = wt("item"), l = vt(
    o,
    e.options,
    n.customizationClasses
  );
  return l.isGM = game.user.isGM, l.isOwned = s.actor != null, bt(
    {
      item: s,
      document: o.document,
      system: s.system,
      options: l,
      ENUMS: foundry.utils.mergeObject(
        D.getEnums(i, r),
        ((O = (F = (_ = game.system.anarchy) == null ? void 0 : _.modifiers) == null ? void 0 : F.getEnums) == null ? void 0 : O.call(F)) ?? {}
      ),
      ANARCHY: c,
      ...Ct()
    },
    {
      ...e,
      uiCustomizations: n.uiCustomizations
    }
  );
}
function zs(o) {
  if (!o)
    return;
  const e = Xt();
  e && o.classList.add(e);
}
function Ls(o, e) {
  var s;
  const t = (s = game.system.anarchy) == null ? void 0 : s.uiCustomization;
  if (!(!o || !t))
    try {
      t.applyCustomizationsToElement(o, e);
    } catch (a) {
      console.warn("Anarchy | Failed to apply UI customizations", a);
    }
}
const { ApplicationV2: Us, HandlebarsApplicationMixin: $s } = foundry.applications.api;
class we extends $s(
  Us
) {
  static get DEFAULT_OPTIONS() {
    return {
      classes: ["anarchy", "anarchy-app"],
      window: {
        resizable: !0
      },
      customizationScope: "application"
    };
  }
  constructor(e = {}) {
    super(e), this._dragAbort = null, this.dragController = null;
  }
  async render(e, t) {
    return typeof e == "object" && t === void 0 ? super.render(e) : typeof e == "boolean" ? super.render({ ...t, force: e }) : super.render(t);
  }
  /**
   * ApplicationV2 data preparation pipeline.
   * Calls getData() for subclasses and normalizes the shared app context.
   */
  async _prepareContext(e = {}) {
    var s;
    const t = await this.getData(e) ?? {};
    return Ys(
      this,
      t,
      ((s = this.options) == null ? void 0 : s.customizationScope) ?? "application"
    );
  }
  /**
   * Method for subclasses to override to provide data to the template.
   */
  async getData(e = {}) {
    return {};
  }
  /**
   * Lifecycle hook invoked before rendering.
   * Used to apply UI customizations and register drag controllers.
   */
  async _renderFrame(e) {
    const t = await super._renderFrame(e);
    return this._applyUiCustomization(t), this._bindDragHandle(t), t;
  }
  /** @override */
  _onRender(e, t) {
    super._onRender(e, t), this.activateListeners(this.element);
  }
  /**
   * Subclasses should override this to attach event listeners.
   * @param {HTMLElement} element
   */
  activateListeners(e) {
  }
  /**
   * Optional helper for subclasses to assign their drag controller instance.
   *
   * @param {import('./handle-drag.js').HandleDragApplication | null} controller
   */
  setDragController(e) {
    this.dragController = e;
  }
  /**
   * Apply system UI customizations to the rendered element, if available.
   */
  _applyUiCustomization(e) {
    var s, a;
    const t = (s = game.system.anarchy) == null ? void 0 : s.uiCustomization;
    if (!(!e || !t))
      try {
        const i = ((a = this.options) == null ? void 0 : a.customizationScope) ?? this.constructor.name;
        t.applyCustomizationsToElement(e, i);
      } catch (i) {
        console.warn(`${g}Failed to apply UI customizations`, i);
      }
  }
  _bindDragHandle(e) {
    var a;
    if (this._cleanupDragBinding(), !e || !this.dragController)
      return;
    const t = ((a = this.options) == null ? void 0 : a.dragHandleSelector) ?? ".app-title-bar", s = e.querySelector(t);
    s && (this.dragController.setPosition(), this._dragAbort = new AbortController(), s.addEventListener(
      "mousedown",
      (i) => this.dragController.onMouseDown(i),
      {
        signal: this._dragAbort.signal
      }
    ));
  }
  async close(e) {
    return this._cleanupDragBinding(), super.close(e);
  }
  _cleanupDragBinding() {
    this._dragAbort && (this._dragAbort.abort(), this._dragAbort = null);
  }
}
const ct = "gm-difficulty-pools", Fs = `${h}.${ct}`;
class Vs {
  constructor() {
    Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  onReady() {
    game.settings.register(h, ct, {
      scope: "world",
      name: game.i18n.localize(c.settings.gmDifficulty.name),
      hint: game.i18n.localize(c.settings.gmDifficulty.hint),
      config: !0,
      default: game.i18n.localize(c.settings.gmDifficulty.default),
      type: String
    }), this.loadDifficultySettings();
  }
  async onUpdateSetting(e, t, s, a) {
    game.user.isGM && e.key == Fs && (this.loadDifficultySettings(), this._rebuild(), game.system.anarchy.gmManager.render(!1));
  }
  loadDifficultySettings() {
    const e = game.settings.get(h, ct);
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
    this.toolbar.find(".gm-difficulty-bar").replaceWith(await this._renderBar()), this.toolbar.off("click", "a.click-roll-difficuty-pool"), this.toolbar.on("click", "a.click-roll-difficuty-pool", async (e) => {
      e.preventDefault(), await this._onClickDifficulty(e);
    });
  }
  async _renderBar() {
    return await q(
      y("app", "gm-difficulty-buttons.hbs"),
      {
        difficultyPools: this.difficultyPools
      }
    );
  }
  async _onClickDifficulty(e) {
    const t = $(e.currentTarget).attr("data-pool"), s = $(e.currentTarget).attr("data-difficulty"), a = new Roll(`${t}d6cs>=5`);
    await a.evaluate();
    const i = game.i18n.format(c.settings.gmDifficulty.chatMessage, {
      pool: t,
      difficulty: s ?? t,
      success: a.total
    }), r = await a.toMessage({ flavor: i }, { create: !1 });
    ChatMessage.create(r);
  }
}
const xt = "gm-manager", Gs = "gm-manager-position", js = { top: 200, left: 200 }, Ws = y("app", "gm-manager.hbs"), Qe = class Qe extends we {
  constructor(e, t) {
    super({
      customizationScope: "gm-manager",
      dragHandleSelector: ".app-title-bar"
    }), this.gmAnarchy = e, this.gmConvergence = t, this.gmDifficulty = new Vs(), this.handleDrag = new _s(
      (s) => s.getElementById(xt),
      {
        initial: js,
        maxPos: { left: 200, top: 100 },
        settings: {
          system: h,
          keyPosition: Gs
        }
      }
    ), this.setDragController(this.handleDrag), Hooks.once("ready", () => this.onReady());
  }
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      id: xt,
      window: {
        ...super.DEFAULT_OPTIONS.window,
        title: game.i18n.localize(c.gmManager.title),
        controls: [
          {
            icon: "fa-solid fa-eye-slash",
            label: "Hide",
            action: "hide"
          }
        ],
        resizable: !0
      },
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        "anarchy-sheet-v2",
        "gm-manager"
      ],
      position: {
        width: 300,
        // Fixed width for GM manager
        height: "auto"
      },
      actions: {
        hide: Qe.prototype._onHide
      }
    };
  }
  _onHide() {
    this.close();
  }
  async render(e, t) {
    return game.user.isGM ? super.render(e, t) : this.close();
  }
  onReady() {
    game.user.isGM && this.render({ force: !0, focus: !0 });
  }
  async _prepareContext(e) {
    var s;
    const t = await super._prepareContext(e);
    return foundry.utils.mergeObject(
      t,
      {
        anarchy: this.gmAnarchy.getAnarchy(),
        convergences: this.gmConvergence.getConvergences(),
        difficultyPools: this.gmDifficulty.getDifficultyData(),
        ANARCHY: c,
        options: {
          ...t.options,
          classes: foundry.utils.deepClone(((s = t.options) == null ? void 0 : s.classes) ?? [])
        }
      },
      { inplace: !1 }
    );
  }
  async activateListeners(e) {
    await super.activateListeners(e);
    const t = $(e);
    await this.gmAnarchy.activateListeners(t), await this.gmConvergence.activateListeners(t), await this.gmDifficulty.activateListeners(t);
  }
  // V2 Compatibility: Ensure sidebar click can re-open the app
  async _render(e, t) {
    return this._closing = !1, super._render(e, t);
  }
  async close(e) {
    return this._closing = !0, await super.close(e), this;
  }
};
k(Qe, "PARTS", {
  main: {
    template: Ws
  }
});
let lt = Qe;
const Bs = y("app", "gm-roll-dice.hbs");
class Zt extends we {
  constructor({ onRoll: e, onClose: t }) {
    super({ customizationScope: "gm-roll-dice" }), this.onRoll = e ?? (() => {
    }), this._onCloseCallback = t ?? (() => {
    });
  }
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      id: "gm-roll-dice",
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        "anarchy-dialog",
        "gm-roll-dice"
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        title: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
        resizable: !1
      },
      position: {
        width: 320,
        height: "auto"
      }
    };
  }
  async _prepareContext(e) {
    return {
      ...await super._prepareContext(e),
      instruction: game.i18n.localize(
        "ANARCHY.chat_actions.rollDice.instruction"
      ),
      cancel: game.i18n.localize("ANARCHY.common.cancel"),
      roll: game.i18n.localize("ANARCHY.common.roll.button")
    };
  }
  async activateListeners(e) {
    await super.activateListeners(e);
    const t = e instanceof jQuery ? e : $(e);
    t.on("submit", "form.gm-roll-dice-form", (s) => {
      s.preventDefault(), s.stopPropagation(), this._onSubmit(s);
    }), t.on("click", ".gm-roll-dice-cancel", (s) => {
      s.preventDefault(), s.stopPropagation(), this._onCancel(s);
    });
  }
  async close(e) {
    return await super.close(e), this._onCloseCallback(), this;
  }
  async _onSubmit(e) {
    e.preventDefault();
    const s = e.currentTarget.querySelector('input[name="macro-roll-count-dice"]'), a = Number.parseInt((s == null ? void 0 : s.value) ?? "0", 10);
    if (!Number.isInteger(a) || a <= 0) {
      ui.notifications.warn(
        game.i18n.localize("ANARCHY.chat_actions.rollDice.error")
      );
      return;
    }
    await this.onRoll(a), await this.close();
  }
  async _onCancel(e) {
    e.preventDefault(), await this.close();
  }
}
k(Zt, "PARTS", {
  main: {
    template: Bs
  }
});
class Ks {
  constructor() {
    this._rollDiceDialog = null, Hooks.on(
      "renderChatLog",
      async (e, t) => this._injectChatControls(t)
    );
  }
  async _injectChatControls(e) {
    if (!game.user.isGM) return;
    console.log("Anarchy | Injecting Chat Controls");
    const t = "systems/anarchy/templates/app/chat-tools.hbs", s = {
      title: game.i18n.localize("ANARCHY.gmManager.title"),
      rollDice: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
      isGM: game.user.isGM
    }, a = await q(t, s), i = $(e).find("form.chat-form");
    i.off("click", ".rolldice"), i.off("click", ".gmmanager"), i.append(a), i.on("click", ".rolldice", (r) => {
      r.preventDefault(), r.stopPropagation(), console.log("Anarchy | Rolldice button clicked"), this._openRollDiceDialog();
    }), i.on("click", ".gmmanager", (r) => {
      r.preventDefault(), r.stopPropagation(), console.log("Anarchy | GM Manager button clicked"), game.system.anarchy.gmManager.render({
        force: !0,
        window: { title: game.i18n.localize(c.gmManager.title) }
      });
    });
  }
  _openRollDiceDialog() {
    var e;
    if (console.log("Anarchy | Opening Roll Dice Dialog"), (e = this._rollDiceDialog) != null && e.rendered) {
      this._rollDiceDialog.render({ force: !0 });
      return;
    }
    this._rollDiceDialog = new Zt({
      onRoll: async (t) => await this._executeDiceRoll(t),
      onClose: () => this._rollDiceDialog = null
    }), this._rollDiceDialog.render({ force: !0 });
  }
  async _executeDiceRoll(e) {
    var n, l;
    const t = new Roll(`${e}d6cs>4`);
    await t.evaluate();
    const a = (((l = (n = t.terms) == null ? void 0 : n[0]) == null ? void 0 : l.results) ?? []).filter((d) => d.result == 1).length, i = game.i18n.format("ANARCHY.chat_actions.rollDice.result", {
      count: e,
      success: t.total,
      ones: a
    }), r = await t.toMessage({ flavor: i }, { create: !1 });
    await ChatMessage.create(r);
  }
}
function K(o, e, t, s, a, i = (r) => !0) {
  return {
    code: o,
    labelkey: c.attributeAction[o],
    attributeFunction1: e ?? ((r) => {
    }),
    attributeFunction2: t ?? ((r) => {
    }),
    icon: s,
    actorTypes: a,
    condition: i
  };
}
function Me(o, e) {
  return {
    code: o,
    labelkey: c.defense[o],
    actionCode: e
  };
}
const Y = m.attributes, z = m.actorTypes, U = P.actions, Te = P.defenses, tt = [
  K(
    U.defense,
    (o) => Y.agility,
    (o) => Y.logic,
    p.fontAwesome("fas fa-shield-alt"),
    [z.character]
  ),
  K(
    U.defense,
    (o) => Y.autopilot,
    (o) => Y.handling,
    p.fontAwesome("fas fa-tachometer-alt"),
    [z.vehicle]
  ),
  // TODO: add a way to pilot a vehicle to fallback defense of controled vehicle
  K(
    U.resistTorture,
    (o) => Y.strength,
    (o) => Y.willpower,
    p.fontAwesome("fas fa-angry"),
    [z.character]
  ),
  K(
    U.perception,
    (o) => Y.logic,
    (o) => Y.willpower,
    p.fontAwesome("fas fa-eye"),
    [z.character]
  ),
  K(
    U.perception,
    (o) => Y.autopilot,
    void 0,
    p.fontAwesome("fas fa-video"),
    [z.vehicle]
  ),
  K(
    U.perception,
    (o) => o.getMatrixLogic(),
    (o) => o.getMatrixLogic(),
    p.fontAwesome("fas fa-video"),
    [z.device, z.sprite, z.ic]
  ),
  K(
    U.composure,
    (o) => Y.charisma,
    (o) => Y.willpower,
    p.fontAwesome("fas fa-meh"),
    [z.character]
  ),
  K(
    U.judgeIntentions,
    (o) => Y.charisma,
    (o) => Y.charisma,
    p.fontAwesome("fas fa-theater-masks"),
    [z.character]
  ),
  K(
    U.memory,
    (o) => Y.logic,
    (o) => Y.logic,
    p.fontAwesome("fas fa-brain"),
    [z.character]
  ),
  K(
    U.catch,
    (o) => Y.agility,
    (o) => Y.agility,
    p.fontAwesome("fas fa-baseball-ball"),
    [z.character]
  ),
  K(
    U.lift,
    (o) => Y.strength,
    (o) => Y.strength,
    p.fontAwesome("fas fa-dumbbell"),
    [z.character]
  ),
  K(
    U.matrixDefense,
    (o) => o.getMatrixLogic(),
    (o) => o.getMatrixFirewall(),
    p.fontAwesome("fas fa-shield-virus"),
    [z.character, z.sprite, z.ic, z.device, z.vehicle]
  ),
  K(
    U.astralDefense,
    (o) => Y.logic,
    (o) => Y.willpower,
    p.fontAwesome("fas fa-shield-virus"),
    [z.character]
  )
], ze = [
  Me(Te.physicalDefense, U.defense),
  Me(Te.physicalResistance, U.resistTorture),
  Me(Te.socialDefense, U.composure),
  Me(Te.matrixDefense, U.matrixDefense),
  Me(Te.mentalResistance, U.perception)
];
class L {
  static init() {
    Handlebars.registerHelper(
      "fixedDefenseCode",
      (e) => L.fixedDefenseCode(e)
    );
  }
  static all(e = void 0) {
    return e ? tt.filter(e) : tt;
  }
  static getActorActions(e) {
    return tt.filter(
      (t) => t.actorTypes.includes(e.type) && t.condition(e)
    );
  }
  static fixedDefenseCode(e) {
    return P.fixedDefenseCode[e] ?? e;
  }
  static getActorDefenses(e) {
    return ze.map((t) => {
      const s = L.getActorAction(
        e,
        t.actionCode
      );
      return L._convertToDefense(s, t);
    }).filter((t) => t == null ? void 0 : t.code);
  }
  static getDefenseAttributeAction(e) {
    var t;
    return (t = ze.find((s) => s.code == e)) == null ? void 0 : t.actionCode;
  }
  static getActorAction(e, t) {
    return L.getActorActions(e).find(
      (s) => s.code == t
    );
  }
  static getActorDefense(e, t) {
    t = L.fixedDefenseCode(t);
    const s = ze.find((i) => i.code == t), a = L.getActorAction(
      e,
      s.actionCode
    );
    return ae.checkActorDefenseAction(a, e, s), L._convertToDefense(a, s);
  }
  static _convertToDefense(e, t) {
    return e ? foundry.utils.mergeObject(t, e ?? {}, {
      overwrite: !1,
      inplace: !1
    }) : void 0;
  }
  static getDefenses() {
    return ze;
  }
  static prepareShortcut(e, t) {
    const s = L.getActorActions(e).find(
      (a) => a.code == t
    );
    if (s)
      return {
        icon: s.icon,
        label: game.i18n.localize(s.labelkey),
        callback: (a) => a.actor.rollAttributeAction(t)
      };
  }
}
const kt = {
  canMark: !1,
  marks: [],
  value: 0,
  max: 0,
  resistance: 0
}, W = {
  connectionMode: {
    disconnected: "disconnected",
    augmented: "augmented",
    virtual: "virtual"
  }
};
class Ee {
  static resolveConnectionMode(e) {
    switch (e) {
      case W.connectionMode.disconnected:
      case W.connectionMode.augmented:
      case W.connectionMode.virtual:
        return e;
      case void 0:
      default:
        return W.connectionMode.disconnected;
    }
  }
  static getNextConnectionMode(e) {
    switch (e) {
      case W.connectionMode.disconnected:
        return W.connectionMode.augmented;
      case W.connectionMode.augmented:
        return W.connectionMode.virtual;
      default:
      case W.connectionMode.virtual:
        return W.connectionMode.disconnected;
    }
  }
}
const Pt = [
  m.itemType.shadowamp,
  m.itemType.weapon,
  m.itemType.cyberdeck
];
class w {
  constructor() {
    this.modifiers = {
      groups: D.mapObjetToKeyValue(c.modifier.group, "key", "label"),
      roll: w._buildGroupOptions("roll"),
      attribute: w._buildGroupOptions("attribute"),
      monitor: w._buildGroupOptions("monitor"),
      other: w._buildGroupOptions("other")
    }, Hooks.once("ready", () => this.onReady());
  }
  static _buildGroupOptions(e) {
    switch (e) {
      case "attribute":
        return {
          label: c.modifier.group[e],
          effects: D.hbsAttributes.map((t) => ({ key: t.value, label: t.labelkey })),
          categories: []
        };
    }
    return {
      label: c.modifier.group[e],
      effects: D.mapObjetToKeyValue(
        c.modifier[e].effect,
        "key",
        "label"
      ),
      categories: D.mapObjetToKeyValue(
        c.modifier[e].category,
        "key",
        "label"
      )
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
        return D.getAttributes().map((s) => ({ key: s.value, label: s.labelkey }));
      case "skill":
        return game.system.anarchy.skills.getSkills().map((s) => ({ key: s.code, label: s.labelkey }));
      case "attributeAction":
        const t = L.all().map((s) => ({ key: s.code, label: s.labelkey }));
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
            return [e.attribute1, e.attribute2].includes(
              s.subCategory
            );
          case "skill":
            return s.subCategory == ((a = e.skill) == null ? void 0 : a.system.code);
          case "attributeAction":
            return s.subCategory == e.attributeAction || s.subCategory == L.getDefenseAttributeAction(
              e.defenseAction
            );
        }
      return !1;
    };
  }
  static computeRollModifiers(e, t, s) {
    const a = w.buildRollModifiersFilter(t, s), i = (d) => d.group == "roll" && d.effect == s && a(d), r = w._activeItems(e).map((d) => w.itemModifiers(d, i)).reduce((d, f) => d.concat(f), []).sort(b.descending((d) => d.modifier.value)), n = w.$sumShadowampModifiers(
      r.filter((d) => Pt.includes(d.item.type)).map((d) => d.modifier.value)
    ), l = b.sumValues(
      r.filter((d) => !Pt.includes(d.item.type)).map((d) => d.modifier.value)
    );
    return {
      value: n + l,
      sources: r
    };
  }
  static $sumShadowampModifiers(e) {
    const t = e.find((i) => i > 3) ?? 0, s = b.sumValues(e.filter((i) => i < 0)), a = Math.min(
      3,
      b.sumValues(e.filter((i) => i > 0 && i <= 3))
    );
    return s + Math.max(a, t);
  }
  static computeModifiers(e, t, s = void 0, a = void 0) {
    const i = w._createFilter(t, s, a), r = w._activeItems(e).map((l) => w.itemModifiers(l, i)).reduce((l, d) => l.concat(d), []);
    return {
      value: b.sumValues(r, (l) => l.modifier.value),
      sources: r
    };
  }
  static sumMonitorModifiers(e, t, s) {
    return w.sumModifiers(
      w._activeItems(e),
      "monitor",
      t,
      s
    );
  }
  static sumModifiers(e, t, s, a) {
    const i = w._createFilter(t, s, a), r = w._activeItems(e).map((n) => w.itemModifiers(n, i)).reduce((n, l) => n.concat(l), []);
    return b.sumValues(r, (n) => n.modifier.value);
  }
  static _createFilter(e, t, s) {
    return (a) => a.group == e && a.effect == (t ?? a.effect) && a.category == (s ?? a.category);
  }
  static countModifiers(e, t, s = void 0, a = void 0) {
    const i = w._createFilter(t, s, a);
    return w._activeItems(e).map((n) => w.itemModifiers(n, i)).reduce((n, l) => n.concat(l), []).count;
  }
  static itemModifiers(e, t) {
    return w._listItemModifiers(e, t).map(
      (s) => w._itemModifier(e, s)
    );
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
const zt = {
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
class se {
  static init() {
    Hooks.once("ready", async () => await this.onReady()), Handlebars.registerHelper(
      "dice-cursor-array",
      (e, t) => se.array(e ?? 0, t ?? 5)
    ), Handlebars.registerHelper(
      "dice-cursor-fas",
      (e, t) => se.fasClass(e, t)
    ), Handlebars.registerHelper(
      "dice-cursor-active",
      (e, t) => se.activeClass(e, t)
    ), Handlebars.registerHelper(
      "dice-cursor-color",
      (e, t) => se.colorClass(e, t)
    );
  }
  static async onReady() {
    await ne([
      "systems/anarchy/templates/roll/parts/dice-cursor.hbs"
    ]);
  }
  static array(e, t) {
    if (e > t) throw `min>max: ${e} > ${t}`;
    return Array(t - e + 1).fill().map((s, a) => e + a);
  }
  static isActive(e, t) {
    return t <= e && e < 0 || 0 < e && e <= t;
  }
  static activeClass(e, t) {
    return se.isActive(e, t) ? "active" : "inactive";
  }
  static fasClass(e, t) {
    const s = se.isActive(e, t) ? zt.highlighted : zt.dimmed;
    return se.$getFas(s, Math.abs(e));
  }
  static colorClass(e, t) {
    return e == 0 || !t ? e < 0 ? "fixed-dice-malus" : "fixed-dice-bonus" : e < 0 ? "variable-dice-malus" : "variable-dice-bonus";
  }
  static $getFas(e, t) {
    return e[t > 6 ? t % 6 : t];
  }
  static async diceCursor({ value: e, min: t, max: s, editable: a }) {
    return await q(
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
class qs {
  static getMalus(e, t) {
    return Math.min(0, -Math.floor((7 - t) / 2));
  }
}
const v = {
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
}, Jt = `${h}.${v.ANARCHY_HACK}`, He = {
  id: h,
  name: "Standard Shadowrun Anarchy",
  hack: {
    checkbars: () => X
  }
};
globalThis.ANARCHY_HOOKS = v;
globalThis.SETTING_KEY_ANARCHY_HACK = Jt;
globalThis.SHADOWRUN_ANARCHY_NO_HACK = He;
class le {
  constructor() {
    this.hooks = [], this.hacks = {}, this.hackNames = {}, this.hookMethods = {}, this._register(v.ANARCHY_HACK), this._register(v.PROVIDE_BASE_ESSENCE), Hooks.on(
      v.ANARCHY_HACK,
      (e) => e(He)
    ), Hooks.on(
      v.PROVIDE_BASE_ESSENCE,
      (e) => e(He, (t) => 6)
    ), Hooks.on(
      v.PROVIDE_MALUS_ESSENCE,
      (e) => e(
        He,
        (t, s) => qs.getMalus(t, s)
      )
    ), Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(v.ANARCHY_HACK, (e) => {
      this.hacks[e.id] = e, this.hackNames[e.id] = e.name;
    }), game.settings.register(h, v.ANARCHY_HACK, {
      scope: "world",
      name: game.i18n.localize(c.settings.anarchyHack.name),
      hint: game.i18n.localize(c.settings.anarchyHack.hint),
      config: !0,
      default: He.id,
      choices: this.hackNames,
      type: String
    }), this.applySelectedAnarchyHack();
  }
  async onUpdateSetting(e, t, s, a) {
    e.key == Jt && this.applySelectedAnarchyHack();
  }
  applySelectedAnarchyHack() {
    const e = this.getSelectedHack();
    e && (u.hackCheckbars(e.hack.checkbars()), [
      v.PROVIDE_BASE_ESSENCE,
      v.PROVIDE_MALUS_ESSENCE
    ].forEach(
      (s) => this.selectHookMethod(e, s)
    ));
  }
  selectHookMethod(e, t) {
    Hooks.callAll(t, (s, a) => {
      s == e && (this.hookMethods[t] = a);
    });
  }
  getSelectedHack() {
    return this.hacks[game.settings.get(h, v.ANARCHY_HACK)];
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
    le.instance()._register(e);
  }
  _register(e) {
    if (console.log(g + "HooksManager.register", e), !e.startsWith(h + "-"))
      throw "For safety Anarchy Hooks names must be prefixed by anarchy'-'";
    this.hooks.push(e);
  }
}
const S = {
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
}, Qs = [
  // attribute1
  {
    code: "attribute1",
    options: {
      order: 1,
      category: S.pool,
      hbsTemplateRoll: `${M}/roll/parts/select-attribute.hbs`
    },
    condition: (o) => Object.values(P.rollType).includes(o.mode),
    isUsed: (o) => !0,
    factory: (o) => {
      var t;
      const e = o.attribute1 ?? ((t = o.skill) == null ? void 0 : t.system.attribute);
      return {
        labelkey: e ? c.attributes[e] : c.attributes.noAttributes,
        value: o.actor.getAttributeValue(e, o.activeItem),
        flags: { editable: o.skill },
        selected: e,
        choices: D.getAttributes((s) => o.attributes.includes(s))
      };
    }
  },
  // attribute2
  {
    code: "attribute2",
    options: {
      order: 1,
      category: S.pool,
      hbsTemplateRoll: `${M}/roll/parts/select-attribute.hbs`,
      hbsTemplateChat: `${M}/chat/parts/pool-attribute2.hbs`
    },
    condition: (o) => [
      P.rollType.attribute,
      P.rollType.attributeAction,
      P.rollType.defense
    ].includes(o.mode),
    isUsed: (o) => o.used,
    onChecked: (o, e) => o.used = !!e,
    factory: (o) => {
      const e = o.attribute2;
      return {
        labelkey: e ? c.attributes[e] : c.attributes.noAttributes,
        value: o.actor.getAttributeValue(e, o.activeItem),
        flags: { editable: P.rollType.attribute == o.mode },
        selected: e,
        choices: D.getAttributes((t) => o.attributes.includes(t))
      };
    }
  },
  // skill
  {
    code: "skill",
    options: {
      flags: {},
      order: 3,
      category: S.pool,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`
    },
    condition: (o) => ["skill", "weapon"].includes(o.mode),
    factory: (o) => {
      var e, t;
      return {
        label: (e = o.skill) == null ? void 0 : e.name,
        value: ((t = o.skill) == null ? void 0 : t.system.value) ?? 0
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
      category: S.pool,
      hbsTemplateRoll: `${M}/roll/parts/check-option.hbs`
    },
    isUsed: (o) => o.used,
    condition: (o) => {
      var e;
      return o.mode == "skill" && o.specialization || o.mode == "weapon" && ((e = o.skill) == null ? void 0 : e.system.specialization);
    },
    onChecked: (o, e) => {
      o.used = e, o.value = e ? 2 : 0;
    },
    factory: (o) => ({
      label: o.specialization ?? o.skill.system.specialization,
      used: o.specialization != null,
      value: 2
    })
  },
  // credibility usage
  {
    code: "credibility",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 5,
      category: S.pool,
      value: 0,
      labelkey: c.common.roll.modifiers.social.credibility,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`
    },
    condition: (o) => {
      var e;
      return ((e = o.skill) == null ? void 0 : e.system.isSocial) && o.actor.getCredibilityValue() > 0;
    },
    factory: (o) => ({
      min: 0,
      max: Math.min(o.actor.getCredibilityValue(), 3)
    })
  },
  // modifiers bonus
  {
    code: "poolModifiers",
    options: {
      flags: { editDice: !0, editable: !0 },
      labelkey: c.common.roll.modifiers.poolModifiers,
      order: 5,
      category: S.pool,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: -4,
      max: 4
    },
    factory: (o) => Ae.computeRollModifiers(
      S.pool,
      o
    )
  },
  // wounds
  {
    code: "wounds",
    options: {
      flags: { optional: !0 },
      order: 10,
      category: S.pool,
      labelkey: c.common.roll.modifiers.wounds,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`
    },
    isUsed: (o) => o.used,
    condition: (o) => o.actor.getWounds(),
    onChecked: (o, e) => {
      o.used = e, o.value = e ? -o.wounds : 0;
    },
    factory: (o) => {
      const e = o.actor.getWounds();
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
      category: S.pool,
      value: 1,
      labelkey: c.common.roll.modifiers.virtualReality,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: 1,
      max: 1
    },
    condition: (o) => o.actor.isMatrixSkill(o.skill) && o.actor.isMatrixConnected(W.connectionMode.virtual),
    factory: (o) => ({
      flags: {
        used: o.actor.isMatrixSkill(o.skill) && o.actor.isMatrixConnected(W.connectionMode.virtual)
      }
    })
  },
  // other modifiers
  {
    code: "other",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 25,
      category: S.pool,
      value: 0,
      labelkey: c.common.roll.modifiers.other,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
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
      category: S.drain,
      labelkey: c.common.roll.modifiers.drain,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 6
    },
    condition: (o) => {
      var e;
      return (o.mode == "skill" || o.mode == "weapon") && ((e = o.skill) == null ? void 0 : e.system.hasDrain);
    },
    factory: (o) => ({
      value: o.mode == "weapon" && o.weapon.hasDrain ? o.weapon.system.drain : 1
    })
  },
  // convergence
  {
    code: "convergence",
    options: {
      flags: {
        editDice: !1,
        optional: !0,
        used: !0,
        hideParameter: !0
      },
      order: 40,
      category: S.convergence,
      value: 1,
      labelkey: c.common.roll.modifiers.convergence,
      hbsTemplateRoll: `${M}/roll/parts/check-option.hbs`
    },
    isUsed: (o) => o.used,
    condition: (o) => {
      var e;
      return (o.mode == "skill" || o.mode == "weapon") && ((e = o.skill) == null ? void 0 : e.system.hasConvergence);
    },
    onChecked: (o, e) => {
      o.used = e, o.value = e ? 1 : 0;
    }
  },
  // glitch
  {
    code: "glitch",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 50,
      category: S.glitch,
      labelkey: c.common.roll.modifiers.glitch,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      hbsTemplateChat: `${M}/chat/parts/glitch.hbs`,
      min: 0,
      max: 5
    },
    isUsed: (o) => o.value > 0,
    factory: (o) => {
      const e = o.actor.getWounds(), t = Ae.computeRollModifiers(
        S.glitch,
        o
      );
      return {
        value: (e == 0 ? 0 : 1) + (o.glitch ?? 0) + t.value
      };
    }
  },
  // social rumor
  {
    code: "rumor",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 50,
      category: S.glitch,
      value: 0,
      labelkey: c.common.roll.modifiers.social.rumor,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      hbsTemplateChat: `${M}/chat/parts/glitch.hbs`,
      min: 0,
      max: 1
    },
    condition: (o) => {
      var e;
      return ((e = o.skill) == null ? void 0 : e.system.isSocial) && o.actor.getRumorValue() > 0;
    }
  },
  // rerolls
  {
    code: "reroll",
    options: {
      flags: { editDice: !0, editable: !0 },
      order: 30,
      category: S.reroll,
      labelkey: c.common.roll.modifiers.reroll,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (o) => Ae.computeRollModifiers(
      S.reroll,
      o
    )
  },
  // reduction from opponent
  {
    code: "reduced",
    options: {
      order: 29,
      category: S.pool,
      labelkey: c.common.roll.modifiers.reduced,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: -4,
      max: 0
    },
    condition: (o) => {
      var e;
      return (((e = o.attackRoll) == null ? void 0 : e.param.opponentPool) ?? 0) != 0;
    },
    factory: (o) => {
      var t;
      const e = -(((t = o.attackRoll) == null ? void 0 : t.param.opponentPool) ?? 0);
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
      category: S.rerollForced,
      labelkey: c.common.roll.modifiers.rerollForced,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: -5,
      max: 0
    },
    factory: (o) => {
      var t;
      const e = Ae.computeRollModifiers(
        S.successReroll,
        o
      );
      return e.value = -e.value - (((t = o.attackRoll) == null ? void 0 : t.param.opponentReroll) ?? 0), foundry.utils.mergeObject(e, {
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
      category: S.pool,
      value: 0,
      min: 0,
      max: 3,
      labelkey: c.common.roll.modifiers.anarchyDisposition,
      hbsTemplateRoll: `${M}/roll/parts/check-option.hbs`
    },
    isUsed: (o) => o.used,
    condition: (o) => o.actor.getAnarchyValue() > 0,
    onChecked: (o, e) => {
      o.used = e, o.value = e ? 3 : 0;
    }
  },
  // anarchy take risks
  {
    code: "anarchyRisk",
    options: {
      flags: { optional: !0, isAnarchy: !0, forceDisplay: !0 },
      order: 70,
      category: S.risk,
      value: 0,
      labelkey: c.common.roll.modifiers.anarchyRisk,
      hbsTemplateRoll: `${M}/roll/parts/check-option.hbs`,
      hbsTemplateChat: `${M}/chat/parts/anarchy-risk.hbs`
    },
    isUsed: (o) => o.used,
    condition: (o) => o.actor.getAnarchyValue() > 0,
    onChecked: (o, e) => {
      o.used = e, o.value = e ? 1 : 0;
    }
  },
  // edge
  {
    code: "edge",
    options: {
      flags: { optional: !0, forceDisplay: !0 },
      value: 0,
      order: 70,
      category: S.edge,
      labelkey: c.common.roll.modifiers.edge,
      hbsTemplateRoll: `${M}/roll/parts/check-option.hbs`
    },
    isUsed: (o) => o.used,
    condition: (o) => o.options.canUseEdge && o.actor.getRemainingEdge(),
    onChecked: (o, e) => {
      o.used = e, o.value = e ? 1 : 0;
    }
  },
  // reduce opponent pool
  {
    code: "opponentPool",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 100,
      category: S.opponentPool,
      labelkey: c.common.roll.modifiers.opponentPool,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (o) => Ae.computeRollModifiers(
      S.opponentPool,
      o
    ),
    condition: (o) => !o.attributeAction
  },
  // force opponent rerolls
  {
    code: "opponentReroll",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 100,
      category: S.opponentReroll,
      value: 0,
      labelkey: c.common.roll.modifiers.opponentReroll,
      hbsTemplateRoll: `${M}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (o) => Ae.computeRollModifiers(
      S.opponentReroll,
      o
    ),
    condition: (o) => !o.attributeAction
  }
];
class Ae {
  constructor() {
    this.registeredParameters = {}, le.register(v.REGISTER_ROLL_PARAMETERS), le.register(v.MODIFY_ROLL_PARAMETER), Hooks.on(v.MODIFY_ROLL_PARAMETER, (e) => this._validate(e)), Hooks.once(
      v.REGISTER_ROLL_PARAMETERS,
      (e) => Qs.forEach((t) => e(t))
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(
      v.REGISTER_ROLL_PARAMETERS,
      async (t) => {
        Hooks.callAll(v.MODIFY_ROLL_PARAMETER, t), t.ignore || await this._register(t);
      }
    );
    const e = b.distinct(
      [].concat(
        Object.values(this.registeredParameters).map(
          (t) => t.options.hbsTemplateRoll
        )
      ).concat(
        Object.values(this.registeredParameters).map(
          (t) => t.options.hbsTemplateChat
        )
      ).filter((t) => t != null)
    );
    await ne(b.distinct(e)), await ne([
      `${M}/roll/parts/parameter-label.hbs`
    ]);
  }
  _validate(e) {
    e.code || (console.error(
      `${g} RollParameter does not have a code`,
      e
    ), e.ignore = !0);
  }
  async _register(e) {
    if (this.registeredParameters[e.code]) {
      console.error(
        `${g} RollParameter ${e.code} is already registered`,
        e
      );
      return;
    }
    e.onChecked || (e.onChecked = (t, s) => t.used = s), e.onValue = (t, s) => t.value = s, this.registeredParameters[e.code] = e;
  }
  async _optionalLoadTemplate(e) {
    e && await ne([e]);
  }
  build(e) {
    return Object.values(this.registeredParameters).filter((t) => !t.condition || t.condition(e)).map((t) => this._computeParameter(t, e));
  }
  compute(e) {
    const t = e.filter((i) => this.isParameterUsed(i)), s = b.classify(t, (i) => i.category), a = {};
    return Object.values(s).forEach(
      (i) => a[i[0].category] = b.sumValues(
        i,
        (r) => r.value ?? (r.optional ? 1 : 0)
      )
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
    return foundry.utils.mergeObject(s, e.options), e.factory && foundry.utils.mergeObject(
      s,
      e.factory(t, e.options)
    ), foundry.utils.mergeObject(s, {
      used: s.used || s.value,
      min: s.min ?? 0,
      max: s.max ?? s.value ?? 0
    }), s;
  }
  static computeRollModifiers(e, t) {
    const s = (i) => i.type != m.itemType.weapon || t.weapon && i.id == t.weapon.id, a = t.actor.items.filter(s);
    return w.computeRollModifiers(a, t, e);
  }
}
const Xs = y("roll", "roll-dialog.hbs"), Zs = y("roll", "roll-dialog-title.hbs"), V = class V extends we {
  static init() {
    Hooks.once("ready", async () => await this.onReady());
  }
  static async onReady() {
    await ne([
      y("roll", "roll-parameters-category.hbs"),
      y("roll", "parts", "generic.hbs"),
      y("roll", "parts", "image-attribute.hbs"),
      y("roll", "parts", "image-attributeAction.hbs"),
      y("roll", "parts", "image-defense.hbs"),
      y("roll", "parts", "image-skill.hbs"),
      y("roll", "parts", "image-weapon.hbs")
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
  static async rollAttributeAction(e, t) {
    const s = foundry.utils.mergeObject(
      V.prepareActorRoll(e),
      {
        mode: P.rollType.attributeAction,
        attributeAction: t.code,
        attribute1: t.attributeFunction1(e),
        attribute2: t.attributeFunction2(e)
      }
    );
    await V.create(s);
  }
  static async rollAttribute(e, t) {
    const s = foundry.utils.mergeObject(
      V.prepareActorRoll(e),
      {
        mode: P.rollType.attribute,
        attribute1: t
      }
    );
    await V.create(s);
  }
  static async rollSkill(e, t, s) {
    const a = foundry.utils.mergeObject(
      V.prepareActorRoll(e),
      {
        mode: P.rollType.skill,
        skill: t,
        attribute1: (t == null ? void 0 : t.system.attribute) ?? m.attributes.agility,
        specialization: s
      }
    );
    await V.create(a);
  }
  static async rollWeapon(e, t, s, a) {
    const i = foundry.utils.mergeObject(
      V.prepareActorRoll(e),
      {
        mode: P.rollType.weapon,
        weapon: s,
        skill: t,
        attribute1: (t == null ? void 0 : t.system.attribute) ?? e.getPhysicalAgility(),
        specialization: t == null ? void 0 : t.system.specialization,
        targeting: a
      }
    );
    await V.create(i);
  }
  static async rollDefense(e, t, s, a = void 0) {
    const i = foundry.utils.mergeObject(
      V.prepareActorRoll(e),
      {
        mode: P.rollType.defense,
        attribute1: t.attributeFunction1(e),
        attribute2: t.attributeFunction2(e),
        defenseAction: t.code,
        attackRoll: s.attackRoll,
        tokenId: s.defenderTokenId,
        choiceChatMessageId: s.choiceChatMessageId
      }
    );
    await V.create(i);
  }
  static async itemAttributeRoll(e, t) {
    const s = foundry.utils.mergeObject(
      V.prepareActorRoll(e.actor),
      {
        mode: P.rollType.attribute,
        item: e,
        attribute1: t,
        attributes: e.actor.getUsableAttributes(e)
      }
    );
    await V.create(s);
  }
  static async create(e) {
    const t = game.system.anarchy.rollParameters.build(e).sort(b.ascending((i) => i.order ?? 200));
    foundry.utils.mergeObject(e, {
      ENUMS: D.getEnums(
        (i) => e.attributes.includes(i)
      ),
      ANARCHY: c,
      parameters: t
    });
    const s = await q(Zs, e);
    new V(e, { title: s }).render({ focus: !0 });
  }
  constructor(e, t = {}) {
    super({
      ...t,
      window: {
        title: t.title
      },
      roll: e
    }), this.roll = e;
  }
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        game.system.anarchy.styles.selectCssClass(),
        "anarchy-dialog",
        "roll-dialog"
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: !0
      },
      position: {
        width: 500,
        height: "auto"
      }
    };
  }
  async _prepareContext(e) {
    return {
      ...await super._prepareContext(e),
      roll: this.roll,
      actor: this.roll.actor,
      parameters: this.roll.parameters,
      mode: this.roll.mode
    };
  }
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e));
    const t = e instanceof jQuery ? e : $(e);
    this.html = t, this._bindControls(t);
  }
  _bindControls(e) {
    const t = e.find('[data-action="roll"]').first();
    t.length && t.on("click", async (s) => {
      s.preventDefault(), await game.system.anarchy.rollManager.roll(this.roll), await this.close();
    }), this.html.find(".select-attribute-parameter").change(async (s) => {
      const a = this._getRollParameter(s), i = this._getEventItem(s, this.roll.actor), r = s.currentTarget.value, n = this.roll.actor.getAttributeValue(r, i);
      this.roll[a.code] = r, await this._setParameterSelectedOption(a, r, n);
    }), this.html.find(".check-optional").click(async (s) => {
      const a = this._getRollParameter(s);
      a.onChecked(a, s.currentTarget.checked), a.category == S.pool && await this._updateParameterValue(a, a.value);
    }), this.activateDiceParameterClick(), this.html.find("input.parameter-value:not(:disabled)").on("input", async (s) => {
      const a = this._getRollParameter(s), i = Number.parseInt(s.currentTarget.value) ?? 0;
      await this._updateParameterValue(a, i);
    }), this.html.find(".select-option-parameter").change(async (s) => {
      const a = this._getRollParameter(s), i = s.currentTarget.value, r = Number.parseInt(i);
      await this._setParameterSelectedOption(a, i, r);
    });
  }
  activateDiceParameterClick() {
    this.html.find(".input-cursor-parameter a").on("click", async (e) => {
      var s;
      const t = this._getRollParameter(e);
      if ((s = t.flags) != null && s.editDice) {
        const a = Number.parseInt(
          this.html.find(e.currentTarget).attr("data-dice")
        ) ?? 0, i = t.value != a || a == 0 ? a : a > 0 ? a - 1 : a + 1;
        await this._updateParameterValue(t, i);
      }
    });
  }
  async _setParameterSelectedOption(e, t, s) {
    e.onChecked(e, t), e.max = s, await this._updateParameterValue(e, s);
  }
  async _updateParameterValue(e, t) {
    e.onValue(e, t), this.html.find(
      `.parameter[data-parameter-code='${e.code}'] .parameter-value`
    ).text(t);
    const s = await this.renderDiceCursor(e);
    this.html.find(
      `.parameter[data-parameter-code='${e.code}'] .input-cursor-parameter`
    ).empty().append(s), this.activateDiceParameterClick(), this.html.find(
      `.parameter[data-parameter-code='${e.code}'] input.parameter-value`
    ).val(e.value);
  }
  async renderDiceCursor(e) {
    var t;
    return await se.diceCursor({
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
};
k(V, "PARTS", {
  main: {
    template: Xs
  }
});
let re = V;
const $e = "selected-skill-list", Js = `${h}.${$e}`, T = m.attributes, ge = P.defenses, st = "shadowrun-anarchy-en", Lt = {
  code: "knowledge",
  attribute: T.knowledge,
  icon: `${R}/knowledge.svg`
}, ke = [
  {
    code: "athletics",
    attribute: T.strength,
    icon: `${R}/athletics.svg`
  },
  {
    code: "acrobatics",
    attribute: T.agility,
    icon: `${R}/escape-artist.svg`,
    lang: "fr"
  },
  {
    code: "closeCombat",
    attribute: T.agility,
    icon: `${R}/close-combat.svg`,
    defense: ge.physicalDefense
  },
  {
    code: "projectileWeapons",
    attribute: T.agility,
    icon: `${R}/projectile-weapons.svg`,
    defense: ge.physicalDefense
  },
  {
    code: "firearms",
    attribute: T.agility,
    icon: `${R}/firearms.svg`,
    defense: ge.physicalDefense
  },
  {
    code: "heavyWeapons",
    attribute: T.agility,
    icon: `${R}/heavy-weapons.svg`,
    defense: ge.physicalDefense
  },
  {
    code: "vehicleWeapons",
    attribute: T.agility,
    icon: `${R}/vehicle-weapons.svg`,
    defense: ge.physicalDefense
  },
  {
    code: "stealth",
    attribute: T.agility,
    icon: `${R}/stealth.svg`
  },
  {
    code: "pilotingGround",
    attribute: T.agility,
    icon: `${R}/piloting-ground-steering-wheel.svg`
  },
  {
    code: "pilotingOther",
    attribute: T.agility,
    icon: `${R}/piloting-other.svg`
  },
  {
    code: "escapeArtist",
    attribute: T.agility,
    icon: `${R}/escape-artist.svg`,
    lang: "en"
  },
  {
    code: "conjuring",
    attribute: T.willpower,
    hasDrain: !0,
    icon: `${R}/conjuring.svg`
  },
  {
    code: "sorcery",
    attribute: T.willpower,
    hasDrain: !0,
    icon: `${R}/sorcery.svg`
  },
  {
    code: "astralCombat",
    attribute: T.willpower,
    icon: `${R}/astral-combat.svg`,
    defense: ge.astralDefense
  },
  {
    code: "survival",
    attribute: T.willpower,
    icon: `${R}/survival.svg`
  },
  {
    code: "biotech",
    attribute: T.logic,
    icon: `${R}/biotech.svg`
  },
  {
    code: "hacking",
    attribute: T.logic,
    hasConvergence: !0,
    icon: `${R}/hacking.svg`,
    defense: ge.matrixDefense
  },
  {
    code: "electronics",
    attribute: T.logic,
    icon: `${R}/electronics.svg`
  },
  {
    code: "engineering",
    attribute: T.logic,
    icon: `${R}/engineering.svg`
  },
  {
    code: "tasking",
    attribute: T.logic,
    hasDrain: !0,
    icon: `${R}/tasking.svg`
  },
  {
    code: "tracking",
    attribute: T.logic,
    icon: `${R}/tracking.svg`
  },
  {
    code: "animals",
    attribute: T.charisma,
    icon: `${R}/animals.svg`,
    lang: "fr"
  },
  {
    code: "con",
    attribute: T.charisma,
    isSocial: !0,
    icon: `${R}/con-art.svg`
  },
  {
    code: "etiquette",
    attribute: T.charisma,
    isSocial: !0,
    icon: `${R}/etiquette.svg`,
    lang: "fr"
  },
  {
    code: "intimidation",
    attribute: T.charisma,
    isSocial: !0,
    icon: `${R}/intimidation.svg`
  },
  {
    code: "negotiation",
    attribute: T.charisma,
    isSocial: !0,
    icon: `${R}/negotiation.svg`
  },
  {
    code: "disguise",
    attribute: T.charisma,
    icon: `${R}/disguise.svg`,
    lang: "en"
  }
], ea = ["tasking", "hacking"];
class ta {
  constructor() {
    this.skillSets = {}, le.register(v.PROVIDE_SKILL_SET), Hooks.on(
      v.PROVIDE_SKILL_SET,
      (e) => e(
        st,
        "Shadowrun Anarchy EN",
        ke.filter((t) => !t.lang || t.lang == "en"),
        { lang: "en" }
      )
    ), Hooks.on(
      v.PROVIDE_SKILL_SET,
      (e) => e(
        "shadowrun-anarchy-fr",
        "Shadowrun Anarchy FR",
        ke.filter((t) => !t.lang || t.lang == "fr"),
        { lang: "fr" }
      )
    ), Hooks.on(
      "updateSetting",
      async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    this.$prepareSkill(Lt), Hooks.callAll(
      v.PROVIDE_SKILL_SET,
      (t, s, a, i) => {
        const r = this.$prepareSkillSet(t, s, a, i);
        r && (this.skillSets[r.id] = r);
      }
    );
    const e = Object.fromEntries(
      Object.values(this.skillSets).map((t) => [t.id, t.name])
    );
    game.settings.register(h, $e, {
      scope: "world",
      name: game.i18n.localize(c.settings.skillSet.name),
      hint: game.i18n.localize(c.settings.skillSet.hint),
      config: !0,
      default: st,
      choices: e,
      type: String
    }), this.selectedSkills = game.settings.get(h, $e);
  }
  async onUpdateSetting(e, t, s, a) {
    e.key == Js && (this.selectedSkills = game.settings.get(h, $e));
  }
  get(e) {
    return this.getSkills({ withKnowledge: !0 }).find(
      (t) => t.code == e
    );
  }
  getSkills(e = { withKnowledge: !1 }) {
    const t = this.$getConfiguredSkills().sort(
      b.ascending((s) => s.label)
    );
    return e.withKnowledge ? [Lt, ...t] : t;
  }
  $getConfiguredSkills() {
    return (this.skillSets[this.selectedSkills] ?? this.skillSets[st]).skills;
  }
  $prepareSkillSet(e, t, s, a) {
    const i = foundry.utils.mergeObject(
      { id: e, name: t, skills: s },
      a
    );
    if (this.$validateSkillSet(i))
      return i.skills.forEach((r) => {
        this.$prepareSkill(r);
      }), i;
  }
  $prepareSkill(e) {
    e.labelkey = e.labelkey ?? c.skill[e.code], e.icon = e.icon ?? `${Se}/icons/skills/skills.svg`;
  }
  $validateSkillSet(e) {
    function t(s, a = "") {
      if (!s)
        throw a;
    }
    try {
      t(
        e.id && e.name,
        "Skills list does not have an id or name"
      );
      const s = this.skillSets[e.id];
      t(
        !s,
        `Skills list ${e.id} is already registered under name ${s == null ? void 0 : s.name}`
      ), t(Array.isArray(e.skills), "Missing skills array"), e.skills.forEach((i) => {
        t(i.code, `Missing skill code for ${i} in ${e.id}`), t(
          i.labelkey || c.skill[i.code],
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
const mt = "damage-mode", sa = `${h}.${mt}`, Le = {}, at = {};
class E {
  static init() {
    le.register(v.PROVIDE_DAMAGE_MODE), Hooks.on(
      "updateSetting",
      async (e, t, s, a) => E.onUpdateSetting(e, t, s, a)
    ), Hooks.on(v.PROVIDE_DAMAGE_MODE, (e) => {
      e(
        "resistanceArmorMonitor",
        c.settings.damageMode.values.resistanceArmorMonitor,
        E.sufferDamageResistanceArmorMonitor
      ), e(
        "armorResistanceMonitor",
        c.settings.damageMode.values.armorResistanceMonitor,
        E.sufferDamageArmorResistanceMonitor
      ), e(
        "armorGivesResistance",
        c.settings.damageMode.values.armorGivesResistance,
        E.sufferDamageArmorAsResistance_Earthdawn
      ), e(
        "armorGiveResistanceHitsAvoid",
        c.settings.damageMode.values.armorGiveResistanceHitsAvoid,
        E.sufferDamageArmorAsResistance_Cyberpunk
      );
    }), Hooks.once("ready", () => E.onReady());
  }
  static onReady() {
    E._registerDamageModeSetting(), E._selectDamageMode();
  }
  static _registerDamageModeSetting() {
    Hooks.callAll(
      v.PROVIDE_DAMAGE_MODE,
      (e, t, s) => {
        Le[e] = game.i18n.localize(t), at[e] = s;
      }
    ), game.settings.register(h, mt, {
      scope: "world",
      name: game.i18n.localize(c.settings.damageMode.name),
      hint: game.i18n.localize(c.settings.damageMode.hint),
      config: !0,
      default: Object.keys(Le)[0],
      choices: Le,
      type: String
    });
  }
  static async onUpdateSetting(e, t, s, a) {
    e.key == sa && E._selectDamageMode();
  }
  static _selectDamageMode() {
    let e = game.settings.get(h, mt);
    at[e] || (e = Object.keys(Le)[0]), E.damageModeCode = e, E.damageModeMethod = at[e];
  }
  static async sufferDamage(e, t, s, a, i, r, n) {
    const l = e.getDamageMonitor(t);
    ae.checkActorCanReceiveDamage(t, l, e), await (E.damageModeMethod ?? E.sufferDamageResistanceArmorMonitor)(
      e,
      l,
      s,
      a,
      i,
      r
    ), await e.applyArmorDamage(
      t,
      w.sumModifiers([n], "other", "damageArmor")
    );
  }
  static async sufferMarks(e, t) {
    await u.addCounter(
      e,
      m.monitors.marks,
      1,
      t.id
    );
  }
  static async sufferDamageResistanceArmorMonitor(e, t, s, a, i, r) {
    if (t == m.monitors.marks) {
      await E.sufferMarks(e, r);
      return;
    }
    const n = u.resistance(e, t);
    let l = 0;
    if (i) {
      const d = Math.min(n, s), f = Math.min(n - d, a);
      l = s - d, u.useArmor(t) && (l -= await E.damageToArmor(e, l)), l += a - f;
    } else
      l = s + a - n, u.useArmor(t) && (l -= await E.damageToArmor(e, l));
    l > 0 && await u.addCounter(e, t, l);
  }
  static async sufferDamageArmorResistanceMonitor(e, t, s, a, i, r) {
    if (t == m.monitors.marks) {
      await E.sufferMarks(e, r);
      return;
    }
    let n = 0;
    return u.useArmor(t) ? i ? (s -= await E.damageToArmor(e, s), n = a + s) : (n = a + s, n -= await E.damageToArmor(e, n)) : n = s + a, n -= u.resistance(e, t), n > 0 && await u.addCounter(e, t, n), n;
  }
  static async sufferDamageArmorAsResistance_Cyberpunk(e, t, s, a, i, r) {
    if (t == m.monitors.marks) {
      await E.sufferMarks(e, r);
      return;
    }
    let n = s + a;
    if (u.useArmor(t) && n > 0) {
      const l = i ? a : 0, d = Math.max(
        0,
        E._computeArmorResistance(e) - l
      );
      d > 0 && (await u.addCounter(e, "armor", 1), n -= d);
    }
    return n -= u.resistance(e, t), n > 0 && await u.addCounter(e, t, n), Math.max(n, 0);
  }
  static async sufferDamageArmorAsResistance_Earthdawn(e, t, s, a, i, r) {
    if (t == m.monitors.marks) {
      await E.sufferMarks(e, r);
      return;
    }
    let n = s + a;
    if (u.useArmor(t) && !i && n > 0) {
      const l = E._computeArmorResistance(e);
      l > 0 && (await u.addCounter(e, "armor", 1), n -= l);
    }
    return n -= E._computeStrengthResistance(e, t), n -= u.resistance(e, t), n > 0 && await u.addCounter(e, t, n), n;
  }
  static async damageToArmor(e, t) {
    if (t > 0) {
      const s = u.max(e, m.monitors.armor), a = u.getCounterValue(e, m.monitors.armor), i = Math.min(s - a, t), r = u.resistance(
        e,
        m.monitors.armor
      ), n = Math.max(0, i - r);
      return n > 0 && await u.addCounter(e, m.monitors.armor, n), i;
    } else
      return 0;
  }
  static _computeArmorResistance(e) {
    const t = u.max(e, "armor"), s = u.getCounterValue(e, "armor"), a = Math.max(0, t - s);
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
class I extends Actor {
  static init() {
    Hooks.on("updateActor", (e, t, s, a) => {
      const i = j.firstResponsible(e);
      i != null && i.onUpdateActor && i.onUpdateActor(t, s);
    });
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
      const i = s.system.code === "knowledge" || s.system.attribute === "knowledge", r = a.system.code === "knowledge" || a.system.attribute === "knowledge";
      if (i && !r) return 1;
      if (!r && i) return -1;
      if (i && r)
        return s.name > a.name ? 1 : s.name > a.name ? -1 : 0;
      const n = e.getAttributeValue(s.system.attribute) + s.system.value, l = e.getAttributeValue(a.system.attribute) + a.system.value;
      return n > l ? -1 : n < l ? 1 : 0;
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
    return game.users.filter(
      (t) => this.testUserPermission(t, e)
    );
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
      initiative: w.sumModifiers(this.items, "other", "initiative")
    }, this.system.monitors && Object.entries(this.system.monitors).forEach((e) => {
      e[1].maxBonus = w.sumMonitorModifiers(
        this.items,
        e[0],
        "max"
      ), e[1].resistanceBonus = w.sumMonitorModifiers(
        this.items,
        e[0],
        "resistance"
      );
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
      monitor: kt,
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
    return ea.includes(e == null ? void 0 : e.system.code);
  }
  async nextConnectionMode(e) {
  }
  async defSetMatrixMonitor(e, t) {
    this.getMatrixDetails().hasMatrix ? await this.update({ [e]: t }) : game.system.anarchy.hacks.i18n.format(
      c.actor.monitors.noMatrixMonitor,
      {
        actor: this.name
      }
    );
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
    return t == 0 ? 0 : Qt + b.divup(t, 2);
  }
  getAttributeActions() {
    return L.getActorActions(this);
  }
  getUsableAttributes(e = void 0) {
    const t = (e ? [e] : this.items).map((a) => a.getUsableAttributes()).reduce((a, i) => a.concat(i), []), s = b.distinct(
      this.getAttributes().concat(t)
    );
    return s.sort(
      b.ascendingBySortedArray(D.sortedAttributeKeys)
    ), s;
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
          const i = a.map(
            (r) => r.getAttributeValue(e) ?? 0
          );
          s = Math.max(...i);
        }
      }
      s += w.sumModifiers(this.items, "attribute", e);
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
        await E.damageToArmor(this, t);
    }
  }
  async rollAttribute(e) {
    await re.rollAttribute(this, e);
  }
  async rollAttributeAction(e) {
    const t = L.getActorAction(this, e);
    await re.rollAttributeAction(this, t);
  }
  async rollSkill(e, t) {
    await re.rollSkill(this, e, t);
  }
  async rollWeapon(e) {
    var i, r, n;
    ae.checkWeaponDefense(e, this);
    const t = (i = e.validateTargets(this)) == null ? void 0 : i.map((l) => l.id), s = {
      attackerTokenId: (n = (r = game.scenes.current) == null ? void 0 : r.tokens.find(
        (l) => {
          var d;
          return ((d = l.actor) == null ? void 0 : d.id) == this.id;
        }
      )) == null ? void 0 : n.id,
      targetedTokenIds: t
    }, a = this.items.find((l) => e.isWeaponSkill(l));
    await re.rollWeapon(this, a, e, s);
  }
  async rollDefense(e) {
    const t = e.attack.defense, s = L.getActorDefense(this, t);
    await re.rollDefense(this, s, e);
  }
  async rollPilotDefense(e) {
  }
  async rollDrain(e) {
  }
  async rollConvergence(e) {
  }
  async switchMonitorCheck(e, t, s, a = void 0) {
    await u.switchMonitorCheck(
      this,
      e,
      t,
      s,
      a
    );
  }
  async addCounter(e, t, s = void 0) {
    await u.addCounter(this, e, t, s);
  }
  async setCounter(e, t, s = void 0) {
    await u.setCounter(this, e, t, s);
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
    await u.addActorMark(this, e);
  }
  getActorMarks(e) {
    var t;
    return (t = u.getActorMarks(this, e)) == null ? void 0 : t.marks;
  }
  async onEnterCombat() {
    const e = w.sumModifiers(
      this.items,
      "other",
      "sceneAnarchy"
    );
    e > 0 && await u.setCounter(
      this,
      m.monitors.sceneAnarchy,
      e
    );
  }
  async onLeaveCombat() {
    await u.setCounter(this, m.monitors.sceneAnarchy, 0);
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
    await u.addCounter(
      this,
      m.counters.social.credibility,
      -e
    );
  }
  async spendRumor(e) {
    await u.addCounter(this, m.counters.social.rumor, -e);
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
          c.common.errors.noEdgeForActor,
          {
            actor: this.name,
            actorType: game.system.anarchy.hacks.i18n.localize(
              c.actorType[this.type]
            )
          }
        );
        throw ui.notifications.warn(t), c.common.errors.noEdgeForActor + t;
      }
      await u.addCounter(this, m.counters.edge, -e);
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
    const s = I._prepareFavorite(e, t);
    return !!this.system.favorites.find(
      (a) => I._isSameFavorite(s, a)
    );
  }
  static _prepareFavorite(e, t) {
    return { type: e, id: t };
  }
  static _isSameFavorite(e, t) {
    return e.id == t.id && e.type == t.type;
  }
  async switchFavorite(e, t, s) {
    const a = I._prepareFavorite(t, s), i = this.system.favorites.filter(
      (r) => !I._isSameFavorite(a, r)
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
    const s = I._prepareFavorite(e, t);
    if (e == "attributeAction") {
      const i = L.prepareShortcut(this, t);
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
class aa {
  static monitor(e) {
    return game.i18n.localize(
      D.getFromList(D.getMonitors(), e) ?? ""
    );
  }
  static letter(e) {
    return game.i18n.localize(
      D.getFromList(D.getMonitorLetters(), e) ?? ""
    );
  }
}
class ia {
  static toLowerCaseNoAccent(e) {
    return e == null ? void 0 : e.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "");
  }
  static toUpperCaseNoAccent(e) {
    return e == null ? void 0 : e.normalize("NFD").toUpperCase().replace(/[\u0300-\u036f]/g, "");
  }
}
class ie extends Item {
  static init() {
    Hooks.on(
      "createItem",
      (e, t, s) => e.onCreateItem(t, s)
    );
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
    return kt;
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
    this.parent && await re.itemAttributeRoll(this, e);
  }
  async switchMonitorCheck(e, t, s, a = void 0) {
    await u.switchMonitorCheck(
      this.parent,
      e,
      t,
      s,
      a,
      this
    );
  }
  async setCounter(e, t) {
    await u.setCounter(this, e, t);
  }
  async addActorMark(e) {
    await u.addActorMark(this, e);
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
    await this._mutateModifiers(
      (t) => t.filter((s) => s.id != e)
    );
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
class St extends ie {
  static get defaultIcon() {
    return `${B}/skills/skills.svg`;
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
const Ut = {
  none: { targets: 1, adjust: [0] },
  shotgun: { targets: 2, adjust: [0, -2] },
  circle: { targets: void 0 },
  cone: { targets: void 0 },
  rect: { targets: void 0 },
  ray: { targets: void 0 }
}, oa = {
  code: "weapon-range",
  options: {
    flags: { editable: !0 },
    order: 20,
    category: S.pool,
    labelkey: c.common.roll.modifiers.weaponRange,
    hbsTemplateRoll: y("roll", "parts", "select-option.hbs"),
    hbsTemplateChat: void 0
    //``
  },
  isUsed: (o) => !0,
  condition: (o) => o.weapon,
  factory: (o) => {
    const e = o.weapon.getRanges(), t = e.map((s) => s.value);
    return {
      value: e[0].value,
      min: Math.min(...t),
      max: Math.max(...t),
      choices: e,
      selected: game.i18n.localize(e[0].labelkey)
    };
  }
}, ra = {
  code: "weapon-area",
  options: {
    used: !0,
    order: 20,
    category: S.pool,
    labelkey: c.common.roll.modifiers.weaponArea,
    hbsTemplateRoll: y("roll", "parts", "input-numeric.hbs"),
    hbsTemplateChat: void 0
    //``
  },
  isUsed: (o) => o.used,
  condition: (o) => o.weapon && o.weapon.getArea() != m.area.none,
  factory: (o) => {
    var s;
    const e = ((s = o.targeting.targetedTokenIds) == null ? void 0 : s.length) ?? 1, t = o.weapon.getAreaModifier(e);
    return {
      value: t,
      min: Math.min(0, t),
      max: Math.max(0, t),
      used: e > 1
    };
  }
};
class ce extends ie {
  static init() {
    Hooks.once(v.REGISTER_ROLL_PARAMETERS, (e) => {
      e(ra), e(oa);
    });
  }
  static get defaultIcon() {
    return `${B}/weapons/mac-10.svg`;
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
    const e = (s = this.actor) == null ? void 0 : s.items.find(
      (a) => this.isWeaponSkill(a)
    );
    if (e)
      return e;
    const t = game.items.find((a) => this.isWeaponSkill(a));
    return t || St.prepareSkill(this.system.skill);
  }
  getDefense() {
    return L.fixedDefenseCode(this.system.defense);
  }
  getDamage() {
    if (!this.parent)
      return;
    const e = this.system.damageAttribute ? this.parent.getAttributeValue(this.system.damageAttribute) ?? 0 : 0;
    return {
      value: ce.damageValue(
        this.system.monitor,
        this.system.damage,
        this.system.damageAttribute,
        e
      ),
      monitor: this.system.monitor,
      noArmor: this.system.noArmor,
      armorMode: ce.armorMode(this.system.monitor, this.system.noArmor)
    };
  }
  static damageValue(e, t, s, a) {
    if (e == m.monitors.marks)
      return 1;
    if (t = Number(t), s)
      if (a !== void 0)
        t = t + Math.ceil(Number(a) / 2);
      else
        return console.warn("Weapon not attached to an actor"), game.i18n.localize(c.item.weapon.weaponWithoutActor);
    return t;
  }
  getDamageCode() {
    return ce.damageCode(
      this.system.monitor,
      this.system.damage,
      this.system.damageAttribute
    );
  }
  static damageCode(e, t, s) {
    if (e == m.monitors.marks)
      return "1";
    let a = "";
    return s && c.attributes[s] && (a += game.i18n.localize(c.attributes[s]).substring(0, 3).toUpperCase() + "/2 + "), a += String(t), a;
  }
  static armorMode(e, t) {
    return u.useArmor(e) ? t ? "noArmor" : "withArmor" : "";
  }
  getRanges() {
    let e = [this._getRange("short")];
    return this.system.range.max != "short" && e.push(this._getRange("medium")), this.system.range.max == "long" && e.push(this._getRange("long")), e;
  }
  _getRange(e) {
    return {
      value: this.system.range[e],
      labelkey: D.getFromList(D.getEnums().ranges, e)
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
    var r;
    const t = (r = this.getDamage()) == null ? void 0 : r.monitor, s = j.getTargetTokens(game.user), a = s.filter(
      (n) => {
        var l;
        return (l = n.actor) == null ? void 0 : l.canReceiveDamage(t);
      }
    ), i = s.filter((n) => {
      var l;
      return !((l = n.actor) != null && l.canReceiveDamage(t));
    }).map((n) => n.name);
    return i.length > 0 && ui.notifications.info(
      game.i18n.format(c.common.errors.ignoredTargets, {
        targets: i.reduce(b.joiner(", "))
      })
    ), a.length == 0 ? ui.notifications.info(
      game.i18n.format(c.common.errors.noTargetSelected, {
        weapon: this.name ?? game.i18n.localize(c.itemType.singular.weapon)
      })
    ) : this.checkWeaponTargetsCount(a), a;
  }
  checkWeaponTargetsCount(e) {
    const t = this.system.area, s = Ut[t] ?? {};
    ae.checkTargetsCount(s.targets ?? 0, e, t);
  }
  getAreaModifier(e) {
    const t = this.getArea(), s = Ut[t] ?? {};
    return s.targets && s.adjust && e <= s.targets ? s.adjust[e - 1] ?? 0 : 0;
  }
  getArea() {
    return this.system.area == "" ? m.area.none : this.system.area ?? m.area.none;
  }
}
function na(o, e) {
  return `${o}-section-${e}`;
}
function Rt(o, e, t) {
  const s = game.user.getFlag(
    h,
    na(o, e)
  );
  return t != null && t.fn && typeof t.fn == "function" ? s === "closed" ? t.fn(this) : t.inverse(this) : s === "closed" ? "closed" : "";
}
function es(o, e, t) {
  return Rt(o, e, t);
}
const ca = [
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
class We {
  constructor() {
    Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    this.registerBasicHelpers();
    const e = game.system.id, t = ca.map(
      (s) => s.replace("systems/anarchy/", `systems/${e}/`)
    );
    await ne(b.distinct(t));
  }
  registerBasicHelpers() {
    Handlebars.registerHelper(
      "concat",
      (...e) => b.join(e.slice(0, -1))
    ), Handlebars.registerHelper(
      "substring",
      (e, t, s) => e == null ? void 0 : e.substring(t, s)
    ), Handlebars.registerHelper("toUpperCase", ia.toUpperCaseNoAccent), Handlebars.registerHelper("weaponDamageLetter", aa.letter), Handlebars.registerHelper("weaponDamageCode", ce.damageCode), Handlebars.registerHelper("weaponDamageValue", ce.damageValue), Handlebars.registerHelper("weaponArmorMode", ce.armorMode), Handlebars.registerHelper(
      "skillValue",
      (e, t) => e.getSkillValue(t, !1)
    ), Handlebars.registerHelper(
      "specializationValue",
      (e, t) => e.getSkillValue(t, !0)
    ), Handlebars.registerHelper("for", We.hbsForLoop), Handlebars.registerHelper("modulo", (e, t) => e % t), Handlebars.registerHelper("divint", b.divint), Handlebars.registerHelper("divup", b.divup), Handlebars.registerHelper("sum", (e, t) => e + t), Handlebars.registerHelper("times", (e, t) => e * t), Handlebars.registerHelper("diff", (e, t) => e - t), Handlebars.registerHelper("min", (e, t) => Math.min(e, t)), Handlebars.registerHelper("max", (e, t) => Math.max(e, t)), Handlebars.registerHelper("either", (e, t) => e || t), Handlebars.registerHelper(
      "isInteger",
      (e) => e !== void 0 && Number.isInteger(e)
    ), Handlebars.registerHelper(
      "actorAttribute",
      (e, t, s = void 0) => !t || typeof t.getAttributeValue != "function" ? (console.warn(
        "Anarchy | actorAttribute helper: actor is undefined or missing getAttributeValue method",
        { attribute: e, actor: t }
      ), 0) : t.getAttributeValue(e, s)
    ), Handlebars.registerHelper("localizeAttribute", D.localizeAttribute), Handlebars.registerHelper("iconFA", p.fontAwesome), Handlebars.registerHelper("iconSrc", p.iconSystemPath), Handlebars.registerHelper("iconPath", p.iconPath), Handlebars.registerHelper("iconD6", p.iconD6), Handlebars.registerHelper("getActor", (e) => game.actors.get(e)), Handlebars.registerHelper(
      "actorHasFavorite",
      (e, t) => We.checkHasFavorite(e, t)
    ), Handlebars.registerHelper(
      "padWordListToMin",
      I.padWordListToMin
    ), Handlebars.registerHelper("sortSkills", I.sortSkills), Handlebars.registerHelper(
      "sortShadowamps",
      I.sortShadowamps
    ), Handlebars.registerHelper("actorTabClosed", Rt), Handlebars.registerHelper("ifTabClosed", es), Handlebars.registerHelper("sortQualities", I.sortQualities), Handlebars.registerHelper(
      "sortAttributeButton",
      I.sortAttributeButton
    ), Handlebars.registerHelper("range", function(e, t) {
      let s = [];
      for (let a = e; a <= t; a++)
        s.push(a);
      return s;
    }), Handlebars.registerHelper("ifGte", function(e, t, s) {
      return e >= t ? s.fn(this) : s.inverse(this);
    }), Handlebars.registerHelper("length", function(e) {
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
const $t = "default-css-class", ut = "style-anarchy-shadowrun", la = [
  { name: "Shadowrun Anarchy", cssClass: ut },
  { name: "Dark", cssClass: "style-dark" },
  { name: "Dark glass", cssClass: "style-darkglass" }
];
class ma {
  constructor() {
    this.availableStyles = {}, le.register(v.REGISTER_STYLES), Hooks.once(
      v.REGISTER_STYLES,
      (e) => la.forEach((t) => e(t.cssClass, t.name))
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(
      v.REGISTER_STYLES,
      (e, t) => this.availableStyles[e] = t
    ), console.log(g + "Loaded styles", this.availableStyles), game.settings.register(h, $t, {
      scope: "world",
      name: game.i18n.localize(c.settings.defaultCssClass.name),
      hint: game.i18n.localize(c.settings.defaultCssClass.hint),
      config: !0,
      default: ut,
      choices: this.availableStyles,
      type: String
    });
  }
  selectCssClass() {
    const e = game.settings.get(h, $t);
    return this.availableStyles[e] ? e : ut;
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
class ua {
  constructor(e) {
    this.styles = e;
  }
  getCurrentThemeMetadata() {
    var e, t, s, a;
    try {
      const i = (t = (e = this.styles) == null ? void 0 : e.getCurrentThemeId) == null ? void 0 : t.call(e);
      if (!i) return null;
      const r = (a = (s = this.styles) == null ? void 0 : s.getThemeMetadata) == null ? void 0 : a.call(s, i);
      return r || (this.getAvailableThemes().find((l) => l.id === i) ?? null);
    } catch {
      return null;
    }
  }
  getAvailableThemes() {
    var e, t;
    try {
      if ((e = this.styles) != null && e.getAllThemes) return this.styles.getAllThemes();
      if ((t = this.styles) != null && t.availableStyles)
        return Object.entries(this.styles.availableStyles).map(
          ([s, a]) => ({
            id: s,
            name: a,
            cssClass: s
          })
        );
    } catch {
    }
    return [];
  }
  applyThemeEnhancements(e, t = "global") {
    var s, a;
    e && ((a = (s = e.classList) == null ? void 0 : s.add) == null || a.call(s, `theme-scope-${t}`));
  }
}
var Xe, ts;
class da {
  constructor(e) {
    Ht(this, Xe);
    this.styles = e, this.customizations = /* @__PURE__ */ new Map(), this.presets = /* @__PURE__ */ new Map(), this.activeCustomizations = /* @__PURE__ */ new Set(), this.initializeCustomizations(), Hooks.once("ready", () => this.onReady()), Hooks.on(
      "renderApplication",
      (t, s, a) => this.onRenderApplication(t, s, a)
    );
  }
  async onReady() {
    console.groupCollapsed(g + "UICustomization.onReady"), await this.registerCustomizationSettings(), await this.loadUserCustomizations(), this.applyAllCustomizations(), console.groupEnd();
  }
  // =============================================================================
  // CUSTOMIZATION SETTINGS REGISTRATION
  // =============================================================================
  async registerCustomizationSettings() {
    game.settings.register(h, "ui-layout-preferences", {
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
    }), game.settings.register(h, "hud-customization", {
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
    }), game.settings.register(h, "visual-customization", {
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
    }), game.settings.register(h, "component-visibility", {
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
    }), game.settings.register(h, "advanced-ui-settings", {
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
    console.groupCollapsed(
      g + "UICustomization.initializeCustomizations"
    ), this.registerBuiltInPresets(), this.registerCustomizationCategories(), console.groupEnd();
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
        {
          key: "showPassportImages",
          name: "Show Passport Images",
          type: "boolean"
        },
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
        {
          key: "hudSize",
          name: "HUD Size",
          type: "select",
          values: ["small", "medium", "large"]
        },
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
        {
          key: "hideInactiveElements",
          name: "Hide Inactive Elements",
          type: "boolean"
        }
      ]
    });
  }
  // =============================================================================
  // CUSTOMIZATION APPLICATION
  // =============================================================================
  async loadUserCustomizations() {
    const e = game.settings.get(h, "ui-layout-preferences"), t = game.settings.get(
      h,
      "hud-customization"
    ), s = game.settings.get(
      h,
      "visual-customization"
    ), a = game.settings.get(
      h,
      "component-visibility"
    ), i = game.settings.get(
      h,
      "advanced-ui-settings"
    );
    this.userCustomizations = {
      layout: e,
      hud: t,
      visual: s,
      components: a,
      advanced: i
    };
  }
  applyAllCustomizations() {
    console.groupCollapsed(g + "UICustomization.applyAllCustomizations"), this.applyLayoutCustomizations(), this.applyVisualCustomizations(), this.applyComponentVisibility(), this.applyHUDCustomizations(), this.applyAdvancedCustomizations(), this.applyBackgroundRotation(), console.groupEnd();
  }
  getActiveCustomizations() {
    return foundry.utils.deepClone(this.userCustomizations ?? {});
  }
  getCustomizationClasses(e = "global") {
    var i, r;
    const t = [], s = ((i = this.userCustomizations) == null ? void 0 : i.visual) ?? {}, a = ((r = this.userCustomizations) == null ? void 0 : r.layout) ?? {};
    return s.fontSize && s.fontSize !== "default" && t.push(`ui-font-${s.fontSize}`), s.iconSize && s.iconSize !== "default" && t.push(`ui-icons-${s.iconSize}`), s.spacing && s.spacing !== "default" && t.push(`ui-spacing-${s.spacing}`), s.borderRadius && s.borderRadius !== "default" && t.push(`ui-radius-${s.borderRadius}`), a.compactMode && t.push("ui-compact-mode"), a.tabLayout && a.tabLayout !== "horizontal" && t.push(`ui-tabs-${a.tabLayout}`), t;
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
      const e = document.documentElement, t = "/systems/anarchy/img", s = [
        "2025.10_Bckgrnd.img.01.png",
        "2025.10_Bckgrnd.img.02.png",
        "2025.10_Bckgrnd.img.03.png",
        "2025.10_Bckgrnd.img.04.png",
        "2025.10_Bckgrnd.img.05.png",
        "2025.10_Bckgrnd.img.06.png"
      ], a = await Nt(this, Xe, ts).call(this, s.map((n) => `${t}/${n}`));
      let i = a.length > 0 ? a[Math.floor(Math.random() * a.length)] : void 0;
      i || (i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=");
      const r = `repeat center/50% url("${i}")`;
      e.style.setProperty("--anarchy-background", r), globalThis.__anarchyBackgroundCandidates = a, console.info(g + "Background applied:", i);
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
    e.compactMode ? document.body.classList.add("ui-compact-mode") : document.body.classList.remove("ui-compact-mode"), e.tabLayout === "vertical" ? document.body.classList.add("ui-vertical-tabs") : document.body.classList.remove("ui-vertical-tabs"), console.info(g + "Applied layout customizations:", e);
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
    const r = {
      none: "0px",
      minimal: "2px",
      default: "6px",
      rounded: "12px"
    };
    e.borderRadius !== "default" && t.style.setProperty(
      "--border-radius-override",
      r[e.borderRadius]
    );
    const n = {
      none: "0",
      light: "0.5",
      medium: "1",
      strong: "1.5"
    };
    e.shadowIntensity !== "medium" && t.style.setProperty(
      "--shadow-intensity",
      n[e.shadowIntensity]
    );
    const l = {
      none: "0ms",
      fast: "100ms",
      normal: "200ms",
      slow: "400ms"
    };
    e.animationSpeed !== "normal" && t.style.setProperty(
      "--animation-duration",
      l[e.animationSpeed]
    ), console.info(g + "Applied visual customizations:", e);
  }
  applyComponentVisibility() {
    const e = this.userCustomizations.components;
    Object.entries(e).forEach(([t, s]) => {
      const a = `hide-${t.replace(/([A-Z])/g, "-$1").toLowerCase().replace("show-", "")}`;
      s ? document.body.classList.remove(a) : document.body.classList.add(a);
    }), console.info(g + "Applied component visibility:", e);
  }
  applyHUDCustomizations() {
    const e = this.userCustomizations.hud, t = {
      small: "0.8",
      medium: "1",
      large: "1.2"
    };
    e.hudSize !== "medium" && document.documentElement.style.setProperty(
      "--hud-scale",
      t[e.hudSize]
    );
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
    ), a.classList.add(`position-${e.shortcutPosition}`)), console.info(g + "Applied HUD customizations:", e);
  }
  applyAdvancedCustomizations() {
    const e = this.userCustomizations.advanced, t = document.documentElement;
    e.customCSS && this.injectCustomCSS(e.customCSS), e.componentOverrides && Object.entries(e.componentOverrides).forEach(
      ([s, a]) => {
        Object.entries(a).forEach(([i, r]) => {
          t.style.setProperty(`--${s}-${i}`, r);
        });
      }
    ), e.colorOverrides && Object.entries(e.colorOverrides).forEach(([s, a]) => {
      t.style.setProperty(`--${s}`, a);
    }), console.info(g + "Applied advanced customizations:", e);
  }
  // =============================================================================
  // CUSTOMIZATION METHODS
  // =============================================================================
  setCustomization(e, t, s) {
    const a = this.getCategorySettingKey(e), i = game.settings.get(h, a);
    i[t] = s, game.settings.set(h, a, i), this.userCustomizations[e][t] = s, this.applySpecificCustomization(e, t, s), console.info(g + `Customization set: ${e}.${t} = ${s}`);
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
        const a = {
          small: "0.85",
          default: "1",
          large: "1.15",
          xl: "1.3"
        }[t];
        s.style.setProperty("--font-scale", a);
        break;
      case "iconSize":
        const i = { small: "0.8", default: "1", large: "1.2" }[t];
        s.style.setProperty("--icon-scale", i);
        break;
      case "spacing":
        const r = { tight: "0.75", default: "1", loose: "1.25" }[t];
        s.style.setProperty("--spacing-scale", r);
        break;
      case "animationSpeed":
        const n = {
          none: "0ms",
          fast: "100ms",
          normal: "200ms",
          slow: "400ms"
        }[t];
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
    console.groupCollapsed(g + `Applying preset: ${t.name}`), Object.entries(t.settings).forEach(([s, a]) => {
      game.settings.set(h, s, a);
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
    t.fontSize !== "default" && e.style.setProperty("--local-font-scale", "var(--font-scale, 1)"), t.spacing !== "default" && e.style.setProperty(
      "--local-spacing-scale",
      "var(--spacing-scale, 1)"
    );
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
      a && game.settings.set(h, a, s);
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
      const i = game.settings.settings.get(`${h}.${a}`);
      i && game.settings.set(h, a, i.default);
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
    return console.group(g + "UI Customization Debug"), console.info("Current Customizations:", this.userCustomizations), console.info("Available Presets:", this.getAvailablePresets()), console.info(
      "Active CSS Variables:",
      this.getActiveCustomizationVariables()
    ), console.info("Applied Classes:", this.getAppliedCustomizationClasses()), console.groupEnd(), {
      customizations: this.userCustomizations,
      presets: this.getAvailablePresets(),
      cssVariables: this.getActiveCustomizationVariables(),
      appliedClasses: this.getAppliedCustomizationClasses()
    };
  }
  getActiveCustomizationVariables() {
    var a;
    const e = (a = globalThis == null ? void 0 : globalThis.getComputedStyle) == null ? void 0 : a.call(globalThis, document.documentElement);
    if (!e)
      return {};
    const t = {};
    return [
      "--font-scale",
      "--icon-scale",
      "--spacing-scale",
      "--border-radius-override",
      "--shadow-intensity",
      "--animation-duration",
      "--hud-scale"
    ].forEach((i) => {
      const r = e.getPropertyValue(i);
      r && (t[i] = r.trim());
    }), t;
  }
  getAppliedCustomizationClasses() {
    return Array.from(document.body.classList).filter(
      (e) => e.startsWith("ui-") || e.startsWith("hide-") || e.startsWith("position-")
    );
  }
  getActiveCustomizationsForScope(e = "global") {
    return this.getActiveCustomizations();
  }
  getCustomizationClassesForScope(e = "global") {
    return this.getCustomizationClasses(e);
  }
}
Xe = new WeakSet(), ts = async function(e) {
  const t = await Promise.allSettled(
    e.map((a) => fetch(a, { method: "HEAD", cache: "no-store" }))
  ), s = [];
  return t.forEach((a, i) => {
    a.status === "fulfilled" && a.value.ok && s.push(e[i]);
  }), s;
};
class ha extends we {
  constructor(e, t = {}) {
    super({
      ...t,
      window: {
        title: "UI/HUD Customization"
      },
      position: {
        width: t.width ?? 600
      }
    }), this.uiCustomization = e, this.currentSettings = {};
  }
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        "anarchy-dialog",
        "ui-customization-dialog"
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: !0,
        resizable: !0
      },
      position: {
        height: "auto"
      }
    };
  }
  _configureRenderOptions(e) {
    super._configureRenderOptions(e), e.parts = {
      main: {
        template: y("dialog", "ui-customization.hbs"),
        scrollable: [".window-content"]
      }
    };
  }
  async _prepareContext(e) {
    const t = await super._prepareContext(e);
    return await this.uiCustomization.loadUserCustomizations(), foundry.utils.mergeObject(t, {
      categories: this._prepareCategories(),
      isGM: game.user.isGM,
      preview: {
        actor: game.user.character || game.actors.find((s) => s.isOwner) || game.actors.contents[0]
      }
    }), t;
  }
  _prepareCategories() {
    const e = this.uiCustomization.customizations, t = {};
    for (const [s, a] of Object.entries(e)) {
      const i = a.category || "general";
      t[i] || (t[i] = {
        id: i,
        label: game.i18n.localize(
          `ANARCHY.uiCustomization.categories.${i}`
        ),
        items: []
      }), t[i].items.push({
        key: s,
        ...a,
        value: this.uiCustomization.getCustomization(i, s) ?? a.default
      });
    }
    return Object.values(t);
  }
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e));
    const t = e instanceof jQuery ? e : $(e);
    t.find("input, select").on("change", (a) => this._onSettingChange(a)), t.find('button[data-action="reset"]').on("click", (a) => this._onReset(a)), t.find('button[data-action="save"]').on("click", (a) => this._onSave(a));
  }
  async _onSettingChange(e) {
  }
  async _onReset(e) {
    e.preventDefault(), await this.uiCustomization.resetCustomizations(), this.render();
  }
  async _onSave(e) {
    e.preventDefault();
    const t = new FormDataExtended(this.element.querySelector("form")).object;
    for (const [s, a] of Object.entries(t))
      ;
    await this.close();
  }
}
let ee = null;
function Ie() {
  var i, r, n, l;
  if (ee) return ee;
  const o = (i = globalThis == null ? void 0 : globalThis.foundry) == null ? void 0 : i.applications, e = (r = o == null ? void 0 : o.apps) == null ? void 0 : r.DocumentSheetConfig;
  if (e)
    return ee = e, ee;
  const t = (n = o == null ? void 0 : o.api) == null ? void 0 : n.DocumentSheetConfig;
  if (t)
    return ee = t, ee;
  const s = (l = o == null ? void 0 : o.documents) == null ? void 0 : l.DocumentSheetConfig;
  if (s)
    return ee = s, ee;
  const a = (globalThis == null ? void 0 : globalThis.DocumentSheetConfig) ?? null;
  return a && (ee = a), ee;
}
class Fe extends we {
  constructor({ title: e, message: t, buttons: s, width: a = 320 }) {
    super({
      window: {
        title: e
      },
      position: {
        width: a
      }
    }), this.message = t, this.buttons = s;
  }
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        "anarchy-dialog",
        "confirmation-dialog"
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: !0
      },
      position: {
        height: "auto"
      }
    };
  }
  async _prepareContext(e) {
    return {
      ...await super._prepareContext(e),
      message: this.message,
      buttons: this.buttons
    };
  }
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e)), (e instanceof jQuery ? e : $(e)).find("[data-action]").on("click", async (a) => {
      a.preventDefault();
      const i = a.currentTarget.dataset.action, r = this.buttons[i];
      r != null && r.callback && await r.callback(), await this.close();
    });
  }
}
k(Fe, "PARTS", {
  main: {
    template: y("dialog", "confirmation.hbs")
  }
});
class it {
  static async confirmDeleteItem(e, t = () => {
  }) {
    new Fe({
      title: game.i18n.localize(c.common.confirmation.deleteItem.title),
      message: game.i18n.format(
        c.common.confirmation.deleteItem.message,
        {
          name: e.name
        }
      ),
      buttons: {
        yes: {
          icon: "fa-solid fa-check",
          label: game.i18n.localize(c.common.yes),
          callback: t
        },
        no: {
          icon: "fa-solid fa-times",
          label: game.i18n.localize(c.common.no)
        }
      }
    }).render({ focus: !0 });
  }
  static async confirmDetachOwnerActor(e, t, s = () => {
  }) {
    new Fe({
      title: game.i18n.localize(c.common.confirmation.detachOwner.title),
      message: game.i18n.format(
        c.common.confirmation.detachOwner.message,
        {
          owner: e.name,
          owned: t.name
        }
      ),
      buttons: {
        yes: {
          icon: "fa-solid fa-link-slash",
          label: game.i18n.localize(c.common.yes),
          callback: s
        },
        no: {
          icon: "fa-solid fa-times",
          label: game.i18n.localize(c.common.no)
        }
      }
    }).render({ focus: !0 });
  }
  static async confirmAttachOrCopy(e, t, s = () => {
  }, a = () => {
  }) {
    new Fe({
      title: game.i18n.localize(c.common.confirmation.attachOrCopy.title),
      message: game.i18n.format(
        c.common.confirmation.attachOrCopy.message,
        {
          owner: e.name,
          owned: t.name
        }
      ),
      buttons: {
        attach: {
          icon: "fa-solid fa-link",
          label: game.i18n.localize(
            c.common.confirmation.attachOrCopy.attach
          ),
          callback: s
        },
        copy: {
          icon: "fa-solid fa-copy",
          label: game.i18n.localize(
            c.common.confirmation.attachOrCopy.copy
          ),
          callback: a
        },
        cancel: {
          icon: "fa-solid fa-times",
          label: game.i18n.localize(c.common.cancel)
        }
      },
      width: 400
    }).render({ focus: !0 });
  }
}
const Ze = class Ze extends we {
  static async selectActor(e, t, s = async (i) => {
  }, a = async () => {
  }) {
    new Ze(t, s, a, {
      title: e
    }).render({ focus: !0 });
  }
  constructor(e, t, s, a = {}) {
    super({
      ...a,
      window: {
        title: a.title
      }
    }), this.actors = e, this.onActorSelected = t, this.onCancel = s;
  }
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        game.system.anarchy.styles.selectCssClass(),
        "select-actor"
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        positioned: !0
      },
      position: {
        width: 320,
        height: "auto"
      },
      tag: "div"
      // or form if appropriate
    };
  }
  async _prepareContext(e) {
    return {
      ...await super._prepareContext(e),
      actors: this.actors
    };
  }
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e));
    const t = e instanceof jQuery ? e : $(e);
    t.find(".click-select-actor").on("click", (a) => this.onSelectActor(a)), t.find('[data-action="cancel"]').on("click", async (a) => {
      var i;
      a.preventDefault(), await ((i = this.onCancel) == null ? void 0 : i.call(this)), await this.close();
    });
  }
  async onSelectActor(e) {
    const t = $(e.currentTarget).attr("data-actor-id"), s = this.actors.find((a) => a.id == t);
    s && (this.onActorSelected(s), this.close());
  }
};
k(Ze, "PARTS", {
  main: {
    template: y("dialog", "select-actor.hbs"),
    scrollable: [".window-content"]
  }
});
let dt = Ze;
const { DocumentSheetV2: ga, HandlebarsApplicationMixin: pa } = foundry.applications.api;
class Je extends pa(
  ga
) {
  static get DEFAULT_OPTIONS() {
    return {
      classes: ["anarchy", "anarchy-app", "sheet"],
      window: {
        resizable: !0
      },
      tag: "form",
      form: {
        handler: Je.submit,
        submitOnChange: !0,
        closeOnSubmit: !1
      },
      tabs: [],
      customizationScope: "document"
    };
  }
  static async submit(e, t, s) {
    const { object: a } = this.document ? { object: this.document } : this;
    a && await a.update(s.object);
  }
  constructor(e, t = {}) {
    const s = {
      customizationScope: t.customizationScope ?? "document",
      ...t
    };
    e instanceof foundry.abstract.Document ? super({ document: e, ...s }) : super(e), this._tabsState = {};
  }
  async render(e, t) {
    return typeof e == "object" && t === void 0 ? super.render(e) : typeof e == "boolean" ? super.render({ ...t, force: e }) : super.render(t);
  }
  _configureRenderOptions(e) {
    super._configureRenderOptions(e), (!e.parts || e.parts.length === 0) && (e.parts = ["main"]);
  }
  async _prepareContext(e = {}) {
    const t = await this.getData(e) ?? {};
    return t.document = this.document, t;
  }
  async getData(e = {}) {
    return {};
  }
  async _renderFrame(e) {
    var s;
    const t = await super._renderFrame(e);
    return zs(t), Ls(
      t,
      ((s = this.options) == null ? void 0 : s.customizationScope) ?? this.constructor.name
    ), t;
  }
  _onRender(e, t) {
    super._onRender(e, t), this.activateListeners(this.element), this._bindTabs(this.element);
  }
  _bindTabs(e) {
    if (!(!this.options.tabs || !e))
      for (const t of this.options.tabs) {
        const s = e.querySelector(t.navSelector);
        if (!s) continue;
        e.querySelector(t.contentSelector), s.querySelectorAll("[data-tab]").forEach((i) => {
          i.addEventListener("click", (r) => {
            r.preventDefault(), r.stopPropagation();
            const n = i.dataset.tab;
            n && this._activateTab(t, n, e);
          });
        });
        const a = this._tabsState[t.navSelector] || t.initial;
        a && this._activateTab(t, a, e);
      }
  }
  _activateTab(e, t, s) {
    this._tabsState[e.navSelector] = t;
    const a = s.querySelector(e.navSelector), i = s.querySelector(e.contentSelector);
    a && a.querySelectorAll("[data-tab]").forEach((r) => {
      r.classList.toggle("active", r.dataset.tab === t);
    }), i && i.querySelectorAll(".tab").forEach((r) => {
      r.classList.toggle("active", r.dataset.tab === t);
    });
  }
  activateListeners(e) {
  }
}
class ss extends Je {
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: ["anarchy", "anarchy-app", "sheet", "actor"],
      customizationScope: "actor"
    };
  }
  /**
   * Alias for this.document to support legacy subclasses expecting 'this.actor'
   */
  get actor() {
    return this.document;
  }
  async _prepareContext(e = {}) {
    const t = await super._prepareContext(e);
    return t.actor = this.document, t;
  }
}
/**
 * Subclasses should override this with their actor template.
 */
k(ss, "PARTS", {
  main: {
    template: y("actor", "character.hbs"),
    scrollable: [".window-content"]
  }
});
class Pe extends ss {
  /** @override */
  static get DEFAULT_OPTIONS() {
    var t, s;
    const e = ((s = (t = game.system.anarchy) == null ? void 0 : t.styles) == null ? void 0 : s.selectCssClass()) ?? "style-anarchy-shadowrun";
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [...super.DEFAULT_OPTIONS.classes ?? [], e],
      position: {
        width: 600,
        height: 600
      },
      window: {
        ...super.DEFAULT_OPTIONS.window,
        resizable: !0
      },
      actions: {
        // Map data-action to methods if needed, or leave for event listeners
      },
      dragDrop: [{ dragSelector: ".item", dropSelector: null }],
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main"
        }
      ]
    };
  }
  // Shim for legacy subclasses accessing super.defaultOptions
  static get defaultOptions() {
    var t, s, a;
    const e = this.DEFAULT_OPTIONS;
    return {
      classes: e.classes,
      width: (t = e.position) == null ? void 0 : t.width,
      height: (s = e.position) == null ? void 0 : s.height,
      resizable: (a = e.window) == null ? void 0 : a.resizable,
      tabs: e.tabs,
      dragDrop: e.dragDrop,
      // Map other necessary legacy properties if needed
      scrollY: [".window-content"]
      // Common V1 default
    };
  }
  // Backwards compatibility for subclasses accessing .template
  // This is used by the base class _configureRenderOptions to set PARTS.main.template
  get template() {
    return y("actor", `${this.actor.type}.hbs`);
  }
  /**
   * Provide base data for templates. Subclasses override this to add data.
   * This is the termination point of the getData() chain - it does NOT call _prepareContext
   * to avoid infinite recursion.
   */
  async getData(e = {}) {
    return {
      document: this.document,
      editable: this.isEditable
    };
  }
  /**
   * Prepare data for the sheet.
   * Calls getData() through the inheritance chain, allowing subclasses to add data.
   */
  async _prepareContext(e = {}) {
    const t = await this.getData(e);
    try {
      return xs(this, t);
    } catch (s) {
      return console.error(
        `AnarchyActorSheet._prepareContext: Error preparing data for ${this.actor.name}`,
        s
      ), ui.notifications.error(
        `Failed to load actor sheet data for ${this.actor.name}. Please check console for details.`
      ), {
        ...t,
        items: {},
        anarchy: { value: 0, max: 0, scene: 0 },
        ownerActor: null,
        ownedActors: [],
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: "locked",
          classes: [
            "sheet",
            "actor",
            `actor-${this.actor.type || "character"}`
          ]
        },
        ENUMS: {},
        ANARCHY: c,
        system: this.actor.system || {}
      };
    }
  }
  async activateListeners(e) {
    var s, a;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e));
    const t = e instanceof jQuery ? e : $(e);
    (a = game.system.anarchy) != null && a.themeUtilities && game.system.anarchy.themeUtilities.applyThemeEnhancements(
      t[0],
      "actor"
    ), this._setupEventDelegation(t), this._enhanceAccessibility(t), t.find(".click-item-add").on("click", async (i) => {
      i.stopPropagation(), await this.createNewItem(this.getEventItemType(i));
    }), t.find(".click-item-edit").on("click", async (i) => {
      var r;
      i.stopPropagation(), (r = this.getEventItem(i)) == null || r.sheet.render(!0);
    }), t.find(".click-item-activate").on("click", async (i) => {
      i.stopPropagation();
      const r = this.getEventItem(i), n = r.system.inactive;
      await r.update({ "system.inactive": !n });
    }), t.find("a.click-matrix-connectionMode").on("click", async (i) => {
      i.stopPropagation(), await this.actor.nextConnectionMode(this.getEventItem(i));
    }), t.find(".click-item-delete").on("click", async (i) => {
      i.stopPropagation();
      const r = this.getEventItem(i);
      it.confirmDeleteItem(r, async () => {
        await this.actor.deleteEmbeddedDocuments("Item", [r.id]);
      });
    }), t.find(".click-favorite").on("click", async (i) => {
      i.stopPropagation(), this.onClickFavorite({
        skillId: $(i.currentTarget).attr("data-skill-id"),
        specialization: $(i.currentTarget).attr("data-specialization"),
        weaponId: $(i.currentTarget).attr("data-weapon-id"),
        attributeAction: $(i.currentTarget).attr("data-attributeAction"),
        isFavorite: $(i.currentTarget).attr("data-isFavorite")
      });
    }), t.find(".click-owner-actor-unlink").on("click", async (i) => {
      i.stopPropagation(), this.detachFromOwner(this.actor.getOwnerActor(), this.actor);
    }), t.find(".click-owned-actor-view").on("click", async (i) => {
      var r;
      i.stopPropagation(), (r = this.getEventOwnedActor(i)) == null || r.sheet.render(!0);
    }), t.find(".click-owned-actor-unlink").on("click", async (i) => {
      i.stopPropagation(), this.detachFromOwner(this.actor, this.getEventOwnedActor(i));
    }), t.find("a.click-checkbar-element").on("click", async (i) => {
      i.stopPropagation();
      const r = this.getEventItem(i), n = r ?? this.actor, l = this.getEventMonitorCode(i), d = l == "marks" ? $(i.currentTarget).closest(".anarchy-marks").attr("data-actor-id") : void 0;
      await n.switchMonitorCheck(
        l,
        this.getEventIndex(i),
        this.isEventChecked(i),
        d,
        r
      );
    }), t.find("a.click-add-mark-actor").on("click", async (i) => {
      i.stopPropagation(), this.onClickAddMark();
    }), t.find(".click-skill-roll").on("click", async (i) => {
      i.stopPropagation(), this.actor.rollSkill(
        this.getEventItem(i),
        this.getEventSkillSpecialization(i)
      );
    }), t.find(".click-roll-attribute").on("click", async (i) => {
      i.stopPropagation(), (this.getEventItem(i) ?? this.actor).rollAttribute(
        $(i.currentTarget).closest(".anarchy-attribute").attr("data-attribute")
      );
    }), t.find(".click-roll-attribute-action").on("click", async (i) => {
      i.stopPropagation(), this.actor.rollAttributeAction(this.getEventActionCode(i));
    }), t.find(".click-weapon-roll").on("click", async (i) => {
      i.stopPropagation(), this.actor.rollWeapon(this.getEventItem(i));
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
    const t = game.i18n.format(c.common.newName, {
      type: game.i18n.localize(c.itemType.singular[e])
    });
    await this.actor.createEmbeddedDocuments(
      "Item",
      [{ name: t, type: e }],
      {
        renderSheet: !0
      }
    );
  }
  async onClickFavorite(e) {
    const t = e.isFavorite != "true";
    e.skillId ? await this.actor.switchFavorite(
      t,
      m.itemType.skill,
      e.skillId,
      e.specialization
    ) : e.weaponId ? await this.actor.switchFavorite(
      t,
      m.itemType.weapon,
      e.weaponId
    ) : e.attributeAction ? await this.actor.switchFavorite(
      t,
      "attributeAction",
      e.attributeAction
    ) : console.warn("Favorite not supported", e);
  }
  detachFromOwner(e, t) {
    it.confirmDetachOwnerActor(e, t, async () => {
      await t.attachToOwnerActor(), this.render(!0);
    });
  }
  async _onDropActor(e, t) {
    const s = fromUuidSync(t.uuid);
    (s == null ? void 0 : s.id) != this.actor.id && it.confirmAttachOrCopy(
      this.actor,
      s,
      async () => await s.attachToOwnerActor(this.actor),
      async () => await s.attachToOwnerActor(this.actor, "copy")
    ), super._onDropActor(e, t);
  }
  async onClickAddMark() {
    if (this.actor.canReceiveMarks()) {
      const e = game.i18n.format(
        c.common.selection.actorSettingMarks,
        {
          name: this.actor.name
        }
      );
      await dt.selectActor(
        e,
        game.actors.filter(
          (t) => !this.actor.getActorMarks(t.id) && t.canSetMarks()
        ),
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
    t.addEventListener("click", this._handleDelegatedClick.bind(this), {
      passive: !1
    }), t.addEventListener("change", this._handleDelegatedChange.bind(this), {
      passive: !1
    }), (s = game.system.anarchy) != null && s.performanceOptimizer;
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
    } catch (r) {
      console.error(
        `AnarchyActorSheet: Error handling action '${s}'`,
        r
      ), ui.notifications.error(
        `Action failed: ${s}. Check console for details.`
      );
    } finally {
      const n = performance.now() - a;
      n > 100 && console.warn(
        `AnarchyActorSheet: Slow action '${s}' took ${n.toFixed(2)}ms`
      );
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
      console.error(
        `AnarchyActorSheet: Error handling change action '${s}'`,
        a
      );
    }
  }
  /**
   * Monitor event handling performance
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _monitorEventPerformance(e) {
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
        const l = i.dataset.action || ((n = i.className.match(/click-(\w+)/)) == null ? void 0 : n[1]) || "action";
        i.setAttribute("aria-label", `${l.replace("-", " ")} button`);
      }
    }), e.querySelectorAll(
      "input:not([aria-label]), select:not([aria-label])"
    ).forEach((i) => {
      var n;
      const r = (n = i.closest(".form-group")) == null ? void 0 : n.querySelector("label");
      r && !i.getAttribute("aria-label") && i.setAttribute("aria-label", r.textContent.trim());
    }), e.querySelectorAll(".anarchy-monitor").forEach((i) => {
      var n;
      i.setAttribute("role", "progressbar");
      const r = (n = i.querySelector(".monitor-label")) == null ? void 0 : n.textContent;
      r && i.setAttribute("aria-label", `${r} monitor`);
    });
  }
  /**
   * Enhance keyboard navigation
   * @param {HTMLElement} element - The sheet element
   * @private
   */
  _enhanceKeyboardNavigation(e) {
    e.querySelectorAll(
      '[class*="click-"]:not(button):not(a)'
    ).forEach((s) => {
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
    const t = e.querySelector(".sheet-body");
    t && !t.id && (t.id = "sheet-content");
    const s = e.querySelector(".sheet-tabs");
    s && !s.id && (s.id = "sheet-tabs");
    const a = document.createElement("div");
    a.className = "skip-links sr-only", a.innerHTML = `
      <button type="button" class="skip-link" data-target="sheet-content">Skip to main content</button>
      <button type="button" class="skip-link" data-target="sheet-tabs">Skip to navigation</button>
    `, a.querySelectorAll(".skip-link").forEach((i) => {
      i.addEventListener("click", (r) => {
        r.preventDefault(), r.stopPropagation();
        const n = i.dataset.target, l = e.querySelector(`#${n}`);
        l && (l.focus({ preventScroll: !1 }), l.scrollIntoView({ behavior: "smooth", block: "start" }));
      });
    }), e.insertBefore(a, e.firstChild);
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
class Re extends Pe {
  get template() {
    return y("actor", "character.hbs");
  }
  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 720,
        height: 700
      },
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main"
        }
      ]
    });
  }
  /** @deprecated Use DEFAULT_OPTIONS */
  static get defaultOptions() {
    return this.DEFAULT_OPTIONS;
  }
  async getData(e) {
    this.viewMode == null && (this.viewMode = !0);
    const t = await super.getData(e), s = this.actor.computeEssence();
    return foundry.utils.mergeObject(t, {
      essence: {
        value: s,
        adjust: this.actor.computeMalusEssence(s)
      },
      options: {
        viewMode: this.viewMode
      }
    });
  }
  toggleViewMode() {
    this.viewMode = !this.viewMode, this.render();
  }
  async activateListeners(e) {
    var s;
    const t = e instanceof jQuery ? e : $(e);
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, t)), t.find(".click-toggle-view-mode").on("click", async () => this.toggleViewMode()), t.find(".click-word-add").on("click", async (a) => {
      a.stopPropagation(), this.createNewWord(this.getEventWordType(a));
    }), t.find(".click-word-say").on("click", async (a) => {
      a.stopPropagation(), this.actor.sayWord(
        this.getEventWordType(a),
        this.getEventWordId(a)
      );
    }), t.find(".change-word-value").on("click", async (a) => {
      a.stopPropagation();
    }), t.find(".change-word-value").on("change", async (a) => {
      a.stopPropagation();
      const i = a.currentTarget.value;
      await this.actor.updateWord(
        this.getEventWordType(a),
        this.getEventWordId(a),
        i
      );
    }), t.find(".click-word-delete").on("click", async (a) => {
      a.stopPropagation(), this.actor.deleteWord(
        this.getEventWordType(a),
        this.getEventWordId(a)
      );
    }), t.find(".click-celebrity-roll").on("click", async (a) => {
      a.stopPropagation(), this.actor.rollCelebrity();
    });
  }
  createNewWord(e) {
    const t = game.i18n.localize(c.common.newEntry);
    this.actor.createWord(e, t);
  }
  getEventWordType(e) {
    return $(e.currentTarget).closest(".define-wordType").attr("data-word-type");
  }
  getEventWordId(e) {
    return $(e.currentTarget).closest(".define-wordType").attr("data-word-id");
  }
}
/** V2 PARTS - defines the template for this sheet */
k(Re, "PARTS", {
  main: {
    template: y("actor", "character.hbs"),
    scrollable: [".window-content"]
  }
});
class as extends Re {
  get template() {
    return y("actor", "character.hbs");
  }
  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 720,
        height: 700
      }
    });
  }
}
/** V2 PARTS - defines the template for this sheet */
k(as, "PARTS", {
  main: {
    template: y("actor", "character.hbs"),
    scrollable: [".window-content"]
  }
});
class is extends Re {
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        "anarchy-sheet-v2",
        "character"
      ],
      window: {
        ...super.DEFAULT_OPTIONS.window,
        title: "Character Sheet"
      },
      position: {
        width: 800,
        height: 700
      },
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "overview"
        }
      ]
    };
  }
  get title() {
    var e;
    return ((e = this.actor) == null ? void 0 : e.name) || "Character Sheet";
  }
}
k(is, "PARTS", {
  header: {
    template: y("actor", "v2", "parts", "header.hbs")
  },
  tabs: {
    template: y("actor", "v2", "parts", "tabs.hbs")
  },
  main: {
    template: y("actor", "v2", "character.hbs"),
    scrollable: [".sheet-body"]
  }
});
class os extends Re {
  get template() {
    return `${M}/actor/npc-sheet.hbs`;
  }
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550
      }
    });
  }
  getData(e) {
    let t = super.getData(e);
    return t.options.classes.push("npc-sheet"), t;
  }
}
/** V2 PARTS - defines the template for this sheet */
k(os, "PARTS", {
  main: {
    template: "systems/anarchy/templates/actor/npc-sheet.hbs",
    scrollable: [".window-content"]
  }
});
class rs extends Re {
  get template() {
    return `${M}/actor/character-tabbed.hbs`;
  }
  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 720,
        height: 700
      },
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main"
        }
      ]
    });
  }
  getData(e) {
    let t = super.getData(e);
    return t.options.classes.push("tabbed-sheet"), t;
  }
}
/** V2 PARTS - defines the template for this sheet */
k(rs, "PARTS", {
  main: {
    template: "systems/anarchy/templates/actor/character-tabbed.hbs",
    scrollable: [".window-content"]
  }
});
class ns extends Re {
  get template() {
    return y("actor", "character-enhanced.hbs");
  }
  /** @override */
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 800,
        height: 700
      }
    });
  }
  async getData(e) {
    var s;
    const t = await super.getData(e) ?? {};
    return t.flags = ((s = game.user.flags) == null ? void 0 : s[h]) ?? {}, t;
  }
  async activateListeners(e) {
    var i;
    const t = e instanceof jQuery ? e : $(e);
    await super.activateListeners(t);
    const s = t[0];
    s && ((i = game.system.anarchy) != null && i.uiCustomization) && game.system.anarchy.uiCustomization.applyCustomizationsToElement(
      s,
      "character-enhanced"
    );
    const a = this.actor.id;
    t.find(".click-section").on("click", async (r) => {
      const n = $(r.currentTarget).data("class"), l = t.find(`.${n}`);
      l.toggleClass("closed");
      const d = l.hasClass("closed") ? "closed" : null, f = String(n).replace(/^section-/, "");
      await game.user.setFlag(
        h,
        `${a}-section-${f}`,
        d
      );
    });
  }
  /**
   * Handlebars helper - returns 'closed' CSS class if section is collapsed.
   * Used as: {{actorTabClosed actor._id 'sectionName'}}
   */
  static actorTabClosed(e, t, s) {
    return Rt(e, t, s);
  }
  /**
   * Alias for actorTabClosed
   */
  static ifTabClosed(e, t, s) {
    return es(e, t, s);
  }
}
/** V2 PARTS - defines the template for this sheet */
k(ns, "PARTS", {
  main: {
    template: y("actor", "character-enhanced.hbs"),
    scrollable: [".window-content"]
  }
});
class cs extends Pe {
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550
      }
    });
  }
  async getData(e) {
    const t = super.getData ? await super.getData(e) : {};
    return foundry.utils.mergeObject({}, t, { inplace: !1 });
  }
  async activateListeners(e) {
    var t;
    await ((t = super.activateListeners) == null ? void 0 : t.call(this, e));
  }
}
/** V2 PARTS - defines the template for this sheet */
k(cs, "PARTS", {
  main: {
    template: y("actor", "vehicle.hbs"),
    scrollable: [".window-content"]
  }
});
class ls extends Pe {
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550
      }
    });
  }
  async getData(e) {
    const t = super.getData ? await super.getData(e) : {};
    return foundry.utils.mergeObject({}, t, { inplace: !1 });
  }
  async activateListeners(e) {
    var t;
    await ((t = super.activateListeners) == null ? void 0 : t.call(this, e));
  }
}
/** V2 PARTS - defines the template for this sheet */
k(ls, "PARTS", {
  main: {
    template: y("actor", "device.hbs"),
    scrollable: [".window-content"]
  }
});
class ms extends Pe {
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550
      }
    });
  }
  async getData(e) {
    const t = super.getData ? await super.getData(e) : {};
    return foundry.utils.mergeObject({}, t, { inplace: !1 });
  }
  async activateListeners(e) {
    var t;
    await ((t = super.activateListeners) == null ? void 0 : t.call(this, e));
  }
}
/** V2 PARTS - defines the template for this sheet */
k(ms, "PARTS", {
  main: {
    template: y("actor", "sprite.hbs"),
    scrollable: [".window-content"]
  }
});
class us extends Pe {
  static get DEFAULT_OPTIONS() {
    return foundry.utils.mergeObject(super.DEFAULT_OPTIONS, {
      position: {
        width: 450,
        height: 550
      }
    });
  }
  async getData(e) {
    const t = super.getData ? await super.getData(e) : {};
    return foundry.utils.mergeObject({}, t, { inplace: !1 });
  }
  async activateListeners(e) {
    var t;
    await ((t = super.activateListeners) == null ? void 0 : t.call(this, e));
  }
}
/** V2 PARTS - defines the template for this sheet */
k(us, "PARTS", {
  main: {
    template: y("actor", "ic.hbs"),
    scrollable: [".window-content"]
  }
});
class ds extends Je {
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: ["anarchy", "anarchy-app", "sheet", "item"],
      customizationScope: "item"
    };
  }
  /**
   * Alias for this.document to support legacy subclasses expecting 'this.item'
   */
  get item() {
    return this.document;
  }
  async _prepareContext(e = {}) {
    const t = await super._prepareContext(e);
    return t.item = this.document, t;
  }
}
/**
 * Subclasses should override this with their item template.
 */
k(ds, "PARTS", {
  main: {
    template: y("item", "item.hbs"),
    scrollable: [".window-content"]
  }
});
class ue extends ds {
  /** @override */
  static get DEFAULT_OPTIONS() {
    return {
      ...super.DEFAULT_OPTIONS,
      classes: [
        ...super.DEFAULT_OPTIONS.classes ?? [],
        game.system.anarchy.styles.selectCssClass(),
        "item-sheet"
      ],
      dragDrop: [{ dragSelector: ".item", dropSelector: null }],
      actions: {},
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main"
        }
      ]
    };
  }
  // Shim for legacy subclasses accessing super.defaultOptions
  static get defaultOptions() {
    var t, s;
    const e = this.DEFAULT_OPTIONS;
    return {
      classes: e.classes,
      dragDrop: e.dragDrop,
      tabs: e.tabs,
      width: (t = e.position) == null ? void 0 : t.width,
      height: (s = e.position) == null ? void 0 : s.height,
      scrollY: [".window-content"]
    };
  }
  get title() {
    return game.i18n.localize(c.itemType.singular[this.item.type]) + ": " + this.item.name;
  }
  /**
   * Configure render options to include the template as a part.
   */
  _configureRenderOptions(e) {
    super._configureRenderOptions(e);
    const t = [
      "contact",
      "cyberdeck",
      "gear",
      "metatype",
      "quality",
      "shadowamp",
      "skill",
      "weapon"
    ];
    let s;
    !this.item.type || !t.includes(this.item.type) ? (console.warn(
      `BaseItemSheet: Unknown item type '${this.item.type}', falling back to gear template`
    ), s = y("item", "gear.hbs")) : s = y("item", `${this.item.type}.hbs`), e.parts = {
      main: {
        template: s,
        scrollable: [".window-content"]
      }
    };
  }
  // Backwards compatibility for subclasses
  get template() {
    var e, t;
    return ((t = (e = this.options.parts) == null ? void 0 : e.main) == null ? void 0 : t.template) || y("item", "gear.hbs");
  }
  /**
   * Prepare data for the sheet.
   * Replaces getData() as the primary V2 method.
   */
  async _prepareContext(e = {}) {
    const t = await super._prepareContext(e);
    return Ps(this, t);
  }
  async activateListeners(e) {
    var s, a;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e));
    const t = e instanceof jQuery ? e : $(e);
    (a = game.system.anarchy) != null && a.themeUtilities && game.system.anarchy.themeUtilities.applyThemeEnhancements(
      t[0],
      "item"
    ), t.find("a.click-checkbar-element").on("click", async (i) => await this.onClickMonitor(i)), t.find(".click-modifier-add").on("click", async (i) => await this.item.createModifier()), t.find(".click-modifier-delete").on(
      "click",
      async (i) => await this.item.deleteModifier(this.getEventModifierId(i))
    ), t.find(".input-modifier-value").on(
      "change",
      async (i) => await this.item.changeModifierValue(
        this.getEventModifierId(i),
        i.currentTarget.value
      )
    ), t.find(".input-modifier-condition").on(
      "change",
      async (i) => await this.item.changeModifierCondition(
        this.getEventModifierId(i),
        i.currentTarget.value
      )
    ), t.find(".select-modifier-change").on(
      "change",
      async (i) => await this.item.changeModifierSelection(
        this.getEventModifierId(i),
        this.getEventModifierSelect(i),
        i.currentTarget.value
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
        this.item
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
class ya extends ue {
}
class fa extends ue {
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e)), (e instanceof jQuery ? e : $(e)).find("a.click-matrix-connectionMode").on("click", async (a) => {
      a.preventDefault(), await this.item.nextConnectionMode();
    });
  }
}
class Aa extends ue {
}
class ba extends ue {
}
class Ca extends ue {
}
class wa extends ue {
}
class va extends ue {
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e)), (e instanceof jQuery ? e : $(e)).find(".select-skill-code").on("change", async (a) => {
      const i = a.currentTarget.value, r = St.prepareSkill(i);
      r && await this.object.update(r);
    });
  }
}
class ka extends ue {
  async getData(e) {
    const t = super.getData ? await super.getData(e) : {}, s = foundry.utils.mergeObject(t, {
      hasDrain: this.item.hasDrain,
      hasConvergence: this.item.hasConvergence
    });
    return s.ENUMS = foundry.utils.mergeObject(
      { defenses: L.getDefenses() },
      s.ENUMS
    ), s;
  }
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e)), (e instanceof jQuery ? e : $(e)).find(".select-weapon-skill").on("change", async (a) => {
      const i = a.currentTarget.value, r = game.system.anarchy.skills.get(i);
      r && await this.object.update(
        { "system.defense": r.defense },
        { render: !1 }
      );
    });
  }
}
const hs = "enable-legacy-ui", _e = [
  {
    class: is,
    types: ["character"],
    makeDefault: !0,
    label: "ANARCHY.actor.characterSheetV2"
  },
  {
    class: cs,
    types: ["vehicle"],
    makeDefault: !0,
    label: "ANARCHY.actor.vehicleSheet"
  },
  {
    class: ls,
    types: ["device"],
    makeDefault: !0,
    label: "ANARCHY.actor.deviceSheet"
  },
  {
    class: ms,
    types: ["sprite"],
    makeDefault: !0,
    label: "ANARCHY.actor.spriteSheet"
  },
  {
    class: us,
    types: ["ic"],
    makeDefault: !0,
    label: "ANARCHY.actor.icSheet"
  }
], Sa = [
  {
    class: as,
    types: ["character"],
    makeDefault: !1,
    label: "ANARCHY.actor.characterSheet"
  },
  {
    class: os,
    types: ["character"],
    makeDefault: !1,
    label: "ANARCHY.actor.characterNPCSheet"
  },
  {
    class: rs,
    types: ["character"],
    makeDefault: !1,
    label: "ANARCHY.actor.characterTabbedSheet"
  },
  {
    class: ns,
    types: ["character"],
    makeDefault: !1,
    label: "ANARCHY.actor.characterEnhancedSheet"
  }
], Be = [
  { class: ya, types: ["contact"], makeDefault: !0 },
  { class: fa, types: ["cyberdeck"], makeDefault: !0 },
  { class: Aa, types: ["gear"], makeDefault: !0 },
  { class: ba, types: ["metatype"], makeDefault: !0 },
  { class: Ca, types: ["quality"], makeDefault: !0 },
  { class: wa, types: ["shadowamp"], makeDefault: !0 },
  { class: va, types: ["skill"], makeDefault: !0 },
  { class: ka, types: ["weapon"], makeDefault: !0 }
], gs = /* @__PURE__ */ new Map(), ps = /* @__PURE__ */ new Map();
_e.forEach((o) => {
  o.types.forEach(
    (e) => gs.set(e, o.class)
  );
});
Be.forEach((o) => {
  o.types.forEach(
    (e) => ps.set(e, o.class)
  );
});
function be(o) {
  return `${h}.${o.name}`;
}
function ht(o) {
  return gs.get(o);
}
function Ra(o) {
  return ps.get(o);
}
function Ne(o) {
  const e = ht(o);
  return e ? be(e) : void 0;
}
function De(o) {
  const e = Ra(o);
  return e ? be(e) : void 0;
}
function gt() {
  try {
    return !!game.settings.get(h, hs);
  } catch {
    return !1;
  }
}
class Ma {
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
      g + "UI Customization commands registered. Use anarchyUI.listCommands() to see available commands."
    );
  }
  // =============================================================================
  // COMMAND IMPLEMENTATIONS
  // =============================================================================
  openCustomizationDialog() {
    return ha.show(this.uiCustomization);
  }
  setFontSize(e) {
    const t = ["small", "default", "large", "xl"];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid font size. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("visual", "fontSize", e), console.info(g + `Font size set to: ${e}`);
  }
  setIconSize(e) {
    const t = ["small", "default", "large"];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid icon size. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("visual", "iconSize", e), console.info(g + `Icon size set to: ${e}`);
  }
  setSpacing(e) {
    const t = ["tight", "default", "loose"];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid spacing. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("visual", "spacing", e), console.info(g + `Spacing set to: ${e}`);
  }
  setAnimationSpeed(e) {
    const t = ["none", "fast", "normal", "slow"];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid animation speed. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("visual", "animationSpeed", e), console.info(g + `Animation speed set to: ${e}`);
  }
  toggleComponent(e) {
    const s = !this.uiCustomization.getCustomization(
      "components",
      e
    );
    this.uiCustomization.setCustomization("components", e, s), console.info(
      g + `${e} ${s ? "enabled" : "disabled"}`
    );
  }
  applyPreset(e) {
    try {
      this.uiCustomization.applyPreset(e), console.info(g + `Applied preset: ${e}`);
    } catch (t) {
      console.error(g + `Failed to apply preset: ${t.message}`);
    }
  }
  moveGMManager(e) {
    const t = [
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right"
    ];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid position. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("hud", "gmManagerPosition", e), console.info(g + `GM Manager moved to: ${e}`);
  }
  moveShortcuts(e) {
    const t = ["left", "right", "top", "bottom"];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid position. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("hud", "shortcutPosition", e), console.info(g + `Shortcuts moved to: ${e}`);
  }
  setHUDSize(e) {
    const t = ["small", "medium", "large"];
    if (!t.includes(e)) {
      console.error(
        g + `Invalid HUD size. Valid options: ${t.join(", ")}`
      );
      return;
    }
    this.uiCustomization.setCustomization("hud", "hudSize", e), console.info(g + `HUD size set to: ${e}`);
  }
  injectCustomCSS(e) {
    this.uiCustomization.setCustomization("advanced", "customCSS", e), console.info(g + "Custom CSS injected");
  }
  exportSettings() {
    const e = this.uiCustomization.exportCustomizations();
    return console.info(g + "Customization data:", e), e;
  }
  importSettings(e) {
    try {
      this.uiCustomization.importCustomizations(e), console.info(g + "Settings imported successfully");
    } catch (t) {
      console.error(g + `Import failed: ${t.message}`);
    }
  }
  resetAll() {
    this.uiCustomization.resetAllCustomizations(), console.info(g + "All customizations reset");
  }
  debugCustomizations() {
    return this.uiCustomization.debugCustomizations();
  }
  setThemeCustomization(e, t, s) {
    this.uiCustomization.styles.setThemeCustomization(e, t, s), console.info(
      g + `Theme customization set: ${e}.${t} = ${s}`
    );
  }
  previewTheme(e) {
    this.uiCustomization.styles.previewTheme(e), console.info(g + `Previewing theme: ${e}`);
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
    return console.group(g + "Available UI Customization Commands:"), e.forEach((t) => console.info(t)), console.groupEnd(), e;
  }
  setBackground(e) {
    const t = document.documentElement, a = (globalThis.__anarchyBackgroundCandidates ?? []).find((r) => r.endsWith(e)) ?? e;
    if (!a) {
      console.error(g + "No background match");
      return;
    }
    const i = `repeat center/50% url("${a}")`;
    t.style.setProperty("--anarchy-background", i), console.info(g + "Background set:", a);
  }
  // =============================================================================
  // SHEET MANAGEMENT AND DIAGNOSTICS
  // =============================================================================
  async fixSheets() {
    if (!game.user.isGM) {
      console.error(g + "fixSheets() requires GM permissions");
      return;
    }
    console.group(g + "Fixing world sheets to use Anarchy defaults");
    let e = 0, t = 0;
    try {
      const s = [];
      for (const i of game.actors.contents) {
        const r = i.getFlag("core", "sheetClass"), n = Ne(i.type);
        n && (!r || String(r).startsWith("core.") || r !== n) && (s.push(i.update({ "flags.core.sheetClass": n })), e++, console.info(`  Actor: ${i.name} (${i.type}) → ${n}`));
      }
      const a = [];
      for (const i of game.items.contents) {
        const r = i.getFlag("core", "sheetClass"), n = De(i.type);
        n && (!r || String(r).startsWith("core.") || r !== n) && (a.push(i.update({ "flags.core.sheetClass": n })), t++, console.info(`  Item: ${i.name} (${i.type}) → ${n}`));
      }
      await Promise.allSettled([...s, ...a]), console.info(
        g + `Fixed ${e} actors and ${t} items`
      ), ui.notifications.info(
        `Fixed ${e} actors and ${t} items to use Anarchy sheets`
      );
    } catch (s) {
      console.error(g + "Error fixing sheets:", s), ui.notifications.error(
        "Failed to fix some sheets. Check console for details."
      );
    }
    return console.groupEnd(), { actorCount: e, itemCount: t };
  }
  debugSheets() {
    var l, d, f, _, F, O;
    console.group(g + "Sheet Registration Debug");
    const e = Ie();
    if (!e) {
      console.error("DocumentSheetConfig not available"), console.groupEnd();
      return;
    }
    const t = ((l = CONFIG.Actor) == null ? void 0 : l.documentClass) || Actor, s = ((d = CONFIG.Item) == null ? void 0 : d.documentClass) || Item;
    console.group("Registered Actor Sheets:");
    const a = e.getSheetClasses(t);
    Object.entries(a).forEach(([C, H]) => {
      console.info(`${C}:`, H);
    }), console.groupEnd(), console.group("Registered Item Sheets:");
    const i = e.getSheetClasses(s);
    Object.entries(i).forEach(([C, H]) => {
      console.info(`${C}:`, H);
    }), console.groupEnd(), console.group("Sample World Documents (first 10):");
    const r = game.actors.contents.slice(0, 10);
    r.forEach((C) => {
      var de, ve;
      const H = C.getFlag("core", "sheetClass") || "default", Q = ((ve = (de = C.sheet) == null ? void 0 : de.constructor) == null ? void 0 : ve.name) || "unknown";
      console.info(
        `Actor: ${C.name} (${C.type}) | Flag: ${H} | Constructor: ${Q}`
      );
    });
    const n = game.items.contents.slice(0, 10);
    return n.forEach((C) => {
      var de, ve;
      const H = C.getFlag("core", "sheetClass") || "default", Q = ((ve = (de = C.sheet) == null ? void 0 : de.constructor) == null ? void 0 : ve.name) || "unknown";
      console.info(
        `Item: ${C.name} (${C.type}) | Flag: ${H} | Constructor: ${Q}`
      );
    }), console.groupEnd(), console.group("System Status:"), console.info("Anarchy System:", game.system.anarchy), console.info("Proxy Detected:", (f = game.system.anarchy) == null ? void 0 : f.proxyDetected), console.info("Sheets Registered:", (_ = game.system.anarchy) == null ? void 0 : _.sheetsRegistered), console.info("Legacy UI Enabled:", gt()), console.info(
      "Active Actor Defaults:",
      Object.fromEntries(
        _e.flatMap(
          (C) => C.types.map((H) => [
            H,
            be(C.class)
          ])
        )
      )
    ), console.info(
      "Active Item Defaults:",
      Object.fromEntries(
        Be.flatMap(
          (C) => C.types.map((H) => [
            H,
            be(C.class)
          ])
        )
      )
    ), console.info("Settings:"), console.info(
      "  anarchy-first-mode:",
      game.settings.get("anarchy", "anarchy-first-mode")
    ), console.info(
      "  allow-core-fallback:",
      game.settings.get("anarchy", "allow-core-fallback")
    ), console.info(
      "  prefer-core-sheets:",
      game.settings.get("anarchy", "prefer-core-sheets")
    ), console.groupEnd(), console.groupEnd(), {
      actorSheets: a,
      itemSheets: i,
      sampleActors: r.map((C) => {
        var H, Q;
        return {
          name: C.name,
          type: C.type,
          sheetFlag: C.getFlag("core", "sheetClass"),
          sheetConstructor: (Q = (H = C.sheet) == null ? void 0 : H.constructor) == null ? void 0 : Q.name
        };
      }),
      sampleItems: n.map((C) => {
        var H, Q;
        return {
          name: C.name,
          type: C.type,
          sheetFlag: C.getFlag("core", "sheetClass"),
          sheetConstructor: (Q = (H = C.sheet) == null ? void 0 : H.constructor) == null ? void 0 : Q.name
        };
      }),
      systemStatus: {
        proxyDetected: (F = game.system.anarchy) == null ? void 0 : F.proxyDetected,
        sheetsRegistered: (O = game.system.anarchy) == null ? void 0 : O.sheetsRegistered,
        settings: {
          anarchyFirstMode: game.settings.get("anarchy", "anarchy-first-mode"),
          allowCoreFallback: game.settings.get(
            "anarchy",
            "allow-core-fallback"
          ),
          preferCoreSheets: game.settings.get("anarchy", "prefer-core-sheets")
        }
      }
    };
  }
}
const Ke = "glitch", Oe = "risk", Ft = "reroll", Vt = "rerollRemoved", Ta = "removed", qe = `${Se}/style/danger-point.webp`, Ue = `${Se}/style/anarchy-point.webp`, oe = class oe {
  static init() {
    CONFIG.Dice.terms[Ve.DENOMINATION] = Ve, CONFIG.Dice.terms[Ge.DENOMINATION] = Ge, Hooks.once(
      "diceSoNiceReady",
      (e) => oe.diceSoNiceReady(e)
    ), Hooks.once("ready", () => oe.onReady());
  }
  static onReady() {
    var e;
    oe.COLORSETS = oe.loadColorsets(), (e = game.modules.get("dice-so-nice")) != null && e.active && game.settings.get("core", "noCanvas") && ui.notifications.warn(
      "Dice So Nice! will not display dice due to Foundry option 'Disable Game Canvas' "
    );
  }
  static loadColorsets() {
    return {
      [Ft]: {
        name: Ft,
        description: game.i18n.localize(c.common.roll.rollTheme.reroll),
        category: ye
      },
      [Ta]: {
        name: Oe,
        description: game.i18n.localize(c.common.roll.rollTheme.removed),
        category: ye
      },
      [Vt]: {
        name: Vt,
        description: game.i18n.localize(
          c.common.roll.rollTheme.rerollRemoved
        ),
        category: ye
      },
      [Ke]: {
        name: Ke,
        description: game.i18n.localize(c.common.roll.rollTheme.glitch),
        category: ye,
        foreground: "white",
        background: "#5c0a5c",
        outline: "none",
        edge: "none",
        texture: "poison",
        material: "metal"
      },
      [Oe]: {
        name: Oe,
        description: game.i18n.localize(
          c.common.roll.rollTheme.anarchyRisk
        ),
        category: ye,
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
    oe.dice3d = e, game.settings.set(
      "dice-so-nice",
      "enabledSimultaneousRollForMessage",
      !1
    ), e.addSystem({ id: h, name: ye }), Object.values(oe.COLORSETS).forEach(
      (t) => e.addColorset(t)
    ), e.addDicePreset(Ve.diceSoNiceData()), e.addDicePreset(Ge.diceSoNiceData());
  }
  static img(e) {
    return `<img src="${e}" />`;
  }
};
k(oe, "dice3d");
let Ce = oe;
class Ve extends foundry.dice.terms.Die {
  constructor(e) {
    e.faces = 6, super(e);
  }
  /** @override */
  getResultLabel(e) {
    switch (e.result) {
      case "1":
        return Ce.img(qe);
    }
    return e.result.toString();
  }
  static diceSoNiceData() {
    return {
      type: "dg",
      labels: [qe, "2", "3", "4", "5", "6"],
      colorset: Ke,
      system: h
    };
  }
}
/** @override */
k(Ve, "DENOMINATION", "g");
class Ge extends foundry.dice.terms.Die {
  constructor(e) {
    e.faces = 6, super(e);
  }
  /** @override */
  getResultLabel(e) {
    switch (e.result) {
      case "1":
        return Ce.img(qe);
      case "5":
        return Ce.img(Ue);
      case "6":
        return Ce.img(Ue);
    }
    return e.result.toString();
  }
  static diceSoNiceData() {
    return {
      type: "dr",
      labels: [qe, "2", "3", "4", Ue, Ue],
      colorset: Oe,
      system: h
    };
  }
}
k(Ge, "DENOMINATION", "r");
const pe = {}, Ea = {
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
class xe {
  static init() {
    Hooks.once("ready", () => xe.onReady());
  }
  static onReady() {
    Object.entries(c.common.roll.rollTheme).forEach((e) => {
      pe[e[0]] = game.i18n.localize(e[1]);
    });
  }
  /**
   * @param {*} param : { pool: 1, reroll: 0, risk: 0, rerollForced: 0, target: 5 }
   */
  constructor(e) {
    this.param = e, this.param.pool = Math.max(this.param.pool ?? 0, 0), this.param.reroll = Math.max(this.param.reroll ?? 0, 0), this.param.rerollForced = Math.abs(this.param.rerollForced ?? 0), this.param.glitch = Math.max(this.param.glitch ?? 0, 0), this.param.risk = Math.max(this.param.risk ?? 0, 0), this.param.edge = Math.max(this.param.edge ?? 0, 0), this.param.target = this.param.edge > 0 ? 4 : this.param.target ?? 5, foundry.utils.mergeObject(this, Ea);
  }
  async evaluate() {
    await this.rollPool(), await this.rollRerolls(), await this.rollRerollForced(), await this.rollGlitchDice(), await this.rollAnarchyRisk();
  }
  async rollPool() {
    this.subrolls.pool = new Roll(
      `${this.param.pool}d6cs>=${this.param.target}[${pe.dicePool}]`
    ), await this.subrolls.pool.evaluate(), this.total = this.subrolls.pool.total;
  }
  async rollRerolls() {
    const e = Math.min(this.param.pool - this.total, this.param.reroll);
    e > 0 && (this.subrolls.reroll = new Roll(
      `${e}d6cs>=${this.param.target}[${pe.reroll}]`
    ), await this.subrolls.reroll.evaluate(), this.total += this.subrolls.reroll.total);
  }
  async rollRerollForced() {
    const e = Math.min(this.total, this.param.rerollForced);
    e > 0 && (this.subrolls.removed = new Roll(
      `-${e}d1cf=1[${pe.removed}]`
    ), await this.subrolls.removed.evaluate(), this.subrolls.rerollForced = new Roll(
      `${e}d6cs>=${this.param.target}[${pe.rerollRemoved}]`
    ), await this.subrolls.rerollForced.evaluate(), this.total -= e, this.total += this.subrolls.rerollForced.total);
  }
  async rollGlitchDice() {
    this.param.glitch > 0 && (this.subrolls.glitch = new Roll(
      `${this.param.glitch}d6cf=1[${pe.glitch}]`
    ), await this.subrolls.glitch.evaluate(), this.subrolls.glitch.dice[0].options.appearance = {
      colorset: Ke
    }, this.glitch = this.subrolls.glitch.terms[0].results.filter(
      (e) => e.result == 1
    ).length, this.glitchOutcome = this.glitch > 0 ? "glitch" : "nothing", this.totalGlitch += this.glitch);
  }
  async rollAnarchyRisk() {
    this.param.risk > 0 && (this.subrolls.risk = new Roll(
      `${this.param.risk}drcs>=5[${pe.anarchyRisk}]`
    ), await this.subrolls.risk.evaluate(), this.subrolls.risk.dice[0].options.appearance = {
      colorset: Oe
    }, this.riskGlitch = this.subrolls.risk.terms[0].results.filter(
      (e) => e.result == 1
    ).length, this.riskProwess += this.subrolls.risk.terms[0].results.filter(
      (e) => e.result >= 5
    ).length, this.subrolls.risk.total > 0 && this.total++, this.riskOutcome = this.riskProwess > 0 ? "prowess" : this.riskGlitch > 0 ? "glitch" : "nothing", this.totalGlitch += this.riskGlitch);
  }
  async toMessage(e, t) {
    return t = foundry.utils.mergeObject(t ?? {}, { create: !0 }), await this.toGroupedRoll().toMessage(e, t);
  }
  toGroupedRoll() {
    let e = 1, t = [];
    return this._addRoll(t, this.subrolls.pool), this._addRoll(t, this.subrolls.reroll), this._addRoll(t, this.subrolls.removed), this._addRoll(t, this.subrolls.rerollForced), this._addRoll(t, this.subrolls.risk), this._addRoll(t, this.subrolls.glitch), t.forEach((s) => s.dice[0].options.rollOrder = e++), Roll.fromTerms([foundry.dice.terms.PoolTerm.fromRolls(t)]);
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
const ot = "systemMigrationVersion";
class Z {
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
    const t = [];
    for (const a of game.actors.contents) {
      const i = e(a.items);
      i.length > 0 && t.push(
        a.updateEmbeddedDocuments("Item", i)
      );
    }
    await Promise.all(t);
    const s = e(game.items);
    s.length > 0 && await Item.updateDocuments(s);
  }
}
class Ha extends Z {
  get version() {
    return "0.3.1";
  }
  get code() {
    return "move-words-in-objects";
  }
  async migrate() {
    await Promise.all(
      game.actors.contents.map(
        (e) => e.update({
          "system.keywords": this._createWordObject(e.system.keywords),
          "system.cues": this._createWordObject(e.system.cues),
          "system.dispositions": this._createWordObject(
            e.system.dispositions
          )
        })
      )
    );
  }
  _createWordObject(e) {
    return b.reindexIds(
      (e ?? []).map((t) => this._keywordToObject(t))
    );
  }
  _keywordToObject(e) {
    return e instanceof String ? { word: e } : e;
  }
}
class Na extends Z {
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
    await this.applyItemsUpdates(
      (s) => s.filter(e).map(t)
    );
  }
}
class Da extends Z {
  get version() {
    return "0.3.14";
  }
  get code() {
    return "migrate-skill-drain-convergence";
  }
  async migrate() {
    const e = ke.filter((l) => l.hasDrain).map(
      (l) => l.code
    ), t = (l) => l.type == m.itemType.skill && e.includes(l.system.code), s = (l) => ({ _id: l.id, "system.hasDrain": !0 }), a = ke.filter(
      (l) => l.hasConvergence
    ).map((l) => l.code), i = (l) => l.type == m.itemType.skill && a.includes(l.system.code), r = (l) => ({ _id: l.id, "system.hasConvergence": !0 }), n = (l) => l.filter(t).map(s).concat(l.filter(i).map(r));
    await this.applyItemsUpdates(n);
  }
}
class Ia extends Z {
  get version() {
    return "0.4.0";
  }
  get code() {
    return "migrate-select-weapon-defense";
  }
  async migrate() {
    const e = (s) => ke.find((a) => a.defense && a.code == s.system.skill), t = (s) => {
      var a;
      return {
        _id: s.id,
        "system.defense": L.fixedDefenseCode(
          (a = e(s)) == null ? void 0 : a.defense
        )
      };
    };
    await this.applyItemsUpdates(
      (s) => s.filter((a) => a.isWeapon()).filter(e).map(t)
    );
  }
}
class _a extends Z {
  get version() {
    return "0.5.0";
  }
  get code() {
    return "base-resistance-is-zero";
  }
  async migrate() {
    await Promise.all(
      game.actors.contents.map(
        (e) => e.update(this._resistanceUpdates(e))
      )
    );
  }
  _resistanceUpdates(e) {
    const t = {};
    return Object.entries(e.system.monitors).forEach((s) => {
      s[1].resistance && (t[`system.monitors.${s[0]}.resistance`] = 0);
    }), t;
  }
}
class Oa extends Z {
  get version() {
    return "0.6.0";
  }
  get code() {
    return "migrate-skill-social";
  }
  async migrate() {
    const e = ke.filter((a) => a.isSocial).map(
      (a) => a.code
    ), t = (a) => a.type == m.itemTypeskill && e.includes(a.system.code), s = (a) => ({ _id: a.id, "system.isSocial": !0 });
    await this.applyItemsUpdates(
      (a) => a.filter(t).map(s)
    );
  }
}
class Ya extends Z {
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
    function a(r, n, l) {
      s.push(
        `<li> ${r}: ${n.group}/${n.effect}/${n.subCategory} : ${n.category}/${n.value} ${n.condition} => ${l.category}/${l.value} ${l.condition}</li>`
      );
    }
    const i = {};
    return e.system.modifiers.forEach((r) => i[r.id] = duplicate(r)), Object.values(i).filter((r) => this.isDefenseModifier(r)).forEach((r) => {
      const n = duplicate(r);
      let l = Object.values(i).filter(
        (d) => this.isCorrespondingActionModifier(d, r)
      );
      switch (l.length) {
        case 0: {
          r.category = P.rollType.attributeAction, a("Changed category", n, r);
          break;
        }
        case 1: {
          const d = l[0];
          foundry.utils.mergeObject(
            d,
            {
              value: Math.max(r.value, d.value),
              condition: d.condition ? d.condition + (r.condition ?? "") : r.condition
            },
            { overwrite: !0 }
          ), delete i[r.id], a("Merged with existing", r, d);
          break;
        }
        default: {
          delete i[r.id], a("Removed", r, {
            category: "-",
            value: "-",
            condition: "-"
          });
          break;
        }
      }
    }), s.length > 0 && t.push(`<li> ${e.actor ? e.actor.name : "-standalone-"} Item ${e.name} modifiers changed:
        <ul>${s.reduce(b.joiner())}</ul>
        </li>`), { _id: e.id, "system.modifiers": Object.values(i) };
  }
}
class xa extends Z {
  get version() {
    return "11.1.9";
  }
  get code() {
    return "migrate-vehicle-handling";
  }
  async migrate() {
    await Promise.all(
      game.actors.filter((e) => e.isVehicle()).map((e) => e._migrateHandlingToAttribute())
    );
  }
}
class Pa extends Z {
  get version() {
    return "11.1.12";
  }
  get code() {
    return "migrate-back-words";
  }
  async migrate() {
    await Promise.all(
      game.actors.contents.map(
        (e) => e.update({
          "system.keywords": this._migrateBackWords(e.system.keywords),
          "system.cues": this._migrateBackWords(e.system.cues),
          "system.dispositions": this._migrateBackWords(
            e.system.dispositions
          )
        })
      )
    );
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
class za extends Z {
  get version() {
    return "11.1.16";
  }
  get code() {
    return "migrate-skills-attributes";
  }
  async migrate() {
    await this.applyItemsUpdates(
      (e) => e.filter((t) => t.type == m.itemType.skill).filter((t) => t.system.attribute == "" || t.system.code == "").map((t) => ({
        _id: t.id,
        "system.attribute": "",
        "system.code": m.attributes.knowledge
      }))
    );
  }
}
class La extends Z {
  get version() {
    return "12.0.1";
  }
  get code() {
    return "migrate-chatmessage-flags-messagedata";
  }
  async migrate() {
    await Promise.all(
      game.messages.map(async (e) => {
        const t = e.getFlag(G, me);
        t && await e.setFlag(G, me, JSON.parse(t));
      })
    );
  }
}
class Ua extends Z {
  get version() {
    return "12.0.4";
  }
  get code() {
    return "migrate-weapon-drain";
  }
  async migrate() {
    await this.applyItemsUpdates(
      (e) => e.filter((t) => t.type == m.itemType.weapon).filter((t) => t.hasDrain).map((t) => ({
        _id: t.id,
        "system.drain": 1
      }))
    );
  }
}
class $a {
  constructor() {
    le.register(v.DECLARE_MIGRATIONS), Hooks.once(
      v.DECLARE_MIGRATIONS,
      (e) => e(
        new Ha(),
        new Na(),
        new Da(),
        new Ia(),
        new _a(),
        new Oa(),
        new Ya(),
        new xa(),
        new Pa(),
        new za(),
        new La(),
        new Ua()
      )
    ), game.settings.register(h, ot, {
      name: "System Migration Version",
      scope: "world",
      config: !1,
      type: String,
      default: "0.0.0"
    });
  }
  async migrate() {
    const e = game.settings.get(
      h,
      ot
    );
    if (foundry.utils.isNewerVersion(game.system.version, e)) {
      let t = [];
      if (Hooks.callAll(
        v.DECLARE_MIGRATIONS,
        (...s) => t = t.concat(
          s.filter(
            (a) => foundry.utils.isNewerVersion(a.version, e)
          )
        )
      ), Hooks.off(v.DECLARE_MIGRATIONS, () => {
      }), t.length > 0) {
        t.sort(
          (s, a) => foundry.utils.isNewerVersion(s.version, a.version) ? 1 : foundry.utils.isNewerVersion(a.version, s.version) ? -1 : 0
        );
        for (const s of t)
          ui.notifications.info(
            `Executing migration ${s.code}: version ${e} is lower than ${s.version}`
          ), await s.migrate();
        ui.notifications.info(
          `Migrations done, version will change to ${game.system.version}`
        );
      }
      await game.settings.set(
        h,
        ot,
        game.system.version
      );
    }
  }
}
const Fa = y(
  "chat",
  "celebrity-roll.hbs"
), Va = y(
  "dialog",
  "roll-celebrite.hbs"
), Ga = y(
  "dialog",
  "roll-celebrite-title.hbs"
), Ye = class Ye extends we {
  static async create(e) {
    const t = {
      actor: e,
      celebrity: {
        labelkey: c.actor.celebrity,
        value: e.getCelebrityValue()
      },
      modifiers: foundry.utils.mergeObject(
        { labelkey: c.item.tabs.modifiers },
        w.computeModifiers(e.items, "other", "celebrity")
      ),
      other: {
        labelkey: c.common.roll.modifiers.other,
        value: 0
      },
      ANARCHY: c
    }, s = await q(
      Ga,
      t
    );
    new Ye(t, { title: s }).render({ focus: !0 });
  }
  constructor(e, t = {}) {
    super({
      classes: [
        ...t.classes ?? [],
        game.system.anarchy.styles.selectCssClass(),
        "anarchy-dialog",
        "roll-dialog"
      ],
      window: {
        title: t.title,
        positioned: !0
      },
      position: {
        width: 400,
        height: "auto"
      }
    }), this.roll = e;
  }
  async _prepareContext(e) {
    return {
      ...await super._prepareContext(e),
      ...this.roll
    };
  }
  async activateListeners(e) {
    var s;
    await ((s = super.activateListeners) == null ? void 0 : s.call(this, e));
    const t = e instanceof jQuery ? e : $(e);
    t.find(".input-celebrity-other").on("input", (a) => {
      this.roll.other.value = Number.parseInt(a.currentTarget.value) ?? 0;
    }), t.find('[data-action="roll"]').on("click", async (a) => {
      a.preventDefault(), await Ye.doRoll(this.roll), await this.close();
    }), t.find('[data-action="cancel"]').on("click", async (a) => {
      a.preventDefault(), await this.close();
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
      ANARCHY: c
    }, i = new Roll(`${s}d6cs>=5`);
    i.evaluateSync();
    const r = await q(
      Fa,
      a
    );
    await i.toMessage({ flavor: r });
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
};
k(Ye, "PARTS", {
  main: {
    template: Va
  }
});
let pt = Ye;
const ja = y("chat", "actor-drain.hbs"), Wa = y("chat", "actor-say-word.hbs");
class Ba extends I {
  static get initiative() {
    return I.initiative + " + max(@attributes.agility.value, @attributes.logic.value)";
  }
  hasOwnAnarchy() {
    return this.hasPlayerOwner;
  }
  prepareDerivedData() {
    this.system.monitors.physical.max = this._getMonitorMax(
      m.attributes.strength
    ), this.system.monitors.stun.max = this._getMonitorMax(
      m.attributes.willpower
    ), super.prepareDerivedData(), this.system.ignoreWounds = w.sumModifiers(
      this.items,
      "other",
      "ignoreWounds"
    );
  }
  computePhysicalState() {
    const e = Math.max(
      this.system.monitors.physical.max,
      this.system.monitors.stun.max
    ) + this.system.monitors.armor.max, t = this.system.monitors.physical.value == this.system.monitors.physical.max, s = this.system.monitors.stun.max == this.system.monitors.stun.value, a = t || s ? e : Math.max(
      this.system.monitors.physical.value,
      this.system.monitors.stun.value
    ) + this.system.monitors.armor.value;
    return {
      max: e,
      value: e - a
    };
  }
  computeEssence() {
    const e = game.system.anarchy.hooks.callHookMethod(
      v.PROVIDE_BASE_ESSENCE,
      this
    ), t = b.sumValues(
      this.items.filter((a) => a.type == "shadowamp").map((a) => Math.abs(a.system.essence))
    ), s = w.sumModifiers(
      this.items,
      "other",
      "essenceAdjustment"
    );
    return e + s - Math.max(0, t);
  }
  computeMalusEssence(e = void 0) {
    return game.system.anarchy.hooks.callHookMethod(
      v.PROVIDE_MALUS_ESSENCE,
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
        if (t == At.matrix.path)
          return await u.setCheckbar(
            this,
            m.monitors.stun,
            s
          );
      }
    } : {
      hasMatrix: !1,
      logic: m.attributes.logic,
      firewall: void 0,
      monitor: kt,
      overflow: void 0
    };
  }
  isMatrixConnected(e = void 0) {
    e = Ee.resolveConnectionMode(e);
    let t;
    const s = this.getCyberdeck();
    return s != null && s.isConnected() && (t = s.getConnectionMode()), !t && this.isEmerged() && (t = this.system.connectionMode), e == null ? Ee.resolveConnectionMode(t) != W.connectionMode.disconnected : Ee.resolveConnectionMode(t) == e;
  }
  async nextConnectionMode(e) {
    if (e)
      await e.nextConnectionMode();
    else if (this.isEmerged()) {
      const t = Ee.getNextConnectionMode(
        this.system.connectionMode
      );
      await this.update({ "system.connectionMode": t });
    }
  }
  prepareMatrixMonitor() {
    const e = this.getCyberdeck();
    e && (e.system.monitors.matrix.maxBonus = w.sumMonitorModifiers(
      this.items,
      "matrix",
      "max"
    ), e.system.monitors.matrix.resistanceBonus = w.sumMonitorModifiers(this.items, "matrix", "resistance"));
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
    this._mutateWords(
      e,
      (s) => s.concat([{ word: t, audio: "" }])
    );
  }
  async sayWord(e, t) {
    var a, i;
    const s = (a = this.getWord(e, t)) == null ? void 0 : a.word;
    s && ChatMessage.create({
      speaker: { alias: ((i = this.token) == null ? void 0 : i.name) ?? this.name },
      content: await q(Wa, {
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
    this._mutateWords(
      e,
      (s) => s.filter((a) => a.id != t)
    );
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
        c.actor.counters.anarchy,
        e,
        s + t
      );
      const a = Math.min(t, e), i = e - a;
      a > 0 && u.addCounter(
        this,
        m.monitors.sceneAnarchy,
        -a
      ), this.hasPlayerOwner ? (await game.system.anarchy.gmAnarchy.actorGivesAnarchyToGM(this, e), u.addCounter(this, m.monitors.anarchy, -i)) : i > 0 && super.spendAnarchy(i);
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
        `${e}dgcf=1[${game.i18n.localize(c.common.roll.rollTheme.drain)}]`
      );
      t.evaluateSync(), await this.sufferDrain(t.total);
      const s = await q(ja, {
        ANARCHY: c,
        actor: this,
        drain: t.total,
        options: {
          classes: game.system.anarchy.styles.selectCssClass()
        }
      });
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
    await pt.create(this);
  }
}
const Ka = [
  m.attributes.system,
  m.attributes.firewall
];
class qa extends I {
  static get defaultIcon() {
    return `${B}/actors/cctv-camera.svg`;
  }
  static get initiative() {
    return I.initiative + " + @attributes.system.value";
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
    return Ka;
  }
}
const Qa = [
  m.attributes.autopilot,
  m.attributes.handling,
  m.attributes.firewall,
  m.attributes.system
];
class Xa extends I {
  static get defaultIcon() {
    return `${B}/shadowamps/drone.svg`;
  }
  static get initiative() {
    return I.initiative + " + max(@attributes.system.value, @attributes.autopilot.value)";
  }
  prepareDerivedData() {
    this.system.monitors.matrix.max = this._getMonitorMax(
      m.attributes.system
    ), super.prepareDerivedData();
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
    return Qa;
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
    const t = j.getSelectedActors();
    ae.checkOutOfRange(
      c.user.selectedTokenActors,
      t.length,
      0,
      1
    );
    const s = j.getPlayerActor(game.user), a = this.getOwnerActor(), i = [...t, s, a].filter(
      (r) => r == null ? void 0 : r.testUserPermission(game.user, this.getRightToDefend())
    ).find((r) => r == null ? void 0 : r.canPilotVehicle());
    if (i)
      return await i.rollDefense(e);
    ui.notifications.warn(
      game.i18n.localize(c.common.errors.noValidPilotForVehicle, {
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
class Za extends ie {
  static get defaultIcon() {
    return `${B}/vitruvian-man.svg`;
  }
  async onCreateItem(e, t) {
    var s;
    (s = this.parent) == null || s.removeOtherMetatype(this);
  }
}
class Ja extends ie {
  static get defaultIcon() {
    return `${B}/shadowamps/cyberdeck.svg`;
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
      case W.connectionMode.virtual:
        return m.monitors.physical;
      case W.connectionMode.augmented:
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
    const e = Ee.getNextConnectionMode(
      this.system.connectionMode
    );
    await this.update({ "system.connectionMode": e });
  }
}
class ei extends ie {
  static get defaultIcon() {
    return `${B}/contacts/contact.svg`;
  }
}
class ti extends ie {
  static get defaultIcon() {
    return `${B}/gear/gear.svg`;
  }
}
class si extends ie {
  static get defaultIcon() {
    return `${B}/quality-positive.svg`;
  }
}
class ai extends ie {
  static get defaultIcon() {
    return `${B}/shadowamps/other.svg`;
  }
}
const je = "convergences", ii = `${h}.${je}`, Gt = "GMConvergence.rollConvergence", oi = y("app", "gm-convergence.hbs"), jt = y(
  "app",
  "gm-convergence-actors.hbs"
);
class ri {
  constructor() {
    game.settings.register(h, je, {
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
    await ne([
      oi,
      jt
    ]), this.convergences = game.settings.get(h, je).filter((e) => game.actors.get(e.actorId)), await J.register(Gt, {
      callback: (e) => this.rollConvergence(e.actorId, e.convergence),
      condition: (e) => e.isGM
    });
  }
  getConvergences() {
    return this.convergences;
  }
  async rollConvergence(e, t) {
    J.call(Gt, {
      actorId: e,
      convergence: t
    }) || await this._gmRollConvergence(t, e);
  }
  async _gmRollConvergence(e, t) {
    const s = game.actors.get(t), a = new Roll(
      `${e}dgcf=1[${game.i18n.localize(c.common.roll.rollTheme.convergence)}]`
    );
    await a.evaluate(), this.addConvergence(s, a.total), a.toMessage(
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
    s || (s = { actorId: e.id }, this.convergences.push(s)), s.convergence = t, this.convergences = this.convergences.filter((a) => a.convergence > 0), game.settings.set(h, je, this.convergences);
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-convergence-bar"), await this._rebuild();
  }
  async onUpdateSetting(e, t, s, a) {
    game.user.isGM && e.key == ii && await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".gm-convergence-content").replaceWith(await this._renderBar()), this.toolbar.off("click", "a.click-checkbar-element"), this.toolbar.on("click", "a.click-checkbar-element", async (e) => {
      e.preventDefault(), await this._onClickConvergence(e);
    });
  }
  async _onClickConvergence(e) {
    $(e.currentTarget).closest(".checkbar-root").attr("data-monitor-code");
    const t = $(e.currentTarget).closest(".actor-convergence").attr("data-actor-id"), s = Number.parseInt($(e.currentTarget).attr("data-index")), a = $(e.currentTarget).attr("data-checked") == "true", i = u.newValue(s, a), r = game.actors.get(t);
    await this.setActorConvergence(r, i);
  }
  async _renderBar() {
    const e = {
      convergences: this.convergences.map((s) => ({
        actor: game.actors.get(s.actorId),
        convergence: s.convergence
      }))
    };
    return await q(
      jt,
      e
    );
  }
}
class Wt extends Combat {
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
    const s = e.map(
      (i) => this.combatants.find((r) => r.id == i)
    ), a = b.classify(
      s,
      (i) => i.actor.type
    );
    Object.entries(a).forEach(async ([i, r]) => {
      const n = game.system.anarchy.actorClasses[i], l = r.map((f) => f.id), d = foundry.utils.mergeObject(
        { formula: n.initiative },
        t ?? {}
      );
      await super.rollInitiative(l, d);
    });
  }
  async onCreateCombatant(e, t, s) {
    var a;
    j.isUniqueConnectedGM() && await ((a = e.actor) == null ? void 0 : a.onEnterCombat());
  }
  async onDeleteCombatant(e, t, s) {
    j.isUniqueConnectedGM() && await this._leaveCombat(e);
  }
  async onDeleteCombat(e, t) {
    j.isUniqueConnectedGM() && this.combatants.forEach(async (s) => await this._leaveCombat(s));
  }
  async _leaveCombat(e) {
    var t;
    return await ((t = e.actor) == null ? void 0 : t.onLeaveCombat());
  }
}
const ni = [m.attributes.logic, m.attributes.edge];
class ci extends I {
  static get defaultIcon() {
    return `${B}/misc/rss.svg`;
  }
  static get initiative() {
    return I.initiative + " + @attributes.logic.value";
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
    return ni;
  }
  isEmerged() {
    return !0;
  }
}
const li = [m.attributes.logic, m.attributes.firewall];
class mi extends I {
  static get defaultIcon() {
    return `${B}/misc/rub-el-hizb.svg`;
  }
  static get initiative() {
    return I.initiative + " + @attributes.logic.value";
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
    return li;
  }
}
const Bt = y("token", "hud-shortcuts.hbs");
class di {
  constructor() {
    Hooks.on(
      "renderTokenHUD",
      async (e, t, s) => await this.addExtensionHud(e, t, s._id)
    ), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await ne([Bt]);
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
    }, a = await q(Bt, s), i = $(a), r = i.find(".anarchy-shortcuts-list");
    return this._toggleHudActive(i, r), i.find(".anarchy-shortcuts-toggle").click((n) => {
      this._toggleHudActive(i, r);
    }), r.find(".anarchy-shortcut-button").click((n) => {
      const l = $(n.currentTarget).closest(".anarchy-shortcuts-list").attr("data-token-id"), d = $(n.currentTarget).attr("data-shortcut-type"), f = $(n.currentTarget).attr("data-shortcut-id");
      this.onClickShortcutButton(l, d, f);
    }), i;
  }
  onClickShortcutButton(e, t, s) {
    const a = canvas.tokens.get(e), i = a == null ? void 0 : a.actor;
    if (i) {
      const r = i == null ? void 0 : i.getShortcut(t, s);
      r == null || r.callback(a);
    } else
      ui.notifications.warn(
        game.i18.localize(c.common.errors.noTokenActor)
      );
  }
  _toggleHudActive(e, t) {
    e.toggleClass("active"), b.showControlWhen(t, e.hasClass("active"));
  }
}
class hi {
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
const gi = y("chat", "anarchy-roll.hbs"), pi = [
  y("chat", "risk-outcome.hbs"),
  y("chat", "edge-reroll-button.hbs"),
  y("chat", "anarchy-roll-title.hbs"),
  y("chat", "parts", "actor-image.hbs"),
  y("chat", "parts", "generic-parameter.hbs"),
  y("chat", "parts", "result-mode-weapon.hbs")
];
class x {
  constructor() {
    Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await ne(b.distinct(pi));
  }
  async roll(e) {
    var t, s;
    e.parameters.forEach((a) => {
      a.isUsed != null && (a.used = a.isUsed(a));
    }), e.param = game.system.anarchy.rollParameters.compute(e.parameters), e.param.edge = e.parameters.find(
      (a) => a.category == S.edge && a.used
    ) ? 1 : 0, e.param.anarchy = e.parameters.filter(
      (a) => {
        var i;
        return ((i = a.flags) == null ? void 0 : i.isAnarchy) && a.used;
      }
    ).length, e.options.canUseEdge = e.options.canUseEdge && !e.param.edge, e.param.social = {
      credibility: ((t = e.parameters.find((a) => a.code == "credibility" && a.used)) == null ? void 0 : t.value) ?? 0,
      rumor: ((s = e.parameters.find((a) => a.code == "rumor" && a.used)) == null ? void 0 : s.value) ?? 0
    }, await e.actor.spendAnarchy(e.param.anarchy), await e.actor.spendEdge(e.param.edge), await e.actor.spendCredibility(e.param.social.credibility), await e.actor.spendRumor(e.param.social.rumor), await this._roll(e);
  }
  async edgeReroll(e) {
    e = x.inflateAnarchyRoll(e), e.options.canUseEdge = !1, await e.actor.spendEdge(1), e.param[S.convergence] = void 0, e.param[S.drain] = void 0, await this._roll(e);
  }
  async _roll(e) {
    e.roll = new xe(e.param), await e.roll.evaluate(), await this._displayRollInChat(e), await e.actor.rollDrain(e.param.drain), await e.actor.rollConvergence(e.param.convergence), await game.system.anarchy.combatManager.manageCombat(e);
  }
  async _displayRollInChat(e) {
    e.options.classes = [game.system.anarchy.styles.selectCssClass()];
    const t = {};
    N.prepareFlag(
      t,
      me,
      x.deflateAnarchyRoll(e)
    ), N.prepareFlag(t, yt, e.options.canUseEdge), N.prepareFlag(
      t,
      ft,
      N.messageActorRights(e.actor)
    );
    const s = await q(
      gi,
      e
    ), a = await e.roll.toMessage({
      flavor: s,
      flags: t
    });
    e.chatMessageId = a.id;
  }
  static deflateAnarchyRoll(e) {
    return e && (e = foundry.utils.deepClone(e), e.actor = x._reduceToId(e.actor), e.skill = x._reduceToId(e.skill), e.skill = x._reduceToId(e.skill), e.weapon = x._reduceToId(e.weapon), e.item = x._reduceToId(e.item), e.parameters = x._reduceParameters(e.parameters), e.attackData = void 0, e.attributes = void 0, e.ANARCHY = void 0, e.ENUMS = void 0), e;
  }
  static inflateAnarchyRoll(e) {
    return e && (e = foundry.utils.deepClone(e), e.actor = x._reloadActorFromId(e.actor, e.tokenId), e.skill = x._reloadItemFromId(e.actor, e.skill), e.item = x._reloadItemFromId(e.actor, e.item), e.weapon = x._reloadItemFromId(e.actor, e.weapon), e.attributes = e.actor.getUsableAttributes(e.item), e.parameters = x._reloadParameters(e, e.parameters), e.ANARCHY = c, e.ENUMS = D.getEnums()), e;
  }
  static _reduceToId(e) {
    return e ? { id: e.id } : void 0;
  }
  static _reloadActorFromId(e, t) {
    const s = hi.getToken(t);
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
      const i = s.find((r) => r.code == a.code) ?? {};
      return foundry.utils.mergeObject(a, i, { overwrite: !1 });
    });
  }
}
const yi = y("combat", "inform-defender.hbs");
class fi {
  async manageCombat(e) {
    var t;
    switch (e.mode) {
      case P.rollType.weapon:
        if (!e.targeting || e.roll.total == 0)
          return;
        (t = e.targeting.targetedTokenIds) == null || t.forEach(
          async (s) => await this.onAttack(s, e)
        );
        break;
      case P.rollType.defense:
        await this.onDefense(e);
        break;
      case P.rollType.defensePilot:
        await this.onDefensePilot(e);
    }
  }
  async onAttack(e, t) {
    var a;
    const s = (a = t.targeting) == null ? void 0 : a.attackerTokenId;
    e && s && await this.displayDefenseChoice(e, t);
  }
  async displayDefenseChoice(e, t, s = void 0, a = void 0) {
    var O, C, H;
    const i = (O = t.targeting) == null ? void 0 : O.attackerTokenId, r = this.getTokenActor(e), n = t.roll.total, l = (s == null ? void 0 : s.roll.total) ?? (a == null ? void 0 : a.roll.total) ?? 0, d = {
      attackerTokenId: i,
      defenderTokenId: e,
      attackRoll: x.deflateAnarchyRoll(t),
      defenseRoll: x.deflateAnarchyRoll(s),
      defensePilotRoll: x.deflateAnarchyRoll(a),
      attack: {
        isHit: n > 0 && n >= l,
        defense: t.weapon.getDefense(),
        pilotCanDefend: r == null ? void 0 : r.isVehicle(),
        success: Math.max(0, n - l),
        damage: t.weapon.getDamage()
      }
    }, f = [
      (C = d.defenseRoll) == null ? void 0 : C.chatMessageId,
      (H = d.defensePilotRoll) == null ? void 0 : H.chatMessageId,
      d.attackRoll.chatMessageId
    ], _ = {};
    N.prepareFlag(
      _,
      ft,
      N.messageActorRights(r, r.getRightToDefend())
    ), N.prepareFlag(
      _,
      nt,
      f.find((Q) => Q != null)
    );
    const F = await ChatMessage.create({
      user: game.user.id,
      whisper: r.getAllowedUserIds(r.getRightToDefend()),
      content: await q(
        yi,
        foundry.utils.mergeObject(
          {
            ANARCHY: c,
            options: { classes: [game.system.anarchy.styles.selectCssClass()] },
            attacker: this.getTokenActor(d.attackerTokenId),
            defender: r,
            weapon: d.attackRoll.weapon
          },
          d
        )
      ),
      flags: _
    });
    d.choiceChatMessageId = F.id, F.setFlag(G, me, d);
  }
  async onDefense(e) {
    this._preventObsoleteChoices(e);
    const t = x.inflateAnarchyRoll(e.attackRoll);
    await this.displayDefenseChoice(e.tokenId, t, e);
  }
  async onDefensePilot(e) {
    this._preventObsoleteChoices(e);
    const t = x.inflateAnarchyRoll(e.attackRoll);
    await this.displayDefenseChoice(e.tokenId, t, e);
  }
  _preventObsoleteChoices(e) {
    const t = game.messages.get(
      e.choiceChatMessageId
    );
    if (t) {
      const s = t.getFlag(G, nt) ?? "", a = game.messages.get(s);
      a == null || a.setFlag(G, yt, !1), N.removeChatMessage(e.choiceChatMessageId);
    }
  }
  async onClickDefendAttack(e) {
    await this.getTokenActor(e.defenderTokenId).rollDefense(e);
  }
  async onClickPilotDefendAttack(e) {
    await this.getTokenActor(e.defenderTokenId).rollPilotDefense(e);
  }
  async onClickApplyAttackDamage(e) {
    const t = this.getTokenActor(e.attackerTokenId), s = this.getTokenActor(e.defenderTokenId), a = x.inflateAnarchyRoll(e.attackRoll);
    await E.sufferDamage(
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
const Kt = { BASE_URL: "/systems/anarchy/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 };
function Ai() {
  try {
    const o = typeof import.meta < "u" && import.meta && Kt ? Kt : {}, e = (o.VITE_ENABLE_INTEGRATIONS ?? "").toString().toLowerCase();
    if (e === "1" || e === "true" || (o.VITE_SYSTEM_ID ?? "").toString().trim() === "ninjanarchy") return !0;
  } catch {
  }
  return !1;
}
async function bi() {
  Ai() && console.log(g + `Loading integrations for ${h}`);
}
const { ApplicationV2: Ci, HandlebarsApplicationMixin: wi } = foundry.applications.api;
class ys extends wi(Ci) {
  static get DEFAULT_OPTIONS() {
    return {
      tag: "form",
      classes: ["anarchy-framework", "window-app"],
      // 'window-app' ensures Foundry window styling
      window: {
        frame: !0,
        positioned: !0,
        resizable: !0,
        controls: []
        // To be populated by subclasses
      },
      position: {
        width: 800,
        height: 700
      },
      actions: {
        // Standard framework actions (collapse, expand, etc.)
      }
    };
  }
  async _prepareContext(e) {
    return {
      title: this.title,
      isEditable: this.isEditable,
      // Debug/Knob data placeholders
      debug: !0
    };
  }
}
k(ys, "PARTS", {
  // Standard shell layout: Header -> Body (Scrollable) -> Footer (Optional)
  header: { template: "systems/anarchy/templates/framework/header.hbs" },
  body: {
    template: "systems/anarchy/templates/framework/body.hbs",
    scrollable: [".framework-body"]
  }
});
class fs extends ys {
  static get DEFAULT_OPTIONS() {
    return {
      id: "anarchy-style-guide",
      title: "Cybermythic UI Framework",
      position: {
        width: 600,
        height: 800
      }
    };
  }
  async _prepareContext(e) {
    return {
      ...await super._prepareContext(e),
      actor: {
        name: "Framework Debug",
        img: "icons/svg/mystery-man.svg"
      }
    };
  }
}
const vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StyleGuideApp: fs
}, Symbol.toStringTag, { value: "Module" }));
class ki {
  static init() {
    Hooks.on("renderSidebarTab", (e, t) => {
      e.id !== "settings" || !game.settings.get(h, "developer-mode") || this._injectSidebarButton(t);
    }), Hooks.on("renderDocumentCreateDialog", (e, t, s) => {
      var n, l;
      if (game.settings.get(h, "developer-mode")) return;
      const i = (l = (n = t[0]) == null ? void 0 : n.querySelector) == null ? void 0 : l.call(n, 'select[name="type"]');
      if (!i) return;
      const r = i.querySelector(
        'option[value="shell-test"]'
      );
      r && r.remove();
    }), Hooks.once("ready", () => {
      game.settings.get(h, "developer-mode") && this._registerShellTestSheet();
    });
  }
  static async _registerShellTestSheet() {
    var e;
    try {
      const { ShellTestSheet: t } = await import("./shell-test-sheet-BbSn5H9Y.mjs"), s = Ie(), a = ((e = CONFIG.Actor) == null ? void 0 : e.documentClass) || Actor;
      s.registerSheet(a, h, t, {
        label: "🧪 Shell Test (Framework Preview)",
        types: ["shell-test"],
        makeDefault: !0
      }), console.log(
        g + "Registered ShellTestSheet for shell-test actors (Developer Mode)"
      );
    } catch (t) {
      console.warn(g + "Failed to register ShellTestSheet", t);
    }
  }
  static _injectSidebarButton(e) {
    const t = e.find("#settings-game"), s = $(`
      <button class="anarchy-dev-mode-btn">
        <i class="fas fa-terminal"></i> Anarchy Shell
      </button>
    `);
    s.on("click", (a) => {
      a.preventDefault(), new fs().render(!0);
    }), t.append(s);
  }
}
class Mt {
  static start() {
    const e = new Mt();
    Hooks.once("init", async () => await e.onInit());
  }
  async onInit() {
    var e, t, s, a;
    console.log(
      `${g} Initializing ${game.system.title} | Version: ${game.system.version} | Foundry: ${game.version}`
    ), game.system.anarchy = this, this.remoteCall = new J(), this.actorClasses = {
      character: Ba,
      vehicle: Xa,
      device: qa,
      sprite: ci,
      ic: mi
    }, this.itemClasses = {
      contact: ei,
      cyberdeck: Ja,
      gear: ti,
      metatype: Za,
      quality: si,
      shadowamp: ai,
      skill: St,
      weapon: ce
    }, this.hooks = new le(), ki.init(), this.styles = new ma(), this.themeUtilities = new ua(this.styles), this.uiCustomization = new da(this.styles), this.uiCustomizationCommands = new Ma(
      this.uiCustomization
    ), this.handlebarsManager = new We(), this.gmAnarchy = new Is(), this.gmConvergence = new ri(), D.init(), this.skills = new ta(), this.modifiers = new w(), this.rollParameters = new Ae(), this.rollManager = new x(), this.AnarchyRoll = xe, this.hudShortcuts = new di(), this.combatManager = new fi(), CONFIG.ANARCHY = c, CONFIG.Combat.documentClass = Wt, CONFIG.Combat.initiative = { formula: "2d6" }, CONFIG.Actor.documentClass = I, CONFIG.Item.documentClass = ie;
    try {
      this.proxyDetected = !!window.__ANARCHY_PROXY__;
    } catch {
      this.proxyDetected = !1;
    }
    game.system.anarchy.proxyDetected = this.proxyDetected;
    try {
      game.settings.register(h, "anarchy-first-mode", {
        scope: "world",
        config: !0,
        name: game.i18n.localize(c.settings.anarchyFirstMode.name),
        hint: game.i18n.localize(c.settings.anarchyFirstMode.hint),
        default: !0,
        type: Boolean
      }), game.settings.register(h, "allow-core-fallback", {
        scope: "world",
        config: !0,
        name: game.i18n.localize(c.settings.allowCoreFallback.name),
        hint: game.i18n.localize(c.settings.allowCoreFallback.hint),
        default: !1,
        type: Boolean
      }), game.settings.register(h, "prefer-core-sheets", {
        scope: "client",
        config: !0,
        name: game.i18n.localize(c.settings.preferCoreSheets.name),
        hint: game.i18n.localize(c.settings.preferCoreSheets.hint),
        default: !1,
        type: Boolean
      });
    } catch (i) {
      console.warn(g + "Settings registration failed", i);
    }
    try {
      const i = ((t = (e = game.i18n) == null ? void 0 : e.localize) == null ? void 0 : t.call(e, c.settings.developerMode.name)) || "Developer Mode", r = ((a = (s = game.i18n) == null ? void 0 : s.localize) == null ? void 0 : a.call(s, c.settings.developerMode.hint)) || "Enable developer options and the Anarchy Shell in the sidebar.";
      game.settings.register(h, "developer-mode", {
        scope: "world",
        config: !0,
        name: i,
        hint: r,
        default: !1,
        type: Boolean,
        onChange: () => window.location.reload()
      }), game.settings.register(h, hs, {
        scope: "world",
        config: !0,
        name: "Enable legacy UI",
        hint: "Expose retired legacy character sheets for manual opt-in during the V13 UI transition.",
        default: !1,
        type: Boolean,
        onChange: () => window.location.reload()
      });
    } catch (i) {
      console.warn(g + "Developer settings registration failed", i);
    }
    this.sheetsRegistered = !1, this._ensureSheetsWhenAvailable(), u.init(), ce.init(), se.init(), re.init(), L.init(), Wt.init(), j.init(), Ce.init(), xe.init(), ie.init(), I.init(), E.init(), N.init(), this.gmManager = new lt(this.gmAnarchy, this.gmConvergence), this.chatControls = new Ks();
    try {
      await bi();
    } catch (i) {
      console.warn(
        g + "Optional integrations failed to load. Continuing without them.",
        i
      );
    }
    Hooks.once("ready", () => this.onReady()), this._registerCreationBias(), this._registerConsoleCommands();
  }
  async onReady() {
    var e;
    if (this.sheetsRegistered || this._ensureSheetsWhenAvailable(), await this._fixDatabaseCorruption(), game.user.isGM) {
      await new $a().migrate();
      const t = Ie(), s = CONFIG.Actor.documentClass || Actor;
      try {
        const a = ht("character");
        a && ((e = t == null ? void 0 : t.setDefaultSheet) == null || e.call(t, s, h, a));
      } catch {
      }
      try {
        const a = [];
        for (const r of game.actors.contents) {
          const n = Ne(r.type), l = r.getFlag("core", "sheetClass");
          n && l !== n && a.push(r.update({ "flags.core.sheetClass": n }));
        }
        const i = [];
        for (const r of game.items.contents) {
          const n = r.getFlag("core", "sheetClass"), l = De(r.type);
          l && n !== l && i.push(r.update({ "flags.core.sheetClass": l }));
        }
        await Promise.allSettled([...a, ...i]);
      } catch (a) {
        console.warn(g + "Sheet override cleanup skipped", a);
      }
    }
  }
  _registerRenderSafety() {
    console.info(
      g + "Render safety hook retired; registry-driven defaults are authoritative."
    );
  }
  _ensureSheetsWhenAvailable() {
    const e = () => {
      try {
        return this.sheetsRegistered || (this.loadActorSheets(), this.loadItemSheets(), this.sheetsRegistered = !0), !0;
      } catch (t) {
        return console.error(g + "Failed to register sheets", t), !1;
      }
    };
    e() || Hooks.once("setup", () => e() || Hooks.once("ready", e));
  }
  _registerCreationBias() {
    Hooks.on("preCreateActor", (e, t, s, a) => {
      try {
        const i = Ne(t.type ?? e.type);
        if (!i) return;
        e.updateSource({ flags: { core: { sheetClass: i } } });
      } catch {
      }
    }), Hooks.on("preCreateItem", (e, t, s, a) => {
      try {
        const i = De(t.type ?? e.type);
        if (!i) return;
        e.updateSource({ flags: { core: { sheetClass: i } } });
      } catch {
      }
    }), Hooks.on("renderDocumentCreateDialog", (e, t, s) => {
      var a, i, r, n, l, d, f, _;
      try {
        const F = ((a = s == null ? void 0 : s.documentClass) == null ? void 0 : a.name) === (((r = (i = CONFIG.Actor) == null ? void 0 : i.documentClass) == null ? void 0 : r.name) || "Actor"), O = ((n = s == null ? void 0 : s.documentClass) == null ? void 0 : n.name) === (((d = (l = CONFIG.Item) == null ? void 0 : l.documentClass) == null ? void 0 : d.name) || "Item");
        if (!F && !O) return;
        const C = (_ = (f = t[0]) == null ? void 0 : f.querySelector) == null ? void 0 : _.call(f, 'select[name="type"]');
        if (!C) return;
        const de = F ? [
          "character",
          "vehicle",
          "device",
          "sprite",
          "ic"
        ] : [
          "contact",
          "cyberdeck",
          "gear",
          "metatype",
          "quality",
          "shadowamp",
          "skill",
          "weapon"
        ], Tt = Array.from(C.options).find(
          (As) => de.includes(As.value)
        );
        Tt && (C.value = Tt.value, C.dispatchEvent(new Event("change", { bubbles: !0 })));
      } catch {
      }
    });
  }
  _registerConsoleCommands() {
    try {
      const e = {
        fixSheets: async () => await this.fixSheets(),
        debugSheets: () => this.debugSheets(),
        styleGuide: async () => {
          try {
            const { StyleGuideApp: t } = await Promise.resolve().then(() => vi);
            new t().render(!0);
          } catch (t) {
            console.error(g + "Failed to load Style Guide", t);
          }
        },
        openActiveCharacterSheet: async () => {
          var s;
          const t = game.actors.find((a) => a.type === "character");
          t ? (s = t.sheet) == null || s.render(!0) : console.warn("No character found to open.");
        }
      };
      window.anarchyUI || (window.anarchyUI = {}), Object.assign(window.anarchyUI, e), console.info(
        g + "Console commands available: anarchyUI.fixSheets(), anarchyUI.debugSheets(), anarchyUI.openActiveCharacterSheet()"
      );
    } catch {
    }
  }
  async _fixDatabaseCorruption() {
    if (!game.user.isGM || game.actors.size === 0 && game.items.size === 0)
      return;
    let e = 0;
    const t = [];
    for (const a of game.actors.contents) {
      const i = a.getFlag("core", "sheetClass"), r = Ne(a.type);
      r && (!i || i.length < 20 || i.startsWith("core.")) && (t.push(
        a.update({ "flags.core.sheetClass": r })
      ), e++);
    }
    const s = [];
    for (const a of game.items.contents) {
      const i = a.getFlag("core", "sheetClass"), r = De(a.type);
      r && (!i || i.length < 20 || i.startsWith("core.")) && (s.push(
        a.update({ "flags.core.sheetClass": r })
      ), e++);
    }
    (t.length || s.length) && (await Promise.all([...t, ...s]), console.log(g + `Fixed ${e} corrupted sheet assignments`), ui.notifications.info(
      `Anarchy System: Fixed ${e} corrupted sheet assignments`
    ));
  }
  async fixSheets() {
    var s;
    const e = Ie(), t = { actorsUpdated: 0, itemsUpdated: 0 };
    try {
      const a = CONFIG.Actor.documentClass || Actor, i = ht("character");
      i && ((s = e == null ? void 0 : e.setDefaultSheet) == null || s.call(e, a, h, i));
    } catch {
    }
    try {
      const a = [];
      for (const r of game.actors.contents) {
        const n = Ne(r.type);
        if (!n) continue;
        r.getFlag("core", "sheetClass") !== n && (t.actorsUpdated++, a.push(r.update({ "flags.core.sheetClass": n })));
      }
      const i = [];
      for (const r of game.items.contents) {
        const n = De(r.type), l = r.getFlag("core", "sheetClass");
        n && l !== n && (t.itemsUpdated++, i.push(r.update({ "flags.core.sheetClass": n })));
      }
      await Promise.allSettled([...a, ...i]);
    } catch (a) {
      console.warn(g + "fixSheets encountered errors", a);
    }
    return console.table(t), t;
  }
  debugSheets() {
    var e, t;
    try {
      const s = {
        actor: Object.fromEntries(
          _e.flatMap(
            (r) => r.types.map((n) => [
              n,
              be(r.class)
            ])
          )
        ),
        item: Object.fromEntries(
          Be.flatMap(
            (r) => r.types.map((n) => [
              n,
              be(r.class)
            ])
          )
        )
      };
      try {
        const r = CONFIG.Actor.documentClass || Actor, n = CONFIG.Item.documentClass || Item;
        console.info(g + "Intended active defaults", s, {
          ActorDoc: r,
          ItemDoc: n,
          legacyEnabled: gt()
        });
      } catch {
      }
      const a = (((e = game.actors) == null ? void 0 : e.contents) || []).slice(0, 20).map((r) => ({
        name: r.name,
        type: r.type,
        sheet: r.getFlag("core", "sheetClass")
      })), i = (((t = game.items) == null ? void 0 : t.contents) || []).slice(0, 20).map((r) => ({
        name: r.name,
        type: r.type,
        sheet: r.getFlag("core", "sheetClass")
      }));
      return console.table(a), console.table(i), { defaults: s, sampleActors: a, sampleItems: i };
    } catch (s) {
      return console.warn(g + "debugSheets failed", s), null;
    }
  }
  loadActorSheets() {
    var t;
    const e = gt() ? [..._e, ...Sa] : _e;
    this._registerSheetConfigs(
      "Actor",
      ((t = CONFIG.Actor) == null ? void 0 : t.documentClass) || Actor,
      e
    );
  }
  loadItemSheets() {
    var e;
    this._registerSheetConfigs(
      "Item",
      ((e = CONFIG.Item) == null ? void 0 : e.documentClass) || Item,
      Be
    );
  }
  _registerSheetConfigs(e, t, s) {
    const a = Ie(), i = typeof (a == null ? void 0 : a.registerSheet) == "function", r = e === "Actor" ? CONFIG.Actor : CONFIG.Item, n = this._safeGetCoreSheetSettings(), l = {}, d = {};
    if (s.forEach((f) => {
      const _ = be(f.class), F = f.label != null ? game.i18n.localize(f.label) : this._makeSheetLabel(f.types[0]);
      i && a.registerSheet(t, h, f.class, {
        label: F,
        types: f.types,
        makeDefault: f.makeDefault
      }), f.types.forEach((O) => {
        var H;
        i || (r.sheetClasses || (r.sheetClasses = {}), r.sheetClasses[O] || (r.sheetClasses[O] = {}), r.sheetClasses[O][h] || (r.sheetClasses[O][h] = {}), r.sheetClasses[O][h][_] = {
          id: _,
          cls: f.class,
          label: F,
          canBeDefault: !0,
          canConfigure: !0
        }, (!r.sheetClasses[O].default || !r.sheetClasses[O].default.startsWith(`${h}.`)) && (r.sheetClasses[O].default = _));
        const C = (H = n == null ? void 0 : n[e]) == null ? void 0 : H[O];
        f.makeDefault && C !== _ && (l[`${e}.${O}`] = _, i || (d[O] = _));
      });
    }), typeof (a == null ? void 0 : a.updateDefaultSheets) == "function" && Object.keys(l).length)
      a.updateDefaultSheets(l);
    else if (!i && Object.keys(d).length)
      try {
        const f = foundry.utils.duplicate(n) ?? {};
        f[e] || (f[e] = {}), Object.assign(f[e], d), game.settings.set("core", "sheetClasses", f);
      } catch (f) {
        console.warn(
          g + `Failed to persist ${e.toLowerCase()} default sheets`,
          f
        );
      }
  }
  _makeSheetLabel(e) {
    return e ? `${e.charAt(0).toUpperCase()}${e.slice(1)} Sheet` : "Sheet";
  }
  _safeGetCoreSheetSettings() {
    try {
      return game.settings.get("core", "sheetClasses");
    } catch {
      return null;
    }
  }
}
Mt.start();
//# sourceMappingURL=index.mjs.map
