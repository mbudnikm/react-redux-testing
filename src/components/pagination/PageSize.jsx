import React, { Fragment } from 'react'

export const PageSize = ({ availableSizes, onChange }) => {
    return <>
        <span>Items per page: </span>
        { availableSizes.map((size, idx) => <Fragment key={size}>
            { !!idx && ' | ' }
            <span onClick={() => onChange(size)}>{ size }</span>
        </Fragment>)}
    </>
}