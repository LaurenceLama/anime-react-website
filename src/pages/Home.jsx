import "../styles/index.css";
import images from "../assets/images.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [loading, setLoading] = useState();

  // how to make search bar function by typing anime, and after pressing enter, routes to /animelist page
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.toLowerCase() === "anime") {
      setLoading(true);
      setTimeout(() => {
        navigate("/animelist");
      }, 2000);
    }
    else {
      setLoading(true)
      setTimeout(() => {
        navigate("/error");
      }, 2000);
    }
  };

  return (
    <>
      <section id="background">
        <main id="nav__bar" className="transition">
          <nav>
            <button
              className="nav__logo--wrapper"
              onClick={() => navigate("/")}
            >
              <img src={images} alt="fan" id="nav__logo" />
              <h1>Akneemei</h1>
            </button>
            <div className="header__search-bar--wrapper">
              <form
                className="search-bar--input transition"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  value={query}
                  onChange={handleChange}
                  placeholder="Type 'anime' here"
                  className="search--bar transition"
                />
                <button className="search__btn" type="submit">
                  {!loading ? (
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
                    ) : (
                      <FontAwesomeIcon icon={faFan} size="xl" spin spinReverse />
                  )}
                </button>
              </form>
            </div>
          </nav>
        </main>
      </section>
    </>
  );
}

export default Home;
