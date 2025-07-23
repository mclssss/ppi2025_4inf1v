import styles from "./Product.module.css";

export function Product({ product, addToCart }) {
  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2 className={styles.productTitle}>{product.title}</h2>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className={styles.productButton}
      >
        ADICIONAR
      </button>
    </div>
  );
}