import "../styles/list.css";
import images from "../assets/images.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

function List() {
  const navigate = useNavigate();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState();
  const [sort, setSort] = useState("");

  
    const handleSortChange = (event) => {
      const selectedOption = event.target.value;
      setSort(selectedOption);
    };
    
  async function fetchAnime() {
    setLoading(true);
    const { data } = await axios.get("https://api.jikan.moe/v4/anime");
    // console.log(data.data);
    setAnimes(data.data);
    setLoading(false);
  }

  const dynamicSort = (rank) => {
    return function (a, b) {
      if (a[rank] < b[rank]) {
        return -1;
      }
      if (a[rank] > b[rank]) {
        return 1;
      }
      return 0;
    };
  };

  // Apply sorting when 'sort' state changes
  useEffect(() => {
    if (sort) {
      const sortedData = animes.sort(dynamicSort(sort));
      setAnimes(sortedData);
    }
  }, [sort]);

  // If ya want longer one
  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoading(true)
  //     )})
  //   }, 2000)

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <>
      <div className="gray__landing-page">
        <section id="nav__bar">
          <nav className="list__nav">
            <button onClick={() => navigate("/")} className="nav__logo--anchor">
              <img src={images} alt="" id="nav__logo" />
              <h1 className="nav__title">Akneemei</h1>
            </button>
            <div className="header__search-bar--wrapper">
              <form className="search-bar--input">
                <input
                  type="text"
                  placeholder="Search to your desires, have fun bingin!"
                  className="transition"
                />
                <button className="search__btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </nav>
        </section>
        <section id="sort__results">
          <div className="row">
            <div className="sort__result--banner">
              <div className="result__title--wrapper">
                <h2 className="search__result--title">Anime List:</h2>
                <div className="sort__filter--wrapper">
                  <h2 className="sort__result--title">Sort Anime:</h2>
                  <select
                    id="sort"
                    className="transition"
                    defaultValue={"sort"}
                    onChange={handleSortChange}
                  >
                    <option value="sort" disabled>
                      sort
                    </option>
                    <option value="score">Low to high scores</option>
                    <option value="episode">Most episodes</option>
                    <option value="rank">Ranking</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="search__result--banner">
              <div className="container">
                <div className="wrapper">
                  {!loading
                    ? animes.map((anime) => (
                        <div className="another-wrapper" key={anime.rank}>
                          <div
                            className="content__img--wrapper transition"
                            onClick={() =>
                              navigate(`/animelist/${anime.mal_id}`)
                            }
                          >
                            <img
                              src={anime.images.jpg.image_url}
                              alt="rawr"
                              className="content__img"
                            />
                            <div className="content">
                              <h2 className="content__title transition">
                                {anime.title}
                              </h2>
                              <div className="content__ranking">
                                Rank: {anime.rank}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : new Array(3).fill(0).map((element, index) => (
                        <button className="another-wrapper" key={index}>
                          <div className="content__img--wrapper transition">
                            <div className="content__img--skeleton"></div>
                            <div className="content">
                              <div className="content__title--skeleton"></div>
                              <div className="content__ranking--skeleton"></div>
                            </div>
                          </div>
                        </button>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default List;
