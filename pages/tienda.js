import Layout from "@/components/layout";
import Product from "@/components/product";
import styles from "../styles/grid.module.css";

// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:8080/api/products");
//   const data = await response.json();
//   return {
//     props: { products: data },
//   };
// };

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.API_URL}/products`);
  const data = await response.json();
  const formatData = () => {
    return data.map((d) => ({
      ...d,
      imageUrl: `${process.env.CLOUDINARY_BASE_URL}/v1680120548/GuitarLA/${d.url}.jpg`,
    }));
  };
  return {
    props: { products: formatData() },
  };
};

const Tienda = ({ products }) => {
  return (
    <Layout
      title="Tienda Virual"
      description="Tienda virtual, venta de guitarras, indtrumentos, GuitarLA"
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {products?.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;
