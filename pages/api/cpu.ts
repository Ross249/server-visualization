import type { NextApiRequest, NextApiResponse } from "next";
import { CpuService } from "../../service/cpu.service";
import SERVER_CONFIG from "../../server.config";

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
    const loadAvgTime1m = await cpuService.getCpuLoadAvgTime(
      SERVER_CONFIG.cpu.loadAvg1M
    );
    const loadAvgTime5m = await cpuService.getCpuLoadAvgTime(
      SERVER_CONFIG.cpu.loadAvg5M
    );
    const loadAvgTime15m = await cpuService.getCpuLoadAvgTime(
      SERVER_CONFIG.cpu.loadAvg15M
    );

    res.status(200).json({
      count: count / 2,
      usage: usage,
      free: free,
      model: model,
      loadAvg: loadAvg,
      loadAvgTime1m: loadAvgTime1m,
      loadAvgTime5m: loadAvgTime5m,
      loadAvgTime15m: loadAvgTime15m,
    });
  }
}
