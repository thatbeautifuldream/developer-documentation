import type { NextApiRequest, NextApiResponse } from "next";
import rateLimit from "../../../utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await limiter.check(res, 5, "CACHE_TOKEN");
    const { url } = req.body;
    const urlResponse = await fetch(url);
    const response = await urlResponse.text();
    res.status(200).json({
      response,
    });
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}
