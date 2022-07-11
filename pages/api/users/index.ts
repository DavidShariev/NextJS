import { NextApiResponse, NextApiRequest } from 'next';
import users from "../data/users";

type RespnoseData = any;

export default function handler(req: NextApiRequest, res: NextApiResponse<RespnoseData>) {
  res.status(200).json(users);
}

// req.cookies- Объект, содержащий файлы cookie, отправленные по запросу. По умолчанию{}
// req.query- Объект, содержащий строку запроса . По умолчанию{}
// req.body- Объект, содержащий тело, проанализированное с помощью content-type, или nullесли тело не было отправлено