import type { NextApiRequest, NextApiResponse } from "next";
import { OSService } from "../../service/os.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const osService = new OSService();

    const OOS = await osService.getOOS();
    const platform = await osService.getPlatform();
    const uptime = await osService.getUptime();
    const ip = await osService.getIp();
    const hostname = await osService.getHostname();
    const type = await osService.getType();
    const arch = await osService.getArch();

    res.status(200).json({
      hostname: hostname,
      ip: ip,
      OOS: OOS,
      platform: platform,
      uptime: uptime,
      type: type,
      arch: arch,
    });
  }
}
