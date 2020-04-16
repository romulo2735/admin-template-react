import React from 'react';
import ReactBodyMovin from 'react-bodymovin'
import AnimationNotFound from './../../assets/animations/error-page-not-found.json'

const NotFound = () => {
    const bodyMovinOptions = {
        loop: true,
        autoplay:true,
        prerender: true,
        animationData: AnimationNotFound
    };

    return (
        <div>
            <ReactBodyMovin options={bodyMovinOptions} />
        </div>
    );
}

export default NotFound;