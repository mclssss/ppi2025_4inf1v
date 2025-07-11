import styles from "./Product.module.css";

export function Product({ product }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productPrice}>Price: ${product.price}</p>
      <p className={styles.productDescription}>{product.description}</p>
      <button className={styles.addToCartButton}>Adicionar ao carrinho</button>
    </div>
  );
}