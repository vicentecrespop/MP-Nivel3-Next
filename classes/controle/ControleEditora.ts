import Editora from "../modelo/Editora";

let editoras: Array<Editora> = [{codEditora: 1, nome: 'Alta Books'}, {codEditora: 2, nome: 'Pearson'}, {codEditora: 3, nome: 'Addison Wesley'}]

class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras
    }

    getNomeEditora(codEditora: number): string {
        const editora: Editora = editoras.filter(pessoa => pessoa.codEditora === codEditora)[0]
        return editora.nome
    }
}

export default ControleEditora