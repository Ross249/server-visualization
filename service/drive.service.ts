import osu from "node-os-utils";

export class DriveService {
  drive = osu.drive;

  public async getDriveInfo(name: string): Promise<any> {
    const info = await this.drive.info(name);
    return info;
  }
}
