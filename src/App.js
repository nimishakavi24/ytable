import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  const sortData = (sortBy) => {
    if (sortBy === "date") {
      let sortedData = data.sort((a, b) => {
        if (new Date(a.date) === new Date(b.date)) {
          return b.views - a.views;
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      });
      setData([...sortedData]); // Create a new array to trigger a re-render
    } else if (sortBy === "views") { // Corrected to "views"
      let sortedData = data.sort((a, b) => {
        if (a.views === b.views) {
          return new Date(a.date) - new Date(b.date);
        } else {
          return b.views - a.views;
        }
      });
      setData([...sortedData]); // Create a new array to trigger a re-render
    }
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => {
          sortData("date");
        }}>Sort by Date</button>
        <button onClick={() => {
          sortData("views");
        }}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 && data.map((e, index) => (
            <tr key={index}>
              <td>{e.date}</td>
              <td>{e.views}</td>
              <td>{e.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;