import React from 'react';
export default Article;

function Article(props) {
    return <article class="col-third">
    <img src="/article_1.jpg" alt=""/>
    <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <button>Read More</button>
    </div>
</article>
}