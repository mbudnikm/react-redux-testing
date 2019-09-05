import React, { Fragment, memo, useState } from 'react'

export const PageSize = memo(({ availableSizes, onChange, initialSize }) => {
    const initialSelectedSize = initialSize || availableSizes[0];
    const [selectedSize, setSelectedSize] = useState(initialSelectedSize)

    return <span className="pagination">
        <span>Items per page: </span>
        { availableSizes.map((size, idx) => 
            <Fragment key={size}>
                { !!idx && ' | ' }
                <span 
                    data-test-type="page-size"
                    className={selectedSize === size ? 'selected' : ''} 
                    onClick={() => {
                        if(selectedSize !== size) {
                            onChange(size)
                            setSelectedSize(size)
                        }
                }}>{ size }</span>
            </Fragment>)}
    </span>
})