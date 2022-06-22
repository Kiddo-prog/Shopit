import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

import Header from '../components/Header';

export default function Home({ merchant, categories, products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopit - Your surest place to buy</title>
        <meta name="description" content="Shopit - Your surest place to buy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <React.Fragment>
      <Header />
      {/* <h1>{merchant.business_name}</h1>

        <h3>
          <Link href="/categories">
            <a>Categories</a>
          </Link>
        </h3>

        <CategoryList categories={categories} />

        <h3>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </h3> */}
        <ProductList products={products} />
    </React.Fragment>
    </div>
  )
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}
