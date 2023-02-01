import Link from "next/link";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import PropTypes from "prop-types";

export const getStaticProps = async () => {
  const value = await getApiResult();
  return {
    props: {
      productsList: value.response,
    },
  };
};

const Layout = ({ productsList }) => {
  return (
    <main className={styles.main}>
      <Row>
        {productsList.map((product, index) => {
          if (index < 3) {
            return (
              <Col className={styles.col} key={product.title}>
                <Link
                  href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                  as={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}`}
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      width="70%"
                      height="250px"
                      src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}?wid=190&qlt=80&fmt=pjpeg`}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>
                        <a
                          href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                        >
                          {product.title}
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
                <p>Price: {product.listPriceText}</p>
                <p>Rating : {product.averageRating}</p>
              </Col>
            );
          }
        })}
      </Row>
      <Row>
        {productsList.map((product, index) => {
          if (index >= 3 && index < 6) {
            return (
              <Col className={styles.col} key={product.title}>
                <Link
                  href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                  as={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}`}
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      width="70%"
                      height="250px"
                      src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}?wid=190&qlt=80&fmt=pjpeg`}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>
                        <a
                          href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                        >
                          {product.title}
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
                <p>Price: {product.listPriceText}</p>
                <p>Rating : {product.averageRating}</p>
              </Col>
            );
          }
        })}
      </Row>
      <Row>
        {productsList.map((product, index) => {
          if (index >= 6 && index < 9) {
            return (
              <Col className={styles.col} key={product.title}>
                <Link
                  href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                  as={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}`}
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      width="70%"
                      height="250px"
                      src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}?wid=190&qlt=80&fmt=pjpeg`}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>
                        <a
                          href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                        >
                          {product.title}
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
                <p>Price: {product.listPriceText}</p>
                <p>Rating : {product.averageRating}</p>
              </Col>
            );
          }
        })}
      </Row>
      <Row>
        {productsList.map((product, index) => {
          if (index >= 9 && index < 12) {
            return (
              <Col className={styles.col} key={product.title}>
                <Link
                  href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                  as={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}`}
                >
                  <Card className={styles.card}>
                    <Card.Img
                      variant="top"
                      width="70%"
                      height="250px"
                      src={`https://asset1.cxnmarksandspencer.com/is/image/mands/${product.modelViewImage}?wid=190&qlt=80&fmt=pjpeg`}
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>
                        <a
                          href={`https://www.marksandspencer.com${product.productSeoUrl}`}
                        >
                          {product.title}
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
                <p>Price: {product.listPriceText}</p>
                <p>Rating : {product.averageRating}</p>
              </Col>
            );
          }
        })}
      </Row>
    </main>
  );
};

Layout.propTypes = {
  productsList: PropTypes.array,
};

export default Layout;
