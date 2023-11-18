import Link from "next/link"

export const Menu: React.FC = () => {
    return (
        <nav className='bg-dark p-3 w-100'>
          <Link className='text-white text-decoration-none p-3' href='/'>Home</Link>
          <Link className='text-white text-decoration-none p-3' href='LivroLista'>Catálogo</Link>
          <Link className='text-white text-decoration-none p-3' href='LivroDados'>Novo</Link>
        </nav>
    )
}