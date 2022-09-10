import { GuildModel } from "../../mongoose/schemas/GuildSchema";

export async function storeGuild(guildInformation: any) {
  const guild = {
    name: guildInformation.data.name.toLowerCase(),
    realm: guildInformation.data.realm.slug.toLowerCase(),
    id: guildInformation.data.id,
    faction: guildInformation.data.faction.type.toLowerCase(),
    license: "standard",
  };
  const response = await GuildModel.create(guild);
}
