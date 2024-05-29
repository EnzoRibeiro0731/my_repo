import logogit from '../../assets/github_icon.svg'
import logowpp from '../../assets/whatsapp_icon.svg'
import logolinkedin from '../../assets/linkedin_icon.svg'
import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.logos}>
            <img src={logogit} alt="" />
            <img src={logowpp} alt="" />
            <img src={logolinkedin} alt="" />
            
        </header>
    )
}