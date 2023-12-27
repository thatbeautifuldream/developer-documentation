import type { NextApiRequest, NextApiResponse } from "next";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { v4 as uuidv4 } from "uuid";
import rateLimit from "../../utils/rate-limit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await limiter.check(res, 3, "CACHE_TOKEN"); // 10 requests per minute
    const { prompt } = req.body;
    const model = new ChatGoogleGenerativeAI({
      modelName: "gemini-pro",
      maxOutputTokens: 2048,
    });
    const response = await model.invoke([["human", prompt]]);
    res.status(200).json({
      id: uuidv4(),
      response,
    });
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}
