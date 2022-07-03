import osu from "node-os-utils";

export class MemService {
  mem = osu.mem;

  public async getMemInfo(): Promise<any> {
    const memInfo = await this.mem.info();
    return memInfo;
  }
}
