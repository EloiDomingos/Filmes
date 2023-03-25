import './header.css';


function Header(){
    return(
        <header>
            <a href='/' className='logo'>BD Filmes</a>
            <a href='/favoritos' className='favoritos'>Meus Filmes</a>
        </header>
    )
}

export default Header;