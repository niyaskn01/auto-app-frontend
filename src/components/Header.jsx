import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSearch } from '../context/search';
import axios from 'axios';

function Header() {
  
  const [search, setSearch] = useSearch();
  const navigate=useNavigate()
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios(`http://localhost:5000/search-auto/${search.keyword}`);
      setSearch((prevSearch) => ({ ...prevSearch, results: data }));
      console.log(data);
      navigate('/search')
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    console.log('Updated Search State:', search);
  }, [search]);
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary p-3 gap-4">
      <NavLink className="nav-link text-dark link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link text-dark link" to="/create-auto">
        Create
      </NavLink>
      <form className="d-flex">
        <input
          type="search"
          placeholder="search by location"
          className="form-control me-2"
          onChange={(e) => setSearch({ ...search, keyword: e.target.value })}
        />
        <button onClick={handleClick} className="btn btn-outline-success">
          Search
        </button>
      </form>
    </nav>
  );
}

export default Header;
