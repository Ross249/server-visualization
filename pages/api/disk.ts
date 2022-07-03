import type { NextApiRequest, NextApiResponse } from "next";
import { DriveService } from "../../service/drive.service";
import SERVER_CONFIG from "../../server.config";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const driveService = new DriveService();

    const diskInfo = await driveService.getDriveInfo(
      SERVER_CONFIG.disk.diskPath
    );

    res.status(200).json({
      diskInfo: diskInfo,
    });
  }
}
