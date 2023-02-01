import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import userDataCollection from "../util/getUserData";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import React from 'react';
import Dresses from "../pages/dresses"


export default function Header(profileName) {
  const [categoriesList, setcategoriesList] = useState([]);
  const [avatar, setavatar] = useState("");
  const categoryformation = async ({ profileName }) => {
    const defaultCategories = ["Shirts", "Dresses", "Tops", "Unisex"];
    if (profileName) {
      const userData = await userDataCollection.getUserData(profileName);

      if (userData.length > 0) {
        setcategoriesList(userData[0].preference.categories);
        setavatar(
          <div>
            <Image
              className={styles.customContent}
              src={userData[0].preference.avatar}
              width="300"
              height="300"
            />
          </div>
        );
      }
    } else {
      setcategoriesList(defaultCategories);
    }
  };

  categoryformation(profileName);

  return (
    <div className={styles.description}>
      Get Personal
      <div>Welcome {profileName.profileName}</div>
      <div className={styles.nav}>
        <Link href="/">HOME</Link>
        {categoriesList.map((category) => {
          return <Link href={category}>{category.toUpperCase()}
          </Link>;
        })}
      </div>
    </div>
  );
}

Header.propTypes = {
  profileName: PropTypes.string,
};


const Link = ({ children, href }) => {
  const router = useRouter();
  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
    </a>
  );
};
