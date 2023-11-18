import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const codEditora = req.query.codEditora
        try {
            const editora = controleEditora.getNomeEditora(Number(codEditora))
            return res.status(200).json({nome: editora})
        } catch(e) {
            return res.status(500)
        }
    } else {
        return res.status(405)
    }
}