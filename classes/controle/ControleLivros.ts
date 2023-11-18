import Livro from "../modelo/Livros";

let livros: Array<Livro> = [
    {codigo: 1, codEditora: 1, titulo: 'Use a cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', autores: ['Bert Bates', 'Kathy Sierra']}, 
    {codigo: 2, codEditora: 2, titulo: 'Java: como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', autores: ['Paul Deitel', 'Harvey Deitel']},
    {codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient', resumo: 'Readers familiar with Hostmanns original, two-volume Core Java books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.', autores: ['Cay Horstmann']},
]

class ControleLivros {

    obterLivros(): Livro[] {
        return livros
    }

    // Fazer função incluir
    incluir(item: Livro) {
        const size = livros.length - 1
        const newCodigo = livros[size]['codigo'] + 1
        item.codigo = newCodigo
        livros.push(item)
        // console.log(livros)
    }

    excluir(codigo: number) {
        const index = livros.findIndex((item) => item.codigo === codigo)
        livros.splice(index, 1)
        return 
    }
}

export default ControleLivros

