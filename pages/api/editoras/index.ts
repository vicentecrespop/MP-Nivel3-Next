import ControleEditora from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";
import { json } from "stream/consumers";

const controleEditora = new ControleEditora()

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        try {
            const editoras = controleEditora.getEditoras()
            return res.status(200).json({editoras})
        } catch(e) {
            return res.status(500)
        }
    } else {
        return res.status(405)
    }
    
}

export { controleEditora }