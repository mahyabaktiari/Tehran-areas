import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  data?: any;
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const jsonDirectory = path.join(process.cwd());
    //Read the json data file data.json
    const { data } = JSON.parse(
      await fs.readFile(jsonDirectory + "/data/tehran-areas.json", "utf8")
    );
    const { area } = req.query;
    let newListArea;
    //Data filter if there was a query
    if (area) {
      newListArea = data.filter((item: string) => {
        return item.includes(area as string);
      });
    }

    res.status(200).json({
      status: "success",
      data: area ? newListArea : data,
    });
  } catch (e) {
    res.status(400).json({ status: "error", data: e });
  }
}
