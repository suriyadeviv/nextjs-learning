import DndLayout from "../layout/dndLayout";
import PropTypes from "prop-types";
import styles from "../styles/UserProfile.module.css";
const allCategories = ["dresses", "shirts", "tops", "unisex"];
const allSizes = ["S", "M", "L", "XL", "XXL"];
import users from "../public/data/users.json";
import { useRouter } from "next/router";
import GenericHeader from "../components/GenericHeader";
import { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap"

export default function UserProfile() {
  const router = useRouter();
  const { profileName } = router.query;
  console.log("name is", profileName);
  const userData = users.users.filter((user) => user.name === profileName);
  console.log('userData is ', userData[0]);
  const {
    gender,
    preference: { categories, size },
  } = userData[0];

  const userCategories = {
    items: allCategories.filter((c) => !categories.includes(c)),
    selected: categories,
  };
  const userSizes = {
    items: allSizes.filter((s) => !size.includes(s)),
    selected: size,
  };

  const [preference, setPreference] = useState({
    selectedGender: gender,
    categories,
    size,
  });
  const { selectedGender } = preference;

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setPreference((prevState) => ({
      ...prevState,
      selectedGender: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Gender: ${selectedGender}`);
  };

  return (
    <div className={styles.preferrence}>
      <GenericHeader />
      <p>Preferences for: {profileName} </p>
      <form onSubmit={handleSubmit}>
        <h4>Gender you identify yourself as:</h4>
        <Row>
          <Form.Group className={styles.gender} controlId="chkGender">
            <Form.Check
              value="Male"
              type="radio"
              label="Male (he/him)"
              checked={selectedGender === "Male"}
              onChange={handleChange}
            />
            <Form.Check
              value="Female"
              type="radio"
              label="Female (she/her)"
              checked={selectedGender === "Female"}
              onChange={handleChange}
            />
            <Form.Check
              value="Both"
              type="radio"
              label="Netural (they/them)"
              checked={selectedGender === "Both"}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <p>Favourite Categories:</p>
        <DndLayout
          id={"categories"}
          items={userCategories.items}
          selected={userCategories.selected}
          className={styles.categories}
        />
        <p>Favourite Sizes:</p>
        <DndLayout
          id={"sizes"}
          items={userSizes.items}
          selected={userSizes.selected}
          className={styles.sizes}
        />
      </form>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string,
};
