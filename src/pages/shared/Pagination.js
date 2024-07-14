

export default function Pagination(Props) {

    let paginatedItems = [];
    let data = Props?.data;
    const pageSizeArr = [5, 10, 25, 50, 100, 200];
    if(data) {
        let befAfter = 3;

        // If total page are less than equal 8
        if (data?.totalPages <= befAfter * 2) {
            for(let i = 1; i <= data?.totalPages; i++) 
                paginatedItems.push(<li className={data.currentPage === i ? 'page-item active': 'page-item'}><a className="page-link" key={i} onClick={()=> handlePageChange(i)} >{i}</a></li>);
        } else {
            if (data?.currentPage <= befAfter) {
                for(let i = 1; i <= data?.currentPage; i++) 
                    paginatedItems.push(<li className={data.currentPage === i ? 'page-item active': 'page-item'} onClick={()=> handlePageChange(i)}><a className="page-link" key={i}>{i}</a></li>);
            } else {
                
                 // Add First
                 paginatedItems.push(<li className="page-item"><a className="page-link" onClick={()=> handlePageChange(1)}>First</a></li>);
                 // Add ...
                 paginatedItems.push(<li className="page-item"><a className="page-link" onClick={()=> handlePageChange(data?.currentPage - befAfter -1)}>...</a></li>);
                 for(let i = data?.currentPage - befAfter; i <= data?.currentPage; i++) 
                    paginatedItems.push(<li className={data.currentPage === i ? 'page-item active': 'page-item'} onClick={()=> handlePageChange(i)}><a className="page-link" key={i}>{i}</a></li>);
            }
            
            // After current page
            if (data?.currentPage + befAfter < data?.totalPages){
                for(let i = data?.currentPage + 1; i <= data?.currentPage + befAfter; i++) 
                    paginatedItems.push(<li className={data.currentPage === i ? 'page-item active': 'page-item'} onClick={()=> handlePageChange(i)}><a className="page-link" key={i}>{i}</a></li>);
                // Add ...
                paginatedItems.push(<li className="page-item"><a className="page-link" onClick={()=> handlePageChange(data?.currentPage + 1 + befAfter)}>...</a></li>);
                 // Add Last
                 paginatedItems.push(<li className="page-item"><a className="page-link" onClick={()=> handlePageChange(data?.totalPages)}>Last</a></li>);
            } else {
                for(let i = data?.currentPage + 1; i <= data?.totalPages; i++) 
                    paginatedItems.push(<li className={data.currentPage === i ? 'page-item active': 'page-item'} onClick={()=> handlePageChange(i)}><a className="page-link" key={i}>{i}</a></li>);
            }


        }
    }

    const handlePageChange = (pageNumber) => {
        Props.onPageChange(pageNumber);
    }

    const handlePageSizeChange = (event) => {
        Props.onSizeChange(event.target.value);
    }

      
    return (
        <nav>
            <div className="row">
                <div className="col-md-4 flex-items">
                    Page {data?.currentPage} of {data?.totalPages}.

                    <select value={data?.pageSize} className="form-select page-size" onChange={handlePageSizeChange}>
                        {
                            pageSizeArr.map(item =><option value={item} key={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div className="col-md-8">
                    <ul className="pagination justify-content-end" >{paginatedItems}</ul>
                </div>
            </div>
        </nav>
    )
}