import Livro from "@/classes/modelo/Livros";
import type { NextPage } from "next";
import React from 'react';
import { useState, useEffect } from 'react';
import ControleLivros from "@/classes/controle/ControleLivros";
import Head from "next/head";
import { Menu } from "@/componentes/Menu";

const controleLivros = new ControleLivros()

const LivroLista: NextPage = () => { 

    const [livros, setLivros] = useState(Array<Livro>)
    const [carregado, setCarregado] = useState(false)

    useEffect(() => {
        // const data = controleLivros.obterLivros()
        // setLivros(data)
        obter()
        setCarregado(true)
    }, [])

    const baseURL = 'http://localhost:3000/api/livros'

    const excluir = (codigo: number) => {
        excluirLivro(codigo)
        setCarregado(false)
    }

    const obter = async () => {
        const response = await (await fetch(baseURL)).json()
        setLivros(response.livros)
        return 
    }

    const excluirLivro = async (codigo: number) => {
        try {
            await fetch(`${baseURL}/${codigo}`, {
                method: 'DELETE'
            })
            obter()
            return console.log('Livro Excluido com sucesso!')
        } catch(e) {
            return console.log(e)
        }
    }

    return (
        <div>
            <Menu />
            <main className="container">
                <h1 className="my-4">Lista de Livros</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="bg-dark text-white">Título</th>
                            <th className="bg-dark text-white">Resumo</th>
                            <th className="bg-dark text-white">Autores</th>
                            <th className="bg-dark text-white">Editora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                            <>
                                <tr key={livro.codigo}>
                                    <td>
                                        {livro.titulo}
                                        <button className="bg-danger text-white border-0" onClick={() => excluir(livro.codigo)}>Excluir</button>
                                    </td>
                                    <td>{livro.resumo}</td>
                                    <td>
                                    {livro.autores.map(autor => <li key={autor}>{autor}</li>)}
                                    </td>
                                    <td>{livro.codEditora}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default LivroLista