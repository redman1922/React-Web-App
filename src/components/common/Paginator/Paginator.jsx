import React, {useState} from "react";
import s from "./Paginator.module.css";


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

    return <div className={s.paginationPosition}>
        {portionNumber > 1 &&
        <button className={s.paginationButton} onClick={() => {setPortionNumber(portionNumber-1)}}>{`<`}</button> }
        {pages
            .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((page,index) => {
            return <span key={index} className={currentPage === page ? s.selecedPage : s.paginationSpan}
                         onClick={(e) => {
                             onPageChanged(page)
                         }}
            >{page}</span>
        })}
        {portionCount > portionNumber &&
        <button className={s.paginationButton} onClick={() => {setPortionNumber(portionNumber+1)}}>{`>`}</button>}
    </div>
}

export default Paginator;