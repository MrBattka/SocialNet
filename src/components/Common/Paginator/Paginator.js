import React, { useEffect, useState } from "react"
import classes from "./Paginator.module.css";
import ReactPaginate from "react-paginate";

const Paginator = ({ pagesCount={pagesCount}, totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 15 }) => {
    const [portionNumber, setPortionNumber] = useState(1)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    
    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage])

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.numberPage}>
            <div className={classes.wrapperPrev}> {portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>} </div>
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div
                        onClick={(e) => { onPageChanged(p) }} className={classes.wrapperPage} key={p.id}>
                        <button className={currentPage === p ? classes.selectedPage : ""}><a href="#top">{p}</a></button></div>
                })
            }
            <button className={classes.portion} onClick={() => setPortionNumber(portionNumber + 1)}>next</button>
        </div >
    )
}

const ReactPaginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    return (
        <>
            <Paginator pagesCount={pagesCount} totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChanged={onPageChanged}
                pageRangeDisplayed={20}
                pagesCount={pagesCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default ReactPaginator