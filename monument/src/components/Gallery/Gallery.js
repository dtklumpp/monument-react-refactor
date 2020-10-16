import React from 'react';
export default Gallery;

function Gallery() {
    return <section id="gallery">
    <div class="wrap">
        <h2>Issue Twenty</h2>
        <h3>A visual guide to the Southwest</h3>
        <div class="masonry">
            <img src="/gallery_1.jpg" alt=""/>
            <img src="/gallery_3.jpg" alt=""/>
            <img src="/gallery_4.jpg" alt=""/>
            <img src="/gallery_2.jpg" alt=""/>
            <img src="/gallery_5.jpg" alt=""/>
            <img src="/gallery_6.jpg" alt=""/>
        </div>
    </div>
</section>
}