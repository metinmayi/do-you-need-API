export interface RaidbotsTopGear {
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
  simbot: Simbot2;
}

export interface Sim {
  options: Options;
  overrides: Overrides;
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
  pvp_mode: boolean;
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

export interface Rng {
  name: string;
}

export interface Dbc {
  Live: Live;
  version_used: string;
}

export interface Live {
  build_level: number;
  wow_version: string;
  hotfix_date: string;
  hotfix_build: number;
  hotfix_hash: string;
}

export interface Overrides {
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
  talents: Talent[];
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
  dbc: Dbc2;
  base_mana_regen_per_second: number;
  base_energy_regen_per_second: number;
  collected_data: CollectedData;
  buffs: Buff[];
  buffs_constant: BuffsConstant[];
  procs: Proc[];
  gains: Gain[];
  stats: Stat[];
  stats_pets: StatsPets;
  gear: Gear;
  custom: Custom;
}

export interface Talent {
  tier: number;
  id: number;
  spell_id: number;
  name: string;
}

export interface Dbc2 {
  Live: Live2;
  version_used: string;
}

export interface Live2 {
  build_level: number;
  wow_version: string;
  hotfix_date: string;
  hotfix_build: number;
  hotfix_hash: string;
}

export interface CollectedData {
  fight_length: FightLength;
  waiting_time: WaitingTime;
  executed_foreground_actions: ExecutedForegroundActions;
  dmg: Dmg;
  compound_dmg: CompoundDmg;
  timeline_dmg: TimelineDmg;
  total_iterations: number;
  dps: Dps;
  dpse: Dpse;
  target_metric: TargetMetric;
  buffed_stats: BuffedStats;
  resource_lost: ResourceLost;
  resource_overflowed: ResourceOverflowed;
  combat_end_resource: CombatEndResource;
  resource_timelines: ResourceTimelines;
}

export interface FightLength {
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

export interface WaitingTime {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface ExecutedForegroundActions {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface Dmg {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface CompoundDmg {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TimelineDmg {
  mean: number;
  mean_std_dev: number;
  min: number;
  max: number;
}

export interface Dps {
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

export interface Dpse {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TargetMetric {
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

export interface BuffedStats {
  attribute: Attribute;
  resources: Resources;
  stats: Stats;
}

export interface Attribute {
  strength: number;
  agility: number;
  stamina: number;
  intellect: number;
}

export interface Resources {
  astral_power: number;
}

export interface Stats {
  spell_power: number;
  attack_power: number;
  spell_crit: number;
  attack_crit: number;
  spell_haste: number;
  attack_haste: number;
  spell_speed: number;
  attack_speed: number;
  mastery_value: number;
  damage_versatility: number;
  heal_versatility: number;
  mitigation_versatility: number;
  crit_rating: number;
  crit_pct: number;
  haste_rating: number;
  haste_pct: number;
  mastery_rating: number;
  mastery_pct: number;
  versatility_rating: number;
  versatility_pct: number;
  avoidance_rating: number;
  avoidance_pct: number;
  speed_pct: number;
  manareg_per_second: number;
  armor: number;
  dodge: number;
}

export interface ResourceLost {
  astral_power: AstralPower;
}

export interface AstralPower {
  sum: number;
  count: number;
  mean: number;
}

export interface ResourceOverflowed {
  astral_power: AstralPower2;
}

export interface AstralPower2 {
  sum: number;
  count: number;
  mean: number;
}

export interface CombatEndResource {
  astral_power: AstralPower3;
}

export interface AstralPower3 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface ResourceTimelines {
  astral_power: AstralPower4;
}

export interface AstralPower4 {
  mean: number;
  mean_std_dev: number;
  min: number;
  max: number;
  data: number[];
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
  item?: Item;
  benefit?: number;
}

export interface Cooldown {
  name: string;
  duration: number;
}

export interface Item {
  id: number;
  ilevel: number;
}

export interface BuffsConstant {
  name: string;
  spell_name: string;
  spell_school: string;
  spell: number;
  start_count: number;
  duration: number;
  uptime: number;
  default_value?: number;
  cooldown?: Cooldown2;
  benefit?: number;
}

export interface Cooldown2 {
  name: string;
  duration: number;
}

export interface Proc {
  name: string;
  interval: number;
  count: number;
}

export interface Gain {
  name: string;
  astral_power: AstralPower5;
}

export interface AstralPower5 {
  actual: number;
  overflow: number;
  count: number;
}

export interface Stat {
  id: number;
  spell_name: string;
  name: string;
  type: string;
  num_executes: NumExecutes;
  compound_amount: number;
  school?: string;
  total_intervals?: TotalIntervals;
  portion_aps?: PortionAps;
  portion_apse?: PortionApse;
  portion_amount?: number;
  actual_amount?: ActualAmount;
  total_amount?: TotalAmount;
  num_direct_results?: NumDirectResults;
  direct_results?: DirectResults;
  item_id?: number;
  total_execute_time?: TotalExecuteTime;
  num_ticks?: NumTicks;
  num_tick_results?: NumTickResults;
  total_tick_time?: TotalTickTime;
  num_refreshes?: NumRefreshes;
  tick_results?: TickResults;
  resource_gain?: ResourceGain;
}

export interface NumExecutes {
  sum: number;
  count: number;
  mean: number;
}

export interface TotalIntervals {
  sum: number;
  count: number;
  mean: number;
}

export interface PortionAps {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface PortionApse {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface ActualAmount {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TotalAmount {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface NumDirectResults {
  sum: number;
  count: number;
  mean: number;
}

export interface DirectResults {
  crit: Crit;
  hit: Hit;
}

export interface Crit {
  actual_amount: ActualAmount2;
  avg_actual_amount: AvgActualAmount;
  total_amount: TotalAmount2;
  fight_actual_amount: FightActualAmount;
  fight_total_amount: FightTotalAmount;
  overkill_pct: OverkillPct;
  count: Count;
  pct: number;
}

export interface ActualAmount2 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface AvgActualAmount {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TotalAmount2 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightActualAmount {
  sum: number;
  count: number;
  mean: number;
}

export interface FightTotalAmount {
  sum: number;
  count: number;
  mean: number;
}

export interface OverkillPct {
  sum: number;
  count: number;
  mean: number;
}

export interface Count {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface Hit {
  actual_amount: ActualAmount3;
  avg_actual_amount: AvgActualAmount2;
  total_amount: TotalAmount3;
  fight_actual_amount: FightActualAmount2;
  fight_total_amount: FightTotalAmount2;
  overkill_pct: OverkillPct2;
  count: Count2;
  pct: number;
}

export interface ActualAmount3 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface AvgActualAmount2 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TotalAmount3 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightActualAmount2 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightTotalAmount2 {
  sum: number;
  count: number;
  mean: number;
}

export interface OverkillPct2 {
  sum: number;
  count: number;
  mean: number;
}

export interface Count2 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TotalExecuteTime {
  sum: number;
  count: number;
  mean: number;
}

export interface NumTicks {
  sum: number;
  count: number;
  mean: number;
}

export interface NumTickResults {
  sum: number;
  count: number;
  mean: number;
}

export interface TotalTickTime {
  sum: number;
  count: number;
  mean: number;
}

export interface NumRefreshes {
  sum: number;
  count: number;
  mean: number;
}

export interface TickResults {
  crit: Crit2;
  hit: Hit2;
}

export interface Crit2 {
  actual_amount: ActualAmount4;
  avg_actual_amount: AvgActualAmount3;
  total_amount: TotalAmount4;
  fight_actual_amount: FightActualAmount3;
  fight_total_amount: FightTotalAmount3;
  overkill_pct: OverkillPct3;
  count: Count3;
  pct: number;
}

export interface ActualAmount4 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface AvgActualAmount3 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TotalAmount4 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightActualAmount3 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightTotalAmount3 {
  sum: number;
  count: number;
  mean: number;
}

export interface OverkillPct3 {
  sum: number;
  count: number;
  mean: number;
}

export interface Count3 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface Hit2 {
  actual_amount: ActualAmount5;
  avg_actual_amount: AvgActualAmount4;
  total_amount: TotalAmount5;
  fight_actual_amount: FightActualAmount4;
  fight_total_amount: FightTotalAmount4;
  overkill_pct: OverkillPct4;
  count: Count4;
  pct: number;
}

export interface ActualAmount5 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface AvgActualAmount4 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface TotalAmount5 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightActualAmount4 {
  sum: number;
  count: number;
  mean: number;
}

export interface FightTotalAmount4 {
  sum: number;
  count: number;
  mean: number;
}

export interface OverkillPct4 {
  sum: number;
  count: number;
  mean: number;
}

export interface Count4 {
  sum: number;
  count: number;
  mean: number;
  min: number;
  max: number;
}

export interface ResourceGain {
  name: string;
  astral_power: AstralPower6;
}

export interface AstralPower6 {
  actual: number;
  overflow: number;
  count: number;
}

export interface StatsPets {}

export interface Gear {
  head: Head;
  neck: Neck;
  shoulders: Shoulders;
  chest: Chest;
  waist: Waist;
  legs: Legs;
  feet: Feet;
  wrists: Wrists;
  hands: Hands;
  finger1: Finger1;
  finger2: Finger2;
  trinket1: Trinket1;
  trinket2: Trinket2;
  back: Back;
  main_hand: MainHand;
  off_hand: OffHand;
}

export interface Head {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  versatility_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Neck {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  haste_rating: number;
  mastery_rating: number;
}

export interface Shoulders {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  crit_rating: number;
  haste_rating: number;
  agiint: number;
}

export interface Chest {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  crit_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Waist {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  crit_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Legs {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  crit_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Feet {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  versatility_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Wrists {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  haste_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Hands {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  haste_rating: number;
  mastery_rating: number;
  agiint: number;
}

export interface Finger1 {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  haste_rating: number;
  mastery_rating: number;
}

export interface Finger2 {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  mastery_rating: number;
  haste_rating: number;
}

export interface Trinket1 {
  name: string;
  encoded_item: string;
  ilevel: number;
  intellect: number;
}

export interface Trinket2 {
  name: string;
  encoded_item: string;
  ilevel: number;
  haste_rating: number;
}

export interface Back {
  name: string;
  encoded_item: string;
  ilevel: number;
  stamina: number;
  haste_rating: number;
  mastery_rating: number;
  stragiint: number;
}

export interface MainHand {
  name: string;
  encoded_item: string;
  ilevel: number;
  intellect: number;
  stamina: number;
}

export interface OffHand {
  name: string;
  encoded_item: string;
  ilevel: number;
  intellect: number;
  stamina: number;
  haste_rating: number;
  mastery_rating: number;
}

export interface Custom {}

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
  overrides: Overrides2;
  simbot: Simbot;
}

export interface Overrides2 {
  stats: Stats2;
}

export interface Stats2 {
  stamina: number;
  agility: number;
  intellect: number;
  strength: number;
  crit_rating: number;
  crit_pct: number;
  haste_rating: number;
  haste_pct: number;
  mastery_rating: number;
  mastery_pct: number;
  versatility_rating: number;
  versatility_pct: number;
  avoidance_rating: number;
  avoidance_pct: number;
  leech_rating: number;
  leech_pct: number;
  speed_rating: number;
  speed_pct: number;
  corruption: number;
  corruption_resistance: number;
}

export interface Simbot {
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
  raid_dps: RaidDps;
  total_dmg: TotalDmg;
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

export interface RaidDps {
  sum: number;
  count: number;
  mean: number;
}

export interface TotalDmg {
  sum: number;
  count: number;
  mean: number;
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
  cooldown?: Cooldown3;
}

export interface Cooldown3 {
  name: string;
  duration: number;
}

export interface Simbot2 {
  title: string;
  simId: string;
  simcVersion: string;
  timeLimit: number;
  concurrency: number;
  isConcurrencyEligible: boolean;
  userConcurrency: number;
  rateLimitKey: string;
  smart: boolean;
  smartHighPrecision: boolean;
  publicTitle: string;
  simType: string;
  player: string;
  charClass: string;
  spec: string;
  fightStyle: string;
  frontendHost: string;
  totalIterations: number;
  userLevel: string;
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
  nonMaxLevel: boolean;
  race: string;
  charClass: string;
  faction: string;
  spec: string;
  role: string;
  player: string;
  totalIterations: number;
}

export interface RawFormData {
  type: string;
  text: string;
  baseActorName: string;
  reportName: string;
  sendEmail: boolean;
  character: Character;
  spec: string;
  gearsets: any[];
  talents: any;
  talentSets: any[];
  optimize: Optimize;
  droptimizerItems: any;
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

export interface Character {
  name: string;
  region: string;
  realm: string;
  class: number;
  level: number;
  race: number;
  faction: number;
  talents: Talent2[];
  covenant: Covenant;
  soulbinds: Soulbind[];
  conduitsAvailable: ConduitsAvailable[];
  renown: number;
}

export interface Talent2 {
  selected: boolean;
  calcTalent: string;
  spec: Spec;
}

export interface Spec {
  id: number;
  name: string;
  role: string;
}

export interface Covenant {
  key: string;
  id: number;
  name: string;
  icon: string;
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
  choiceMap: number[] | undefined[][];
  talents: Talent3[];
  active: boolean;
}

export interface ConduitSlots {
  finesse: number[];
  endurance: number[];
  potency: number[];
}

export interface Talent3 {
  id: number;
  traitId: number;
  name: string;
  tier: number;
  uiOrder: number;
  parentGarrisonTalent: number;
  icon: string;
  spellId: number;
  type: string;
  renownRequired: number;
  choiceIndex: number[];
  conduitType?: string;
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

export interface Rank {
  rank: number;
  spellId: number;
  icon: string;
}

export interface ConduitsAvailable {
  id: number;
  name: string;
  icon: string;
  typeId: number;
  type: string;
  covenant: number;
  specSet: number;
  specUsable: number[];
  itemId: number;
  ranks: Rank2[];
  rank: number;
  spellId: number;
  itemLevel: number;
}

export interface Rank2 {
  rank: number;
  spellId: number;
  icon: string;
}

export interface Optimize {
  data: Daum[];
  gear: Gear2;
  allGear: AllGear;
  numCombinations: number;
  gem: string;
  ringEnchant: string;
  cloakEnchant: string;
  neckEnchant: string;
  weaponEnchant: string;
  weaponOffhandEnchant: string;
  replaceExisting: boolean;
  useMainStatGem: boolean;
  source: string;
  lockedRing: any;
  lockedTrinket: any;
  talentRingOverride: any;
  talentRingOverrideName: any;
  selectedTalents: boolean[][];
  lockedTalents: any[];
  selectedEnhancements: SelectedEnhancement[];
  enhancementReplace: boolean;
  forceMainStat: any[];
  addSocketNum: number;
  addSocketGem: AddSocketGem[];
  selectedEssences: any[];
  passiveEssences: any[];
  equippedGear: EquippedGear;
  equippedTalents: string;
  equippedEssences: any;
  equippedSoulbind: string;
  selected: Selected;
  selectedAzeritePowers: SelectedAzeritePowers;
  azeriteEssencesAvailable: any[];
  selectedEssencesRaw: any[];
  lockedMinor: any;
  lockedMinors: any[];
  soulbinds: number[];
  soulbindGroups: SoulbindGroup[];
  conduits: Conduit[];
  conduitRankOverride: number;
  allSoulbinds: boolean;
  allConduits: boolean;
  allCovenants: boolean;
  unlockedSoulbindTraits: string[];
  renown: number;
  soulbindsModified: boolean;
  tierSetRequirement: number;
  maxCatalystItems: number;
  upgradeCurrencyConstraints: UpgradeCurrencyConstraints;
  combinations: Combination[];
}

export interface Daum {
  comment?: string;
  commentParsed?: CommentParsed;
  emptyLine?: boolean;
  key?: string;
  value?: string;
}

export interface CommentParsed {
  key?: string;
  value?: string;
  comment?: string;
}

export interface Gear2 {
  head: Head2[];
  neck: Neck2[];
  shoulder: Shoulder[];
  back: Back2[];
  chest: Chest2[];
  wrist: Wrist[];
  hands: Hand[];
  waist: Waist2[];
  legs: Leg[];
  feet: Foot[];
  main_hand: MainHand2[];
  off_hand: OffHand2[];
  rings: Ring[];
  trinkets: Trinket[];
}

export interface Head2 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat2[];
  sources: Source[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo;
  origIdx: number;
  selectedIdx: number;
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

export interface Stat2 {
  id: number;
  alloc: number;
}

export interface Source {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo {}

export interface Neck2 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names2;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat3[];
  sources: Source2[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo2;
  origIdx: number;
  selectedIdx: number;
}

export interface Names2 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat3 {
  id: number;
  alloc: number;
}

export interface Source2 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo2 {}

export interface Shoulder {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names3;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat4[];
  sources: Source3[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo3;
  origIdx: number;
  selectedIdx: number;
}

export interface Names3 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat4 {
  id: number;
  alloc: number;
}

export interface Source3 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo3 {}

export interface Back2 {
  id: number;
  enchant_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names4;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat5[];
  sources: Source4[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo4;
  origIdx: number;
  selectedIdx: number;
}

export interface Names4 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat5 {
  id: number;
  alloc: number;
}

export interface Source4 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo4 {}

export interface Chest2 {
  id: number;
  enchant_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names5;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat6[];
  sources: Source5[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo5;
  origIdx: number;
  selectedIdx: number;
}

export interface Names5 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat6 {
  id: number;
  alloc: number;
}

export interface Source5 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo5 {}

export interface Wrist {
  id: number;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names6;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemLimit: ItemLimit;
  stats: Stat7[];
  expansion: number;
  baseItemLevel: number;
  effects: Effect[];
  socketInfo: SocketInfo6;
  origIdx: number;
  selectedIdx: number;
}

export interface Names6 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface ItemLimit {
  category: number;
  quantity: number;
}

export interface Stat7 {
  id: number;
  alloc: number;
}

export interface Effect {
  id: number;
  index: number;
  spell: Spell;
}

export interface Spell {
  id: number;
  name: string;
  icon: string;
}

export interface SocketInfo6 {
  PRISMATIC: Prismatic;
}

export interface Prismatic {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred;
  stat: Stat8;
}

export interface Preferred {
  roles: string[];
}

export interface Stat8 {
  type: string;
  amount: number;
}

export interface Hand {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names7;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat9[];
  sources: Source6[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo7;
  origIdx: number;
  selectedIdx: number;
}

export interface Names7 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat9 {
  id: number;
  alloc: number;
}

export interface Source6 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo7 {}

export interface Waist2 {
  id: number;
  gem_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names8;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat10[];
  bonusLists: number[];
  sources: Source7[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo8;
  upgrade: Upgrade;
  origIdx: number;
  selectedIdx: number;
}

export interface Names8 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat10 {
  id: number;
  alloc: number;
}

export interface Source7 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo8 {
  PRISMATIC: Prismatic2;
}

export interface Prismatic2 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem2[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem2 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred2;
  stat: Stat11;
}

export interface Preferred2 {
  roles: string[];
}

export interface Stat11 {
  type: string;
  amount: number;
}

export interface Upgrade {
  level: number;
  max: number;
  group: number;
}

export interface Leg {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names9;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat12[];
  sources: Source8[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo9;
  origIdx: number;
  selectedIdx: number;
}

export interface Names9 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat12 {
  id: number;
  alloc: number;
}

export interface Source8 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo9 {}

export interface Foot {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names10;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  specs: number[];
  stats: Stat13[];
  sources: Source9[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo10;
  origIdx: number;
  selectedIdx: number;
}

export interface Names10 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat13 {
  id: number;
  alloc: number;
}

export interface Source9 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo10 {}

export interface MainHand2 {
  id: number;
  enchant_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names11;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat14[];
  sources: Source10[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo11;
  guid: string;
  origIdx: number;
  selectedIdx: number;
}

export interface Names11 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat14 {
  id: number;
  alloc: number;
}

export interface Source10 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo11 {}

export interface OffHand2 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names12;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat15[];
  sources: Source11[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo12;
  guid: string;
  origIdx: number;
  selectedIdx: number;
}

export interface Names12 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat15 {
  id: number;
  alloc: number;
}

export interface Source11 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo12 {}

export interface Ring {
  id: number;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names13;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  uniqueEquipped?: boolean;
  stats: Stat16[];
  bonusLists?: number[];
  sources?: Source12[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo13;
  upgrade?: Upgrade2;
  origIdx: number;
  selectedIdx: number;
  itemLimit?: ItemLimit2;
  effects?: Effect2[];
}

export interface Names13 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat16 {
  id: number;
  alloc: number;
}

export interface Source12 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo13 {
  PRISMATIC: Prismatic3;
}

export interface Prismatic3 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem3[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem3 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred3;
  stat: Stat17;
}

export interface Preferred3 {
  roles: string[];
}

export interface Stat17 {
  type: string;
  amount: number;
}

export interface Upgrade2 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency;
  itemLevel: number;
}

export interface Currency {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface ItemLimit2 {
  category: number;
  quantity: number;
}

export interface Effect2 {
  id: number;
  index: number;
  spell: Spell2;
}

export interface Spell2 {
  id: number;
  name: string;
  icon: string;
}

export interface Trinket {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names14;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  uniqueEquipped: boolean;
  specs: number[];
  stats: Stat18[];
  sources: Source13[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo14;
  origIdx: number;
  selectedIdx: number;
  bonusLists?: number[];
  onUseTrinket?: boolean;
  upgrade?: Upgrade3;
}

export interface Names14 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat18 {
  id: number;
  alloc: number;
}

export interface Source13 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo14 {}

export interface Upgrade3 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency2;
  itemLevel: number;
}

export interface Currency2 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface AllGear {
  head: Head3[];
  neck: Neck3[];
  shoulder: Shoulder2[];
  back: Back3[];
  chest: Chest3[];
  wrist: Wrist2[];
  hands: Hand2[];
  waist: Waist3[];
  legs: Leg2[];
  feet: Foot2[];
  main_hand: MainHand3[];
  off_hand: OffHand3[];
  rings: Ring2[];
  trinkets: Trinket3[];
}

export interface Head3 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names15;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
  stats: Stat19[];
  sources?: Source14[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo15;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade4;
  gem_id?: string;
  itemLimit?: ItemLimit3;
  chanceBonusList?: number[];
}

export interface Names15 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat19 {
  id: number;
  alloc: number;
}

export interface Source14 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo15 {
  PRISMATIC?: Prismatic4;
}

export interface Prismatic4 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem4[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem4 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred4;
  stat: Stat20;
}

export interface Preferred4 {
  roles: string[];
}

export interface Stat20 {
  type: string;
  amount: number;
}

export interface Upgrade4 {
  level: number;
  max: number;
  group: number;
  bonusId?: number;
  currency?: Currency3;
  itemLevel?: number;
}

export interface Currency3 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface ItemLimit3 {
  category: number;
  quantity: number;
}

export interface Neck3 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names16;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat21[];
  sources: Source15[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo16;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade5;
  gem_id?: string;
  bonusLists?: number[];
  uniqueEquipped?: boolean;
}

export interface Names16 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat21 {
  id: number;
  alloc: number;
}

export interface Source15 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo16 {
  PRISMATIC?: Prismatic5;
}

export interface Prismatic5 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem5[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem5 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred5;
  stat: Stat22;
}

export interface Preferred5 {
  roles: string[];
}

export interface Stat22 {
  type: string;
  amount: number;
}

export interface Upgrade5 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency4;
  itemLevel: number;
}

export interface Currency4 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Shoulder2 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names17;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat23[];
  sources: Source16[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo17;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade6;
}

export interface Names17 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat23 {
  id: number;
  alloc: number;
}

export interface Source16 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo17 {}

export interface Upgrade6 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency5;
  itemLevel: number;
}

export interface Currency5 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Back3 {
  id: number;
  enchant_id?: string;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names18;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  allowableClasses?: number[];
  specs?: number[];
  stats: Stat24[];
  sources?: Source17[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo18;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade7;
  itemLimit?: ItemLimit4;
  effects?: Effect3[];
}

export interface Names18 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat24 {
  id: number;
  alloc: number;
}

export interface Source17 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo18 {}

export interface Upgrade7 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency6;
  itemLevel: number;
}

export interface Currency6 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface ItemLimit4 {
  category: number;
  quantity: number;
}

export interface Effect3 {
  id: number;
  index: number;
  spell: Spell3;
}

export interface Spell3 {
  id: number;
  name: string;
  icon: string;
}

export interface Chest3 {
  id: number;
  enchant_id?: string;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names19;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat25[];
  sources: Source18[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo19;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade8;
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
}

export interface Names19 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat25 {
  id: number;
  alloc: number;
}

export interface Source18 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo19 {}

export interface Upgrade8 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency7;
  itemLevel: number;
}

export interface Currency7 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Wrist2 {
  id: number;
  enchant_id?: string;
  gem_id?: string;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names20;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemLimit?: ItemLimit5;
  stats: Stat26[];
  expansion: number;
  baseItemLevel: number;
  effects?: Effect4[];
  socketInfo: SocketInfo20;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  sources?: Source19[];
}

export interface Names20 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface ItemLimit5 {
  category: number;
  quantity: number;
}

export interface Stat26 {
  id: number;
  alloc: number;
}

export interface Effect4 {
  id: number;
  index: number;
  spell: Spell4;
}

export interface Spell4 {
  id: number;
  name: string;
  icon: string;
}

export interface SocketInfo20 {
  PRISMATIC?: Prismatic6;
}

export interface Prismatic6 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem6[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem6 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred6;
  stat: Stat27;
}

export interface Preferred6 {
  roles: string[];
}

export interface Stat27 {
  type: string;
  amount: number;
}

export interface Source19 {
  instanceId: number;
  encounterId: number;
}

export interface Hand2 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names21;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
  stats: Stat28[];
  sources: Source20[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo21;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  bonusLists?: number[];
  chanceBonusList?: number[];
  upgrade?: Upgrade9;
}

export interface Names21 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat28 {
  id: number;
  alloc: number;
}

export interface Source20 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo21 {}

export interface Upgrade9 {
  level: number;
  max: number;
  group: number;
  bonusId?: number;
  currency?: Currency8;
  itemLevel?: number;
}

export interface Currency8 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Waist3 {
  id: number;
  gem_id?: string;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names22;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat29[];
  bonusLists?: number[];
  sources: Source21[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo22;
  upgrade?: Upgrade10;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  chanceBonusList?: number[];
  specs?: number[];
}

export interface Names22 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat29 {
  id: number;
  alloc: number;
}

export interface Source21 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo22 {
  PRISMATIC?: Prismatic7;
}

export interface Prismatic7 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem7[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem7 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred7;
  stat: Stat30;
}

export interface Preferred7 {
  roles: string[];
}

export interface Stat30 {
  type: string;
  amount: number;
}

export interface Upgrade10 {
  level: number;
  max: number;
  group: number;
  bonusId?: number;
  currency?: Currency9;
  itemLevel?: number;
}

export interface Currency9 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Leg2 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names23;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId?: number;
  allowableClasses?: number[];
  specs?: number[];
  stats: Stat31[];
  sources?: Source22[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo23;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade11;
  itemLimit?: ItemLimit6;
  effects?: Effect5[];
}

export interface Names23 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat31 {
  id: number;
  alloc: number;
}

export interface Source22 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo23 {}

export interface Upgrade11 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency10;
  itemLevel: number;
}

export interface Currency10 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface ItemLimit6 {
  category: number;
  quantity: number;
}

export interface Effect5 {
  id: number;
  index: number;
  spell: Spell5;
}

export interface Spell5 {
  id: number;
  name: string;
  icon: string;
}

export interface Foot2 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names24;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  specs?: number[];
  stats: Stat32[];
  sources: Source23[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo24;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  upgrade?: Upgrade12;
}

export interface Names24 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat32 {
  id: number;
  alloc: number;
}

export interface Source23 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo24 {}

export interface Upgrade12 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency11;
  itemLevel: number;
}

export interface Currency11 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface MainHand3 {
  id: number;
  enchant_id?: string;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names25;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat33[];
  sources: Source24[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo25;
  guid: string;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  bonusLists?: number[];
  chanceBonusList?: number[];
  upgrade?: Upgrade13;
}

export interface Names25 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat33 {
  id: number;
  alloc: number;
}

export interface Source24 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo25 {}

export interface Upgrade13 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency12;
  itemLevel: number;
}

export interface Currency12 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface OffHand3 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names26;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat34[];
  sources?: Source25[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo26;
  guid: string;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  covenant?: string;
}

export interface Names26 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat34 {
  id: number;
  alloc: number;
}

export interface Source25 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo26 {}

export interface Ring2 {
  id: number;
  enchant_id?: string;
  gem_id?: string;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names27;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  uniqueEquipped?: boolean;
  stats: Stat35[];
  bonusLists?: number[];
  sources?: Source26[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo27;
  upgrade?: Upgrade14;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  itemLimit?: ItemLimit7;
  effects?: Effect6[];
  chanceBonusList?: number[];
}

export interface Names27 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat35 {
  id: number;
  alloc: number;
}

export interface Source26 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo27 {
  PRISMATIC?: Prismatic8;
}

export interface Prismatic8 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem8[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem8 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred8;
  stat: Stat36;
}

export interface Preferred8 {
  roles: string[];
}

export interface Stat36 {
  type: string;
  amount: number;
}

export interface Upgrade14 {
  level: number;
  max: number;
  group: number;
  bonusId?: number;
  currency?: Currency13;
  itemLevel?: number;
}

export interface Currency13 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface ItemLimit7 {
  category: number;
  quantity: number;
}

export interface Effect6 {
  id: number;
  index: number;
  spell: Spell6;
}

export interface Spell6 {
  id: number;
  name: string;
  icon: string;
}

export interface Trinket3 {
  id: number;
  bonus_id: string;
  equipped?: boolean;
  name: string;
  names: Names28;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  uniqueEquipped: boolean;
  specs?: number[];
  stats: Stat37[];
  sources: Source27[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo28;
  origIdx: number;
  selectedIdx: number;
  tags?: string[];
  source?: string;
  onUseTrinket?: boolean;
  bonusLists?: number[];
  chanceBonusList?: number[];
  upgrade?: Upgrade15;
  effects?: Effect7[];
}

export interface Names28 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat37 {
  id: number;
  alloc: number;
}

export interface Source27 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo28 {}

export interface Upgrade15 {
  level: number;
  max: number;
  group: number;
  bonusId?: number;
  currency?: Currency14;
  itemLevel?: number;
}

export interface Currency14 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Effect7 {
  id: number;
  index: number;
  spell: Spell7;
}

export interface Spell7 {
  id: number;
  name: string;
  icon: string;
}

export interface SelectedEnhancement {
  specId: number;
  slot: string;
  enhancementId: number;
}

export interface AddSocketGem {
  specId: number;
  gemId: string;
}

export interface EquippedGear {
  head: Head4[];
  neck: Neck4[];
  shoulder: Shoulder3[];
  back: Back4[];
  chest: Chest4[];
  wrist: Wrist3[];
  hands: Hand3[];
  waist: Waist4[];
  legs: Leg3[];
  feet: Foot3[];
  main_hand: MainHand4[];
  off_hand: OffHand4[];
  rings: Ring3[];
  trinkets: Trinket4[];
}

export interface Head4 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names29;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat38[];
  sources: Source28[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo29;
  origIdx: number;
  selectedIdx: number;
}

export interface Names29 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat38 {
  id: number;
  alloc: number;
}

export interface Source28 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo29 {}

export interface Neck4 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names30;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat39[];
  sources: Source29[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo30;
  origIdx: number;
  selectedIdx: number;
}

export interface Names30 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat39 {
  id: number;
  alloc: number;
}

export interface Source29 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo30 {}

export interface Shoulder3 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names31;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat40[];
  sources: Source30[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo31;
  origIdx: number;
  selectedIdx: number;
}

export interface Names31 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat40 {
  id: number;
  alloc: number;
}

export interface Source30 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo31 {}

export interface Back4 {
  id: number;
  enchant_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names32;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat41[];
  sources: Source31[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo32;
  origIdx: number;
  selectedIdx: number;
}

export interface Names32 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat41 {
  id: number;
  alloc: number;
}

export interface Source31 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo32 {}

export interface Chest4 {
  id: number;
  enchant_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names33;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat42[];
  sources: Source32[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo33;
  origIdx: number;
  selectedIdx: number;
}

export interface Names33 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat42 {
  id: number;
  alloc: number;
}

export interface Source32 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo33 {}

export interface Wrist3 {
  id: number;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names34;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemLimit: ItemLimit8;
  stats: Stat43[];
  expansion: number;
  baseItemLevel: number;
  effects: Effect8[];
  socketInfo: SocketInfo34;
  origIdx: number;
  selectedIdx: number;
}

export interface Names34 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface ItemLimit8 {
  category: number;
  quantity: number;
}

export interface Stat43 {
  id: number;
  alloc: number;
}

export interface Effect8 {
  id: number;
  index: number;
  spell: Spell8;
}

export interface Spell8 {
  id: number;
  name: string;
  icon: string;
}

export interface SocketInfo34 {
  PRISMATIC: Prismatic9;
}

export interface Prismatic9 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem9[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem9 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred9;
  stat: Stat44;
}

export interface Preferred9 {
  roles: string[];
}

export interface Stat44 {
  type: string;
  amount: number;
}

export interface Hand3 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names35;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat45[];
  sources: Source33[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo35;
  origIdx: number;
  selectedIdx: number;
}

export interface Names35 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat45 {
  id: number;
  alloc: number;
}

export interface Source33 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo35 {}

export interface Waist4 {
  id: number;
  gem_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names36;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat46[];
  bonusLists: number[];
  sources: Source34[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo36;
  upgrade: Upgrade16;
  origIdx: number;
  selectedIdx: number;
}

export interface Names36 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat46 {
  id: number;
  alloc: number;
}

export interface Source34 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo36 {
  PRISMATIC: Prismatic10;
}

export interface Prismatic10 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem10[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem10 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred10;
  stat: Stat47;
}

export interface Preferred10 {
  roles: string[];
}

export interface Stat47 {
  type: string;
  amount: number;
}

export interface Upgrade16 {
  level: number;
  max: number;
  group: number;
}

export interface Leg3 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names37;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  itemSetId: number;
  allowableClasses: number[];
  specs: number[];
  stats: Stat48[];
  sources: Source35[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo37;
  origIdx: number;
  selectedIdx: number;
}

export interface Names37 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat48 {
  id: number;
  alloc: number;
}

export interface Source35 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo37 {}

export interface Foot3 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names38;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  specs: number[];
  stats: Stat49[];
  sources: Source36[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo38;
  origIdx: number;
  selectedIdx: number;
}

export interface Names38 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat49 {
  id: number;
  alloc: number;
}

export interface Source36 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo38 {}

export interface MainHand4 {
  id: number;
  enchant_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names39;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat50[];
  sources: Source37[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo39;
  guid: string;
  origIdx: number;
  selectedIdx: number;
}

export interface Names39 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat50 {
  id: number;
  alloc: number;
}

export interface Source37 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo39 {}

export interface OffHand4 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names40;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  stats: Stat51[];
  sources: Source38[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo40;
  guid: string;
  origIdx: number;
  selectedIdx: number;
}

export interface Names40 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat51 {
  id: number;
  alloc: number;
}

export interface Source38 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo40 {}

export interface Ring3 {
  id: number;
  enchant_id: string;
  gem_id: string;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names41;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  uniqueEquipped?: boolean;
  stats: Stat52[];
  bonusLists?: number[];
  sources?: Source39[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo41;
  upgrade?: Upgrade17;
  origIdx: number;
  selectedIdx: number;
  itemLimit?: ItemLimit9;
  effects?: Effect9[];
}

export interface Names41 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat52 {
  id: number;
  alloc: number;
}

export interface Source39 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo41 {
  PRISMATIC: Prismatic11;
}

export interface Prismatic11 {
  type: string;
  staticSlots: number;
  dynamicSlots: number;
  filled: number;
  total: number;
  gems: Gem11[];
  gemIds: number[];
  hasUnique: boolean;
}

export interface Gem11 {
  shortName: string;
  name: string;
  id: number;
  quality: number;
  icon: string;
  group: string;
  type: string;
  preferred: Preferred11;
  stat: Stat53;
}

export interface Preferred11 {
  roles: string[];
}

export interface Stat53 {
  type: string;
  amount: number;
}

export interface Upgrade17 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency15;
  itemLevel: number;
}

export interface Currency15 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface ItemLimit9 {
  category: number;
  quantity: number;
}

export interface Effect9 {
  id: number;
  index: number;
  spell: Spell9;
}

export interface Spell9 {
  id: number;
  name: string;
  icon: string;
}

export interface Trinket4 {
  id: number;
  bonus_id: string;
  equipped: boolean;
  name: string;
  names: Names42;
  icon: string;
  quality: number;
  itemClass: number;
  itemSubClass: number;
  inventoryType: number;
  itemLevel: number;
  uniqueEquipped: boolean;
  specs: number[];
  stats: Stat54[];
  sources: Source40[];
  expansion: number;
  baseItemLevel: number;
  socketInfo: SocketInfo42;
  origIdx: number;
  selectedIdx: number;
  bonusLists?: number[];
  onUseTrinket?: boolean;
  upgrade?: Upgrade18;
}

export interface Names42 {
  de_DE: string;
  en_US: string;
  es_ES: string;
  fr_FR: string;
  it_IT: string;
  pt_BR: string;
  ru_RU: string;
}

export interface Stat54 {
  id: number;
  alloc: number;
}

export interface Source40 {
  instanceId: number;
  encounterId: number;
}

export interface SocketInfo42 {}

export interface Upgrade18 {
  level: number;
  max: number;
  group: number;
  bonusId: number;
  currency: Currency16;
  itemLevel: number;
}

export interface Currency16 {
  amount: number;
  name: string;
  id: number;
  icon: string;
}

export interface Selected {
  head: number[];
  neck: number[];
  shoulder: number[];
  back: number[];
  chest: number[];
  wrist: number[];
  hands: number[];
  waist: number[];
  legs: number[];
  feet: number[];
  main_hand: number[];
  off_hand: number[];
  unknown: any[];
  rings: number[];
  trinkets: number[];
}

export interface SelectedAzeritePowers {
  head: any[];
  neck: any[];
  shoulder: any[];
  back: any[];
  chest: any[];
  wrist: any[];
  hands: any[];
  waist: any[];
  legs: any[];
  feet: any[];
  main_hand: any[];
  off_hand: any[];
  unknown: any[];
  rings: any[];
  trinkets: any[];
}

export interface SoulbindGroup {
  soulbindId: number;
  row: number;
  col: number;
}

export interface Conduit {
  id: number;
  rank: number;
}

export interface UpgradeCurrencyConstraints {}

export interface Combination {
  gear: number[];
  talents: string;
  soulbind: string;
  covenant: Covenant2;
  overrides?: Override[];
}

export interface Covenant2 {
  key: string;
  id: number;
  name: string;
  icon: string;
}

export interface Override {
  slot: string;
  override: Override2;
}

export interface Override2 {
  enchant_id?: number;
  gem_id?: string;
}

export interface AddonInfo {
  source: string;
  version: string;
}

export interface Mem {
  max: number;
  samples: number[];
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
  stats: Stats3;
  stageDuration: number;
  sims: string[];
  culledNum?: number;
  culledPct?: number;
  iterations: number;
}

export interface Stats3 {
  timing: Timing;
}

export interface Timing {
  chunk_start_delay: number[];
  cull_time?: number[];
}
