import Image from "next/image";
import styles from "../../styles/products.module.css";
import Layout from "@/components/layout";
import { useState } from "react";

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_URL}/products`);
  const data = await response.json();

  const paths = data.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(`${process.env.API_URL}/products/${id}`);
  const data = await response.json();
  const formatData = () => {
    return {
      ...data,
      imageUrl: `${process.env.CLOUDINARY_BASE_URL}/v1680120548/GuitarLA/${data.url}.jpg`,
    };
  };
  return {
    props: { product: formatData() },
  };
};

// export const getServerSideProps = async ({ query: { id } }) => {
//   const response = await fetch(`${process.env.API_URL}/products/${id}`);
//   const data = await response.json();
//   const formatData = () => {
//     return {
//       ...data,
//       imageUrl: `${process.env.CLOUDINARY_BASE_URL}/v1680120548/GuitarLA/${data.url}.jpg`,
//     };
//   };
//   return {
//     props: { product: formatData() },
//   };
// };

const ProductDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const { id, description, price, title, imageUrl } = product;

  const handleChange = (e) => {
    const selectedQuantity = +e.target.value;
    setQuantity(selectedQuantity);

    // if (!selectedQuantity)
    //   setMessage({
    //     state: true,
    //     text: "Selecciona una cantidad",
    //     type: "error",
    //   });
    // else setMessage({ ...message, state: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quantity) return alert("Seleccione una cantidad");
    const selectedProduct = {
      id,
      title,
      imageUrl,
      quantity,
      price,
    };
    addToCart(selectedProduct);
    //setMessage({ state: true, text: "Añadido al carrito", type: "success" });
  };

  return (
    <Layout title={`Guitarra ${title}`}>
      <div className={styles.product}>
        <Image
          src={imageUrl}
          width={600}
          height={400}
          alt={`imagen guitarra ${title}`}
        />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="cantidad">Cantidad</label>
            <select name="cantidad" id="cantidad" onChange={handleChange}>
              <option value="">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
