// our-domain.com/new-product
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useCallback } from "react";
import NewProductForm from "../../components/products/NewProductForm";

function NewProductPage() {
  const router = useRouter();

  const addProductHandler = useCallback(
    async (e) => {
      const response = await fetch("/api/new-product", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      router.push("/");
    },
    [router]
  );

  return (
    <Fragment>
      <Head>
        <title>Add a New Product</title>
        <meta name="description" content="Shop Fresh Products Online" />
      </Head>
      <NewProductForm onAddProduct={addProductHandler} />
    </Fragment>
  );
}

export default NewProductPage;
