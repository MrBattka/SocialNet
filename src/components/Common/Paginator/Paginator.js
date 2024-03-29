import React, { useEffect, useState } from "react";
import classes from "./Paginator.module.css";

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    const [portionNumber, setPortionNumber] = useState(1)

    let pages = []
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    
    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage])

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const selectedNextPortion = () => {
        setPortionNumber(portionNumber - 1)
        onPageChanged(currentPage + 10)
    }

    const selectedPrevPortion = () => {
        setPortionNumber(portionNumber + 1)
        onPageChanged(currentPage - 10)
    }

    return (
        <div className={classes.numberPage}>
            <div className={classes.wrapperPrev}> {portionNumber > 1 &&
                <button className={classes.portion} onClick={selectedPrevPortion}><a href="#top">prev</a></button>} </div>
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, id) => {
                    return <div
                        onClick={() => { onPageChanged(p) }} className={classes.wrapperPage} key={id}>
                        <button className={currentPage === p ? classes.selectedPage : ""}><a href="#top">{p}</a></button></div>
                })
            }
            {pagesCount > 14 &&
                <button className={classes.portion} onClick={selectedNextPortion}><a href="#top">next</a></button>}
        </div >
    )
}

export default Paginator