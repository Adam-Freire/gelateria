import { Link } from 'react-router-dom'
import './style.css';


export default function Topo() {
    return (
    <header className='topo'>
        <div className='limitar-secao box-topo'>
            <img src="./assets/logo.png" title="logo" alt="Logo Galeteria" />
            <nav className='box-topo-conteudo'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/Sabores'>Sabores</Link>
                <Link className='link' to='/Sobre'>Sobre</Link>
            </nav>
        </div>  
    </header>
    )
}