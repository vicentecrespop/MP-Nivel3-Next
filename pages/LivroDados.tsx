import type { NextPage } from "next";
import React, { useState } from 'react';
import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livros";
import { useRouter } from "next/router";
import { Menu } from "@/componentes/Menu";

const controleEditora = new ControleEditora()


const baseURL = 'http://localhost:3000/api/livros'

const LivroDados: NextPage = () => {

    const router = useRouter()
    const opcoes = controleEditora.getEditoras()
    const [titulo, setTitulo] = useState('')
    const [resumo, setResumo] = useState('')
    const [autores, setAutores] = useState('')
    const [codEditora, setCodEditora] = useState(0)

    const incluirLivro = async (livro: Livro) => {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        })
        return response.json()
    }

    const tratarCombo = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(e.target.value))
    }

    const incluir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const livro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split(),
            codEditora
        }

        incluirLivro(livro)
        router.push('/LivroLista')
    }

    return (
        <div>
            <Menu />
            <main className="container">
                <h1 className="my-4">Livro Dados</h1>
                <form onSubmit={e => incluir(e)}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input className="form-control" type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea className="form-control" value={resumo} onChange={e => setResumo(e.target.value)} rows={3} ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select className="form-select" onChange={e => tratarCombo(e)}>
                        {opcoes.map(opcao => <option key={opcao.codEditora} value={opcao.codEditora}>{opcao.nome}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores {`(1 por linha)`}</label>
                    <textarea className="form-control" value={autores} onChange={e => setAutores(e.target.value)} rows={3} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
            </main>
        </div>
    )
}

export default LivroDados