import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>See our most frequent posts</h2>
      <form className={styles.search_form}>
        <input
          type="text"
          placeholder="or search for tags...."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.btn_search}>Search</button>
      </form>
      <div>
        <h2>Posts</h2>
        {posts && posts.length === 0 && (
          <div className={styles.nopost}>
            <p>No posts found</p>
            <Link to="/posts/create" className="btn">
              Create a new post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
