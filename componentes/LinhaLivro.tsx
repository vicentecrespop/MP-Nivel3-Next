import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livros";

const controleEditora = new ControleEditora()

interface LinhaLivroProps {
    livro: Livro,
    excluir(): void 
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const codEditora = props.livro.codEditora
    const nomeEditora = controleEditora.getNomeEditora(codEditora)

    return (
        <tr>
            <td className="d-flex flex-column">
                <span>{props.livro.titulo}</span>
                <button className="bg-danger text-white border-0">Excluir</button>
            </td>
            <td>{props.livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                {props.livro.autores.map(autor => <li key={autor}>{autor}</li>)}
                </ul>
            </td>
        </tr>
    )
}