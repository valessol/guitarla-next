import Layout from "@/components/layout";
import { formatDate } from "@/utils/helpers";
import Image from "next/image";
import styles from "../../styles/blog.module.css";

export const getServerSideProps = async ({ query: { id } }) => {
  const response = await fetch(`${process.env.API_URL}/blog/${id}`);
  const data = await response.json();
  const formatData = () => {
    return {
      ...data,
      imageUrl: `${process.env.CLOUDINARY_BASE_URL}/v1680120548/GuitarLA/${data.url}.jpg`,
    };
  };
  return {
    props: { post: formatData() },
  };
};

const PostDetail = ({ post }) => {
  const { content, timestamp, title, imageUrl } = post;
  return (
    <Layout title={title}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imageUrl}
          width={1000}
          height={400}
          alt={`imagen blog ${title}`}
        />
        <div className={styles.content}>
          <h3>{title}</h3>
          <p className={styles.date}>{formatDate(timestamp)}</p>
          <p className={styles.text}>{content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default PostDetail;
