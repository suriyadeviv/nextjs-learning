import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
import PropTypes from "prop-types";
import getApiResult from '../util/getApiResults'
import GenericHeader from "../components/GenericHeader";

const Home = ({ productsList }) => (
  <div className={styles.container}> 
    <Head className="justify-content-center">
      <title>Products Listing of Unisex</title>
      <meta name="description" content="Products Listing of Dresses" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GenericHeader />
    <div className={styles.heading}>
    <h1>Products Listing of Dresses</h1>
    </div>
    <Layout productsList={productsList} />
    <footer className={styles.footer}>
      <a>This is learning project</a>
    </footer>
  </div>
);

Home.propTypes = {
  productsList: PropTypes.object,
};

export const getStaticProps = async () => {
  const dress = await getApiResult('women_dresses');
  const top = await getApiResult('women_tops');
  const shirt = await getApiResult('men_shirts');
  const unisexProducts = [];
  dress.products.map(product => {
    product.sex === 'Both' ? unisexProducts.push(product) : ''
  });
  top.products.map(product => {
    product.sex === 'Both' ? unisexProducts.push(product) : ''
  });
  shirt.products.map(product => {
    product.sex === 'Both' ? unisexProducts.push(product) : ''
  });

  return {
    props: {
      productsList: unisexProducts,
    },
  };
};

export default Home;
