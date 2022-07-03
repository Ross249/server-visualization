import osu from "node-os-utils";
import type { NetStatInfo } from "node-os-utils";

export class NetService {
  net = osu.netstat;

  public async getNetStats(): Promise<NetStatInfo[]> {
    const netStat = await this.net.stats();
    return netStat;
  }
}
