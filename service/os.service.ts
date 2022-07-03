import osu from "node-os-utils";

export class OSService {
  os = osu.os;

  public async getPlatform(): Promise<string> {
    const platform = await this.os.platform();
    return platform;
  }

  public async getOOS(): Promise<string> {
    const oos = (await this.os.oos()) as any;
    return oos;
  }

  public async getUptime(): Promise<number> {
    const uptime = await this.os.uptime();
    return uptime;
  }

  public async getIp(): Promise<string> {
    const ip = await this.os.ip();
    return ip;
  }

  public async getHostname(): Promise<string> {
    const hostname = await this.os.hostname();
    return hostname;
  }

  public async getType(): Promise<string> {
    const type = await this.os.type();
    return type;
  }

  public async getArch(): Promise<string> {
    const arch = await this.os.arch();
    return arch;
  }
}
