import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import { formatDate } from "@/utils/helpers";

const Post = ({ data }) => {
  const { id, content, timestamp, title, imageUrl } = data;

  return (
    <article>
      <Image
        className="imagen"
        src={imageUrl}
        width={600}
        height={400}
        alt={`imagen blog ${title}`}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(timestamp)}</p>
        <p className={styles.resume}>{content}</p>

        <Link className={styles.link} href={`/blog/${id}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
