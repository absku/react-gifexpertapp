import React from 'react';

export const GifGridItem = ( { title, images } ) => {
    return (
        <>
            <div className="card animate__animated animate__fadeIn">
                <img src={ images } alt={ title }/>
                <p> { title } </p>
            </div>
        </>
    )
}
