import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
export default function GenericHeader() {
  return (
    <div className={styles.description}>
      Get Personal
    <div className={styles.nav}>
      <Link href='/'>HOME</Link>
      <Link href="/shirts/">SHIRTS</Link>
      <Link href="/dresses">DRESSES</Link>
      <Link href="/tops">TOPS</Link>
      <Link href="/unisex">UNISEX</Link>
    </div>
    </div>
  )
}

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
