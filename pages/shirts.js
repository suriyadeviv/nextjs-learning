import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
import PropTypes from "prop-types";
import getApiResult from '../util/getApiResults'
import GenericHeader from "../components/GenericHeader";

const Shirts = ({ productsList }) => {
  return (
  <div className={styles.container}>
    <Head className="justify-content-center">
      <title>Products Listing</title>
      <meta name="description" content="Products Listing of Shirts" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GenericHeader />
    <div className={styles.heading}>
    <h1>Products Listing of Shirts</h1>
    </div>
    <Layout productsList={productsList} />
    <footer className={styles.footer}>
      <a>This is learning project</a>
    </footer>
  </div>
);
  }
Shirts.propTypes = {
  productsList: PropTypes.array
};

export const getStaticProps = async() => {
  const value = await getApiResult('men_shirts');
  return {
    props: {
      productsList: value.products,
    },
  };
};

export default Shirts;
