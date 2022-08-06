export interface IPlayerData {
  version: string;
  report_version: string;
  ptr_enabled: number;
  beta_enabled: number;
  build_date: string;
  build_time: string;
  timestamp: number;
  git_revision: string;
  git_branch: string;
  sim: Sim;
  simbot: IPlayerDataSimbot;
}

export interface Sim {
  options: Options;
  overrides: SimOverrides;
  players: Player[];
  profilesets: Profilesets;
  statistics: Statistics;
  sim_auras: SimAura[];
}

export interface Options {
  debug: boolean;
  max_time: number;
  expected_iteration_time: number;
  vary_combat_length: number;
  iterations: number;
  target_error: number;
  threads: number;
  seed: number;
  single_actor_batch: boolean;
  queue_lag: number;
  queue_lag_stddev: number;
  gcd_lag: number;
  gcd_lag_stddev: number;
  channel_lag: number;
  channel_lag_stddev: number;
  queue_gcd_reduction: number;
  strict_gcd_queue: boolean;
  confidence: number;
  confidence_estimator: number;
  world_lag: number;
  world_lag_stddev: number;
  travel_variance: number;
  default_skill: number;
  reaction_time: number;
  regen_periodicity: number;
  ignite_sampling_delta: number;
  fixed_time: boolean;
  optimize_expressions: number;
  optimal_raid: number;
  log: number;
  debug_each: number;
  stat_cache: number;
  max_aoe_enemies: number;
  show_etmi: boolean;
  tmi_window_global: number;
  tmi_bin_size: number;
  enemy_death_pct: number;
  challenge_mode: boolean;
  timewalk: number;
  pvp_crit: boolean;
  rng: Rng;
  deterministic: number;
  average_range: number;
  average_gauss: number;
  fight_style: string;
  desired_targets: number;
  default_aura_delay: number;
  default_aura_delay_stddev: number;
  dbc: Dbc;
}

export interface Dbc {
  Live: Live;
  version_used: string;
}

export interface Live {
  build_level: number;
  wow_version: string;
  hotfix_date: Date;
  hotfix_build: number;
  hotfix_hash: string;
}

export interface Rng {
  name: string;
}

export interface SimOverrides {
  arcane_intellect: number;
  battle_shout: number;
  power_word_fortitude: number;
  chaos_brand: number;
  mystic_touch: number;
  mortal_wounds: number;
  bleeding: number;
  bloodlust: number;
}

export interface Player {
  name: string;
  race: string;
  level: number;
  role: string;
  specialization: string;
  profile_source: string;
  talents: PlayerTalent[];
  party: number;
  ready_type: number;
  bugs: boolean;
  scale_player: boolean;
  potion_used: boolean;
  timeofday: string;
  zandalari_loa: string;
  vulpera_tricks: string;
  invert_scaling: number;
  reaction_offset: number;
  reaction_max: number;
  reaction_mean: number;
  reaction_stddev: number;
  reaction_nu: number;
  world_lag: number;
  brain_lag: number;
  brain_lag_stddev: number;
  world_lag_override: boolean;
  world_lag_stddev_override: boolean;
  dbc: Dbc;
  professions: Professions;
  base_mana_regen_per_second: number;
  collected_data: CollectedData;
  buffs: Buff[];
  buffs_constant: SimAura[];
  procs: Proc[];
  gains: Gain[];
  stats: PlayerStat[];
  stats_pets: StatsPets;
  gear: Gear;
  custom: Custom;
}

export interface Buff {
  name: string;
  spell_name: string;
  spell_school: string;
  spell: number;
  cooldown?: Cooldown;
  start_count: number;
  interval?: number;
  trigger?: number;
  duration: number;
  uptime: number;
  expire_count?: number;
  default_value?: number;
  refresh_count?: number;
  overflow_stacks?: number;
  overflow_total?: number;
  benefit?: number;
  item?: BuffItem;
}

export interface Cooldown {
  name: string;
  duration: number;
}

export interface BuffItem {
  id: number;
  ilevel: number;
}

export interface SimAura {
  name: string;
  spell_name: string;
  spell_school: string;
  spell: number;
  start_count: number;
  duration: number;
  uptime: number;
  default_value: number;
  cooldown?: Cooldown;
}

export interface CollectedData {
  fight_length: SimulationLength;
  executed_foreground_actions: CompoundDmg;
  dmg: CompoundDmg;
  compound_dmg: CompoundDmg;
  timeline_dmg: TimelineDmg;
  total_iterations: number;
  dps: SimulationLength;
  dpse: CompoundDmg;
  target_metric: SimulationLength;
  buffed_stats: BuffedStats;
  resource_lost: Resource;
  resource_overflowed: Resource;
  combat_end_resource: CombatEndResource;
  resource_timelines: ResourceTimelines;
}

export interface BuffedStats {
  attribute: Attribute;
  resources: Resources;
  stats: { [key: string]: number };
}

export interface Attribute {
  strength: number;
  agility: number;
  stamina: number;
  intellect: number;
}

export interface Resources {
  mana: number;
}

export interface CombatEndResource {
  mana: CompoundDmg;
}

export interface CompoundDmg {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface SimulationLength {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
  median: number;
  variance: number;
  std_dev: number;
  mean_variance: number;
  mean_std_dev: number;
}

export interface Resource {
  mana: RAIDDps;
}

export interface RAIDDps {
  sum: number;
  count: number;
  mean: number;
}

export interface ResourceTimelines {
  mana: TimelineDmg;
}

export interface TimelineDmg {
  mean: number;
  mean_std_dev: number;
  min: number;
  max: number;
  data?: number[];
}

export interface Custom {}

export interface Gain {
  name: string;
  mana: Mana;
}

export interface Mana {
  actual: number;
  overflow: number;
  count: number;
}

export interface Gear {
  head: Hands;
  neck: Hands;
  shoulders: Hands;
  chest: Chest;
  waist: Chest;
  legs: Hands;
  feet: Chest;
  wrists: Chest;
  hands: Hands;
  finger1: Finger;
  finger2: Finger;
  trinket1: Trinket;
  trinket2: Trinket;
  back: GearBack;
  main_hand: Chest;
}

export interface GearBack {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  haste_rating: number;
  versatility_rating: number;
  stragiint: number;
  leech_rating: number;
}

export interface Chest {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  crit_rating?: number;
  haste_rating?: number;
  agiint?: number;
  intellect?: number;
  versatility_rating?: number;
}

export interface Finger {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  versatility_rating?: number;
  crit_rating: number;
  haste_rating?: number;
}

export interface Hands {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  versatility_rating: number;
  mastery_rating?: number;
  agiint?: number;
  crit_rating?: number;
  avoidance_rating?: number;
}

export interface Trinket {
  name: string;
  encoded_item: string;
  ilevel: number;
  stragiint: number;
}

export interface Proc {
  name: string;
  interval: number;
  count: number;
}

export interface Professions {
  alchemy: number;
  herbalism: number;
}

export interface PlayerStat {
  id: number;
  spell_name: string;
  name: string;
  type: GreaterEarthElementalType;
  num_executes: RAIDDps;
  compound_amount: number;
  school?: string;
  total_intervals?: RAIDDps;
  resource_gain?: Gain;
  total_execute_time?: RAIDDps;
  portion_aps?: CompoundDmg;
  portion_apse?: CompoundDmg;
  portion_amount?: number;
  actual_amount?: CompoundDmg;
  total_amount?: CompoundDmg;
  num_direct_results?: RAIDDps;
  direct_results?: Results;
  num_ticks?: RAIDDps;
  num_tick_results?: RAIDDps;
  total_tick_time?: RAIDDps;
  tick_results?: Results;
  item_id?: number;
}

export interface Results {
  crit: Crit;
  hit: Crit;
}

export interface Crit {
  actual_amount: CompoundDmg;
  avg_actual_amount: CompoundDmg;
  total_amount: RAIDDps;
  fight_actual_amount: RAIDDps;
  fight_total_amount: RAIDDps;
  overkill_pct: RAIDDps;
  count: CompoundDmg;
  pct: number;
}

export enum GreaterEarthElementalType {
  Damage = "damage",
}

export interface StatsPets {
  greater_earth_elemental: GreaterEarthElemental[];
}

export interface GreaterEarthElemental {
  id: number;
  spell_name: string;
  name: NameElement;
  school: string;
  type: GreaterEarthElementalType;
  num_executes: RAIDDps;
  compound_amount: number;
  total_execute_time: RAIDDps;
  portion_aps: CompoundDmg;
  portion_apse: CompoundDmg;
  portion_amount: number;
  actual_amount: CompoundDmg;
  total_amount: CompoundDmg;
  total_intervals: RAIDDps;
  num_direct_results: RAIDDps;
  direct_results: Results;
}

export enum NameElement {
  Caster = "caster",
  Healer = "healer",
  Melee = "melee",
  Ranged = "ranged",
  Tank = "tank",
}

export interface PlayerTalent {
  tier: number;
  id: number;
  spell_id: number;
  name: string;
}

export interface Profilesets {
  metric: string;
  results: Result[];
}

export interface Result {
  name: string;
  mean: number;
  min: number;
  max: number;
  stddev: number;
  mean_stddev: number;
  mean_error: number;
  median: number;
  first_quartile: number;
  third_quartile: number;
  iterations: number;
  overrides: ResultOverrides;
  simbot: ResultSimbot;
}

export interface ResultOverrides {
  stats: { [key: string]: number };
}

export interface ResultSimbot {
  stage: number;
  targetError: number;
}

export interface Statistics {
  elapsed_cpu_seconds: number;
  elapsed_time_seconds: number;
  init_time_seconds: number;
  merge_time_seconds: number;
  analyze_time_seconds: number;
  simulation_length: SimulationLength;
  total_events_processed: number;
  raid_dps: RAIDDps;
  total_dmg: RAIDDps;
}

export interface IPlayerDataSimbot {
  title: string;
  simId: string;
  simcVersion: string;
  timeLimit: number;
  concurrency: number;
  isConcurrencyEligible: boolean;
  userConcurrency: number;
  smart: boolean;
  smartHighPrecision: boolean;
  usePubSub: boolean;
  publicTitle: string;
  simType: string;
  player: string;
  charClass: string;
  spec: string;
  fightStyle: string;
  frontendHost: string;
  totalIterations: number;
  numProfilesets: number;
  jobSubmitted: number;
  chunkSizes: number[];
  attempts: number;
  numChunks: number;
  stage: number;
  numStages: number;
  stageTarget: number;
  stageActors: number;
  jobFirstStart: number;
  host: string;
  hostStart: number;
  workStarted: boolean;
  meta: Meta;
  parentSimId: string;
  parentJobId: string;
  fromFlightmaster: boolean;
  flightChunk: boolean;
  saveHtml: boolean;
  source: string;
  input: string;
  date: number;
  skippedHtml: boolean;
  mem: Mem;
  flightmaster: Flightmaster;
  hasCsv: boolean;
}

export interface Flightmaster {
  stages: Stage[];
  iterationsActual: number;
  iterationsEstimate: number;
  iterationsEstimateDiff: number;
  duration: number;
}

export interface Stage {
  stage: number;
  actors: number;
  totalActors: number;
  profilesets: number;
  targetError: number;
  stats: Stats;
  stageDuration: number;
  sims: string[];
  culledNum?: number;
  culledPct?: number;
  iterations: number;
}

export interface Stats {
  timing: Timing;
}

export interface Timing {
  chunk_start_delay: number[];
  cull_time?: number[];
}

export interface Mem {
  max: number;
  samples: number[];
}

export interface Meta {
  title: string;
  type: string;
  source: string;
  origin: string;
  simcVersion: string;
  iterations: string;
  fightStyle: string;
  fightLength: number;
  enemyCount: number;
  enemyType: string;
  potion: string;
  food: string;
  flask: string;
  augmentation: string;
  optimalRaid: boolean;
  bloodlust: boolean;
  arcaneIntellect: boolean;
  fortitude: boolean;
  battleShout: boolean;
  mysticTouch: boolean;
  chaosBrand: boolean;
  windfury: boolean;
  reoriginationArray: number;
  zuldazar: boolean;
  enableDominationShards: boolean;
  soleahStatType: string;
  ocularGlandUptime: number;
  enableRuneWords: boolean;
  temporaryEnchant: string;
  stoneLegionHeraldryInParty: number;
  cabalistsHymnalInParty: number;
  disableIqdExecute: boolean;
  iqdStatFailChance: number;
  unboundChangelingStatType: string;
  bleeding: boolean;
  reportDetails: boolean;
  pantheonTrinkets: number;
  ptr: boolean;
  frontendHost: string;
  frontendVersion: string;
  rawFormData: RawFormData;
  customApl: boolean;
  expertMode: boolean;
  addonInfo: AddonInfo;
  itemLibrary: ItemLibraryElement[];
  instanceLibrary: Instance[];
  nonMaxLevel: boolean;
  race: string;
  charClass:
    | "warrior"
    | "mage"
    | "paladin"
    | "hunter"
    | "rogue"
    | "priest"
    | "shaman"
    | "warlock"
    | "monk"
    | "druid"
    | "demonHunter"
    | "deathKnight";
  faction: string;
  spec: string;
  role: "tank" | "healing" | "dps";
  player: string;
  totalIterations: number;
}

export interface AddonInfo {
  source: string;
  version: string;
}

export interface Instance {
  id: number;
  name: InstanceLibraryName;
  description: string;
  image_button: ImageButton;
  image_button_small: ImageButtonSmall;
  image_background: ImageBackground;
  order: number;
  flags: number;
  type_id: number;
  type: InstanceLibraryType;
  encounters: Encounter[];
}

export interface Encounter {
  id: number;
  name: EncounterName;
  icon?: EncounterIcon;
  order: number;
  flags?: number;
  difficulty_mask?: number;
}

export enum EncounterIcon {
  UIEjBossAnduinshadowlands = "ui-ej-boss-anduinshadowlands",
  UIEjBossArtificerxymoxSepulcher = "ui-ej-boss-artificerxymox_sepulcher",
  UIEjBossDausegne = "ui-ej-boss-dausegne",
  UIEjBossHalondrus = "ui-ej-boss-halondrus",
  UIEjBossJailer = "ui-ej-boss-jailer",
  UIEjBossLihuvim = "ui-ej-boss-lihuvim",
  UIEjBossLordsofdread = "ui-ej-boss-lordsofdread",
  UIEjBossPrototypepantheon = "ui-ej-boss-prototypepantheon",
  UIEjBossRygelon = "ui-ej-boss-rygelon",
  UIEjBossSkolex = "ui-ej-boss-skolex",
  UIEjBossVigilantguardian = "ui-ej-boss-vigilantguardian",
}

export enum EncounterName {
  AnduinWrynn = "Anduin Wrynn",
  ArtificerXyMox = "Artificer Xy'mox",
  DausegneTheFallenOracle = "Dausegne, the Fallen Oracle",
  HalondrusTheReclaimer = "Halondrus the Reclaimer",
  LihuvimPrincipalArchitect = "Lihuvim, Principal Architect",
  LordsOfDread = "Lords of Dread",
  PrototypePantheon = "Prototype Pantheon",
  Rygelon = "Rygelon",
  SkolexTheInsatiableRavener = "Skolex, the Insatiable Ravener",
  TheJailer = "The Jailer",
  TrashDrop = "Trash Drop",
  VigilantGuardian = "Vigilant Guardian",
}

export enum ImageBackground {
  UIEjBackgroundSepulcherofthefirstones = "ui-ej-background-sepulcherofthefirstones",
}

export enum ImageButton {
  UIEjDungeonbuttonSepulcherofthefirstones = "ui-ej-dungeonbutton-sepulcherofthefirstones",
}

export enum ImageButtonSmall {
  LfgiconSepulcherofthefirstones = "lfgicon-sepulcherofthefirstones",
}

export enum InstanceLibraryName {
  SepulcherOfTheFirstOnes = "Sepulcher of the First Ones",
}

export enum InstanceLibraryType {
  RAID = "raid",
}

export interface ItemLibraryElement {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources: Source[];
  expansion: number;
  enchant_id: number | null;
  tooltipParams: ItemLibraryTooltipParams;
  bonus_id: BonusID;
  gem_id: string;
  instanceId: number;
  encounterId: number;
  difficulty: Difficulty;
  instance: Instance;
  encounter: Encounter;
  overrides: ItemLibraryOverrides;
  socketInfo: Custom;
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
  uniqueEquipped?: boolean;
  onUseTrinket?: boolean;
}

export enum BonusID {
  The480047861498 = "4800/4786/1498",
  The480047861505 = "4800/4786/1505",
  The480047861524 = "4800/4786/1524",
}

export enum Difficulty {
  RAIDMythic = "raid-mythic",
}

export interface Names {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface ItemLibraryOverrides {
  disableWarforgeLevel: boolean;
  enableSockets: boolean;
  instanceId: number;
  difficulty: Difficulty;
  itemLevel: ItemLevel;
  itemLevelOverride: number;
  season: Season;
  instance: Instance;
  encounter: Encounter;
  encounterType: EncounterType;
  encounterTypePlural: EncounterTypePlural;
  quality: number;
  encounterId?: number;
}

export enum EncounterType {
  Boss = "boss",
}

export enum EncounterTypePlural {
  Bosses = "bosses",
}

export enum ItemLevel {
  The278285 = "278 - 285",
}

export enum Season {
  Sl3 = "sl3",
}

export interface Source {
  instanceId: number;
  encounterId: number;
}

export interface ItemLibraryStat {
  id: number;
  alloc: number;
}

export interface ItemLibraryTooltipParams {
  enchant: number | null;
}

export interface RawFormData {
  type: string;
  text: string;
  baseActorName: string;
  reportName: string;
  armory: Armory;
  sendEmail: boolean;
  character: Character;
  spec: string;
  simcItems: SimcItems;
  gearsets: any[];
  talents: null;
  talentSets: any[];
  droptimizer: Droptimizer;
  droptimizerItems: DroptimizerItem[];
  simcVersion: string;
  iterations: string;
  smartHighPrecision: boolean;
  fightStyle: string;
  fightLength: number;
  enemyCount: number;
  enemyType: string;
  potion: string;
  food: string;
  flask: string;
  augmentation: string;
  bloodlust: boolean;
  arcaneIntellect: boolean;
  fortitude: boolean;
  battleShout: boolean;
  mysticTouch: boolean;
  chaosBrand: boolean;
  bleeding: boolean;
  windfury: boolean;
  reoriginationArray: number;
  reportDetails: boolean;
  pantheonTrinkets: number;
  zuldazar: boolean;
  apl: string;
  ptr: boolean;
  frontendHost: string;
  frontendVersion: string;
  enableDominationShards: boolean;
  soleahStatType: string;
  ocularGlandUptime: number;
  enableRuneWords: boolean;
  temporaryEnchant: string;
  stoneLegionHeraldryInParty: number;
  cabalistsHymnalInParty: number;
  disableIqdExecute: boolean;
  iqdStatFailChance: number;
  unboundChangelingStatType: string;
  nazjatar: boolean;
  worldveinAllies: number;
  loyalToTheEndAllies: number;
  covenantChance: number;
  undulatingTides: number;
  nyalotha: boolean;
  aberration: boolean;
  voidRitual: boolean;
  surgingVitality: number;
  symbioticPresence: number;
}

export interface Armory {
  region: string;
  realm: string;
  name: string;
}

export interface Character {
  name: string;
  region: string;
  realm: string;
  class: number;
  level: number;
  race: number;
  faction: number;
  items: Items;
  talents: CharacterTalent[];
  covenant: Covenant;
  soulbinds: Soulbind[];
  conduitsAvailable: ConduitsAvailable[];
  renown: number;
}

export interface ConduitsAvailable {
  id: number;
  name: string;
  icon: ConduitsAvailableIcon;
  typeId: number;
  type: ConduitTypeEnum;
  covenant: number;
  specSet: number;
  specUsable: number[];
  itemId: number;
  ranks: Rank[];
  rank: number;
  spellId: number;
  itemLevel: number;
}

export enum ConduitsAvailableIcon {
  AbilityAccretion = "ability_accretion",
  AbilityHunterLongevity = "ability_hunter_longevity",
  AbilityHunterMastertactitian = "ability_hunter_mastertactitian",
  AbilityShamanFortifyingwaters = "ability_shaman_fortifyingwaters",
  AbilitySiegeEngineerPurificationBeam = "ability_siege_engineer_purification_beam",
  AbilitySkyreachWindWall = "ability_skyreach_wind_wall",
  AbilityThunderkingBalllightning = "ability_thunderking_balllightning",
  AbilityVehicleElectrocharge = "ability_vehicle_electrocharge",
  ItemSparkofragnoros = "item_sparkofragnoros",
  ShamanPvpRipplingwaters = "shaman_pvp_ripplingwaters",
  SpellAnimarevendrethORB = "spell_animarevendreth_orb",
  SpellArcanePrismaticcloak = "spell_arcane_prismaticcloak",
  SpellFireSoulburn = "spell_fire_soulburn",
  SpellFrostIcefloes = "spell_frost_icefloes",
  SpellHolySerendipity = "spell_holy_serendipity",
  SpellNatureRemovedisease = "spell_nature_removedisease",
  SpellNatureUnrelentingstorm = "spell_nature_unrelentingstorm",
  SpellShamanBlessingofeternals = "spell_shaman_blessingofeternals",
  SpellShamanDropall03 = "spell_shaman_dropall_03",
  SpellShamanImprovedearthshield = "spell_shaman_improvedearthshield",
  WarlockCharredremains = "warlock_charredremains",
}

export interface Rank {
  rank: number;
  spellId: number;
  icon: ConduitsAvailableIcon;
}

export enum ConduitTypeEnum {
  Endurance = "endurance",
  Finesse = "finesse",
  Potency = "potency",
  Spell = "spell",
}

export interface Covenant {
  key?: string;
  id: number;
  name: string;
  icon: string;
}

export interface Items {
  head: Feet;
  neck: Feet;
  shoulder: Feet;
  back: ChestClass;
  chest: ChestClass;
  tabard: Feet;
  wrist: ItemsWrist;
  hands: Feet;
  waist: Waist;
  legs: Feet;
  feet: Feet;
  finger1: ItemsFinger1;
  finger2: ChestClass;
  trinket1: Feet;
  trinket2: Feet;
  mainHand: ChestClass;
}

export interface ChestClass {
  id: string;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: Custom;
  enchant_id: string;
  bonus_id: string;
  slot: string;
  tooltipParams: OffHandAlternateWeaponTooltipParams;
  bonusLists: string[];
  uniqueEquipped?: boolean;
}

export interface OffHandAlternateWeaponTooltipParams {
  enchant: null | string;
  gem0: null | string;
}

export interface Feet {
  id: string;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources?: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: Custom;
  bonus_id?: string;
  slot: string;
  tooltipParams: PurpleTooltipParams;
  bonusLists: string[] | null;
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
  itemLimit?: ItemLimit;
  effects?: Effect[];
  uniqueEquipped?: boolean;
}

export interface Effect {
  id: number;
  index: number;
  spell: Covenant;
}

export interface ItemLimit {
  category: number;
  quantity: number;
}

export interface PurpleTooltipParams {
  gem0: string;
}

export interface ItemsFinger1 {
  id: string;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  hasSockets: boolean;
  socketInfo: SocketInfo;
  uniqueEquipped: boolean;
  stats: ItemLibraryStat[];
  expansion: number;
  baseItemLevel: number;
  effects: Effect[];
  itemLimit: ItemLimit;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  drop_level: string;
  crafted_stats: string;
  slot: string;
  tooltipParams: OffHandAlternateWeaponTooltipParams;
  bonusLists: string[];
  craftedStats: string[];
}

export interface SocketInfo {
  PRISMATIC: Prismatic;
}

export interface Prismatic {
  type: GemType;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem {
  shortName: ShortName;
  name: GemName;
  id: number;
  quality: number;
  icon: GemIcon;
  group: Group;
  type: GemType;
  preferred: Preferred;
  stat: GemStat;
}

export enum Group {
  SlRare = "sl-rare",
}

export enum GemIcon {
  InvJewelcrafting90_RarecutBlue = "inv_jewelcrafting_90_rarecut_blue",
  InvJewelcrafting90_RarecutOrange = "inv_jewelcrafting_90_rarecut_orange",
}

export enum GemName {
  The16Crit = "16 Crit",
  The16Vers = "16 Vers",
}

export interface Preferred {
  roles: NameElement[];
}

export enum ShortName {
  The16Crit = "16crit",
  The16Vers = "16vers",
}

export interface GemStat {
  type: PurpleType;
  amount: number;
}

export enum PurpleType {
  Crit = "crit",
  Vers = "vers",
}

export enum GemType {
  Prismatic = "PRISMATIC",
}

export interface Waist {
  id: string;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemLimit: ItemLimit;
  stats: ItemLibraryStat[];
  expansion: number;
  baseItemLevel: number;
  effects: Effect[];
  socketInfo: SocketInfo;
  gem_id: string;
  bonus_id: string;
  slot: string;
  tooltipParams: PurpleTooltipParams;
  bonusLists: string[];
}

export interface ItemsWrist {
  id: string;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  slot: string;
  tooltipParams: OffHandAlternateWeaponTooltipParams;
  bonusLists: string[];
}

export interface Soulbind {
  id: number;
  key: string;
  image: string;
  name: string;
  covenantId: number;
  garrisonTalentTreeId: number;
  garrisonFollowerId: number;
  creatureId: number;
  conduitSlots: ConduitSlots;
  choiceMap: Array<Array<number[] | null>>;
  talents: SoulbindTalent[];
  active: boolean;
}

export interface ConduitSlots {
  finesse: number[];
  endurance: number[];
  potency: number[];
}

export interface SoulbindTalent {
  id: number;
  traitId: number;
  name: string;
  tier: number;
  uiOrder: number;
  parentGarrisonTalent: number;
  icon: string;
  spellId: number;
  type: ConduitTypeEnum;
  renownRequired: number;
  choiceIndex: number[];
  conduitType?: ConduitTypeEnum;
  enhancedRenownLevel?: number;
  enhanced?: boolean;
  typeId?: number;
  covenant?: number;
  specSet?: number;
  specUsable?: number[];
  itemId?: number;
  ranks?: Rank[];
  rank?: number;
  itemLevel?: number;
}

export interface CharacterTalent {
  selected: boolean;
  calcTalent: string;
  spec: Spec;
}

export interface Spec {
  id: number;
  name: string;
  role: string;
}

export interface Droptimizer {
  equipped: SimcItems;
  mainHandAlternateWeapon: MainHandAlternateWeapon;
  offHandAlternateWeapon: OffHandAlternateWeapon;
  instance: number;
  difficulty: Difficulty;
  warforgeLevel: number;
  gem: null;
  azeriteLevel: number;
  allAzeritePowers: boolean;
  classId: number;
  specId: number;
  lootSpecId: number;
  faction: string;
  covenant: string;
  simAzeriteGear: boolean;
}

export interface SimcItems {
  head: Head;
  neck: OffHandAlternateWeapon;
  shoulder: OffHandAlternateWeapon;
  back: MainHandAlternateWeapon;
  chest: MainHandAlternateWeapon;
  tabard: OffHandAlternateWeapon;
  wrist: SimcItemsWrist;
  hands: OffHandAlternateWeapon;
  waist: Head;
  legs: OffHandAlternateWeapon;
  feet: OffHandAlternateWeapon;
  finger1: SimcItemsFinger1;
  finger2: MainHandAlternateWeapon;
  trinket1: OffHandAlternateWeapon;
  trinket2: OffHandAlternateWeapon;
  mainHand: MainHandAlternateWeapon;
}

export interface MainHandAlternateWeapon {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: Custom;
  enchant_id: string;
  bonus_id: string;
  slot: string;
  tooltipParams: MainHandAlternateWeaponTooltipParams;
  bonusLists: number[];
  uniqueEquipped?: boolean;
}

export interface MainHandAlternateWeaponTooltipParams {
  enchant: number | null;
  gem0: number | null;
}

export interface OffHandAlternateWeapon {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources?: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: Custom;
  bonus_id?: string;
  slot: string;
  tooltipParams: OffHandAlternateWeaponTooltipParams;
  bonusLists: number[];
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
  uniqueEquipped?: boolean;
}

export interface SimcItemsFinger1 {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  hasSockets: boolean;
  socketInfo: SocketInfo;
  uniqueEquipped: boolean;
  stats: ItemLibraryStat[];
  expansion: number;
  baseItemLevel: number;
  effects: Effect[];
  itemLimit: ItemLimit;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  drop_level: string;
  crafted_stats: string;
  slot: string;
  tooltipParams: MainHandAlternateWeaponTooltipParams;
  bonusLists: number[];
  craftedStats: number[];
}

export interface Head {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemLimit: ItemLimit;
  stats: ItemLibraryStat[];
  expansion: number;
  baseItemLevel: number;
  effects: Effect[];
  socketInfo: SocketInfo;
  gem_id: string;
  bonus_id: string;
  slot: string;
  tooltipParams: MainHandAlternateWeaponTooltipParams;
  bonusLists: number[];
}

export interface SimcItemsWrist {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  slot: string;
  tooltipParams: MainHandAlternateWeaponTooltipParams;
  bonusLists: number[];
}

export interface DroptimizerItem {
  id: string;
  slot: string;
  item: ItemLibraryElement;
  equippedSameOrBetter: boolean;
  alternate?: Alternate;
  alternateSlot?: string;
}

export interface Alternate {
  id: number;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: ItemLibraryStat[];
  sources: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: Custom;
  bonus_id: string;
  slot: string;
  tooltipParams: MainHandAlternateWeaponTooltipParams;
  bonusLists: number[];
  ilevel: number;
  enchant_id?: number;
}
