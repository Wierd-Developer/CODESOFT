import React from "react";
import { useSearch } from "../../context/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import "../Style/SearchInput.scss";
const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/emart/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {}
  };
  return (
    <div className="Search-input m-auto ">
      <form className="d-flex my-2 " onSubmit={handleSearch}>
        <button type="submit">
          <IoIosSearch color="rgba(0, 0, 0, 0.434)" fontSize={"30px"} />
        </button>
        <input
          style={{
            borderRadius: "5px",
            fontFamily: "sans-serif",
            fontSize: "16px",
            fontWeight: "100",
            color: "rgb(83, 82, 82)",
            maxWidth: "85%",
          }}
          type="search"
          value={values.keyword}
          placeholder="Search on Shopper"
          aria-label="Search"
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
      </form>
    </div>
  );
};

export default SearchInput;
