import axios from "axios";
import "../styles/post.css";
import images from "../assets/images.jpg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  async function fetchPost() {
    const { data } = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    setPosts(data.data);
  }
  // setLoading(false);

  useEffect(() => {
    fetchPost();
  }, []);

  // could not fetch after .images.jpg
  console.log(posts?.images?.jpg?.image_url);

  return (
    <div className="gray__landing-page">
      <section id="nav__bar" className="margin__cancel">
        <nav>
          <button onClick={() => navigate("/")} className="nav__logo--anchor">
            <img src={images} alt="" id="nav__logo" />
            <h1 className="nav__title">Akneemei</h1>
          </button>
          <button
            onClick={() => navigate("/animelist")}
            className="post__back transition"
          >
            <button className="post__back--text transition">
              <span className="arrow__hover--effect transition">←</span> Back
            </button>
          </button>
        </nav>
      </section>
      <section id="description">
        <div className="container">
          <div className="post">
            <div className="post__wrapper">
              <figure className="anime__post--wrapper">
                <img
                  src={posts.images?.jpg?.image_url} // when rendering jpg in this situation, it errors out. To remove error, protect with ternary operatings
                  alt="hmm"
                  id="anime__post--img"
                />
              </figure>
              <div className="post__title--details">
                <h1 className="post__title">{posts.title}</h1>
                <h2 className="post__episodes">Episodes: {posts.episodes}</h2>
                <h2 className="post__score">Score: {posts.score}</h2>
              </div>
            </div>
            <h3 className="post__synopsis">
              <span className="color-blue">Background story:</span>{" "}
              {posts.synopsis}
            </h3>
            <div
              className="post__back--phone transition"
              onClick={() => navigate("/animelist")}
            >
              <button className="post__back--text transition">
                <span className="arrow__hover--effect transition">←</span>{" "}
                <span className="blue transition">Back</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Post;
