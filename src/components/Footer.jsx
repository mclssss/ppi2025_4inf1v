import styles from './Footer.module.css';
import { Instagram, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>IFRN - Campus Macau</p>
        <p>Curso Técnico em Informática</p>
        <p>Programação para Internet 2025</p>
      </div>
      <p className={styles.prof}>Maria Clara Silva de Souza</p>
      <div className={styles.icons}>
        <a href="https://www.instagram.com/claraasousas_?igsh=M2N3NWc5M2FvZ3Vy&utm_source=qr"><Instagram /></a>
        <a href="https://github.com/mclssss"><Github /></a>
         <a href="https://workspace.google.com/intl/pt-BR/gmail/"><Mail /></a>
      </div>
    </footer>
  );
}
