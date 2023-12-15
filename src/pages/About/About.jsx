import { Link } from "react-router-dom";
import styles from "./About.module.css";
import { useAuthValue } from "../../context/AuthContext";

const About = () => {
  const { user } = useAuthValue();
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <p>
        This project consists of a blog made with React on the front-end and
        Firebase on the back-end.
      </p>
      {user && (
        <Link to="/register" className="btn-outline">
          New post
        </Link>
      )}
      {!user && (
        <Link to="/register" className="btn-outline">
          Create an account
        </Link>
      )}
    </div>
  );
};
export default About;
