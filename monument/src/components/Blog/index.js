import React from 'react';

import './Blog.css';

import Navbar from '../Navbar/Navbar.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Comment from '../Comment/Comment.js';
import Sidebar from '../Sidebar/Sidebar.js';
import ArticleBig from '../ArticleBig/ArticleBig.js';

export default Blog;

function Blog() {
    return <div class="blog-page">
		<Header header="Monument" subheader="" link="index.html"/>
		<Navbar/>
		<div class="wrap grid-wrapper">
			<section>
				<ArticleBig/>
			</section>
			<Sidebar/>
		</div>
		<Comment/>
		<Footer action="Keep in Touch"/>
	</div>
}
