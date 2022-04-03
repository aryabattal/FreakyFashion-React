import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const SearchResultPage = () => {
  let [urlSearchParams] = useSearchParams();

  const q = urlSearchParams.get("q");

  const [searchResult, setSearchResult] = useState(null);

// Make a call to api/search?q
  useEffect(() => {
    fetch(`http://localhost:5000/api/search?q=${q}`)
      .then((resp) => resp.json())
      .then((result) => setSearchResult(result));
  }, [q]);

  return (
    searchResult && (
      <div className="search-result">
        <div>
          {searchResult.count} träffar på "{q}"
        </div>

        {searchResult.result.map((x) => (

          <Link to={`/products/${x.urlSlug}`}>
               <div class="search-container">
              <div>
              <img src={x.imageUrl} alt="product" />
              </div>
              <div className="name-and-description">
            <span className="title">{x.name}</span>
            <br />
            <p className="short-description">
              {x.description}
            </p>
            <p> {x.price} kr</p>
            </div>
            </div>
          </Link>

        ))}
      </div>
    )
  );
};

export default SearchResultPage;