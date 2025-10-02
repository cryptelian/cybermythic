var Mt = Object.defineProperty;
var Tt = (o, e, t) => e in o ? Mt(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var x = (o, e, t) => Tt(o, typeof e != "symbol" ? e + "" : e, t);
const n = {
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
}, W = class W {
  static ascending(e = (t) => t) {
    return (t, s) => W.sortingBy(e(t), e(s));
  }
  static descending(e = (t) => t) {
    return (t, s) => W.sortingBy(e(s), e(t));
  }
  static sortingBy(e, t) {
    return e > t ? 1 : e < t ? -1 : 0;
  }
  static bySortedArray(e) {
    return (t) => e.indexOf(t);
  }
  static ascendingBySortedArray(e) {
    return W.ascending(W.bySortedArray(e));
  }
  static sortedMap(e, t = (s, a) => 0) {
    return Object.keys(e).sort(t).reduce(
      (s, a) => (s[a] = e[a], s),
      {}
    );
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
    return e.map(t).filter((s) => s != null).reduce(W.sum(), 0);
  }
  static divint(e, t) {
    return Math.floor(e / t);
  }
  static divup(e, t) {
    return Math.ceil(e / t);
  }
  static join(e, t = "") {
    return e.reduce(W.joiner(t));
  }
  static joiner(e = "") {
    return (t, s) => t + e + s;
  }
  static classify(e, t = (s) => s.type) {
    let s = {};
    return W.classifyInto(s, e, t), s;
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
x(W, "isString", (e) => typeof e == "string" || e instanceof String);
let A = W;
const st = {
  keyword: "keywords",
  disposition: "dispositions",
  cue: "cues"
}, f = class f {
  // this method is the place to add settings-based entries in the enums
  static init() {
    f.hbsAttributes = f.mapObjetToKeyValue(n.attributes).filter((e) => e.value != "knowledge" && e.value != "noAttribute"), f.hbsItemTypes = f.mapObjetToKeyValue(n.itemType), f.hbsCapacities = f.mapObjetToKeyValue(n.capacity), f.hbsMonitors = f.mapObjetToKeyValue(n.monitor), f.hbsMonitorLetters = f.mapObjetToKeyValue(n.monitorLetter), f.hbsShadowampCategories = f.mapObjetToKeyValue(n.shadowampCategory), f.hbsAreas = f.mapObjetToKeyValue(n.area), f.hbsRanges = f.mapObjetToKeyValue(n.range), f.hbsVehicleCategories = f.mapObjetToKeyValue(n.vehicleCategory), f.sortedAttributeKeys = Object.keys(n.attributes), f.registerHandleBarHelpers();
  }
  static registerHandleBarHelpers() {
    Handlebars.registerHelper("sortedAttributes", (e) => A.sortedMap(e, A.ascendingBySortedArray(f.sortedAttributeKeys)));
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
    return st;
  }
  static getMonitors() {
    return f.hbsMonitors;
  }
  static getMonitorLetters() {
    return f.hbsMonitorLetters;
  }
  static getActorWordTypePlural(e) {
    return st[e];
  }
  static localizeAttribute(e) {
    return n.attributes[e] ? game.i18n.localize(n.attributes[e]) : game.i18n.localize(n.attributes.noAttribute);
  }
  static getFromList(e, t, s = "value", a = "labelkey") {
    const i = e.find((r) => r[s] == t);
    return i ? i[a] : void 0;
  }
  static mapObjetToKeyValue(e, t = "value", s = "labelkey") {
    return Object.entries(e).map(
      (a) => {
        const i = {};
        return i[t] = a[0], i[s] = a[1], i;
      }
    );
  }
};
x(f, "ENUMS"), x(f, "hbsAttributes"), x(f, "hbsItemTypes"), x(f, "hbsCapacities"), x(f, "hbsMonitors"), x(f, "hbsMonitorLetters"), x(f, "hbsShadowampCategories"), x(f, "hbsAreas"), x(f, "hbsRanges"), x(f, "sortedAttributeKeys");
let H = f;
const Ht = { BASE_URL: "/systems/ninjanarchy/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_ENABLE_INTEGRATIONS: "1", VITE_SYSTEM_ID: "ninjanarchy" }, Et = (() => {
  try {
    const e = typeof import.meta < "u" && import.meta && Ht ? "ninjanarchy" : void 0;
    if (e && String(e).trim().length > 0)
      return String(e).trim();
  } catch {
  }
  const o = typeof globalThis < "u" && globalThis.game && globalThis.game.system && globalThis.game.system.id ? String(globalThis.game.system.id).trim() : void 0;
  return o && o.length > 0 ? o : "anarchy";
})(), d = Et, oe = "Anarchy", Ue = `system.${d}`, P = d, ue = `systems/${d}`, bt = `${ue}/style`, y = `systems/${d}/templates`, L = `${ue}/icons`, w = `${L}/skills`, h = "Anarchy | ", Nt = 3, Dt = 2, It = 6, Ot = 5, zt = 4, Ct = 8, l = {
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
}, D = {
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
  SYSTEM_DESCRIPTION: oe,
  SYSTEM_SOCKET: Ue,
  SYSTEM_SCOPE: P,
  SYSTEM_PATH: ue,
  STYLE_PATH: bt,
  TEMPLATES_PATH: y,
  ICONS_PATH: L,
  ICONS_SKILLS_PATH: w,
  LOG_HEAD: h,
  ANARCHY_DICE_BONUS: Nt,
  SPECIALIZATION_BONUS: Dt,
  PLAYER_MAX_ANARCHY: It,
  TARGET_SUCCESS: Ot,
  TARGET_SUCCESS_EDGE: zt,
  BASE_MONITOR: Ct,
  TEMPLATE: l,
  ANARCHY_SYSTEM: D
};
class K {
  static checkSufficient(e, t, s) {
    if (t > s) {
      const a = game.i18n.format(n.common.errors.insufficient, {
        resource: game.i18n.localize(e),
        required: t,
        available: s
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkOutOfRange(e, t, s, a) {
    if (t < s || t > a) {
      const i = game.i18n.format(n.common.errors.outOfRange, {
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
      const e = game.i18n.localize(n.common.errors.onlyGM);
      throw ui.notifications.error(e), e;
    }
  }
  static checkItemType(e, t) {
    if (e.type != t) {
      const s = game.i18n.format(n.common.errors.expectedType, {
        type: game.i18n.localize(e.type ? n.itemType.singular[e.type] : e.type),
        expectedType: game.i18n.localize(t)
      });
      throw ui.notifications.error(s), s;
    }
  }
  static checkActorCanReceiveDamage(e, t, s) {
    if (!t) {
      const a = game.i18n.format(n.common.errors.actorCannotReceiveDamage, {
        actor: s.name,
        damageType: game.i18n.format("ANARCHY.actor.monitors." + e)
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkWeaponDefense(e, t) {
    if (!e.getDefense()) {
      const a = game.i18n.format(n.common.errors.noDefenseOnWeapon, { actor: t.name, weapon: e.name });
      throw ui.notifications.error(a), a;
    }
  }
  static checkTargetsCount(e, t, s) {
    if (e > 0 && t.length > e) {
      const a = game.i18n.format(n.common.errors.maxTargetsExceedeed, {
        weapon: this.name,
        area: game.i18n.localize(n.area[s]),
        count: t.length,
        max: e
      });
      throw ui.notifications.error(a), a;
    }
  }
  static checkMatrixMonitor(e) {
    if (!e.hasMatrixMonitor()) {
      const t = game.i18n.format(n.actor.monitors.noMatrixMonitor, {
        actor: e.name
      });
      throw ui.notifications.warn(t), t;
    }
  }
  static checkActorDefenseAction(e, t, s) {
    if (!e) {
      const a = game.i18n.format(n.common.errors.actorDoesNotHaveDefense, {
        actor: t.name,
        defense: game.i18n.localize(s.labelkey),
        actorType: game.i18n.localize(n.actorType[t.type])
      });
      throw ui.notifications.error(a), a;
    }
  }
}
const at = "Users.blindMessageToGM";
class Y {
  static init() {
    j.register(at, {
      callback: (e) => Y.blindMessageToGM(e),
      condition: (e) => e.isGM
    });
  }
  static blindMessageToGM(e) {
    j.call(at, e) || ChatMessage.create({
      user: e.user,
      whisper: ChatMessage.getWhisperRecipients("GM"),
      blind: !0,
      content: game.i18n.format(n.chat.blindMessageToGM, {
        user: game.user.name,
        message: e.content
      })
    });
  }
  static getUsers(e = (t) => !0) {
    return (game.version ? game.users : game.users.entities).filter(e);
  }
  static firstConnectedGM() {
    return Y.getUsers((e) => e.isGM && e.active).sort(A.ascending((e) => e.id)).at(0) ?? {};
  }
  /**
   * @returns true pour un seul utilisateur: le premier GM connecté par ordre d'id
   */
  static isUniqueConnectedGM(e = game.user) {
    return e.id == Y.firstConnectedGM().id;
  }
  static firstResponsible(e) {
    if (e.testUserPermission)
      return Y.getUsers((t) => t.active && e.testUserPermission(t, CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER)) == game.user;
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
class j {
  constructor() {
    this.remoteCalls = {}, game.socket.on(Ue, async (e) => this.onSocketMessage(e));
  }
  static async register(e, t) {
    game.system.anarchy.remoteCall._register(e, t);
  }
  async _register(e, t) {
    if (this.remoteCalls[e])
      throw `RemoteCall msg ${e} is already registered`;
    foundry.utils.mergeObject(t, {
      callback: (s) => {
        console.log(h + "RemoteCall [", e, "] (", s, ")");
      },
      condition: (s) => !0,
      multiple: !1
      /* true if multiple users should handle the message */
    }, { overwrite: !1 }), this.remoteCalls[e] = t, console.log(h + "RemoteCall registered", e);
  }
  static call(e, t) {
    return game.system.anarchy.remoteCall._remoteCall(e, t);
  }
  _remoteCall(e, t) {
    const s = this.remoteCalls[e];
    return !s || s.condition(game.user) || !s.multiple && Y.isUniqueConnectedGM() ? !1 : (game.socket.emit(Ue, { msg: e, data: t }), !0);
  }
  async onSocketMessage(e) {
    const t = this.remoteCalls[e.msg];
    if (t) {
      const s = t.condition(game.user), a = t.multiple, i = Y.isUniqueConnectedGM();
      s && (a || i) ? t.callback(e.data) : console.log(h + "RemoteCall.onSocketMessage(", e, ") ignored :", s, a, i);
    } else
      console.log(h + "RemoteCall: No callback registered for", e);
  }
}
const Ve = "parent-message-id", me = "message-data", Be = "can-use-edge", Ke = "owning-actor", it = "ChatManager.removeChatMessage", ot = "ChatManager.removeChatMessageFamily", Yt = [
  { selector: ".anarchy-button.click-edge-reroll", controlVisibility: !0, handler: async (o, e) => await M.edgeReroll(o) },
  { selector: ".anarchy-button.click-defend-attack", controlVisibility: !0, handler: async (o, e) => await M.defendAttack(o) },
  { selector: ".anarchy-button.click-defend-pilot-attack", controlVisibility: !0, handler: async (o, e) => await M.defendPilotAttack(o) },
  { selector: ".anarchy-button.click-apply-attack-damage", controlVisibility: !0, handler: async (o, e) => await M.applyAttack(o) },
  { selector: "img.open-actor-sheet", controlVisibility: !1, handler: async (o, e) => await M.openActorSheet(o, e) }
];
class M {
  static async init() {
    Hooks.on("renderChatMessage", async (e, t, s) => await M.onRenderChatMessage(e, t, s)), j.register(ot, {
      callback: (e) => this.removeFamily(e),
      condition: (e) => e.isGM
    }), j.register(it, {
      callback: (e) => M.removeChatMessage(e),
      condition: (e) => e.isGM
    });
  }
  static async onRenderChatMessage(e, t, s) {
    const a = M.getChatMessageFromHtml(t), i = M.hasRight(a);
    Yt.forEach((r) => {
      const c = t.find(r.selector);
      !r.controlVisibility || i ? (c.show(), c.click(async (m) => await r.handler(M.getChatMessage(m), m))) : (c.hide(), c.click(async (m) => {
      }));
    });
  }
  static async openActorSheet(e, t) {
    var r;
    const s = $(t.currentTarget).closest("img.open-actor-sheet"), a = s.attr("data-token-id");
    if (a) {
      const c = canvas.tokens.get(a);
      if (c != null && c.actor) {
        c.actor.sheet.render(!0);
        return;
      }
    }
    const i = s.attr("data-actor-id");
    return (r = game.actors.get(i)) == null ? void 0 : r.sheet.render(!0);
  }
  static async edgeReroll(e) {
    if (e.getFlag(P, Be)) {
      const t = e.getFlag(P, me);
      await game.system.anarchy.rollManager.edgeReroll(t), M.removeFamily(e.id);
    } else
      ui.notifications.info(game.i18n.localize(n.common.errors.cannotUseEdgeAnymore));
  }
  static defendAttack(e) {
    return game.system.anarchy.combatManager.onClickDefendAttack(e.getFlag(P, me));
  }
  static defendPilotAttack(e) {
    return game.system.anarchy.combatManager.onClickPilotDefendAttack(e.getFlag(P, me));
  }
  static applyAttack(e) {
    return game.system.anarchy.combatManager.onClickApplyAttackDamage(e.getFlag(P, me));
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
    e[P] == null ? e[P] = { [t]: s } : e[P][t] = s;
  }
  static removeFamily(e) {
    var t;
    j.call(ot, e) || (game.messages.filter((s) => s.getFlag(P, Ve) == e).forEach((s) => s.delete()), (t = game.messages.get(e)) == null || t.delete());
  }
  static removeChatMessage(e) {
    var t;
    j.call(it, e) || (t = game.messages.get(e)) == null || t.delete();
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
    const t = e.tokenId ? M.getToken(e.tokenId) : void 0;
    return {
      actor: (t == null ? void 0 : t.actor) ?? game.actors.get(e.actorId),
      token: t,
      right: e.right
    };
  }
  static hasRight(e, t = CONST.DOCUMENT_OWNERSHIP_LEVELS.OWNER) {
    const s = e.getFlag(P, Ke);
    if (s) {
      const a = M.readActorRights(s);
      if (a)
        return a.actor ? a.actor.testUserPermission(game.user, Math.min(a.right, t)) : !0;
    }
    return !1;
  }
  static getToken(e) {
    return e ? game.scenes.map((t) => t.tokens.find((s) => s.id == e)).find((t) => t != null) : void 0;
  }
}
const xt = [
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
    return p.iconPath(`${bt}/${e}`, t);
  }
  static iconPath(e, t) {
    return `<img class="${t}" src="${e}" />`;
  }
  static iconD6(e) {
    if (e < 0 || e > 6)
      throw `Dice ${e} is out of dice range [1..6] or 0 for multidice`;
    return p.fontAwesome(xt[e]);
  }
}
globalThis.ANARCHY_ICONS = p;
const se = n.actor.monitors, re = n.actor.counters, qe = {
  armor: {
    path: "system.monitors.armor.value",
    monitor: (o) => o.system.monitors.armor,
    iconChecked: p.fontAwesome("fas fa-shield-slash"),
    iconUnchecked: p.fontAwesome("fas fa-shield-alt"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: se.armor
  },
  stun: {
    path: "system.monitors.stun.value",
    monitor: (o) => o.system.monitors.stun,
    iconChecked: p.fontAwesome("fas fa-grimace"),
    iconUnchecked: p.fontAwesome("far fa-smile"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: se.stun,
    overflow: (o) => l.monitors.physical,
    useArmor: !0
  },
  physical: {
    path: "system.monitors.physical.value",
    monitor: (o) => o.system.monitors.physical,
    iconChecked: p.fontAwesome("fas fa-heartbeat"),
    iconUnchecked: p.fontAwesome("far fa-heart"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: se.physical,
    useArmor: !0
  },
  structure: {
    path: "system.monitors.structure.value",
    monitor: (o) => o.system.monitors.structure,
    iconChecked: p.fontAwesome("fas fa-car-crash"),
    iconUnchecked: p.fontAwesome("fas fa-car-alt"),
    iconHit: p.fontAwesome("fas fa-bahai"),
    resource: se.structure
  },
  matrix: {
    path: "system.monitors.matrix.value",
    monitor: (o) => o.getMatrixMonitor(),
    iconChecked: p.fontAwesome("fas fa-laptop-medical"),
    iconUnchecked: p.fontAwesome("fas fa-laptop"),
    iconHit: p.fontAwesome("fas fa-laptop-code"),
    overflow: (o) => o.getMatrixOverflow(),
    recomputeOverflow: (o) => 3,
    resource: se.matrix
  },
  marks: {
    path: void 0,
    monitor: (o) => ({ value: 0, max: 5 }),
    iconChecked: p.fontAwesome("fas fa-bookmark"),
    iconUnchecked: p.fontAwesome("far fa-bookmark"),
    iconHit: p.fontAwesome("fas fa-fingerprint"),
    resource: se.marks
  },
  convergence: {
    path: void 0,
    monitor: (o) => ({ value: 0, max: 5 }),
    iconChecked: p.fontAwesome("far fa-eye"),
    iconUnchecked: p.fontAwesome("fas fa-eye-slash"),
    iconHit: p.fontAwesome("fas fa-eye"),
    resource: se.convergence
  },
  anarchy: {
    path: "system.counters.anarchy.value",
    monitor: (o) => ({
      value: o.system.counters.anarchy.value,
      max: 6
    }),
    iconChecked: p.iconSystemPath("anarchy-point.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath("anarchy-point-off.webp", "checkbar-img"),
    resource: re.anarchy
  },
  plot: {
    path: "system.counters.anarchy.value",
    monitor: (o) => {
      const e = o.system.counters.anarchy.value;
      return { value: e, max: e + 1 };
    },
    iconChecked: p.iconSystemPath("danger-point.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath("danger-point-off.webp", "checkbar-img"),
    resource: re.anarchy
  },
  sceneAnarchy: {
    path: "system.counters.sceneAnarchy.value",
    monitor: (o) => ({ value: o.system.counters.sceneAnarchy.value, max: 3 }),
    iconChecked: p.iconSystemPath("anarchy-point-scene.webp", "checkbar-img"),
    iconUnchecked: p.iconSystemPath("anarchy-point-off.webp", "checkbar-img"),
    resource: re.sceneAnarchy
  },
  edge: {
    path: "system.counters.edge.value",
    monitor: (o) => ({
      value: o.system.counters.edge.value,
      max: o.getAttributeValue(l.attributes.edge)
    }),
    iconChecked: p.fontAwesome("fas fa-star"),
    iconUnchecked: p.fontAwesome("far fa-star"),
    resource: re.edge
  },
  credibility: {
    path: "system.counters.social.credibility.value",
    monitor: (o) => ({
      value: o.system.counters.social.credibility.value,
      max: o.system.counters.social.credibility.max
    }),
    iconChecked: p.fontAwesome("fas fa-handshake"),
    iconUnchecked: p.fontAwesome("far fa-handshake"),
    resource: re.social.credibility
  },
  rumor: {
    path: "system.counters.social.rumor.value",
    monitor: (o) => ({
      value: o.system.counters.social.rumor.value,
      max: o.system.counters.social.rumor.max
    }),
    iconChecked: p.fontAwesome("fas fa-grimace"),
    iconUnchecked: p.fontAwesome("far fa-grimace"),
    resource: re.social.rumor
  }
}, V = foundry.utils.mergeObject(qe, {});
class u {
  static init() {
    Handlebars.registerHelper("iconCheckbar", u.iconCheckbar), Handlebars.registerHelper("iconCheckbarHit", u.iconHit);
  }
  static hackCheckbars(e) {
    if (e) {
      const t = foundry.utils.mergeObject(qe, {});
      foundry.utils.mergeObject(t, e, { recursive: !0 }), foundry.utils.mergeObject(V, t, { overwrite: !0 });
    }
  }
  static iconCheckbar(e, t) {
    return t ? u.iconChecked(e) : u.iconUnchecked(e);
  }
  static iconChecked(e) {
    var t;
    return (t = V[e]) == null ? void 0 : t.iconChecked;
  }
  static iconUnchecked(e) {
    var t;
    return (t = V[e]) == null ? void 0 : t.iconUnchecked;
  }
  static iconHit(e) {
    var t, s;
    return ((t = V[e]) == null ? void 0 : t.iconHit) ?? ((s = V[e]) == null ? void 0 : s.iconChecked);
  }
  static useArmor(e) {
    var t;
    return (t = V[e]) == null ? void 0 : t.useArmor;
  }
  static max(e, t) {
    var a;
    const s = (a = V[t]) == null ? void 0 : a.monitor(e);
    return ((s == null ? void 0 : s.max) ?? 0) + ((s == null ? void 0 : s.maxBonus) ?? 0);
  }
  static value(e, t) {
    var a;
    const s = (a = V[t]) == null ? void 0 : a.monitor(e);
    return (s == null ? void 0 : s.value) ?? 0;
  }
  static resistance(e, t) {
    var a;
    const s = (a = V[t]) == null ? void 0 : a.monitor(e);
    return ((s == null ? void 0 : s.resistance) ?? 0) + ((s == null ? void 0 : s.resistanceBonus) ?? 0);
  }
  static newValue(e, t) {
    return e + (t ? 0 : 1);
  }
  static async switchMonitorCheck(e, t, s, a, i = void 0, r = void 0) {
    await u.setCounter(e, t, u.newValue(s, a), i, r);
  }
  static async addCounter(e, t, s, a = void 0) {
    if (s != 0) {
      const i = u.getCounterValue(e, t, a) ?? 0;
      await u.setCounter(e, t, i + s, a);
    }
  }
  static async setCounter(e, t, s, a = void 0, i = void 0) {
    switch (t) {
      case l.monitors.marks:
        return await u.setActorMarks(e, s, a, i);
      case l.monitors.matrix:
        return K.checkMatrixMonitor(e), await u.setCheckbar(e, t, s, i);
      case l.monitors.convergence:
        return await u.setActorConvergence(e, s);
      case l.monitors.anarchy:
        return await u.setAnarchy(e, s);
      case l.monitors.sceneAnarchy:
        return await u.setSceneAnarchy(e, s);
    }
    return await u.setCheckbar(e, t, s);
  }
  static getCounterValue(e, t, s) {
    switch (t) {
      case l.monitors.marks:
        return u.getActorMarks(e, s);
      case l.monitors.convergence:
        return u.getActorConvergence(e);
      case l.monitors.anarchy:
        return u.getAnarchy(e, t);
    }
    return u.value(e, t);
  }
  static async setCheckbar(e, t, s) {
    if (s == u.getCounterValue(e, t))
      return;
    const a = V[t];
    if (a.path) {
      const i = u.max(e, t);
      if (i <= 0)
        return;
      await u._manageOverflow(a, e, t, s, i), s = Math.min(s, i), K.checkOutOfRange(a.resource, s, 0, i), await e.setCheckbarValue(a.path, s);
    }
  }
  static async _manageOverflow(e, t, s, a, i) {
    if (a > i) {
      const r = e.overflow ? e.overflow(t) : void 0, c = e.recomputeOverflow ? e.recomputeOverflow(a - i) : a - i;
      r && c > 0 && (u._notifyOverflow(t, s, c, r), await u.addCounter(t, r, c));
    }
  }
  static _notifyOverflow(e, t, s, a) {
    ui.notifications.warn(game.i18n.format(n.actor.monitors.overflow, {
      actor: e.name,
      monitor: game.i18n.format("ANARCHY.actor.monitors." + t),
      overflow: s,
      overflowMonitor: game.i18n.format("ANARCHY.actor.monitors." + a)
    }));
  }
  static async _manageStunOverflow(e, t, s) {
    await u.addCounter(e, l.monitors.physical, t - s);
  }
  static async _manageMatrixOverflow(e, t, s) {
    await u.addCounter(e, l.monitors.stun, t - s);
  }
  static async setAnarchy(e, t) {
    if (e.hasOwnAnarchy()) {
      if (e.hasGMAnarchy()) {
        await game.system.anarchy.gmAnarchy.setAnarchy(t), e.render();
        return;
      }
      await u._setAnarchyMonitor(e, l.monitors.anarchy, t);
    }
  }
  static async setSceneAnarchy(e, t) {
    await u._setAnarchyMonitor(e, l.monitors.sceneAnarchy, t);
  }
  static async _setAnarchyMonitor(e, t, s) {
    const a = u.value(e, t);
    await u.setCheckbar(e, t, s), game.user.isGM || u.notifyAnarchyChange(e, t, a, s);
  }
  static getAnarchy(e, t) {
    return !game.user.isGM && (!e.hasOwnAnarchy() || e.hasGMAnarchy()) || t == re.anarchy && (!e.hasOwnAnarchy() || e.hasGMAnarchy()) ? 0 : u.value(e, t);
  }
  static notifyAnarchyChange(e, t, s, a) {
    Y.blindMessageToGM({
      from: game.user.id,
      content: game.i18n.format(
        n.gmManager.playerChangedAnarchy,
        {
          user: game.user.name,
          actor: e.name,
          monitor: game.i18n.localize(n.actor.counters[t]),
          from: s,
          to: a
        }
      )
    });
  }
  static getActorMarks(e, t) {
    var s;
    return ((s = u._findActorMarks(e.getMatrixMarks(), t)) == null ? void 0 : s.marks) ?? 0;
  }
  static async addActorMark(e, t, s = void 0) {
    const a = u._findActorMarks(e.getMatrixMarks(), t);
    u.setActorMarks(e, (a.marks ?? 0) + 1, t, s);
  }
  static async setActorMarks(e, t, s, a = void 0) {
    if (e.canReceiveMarks()) {
      let i = deepClone(e.getMatrixMarks());
      K.checkOutOfRange(V.marks.resource, t, 0, u.max(e, "marks"));
      const r = u._findActorMarks(i, s);
      r.marks == null && i.push(r), r.marks = Math.max(0, t), i = i.filter((c) => c.marks > 0), await e.setCheckbarValue("system.monitors.matrix.marks", i);
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
const ze = "anarchy-gm", _t = "scene-anarchy-gm", rt = "GMAnarchy.addAnarchy";
class Pt {
  constructor() {
    game.settings.register(d, ze, {
      scope: "world",
      config: !1,
      default: 1,
      type: Number
    }), game.settings.register(d, _t, {
      scope: "world",
      config: !1,
      default: 0,
      type: Number
    }), j.register(rt, {
      callback: (e) => game.system.anarchy.gmAnarchy.addAnarchy(e),
      condition: (e) => e.isGM
    }), this.anarchy = game.settings.get(d, ze);
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
      content: game.i18n.format(
        n.gmManager.gmReceivedAnarchy,
        {
          anarchy: t,
          actor: e.name
        }
      )
    }), await this.addAnarchy(t));
  }
  async npcConsumesAnarchy(e, t) {
    await this.addAnarchy(-t);
  }
  async addAnarchy(e) {
    j.call(rt, e) || (K.checkSufficient(n.actor.counters.plot, -e, this.anarchy), await this.setAnarchy(this.anarchy + e));
  }
  async setAnarchy(e) {
    this.anarchy = e, game.settings.set(d, ze, e), await this._rebuild(), this._syncGMAnarchySheets();
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-anarchy-bar"), await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".checkbar-root").replaceWith(await this._renderBar()), this.toolbar.find("a.click-checkbar-element").click(async (e) => await this._onClickAnarchyCheckbar(e));
  }
  async _onClickAnarchyCheckbar(e) {
    const t = Number.parseInt($(e.currentTarget).attr("data-index")), s = $(e.currentTarget).attr("data-checked") == "true", a = u.newValue(t, s);
    await this.setAnarchy(a);
  }
  async _renderBar() {
    return await renderTemplate("systems/anarchy/templates/monitors/anarchy.hbs", {
      code: "plot",
      rowlength: 6,
      value: this.getAnarchy().value,
      max: this.getAnarchy().max,
      scene: 0,
      labelkey: n.actor.counters.plot
    });
  }
  _syncGMAnarchySheets() {
    var s, a;
    const e = game.actors.filter((i) => !i.token || i.token.isLinked), t = (((a = (s = game.canvas) == null ? void 0 : s.tokens) == null ? void 0 : a.getDocuments()) ?? []).filter((i) => !i.isLinked).map((i) => i.actor);
    e.concat(t).filter((i) => !i.hasPlayerOwner).forEach((i) => i.render());
  }
}
class $t {
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
      left: Math.max(this.minPos.left, Math.min(window.innerWidth - this.maxPos.left, e.left)),
      top: Math.max(this.minPos.top, Math.min(window.innerHeight - this.maxPos.top, e.top))
    };
  }
}
const Ge = "gm-difficulty-pools", Lt = `${d}.${Ge}`;
class Ut {
  constructor() {
    Hooks.on("updateSetting", async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)), Hooks.once("ready", () => this.onReady());
  }
  onReady() {
    game.settings.register(d, Ge, {
      scope: "world",
      name: game.i18n.localize(n.settings.gmDifficulty.name),
      hint: game.i18n.localize(n.settings.gmDifficulty.hint),
      config: !0,
      default: game.i18n.localize(n.settings.gmDifficulty.default),
      type: String
    }), this.loadDifficultySettings();
  }
  async onUpdateSetting(e, t, s, a) {
    game.user.isGM && e.key == Lt && (this.loadDifficultySettings(), this._rebuild(), game.system.anarchy.gmManager.render(!1));
  }
  loadDifficultySettings() {
    const e = game.settings.get(d, Ge);
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
    return await renderTemplate("systems/anarchy/templates/app/gm-difficulty-buttons.hbs", {
      difficultyPools: this.difficultyPools
    });
  }
  async _onClickDifficulty(e) {
    const t = $(e.currentTarget).attr("data-pool"), s = $(e.currentTarget).attr("data-difficulty"), a = new Roll(`${t}d6cs>=5`);
    await a.evaluate();
    const i = game.i18n.format(n.settings.gmDifficulty.chatMessage, {
      pool: t,
      difficulty: s ?? t,
      success: a.total
    }), r = await a.toMessage({ flavor: i }, { create: !1 });
    ChatMessage.create(r);
  }
}
const Vt = "gm-manager", Gt = "gm-manager-position", jt = { top: 200, left: 200 }, Ft = "systems/anarchy/templates/app/gm-manager.hbs";
class Wt extends Application {
  constructor(e, t) {
    super(), this.gmAnarchy = e, this.gmConvergence = t, this.gmDifficulty = new Ut(), this.handleDrag = new $t(
      (s) => s.getElementById("gm-manager"),
      {
        initial: jt,
        maxPos: { left: 200, top: 100 },
        settings: {
          system: d,
          keyPosition: Gt
        }
      }
    ), Hooks.once("ready", () => this.onReady()), Hooks.on("renderChatLog", async (s, a, i) => {
      const r = "systems/anarchy/templates/app/chat-tools.hbs", c = {
        title: game.i18n.localize("ANARCHY.gmManager.title"),
        rollDice: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
        isGM: game.user.isGM
      }, m = await renderTemplate(r, c), g = $(m);
      $(a).find("form.chat-form").append(g[0]), $(a).find("form.chat-form .rolldice").on("click", (le) => {
        le.preventDefault(), new Dialog({
          title: game.i18n.localize("ANARCHY.chat_actions.rollDice.title"),
          content: '<div style="display:flex;margin:4px 0 8px 0;align-items:center;gap:8px">' + game.i18n.localize("ANARCHY.chat_actions.rollDice.instruction") + '<input class="roll-dice-value" name="macro-roll-count-dice" type="number" value="3" /></div>',
          buttons: {
            cancel: { label: game.i18n.localize("ANARCHY.common.cancel"), icon: '<i class="fas fa-times"></i>' },
            submit: {
              label: game.i18n.localize("ANARCHY.common.roll.button"),
              icon: '<i class="fas fa-dice"></i>',
              callback: async (Ce) => {
                const J = $(Ce).find('input[name="macro-roll-count-dice"]').val();
                if (!J || isNaN(J) || J <= 0) {
                  ui.notifications.warn(game.i18n.localize("ANARCHY.chat_actions.rollDice.error"));
                  return;
                }
                const te = new Roll(`${J}d6cs>4`);
                await te.evaluate({ async: !0 });
                const wt = te.terms[0].results.filter((Rt) => Rt.result == 1).length, kt = game.i18n.format("ANARCHY.chat_actions.rollDice.result", {
                  count: J,
                  success: te.total,
                  ones: wt
                }), St = await te.toMessage({ flavor: kt }, { create: !1 });
                ChatMessage.create(St);
              }
            }
          },
          default: "submit"
        }).render(!0);
      }), $(a).find("form.chat-form .gmmanager").on("click", (le) => {
        le.preventDefault(), this._element ? this.close() : this.render(!0);
      });
    });
  }
  onReady() {
    game.user.isGM && this.render(!0);
  }
  /* -------------------------------------------- */
  static get defaultOptions() {
    let e = super.defaultOptions;
    return e.id = Vt, e.title = game.i18n.localize(n.gmManager.title), e.template = Ft, e.popOut = !1, e.resizable = !1, e.height = "auto", e.width = "auto", e;
  }
  async render(e, t) {
    game.user.isGM && await super.render(e, t);
  }
  getData() {
    return this.handleDrag.setPosition(), {
      anarchy: this.gmAnarchy.getAnarchy(),
      convergences: this.gmConvergence.getConvergences(),
      difficultyPools: this.gmDifficulty.getDifficultyData(),
      ANARCHY: n,
      options: {
        classes: [game.system.anarchy.styles.selectCssClass()]
      }
    };
  }
  async activateListeners(e) {
    super.activateListeners(e), e.find(".app-title-bar").mousedown((t) => this.handleDrag.onMouseDown(t)), e.find(".gm-manager-hide-button").mousedown((t) => this.close()), this.gmAnarchy.activateListeners(e), this.gmConvergence.activateListeners(e), this.gmDifficulty.activateListeners(e);
  }
}
function U(o, e, t, s, a, i = (r) => !0) {
  return {
    code: o,
    labelkey: n.attributeAction[o],
    attributeFunction1: e ?? ((r) => {
    }),
    attributeFunction2: t ?? ((r) => {
    }),
    icon: s,
    actorTypes: a,
    condition: i
  };
}
function he(o, e) {
  return {
    code: o,
    labelkey: n.defense[o],
    actionCode: e
  };
}
const E = l.attributes, I = l.actorTypes, z = D.actions, ge = D.defenses, Ye = [
  U(z.defense, (o) => E.agility, (o) => E.logic, p.fontAwesome("fas fa-shield-alt"), [I.character]),
  U(z.defense, (o) => E.autopilot, (o) => E.handling, p.fontAwesome("fas fa-tachometer-alt"), [I.vehicle]),
  // TODO: add a way to pilot a vehicle to fallback defense of controled vehicle
  U(z.resistTorture, (o) => E.strength, (o) => E.willpower, p.fontAwesome("fas fa-angry"), [I.character]),
  U(z.perception, (o) => E.logic, (o) => E.willpower, p.fontAwesome("fas fa-eye"), [I.character]),
  U(z.perception, (o) => E.autopilot, void 0, p.fontAwesome("fas fa-video"), [I.vehicle]),
  U(z.perception, (o) => o.getMatrixLogic(), (o) => o.getMatrixLogic(), p.fontAwesome("fas fa-video"), [I.device, I.sprite, I.ic]),
  U(z.composure, (o) => E.charisma, (o) => E.willpower, p.fontAwesome("fas fa-meh"), [I.character]),
  U(z.judgeIntentions, (o) => E.charisma, (o) => E.charisma, p.fontAwesome("fas fa-theater-masks"), [I.character]),
  U(z.memory, (o) => E.logic, (o) => E.logic, p.fontAwesome("fas fa-brain"), [I.character]),
  U(z.catch, (o) => E.agility, (o) => E.agility, p.fontAwesome("fas fa-baseball-ball"), [I.character]),
  U(z.lift, (o) => E.strength, (o) => E.strength, p.fontAwesome("fas fa-dumbbell"), [I.character]),
  U(z.matrixDefense, (o) => o.getMatrixLogic(), (o) => o.getMatrixFirewall(), p.fontAwesome("fas fa-shield-virus"), [I.character, I.sprite, I.ic, I.device, I.vehicle]),
  U(z.astralDefense, (o) => E.logic, (o) => E.willpower, p.fontAwesome("fas fa-shield-virus"), [I.character])
], ve = [
  he(ge.physicalDefense, z.defense),
  he(ge.physicalResistance, z.resistTorture),
  he(ge.socialDefense, z.composure),
  he(ge.matrixDefense, z.matrixDefense),
  he(ge.mentalResistance, z.perception)
];
class O {
  static init() {
    Handlebars.registerHelper("fixedDefenseCode", (e) => O.fixedDefenseCode(e));
  }
  static all(e = void 0) {
    return e ? Ye.filter(e) : Ye;
  }
  static getActorActions(e) {
    return Ye.filter((t) => t.actorTypes.includes(e.type) && t.condition(e));
  }
  static fixedDefenseCode(e) {
    return D.fixedDefenseCode[e] ?? e;
  }
  static getActorDefenses(e) {
    return ve.map((t) => {
      const s = O.getActorAction(e, t.actionCode);
      return O._convertToDefense(s, t);
    }).filter((t) => t == null ? void 0 : t.code);
  }
  static getDefenseAttributeAction(e) {
    var t;
    return (t = ve.find((s) => s.code == e)) == null ? void 0 : t.actionCode;
  }
  static getActorAction(e, t) {
    return O.getActorActions(e).find((s) => s.code == t);
  }
  static getActorDefense(e, t) {
    t = O.fixedDefenseCode(t);
    const s = ve.find((i) => i.code == t), a = O.getActorAction(e, s.actionCode);
    return K.checkActorDefenseAction(a, e, s), O._convertToDefense(a, s);
  }
  static _convertToDefense(e, t) {
    return e ? foundry.utils.mergeObject(
      t,
      e ?? {},
      { overwrite: !1, inplace: !1 }
    ) : void 0;
  }
  static getDefenses() {
    return ve;
  }
  static prepareShortcut(e, t) {
    const s = O.getActorActions(e).find((a) => a.code == t);
    if (s)
      return {
        icon: s.icon,
        label: game.i18n.localize(s.labelkey),
        callback: (a) => a.actor.rollAttributeAction(t)
      };
  }
}
const Qe = {
  canMark: !1,
  marks: [],
  value: 0,
  max: 0,
  resistance: 0
}, _ = {
  connectionMode: {
    disconnected: "disconnected",
    augmented: "augmented",
    virtual: "virtual"
  }
};
class pe {
  static resolveConnectionMode(e) {
    switch (e) {
      case _.connectionMode.disconnected:
      case _.connectionMode.augmented:
      case _.connectionMode.virtual:
        return e;
      case void 0:
      default:
        return _.connectionMode.disconnected;
    }
  }
  static getNextConnectionMode(e) {
    switch (e) {
      case _.connectionMode.disconnected:
        return _.connectionMode.augmented;
      case _.connectionMode.augmented:
        return _.connectionMode.virtual;
      default:
      case _.connectionMode.virtual:
        return _.connectionMode.disconnected;
    }
  }
}
const nt = [l.itemType.shadowamp, l.itemType.weapon, l.itemType.cyberdeck];
class b {
  constructor() {
    this.modifiers = {
      groups: H.mapObjetToKeyValue(n.modifier.group, "key", "label"),
      roll: b._buildGroupOptions("roll"),
      attribute: b._buildGroupOptions("attribute"),
      monitor: b._buildGroupOptions("monitor"),
      other: b._buildGroupOptions("other")
    }, Hooks.once("ready", () => this.onReady());
  }
  static _buildGroupOptions(e) {
    switch (e) {
      case "attribute":
        return {
          label: n.modifier.group[e],
          effects: H.hbsAttributes.map((t) => ({ key: t.value, label: t.labelkey })),
          categories: []
        };
    }
    return {
      label: n.modifier.group[e],
      effects: H.mapObjetToKeyValue(n.modifier[e].effect, "key", "label"),
      categories: H.mapObjetToKeyValue(n.modifier[e].category, "key", "label")
    };
  }
  async onReady() {
    Handlebars.registerHelper("modifierHasSubCategory", (e, t, s) => this.hasSubCategory(e, t, s)), Handlebars.registerHelper("modifierSelectOption", (e, t) => this.getSelectOptions(e, t));
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
        return H.getAttributes().map((s) => ({ key: s.value, label: s.labelkey }));
      case "skill":
        return game.system.anarchy.skills.getSkills().map((s) => ({ key: s.code, label: s.labelkey }));
      case "attributeAction":
        const t = O.all().map((s) => ({ key: s.code, label: s.labelkey }));
        return A.distinct(t.map((s) => s.key)).map((s) => t.find((a) => a.key == s));
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
            return s.subCategory == e.attributeAction || s.subCategory == O.getDefenseAttributeAction(e.defenseAction);
        }
      return !1;
    };
  }
  static computeRollModifiers(e, t, s) {
    const a = b.buildRollModifiersFilter(t, s), i = (g) => g.group == "roll" && g.effect == s && a(g), r = b._activeItems(e).map((g) => b.itemModifiers(g, i)).reduce((g, F) => g.concat(F), []).sort(A.descending((g) => g.modifier.value)), c = b.$sumShadowampModifiers(r.filter((g) => nt.includes(g.item.type)).map((g) => g.modifier.value)), m = A.sumValues(r.filter((g) => !nt.includes(g.item.type)).map((g) => g.modifier.value));
    return {
      value: c + m,
      sources: r
    };
  }
  static $sumShadowampModifiers(e) {
    const t = e.find((i) => i > 3) ?? 0, s = A.sumValues(e.filter((i) => i < 0)), a = Math.min(3, A.sumValues(e.filter((i) => i > 0 && i <= 3)));
    return s + Math.max(a, t);
  }
  static computeModifiers(e, t, s = void 0, a = void 0) {
    const i = b._createFilter(t, s, a), r = b._activeItems(e).map((m) => b.itemModifiers(m, i)).reduce((m, g) => m.concat(g), []);
    return {
      value: A.sumValues(r, (m) => m.modifier.value),
      sources: r
    };
  }
  static sumMonitorModifiers(e, t, s) {
    return b.sumModifiers(b._activeItems(e), "monitor", t, s);
  }
  static sumModifiers(e, t, s, a) {
    const i = b._createFilter(t, s, a), r = b._activeItems(e).map((c) => b.itemModifiers(c, i)).reduce((c, m) => c.concat(m), []);
    return A.sumValues(r, (c) => c.modifier.value);
  }
  static _createFilter(e, t, s) {
    return (a) => a.group == e && a.effect == (t ?? a.effect) && a.category == (s ?? a.category);
  }
  static countModifiers(e, t, s = void 0, a = void 0) {
    const i = b._createFilter(t, s, a);
    return b._activeItems(e).map((c) => b.itemModifiers(c, i)).reduce((c, m) => c.concat(m), []).count;
  }
  static itemModifiers(e, t) {
    return b._listItemModifiers(e, t).map((s) => b._itemModifier(e, s));
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
const ct = {
  highlighted: ["far fa-times-circle", "fas fa-dice-one", "fas fa-dice-two", "fas fa-dice-three", "fas fa-dice-four", "fas fa-dice-five", "fas fa-dice-six"],
  dimmed: ["far fa-times-circle", "far fa-dice-one", "far fa-dice-two", "far fa-dice-three", "far fa-dice-four", "far fa-dice-five", "far fa-dice-six"]
};
class B {
  static init() {
    Hooks.once("ready", async () => await this.onReady()), Handlebars.registerHelper("dice-cursor-array", (e, t) => B.array(e ?? 0, t ?? 5)), Handlebars.registerHelper("dice-cursor-fas", (e, t) => B.fasClass(e, t)), Handlebars.registerHelper("dice-cursor-active", (e, t) => B.activeClass(e, t)), Handlebars.registerHelper("dice-cursor-color", (e, t) => B.colorClass(e, t));
  }
  static async onReady() {
    await loadTemplates([
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
    return B.isActive(e, t) ? "active" : "inactive";
  }
  static fasClass(e, t) {
    const s = B.isActive(e, t) ? ct.highlighted : ct.dimmed;
    return B.$getFas(s, Math.abs(e));
  }
  static colorClass(e, t) {
    return e == 0 || !t ? e < 0 ? "fixed-dice-malus" : "fixed-dice-bonus" : e < 0 ? "variable-dice-malus" : "variable-dice-bonus";
  }
  static $getFas(e, t) {
    return e[t > 6 ? t % 6 : t];
  }
  static async diceCursor({ value: e, min: t, max: s, editable: a }) {
    return await renderTemplate("systems/anarchy/templates/roll/parts/dice-cursor.hbs", {
      value: e,
      min: t,
      max: s,
      editable: a
    });
  }
}
class Bt {
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
}, vt = `${d}.${C.ANARCHY_HACK}`, ye = {
  id: d,
  name: "Standard Shadowrun Anarchy",
  hack: {
    checkbars: () => V
  }
};
globalThis.ANARCHY_HOOKS = C;
globalThis.SETTING_KEY_ANARCHY_HACK = vt;
globalThis.SHADOWRUN_ANARCHY_NO_HACK = ye;
class Z {
  constructor() {
    this.hooks = [], this.hacks = {}, this.hackNames = {}, this.hookMethods = {}, this._register(C.ANARCHY_HACK), this._register(C.PROVIDE_BASE_ESSENCE), Hooks.on(C.ANARCHY_HACK, (e) => e(ye)), Hooks.on(C.PROVIDE_BASE_ESSENCE, (e) => e(ye, (t) => 6)), Hooks.on(C.PROVIDE_MALUS_ESSENCE, (e) => e(ye, (t, s) => Bt.getMalus(t, s))), Hooks.on("updateSetting", async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(C.ANARCHY_HACK, (e) => {
      this.hacks[e.id] = e, this.hackNames[e.id] = e.name;
    }), game.settings.register(d, C.ANARCHY_HACK, {
      scope: "world",
      name: game.i18n.localize(n.settings.anarchyHack.name),
      hint: game.i18n.localize(n.settings.anarchyHack.hint),
      config: !0,
      default: ye.id,
      choices: this.hackNames,
      type: String
    }), this.applySelectedAnarchyHack();
  }
  async onUpdateSetting(e, t, s, a) {
    e.key == vt && this.applySelectedAnarchyHack();
  }
  applySelectedAnarchyHack() {
    const e = this.getSelectedHack();
    e && (u.hackCheckbars(e.hack.checkbars()), [
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
    Z.instance()._register(e);
  }
  _register(e) {
    if (console.log(h + "HooksManager.register", e), !e.startsWith(d + "-"))
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
}, Kt = [
  // attribute1
  {
    code: "attribute1",
    options: {
      order: 1,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/select-attribute.hbs`
    },
    condition: (o) => Object.values(D.rollType).includes(o.mode),
    isUsed: (o) => !0,
    factory: (o) => {
      var t;
      const e = o.attribute1 ?? ((t = o.skill) == null ? void 0 : t.system.attribute);
      return {
        labelkey: e ? n.attributes[e] : n.attributes.noAttributes,
        value: o.actor.getAttributeValue(e, o.activeItem),
        flags: { editable: o.skill },
        selected: e,
        choices: H.getAttributes((s) => o.attributes.includes(s))
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
    condition: (o) => [D.rollType.attribute, D.rollType.attributeAction, D.rollType.defense].includes(o.mode),
    isUsed: (o) => o.used,
    onChecked: (o, e) => o.used = !!e,
    factory: (o) => {
      const e = o.attribute2;
      return {
        labelkey: e ? n.attributes[e] : n.attributes.noAttributes,
        value: o.actor.getAttributeValue(e, o.activeItem),
        flags: { editable: D.rollType.attribute == o.mode },
        selected: e,
        choices: H.getAttributes((t) => o.attributes.includes(t))
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
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
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
      category: v.pool,
      value: 0,
      labelkey: n.common.roll.modifiers.social.credibility,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`
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
      labelkey: n.common.roll.modifiers.poolModifiers,
      order: 5,
      category: v.pool,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: -4,
      max: 4
    },
    factory: (o) => ne.computeRollModifiers(v.pool, o)
  },
  // wounds
  {
    code: "wounds",
    options: {
      flags: { optional: !0 },
      order: 10,
      category: v.pool,
      labelkey: n.common.roll.modifiers.wounds,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`
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
      category: v.pool,
      value: 1,
      labelkey: n.common.roll.modifiers.virtualReality,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 1,
      max: 1
    },
    condition: (o) => o.actor.isMatrixSkill(o.skill) && o.actor.isMatrixConnected(_.connectionMode.virtual),
    factory: (o) => ({
      flags: { used: o.actor.isMatrixSkill(o.skill) && o.actor.isMatrixConnected(_.connectionMode.virtual) }
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
      labelkey: n.common.roll.modifiers.other,
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
      labelkey: n.common.roll.modifiers.drain,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
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
      flags: { editDice: !1, optional: !0, used: !0, hideParameter: !0 },
      order: 40,
      category: v.convergence,
      value: 1,
      labelkey: n.common.roll.modifiers.convergence,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
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
      category: v.glitch,
      labelkey: n.common.roll.modifiers.glitch,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      hbsTemplateChat: `${y}/chat/parts/glitch.hbs`,
      min: 0,
      max: 5
    },
    isUsed: (o) => o.value > 0,
    factory: (o) => {
      const e = o.actor.getWounds(), t = ne.computeRollModifiers(v.glitch, o);
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
      category: v.glitch,
      value: 0,
      labelkey: n.common.roll.modifiers.social.rumor,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      hbsTemplateChat: `${y}/chat/parts/glitch.hbs`,
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
      category: v.reroll,
      labelkey: n.common.roll.modifiers.reroll,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (o) => ne.computeRollModifiers(v.reroll, o)
  },
  // reduction from opponent
  {
    code: "reduced",
    options: {
      order: 29,
      category: v.pool,
      labelkey: n.common.roll.modifiers.reduced,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
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
      category: v.rerollForced,
      labelkey: n.common.roll.modifiers.rerollForced,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: -5,
      max: 0
    },
    factory: (o) => {
      var t;
      const e = ne.computeRollModifiers(v.successReroll, o);
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
      category: v.pool,
      value: 0,
      min: 0,
      max: 3,
      labelkey: n.common.roll.modifiers.anarchyDisposition,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
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
      category: v.risk,
      value: 0,
      labelkey: n.common.roll.modifiers.anarchyRisk,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`,
      hbsTemplateChat: `${y}/chat/parts/anarchy-risk.hbs`
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
      category: v.edge,
      labelkey: n.common.roll.modifiers.edge,
      hbsTemplateRoll: `${y}/roll/parts/check-option.hbs`
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
      category: v.opponentPool,
      labelkey: n.common.roll.modifiers.opponentPool,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (o) => ne.computeRollModifiers(v.opponentPool, o),
    condition: (o) => !o.attributeAction
  },
  // force opponent rerolls
  {
    code: "opponentReroll",
    options: {
      flags: { editDice: !0, editable: !0, forceDisplay: !0 },
      order: 100,
      category: v.opponentReroll,
      value: 0,
      labelkey: n.common.roll.modifiers.opponentReroll,
      hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
      min: 0,
      max: 4
    },
    factory: (o) => ne.computeRollModifiers(v.opponentReroll, o),
    condition: (o) => !o.attributeAction
  }
];
class ne {
  constructor() {
    this.registeredParameters = {}, Z.register(C.REGISTER_ROLL_PARAMETERS), Z.register(C.MODIFY_ROLL_PARAMETER), Hooks.on(C.MODIFY_ROLL_PARAMETER, (e) => this._validate(e)), Hooks.once(C.REGISTER_ROLL_PARAMETERS, (e) => Kt.forEach(
      (t) => e(t)
    )), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    Hooks.callAll(C.REGISTER_ROLL_PARAMETERS, async (t) => {
      Hooks.callAll(C.MODIFY_ROLL_PARAMETER, t), t.ignore || await this._register(t);
    });
    const e = A.distinct([].concat(Object.values(this.registeredParameters).map((t) => t.options.hbsTemplateRoll)).concat(Object.values(this.registeredParameters).map((t) => t.options.hbsTemplateChat)).filter((t) => t != null));
    await loadTemplates(A.distinct(e)), await loadTemplates([`${y}/roll/parts/parameter-label.hbs`]);
  }
  _validate(e) {
    e.code || (console.error(`${h} RollParameter does not have a code`, e), e.ignore = !0);
  }
  async _register(e) {
    if (this.registeredParameters[e.code]) {
      console.error(`${h} RollParameter ${e.code} is already registered`, e);
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
    const t = e.filter((i) => this.isParameterUsed(i)), s = A.classify(t, (i) => i.category), a = {};
    return Object.values(s).forEach((i) => a[i[0].category] = A.sumValues(i, (r) => r.value ?? (r.optional ? 1 : 0))), a;
  }
  isParameterUsed(e) {
    const t = this.findParameter(e.code);
    return (t == null ? void 0 : t.isUsed) != null ? t.isUsed(e) : e.value != null ? e.value != 0 : (console.error(`registered parameter ${t.code} does not have isUsed method`, t), !1);
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
    const s = (i) => i.type != l.itemType.weapon || t.weapon && i.id == t.weapon.id, a = t.actor.items.filter(s);
    return b.computeRollModifiers(a, t, e);
  }
}
class R extends Dialog {
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
    const s = foundry.utils.mergeObject(R.prepareActorRoll(e), {
      mode: D.rollType.attribute,
      attribute1: t
    });
    await R.create(s);
  }
  static async rollAttributeAction(e, t) {
    const s = foundry.utils.mergeObject(R.prepareActorRoll(e), {
      mode: D.rollType.attributeAction,
      attributeAction: t.code,
      attribute1: t.attributeFunction1(e),
      attribute2: t.attributeFunction2(e)
    });
    await R.create(s);
  }
  static async rollAttribute(e, t) {
    const s = foundry.utils.mergeObject(R.prepareActorRoll(e), {
      mode: D.rollType.attribute,
      attribute1: t
    });
    await R.create(s);
  }
  static async rollSkill(e, t, s) {
    const a = foundry.utils.mergeObject(R.prepareActorRoll(e), {
      mode: D.rollType.skill,
      skill: t,
      attribute1: (t == null ? void 0 : t.system.attribute) ?? l.attributes.agility,
      specialization: s
    });
    await R.create(a);
  }
  static async rollWeapon(e, t, s, a) {
    const i = foundry.utils.mergeObject(R.prepareActorRoll(e), {
      mode: D.rollType.weapon,
      weapon: s,
      skill: t,
      attribute1: (t == null ? void 0 : t.system.attribute) ?? e.getPhysicalAgility(),
      specialization: t == null ? void 0 : t.system.specialization,
      targeting: a
    });
    await R.create(i);
  }
  static async rollDefense(e, t, s, a = void 0) {
    const i = foundry.utils.mergeObject(R.prepareActorRoll(e), {
      mode: D.rollType.defense,
      attribute1: t.attributeFunction1(e),
      attribute2: t.attributeFunction2(e),
      defenseAction: t.code,
      attackRoll: s.attackRoll,
      tokenId: s.defenderTokenId,
      choiceChatMessageId: s.choiceChatMessageId
    });
    await R.create(i);
  }
  static async itemAttributeRoll(e, t) {
    const s = foundry.utils.mergeObject(R.prepareActorRoll(e.actor), {
      mode: D.rollType.attribute,
      item: e,
      attribute1: t,
      attributes: e.actor.getUsableAttributes(e)
    });
    await R.create(s);
  }
  static async create(e) {
    const t = game.system.anarchy.rollParameters.build(e).sort(A.ascending((i) => i.order ?? 200));
    foundry.utils.mergeObject(e, {
      ENUMS: H.getEnums((i) => e.attributes.includes(i)),
      ANARCHY: n,
      parameters: t
    });
    const s = await renderTemplate(`${y}/roll/roll-dialog-title.hbs`, e), a = await renderTemplate(`${y}/roll/roll-dialog.hbs`, e);
    new R(s, a, e).render(!0);
  }
  constructor(e, t, s) {
    const a = {
      title: e,
      content: t,
      default: "roll",
      buttons: {
        roll: {
          label: game.i18n.localize(n.common.roll.button),
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
      const s = this._getRollParameter(t), a = this._getEventItem(t, this.roll.actor), i = t.currentTarget.value, r = this.roll.actor.getAttributeValue(i, a);
      this.roll[s.code] = i, await this._setParameterSelectedOption(s, i, r);
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
    this.html.find(`.parameter[data-parameter-code='${e.code}'] .input-cursor-parameter`).empty().append(s), this.activateDiceParameterClick(), this.html.find(`.parameter[data-parameter-code='${e.code}'] input.parameter-value`).val(e.value);
  }
  async renderDiceCursor(e) {
    var t;
    return await B.diceCursor({ value: e.value, min: e.min, max: e.max, editable: (t = e.flags) == null ? void 0 : t.editDice });
  }
  _getSelectedOption(e) {
    return this.html.find(`.parameter[data-parameter-code='${e.code}'] select.select-option-parameter option:selected`).text();
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
const Se = "selected-skill-list", qt = `${d}.${Se}`, k = l.attributes, ae = D.defenses, xe = "shadowrun-anarchy-en", lt = { code: "knowledge", attribute: k.knowledge, icon: `${w}/knowledge.svg` }, de = [
  { code: "athletics", attribute: k.strength, icon: `${w}/athletics.svg` },
  { code: "acrobatics", attribute: k.agility, icon: `${w}/escape-artist.svg`, lang: "fr" },
  { code: "closeCombat", attribute: k.agility, icon: `${w}/close-combat.svg`, defense: ae.physicalDefense },
  { code: "projectileWeapons", attribute: k.agility, icon: `${w}/projectile-weapons.svg`, defense: ae.physicalDefense },
  { code: "firearms", attribute: k.agility, icon: `${w}/firearms.svg`, defense: ae.physicalDefense },
  { code: "heavyWeapons", attribute: k.agility, icon: `${w}/heavy-weapons.svg`, defense: ae.physicalDefense },
  { code: "vehicleWeapons", attribute: k.agility, icon: `${w}/vehicle-weapons.svg`, defense: ae.physicalDefense },
  { code: "stealth", attribute: k.agility, icon: `${w}/stealth.svg` },
  { code: "pilotingGround", attribute: k.agility, icon: `${w}/piloting-ground-steering-wheel.svg` },
  { code: "pilotingOther", attribute: k.agility, icon: `${w}/piloting-other.svg` },
  { code: "escapeArtist", attribute: k.agility, icon: `${w}/escape-artist.svg`, lang: "en" },
  { code: "conjuring", attribute: k.willpower, hasDrain: !0, icon: `${w}/conjuring.svg` },
  { code: "sorcery", attribute: k.willpower, hasDrain: !0, icon: `${w}/sorcery.svg` },
  { code: "astralCombat", attribute: k.willpower, icon: `${w}/astral-combat.svg`, defense: ae.astralDefense },
  { code: "survival", attribute: k.willpower, icon: `${w}/survival.svg` },
  { code: "biotech", attribute: k.logic, icon: `${w}/biotech.svg` },
  { code: "hacking", attribute: k.logic, hasConvergence: !0, icon: `${w}/hacking.svg`, defense: ae.matrixDefense },
  { code: "electronics", attribute: k.logic, icon: `${w}/electronics.svg` },
  { code: "engineering", attribute: k.logic, icon: `${w}/engineering.svg` },
  { code: "tasking", attribute: k.logic, hasDrain: !0, icon: `${w}/tasking.svg` },
  { code: "tracking", attribute: k.logic, icon: `${w}/tracking.svg` },
  { code: "animals", attribute: k.charisma, icon: `${w}/animals.svg`, lang: "fr" },
  { code: "con", attribute: k.charisma, isSocial: !0, icon: `${w}/con-art.svg` },
  { code: "etiquette", attribute: k.charisma, isSocial: !0, icon: `${w}/etiquette.svg`, lang: "fr" },
  { code: "intimidation", attribute: k.charisma, isSocial: !0, icon: `${w}/intimidation.svg` },
  { code: "negotiation", attribute: k.charisma, isSocial: !0, icon: `${w}/negotiation.svg` },
  { code: "disguise", attribute: k.charisma, icon: `${w}/disguise.svg`, lang: "en" }
], Qt = ["tasking", "hacking"];
class Xt {
  constructor() {
    this.skillSets = {}, Z.register(C.PROVIDE_SKILL_SET), Hooks.on(
      C.PROVIDE_SKILL_SET,
      (e) => e(xe, "Shadowrun Anarchy EN", de.filter((t) => !t.lang || t.lang == "en"), { lang: "en" })
    ), Hooks.on(
      C.PROVIDE_SKILL_SET,
      (e) => e("shadowrun-anarchy-fr", "Shadowrun Anarchy FR", de.filter((t) => !t.lang || t.lang == "fr"), { lang: "fr" })
    ), Hooks.on("updateSetting", async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    this.$prepareSkill(lt), Hooks.callAll(C.PROVIDE_SKILL_SET, (t, s, a, i) => {
      const r = this.$prepareSkillSet(t, s, a, i);
      r && (this.skillSets[r.id] = r);
    });
    const e = Object.fromEntries(Object.values(this.skillSets).map((t) => [t.id, t.name]));
    game.settings.register(d, Se, {
      scope: "world",
      name: game.i18n.localize(n.settings.skillSet.name),
      hint: game.i18n.localize(n.settings.skillSet.hint),
      config: !0,
      default: xe,
      choices: e,
      type: String
    }), this.selectedSkills = game.settings.get(d, Se);
  }
  async onUpdateSetting(e, t, s, a) {
    e.key == qt && (this.selectedSkills = game.settings.get(d, Se));
  }
  get(e) {
    return this.getSkills({ withKnowledge: !0 }).find((t) => t.code == e);
  }
  getSkills(e = { withKnowledge: !1 }) {
    const t = this.$getConfiguredSkills().sort(A.ascending((s) => s.label));
    return e.withKnowledge ? [lt, ...t] : t;
  }
  $getConfiguredSkills() {
    return (this.skillSets[this.selectedSkills] ?? this.skillSets[xe]).skills;
  }
  $prepareSkillSet(e, t, s, a) {
    const i = foundry.utils.mergeObject({ id: e, name: t, skills: s }, a);
    if (this.$validateSkillSet(i))
      return i.skills.forEach((r) => {
        this.$prepareSkill(r);
      }), i;
  }
  $prepareSkill(e) {
    e.labelkey = e.labelkey ?? n.skill[e.code], e.icon = e.icon ?? `${ue}/icons/skills/skills.svg`;
  }
  $validateSkillSet(e) {
    function t(s, a = "") {
      if (!s)
        throw a;
    }
    try {
      t(e.id && e.name, "Skills list does not have an id or name");
      const s = this.skillSets[e.id];
      t(!s, `Skills list ${e.id} is already registered under name ${s == null ? void 0 : s.name}`), t(Array.isArray(e.skills), "Missing skills array"), e.skills.forEach((i) => {
        t(i.code, `Missing skill code for ${i} in ${e.id}`), t(i.labelkey || n.skill[i.code], `Missing skill localization key for ${i.code}`), t(i.attribute, `Missing skill attribute for ${i.code}`);
      });
      const a = e.skills.map((i) => i.code);
      return t(e.skills.length == A.distinct(a).length, `Duplicate skill codes in ${a}`), !0;
    } catch (s) {
      return console.warn(s + (e.id ? ` in list ${e.id}` : " in unidentified list"), e), !1;
    }
  }
}
const je = "damage-mode", Zt = `${d}.${je}`, we = {}, _e = {};
class S {
  static init() {
    Z.register(C.PROVIDE_DAMAGE_MODE), Hooks.on("updateSetting", async (e, t, s, a) => S.onUpdateSetting(e, t, s, a)), Hooks.on(C.PROVIDE_DAMAGE_MODE, (e) => {
      e("resistanceArmorMonitor", n.settings.damageMode.values.resistanceArmorMonitor, S.sufferDamageResistanceArmorMonitor), e("armorResistanceMonitor", n.settings.damageMode.values.armorResistanceMonitor, S.sufferDamageArmorResistanceMonitor), e("armorGivesResistance", n.settings.damageMode.values.armorGivesResistance, S.sufferDamageArmorAsResistance_Earthdawn), e("armorGiveResistanceHitsAvoid", n.settings.damageMode.values.armorGiveResistanceHitsAvoid, S.sufferDamageArmorAsResistance_Cyberpunk);
    }), Hooks.once("ready", () => S.onReady());
  }
  static onReady() {
    S._registerDamageModeSetting(), S._selectDamageMode();
  }
  static _registerDamageModeSetting() {
    Hooks.callAll(C.PROVIDE_DAMAGE_MODE, (e, t, s) => {
      we[e] = game.i18n.localize(t), _e[e] = s;
    }), game.settings.register(d, je, {
      scope: "world",
      name: game.i18n.localize(n.settings.damageMode.name),
      hint: game.i18n.localize(n.settings.damageMode.hint),
      config: !0,
      default: Object.keys(we)[0],
      choices: we,
      type: String
    });
  }
  static async onUpdateSetting(e, t, s, a) {
    e.key == Zt && S._selectDamageMode();
  }
  static _selectDamageMode() {
    let e = game.settings.get(d, je);
    _e[e] || (e = Object.keys(we)[0]), S.damageModeCode = e, S.damageModeMethod = _e[e];
  }
  static async sufferDamage(e, t, s, a, i, r, c) {
    const m = e.getDamageMonitor(t);
    K.checkActorCanReceiveDamage(t, m, e), await (S.damageModeMethod ?? S.sufferDamageResistanceArmorMonitor)(e, m, s, a, i, r), await e.applyArmorDamage(t, b.sumModifiers([c], "other", "damageArmor"));
  }
  static async sufferMarks(e, t) {
    await u.addCounter(e, l.monitors.marks, 1, t.id);
  }
  static async sufferDamageResistanceArmorMonitor(e, t, s, a, i, r) {
    if (t == l.monitors.marks) {
      await S.sufferMarks(e, r);
      return;
    }
    const c = u.resistance(e, t);
    let m = 0;
    if (i) {
      const g = Math.min(c, s), F = Math.min(c - g, a);
      m = s - g, u.useArmor(t) && (m -= await S.damageToArmor(e, m)), m += a - F;
    } else
      m = s + a - c, u.useArmor(t) && (m -= await S.damageToArmor(e, m));
    m > 0 && await u.addCounter(e, t, m);
  }
  static async sufferDamageArmorResistanceMonitor(e, t, s, a, i, r) {
    if (t == l.monitors.marks) {
      await S.sufferMarks(e, r);
      return;
    }
    let c = 0;
    return u.useArmor(t) ? i ? (s -= await S.damageToArmor(e, s), c = a + s) : (c = a + s, c -= await S.damageToArmor(e, c)) : c = s + a, c -= u.resistance(e, t), c > 0 && await u.addCounter(e, t, c), c;
  }
  static async sufferDamageArmorAsResistance_Cyberpunk(e, t, s, a, i, r) {
    if (t == l.monitors.marks) {
      await S.sufferMarks(e, r);
      return;
    }
    let c = s + a;
    if (u.useArmor(t) && c > 0) {
      const m = i ? a : 0, g = Math.max(0, S._computeArmorResistance(e) - m);
      g > 0 && (await u.addCounter(e, "armor", 1), c -= g);
    }
    return c -= u.resistance(e, t), c > 0 && await u.addCounter(e, t, c), Math.max(c, 0);
  }
  static async sufferDamageArmorAsResistance_Earthdawn(e, t, s, a, i, r) {
    if (t == l.monitors.marks) {
      await S.sufferMarks(e, r);
      return;
    }
    let c = s + a;
    if (u.useArmor(t) && !i && c > 0) {
      const m = S._computeArmorResistance(e);
      m > 0 && (await u.addCounter(e, "armor", 1), c -= m);
    }
    return c -= S._computeStrengthResistance(e, t), c -= u.resistance(e, t), c > 0 && await u.addCounter(e, t, c), c;
  }
  static async damageToArmor(e, t) {
    if (t > 0) {
      const s = u.max(e, l.monitors.armor), a = u.getCounterValue(e, l.monitors.armor), i = Math.min(s - a, t), r = u.resistance(e, l.monitors.armor), c = Math.max(0, i - r);
      return c > 0 && await u.addCounter(e, l.monitors.armor, c), i;
    } else
      return 0;
  }
  static _computeArmorResistance(e) {
    const t = u.max(e, "armor"), s = u.getCounterValue(e, "armor"), a = Math.max(0, t - s);
    return Math.max(0, Math.ceil(a / 3));
  }
  static _computeStrengthResistance(e, t) {
    switch (t) {
      case l.monitors.matrix:
        return 0;
    }
    const s = e.getAttributeValue(l.attributes.strength);
    return Math.max(0, Math.floor(s / 4));
  }
}
class T extends Actor {
  static init() {
    Hooks.on("updateActor", (e, t, s, a) => {
      var i;
      return (i = Y.firstResponsible(e)) == null ? void 0 : i.onUpdateActor(t, s);
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
      const c = e.getAttributeValue(s.system.attribute) + s.system.value, m = e.getAttributeValue(a.system.attribute) + a.system.value;
      return c > m ? -1 : c < m ? 1 : 0;
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
    return this.type == l.actorTypes.vehicle;
  }
  prepareData() {
    super.prepareData(), this.cleanupFavorites();
  }
  prepareDerivedData() {
    this.prepareMatrixMonitor(), this.system.modifiers = {
      initiative: b.sumModifiers(this.items, "other", "initiative")
    }, this.system.monitors && Object.entries(this.system.monitors).forEach((e) => {
      e[1].maxBonus = b.sumMonitorModifiers(this.items, e[0], "max"), e[1].resistanceBonus = b.sumMonitorModifiers(this.items, e[0], "resistance");
    }), this.system.attributes && Object.entries(this.system.attributes).forEach((e) => e[1].total = this.getAttributeValue(e[0])), this.system.state = this.computeState();
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
      monitor: Qe,
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
    return Qt.includes(e == null ? void 0 : e.system.code);
  }
  async nextConnectionMode(e) {
  }
  async defSetMatrixMonitor(e, t) {
    this.getMatrixDetails().hasMatrix ? await this.update({ [e]: t }) : game.system.anarchy.hacks.i18n.format(n.actor.monitors.noMatrixMonitor, { actor: this.name });
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
    return t == 0 ? 0 : Ct + A.divup(t, 2);
  }
  getAttributeActions() {
    return O.getActorActions(this);
  }
  getUsableAttributes(e = void 0) {
    const t = (e ? [e] : this.items).map((a) => a.getUsableAttributes()).reduce((a, i) => a.concat(i), []), s = A.distinct(this.getAttributes().concat(t));
    return s.sort(A.ascendingBySortedArray(H.sortedAttributeKeys)), s;
  }
  getAttributeValue(e, t = void 0) {
    let s = 0;
    if (e = this.getCorrespondingAttribute(e), e) {
      if (this.getAttributes().includes(e))
        s = this.system.attributes[e].value;
      else if (t) {
        if (this.isEmerged() && e == l.attributes.firewall)
          return this.getAttributeValue(l.attributes.logic);
        s = (t == null ? void 0 : t.getAttributeValue(e)) ?? 0;
      } else {
        const a = this.items.filter((i) => i.isActive() && i.getAttributes().includes(e));
        if (a.length > 0) {
          const i = a.map((r) => r.getAttributeValue(e) ?? 0);
          s = Math.max(...i);
        }
      }
      s += b.sumModifiers(this.items, "attribute", e);
    }
    return s;
  }
  getDamageMonitor(e) {
    switch (e) {
      case l.monitors.matrix:
      case l.monitors.marks:
        return e;
    }
  }
  async applyArmorDamage(e, t = 0) {
    switch (e) {
      case l.monitors.physical:
      case l.monitors.stun:
        await S.damageToArmor(this, t);
    }
  }
  async rollAttribute(e) {
    await R.rollAttribute(this, e);
  }
  async rollAttributeAction(e) {
    const t = O.getActorAction(this, e);
    await R.rollAttributeAction(this, t);
  }
  async rollSkill(e, t) {
    await R.rollSkill(this, e, t);
  }
  async rollWeapon(e) {
    var i, r, c;
    K.checkWeaponDefense(e, this);
    const t = (i = e.validateTargets(this)) == null ? void 0 : i.map((m) => m.id), s = {
      attackerTokenId: (c = (r = game.scenes.current) == null ? void 0 : r.tokens.find((m) => {
        var g;
        return ((g = m.actor) == null ? void 0 : g.id) == this.id;
      })) == null ? void 0 : c.id,
      targetedTokenIds: t
    }, a = this.items.find((m) => e.isWeaponSkill(m));
    await R.rollWeapon(this, a, e, s);
  }
  async rollDefense(e) {
    const t = e.attack.defense, s = O.getActorDefense(this, t);
    await R.rollDefense(this, s, e);
  }
  async rollPilotDefense(e) {
  }
  async rollDrain(e) {
  }
  async rollConvergence(e) {
  }
  async switchMonitorCheck(e, t, s, a = void 0) {
    await u.switchMonitorCheck(this, e, t, s, a);
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
      case l.monitors.matrix:
      case l.monitors.marks:
        return this.hasMatrixMonitor();
      case l.monitors.physical:
      case l.monitors.stun:
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
    const e = b.sumModifiers(this.items, "other", "sceneAnarchy");
    e > 0 && await u.setCounter(this, l.monitors.sceneAnarchy, e);
  }
  async onLeaveCombat() {
    await u.setCounter(this, l.monitors.sceneAnarchy, 0);
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
    await u.addCounter(this, l.counters.social.credibility, -e);
  }
  async spendRumor(e) {
    await u.addCounter(this, l.counters.social.rumor, -e);
  }
  async spendAnarchy(e) {
    e && !this.hasPlayerOwner && await game.system.anarchy.gmAnarchy.npcConsumesAnarchy(this, e);
  }
  getRemainingEdge() {
    var e, t;
    return ((t = (e = this.system.counters) == null ? void 0 : e.edge) == null ? void 0 : t.value) ?? 0;
  }
  canUseEdge() {
    return this.getAttributes().includes(l.attributes.edge);
  }
  async spendEdge(e) {
    if (e != 0) {
      if (!this.canUseEdge()) {
        const t = game.system.anarchy.hacks.i18n.localize(n.common.errors.noEdgeForActor, {
          actor: this.name,
          actorType: game.system.anarchy.hacks.i18n.localize(n.actorType[this.type])
        });
        throw ui.notifications.warn(t), n.common.errors.noEdgeForActor + t;
      }
      await u.addCounter(this, l.counters.edge, -e);
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
    const s = T._prepareFavorite(e, t);
    return !!this.system.favorites.find((a) => T._isSameFavorite(s, a));
  }
  static _prepareFavorite(e, t) {
    return { type: e, id: t };
  }
  static _isSameFavorite(e, t) {
    return e.id == t.id && e.type == t.type;
  }
  async switchFavorite(e, t, s) {
    const a = T._prepareFavorite(t, s), i = this.system.favorites.filter((r) => !T._isSameFavorite(a, r));
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
    const s = T._prepareFavorite(e, t);
    if (e == "attributeAction") {
      const i = O.prepareShortcut(this, t);
      if (i)
        return foundry.utils.mergeObject(i, s);
    } else if (Object.values(l.itemType).includes(e)) {
      const i = (a = this.items.get(t)) == null ? void 0 : a.prepareShortcut();
      if (i)
        return foundry.utils.mergeObject(i, s);
    }
    return s;
  }
}
class Pe {
  static async confirmDeleteItem(e, t = () => {
  }) {
    new Dialog({
      title: game.i18n.localize(n.common.confirmation.del),
      content: game.i18n.format(n.common.confirmation.delItem, {
        name: e.name,
        type: game.i18n.localize(n.itemType.singular[e.type])
      }),
      buttons: {
        delete: {
          icon: p.fontAwesome("fas fa-check"),
          label: game.i18n.localize(n.common.del),
          callback: t
        },
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(n.common.cancel)
        }
      },
      default: "cancel"
    }).render(!0);
  }
  static async confirmDetachOwnerActor(e, t, s = () => {
  }) {
    new Dialog({
      title: game.i18n.localize(n.common.confirmation.del),
      content: game.i18n.format(n.common.confirmation.delOwner, {
        name: e.name
      }),
      buttons: {
        delete: {
          icon: p.fontAwesome("fas fa-check"),
          label: game.i18n.localize(n.common.del),
          callback: s
        },
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(n.common.cancel)
        }
      },
      default: "cancel"
    }).render(!0);
  }
  static async confirmAttachOrCopy(e, t, s = () => {
  }, a = () => {
  }) {
    new Dialog({
      title: game.i18n.localize(n.common.confirmation.attach),
      content: game.i18n.format(n.common.confirmation.attachOrCopy, {
        ownerName: e.name,
        ownerType: game.i18n.localize(n.actorType[e.type]),
        ownedName: t.name,
        ownedType: game.i18n.localize(n.actorType[t.type])
      }),
      buttons: {
        attach: {
          icon: p.fontAwesome("fas fa-user-tag"),
          label: game.i18n.localize(n.common.attach),
          callback: s
        },
        attachCopy: {
          icon: p.fontAwesome("fas fa-user-plus"),
          label: game.i18n.localize(n.common.attachCopy),
          callback: a
        },
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(n.common.cancel)
        }
      },
      default: "cancel"
    }).render(!0);
  }
}
class Xe extends Dialog {
  static async selectActor(e, t, s = async (i) => {
  }, a = async () => {
  }) {
    let i = { classes: ["select-actor"], width: 300, height: 300, "z-index": 99999 }, r = {
      title: e,
      content: await renderTemplate(`${y}/dialog/select-actor.hbs`, {
        actors: t
      }),
      buttons: {
        cancel: {
          icon: p.fontAwesome("fas fa-times"),
          label: game.i18n.localize(n.common.cancel),
          callback: async () => {
            await a();
          }
        }
      },
      default: "cancel"
    };
    new Xe(r, i, t, s).render(!0);
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
class Ae extends ActorSheet {
  get template() {
    return `${y}/actor/${this.actor.type}.hbs`;
  }
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      isGM: game.user.isGM,
      dragDrop: [{ dragSelector: ".item ", dropSelector: null }],
      classes: [game.system.anarchy.styles.selectCssClass(), "sheet", "actor"]
    });
  }
  getData(e) {
    let t = foundry.utils.mergeObject(
      super.getData(e),
      {
        items: {},
        anarchy: this.actor.getAnarchy(),
        ownerActor: this.actor.getOwnerActor(),
        ownedActors: this.actor.getOwnedActors(),
        options: {
          limited: this.document.limited,
          owner: this.document.isOwner,
          cssClass: this.isEditable ? "editable" : "locked"
        },
        ENUMS: foundry.utils.mergeObject({ attributeAction: this.actor.getAttributeActions() }, H.getEnums()),
        ANARCHY: n
      }
    );
    return t.options.classes.push(`actor-${this.actor.type}`), t.options.classes = A.distinct(t.options.classes), t.system = this.actor.system, A.classifyInto(t.items, this.actor.items), t;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".click-item-add").click(async (t) => {
      t.stopPropagation(), await this.createNewItem(this.getEventItemType(t));
    }), e.find(".click-item-edit").click(async (t) => {
      var s;
      t.stopPropagation(), (s = this.getEventItem(t)) == null || s.sheet.render(!0);
    }), e.find(".click-item-activate").click(async (t) => {
      t.stopPropagation();
      const s = this.getEventItem(t), a = s.system.inactive;
      await s.update({ "system.inactive": !a });
    }), e.find("a.click-matrix-connectionMode").click(async (t) => {
      t.stopPropagation(), await this.actor.nextConnectionMode(this.getEventItem(t));
    }), e.find(".click-item-delete").click(async (t) => {
      t.stopPropagation();
      const s = this.getEventItem(t);
      Pe.confirmDeleteItem(s, async () => {
        await this.actor.deleteEmbeddedDocuments("Item", [s.id]);
      });
    }), e.find(".click-favorite").click(async (t) => {
      t.stopPropagation(), this.onClickFavorite({
        skillId: $(t.currentTarget).attr("data-skill-id"),
        specialization: $(t.currentTarget).attr("data-specialization"),
        weaponId: $(t.currentTarget).attr("data-weapon-id"),
        attributeAction: $(t.currentTarget).attr("data-attributeAction"),
        isFavorite: $(t.currentTarget).attr("data-isFavorite")
      });
    }), e.find(".click-owner-actor-unlink").click(async (t) => {
      t.stopPropagation(), this.detachFromOwner(this.actor.getOwnerActor(), this.actor);
    }), e.find(".click-owned-actor-view").click(async (t) => {
      var s;
      t.stopPropagation(), (s = this.getEventOwnedActor(t)) == null || s.sheet.render(!0);
    }), e.find(".click-owned-actor-unlink").click(async (t) => {
      t.stopPropagation(), this.detachFromOwner(this.actor, this.getEventOwnedActor(t));
    }), e.find("a.click-checkbar-element").click(async (t) => {
      t.stopPropagation();
      const s = this.getEventItem(t), a = s ?? this.actor, i = this.getEventMonitorCode(t), r = i == "marks" ? $(t.currentTarget).closest(".anarchy-marks").attr("data-actor-id") : void 0;
      await a.switchMonitorCheck(
        i,
        this.getEventIndex(t),
        this.isEventChecked(t),
        r,
        s
      );
    }), e.find("a.click-add-mark-actor").click(async (t) => {
      t.stopPropagation(), this.onClickAddMark();
    }), e.find(".click-skill-roll").click(async (t) => {
      t.stopPropagation(), this.actor.rollSkill(
        this.getEventItem(t),
        this.getEventSkillSpecialization(t)
      );
    }), e.find(".click-roll-attribute").click(async (t) => {
      t.stopPropagation(), (this.getEventItem(t) ?? this.actor).rollAttribute(
        $(t.currentTarget).closest(".anarchy-attribute").attr("data-attribute")
      );
    }), e.find(".click-roll-attribute-action").click(async (t) => {
      t.stopPropagation(), this.actor.rollAttributeAction(this.getEventActionCode(t));
    }), e.find(".click-weapon-roll").click(async (t) => {
      t.stopPropagation(), this.actor.rollWeapon(this.getEventItem(t));
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
    const t = game.i18n.format(n.common.newName, { type: game.i18n.localize(n.itemType.singular[e]) });
    await this.actor.createEmbeddedDocuments("Item", [{ name: t, type: e }], { renderSheet: !0 });
  }
  async onClickFavorite(e) {
    const t = e.isFavorite != "true";
    e.skillId ? await this.actor.switchFavorite(t, l.itemType.skill, e.skillId, e.specialization) : e.weaponId ? await this.actor.switchFavorite(t, l.itemType.weapon, e.weaponId) : e.attributeAction ? await this.actor.switchFavorite(t, "attributeAction", e.attributeAction) : console.warn("Favorite not supported", e);
  }
  detachFromOwner(e, t) {
    Pe.confirmDetachOwnerActor(e, t, async () => {
      await t.attachToOwnerActor(), this.render(!0);
    });
  }
  async _onDropActor(e, t) {
    const s = fromUuidSync(t.uuid);
    (s == null ? void 0 : s.id) != this.actor.id && Pe.confirmAttachOrCopy(
      this.actor,
      s,
      async () => await s.attachToOwnerActor(this.actor),
      async () => await s.attachToOwnerActor(this.actor, "copy")
    ), super._onDropActor(e, t);
  }
  async onClickAddMark() {
    if (this.actor.canReceiveMarks()) {
      const e = game.i18n.format(n.common.selection.actorSettingMarks, { name: this.actor.name });
      await Xe.selectActor(
        e,
        game.actors.filter((t) => !this.actor.getActorMarks(t.id) && t.canSetMarks()),
        (t) => this.actor.addActorMark(t.id)
      );
    }
  }
}
class Ie extends Ae {
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
    return foundry.utils.mergeObject(
      super.getData(e),
      {
        essence: {
          value: t,
          adjust: this.actor.computeMalusEssence(t)
        },
        options: {
          viewMode: this.viewMode
        }
      }
    );
  }
  toggleViewMode() {
    this.viewMode = !this.viewMode, this.render();
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".click-toggle-view-mode").click(async (t) => this.toggleViewMode()), e.find(".click-word-add").click(async (t) => {
      t.stopPropagation(), this.createNewWord(this.getEventWordType(t));
    }), e.find(".click-word-say").click(async (t) => {
      t.stopPropagation(), this.actor.sayWord(
        this.getEventWordType(t),
        this.getEventWordId(t)
      );
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
      t.stopPropagation(), this.actor.deleteWord(
        this.getEventWordType(t),
        this.getEventWordId(t)
      );
    }), e.find(".click-celebrity-roll").click(async (t) => {
      t.stopPropagation(), this.actor.rollCelebrity();
    });
  }
  createNewWord(e) {
    const t = game.i18n.localize(n.common.newEntry);
    this.actor.createWord(e, t);
  }
  getEventWordType(e) {
    return $(e.currentTarget).closest(".define-wordType").attr("data-word-type");
  }
  getEventWordId(e) {
    return $(e.currentTarget).closest(".define-wordType").attr("data-word-id");
  }
}
class Fe extends Ie {
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
    super.activateListeners(e);
    const t = this.actor._id;
    e.find(".click-section").on("click", function() {
      const s = $(this).data("class");
      e.find(`.${s}`).toggleClass("closed"), localStorage.setItem(`${t}-${s}`, e.find(`.${s}`).hasClass("closed") ? "closed" : null);
    });
  }
  static ifTabClosed(e, t, s) {
    return localStorage.getItem(`${e}-section-${t}`) === "closed" ? s.fn(this) : s.inverse(this);
  }
  static actorTabClosed(e, t, s) {
    return localStorage.getItem(`${e}-section-${t}`) === "closed" ? "closed" : "";
  }
}
class Jt {
  static monitor(e) {
    return game.i18n.localize(H.getFromList(H.getMonitors(), e) ?? "");
  }
  static letter(e) {
    return game.i18n.localize(H.getFromList(H.getMonitorLetters(), e) ?? "");
  }
}
class es {
  static toLowerCaseNoAccent(e) {
    return e == null ? void 0 : e.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "");
  }
  static toUpperCaseNoAccent(e) {
    return e == null ? void 0 : e.normalize("NFD").toUpperCase().replace(/[\u0300-\u036f]/g, "");
  }
}
class q extends Item {
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
    return Qe;
  }
  async nextConnectionMode() {
  }
  async setCheckbarValue(e, t) {
    return await this.update({ [e]: t });
  }
  isMetatype() {
    return this.type == l.itemType.metatype;
  }
  isCyberdeck() {
    return this.type == l.itemType.cyberdeck;
  }
  isWeapon() {
    return this.type == l.itemType.weapon;
  }
  isActive() {
    return !this.system.inactive;
  }
  canReceiveMarks() {
    var e, t;
    return (t = (e = this.system.monitors) == null ? void 0 : e.matrix) == null ? void 0 : t.canMark;
  }
  async rollAttribute(e) {
    this.parent && await R.itemAttributeRoll(this, e);
  }
  async switchMonitorCheck(e, t, s, a = void 0) {
    await u.switchMonitorCheck(this.parent, e, t, s, a, this);
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
    await this._mutateModifiers((s) => s.map((a) => (a.id == e && t(a), a)));
  }
  async _mutateModifiers(e = (t) => t) {
    const t = e(this.system.modifiers);
    A.reindexIds(t), await this.update({ "system.modifiers": t });
  }
  prepateShortcut() {
  }
}
class Ze extends q {
  static get defaultIcon() {
    return `${L}/skills/skills.svg`;
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
const mt = {
  none: { targets: 1, adjust: [0] },
  shotgun: { targets: 2, adjust: [0, -2] },
  circle: { targets: void 0 },
  cone: { targets: void 0 },
  rect: { targets: void 0 },
  ray: { targets: void 0 }
}, ts = {
  code: "weapon-range",
  options: {
    flags: { editable: !0 },
    order: 20,
    category: v.pool,
    labelkey: n.common.roll.modifiers.weaponRange,
    hbsTemplateRoll: `${y}/roll/parts/select-option.hbs`,
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
}, ss = {
  code: "weapon-area",
  options: {
    used: !0,
    order: 20,
    category: v.pool,
    labelkey: n.common.roll.modifiers.weaponArea,
    hbsTemplateRoll: `${y}/roll/parts/input-numeric.hbs`,
    hbsTemplateChat: void 0
    //``
  },
  isUsed: (o) => o.used,
  condition: (o) => o.weapon && o.weapon.getArea() != l.area.none,
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
class X extends q {
  static init() {
    Hooks.once(C.REGISTER_ROLL_PARAMETERS, (e) => {
      e(ss), e(ts);
    });
  }
  static get defaultIcon() {
    return `${L}/weapons/mac-10.svg`;
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
    return t || Ze.prepareSkill(this.system.skill);
  }
  getDefense() {
    return O.fixedDefenseCode(this.system.defense);
  }
  getDamage() {
    if (!this.parent)
      return;
    const e = this.system.damageAttribute ? this.parent.getAttributeValue(this.system.damageAttribute) ?? 0 : 0;
    return {
      value: X.damageValue(
        this.system.monitor,
        this.system.damage,
        this.system.damageAttribute,
        e
      ),
      monitor: this.system.monitor,
      noArmor: this.system.noArmor,
      armorMode: X.armorMode(this.system.monitor, this.system.noArmor)
    };
  }
  static damageValue(e, t, s, a) {
    if (e == l.monitors.marks)
      return 1;
    if (t = Number(t), s)
      if (a !== void 0)
        t = t + Math.ceil(Number(a) / 2);
      else
        return console.warn("Weapon not attached to an actor"), game.i18n.localize(n.item.weapon.weaponWithoutActor);
    return t;
  }
  getDamageCode() {
    return X.damageCode(
      this.system.monitor,
      this.system.damage,
      this.system.damageAttribute
    );
  }
  static damageCode(e, t, s) {
    if (e == l.monitors.marks)
      return "1";
    let a = "";
    return s && n.attributes[s] && (a += game.i18n.localize(n.attributes[s]).substring(0, 3).toUpperCase() + "/2 + "), a += String(t), a;
  }
  static armorMode(e, t) {
    return u.useArmor(e) ? t ? "noArmor" : "withArmor" : "";
  }
  getRanges() {
    let e = [
      this._getRange("short")
    ];
    return this.system.range.max != "short" && e.push(this._getRange("medium")), this.system.range.max == "long" && e.push(this._getRange("long")), e;
  }
  _getRange(e) {
    return { value: this.system.range[e], labelkey: H.getFromList(H.getEnums().ranges, e) };
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
    const t = (r = this.getDamage()) == null ? void 0 : r.monitor, s = Y.getTargetTokens(game.user), a = s.filter((c) => {
      var m;
      return (m = c.actor) == null ? void 0 : m.canReceiveDamage(t);
    }), i = s.filter((c) => {
      var m;
      return !((m = c.actor) != null && m.canReceiveDamage(t));
    }).map((c) => c.name);
    return i.length > 0 && ui.notifications.info(game.i18n.format(n.common.errors.ignoredTargets, {
      targets: i.reduce(A.joiner(", "))
    })), a.length == 0 ? ui.notifications.info(game.i18n.format(n.common.errors.noTargetSelected, {
      weapon: this.name ?? game.i18n.localize(n.itemType.singular.weapon)
    })) : this.checkWeaponTargetsCount(a), a;
  }
  checkWeaponTargetsCount(e) {
    const t = this.system.area, s = mt[t] ?? {};
    K.checkTargetsCount(s.targets ?? 0, e, t);
  }
  getAreaModifier(e) {
    const t = this.getArea(), s = mt[t] ?? {};
    return s.targets && s.adjust && e <= s.targets ? s.adjust[e - 1] ?? 0 : 0;
  }
  getArea() {
    return this.system.area == "" ? l.area.none : this.system.area ?? l.area.none;
  }
}
const as = [
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
class He {
  constructor() {
    Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    this.registerBasicHelpers(), await loadTemplates(A.distinct(as));
  }
  registerBasicHelpers() {
    Handlebars.registerHelper("concat", (...e) => A.join(e.slice(0, -1))), Handlebars.registerHelper("substring", (e, t, s) => e == null ? void 0 : e.substring(t, s)), Handlebars.registerHelper("toUpperCase", es.toUpperCaseNoAccent), Handlebars.registerHelper("weaponDamageLetter", Jt.letter), Handlebars.registerHelper("weaponDamageCode", X.damageCode), Handlebars.registerHelper("weaponDamageValue", X.damageValue), Handlebars.registerHelper("weaponArmorMode", X.armorMode), Handlebars.registerHelper("skillValue", (e, t) => e.getSkillValue(t, !1)), Handlebars.registerHelper("specializationValue", (e, t) => e.getSkillValue(t, !0)), Handlebars.registerHelper("for", He.hbsForLoop), Handlebars.registerHelper("modulo", (e, t) => e % t), Handlebars.registerHelper("divint", A.divint), Handlebars.registerHelper("divup", A.divup), Handlebars.registerHelper("sum", (e, t) => e + t), Handlebars.registerHelper("times", (e, t) => e * t), Handlebars.registerHelper("diff", (e, t) => e - t), Handlebars.registerHelper("min", (e, t) => Math.min(e, t)), Handlebars.registerHelper("max", (e, t) => Math.max(e, t)), Handlebars.registerHelper("either", (e, t) => e || t), Handlebars.registerHelper("isInteger", (e) => e !== void 0 && Number.isInteger(e)), Handlebars.registerHelper("actorAttribute", (e, t, s = void 0) => t.getAttributeValue(e, s)), Handlebars.registerHelper("localizeAttribute", H.localizeAttribute), Handlebars.registerHelper("iconFA", p.fontAwesome), Handlebars.registerHelper("iconSrc", p.iconSystemPath), Handlebars.registerHelper("iconPath", p.iconPath), Handlebars.registerHelper("iconD6", p.iconD6), Handlebars.registerHelper("getActor", (e) => game.actors.get(e)), Handlebars.registerHelper("actorHasFavorite", (e, t) => He.checkHasFavorite(e, t)), Handlebars.registerHelper("padWordListToMin", T.padWordListToMin), Handlebars.registerHelper("sortSkills", T.sortSkills), Handlebars.registerHelper("sortShadowamps", T.sortShadowamps), Handlebars.registerHelper("sortQualities", T.sortQualities), Handlebars.registerHelper("sortAttributeButton", T.sortAttributeButton), Handlebars.registerHelper("range", function(e, t) {
      let s = [];
      for (let a = e; a <= t; a++)
        s.push(a);
      return s;
    }), Handlebars.registerHelper("ifGte", function(e, t, s) {
      return e >= t ? s.fn(this) : s.inverse(this);
    }), Handlebars.registerHelper("ifTabClosed", Fe.ifTabClosed), Handlebars.registerHelper("actorTabClosed", Fe.actorTabClosed), Handlebars.registerHelper("length", function(e) {
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
const $e = "default-css-class", We = "style-anarchy-shadowrun", dt = [
  {
    id: "anarchy-shadowrun",
    name: "Shadowrun Anarchy",
    cssClass: We,
    description: "The classic Shadowrun Anarchy theme with cyberpunk aesthetics",
    author: "Anarchy System",
    version: "2.0.0",
    category: "official",
    accessibility: {
      highContrast: !1,
      reducedMotion: !1,
      largeText: !1
    },
    preview: {
      primaryColor: "#f4d03f",
      backgroundColor: "#ffffff",
      textColor: "#1a1a1a"
    }
  },
  {
    id: "dark",
    name: "Dark",
    cssClass: "style-dark",
    description: "A sleek dark theme optimized for low-light environments",
    author: "Anarchy System",
    version: "2.0.0",
    category: "official",
    accessibility: {
      highContrast: !1,
      reducedMotion: !1,
      largeText: !1
    },
    preview: {
      primaryColor: "#f4d03f",
      backgroundColor: "#1a0f0f",
      textColor: "#e6d4a3"
    }
  },
  {
    id: "darkglass",
    name: "Dark Glass",
    cssClass: "style-darkglass",
    description: "A sophisticated dark theme with glass-like transparency effects",
    author: "Anarchy System",
    version: "2.0.0",
    category: "official",
    accessibility: {
      highContrast: !1,
      reducedMotion: !1,
      largeText: !1
    },
    preview: {
      primaryColor: "#3498db",
      backgroundColor: "#0d0d0d",
      textColor: "#f2f2f2"
    }
  }
];
class is {
  constructor() {
    this.availableStyles = {}, this.themeMetadata = /* @__PURE__ */ new Map(), this.themeSettings = /* @__PURE__ */ new Map(), this.currentTheme = null, this.themeChangeCallbacks = /* @__PURE__ */ new Set(), this.initializeThemes(), Z.register(C.REGISTER_STYLES), Hooks.once(C.REGISTER_STYLES, (e) => {
      dt.forEach((t) => {
        e(t.cssClass, t.name), this.registerThemeMetadata(t);
      });
    }), Hooks.once("ready", () => this.onReady()), Hooks.on("updateSetting", (e, t, s, a) => {
      e.key === `${d}.${$e}` && this.onThemeChanged(t);
    });
  }
  async onReady() {
    console.groupCollapsed(h + "Styles.onReady"), Hooks.callAll(C.REGISTER_STYLES, (e, t) => this.availableStyles[e] = t), console.info(h + "Styles.onReady | registered styles", this.availableStyles), await this.registerEnhancedSettings(), this.currentTheme = this.selectCssClass(), this.applyTheme(this.currentTheme), console.groupEnd();
  }
  async registerEnhancedSettings() {
    game.settings.register(d, $e, {
      scope: "world",
      name: game.i18n.localize(n.settings.defaultCssClass.name),
      hint: game.i18n.localize(n.settings.defaultCssClass.hint),
      config: !0,
      default: We,
      choices: this.availableStyles,
      type: String,
      onChange: (e) => this.onThemeChanged(e)
    }), game.settings.register(d, "theme-customizations", {
      scope: "world",
      name: "Theme Customizations",
      hint: "Advanced theme customization settings",
      config: !1,
      default: {},
      type: Object
    }), game.settings.register(d, "user-theme-preferences", {
      scope: "client",
      name: "User Theme Preferences",
      hint: "Personal theme preferences and accessibility settings",
      config: !1,
      default: {
        accessibility: {
          highContrast: !1,
          reducedMotion: !1,
          largeText: !1
        },
        customizations: {}
      },
      type: Object
    });
  }
  selectCssClass() {
    const e = game.settings.get(d, $e);
    return this.availableStyles[e] ? e : We;
  }
  // =============================================================================
  // ENHANCED THEME MANAGEMENT METHODS
  // =============================================================================
  initializeThemes() {
    console.groupCollapsed(h + "Styles.initializeThemes"), dt.forEach((e) => {
      this.themeMetadata.set(e.id, e), this.themeSettings.set(e.id, {
        customizations: {},
        userPreferences: {},
        lastUsed: null
      }), console.info(h + `Registered theme: ${e.name} v${e.version}`);
    }), console.groupEnd();
  }
  registerThemeMetadata(e) {
    this.themeMetadata.set(e.id, e), this.themeSettings.set(e.id, {
      customizations: {},
      userPreferences: {},
      lastUsed: null
    });
  }
  // Enhanced theme application
  applyTheme(e) {
    console.groupCollapsed(h + "Styles.applyTheme", e);
    const t = this.getThemeIdFromClass(e), s = this.themeMetadata.get(t);
    if (!s) {
      console.warn(h + "Theme not found:", t), console.groupEnd();
      return;
    }
    this.applyThemeClass(e), this.applyUserCustomizations(t), this.applyAccessibilitySettings(), this.updateThemeUsage(t), this.notifyThemeChange(s), console.info(h + "Applied theme:", s.name), console.groupEnd();
  }
  applyThemeClass(e) {
    const t = Array.from(document.body.classList).filter((a) => a.startsWith("style-"));
    t.forEach((a) => document.body.classList.remove(a)), document.body.classList.add(e);
    const s = document.getElementById("gm-manager");
    s && (t.forEach((a) => s.classList.remove(a)), s.classList.add(e));
  }
  applyUserCustomizations(e) {
    const s = game.settings.get(d, "theme-customizations")[e];
    if (s) {
      const a = document.documentElement;
      Object.entries(s).forEach(([i, r]) => {
        a.style.setProperty(`--${i}`, r);
      });
    }
  }
  applyAccessibilitySettings() {
    const t = game.settings.get(d, "user-theme-preferences").accessibility || {}, s = document.documentElement;
    t.highContrast ? s.classList.add("accessibility-high-contrast") : s.classList.remove("accessibility-high-contrast"), t.reducedMotion ? s.classList.add("accessibility-reduced-motion") : s.classList.remove("accessibility-reduced-motion"), t.largeText ? s.classList.add("accessibility-large-text") : s.classList.remove("accessibility-large-text");
  }
  updateThemeUsage(e) {
    const t = this.themeSettings.get(e);
    t && (t.lastUsed = (/* @__PURE__ */ new Date()).toISOString(), this.themeSettings.set(e, t));
  }
  onThemeChanged(e) {
    console.info(h + "Theme changed to:", e), this.currentTheme = e, this.applyTheme(e);
  }
  notifyThemeChange(e) {
    this.themeChangeCallbacks.forEach((t) => {
      try {
        t(e);
      } catch (s) {
        console.error(h + "Theme change callback error:", s);
      }
    });
  }
  // =============================================================================
  // THEME METADATA AND UTILITIES
  // =============================================================================
  getThemeIdFromClass(e) {
    return e.replace("style-", "");
  }
  getThemeMetadata(e) {
    return this.themeMetadata.get(e);
  }
  getAllThemes() {
    return Array.from(this.themeMetadata.values());
  }
  getThemesByCategory(e) {
    return this.getAllThemes().filter((t) => t.category === e);
  }
  // =============================================================================
  // THEME CUSTOMIZATION METHODS
  // =============================================================================
  setThemeCustomization(e, t, s) {
    const a = game.settings.get(d, "theme-customizations");
    a[e] || (a[e] = {}), a[e][t] = s, game.settings.set(d, "theme-customizations", a), this.getThemeIdFromClass(this.currentTheme) === e && document.documentElement.style.setProperty(`--${t}`, s), console.info(h + `Theme customization set: ${e}.${t} = ${s}`);
  }
  getThemeCustomization(e, t) {
    var a;
    return (a = game.settings.get(d, "theme-customizations")[e]) == null ? void 0 : a[t];
  }
  resetThemeCustomizations(e) {
    const t = game.settings.get(d, "theme-customizations");
    delete t[e], game.settings.set(d, "theme-customizations", t), this.getThemeIdFromClass(this.currentTheme) === e && this.applyTheme(this.currentTheme), console.info(h + `Reset customizations for theme: ${e}`);
  }
  // =============================================================================
  // ACCESSIBILITY METHODS
  // =============================================================================
  setAccessibilitySetting(e, t) {
    const s = game.settings.get(d, "user-theme-preferences");
    s.accessibility[e] = t, game.settings.set(d, "user-theme-preferences", s), this.applyAccessibilitySettings(), console.info(h + `Accessibility setting changed: ${e} = ${t}`);
  }
  getAccessibilitySetting(e) {
    var s;
    return ((s = game.settings.get(d, "user-theme-preferences").accessibility) == null ? void 0 : s[e]) || !1;
  }
  // =============================================================================
  // CSS CUSTOM PROPERTY UTILITIES
  // =============================================================================
  getCSSVariable(e) {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${e}`).trim();
  }
  setCSSVariable(e, t) {
    document.documentElement.style.setProperty(`--${e}`, t), console.info(h + `CSS variable set: --${e} = ${t}`);
  }
  // =============================================================================
  // THEME VALIDATION AND DEBUGGING
  // =============================================================================
  validateTheme(e) {
    const t = this.themeMetadata.get(e);
    if (!t)
      return { valid: !1, errors: ["Theme not found"] };
    const s = [];
    t.name || s.push("Theme name is required"), t.cssClass || s.push("Theme CSS class is required"), t.version || s.push("Theme version is required");
    const a = document.createElement("div");
    a.className = t.cssClass, document.body.appendChild(a);
    const i = getComputedStyle(a).getPropertyValue("--anarchy-background-attributes");
    return document.body.removeChild(a), i || s.push("Theme CSS not loaded or invalid"), {
      valid: s.length === 0,
      errors: s,
      theme: t
    };
  }
  debugCurrentTheme() {
    const e = this.getThemeIdFromClass(this.currentTheme), t = this.themeMetadata.get(e), s = this.validateTheme(e);
    return console.group(h + "Theme Debug Info"), console.info("Current Theme:", t), console.info("Validation:", s), console.info("CSS Variables:", this.getCurrentThemeVariables()), console.info("Customizations:", this.themeSettings.get(e)), console.groupEnd(), {
      theme: t,
      validation: s,
      variables: this.getCurrentThemeVariables(),
      customizations: this.themeSettings.get(e)
    };
  }
  getCurrentThemeVariables() {
    const e = getComputedStyle(document.documentElement), t = {};
    for (let s = 0; s < e.length; s++) {
      const a = e[s];
      a.startsWith("--") && (t[a] = e.getPropertyValue(a).trim());
    }
    return t;
  }
  // =============================================================================
  // THEME CHANGE CALLBACK SYSTEM
  // =============================================================================
  onThemeChange(e) {
    return this.themeChangeCallbacks.add(e), () => this.themeChangeCallbacks.delete(e);
  }
  // =============================================================================
  // IMPORT/EXPORT UTILITIES
  // =============================================================================
  exportThemeData() {
    return {
      themes: Array.from(this.themeMetadata.values()),
      currentTheme: this.currentTheme,
      customizations: game.settings.get(d, "theme-customizations"),
      userPreferences: game.settings.get(d, "user-theme-preferences"),
      systemInfo: {
        version: game.system.version,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
  }
  importThemeCustomizations(e) {
    e.customizations && game.settings.set(d, "theme-customizations", e.customizations), e.userPreferences && game.settings.set(d, "user-theme-preferences", e.userPreferences), this.applyTheme(this.currentTheme), ui.notifications.info("Theme customizations imported successfully.");
  }
}
class os {
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
    ].forEach((r) => {
      const c = this.styles.getCSSVariable(r.bg.replace("--", "")), m = this.styles.getCSSVariable(r.fg.replace("--", ""));
      if (c && m) {
        const g = this.calculateContrastRatio(c, m);
        a.contrastRatios[r.name] = {
          ratio: g,
          wcagAA: g >= 4.5,
          wcagAAA: g >= 7,
          background: c,
          foreground: m
        }, g < 4.5 && (a.accessibility.wcagAA = !1, a.accessibility.issues.push(`${r.name} fails WCAG AA (${g.toFixed(2)}:1)`)), g < 7 && (a.accessibility.wcagAAA = !1);
      }
    }), this.styles.applyTheme(s), a;
  }
  /**
   * Calculate contrast ratio between two colors
   */
  calculateContrastRatio(e, t) {
    const s = this.getRelativeLuminance(e), a = this.getRelativeLuminance(t), i = Math.max(s, a), r = Math.min(s, a);
    return (i + 0.05) / (r + 0.05);
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
      const r = performance.now();
      s.push(r - i);
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
    t.forEach((r) => {
      const c = this.styles.currentTheme;
      this.styles.applyTheme(r.cssClass);
      const m = this.styles.getCurrentThemeVariables();
      s[r.id] = Object.keys(m), e.themeVariables[r.id] = Object.keys(m).length, this.styles.applyTheme(c);
    });
    const a = /* @__PURE__ */ new Set();
    Object.values(s).forEach((r) => {
      r.forEach((c) => a.add(c));
    }), e.totalVariables = a.size, e.commonVariables = Array.from(a).filter((r) => Object.values(s).every((c) => c.includes(r))), Object.entries(s).forEach(([r, c]) => {
      e.uniqueVariables[r] = c.filter((m) => !e.commonVariables.includes(m));
    });
    const i = Object.values(e.themeVariables).reduce((r, c) => r + c, 0);
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
    const i = `${e}-${t.toLowerCase().replace(/\s+/g, "-")}`, r = {
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
    return s.primaryColor && (r.preview.primaryColor = s.primaryColor), s.backgroundColor && (r.preview.backgroundColor = s.backgroundColor), s.textColor && (r.preview.textColor = s.textColor), r;
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
        console.warn(h + `Could not analyze contrast for theme ${s.name}:`, i);
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
        console.warn(h + `Performance analysis failed for ${s.name}:`, a);
      }
      try {
        e.themes[s.id].contrast = this.analyzeThemeContrast(s.id);
      } catch (a) {
        console.warn(h + `Contrast analysis failed for ${s.name}:`, a);
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
          const r = performance.now();
          e.switchTimes[a.id] = r - i, e.totalTime += r - i;
        } catch (r) {
          e.success = !1, e.errors.push(`Failed to apply theme ${a.name}: ${r.message}`);
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
      console.error(h + `Theme ${e} not found`);
      return;
    }
    console.group(h + `Theme Info: ${t.name}`), console.info("Metadata:", t), console.info("Validation:", this.styles.validateTheme(e)), console.info("Contrast Analysis:", this.analyzeThemeContrast(e)), console.info("Performance:", this.measureThemePerformance(t.cssClass, 3)), console.groupEnd();
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
    ["category", "author", "version"].forEach((g) => {
      s[g] !== a[g] && (i.differences.metadata[g] = {
        [s.name]: s[g],
        [a.name]: a[g]
      });
    });
    const c = this.measureThemePerformance(s.cssClass, 3), m = this.measureThemePerformance(a.cssClass, 3);
    if (i.differences.performance = {
      [s.name]: c.average,
      [a.name]: m.average,
      difference: Math.abs(c.average - m.average)
    }, i.differences.performance.difference > 20) {
      const g = c.average > m.average ? s.name : a.name;
      i.recommendations.push(`${g} is significantly slower and could benefit from optimization`);
    }
    return i;
  }
}
class rs {
  constructor(e) {
    this.styles = e, this.customizations = /* @__PURE__ */ new Map(), this.presets = /* @__PURE__ */ new Map(), this.activeCustomizations = /* @__PURE__ */ new Set(), this.initializeCustomizations(), Hooks.once("ready", () => this.onReady()), Hooks.on("renderApplication", (t, s, a) => this.onRenderApplication(t, s, a));
  }
  async onReady() {
    console.groupCollapsed(h + "UICustomization.onReady"), await this.registerCustomizationSettings(), await this.loadUserCustomizations(), this.applyAllCustomizations(), console.groupEnd();
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
    console.groupCollapsed(h + "UICustomization.initializeCustomizations"), this.registerBuiltInPresets(), this.registerCustomizationCategories(), console.groupEnd();
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
        { key: "sheetWidth", name: "Sheet Width", type: "select", values: ["auto", "compact", "wide", "full"] },
        { key: "sheetHeight", name: "Sheet Height", type: "select", values: ["auto", "compact", "tall", "full"] },
        { key: "compactMode", name: "Compact Mode", type: "boolean" },
        { key: "tabLayout", name: "Tab Layout", type: "select", values: ["horizontal", "vertical"] }
      ]
    }), this.customizations.set("visual", {
      name: "Visual Appearance",
      description: "Customize colors, fonts, and visual effects",
      options: [
        { key: "fontSize", name: "Font Size", type: "select", values: ["small", "default", "large", "xl"] },
        { key: "iconSize", name: "Icon Size", type: "select", values: ["small", "default", "large"] },
        { key: "spacing", name: "Element Spacing", type: "select", values: ["tight", "default", "loose"] },
        { key: "borderRadius", name: "Border Radius", type: "select", values: ["none", "minimal", "default", "rounded"] },
        { key: "shadowIntensity", name: "Shadow Intensity", type: "select", values: ["none", "light", "medium", "strong"] },
        { key: "animationSpeed", name: "Animation Speed", type: "select", values: ["none", "fast", "normal", "slow"] }
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
        { key: "shortcutPosition", name: "Shortcut Position", type: "select", values: ["left", "right", "top", "bottom"] },
        { key: "gmManagerPosition", name: "GM Manager Position", type: "select", values: ["top-left", "top-right", "bottom-left", "bottom-right"] },
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
    console.groupCollapsed(h + "UICustomization.applyAllCustomizations"), this.applyLayoutCustomizations(), this.applyVisualCustomizations(), this.applyComponentVisibility(), this.applyHUDCustomizations(), this.applyAdvancedCustomizations(), console.groupEnd();
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
    e.compactMode ? document.body.classList.add("ui-compact-mode") : document.body.classList.remove("ui-compact-mode"), e.tabLayout === "vertical" ? document.body.classList.add("ui-vertical-tabs") : document.body.classList.remove("ui-vertical-tabs"), console.info(h + "Applied layout customizations:", e);
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
    e.borderRadius !== "default" && t.style.setProperty("--border-radius-override", r[e.borderRadius]);
    const c = {
      none: "0",
      light: "0.5",
      medium: "1",
      strong: "1.5"
    };
    e.shadowIntensity !== "medium" && t.style.setProperty("--shadow-intensity", c[e.shadowIntensity]);
    const m = {
      none: "0ms",
      fast: "100ms",
      normal: "200ms",
      slow: "400ms"
    };
    e.animationSpeed !== "normal" && t.style.setProperty("--animation-duration", m[e.animationSpeed]), console.info(h + "Applied visual customizations:", e);
  }
  applyComponentVisibility() {
    const e = this.userCustomizations.components;
    Object.entries(e).forEach(([t, s]) => {
      const a = `hide-${t.replace(/([A-Z])/g, "-$1").toLowerCase().replace("show-", "")}`;
      s ? document.body.classList.remove(a) : document.body.classList.add(a);
    }), console.info(h + "Applied component visibility:", e);
  }
  applyHUDCustomizations() {
    const e = this.userCustomizations.hud, t = {
      small: "0.8",
      medium: "1",
      large: "1.2"
    };
    e.hudSize !== "medium" && document.documentElement.style.setProperty("--hud-scale", t[e.hudSize]);
    const s = document.getElementById("gm-manager");
    s && e.gmManagerPosition !== "top-left" && (s.classList.remove("position-top-left", "position-top-right", "position-bottom-left", "position-bottom-right"), s.classList.add(`position-${e.gmManagerPosition}`));
    const a = document.querySelector(".anarchy-shortcuts");
    a && e.shortcutPosition !== "left" && (a.classList.remove("position-left", "position-right", "position-top", "position-bottom"), a.classList.add(`position-${e.shortcutPosition}`)), console.info(h + "Applied HUD customizations:", e);
  }
  applyAdvancedCustomizations() {
    const e = this.userCustomizations.advanced, t = document.documentElement;
    e.customCSS && this.injectCustomCSS(e.customCSS), e.componentOverrides && Object.entries(e.componentOverrides).forEach(([s, a]) => {
      Object.entries(a).forEach(([i, r]) => {
        t.style.setProperty(`--${s}-${i}`, r);
      });
    }), e.colorOverrides && Object.entries(e.colorOverrides).forEach(([s, a]) => {
      t.style.setProperty(`--${s}`, a);
    }), console.info(h + "Applied advanced customizations:", e);
  }
  // =============================================================================
  // CUSTOMIZATION METHODS
  // =============================================================================
  setCustomization(e, t, s) {
    const a = this.getCategorySettingKey(e), i = game.settings.get(d, a);
    i[t] = s, game.settings.set(d, a, i), this.userCustomizations[e][t] = s, this.applySpecificCustomization(e, t, s), console.info(h + `Customization set: ${e}.${t} = ${s}`);
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
        const r = { tight: "0.75", default: "1", loose: "1.25" }[t];
        s.style.setProperty("--spacing-scale", r);
        break;
      case "animationSpeed":
        const c = { none: "0ms", fast: "100ms", normal: "200ms", slow: "400ms" }[t];
        s.style.setProperty("--animation-duration", c);
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
        s && (s.classList.remove("position-top-left", "position-top-right", "position-bottom-left", "position-bottom-right"), s.classList.add(`position-${t}`));
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
    console.groupCollapsed(h + `Applying preset: ${t.name}`), Object.entries(t.settings).forEach(([s, a]) => {
      game.settings.set(d, s, a);
      const i = this.getSettingCategory(s);
      i && (this.userCustomizations[i] = { ...this.userCustomizations[i], ...a });
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
    ["--font-scale", "--icon-scale", "--spacing-scale", "--border-radius-override", "--shadow-intensity", "--animation-duration"].forEach((a) => t.style.removeProperty(a)), this.loadUserCustomizations(), this.applyAllCustomizations(), ui.notifications.info("All UI customizations reset to defaults.");
  }
  // =============================================================================
  // DEBUGGING AND ANALYSIS
  // =============================================================================
  debugCustomizations() {
    return console.group(h + "UI Customization Debug"), console.info("Current Customizations:", this.userCustomizations), console.info("Available Presets:", this.getAvailablePresets()), console.info("Active CSS Variables:", this.getActiveCustomizationVariables()), console.info("Applied Classes:", this.getAppliedCustomizationClasses()), console.groupEnd(), {
      customizations: this.userCustomizations,
      presets: this.getAvailablePresets(),
      cssVariables: this.getActiveCustomizationVariables(),
      appliedClasses: this.getAppliedCustomizationClasses()
    };
  }
  getActiveCustomizationVariables() {
    const e = getComputedStyle(document.documentElement), t = {};
    return ["--font-scale", "--icon-scale", "--spacing-scale", "--border-radius-override", "--shadow-intensity", "--animation-duration", "--hud-scale"].forEach((a) => {
      const i = e.getPropertyValue(a);
      i && (t[a] = i.trim());
    }), t;
  }
  getAppliedCustomizationClasses() {
    return Array.from(document.body.classList).filter((e) => e.startsWith("ui-") || e.startsWith("hide-") || e.startsWith("position-"));
  }
}
class Je extends Dialog {
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
      const [r, c] = a.split(".");
      s[r] || (s[r] = {}), e.find(`input[name="${a}"]`).attr("type") === "checkbox" ? s[r][c] = e.find(`input[name="${a}"]`).is(":checked") : s[r][c] = i;
    }
    this.applyPreviewSettings(e, s);
  }
  applyPreviewSettings(e, t) {
    var a, i, r;
    const s = e.find(".preview-area");
    if ((a = t.visual) != null && a.fontSize) {
      const c = { small: "0.85", default: "1", large: "1.15", xl: "1.3" }[t.visual.fontSize];
      s.css("--font-scale", c);
    }
    if ((i = t.visual) != null && i.iconSize) {
      const c = { small: "0.8", default: "1", large: "1.2" }[t.visual.iconSize];
      s.css("--icon-scale", c);
    }
    if ((r = t.visual) != null && r.spacing) {
      const c = { tight: "0.75", default: "1", loose: "1.25" }[t.visual.spacing];
      s.css("--spacing-scale", c);
    }
    t.components && Object.entries(t.components).forEach(([c, m]) => {
      const g = `hide-${c.replace(/([A-Z])/g, "-$1").toLowerCase().replace("show-", "")}`;
      m ? s.removeClass(g) : s.addClass(g);
    });
  }
  async onApply(e) {
    console.groupCollapsed(h + "UICustomizationDialog.onApply");
    const t = new FormData(e.find("form")[0]), s = {};
    for (let [a, i] of t.entries()) {
      const [r, c] = a.split(".");
      s[r] || (s[r] = {}), e.find(`input[name="${a}"]`).attr("type") === "checkbox" ? s[r][c] = e.find(`input[name="${a}"]`).is(":checked") : s[r][c] = i;
    }
    Object.entries(s).forEach(([a, i]) => {
      Object.entries(i).forEach(([r, c]) => {
        this.uiCustomization.setCustomization(a, r, c);
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
          const r = JSON.parse(i.target.result);
          this.uiCustomization.importCustomizations(r), this.render(!0);
        } catch (r) {
          ui.notifications.error("Failed to import customizations: Invalid file format."), console.error(h + "Import error:", r);
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
      ui.notifications.error("Custom CSS contains errors. Please check your syntax."), console.error(h + "CSS validation error:", s);
    }
  }
  // =============================================================================
  // STATIC METHODS
  // =============================================================================
  static async show(e) {
    return new Je(e).render(!0);
  }
}
class ns {
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
      previewTheme: (e) => this.previewTheme(e)
    }, console.info(h + "UI Customization commands registered. Use anarchyUI.listCommands() to see available commands.");
  }
  // =============================================================================
  // COMMAND IMPLEMENTATIONS
  // =============================================================================
  openCustomizationDialog() {
    return Je.show(this.uiCustomization);
  }
  setFontSize(e) {
    const t = ["small", "default", "large", "xl"];
    if (!t.includes(e)) {
      console.error(h + `Invalid font size. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "fontSize", e), console.info(h + `Font size set to: ${e}`);
  }
  setIconSize(e) {
    const t = ["small", "default", "large"];
    if (!t.includes(e)) {
      console.error(h + `Invalid icon size. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "iconSize", e), console.info(h + `Icon size set to: ${e}`);
  }
  setSpacing(e) {
    const t = ["tight", "default", "loose"];
    if (!t.includes(e)) {
      console.error(h + `Invalid spacing. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "spacing", e), console.info(h + `Spacing set to: ${e}`);
  }
  setAnimationSpeed(e) {
    const t = ["none", "fast", "normal", "slow"];
    if (!t.includes(e)) {
      console.error(h + `Invalid animation speed. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("visual", "animationSpeed", e), console.info(h + `Animation speed set to: ${e}`);
  }
  toggleComponent(e) {
    const s = !this.uiCustomization.getCustomization("components", e);
    this.uiCustomization.setCustomization("components", e, s), console.info(h + `${e} ${s ? "enabled" : "disabled"}`);
  }
  applyPreset(e) {
    try {
      this.uiCustomization.applyPreset(e), console.info(h + `Applied preset: ${e}`);
    } catch (t) {
      console.error(h + `Failed to apply preset: ${t.message}`);
    }
  }
  moveGMManager(e) {
    const t = ["top-left", "top-right", "bottom-left", "bottom-right"];
    if (!t.includes(e)) {
      console.error(h + `Invalid position. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("hud", "gmManagerPosition", e), console.info(h + `GM Manager moved to: ${e}`);
  }
  moveShortcuts(e) {
    const t = ["left", "right", "top", "bottom"];
    if (!t.includes(e)) {
      console.error(h + `Invalid position. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("hud", "shortcutPosition", e), console.info(h + `Shortcuts moved to: ${e}`);
  }
  setHUDSize(e) {
    const t = ["small", "medium", "large"];
    if (!t.includes(e)) {
      console.error(h + `Invalid HUD size. Valid options: ${t.join(", ")}`);
      return;
    }
    this.uiCustomization.setCustomization("hud", "hudSize", e), console.info(h + `HUD size set to: ${e}`);
  }
  injectCustomCSS(e) {
    this.uiCustomization.setCustomization("advanced", "customCSS", e), console.info(h + "Custom CSS injected");
  }
  exportSettings() {
    const e = this.uiCustomization.exportCustomizations();
    return console.info(h + "Customization data:", e), e;
  }
  importSettings(e) {
    try {
      this.uiCustomization.importCustomizations(e), console.info(h + "Settings imported successfully");
    } catch (t) {
      console.error(h + `Import failed: ${t.message}`);
    }
  }
  resetAll() {
    this.uiCustomization.resetAllCustomizations(), console.info(h + "All customizations reset");
  }
  debugCustomizations() {
    return this.uiCustomization.debugCustomizations();
  }
  setThemeCustomization(e, t, s) {
    this.uiCustomization.styles.setThemeCustomization(e, t, s), console.info(h + `Theme customization set: ${e}.${t} = ${s}`);
  }
  previewTheme(e) {
    this.uiCustomization.styles.previewTheme(e), console.info(h + `Previewing theme: ${e}`);
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
      "anarchyUI.previewTheme(themeClass) - Preview a theme temporarily"
    ];
    return console.group(h + "Available UI Customization Commands:"), e.forEach((t) => console.info(t)), console.groupEnd(), e;
  }
}
const Ee = "glitch", fe = "risk", ut = "reroll", ht = "rerollRemoved", cs = "removed", Ne = `${ue}/style/danger-point.webp`, ke = `${ue}/style/anarchy-point.webp`, Q = class Q {
  static init() {
    CONFIG.Dice.terms[Re.DENOMINATION] = Re, CONFIG.Dice.terms[Me.DENOMINATION] = Me, Hooks.once("diceSoNiceReady", (e) => Q.diceSoNiceReady(e)), Hooks.once("ready", () => Q.onReady());
  }
  static onReady() {
    var e;
    Q.COLORSETS = Q.loadColorsets(), (e = game.modules.get("dice-so-nice")) != null && e.active && game.settings.get("core", "noCanvas") && ui.notifications.warn("Dice So Nice! will not display dice due to Foundry option 'Disable Game Canvas' ");
  }
  static loadColorsets() {
    return {
      [ut]: {
        name: ut,
        description: game.i18n.localize(n.common.roll.rollTheme.reroll),
        category: oe
      },
      [cs]: {
        name: fe,
        description: game.i18n.localize(n.common.roll.rollTheme.removed),
        category: oe
      },
      [ht]: {
        name: ht,
        description: game.i18n.localize(n.common.roll.rollTheme.rerollRemoved),
        category: oe
      },
      [Ee]: {
        name: Ee,
        description: game.i18n.localize(n.common.roll.rollTheme.glitch),
        category: oe,
        foreground: "white",
        background: "#5c0a5c",
        outline: "none",
        edge: "none",
        texture: "poison",
        material: "metal"
      },
      [fe]: {
        name: fe,
        description: game.i18n.localize(n.common.roll.rollTheme.anarchyRisk),
        category: oe,
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
    Q.dice3d = e, game.settings.set("dice-so-nice", "enabledSimultaneousRollForMessage", !1), e.addSystem({ id: d, name: oe }), Object.values(Q.COLORSETS).forEach((t) => e.addColorset(t)), e.addDicePreset(Re.diceSoNiceData()), e.addDicePreset(Me.diceSoNiceData());
  }
  static img(e) {
    return `<img src="${e}" />`;
  }
};
x(Q, "dice3d");
let ce = Q;
class Re extends Die {
  constructor(e) {
    e.faces = 6, super(e);
  }
  /** @override */
  getResultLabel(e) {
    switch (e.result) {
      case "1":
        return ce.img(Ne);
    }
    return e.result.toString();
  }
  static diceSoNiceData() {
    return {
      type: "dg",
      labels: [Ne, "2", "3", "4", "5", "6"],
      colorset: Ee,
      system: d
    };
  }
}
/** @override */
x(Re, "DENOMINATION", "g");
class Me extends Die {
  constructor(e) {
    e.faces = 6, super(e);
  }
  /** @override */
  getResultLabel(e) {
    switch (e.result) {
      case "1":
        return ce.img(Ne);
      case "5":
        return ce.img(ke);
      case "6":
        return ce.img(ke);
    }
    return e.result.toString();
  }
  static diceSoNiceData() {
    return {
      type: "dr",
      labels: [Ne, "2", "3", "4", ke, ke],
      colorset: fe,
      system: d
    };
  }
}
x(Me, "DENOMINATION", "r");
const ie = {}, ls = {
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
class Oe {
  static init() {
    Hooks.once("ready", () => Oe.onReady());
  }
  static onReady() {
    Object.entries(n.common.roll.rollTheme).forEach((e) => {
      ie[e[0]] = game.i18n.localize(e[1]);
    });
  }
  /**
   * @param {*} param : { pool: 1, reroll: 0, risk: 0, rerollForced: 0, target: 5 }
   */
  constructor(e) {
    this.param = e, this.param.pool = Math.max(this.param.pool ?? 0, 0), this.param.reroll = Math.max(this.param.reroll ?? 0, 0), this.param.rerollForced = Math.abs(this.param.rerollForced ?? 0), this.param.glitch = Math.max(this.param.glitch ?? 0, 0), this.param.risk = Math.max(this.param.risk ?? 0, 0), this.param.edge = Math.max(this.param.edge ?? 0, 0), this.param.target = this.param.edge > 0 ? 4 : this.param.target ?? 5, foundry.utils.mergeObject(this, ls);
  }
  async evaluate() {
    await this.rollPool(), await this.rollRerolls(), await this.rollRerollForced(), await this.rollGlitchDice(), await this.rollAnarchyRisk();
  }
  async rollPool() {
    this.subrolls.pool = new Roll(`${this.param.pool}d6cs>=${this.param.target}[${ie.dicePool}]`), await this.subrolls.pool.evaluate({ async: !0 }), this.total = this.subrolls.pool.total;
  }
  async rollRerolls() {
    const e = Math.min(this.param.pool - this.total, this.param.reroll);
    e > 0 && (this.subrolls.reroll = new Roll(`${e}d6cs>=${this.param.target}[${ie.reroll}]`), await this.subrolls.reroll.evaluate({ async: !0 }), this.total += this.subrolls.reroll.total);
  }
  async rollRerollForced() {
    const e = Math.min(this.total, this.param.rerollForced);
    e > 0 && (this.subrolls.removed = new Roll(`-${e}d1cf=1[${ie.removed}]`), await this.subrolls.removed.evaluate({ async: !0 }), this.subrolls.rerollForced = new Roll(`${e}d6cs>=${this.param.target}[${ie.rerollRemoved}]`), await this.subrolls.rerollForced.evaluate({ async: !0 }), this.total -= e, this.total += this.subrolls.rerollForced.total);
  }
  async rollGlitchDice() {
    this.param.glitch > 0 && (this.subrolls.glitch = new Roll(`${this.param.glitch}d6cf=1[${ie.glitch}]`), await this.subrolls.glitch.evaluate({ async: !0 }), this.subrolls.glitch.dice[0].options.appearance = { colorset: Ee }, this.glitch = this.subrolls.glitch.terms[0].results.filter((e) => e.result == 1).length, this.glitchOutcome = this.glitch > 0 ? "glitch" : "nothing", this.totalGlitch += this.glitch);
  }
  async rollAnarchyRisk() {
    this.param.risk > 0 && (this.subrolls.risk = new Roll(`${this.param.risk}drcs>=5[${ie.anarchyRisk}]`), await this.subrolls.risk.evaluate({ async: !0 }), this.subrolls.risk.dice[0].options.appearance = { colorset: fe }, this.riskGlitch = this.subrolls.risk.terms[0].results.filter((e) => e.result == 1).length, this.riskProwess += this.subrolls.risk.terms[0].results.filter((e) => e.result >= 5).length, this.subrolls.risk.total > 0 && this.total++, this.riskOutcome = this.riskProwess > 0 ? "prowess" : this.riskGlitch > 0 ? "glitch" : "nothing", this.totalGlitch += this.riskGlitch);
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
const Le = "systemMigrationVersion";
class G {
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
class ms extends G {
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
    return A.reindexIds((e ?? []).map((t) => this._keywordToObject(t)));
  }
  _keywordToObject(e) {
    return e instanceof String ? { word: e } : e;
  }
}
class ds extends G {
  get version() {
    return "0.3.8";
  }
  get code() {
    return "migrate-weapons-strength-damage";
  }
  async migrate() {
    const e = (s) => s.type == l.itemType.weapon && s.system.strength, t = (s) => ({
      _id: s.id,
      "system.damageAttribute": l.attributes.strength,
      "system.strength": void 0
    });
    this.applyItemsUpdates((s) => s.filter(e).map(t));
  }
}
class us extends G {
  get version() {
    return "0.3.14";
  }
  get code() {
    return "migrate-skill-drain-convergence";
  }
  async migrate() {
    const e = de.filter((m) => m.hasDrain).map((m) => m.code), t = (m) => m.type == l.itemType.skill && e.includes(m.system.code), s = (m) => ({ _id: m.id, "system.hasDrain": !0 }), a = de.filter((m) => m.hasConvergence).map((m) => m.code), i = (m) => m.type == l.itemType.skill && a.includes(m.system.code), r = (m) => ({ _id: m.id, "system.hasConvergence": !0 }), c = (m) => m.filter(t).map(s).concat(m.filter(i).map(r));
    await this.applyItemsUpdates(c);
  }
}
class hs extends G {
  get version() {
    return "0.4.0";
  }
  get code() {
    return "migrate-select-weapon-defense";
  }
  async migrate() {
    const e = (s) => de.find((a) => a.defense && a.code == s.system.skill), t = (s) => {
      var a;
      return {
        _id: s.id,
        "system.defense": O.fixedDefenseCode((a = e(s)) == null ? void 0 : a.defense)
      };
    };
    await this.applyItemsUpdates((s) => s.filter((a) => a.isWeapon()).filter(e).map(t));
  }
}
class gs extends G {
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
    return Object.entries(e.system.monitors).forEach(
      (s) => {
        s[1].resistance && (t[`system.monitors.${s[0]}.resistance`] = 0);
      }
    ), t;
  }
}
class ps extends G {
  get version() {
    return "0.6.0";
  }
  get code() {
    return "migrate-skill-social";
  }
  async migrate() {
    const e = de.filter((a) => a.isSocial).map((a) => a.code), t = (a) => a.type == l.itemTypeskill && e.includes(a.system.code), s = (a) => ({ _id: a.id, "system.isSocial": !0 });
    await this.applyItemsUpdates((a) => a.filter(t).map(s));
  }
}
class ys extends G {
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
    await this.applyItemsUpdates((t) => t.filter(this.hasDefenseModifiers).map((a) => this.getItemModifiersUpdate(a, e))), e.length > 0 && ChatMessage.create({
      whisper: ChatMessage.getWhisperRecipients("GM"),
      content: `${this.version} - Migration of defense modifiers:<ul>` + e.reduce((t, s) => t + s) + "</ul></li>"
    });
  }
  getItemModifiersUpdate(e, t) {
    const s = [];
    function a(r, c, m) {
      s.push(`<li> ${r}: ${c.group}/${c.effect}/${c.subCategory} : ${c.category}/${c.value} ${c.condition} => ${m.category}/${m.value} ${m.condition}</li>`);
    }
    const i = {};
    return e.system.modifiers.forEach((r) => i[r.id] = duplicate(r)), Object.values(i).filter((r) => this.isDefenseModifier(r)).forEach((r) => {
      const c = duplicate(r);
      let m = Object.values(i).filter((g) => this.isCorrespondingActionModifier(g, r));
      switch (m.length) {
        case 0: {
          r.category = D.rollType.attributeAction, a("Changed category", c, r);
          break;
        }
        case 1: {
          const g = m[0];
          foundry.utils.mergeObject(g, {
            value: Math.max(r.value, g.value),
            condition: g.condition ? g.condition + (r.condition ?? "") : r.condition
          }, { overwrite: !0 }), delete i[r.id], a("Merged with existing", r, g);
          break;
        }
        default: {
          delete i[r.id], a("Removed", r, { category: "-", value: "-", condition: "-" });
          break;
        }
      }
    }), s.length > 0 && t.push(`<li> ${e.actor ? e.actor.name : "-standalone-"} Item ${e.name} modifiers changed:
        <ul>${s.reduce(A.joiner())}</ul>
        </li>`), { _id: e.id, "system.modifiers": Object.values(i) };
  }
}
class fs extends G {
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
class As extends G {
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
    return e ? A.reindexIds(e.map((t) => this._migrateBackWord(t))) : [];
  }
  _migrateBackWord(e) {
    for (; e.word != null && !A.isString(e.word); )
      e = e.word;
    return e;
  }
}
class bs extends G {
  get version() {
    return "11.1.16";
  }
  get code() {
    return "migrate-skills-attributes";
  }
  async migrate() {
    this.applyItemsUpdates((e) => e.filter((t) => t.type == l.itemType.skill).filter((t) => t.system.attribute == "" || t.system.code == "").map((t) => ({
      _id: t.id,
      "system.attribute": "",
      "system.code": l.attributes.knowledge
    })));
  }
}
class Cs extends G {
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
class vs extends G {
  get version() {
    return "12.0.2";
  }
  get code() {
    return "migrate-weapon-drain";
  }
  async migrate() {
    this.applyItemsUpdates((e) => e.filter((t) => t.type = l.itemType.weapon).filter((t) => t.hasDrain).map((t) => ({
      _id: t.id,
      "system.drain": 1
    })));
  }
}
class ws {
  constructor() {
    Z.register(C.DECLARE_MIGRATIONS), Hooks.once(C.DECLARE_MIGRATIONS, (e) => e(
      new ms(),
      new ds(),
      new us(),
      new hs(),
      new gs(),
      new ps(),
      new ys(),
      new fs(),
      new As(),
      new bs(),
      new Cs(),
      new vs()
    )), game.settings.register(d, Le, {
      name: "System Migration Version",
      scope: "world",
      config: !1,
      type: String,
      default: "0.0.0"
    });
  }
  migrate() {
    const e = game.settings.get(d, Le);
    if (foundry.utils.isNewerVersion(game.system.version, e)) {
      let t = [];
      Hooks.callAll(
        C.DECLARE_MIGRATIONS,
        (...s) => t = t.concat(s.filter((a) => foundry.utils.isNewerVersion(a.version, e)))
      ), Hooks.off(C.DECLARE_MIGRATIONS, () => {
      }), t.length > 0 ? (t.sort((s, a) => foundry.utils.isNewerVersion(s.version, a.version) ? 1 : foundry.utils.isNewerVersion(a.version, s.version) ? -1 : 0), t.forEach(async (s) => {
        ui.notifications.info(`Executing migration ${s.code}: version ${e} is lower than ${s.version}`), await s.migrate();
      }), ui.notifications.info(`Migrations done, version will change to ${game.system.version}`)) : console.log(h + `No migration needeed, version will change to ${game.system.version}`), game.settings.set(d, Le, game.system.version);
    } else
      console.log(h + "No system version changed");
  }
}
const ks = `${y}/chat/celebrity-roll.hbs`;
class De extends Dialog {
  static async create(e) {
    const t = {
      actor: e,
      celebrity: {
        labelkey: n.actor.celebrity,
        value: e.getCelebrityValue()
      },
      modifiers: foundry.utils.mergeObject(
        { labelkey: n.item.tabs.modifiers },
        b.computeModifiers(e.items, "other", "celebrity")
      ),
      other: {
        labelkey: n.common.roll.modifiers.other,
        value: 0
      },
      ANARCHY: n
    }, s = await renderTemplate(`${y}/dialog/roll-celebrite-title.hbs`, t), a = await renderTemplate(`${y}/dialog/roll-celebrite.hbs`, t);
    new De(s, a, t).render(!0);
  }
  constructor(e, t, s) {
    const a = {
      title: e,
      content: t,
      default: "roll",
      buttons: {
        roll: {
          label: game.i18n.localize(n.common.roll.button),
          callback: async () => De.doRoll(s)
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
    const t = [
      e.celebrity,
      e.modifiers,
      e.other
    ], s = A.sumValues(t, (c) => c.value), a = {
      actor: e.actor,
      parameters: t,
      pool: s,
      options: {
        classes: [game.system.anarchy.styles.selectCssClass()]
      },
      ANARCHY: n
    }, i = new Roll(`${s}d6cs>=5`);
    await i.evaluate();
    const r = await renderTemplate(ks, a);
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
}
const Ss = `${y}/chat/actor-drain.hbs`, Rs = `${y}/chat/actor-say-word.hbs`;
class Ms extends T {
  static get initiative() {
    return T.initiative + " + max(@attributes.agility.value, @attributes.logic.value)";
  }
  hasOwnAnarchy() {
    return this.hasPlayerOwner;
  }
  prepareDerivedData() {
    this.system.monitors.physical.max = this._getMonitorMax(l.attributes.strength), this.system.monitors.stun.max = this._getMonitorMax(l.attributes.willpower), super.prepareDerivedData(), this.system.ignoreWounds = b.sumModifiers(this.items, "other", "ignoreWounds");
  }
  computePhysicalState() {
    const e = Math.max(this.system.monitors.physical.max, this.system.monitors.stun.max) + this.system.monitors.armor.max, t = this.system.monitors.physical.value == this.system.monitors.physical.max, s = this.system.monitors.stun.max == this.system.monitors.stun.value, a = t || s ? e : Math.max(this.system.monitors.physical.value, this.system.monitors.stun.value) + this.system.monitors.armor.value;
    return {
      max: e,
      value: e - a
    };
  }
  computeEssence() {
    const e = game.system.anarchy.hooks.callHookMethod(C.PROVIDE_BASE_ESSENCE, this), t = A.sumValues(this.items.filter((a) => a.type == "shadowamp").map((a) => Math.abs(a.system.essence))), s = b.sumModifiers(this.items, "other", "essenceAdjustment");
    return e + s - Math.max(0, t);
  }
  computeMalusEssence(e = void 0) {
    return game.system.anarchy.hooks.callHookMethod(C.PROVIDE_MALUS_ESSENCE, this, e ?? this.computeEssence());
  }
  getAttributes() {
    return [
      l.attributes.strength,
      l.attributes.agility,
      l.attributes.willpower,
      l.attributes.logic,
      l.attributes.charisma,
      l.attributes.edge
    ];
  }
  getPhysicalAgility() {
    return l.attributes.agility;
  }
  getCorrespondingAttribute(e) {
    return l.attributes.firewall == e ? l.attributes.firewall : super.getCorrespondingAttribute(e);
  }
  getMatrixDetails() {
    const e = this.getCyberdeck();
    return e != null && e.isConnected() ? {
      hasMatrix: !0,
      logic: l.attributes.logic,
      firewall: l.attributes.firewall,
      monitor: e.system.monitors.matrix,
      overflow: e.getMatrixOverflow(),
      setMatrixMonitor: async (t, s) => e.setMatrixMonitor(t, s)
    } : this.isEmerged() ? {
      hasMatrix: !0,
      logic: l.attributes.logic,
      firewall: l.attributes.logic,
      monitor: this.system.monitors.stun,
      overflow: l.monitors.physical,
      setMatrixMonitor: async (t, s) => {
        if (t == qe.matrix.path)
          return await u.setCheckbar(this, l.monitors.stun, s);
      }
    } : {
      hasMatrix: !1,
      logic: l.attributes.logic,
      firewall: void 0,
      monitor: Qe,
      overflow: void 0
    };
  }
  isMatrixConnected(e = void 0) {
    e = pe.resolveConnectionMode(e);
    let t;
    const s = this.getCyberdeck();
    return s != null && s.isConnected() && (t = s.getConnectionMode()), !t && this.isEmerged() && (t = this.system.connectionMode), e == null ? pe.resolveConnectionMode(t) != _.connectionMode.disconnected : pe.resolveConnectionMode(t) == e;
  }
  async nextConnectionMode(e) {
    if (e)
      await e.nextConnectionMode();
    else if (this.isEmerged()) {
      const t = pe.getNextConnectionMode(this.system.connectionMode);
      await this.update({ "system.connectionMode": t });
    }
  }
  prepareMatrixMonitor() {
    const e = this.getCyberdeck();
    e && (e.system.monitors.matrix.maxBonus = b.sumMonitorModifiers(this.items, "matrix", "max"), e.system.monitors.matrix.resistanceBonus = b.sumMonitorModifiers(this.items, "matrix", "resistance"));
  }
  getDamageMonitor(e) {
    switch (e) {
      case l.monitors.stun:
      case l.monitors.physical:
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
      content: await renderTemplate(
        Rs,
        {
          actor: this,
          wordsToSay: s
        }
      )
    });
  }
  getWord(e, t) {
    return e ? this.system[e].find((s) => s.id == t) : void 0;
  }
  async updateWord(e, t, s) {
    this._applyWordUpdate(e, t, (a) => foundry.utils.mergeObject(a, { word: s }, { overwrite: !0 }));
  }
  async _applyWordUpdate(e, t, s) {
    this._mutateWords(e, (a) => a.map((i) => (i.id == t && s(i), i)));
  }
  async deleteWord(e, t) {
    this._mutateWords(e, (s) => s.filter((a) => a.id != t));
  }
  async _mutateWords(e, t = (s) => s) {
    if (!e)
      return;
    let s = t(this.system[e]);
    A.reindexIds(s), await this.update({ [`system.${e}`]: s });
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
      K.checkSufficient(n.actor.counters.anarchy, e, s + t);
      const a = Math.min(t, e), i = e - a;
      a > 0 && u.addCounter(this, l.monitors.sceneAnarchy, -a), this.hasPlayerOwner ? (await game.system.anarchy.gmAnarchy.actorGivesAnarchyToGM(this, e), u.addCounter(this, l.monitors.anarchy, -i)) : i > 0 && super.spendAnarchy(i);
    }
  }
  canUseEdge() {
    return !0;
  }
  getWounds() {
    const e = A.divint(this.system.monitors.stun.value, 3) + A.divint(this.system.monitors.physical.value, 3);
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
    return this.system.capacity == l.capacities.emerged;
  }
  getCyberdeck() {
    return this.items.find((e) => e.isActive() && e.isCyberdeck());
  }
  async rollDrain(e) {
    if (e) {
      const t = new Roll(`${e}dgcf=1[${game.i18n.localize(n.common.roll.rollTheme.drain)}]`);
      await t.evaluate({ async: !0 }), await this.sufferDrain(t.total);
      const s = await renderTemplate(Ss, {
        ANARCHY: n,
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
    e != 0 && await this.addCounter(l.monitors.stun, e);
  }
  async rollConvergence(e) {
    e && game.system.anarchy.gmConvergence.rollConvergence(this.id, e);
  }
  async rollCelebrity() {
    await De.create(this);
  }
}
const Ts = [
  l.attributes.system,
  l.attributes.firewall
];
class Hs extends T {
  static get defaultIcon() {
    return `${L}/actors/cctv-camera.svg`;
  }
  static get initiative() {
    return T.initiative + " + @attributes.system.value";
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: l.attributes.system,
      firewall: l.attributes.firewall,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  getAttributes() {
    return Ts;
  }
}
const Es = [
  l.attributes.autopilot,
  l.attributes.handling,
  l.attributes.firewall,
  l.attributes.system
];
class Ns extends T {
  static get defaultIcon() {
    return `${L}/shadowamps/drone.svg`;
  }
  static get initiative() {
    return T.initiative + " + max(@attributes.system.value, @attributes.autopilot.value)";
  }
  prepareDerivedData() {
    this.system.monitors.matrix.max = this._getMonitorMax(l.attributes.system), super.prepareDerivedData();
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
      logic: l.attributes.system,
      firewall: l.attributes.firewall,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  getAttributes() {
    return Es;
  }
  getPhysicalAgility() {
    return l.attributes.autopilot;
  }
  getDamageMonitor(e) {
    switch (e) {
      case l.monitors.physical:
        return l.monitors.structure;
      case l.monitors.stun:
        return;
    }
    return super.getDamageMonitor(e);
  }
  getRightToDefend() {
    return CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER;
  }
  async rollPilotDefense(e) {
    const t = Y.getSelectedActors();
    K.checkOutOfRange(n.user.selectedTokenActors, t.length, 0, 1);
    const s = Y.getPlayerActor(game.user), a = this.getOwnerActor(), i = [...t, s, a].filter((r) => r == null ? void 0 : r.testUserPermission(game.user, this.getRightToDefend())).find((r) => r == null ? void 0 : r.canPilotVehicle());
    if (i)
      return await i.rollDefense(e);
    ui.notifications.warn(
      game.i18n.localize(n.common.errors.noValidPilotForVehicle, {
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
class Ds extends Ie {
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
class Is extends Ae {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(
      super.getData(e),
      {}
    );
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Os extends Ae {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(
      super.getData(e),
      {}
    );
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class zs extends Ie {
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
class Ys extends q {
  static get defaultIcon() {
    return `${L}/vitruvian-man.svg`;
  }
  async onCreateItem(e, t) {
    var s;
    (s = this.parent) == null || s.removeOtherMetatype(this);
  }
}
class xs extends q {
  static get defaultIcon() {
    return `${L}/shadowamps/cyberdeck.svg`;
  }
  getAttributes() {
    return [
      l.attributes.firewall
    ];
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
      case _.connectionMode.virtual:
        return l.monitors.physical;
      case _.connectionMode.augmented:
        return l.monitors.stun;
    }
  }
  isConnected() {
    return this.getMatrixOverflow() != null;
  }
  getConnectionMode() {
    return this.system.connectionMode;
  }
  async nextConnectionMode() {
    const e = pe.getNextConnectionMode(this.system.connectionMode);
    await this.update({ "system.connectionMode": e });
  }
}
class ee extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      isGM: game.user.isGM,
      dragDrop: [{ dragSelector: ".item ", dropSelector: null }],
      classes: [game.system.anarchy.styles.selectCssClass(), "sheet", "item-sheet"],
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "main" }]
    });
  }
  get title() {
    return game.i18n.localize(n.itemType.singular[this.item.type]) + ": " + this.item.name;
  }
  get template() {
    return `${y}/item/${this.object.type}.hbs`;
  }
  getData(e) {
    var r;
    const t = (r = this.item.actor) == null ? void 0 : r.getAttributes(this.item), s = this.item.actor ? (c) => t.includes(c) : (c) => !0, a = this.item.type == l.itemType.skill;
    let i = foundry.utils.mergeObject(
      super.getData(e),
      {
        options: {
          isGM: game.user.isGM,
          owner: this.document.isOwner,
          isOwned: this.actor != null,
          editable: this.isEditable,
          cssClass: this.isEditable ? "editable" : "locked"
        },
        ENUMS: foundry.utils.mergeObject(H.getEnums(s, a), game.system.anarchy.modifiers.getEnums()),
        ANARCHY: n
      }
    );
    return i.system = this.item.system, i;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find("a.click-checkbar-element").click(
      async (t) => await this.onClickMonitor(t)
    ), e.find(".click-modifier-add").click(
      async (t) => await this.item.createModifier()
    ), e.find(".click-modifier-delete").click(
      async (t) => await this.item.deleteModifier(this.getEventModifierId(t))
    ), e.find(".input-modifier-value").change(
      async (t) => await this.item.changeModifierValue(
        this.getEventModifierId(t),
        t.currentTarget.value
      )
    ), e.find(".input-modifier-condition").change(
      async (t) => await this.item.changeModifierCondition(
        this.getEventModifierId(t),
        t.currentTarget.value
      )
    ), e.find(".select-modifier-change").change(
      async (t) => await this.item.changeModifierSelection(
        this.getEventModifierId(t),
        this.getEventModifierSelect(t),
        t.currentTarget.value
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
class _s extends ee {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Ps extends ee {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    e.find("a.click-matrix-connectionMode").click(async (t) => {
      await this.item.nextConnectionMode();
    }), super.activateListeners(e);
  }
}
class $s extends ee {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Ls extends ee {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Us extends ee {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Vs extends ee {
  getData(e) {
    return super.getData(e);
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Gs extends ee {
  activateListeners(e) {
    super.activateListeners(e), e.find(".select-skill-code").change(async (t) => {
      const s = t.currentTarget.value, a = Ze.prepareSkill(s);
      a && await this.object.update(a);
    });
  }
}
class js extends ee {
  getData(e) {
    let t = super.getData(e);
    return t.ENUMS = foundry.utils.mergeObject({ defenses: O.getDefenses() }, t.ENUMS), t.hasDrain = this.item.hasDrain, t.hasConvergence = this.item.hasConvergence, t;
  }
  activateListeners(e) {
    super.activateListeners(e), e.find(".select-weapon-skill").change(async (t) => {
      const s = t.currentTarget.value, a = game.system.anarchy.skills.get(s);
      a && await this.object.update({ "system.defense": a.defense }, { render: !1 });
    });
  }
}
class Fs extends q {
  static get defaultIcon() {
    return `${L}/contacts/contact.svg`;
  }
}
class Ws extends q {
  static get defaultIcon() {
    return `${L}/gear/gear.svg`;
  }
}
class Bs extends q {
  static get defaultIcon() {
    return `${L}/quality-positive.svg`;
  }
}
class Ks extends q {
  static get defaultIcon() {
    return `${L}/shadowamps/other.svg`;
  }
}
const Te = "convergences", qs = `${d}.${Te}`, gt = "GMConvergence.rollConvergence", Qs = `${y}/app/gm-convergence.hbs`, pt = `${y}/app/gm-convergence-actors.hbs`;
class Xs {
  constructor() {
    game.settings.register(d, Te, {
      scope: "world",
      config: !1,
      default: [],
      type: Array
    }), this.convergences = [], Hooks.on("updateSetting", async (e, t, s, a) => this.onUpdateSetting(e, t, s, a)), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await loadTemplates([
      Qs,
      pt
    ]), this.convergences = game.settings.get(d, Te).filter((e) => game.actors.get(e.actorId)), await j.register(gt, {
      callback: (e) => this.rollConvergence(e.actorId, e.convergence),
      condition: (e) => e.isGM
    });
  }
  getConvergences() {
    return this.convergences;
  }
  async rollConvergence(e, t) {
    j.call(gt, { actorId: e, convergence: t }) || await this._gmRollConvergence(t, e);
  }
  async _gmRollConvergence(e, t) {
    const s = game.actors.get(t), a = new Roll(`${e}dgcf=1[${game.i18n.localize(n.common.roll.rollTheme.convergence)}]`);
    await a.evaluate({ async: !0 }), this.addConvergence(s, a.total), a.toMessage({
      user: game.user,
      whisper: ChatMessage.getWhisperRecipients("GM"),
      blind: !0,
      flavor: `Convergence for ${s.name}: ${a.total}`
    }, { rollType: "blindroll" });
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
    s || (s = { actorId: e.id }, this.convergences.push(s)), s.convergence = t, this.convergences = this.convergences.filter((a) => a.convergence > 0), game.settings.set(d, Te, this.convergences);
  }
  async activateListeners(e) {
    this.toolbar = e.find(".gm-convergence-bar"), await this._rebuild();
  }
  async onUpdateSetting(e, t, s, a) {
    game.user.isGM && e.key == qs && await this._rebuild();
  }
  async _rebuild() {
    this.toolbar.find(".gm-convergence-content").replaceWith(await this._renderBar()), this.toolbar.find("a.click-checkbar-element").click(async (e) => await this._onClickConvergence(e));
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
    return await renderTemplate(pt, e);
  }
}
class yt extends Combat {
  static init() {
    Hooks.on("createCombatant", async (e, t, s) => await e.combat.onCreateCombatant(e, t, s)), Hooks.on("deleteCombatant", async (e, t, s) => await e.combat.onDeleteCombatant(e, t, s)), Hooks.on("deleteCombat", async (e, t, s) => await e.onDeleteCombat(t, s));
  }
  get initiative() {
    return { formula: "2d6" };
  }
  async rollInitiative(e, t) {
    const s = e.map((i) => this.combatants.find((r) => r.id == i)), a = A.classify(s, (i) => i.actor.type);
    Object.entries(a).forEach(async ([i, r]) => {
      const c = game.system.anarchy.actorClasses[i], m = r.map((F) => F.id), g = foundry.utils.mergeObject({ formula: c.initiative }, t ?? {});
      await super.rollInitiative(m, g);
    });
  }
  async onCreateCombatant(e, t, s) {
    var a;
    Y.isUniqueConnectedGM() && await ((a = e.actor) == null ? void 0 : a.onEnterCombat());
  }
  async onDeleteCombatant(e, t, s) {
    Y.isUniqueConnectedGM() && await this._leaveCombat(e);
  }
  async onDeleteCombat(e, t) {
    Y.isUniqueConnectedGM() && this.combatants.forEach(async (s) => await this._leaveCombat(s));
  }
  async _leaveCombat(e) {
    var t;
    return await ((t = e.actor) == null ? void 0 : t.onLeaveCombat());
  }
}
class Zs extends Ae {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(
      super.getData(e),
      {}
    );
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
class Js extends Ae {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      width: 450,
      height: 550
    });
  }
  getData(e) {
    return foundry.utils.mergeObject(
      super.getData(e),
      {}
    );
  }
  activateListeners(e) {
    super.activateListeners(e);
  }
}
const ea = [
  l.attributes.logic,
  l.attributes.edge
];
class ta extends T {
  static get defaultIcon() {
    return `${L}/misc/rss.svg`;
  }
  static get initiative() {
    return T.initiative + " + @attributes.logic.value";
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: l.attributes.logic,
      firewall: l.attributes.logic,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  getAttributes() {
    return ea;
  }
  isEmerged() {
    return !0;
  }
}
const sa = [
  l.attributes.logic,
  l.attributes.firewall
];
class aa extends T {
  static get defaultIcon() {
    return `${L}/misc/rub-el-hizb.svg`;
  }
  static get initiative() {
    return T.initiative + " + @attributes.logic.value";
  }
  getMatrixDetails() {
    return {
      hasMatrix: !0,
      logic: l.attributes.logic,
      firewall: l.attributes.firewall,
      monitor: this.system.monitors.matrix,
      overflow: void 0
    };
  }
  canSetMarks() {
    return !1;
  }
  getAttributes() {
    return sa;
  }
}
const ft = `${y}/token/hud-shortcuts.hbs`;
class ia {
  constructor() {
    Hooks.on("renderTokenHUD", async (e, t, s) => await this.addExtensionHud(e, t, s._id)), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await loadTemplates([
      ft
    ]);
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
    }, a = await renderTemplate(ft, s), i = $(a), r = i.find(".anarchy-shortcuts-list");
    return this._toggleHudActive(i, r), i.find(".anarchy-shortcuts-toggle").click((c) => {
      this._toggleHudActive(i, r);
    }), r.find(".anarchy-shortcut-button").click((c) => {
      const m = $(c.currentTarget).closest(".anarchy-shortcuts-list").attr("data-token-id"), g = $(c.currentTarget).attr("data-shortcut-type"), F = $(c.currentTarget).attr("data-shortcut-id");
      this.onClickShortcutButton(m, g, F);
    }), i;
  }
  onClickShortcutButton(e, t, s) {
    const a = canvas.tokens.get(e), i = a == null ? void 0 : a.actor;
    if (i) {
      const r = i == null ? void 0 : i.getShortcut(t, s);
      r == null || r.callback(a);
    } else
      ui.notifications.warn(game.i18.localize(n.common.errors.noTokenActor));
  }
  _toggleHudActive(e, t) {
    e.toggleClass("active"), A.showControlWhen(t, e.hasClass("active"));
  }
}
class oa {
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
const ra = `${y}/chat/anarchy-roll.hbs`, na = [
  `${y}/chat/risk-outcome.hbs`,
  `${y}/chat/edge-reroll-button.hbs`,
  `${y}/chat/anarchy-roll-title.hbs`,
  `${y}/chat/parts/actor-image.hbs`,
  `${y}/chat/parts/generic-parameter.hbs`,
  `${y}/chat/parts/result-mode-weapon.hbs`
];
class N {
  constructor() {
    Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    await loadTemplates(A.distinct(na));
  }
  async roll(e) {
    var t, s;
    e.parameters.forEach((a) => {
      a.isUsed != null && (a.used = a.isUsed(a));
    }), e.param = game.system.anarchy.rollParameters.compute(e.parameters), e.param.edge = e.parameters.find((a) => a.category == v.edge && a.used) ? 1 : 0, e.param.anarchy = e.parameters.filter((a) => {
      var i;
      return ((i = a.flags) == null ? void 0 : i.isAnarchy) && a.used;
    }).length, e.options.canUseEdge = e.options.canUseEdge && !e.param.edge, e.param.social = {
      credibility: ((t = e.parameters.find((a) => a.code == "credibility" && a.used)) == null ? void 0 : t.value) ?? 0,
      rumor: ((s = e.parameters.find((a) => a.code == "rumor" && a.used)) == null ? void 0 : s.value) ?? 0
    }, await e.actor.spendAnarchy(e.param.anarchy), await e.actor.spendEdge(e.param.edge), await e.actor.spendCredibility(e.param.social.credibility), await e.actor.spendRumor(e.param.social.rumor), await this._roll(e);
  }
  async edgeReroll(e) {
    e = N.inflateAnarchyRoll(e), e.options.canUseEdge = !1, await e.actor.spendEdge(1), e.param[v.convergence] = void 0, e.param[v.drain] = void 0, await this._roll(e);
  }
  async _roll(e) {
    e.roll = new Oe(e.param), await e.roll.evaluate(), await this._displayRollInChat(e), await e.actor.rollDrain(e.param.drain), await e.actor.rollConvergence(e.param.convergence), await game.system.anarchy.combatManager.manageCombat(e);
  }
  async _displayRollInChat(e) {
    e.options.classes = [game.system.anarchy.styles.selectCssClass()];
    const t = {};
    M.prepareFlag(t, me, N.deflateAnarchyRoll(e)), M.prepareFlag(t, Be, e.options.canUseEdge), M.prepareFlag(t, Ke, M.messageActorRights(e.actor));
    const s = await renderTemplate(ra, e), a = await e.roll.toMessage({ flavor: s, flags: t });
    e.chatMessageId = a.id;
  }
  static deflateAnarchyRoll(e) {
    return e && (e = deepClone(e), e.actor = N._reduceToId(e.actor), e.skill = N._reduceToId(e.skill), e.skill = N._reduceToId(e.skill), e.weapon = N._reduceToId(e.weapon), e.item = N._reduceToId(e.item), e.parameters = N._reduceParameters(e.parameters), e.attackData = void 0, e.attributes = void 0, e.ANARCHY = void 0, e.ENUMS = void 0), e;
  }
  static inflateAnarchyRoll(e) {
    return e && (e = deepClone(e), e.actor = N._reloadActorFromId(e.actor, e.tokenId), e.skill = N._reloadItemFromId(e.actor, e.skill), e.item = N._reloadItemFromId(e.actor, e.item), e.weapon = N._reloadItemFromId(e.actor, e.weapon), e.attributes = e.actor.getUsableAttributes(e.item), e.parameters = N._reloadParameters(e, e.parameters), e.ANARCHY = n, e.ENUMS = H.getEnums()), e;
  }
  static _reduceToId(e) {
    return e ? { id: e.id } : void 0;
  }
  static _reloadActorFromId(e, t) {
    const s = oa.getToken(t);
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
const ca = `${y}/combat/inform-defender.hbs`;
class la {
  async manageCombat(e) {
    var t;
    switch (e.mode) {
      case D.rollType.weapon:
        if (!e.targeting || e.roll.total == 0)
          return;
        (t = e.targeting.targetedTokenIds) == null || t.forEach(
          async (s) => await this.onAttack(s, e)
        );
        break;
      case D.rollType.defense:
        await this.onDefense(e);
        break;
      case D.rollType.defensePilot:
        await this.onDefensePilot(e);
    }
  }
  async onAttack(e, t) {
    var a;
    const s = (a = t.targeting) == null ? void 0 : a.attackerTokenId;
    e && s && await this.displayDefenseChoice(e, t);
  }
  async displayDefenseChoice(e, t, s = void 0, a = void 0) {
    var Ce, J, te;
    const i = (Ce = t.targeting) == null ? void 0 : Ce.attackerTokenId, r = this.getTokenActor(e), c = t.roll.total, m = (s == null ? void 0 : s.roll.total) ?? (a == null ? void 0 : a.roll.total) ?? 0, g = {
      attackerTokenId: i,
      defenderTokenId: e,
      attackRoll: N.deflateAnarchyRoll(t),
      defenseRoll: N.deflateAnarchyRoll(s),
      defensePilotRoll: N.deflateAnarchyRoll(a),
      attack: {
        isHit: c > 0 && c >= m,
        defense: t.weapon.getDefense(),
        pilotCanDefend: r == null ? void 0 : r.isVehicle(),
        success: Math.max(0, c - m),
        damage: t.weapon.getDamage()
      }
    }, F = [
      (J = g.defenseRoll) == null ? void 0 : J.chatMessageId,
      (te = g.defensePilotRoll) == null ? void 0 : te.chatMessageId,
      g.attackRoll.chatMessageId
    ], be = {};
    M.prepareFlag(be, Ke, M.messageActorRights(r, r.getRightToDefend())), M.prepareFlag(be, Ve, F.find((tt) => tt != null));
    const le = await ChatMessage.create({
      user: game.user.id,
      whisper: r.getAllowedUserIds(r.getRightToDefend()),
      content: await renderTemplate(ca, foundry.utils.mergeObject(
        {
          ANARCHY: n,
          options: { classes: [game.system.anarchy.styles.selectCssClass()] },
          attacker: this.getTokenActor(g.attackerTokenId),
          defender: r,
          weapon: g.attackRoll.weapon
        },
        g
      )),
      flags: be
    });
    g.choiceChatMessageId = le.id, le.setFlag(P, me, g);
  }
  async onDefense(e) {
    this._preventObsoleteChoices(e);
    const t = N.inflateAnarchyRoll(e.attackRoll);
    await this.displayDefenseChoice(e.tokenId, t, e);
  }
  async onDefensePilot(e) {
    this._preventObsoleteChoices(e);
    const t = N.inflateAnarchyRoll(e.attackRoll);
    await this.displayDefenseChoice(e.tokenId, t, e);
  }
  _preventObsoleteChoices(e) {
    const t = game.messages.get(e.choiceChatMessageId);
    if (t) {
      const s = t.getFlag(P, Ve) ?? "", a = game.messages.get(s);
      a == null || a.setFlag(P, Be, !1), M.removeChatMessage(e.choiceChatMessageId);
    }
  }
  async onClickDefendAttack(e) {
    await this.getTokenActor(e.defenderTokenId).rollDefense(e);
  }
  async onClickPilotDefendAttack(e) {
    await this.getTokenActor(e.defenderTokenId).rollPilotDefense(e);
  }
  async onClickApplyAttackDamage(e) {
    const t = this.getTokenActor(e.attackerTokenId), s = this.getTokenActor(e.defenderTokenId), a = N.inflateAnarchyRoll(e.attackRoll);
    await S.sufferDamage(
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
class ma extends Ie {
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
const At = { BASE_URL: "/systems/ninjanarchy/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_ENABLE_INTEGRATIONS: "1", VITE_SYSTEM_ID: "ninjanarchy" };
function da() {
  try {
    const o = typeof import.meta < "u" && import.meta && At ? At : {}, e = (o.VITE_ENABLE_INTEGRATIONS ?? "").toString().toLowerCase();
    if (e === "1" || e === "true" || (o.VITE_SYSTEM_ID ?? "").toString().trim() === "ninjanarchy") return !0;
  } catch {
  }
  return !1;
}
async function ua() {
  da() && console.log(h + `Loading integrations for ${d}`);
}
class et {
  static start() {
    const e = new et();
    Hooks.once("init", async () => await e.onInit());
  }
  async onInit() {
    console.log(h + "AnarchySystem.onInit"), game.system.anarchy = this, this.remoteCall = new j(), this.actorClasses = {
      character: Ms,
      vehicle: Ns,
      device: Hs,
      sprite: ta,
      ic: aa
    }, this.itemClasses = {
      contact: Fs,
      cyberdeck: xs,
      gear: Ws,
      metatype: Ys,
      quality: Bs,
      shadowamp: Ks,
      skill: Ze,
      weapon: X
    }, this.hooks = new Z(), this.styles = new is(), this.themeUtilities = new os(this.styles), this.uiCustomization = new rs(this.styles), this.uiCustomizationCommands = new ns(this.uiCustomization), this.handlebarsManager = new He(), this.gmAnarchy = new Pt(), this.gmConvergence = new Xs(), H.init(), this.skills = new Xt(), this.modifiers = new b(), this.rollParameters = new ne(), this.rollManager = new N(), this.hudShortcuts = new ia(), this.combatManager = new la(), console.log(h + "AnarchySystem.onInit | loading system"), CONFIG.ANARCHY = n, CONFIG.Combat.documentClass = yt, CONFIG.Combat.initiative = { formula: "2d6" }, CONFIG.Actor.documentClass = T, CONFIG.Item.documentClass = q, u.init(), this.loadActorSheets(), this.loadItemSheets(), X.init(), B.init(), R.init(), O.init(), yt.init(), Y.init(), ce.init(), Oe.init(), q.init(), T.init(), S.init(), M.init(), this.gmManager = new Wt(this.gmAnarchy, this.gmConvergence), console.log(h + "AnarchySystem.onInit | done"), await ua(), Hooks.once("ready", () => this.onReady());
  }
  async onReady() {
    console.log(h + "AnarchySystem.onReady"), game.user.isGM && new ws().migrate();
  }
  loadActorSheets() {
    Actors.unregisterSheet("core", ActorSheet), Actors.registerSheet(d, Ds, {
      label: game.i18n.localize(n.actor.characterSheet),
      makeDefault: !1,
      types: ["character"]
    }), Actors.registerSheet(d, zs, {
      label: game.i18n.localize(n.actor.characterNPCSheet),
      makeDefault: !1,
      types: ["character"]
    }), Actors.registerSheet(d, ma, {
      label: game.i18n.localize(n.actor.characterTabbedSheet),
      makeDefault: !1,
      types: ["character"]
    }), Actors.registerSheet(d, Fe, {
      label: game.i18n.localize(n.actor.characterEnhancedSheet),
      makeDefault: !0,
      types: ["character"]
    }), Actors.registerSheet(d, Os, {
      label: game.i18n.localize(n.actor.vehicleSheet),
      makeDefault: !0,
      types: ["vehicle"]
    }), Actors.registerSheet(d, Is, {
      label: game.i18n.localize(n.actor.deviceSheet),
      makeDefault: !0,
      types: ["device"]
    }), Actors.registerSheet(d, Js, {
      label: game.i18n.localize(n.actor.spriteSheet),
      makeDefault: !0,
      types: ["sprite"]
    }), Actors.registerSheet(d, Zs, {
      label: game.i18n.localize(n.actor.icSheet),
      makeDefault: !0,
      types: ["ic"]
    });
  }
  loadItemSheets() {
    Items.unregisterSheet("core", ItemSheet), Items.registerSheet(d, _s, { types: ["contact"], makeDefault: !0 }), Items.registerSheet(d, Ps, { types: ["cyberdeck"], makeDefault: !0 }), Items.registerSheet(d, $s, { types: ["gear"], makeDefault: !0 }), Items.registerSheet(d, Ls, { types: ["metatype"], makeDefault: !0 }), Items.registerSheet(d, Us, { types: ["quality"], makeDefault: !0 }), Items.registerSheet(d, Vs, { types: ["shadowamp"], makeDefault: !0 }), Items.registerSheet(d, Gs, { types: ["skill"], makeDefault: !0 }), Items.registerSheet(d, js, { types: ["weapon"], makeDefault: !0 });
  }
}
et.start();
//# sourceMappingURL=index.mjs.map
