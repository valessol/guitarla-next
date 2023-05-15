import Layout from "@/components/layout";
import styles from "../styles/grid.module.css";
import Product from "@/components/product";
import Post from "@/components/post";
import Course from "@/components/course";

export const getStaticProps = async () => {
  const productsUrl = `${process.env.API_URL}/products`;
  const blogUrl = `${process.env.API_URL}/blog`;

  const [productsRes, postsRes] = await Promise.all([
    fetch(productsUrl),
    fetch(blogUrl),
  ]);

  const [products, posts] = await Promise.all([
    productsRes.json(),
    postsRes.json(),
  ]);

  const formatData = (data) => {
    return data.map((d) => ({
      ...d,
      imageUrl: `${process.env.CLOUDINARY_BASE_URL}/v1680120548/GuitarLA/${d.url}.jpg`,
    }));
  };

  const courseImageUrl = `${process.env.CLOUDINARY_BASE_URL}/v1680290026/GuitarLA/cursos_bg_phjenp.jpg`;

  return {
    props: {
      products: formatData(products),
      posts: formatData(posts),
      course: courseImageUrl,
    },
  };
};

export default function Home({ products, posts, course }) {
  return (
    <Layout
      title="Inicio"
      description="Blog de música, venta de guitarras y más"
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>
        <div className={styles.grid}>
          {products?.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </main>
      <Course imageUrl={course} />
      <section className="container">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
