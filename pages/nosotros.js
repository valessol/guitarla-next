import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, GuitarLA, tienda de música"
    >
      <main>
        <h2 className="heading">Nosotros</h2>
        <div className={styles.content}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
