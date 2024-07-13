import styles from "./Pie.module.css";
import logo from "../../assets/img/logo_black.png";

const Pie = () => {
  return (
    <>
      <footer className={styles.pie}>
        <img src={logo} alt="logo alura" />
      </footer>
    </>
  );
};

export default Pie;
