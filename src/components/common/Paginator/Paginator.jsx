import React, {useState} from "react";
import styles from "./Paginator.module.css";


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let [portionNumber, setPortionNumber] = useState(1);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {setPortionNumber(portionNumber-1)}}>Prev</button> }
        {pages
            .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((page,index) => {
            return <span key={index} className={currentPage === page && styles.selecedPage}
                         onClick={(e) => {
                             onPageChanged(page)
                         }}
            >{page}</span>
        })}
        {portionCount > portionNumber &&
        <button onClick={() => {setPortionNumber(portionNumber+1)}}>Next</button>}
    </div>
}

export default Paginator;