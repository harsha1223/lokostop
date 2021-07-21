import React, { Component } from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import './Blog.css'
import { Link } from 'react-router-dom'
import AddBlog from './AddBlog'
import Header01 from '../Component/Header/Header01'
import SingleBlog from './SingleBlog'


export class Blog extends Component {
    render() {
        return (
            <div>
                <Header01 />
                <Header />
                <div className="find_by_category_box">
                    <p className="most_viewd_text"> BLOGS</p>
                    <hr id="line_blogs"></hr>
                </div>
                <AddBlog></AddBlog>
                <div className="blog_main">
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                        <SingleBlog/>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                        <SingleBlog/>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual">
                        <SingleBlog/>
                    </Link>
                    

                </div>
                <button className="load_more_blogs">Load more</button>
                <Footer />
            </div>
        )
    }
}

export default Blog
