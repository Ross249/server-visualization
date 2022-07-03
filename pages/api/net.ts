import type { NextApiRequest, NextApiResponse } from "next";
import { NetService } from "../../service/net.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const netService = new NetService();

    const netInfo = await netService.getNetStats();

    res.status(200).json({
      netInfo: netInfo,
    });
  }
}
