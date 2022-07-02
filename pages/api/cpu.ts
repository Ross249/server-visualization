import type { NextApiRequest, NextApiResponse } from "next";
import { CpuService } from "../../service/cpu.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cpuService = new CpuService();

    const count = await cpuService.getCpuCount();
    const usage = await cpuService.getCpuUsage();
    const free = await cpuService.getCpuFree();
    const model = await cpuService.getCpuModel();
    const loadAvg = await cpuService.getCpuLoadAvg();
    //const loadAvgTime = await cpuService.getCpuLoadAvgTime("1m");

    res.status(200).json({
      count: count / 2,
      usage: usage,
      free: free,
      model: model,
      loadAvg: loadAvg,
      // loadAvgTime: loadAvgTime,
    });
  }
}
