import { useState } from "react";
import styles from "./GerenciarProdutos.module.css";

export function GerenciarProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    titulo: "",
    preco: "",
    descricao: "",
    thumbnail: ""
  });

  const handleChange = (e) => {
    setNovoProduto({ ...novoProduto, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
  e.preventDefault();
  setProdutos([...produtos, { ...novoProduto, id: Date.now() }]);
  setNovoProduto({ titulo: "", preco: "", descricao: "", thumbnail: "" });
  };

  return (
    <div className={styles.gerenciarContainer}>
      <h2>Gerenciar Produtos</h2>

      {/* Formulário de Inserção */}
      <form onSubmit={handleAdd}>
        <input
          name="titulo"
          placeholder="Título"
          value={novoProduto.titulo}
          onChange={handleChange}
          required
        />
        <input
          name="preco"
          type="number"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleChange}
          required
        />
        <input
          name="descricao"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={handleChange}
          required
        />
        <input
          name="thumbnail"
          placeholder="URL da Imagem"
          value={novoProduto.thumbnail}
          onChange={handleChange}
        />
        <button type="submit">Adicionar Produto</button>
      </form>

      {/* Lista de Produtos com opções de editar/remover */}
      <ul>
        {produtos.map((p) => (
          <li key={p.id}>
            <img src={p.thumbnail} alt={p.titulo} width={50} />
            <strong>{p.titulo}</strong> - R$ {p.preco}
            {/* Botões de editar/remover apenas ilustrativos */}
            <button onClick={() => alert('Editar não implementado')}>Editar</button>
            <button onClick={() => setProdutos(produtos.filter(prod => prod.id !== p.id))}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}