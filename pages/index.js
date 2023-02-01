import Link from "next/link";
import Image from "next/image";
import summerMW from "../public/images/summer-mw.jpg";
import summerWW from "../public/images/summer-ww.jpg";
import generalWW from "../public/images/general-ww.jpeg";
import generalMW from "../public/images/general-mw.jpg";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import userDataCollection from "../util/getUserData";

const hpGenericcontent = () => {
  return (
    <div className={styles.genericContent}>
      <p>
        Our collection of men’s has all the styles you need. Our polos come in a
        range of colours and stripes, whether you love knitted styles or classic
        long-sleeved versions
        <Link href="/shirts">
        <Image src={summerMW} alt="Summer Mens Wear" width="500" height="500" />
        </Link>
      </p>
      <p>
        Our women’s collection is brimming with everyday basics alongside
        dressier items. Go for classic stripes or florals to achieve effortless
        style, and materials like pure cotton for unbeatable comfort and
        softness.
        <Link href="/dresses">
        <Image
          src={summerWW}
          alt="Summer Womens Wear"
          width="500"
          height="500"
        />
        </Link>
      </p>
    </div>
  );
};

const setDefaultGenericcontent = () => {
  return (
    <div className={styles.genericContent}>
      <p>
      Our collection of men’s tops has all the styles you need. Our polos come in a range of colours and stripes, whether you love knitted styles or classic long-sleeved versions. Our tops come in classic cotton for everyday wear and are perfect for casual downtime.
      
      <Link href="/shirts">
        <Image src={generalMW} alt="Summer Mens Wear" width="500" height="500" />
        </Link>
      </p>
      <p>
      Stay cool and chic while working up a sweat in our women's sportswear. Our range of supportive leggings and tops will keep you comfortable during exercise, and our track jackets and joggers make a great pre- or post-gym cover-up.
      <Link href="/dresses">
        <Image
          src={generalWW}
          alt="Summer Womens Wear"
          width="500"
          height="500"
        />
        </Link>
      </p>
    </div>
  );
};

const Index = () => {
  const [profileName, setprofileName] = useState("");
  const [hpContent, sethpContent] = useState("");
  const [avatar, setavatar] = useState("");

  const onChange = async (event) => {
    setprofileName("");
    sethpContent("");
    setavatar("");
    const userName = event.target.value;
    const userProfileData = await userDataCollection.getUserData(userName);
    if (userProfileData.length > 0) {
      sethpContent(userProfileData[0].preference.hpContent);
      setprofileName(userName);
      setavatar(
        <div>
          <Image
            className={styles.customContent}
            src={userProfileData[0].preference.avatar}
            width="300"
            height="300"
          />
        </div>
      );
    } else {
      sethpContent(hpGenericcontent());
      setprofileName(userName);
    }
  };

  return (
    <div className={styles.description}>
      Get Personal
      <div className={styles.homepage}>
        <input
          className={styles.textfield}
          onChange={onChange}
          type="text"
          name="username"
          placeholder="Type your profile name"
          value={profileName}
        /> 
        <div className={styles.customContent}>
          <p>
            Go to your profile {" "}
            <Link href={{
              pathname: '/mypreference',
              query: { profileName },
            }}>{profileName}</Link>
          </p>
          <p>
            Go to your site {" "}
            <Link href={profileName} className="button">
              {profileName}
            </Link>
          </p>
        </div>
        <div> <p>{hpContent} </p>
        <p>{avatar}</p> </div>
        <div>{setDefaultGenericcontent()}</div>
      </div>
    </div>
  );
};

export default Index;
