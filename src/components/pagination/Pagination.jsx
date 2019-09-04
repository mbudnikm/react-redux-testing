import React from 'react';

const range = (max) => [...Array(max)].map((__, idx) => idx + 1)

export const Pagination = ({ currentPage, pageCount, displayArrows, onChange }) => {

    const pageNumbers = range(5)
        .map(p => p - 3 + currentPage)
        .filter(p => p >= 1 && p <= pageCount)

    const onChangeHandler = (page) => {
        if (currentPage !== page) {
            onChange(page)
        }
    }

    return (
        <div>
            { displayArrows && 
                <> 
                    <span className="page" disabled={currentPage === 1}> {"<<"}</span>
                    <span className="page" disabled={currentPage === 1}> &lt;</span>
                </>
            }
            
            { pageNumbers.map(n => {
                const classes = 'page' + ((n === currentPage) ? ' selected' : '')
                return <span className={classes} key={n} onClick={() => onChangeHandler(n)}>{n}</span>
            }
            )}

            { displayArrows && 
                <> 
                    <span className="page" disabled={currentPage === pageCount}> &gt;</span>
                    <span className="page" disabled={currentPage === pageCount}> {">>"}</span>
                </>
            }
        </div>
    )
}