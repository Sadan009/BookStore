import { useEffect, useState } from "react";

export default function AuthorList() {
  let [authorRecords, setAuthorRecords] = useState([]);
  const url = "http://localhost:8081/api/Author/all";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((authors) => {
        console.log(authors);
        setAuthorRecords(authors);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-10">
          <h1>Authors</h1>
        </div>
        <div className="col-md-2 text-end">
          <i className="bi bi-plus-circle h1  text-success"></i>
        </div>
      </div>

      <hr />
    </div>
  );
}
