import React from "react"
import classes from "./Paginator.module.css";

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i > 20) {
            break
        } else {
            pages.push(i)
        }
    }
    return (
        <div className={classes.numberPage}>
            {pages.map(p => {
                return <div
                    onClick={(e) => { props.onPageChanged(p) }} key={p.id}>
                    <button className={props.currentPage === p ? classes.selectedPage : ""}><a href="#top">{p}</a></button></div>
            })}
        </div>
    )
}

export default Paginator