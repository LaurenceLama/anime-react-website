import "../styles/list.css";
import images from "../assets/images.jpg";


function List() {
  return (
    <div className="list__landing-page">
      <section id="nav__bar">
        <nav className="list__nav">
          <a href="/index.html" class="nav__logo--anchor">
            <img src={images} alt="" id="nav__logo" />
            <h1 className="nav__title">Akneemei</h1>
          </a>
          <div class="header__search-bar--wrapper">
            <form class="search-bar--input">
              <input
                type="text"
                placeholder="Search to your desires, have fun bingin!"
                class="transition"
              />
              <button class="search__btn">
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
        <div class="row">
          <div class="sort__result--banner">
            <div class="result__title--wrapper">
              <h2 class="search__result--title">Anime List:</h2>
              <div class="sort__filter--wrapper">
                <h2 class="sort__result--title">Sort Anime:</h2>
                <select
                  id="sort"
                  class="transition"
                  onchange="sortAnime(event)"
                >
                  <option value="" disabled selected>
                    sort
                  </option>
                  <option value="alphabetical">Low to high scores</option>
                  <option value="non-alphabetical">Most episodes</option>
                  <option value="Rank">Ranking</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default List;
