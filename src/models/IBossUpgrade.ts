export class IBossUpgrade {
  boss_name = "";
  character_id = "";
  head = "";
  shoulder = "";
  chest = "";
  wrist = "";
  hands = "";
  waist = "";
  legs = "";
  feet = "";
  neck = "";
  back = "";
  finger = "";
  trinket = "";
  main_hand = "";
  one_hand = "";
  off_hand = "";
  constructor(bossName: string, characterId: string) {
    this.boss_name = bossName;
    this.character_id = characterId;
  }
}
