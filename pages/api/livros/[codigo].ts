import { NextApiRequest, NextApiResponse } from "next";
import { controleLivros } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'DELETE') {
        const codigo = req.query.codigo
        try {
            controleLivros.excluir(Number(codigo))
            return res.status(200).json({msg: 'Livro excluido com sucesso!'})
        } catch(e) {
            return res.status(500)
        }
    } else {
        return res.status(405)
    }
}