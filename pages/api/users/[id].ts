import { NextApiRequest, NextApiResponse } from 'next';
import users from "../data/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.status(200).json(users[Number(id)]);
}
