import Layout from "@/components/layout";
import Post from "@/components/post";
import styles from "../styles/grid.module.css";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_URL}/blog`);
  const data = await response.json();

  const formatData = () => {
    return data.map((d) => ({
      ...d,
      imageUrl: `${process.env.CLOUDINARY_BASE_URL}/v1680120548/GuitarLA/${d.url}.jpg`,
    }));
  };
  return {
    props: { posts: formatData() },
  };
};

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <Layout
      title="Blog"
      description="Blog de música, venta de guitarras, consejos, GuitarLA"
    >
      <main className="container">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {posts?.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
