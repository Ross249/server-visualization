import type { NextApiRequest, NextApiResponse } from "next";
import { MemService } from "../../service/mem.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const memService = new MemService();

    const memInfo = await memService.getMemInfo();

    res.status(200).json({
      memInfo: memInfo,
    });
  }
}
