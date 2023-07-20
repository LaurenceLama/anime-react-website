function Home() {

  
  return (
    <section id="background">
      <main id="nav__bar" class="transition">
        <nav>
          <a href="#" class="nav__logo--wrapper">
            <img src="./some things/images.jpg" alt="" id="nav__logo" />
            <h1>Akneemei</h1>
          </a>
          <div class="header__search-bar--wrapper">
            <form class="search-bar--input transition">
              <input
                type="search"
                placeholder="Browse them akneemeis!"
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
      </main>
    </section>
  );
}

export default Home
