import Button from '../Button/Button.jsx'
import Search from '../Search/Search.jsx'
import Logo from '../Logo/Logo.jsx'
import styles from './Navbar.module.css'


export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <a href='/'>
                <Logo/>
            </a>
                <Search placeholder='Search a song of your choice'/>
                <Button>Give Feedback</Button>
        </nav>

    )
}