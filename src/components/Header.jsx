import styles from './Header.module.css';
import { Clock } from 'lucide-react';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <Clock size={40} />
        <h1>Foco, Força e Fé</h1>
      </div>
    </header>
  );
}
