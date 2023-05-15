import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <Layout title="Página no encontrada">
      <p className="error">Página no encontrada</p>
      <Link href="/" className="error-link">
        Volver al inicio
      </Link>
    </Layout>
  );
};

export default ErrorPage;
