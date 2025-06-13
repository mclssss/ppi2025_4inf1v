import styles from './Main.module.css';

const texts = [
  { id: 0, title: 'My Text 0', image: 'https://picsum.photos/300/200?random=0' },
  { id: 1, title: 'My Text 1', image: 'https://picsum.photos/300/200?random=1' },
  { id: 2, title: 'My Text 2', image: 'https://picsum.photos/300/200?random=2' },
  { id: 3, title: 'My Text 3', image: 'https://picsum.photos/300/200?random=3' },
  { id: 4, title: 'My Text 4', image: 'https://picsum.photos/300/200?random=4' },
];

export default function Main() {
  return (
    <main className={styles.main}>
      {texts.map((item) => (
        <div className={styles.card} key={item.id}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      ))}
    </main>
  );
}
