(function () {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const navButton = document.querySelector(".mobile-nav-toggle");
  const nav = document.querySelector(".primary-navigation");
  const searchInput = document.querySelector("#site-search");
  const resultsBox = document.querySelector("#search-results");

  const savedTheme = localStorage.getItem("cyphermita-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.dataset.theme = "light";
  }

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      const next = root.dataset.theme === "light" ? "dark" : "light";
      root.dataset.theme = next;
      localStorage.setItem("cyphermita-theme", next);
    });
  }

  if (navButton && nav) {
    navButton.addEventListener("click", function () {
      const open = navButton.getAttribute("aria-expanded") !== "true";
      navButton.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
  }

  if (searchInput && resultsBox) {
    let searchIndex = [];
    let loaded = false;

    fetch(document.body.dataset.searchUrl)
      .then((response) => response.ok ? response.json() : [])
      .then((data) => { searchIndex = data; loaded = true; })
      .catch(() => { loaded = true; });

    function closeResults() {
      resultsBox.hidden = true;
      resultsBox.innerHTML = "";
    }

    function renderResults(query) {
      const normalized = query.trim().toLowerCase();
      if (!normalized || !loaded) {
        closeResults();
        return;
      }

      const matches = searchIndex
        .map((page) => {
          const title = (page.title || "").toLowerCase();
          const content = (page.content || "").toLowerCase();
          const score = (title.includes(normalized) ? 3 : 0) + (content.includes(normalized) ? 1 : 0);
          return { ...page, score };
        })
        .filter((page) => page.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);

      resultsBox.innerHTML = "";
      if (!matches.length) {
        const empty = document.createElement("p");
        empty.className = "search-empty";
        empty.textContent = "No matching pages found.";
        resultsBox.appendChild(empty);
      } else {
        matches.forEach((page) => {
          const link = document.createElement("a");
          link.className = "search-result";
          link.href = page.url;
          const title = document.createElement("strong");
          title.textContent = page.title;
          const excerpt = document.createElement("span");
          const index = (page.content || "").toLowerCase().indexOf(normalized);
          excerpt.textContent = index >= 0
            ? page.content.slice(Math.max(0, index - 45), index + 100).trim()
            : "Open this page";
          link.append(title, excerpt);
          resultsBox.appendChild(link);
        });
      }
      resultsBox.hidden = false;
    }

    searchInput.addEventListener("input", () => renderResults(searchInput.value));
    searchInput.addEventListener("focus", () => renderResults(searchInput.value));
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-box")) closeResults();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        event.preventDefault();
        searchInput.focus();
      }
      if (event.key === "Escape") {
        closeResults();
        searchInput.blur();
      }
    });
  }
})();
