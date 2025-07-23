import styles from "./Cart.module.css";

export function Cart({ cart, setCart }) {
  function updateQuantity(id, delta) {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max((item.quantity || 1) + delta, 1) }
          : item
      );
    });
  }

  function removeAll() {
    setCart([]);
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p className={styles.empty}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <button className={styles.removeAll} onClick={removeAll}>
            Remover todos os produtos
          </button>

          <ul className={styles.itemList}>
            {cart.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.thumbnail} alt={item.title} />
                <div className={styles.details}>
                  <h3>{item.title}</h3>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                  <div className={styles.quantityControls}>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.summary}>
            <p>Total: <strong>R$ {total.toFixed(2)}</strong></p>
            <div className={styles.buttons}>
              <button className={styles.continue}>CONTINUAR</button>
              <button className={styles.back}>VOLTAR</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}