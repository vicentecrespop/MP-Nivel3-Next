import ControleLivros from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

const controleLivros = new ControleLivros()

export default (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const livros = controleLivros.obterLivros()
        return res.status(200).json({livros})
    } else if(req.method === 'POST') {
        const livro = req.body
        // Ver se livro está no formato correto
        try {
            controleLivros.incluir(livro)
            return res.status(200).json({msg: 'Livro adicionado com sucesso!'})
        } catch(e) {
            return res.status(500)
        }
    } else {
        return res.status(405)
    }
}

export { controleLivros }