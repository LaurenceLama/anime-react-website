import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState(""); // State to store the selected sorting option

  useEffect(() => {
    fetchDataFromAPI(); // Function to fetch data from the API and store it in 'data' state
  }, []);

  const fetchDataFromAPI = () => {
    // Use fetch or Axios to fetch data from the API
    // Example: fetch('your_api_endpoint').then((response) => response.json())
    // Once you have the data, store it in the 'data' state using setData
    // setData(yourFetchedData);
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortBy(selectedOption);
  };

  const dynamicSort = (property) => {
    return function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    };
  };

  // Apply sorting when 'sortBy' state changes
  useEffect(() => {
    if (sortBy) {
      const sortedData = [...data].sort(dynamicSort(sortBy));
      setData(sortedData);
    }
  }, [sortBy]);

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">-- Sort By --</option>
        <option value="name">Name</option>
        <option value="age">Age</option>
        {/* Add more options based on the properties you want to sort by */}
      </select>

      {/* Display your sorted data here */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{/* Render item details here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
