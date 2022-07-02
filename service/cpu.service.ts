import osu from "node-os-utils";

export class CpuService {
  cpu = osu.cpu;

  public async getCpuCount(): Promise<number> {
    return this.cpu.count();
  }

  public async getCpuUsage(): Promise<number> {
    const usAge = await this.cpu.usage();
    return usAge;
  }

  public async getCpuFree(): Promise<number> {
    const free = await this.cpu.free();
    return free;
  }

  public async getCpuModel(): Promise<string> {
    const model = await this.cpu.model();
    return model;
  }

  public async getCpuLoadAvg(): Promise<number[]> {
    const loadAvg = await this.cpu.loadavg();
    return loadAvg;
  }

  public async getCpuLoadAvgTime(
    time: string | number
  ): Promise<string | number> {
    const loadAvgTime = await this.cpu.loadavgTime(time);
    return loadAvgTime;
  }
}
