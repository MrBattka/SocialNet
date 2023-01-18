import React, { useEffect, useState } from "react"
import ReactPaginate from "react-paginate";
import classes from "./Paginator.module.css";

let pages = []

const Items = ({ pages, onPageChanged }) => {
    return (
        <>
            {pages.map((p) => {
                return <div
                    onClick={(e) => { onPageChanged(p) }} className={classes.wrapperPage} key={p.id}>
                    <button className={currentPage === p ? classes.selectedPage : ""}><a href="#top">{p}</a></button></div>
            })}
        </>
    )
}

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 15 }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + totalUsersCount;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = pages.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(pages.length / totalUsersCount);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * totalUsersCount) % pages.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Paginator