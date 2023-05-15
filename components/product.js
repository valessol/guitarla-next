import Image from "next/image";
import Link from "next/link";
import styles from "../styles/products.module.css";

const Product = ({ data }) => {
  const { id, description, price, title, imageUrl } = data;

  return (
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

        <Link className={styles.link} href={`/productos/${id}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Product;
