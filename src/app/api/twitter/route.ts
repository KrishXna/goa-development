var Twitter = require("twitter");
import { NextApiRequest, NextApiResponse } from "next";

const client = new Twitter({
  consumer_key: process.env.API_Key,
  consumer_secret: process.env.API_Key_Secret,
  access_token_key: process.env.Access_Token,
  access_token_secret: process.env.Access_Token_Secret,
});

const getClientResponse = (endpoint: string, params: any) => {
  return new Promise<any>((resolve, reject) => {
    client.get(endpoint, params, (error: string, tweets: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(tweets);
      }
    });
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const params = { screen_name: "narendramodi" };
  try {
    const tweets = await getClientResponse("statuses/user_timeline", params);
    res.status(200).json(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
