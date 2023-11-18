import { Menu } from '@/componentes/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Menu />
      <main className='container text-center'>
        <h1 className='my-5'>Página Inicial</h1>
      </main>
    </div>
  )
}
