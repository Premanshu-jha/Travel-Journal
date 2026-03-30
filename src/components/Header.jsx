
import './Header.css'
import globe from '../assets/Globe.svg';
export default function Header(){
    return (<header className="header">
            <nav className="headerNav">
                <img src={globe} alt='Globe' />
                <h1 className="headerFont">my travel journal.</h1>
            </nav>
        </header>)
}