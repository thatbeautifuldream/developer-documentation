import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const origin = req.headers.origin;
  console.log({ origin });
  const { prompt } = req.body;
  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
  });
  const response = await model.invoke([["human", prompt]]);
  res.status(200).json({ response });
}
