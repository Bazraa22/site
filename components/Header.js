import styles from '../styles/Home.module.css';
import Logo from '../icon/logo';
// import about from '..pages/about';
import Link from 'next/link';
function Header() {
  return (
    <div>
      <div className={styles.ela}>
        <Logo />
        <h1>Elias</h1>
      </div>
      <div className={styles.hoid}>
        <h1>#Home</h1>
        <h1>#Work</h1>
        <Link href="/about">#About-me</Link>
        <h2>#Contacts</h2>
      </div>
    </div>
  );
}

export default Header;
