import { useEffect, useState } from "react"
import Pagination from "../shared/Pagination";
import { Constants } from "../Constants";

export default function BookList() {

    let [books, setBooks] = useState('')
    let [errors, setErros] = useState({})
    let [criteria, setCriteria] = useState({
        search: "",
        page: 1,
        pageSize: 10
    });

    useEffect(() => {
        fetch(Constants.API_BASE_URL +'book/search?search='+ criteria.search + '&page=' + criteria.page+ '&pageSize=' + criteria.pageSize)
        .then(response =>  response.json())
        .then(data =>{
            console.log(data)
            setBooks(data);
        }).catch(err => {
            console.log('Catched:', err)
            setErros(err)
        });
    }, [criteria])

    const handlePageChange = (pageNumber) => {
        console.log('pageNumber:', pageNumber);
        setCriteria({...criteria, page: pageNumber });
    };

    const handlePageSizeChange = (num) => {
        console.log('pageSize:', num);
        setCriteria({...criteria, pageSize: num, page: 1});
    };

    const handleSeach = (event) => {
        console.log('Search:', event.target.value);
        setCriteria({...criteria, search: event.target.value, page: 1});
    }

    return (
        <div className="books">
            <div className="row">
                <div className="col-md-10">
                    <h1>Books</h1>
                </div>
                <div className="col-md-2 text-end">
                    <i className="bi bi-plus-circle h1  text-success"></i>
                </div>
            </div>
            
            <hr />
            {
                errors?.Message?.length > 0? 
                <div className="alert alert-danger">{errors?.Message}</div> : null
            }
            
            {/* Search */}
            <div className="input-group mb-3">
                <input type="text" value={criteria.search} className="form-control" placeholder="Search" onChange={handleSeach}  />
                <div className="input-group-append">
                    <span class="input-group-text" id="basic-addon2">
                        <i className="bi bi-search"></i> Search
                    </span>
                </div>
            </div>

            {/* Table */}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Pages</th>
                        <th>Published</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    books?.records?.map((book) => 
                       <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.price}</td>
                            <td>{book.rating}</td>
                            <td>{book.pages}</td>
                            <td>{book.pubDate}</td>
                            <td>
                                <i className="bi bi-pencil-square text-primary" ></i>
                                &nbsp;&nbsp;&nbsp;
                                <i className="bi bi-trash3 text-danger"></i>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <Pagination data={books} onPageChange={handlePageChange} onSizeChange={handlePageSizeChange} />
        </div>
    )
}
