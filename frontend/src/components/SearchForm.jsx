import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchForm.css";

function SearchForm({ onSearch, loading }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword.trim()) {
      alert("Please enter a keyword.");
      return;
    }

    onSearch(keyword);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search buyers (e.g. Singing Bowl Importers USA)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="search-btn"
      >
        {loading ? (
          <>
            <span className="loader"></span>
            Searching...
          </>
        ) : (
          <>
            <FaSearch />
            Search
          </>
        )}
      </button>

    </form>
  );
}

export default SearchForm;