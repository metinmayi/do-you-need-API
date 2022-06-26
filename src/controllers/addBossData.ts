import axios from "axios";
import { IBossId, IdToBoss, RaidDifficulty, RaidId } from "../constants";
import { IItemType } from "../models/Player";

export class addBossData {
  // Bosses
  private vigilant = [];
  private skolex = [];
  private artificer = [];
  private dausegne = [];
  private prototype = [];
  private lihuvim = [];
  private halondrus = [];
  private anduin = [];
  private lords = [];
  private rygelon = [];
  private jailer = [];

  private playerName?: string;
  private className?: string;
  private selected = 0;
  private role?: string;
  private playerData: any;
  private playerDps: number = 0;

  public async init(reportId: string) {
    // Gets playerData
    await this.fetchPlayerData(reportId);

    // Validate the data
    this.validateInstanceAndDifficulty();

    // Fill in name, Role and class
    this.getName();
    this.getRole();
    this.getClassName();
    this.getPlayerDps();

    // Populate bosses
    this.populateBosses();
  }

  private async fetchPlayerData(reportId: string) {
    try {
      const fetchURL = `https://www.raidbots.com/reports/${reportId}/data.json`;
      const response = await axios(fetchURL);
      this.playerData = response.data;
    } catch (e) {
      throw new Error("Couldn't fetch data from raidbots");
    }
  }

  private validateInstanceAndDifficulty() {
    const raidId =
      this.playerData.sim.profilesets.results[0].name.split("/")[0];
    const raidDifficulty =
      this.playerData.sim.profilesets.results[0].name.split("/")[2];
    if (parseInt(raidId) !== RaidId || raidDifficulty !== RaidDifficulty) {
      throw new Error("Wrong raid and/or difficulty linked");
    }
  }

  private getName() {
    this.playerName = this.playerData.simbot.meta.player;
  }

  private getRole() {
    this.role = this.playerData.simbot.meta.role;
  }

  private getClassName() {
    this.className = this.playerData.simbot.meta.className;
  }

  private getPlayerDps() {
    this.playerDps = this.playerData.sim.players[0].collected_data.dps.mean;
  }

  private populateBosses() {
    const results = this.playerData.sim.profilesets.results;

    for (const result of results) {
      const rawDps = result.mean - this.playerDps;
      if (rawDps < 0) continue;

      const itemSlot: IItemType = result.name.split("/")[5];
      const bossId: IBossId = result.name.split("/")[1];
      const bossName = IdToBoss[bossId];
      const dpsPercentage = Math.round((rawDps / this.playerDps) * 1000) / 10;
      const dpsNumber = Math.round(rawDps);
      const upgrade = {
        [itemSlot]: { dpsPercentage, dpsNumber },
      };
      JSON.parse("vigilant").push("abc");
    }
  }
}
