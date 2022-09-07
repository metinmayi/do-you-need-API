import { IUnregisteredGuild } from "../../models/IUnregisteredGuild";

export const getUnregisteredGuild = (player: any) => {
  const id = player.guild.id;
  const name = player.guild.name;
  const realm = player.guild.realm.slug;
  const unregisteredGuild: IUnregisteredGuild = { id, name, realm };
  return unregisteredGuild;
};
