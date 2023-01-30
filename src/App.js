import React, { useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import "./App.css";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

export const App = () => {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((robots) => {
        setRobots(robots);
		setFilteredRobots(robots)
      });
  }, []);

  const handleSearchChange = (e) => {
	setSearchField(e.target.value)
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredRobots(filteredRobots);
  };

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchField={searchField} searchChange={handleSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};