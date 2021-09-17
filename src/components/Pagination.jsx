import React from 'react';
import { Button } from 'react-bootstrap';

// Seperate component because of long code, and possibility to reuse

const Pagination = ({ page, setPage, data, isLoading }) => {
    return ( 
        <div className="row justify-content-center mt-4 mt-lg-5 mb-3 mx-4">
            {/* onClick subracts current page with '1' until current page is '1', and disabled makes button unclickable if current page is '1' or when loading data */}
            <Button 
                variant="dark"
                className="col-2 col-md-1 fs-3 pb-2"
                onClick={() => setPage(currentPage => Math.max(currentPage -1, 1))}
                disabled={page === 1 || isLoading}
            >-</Button> 
            <p className="col-3 col-sm-2 col-lg-1 my-2 fs-2 text-info text-center">{page}</p>
            {/* onClick checks if current page is less than the data's total amount of pages and adds '1' until it is, and disabled makes button unclickable if current page is equal to the data's total amount of pages or when loading data */}
            <Button
                variant="dark"
                className="col-2 col-md-1 fs-3 pb-2"
                onClick={() => {
                    if (page < data?.total_pages) {
                        setPage(currentPage => currentPage + 1)
                    }
                }}
                disabled={page === data?.total_pages || isLoading}
            >+</Button> 
        </div>
    );
}
 
export default Pagination;