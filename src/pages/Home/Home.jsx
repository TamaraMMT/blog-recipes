import styles from "./Home.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import PostDetail from "../../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

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
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>No posts found</p>
            <Link to="/posts/create" className="btn">
              Create a new post
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};
export default Home;
