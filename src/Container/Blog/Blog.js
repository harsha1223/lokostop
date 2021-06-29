import React, { Component } from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Header/Header'
import './Blog.css'
import { Link } from 'react-router-dom'
import AddBlog from './AddBlog'
import Header01 from '../Component/Header/Header01'


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
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link><Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link><Link style={{ textDecoration: 'none' }} to="blogIndividual"><div className="blogcard">
                        <div className="imagebox">
                            <p className="blogpara">Preview</p>
                            <img className='image_blog' src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="RELOAD" />
                        </div>
                        <p className="blogHeading">Heading of the article - 15 size, maximum in 2 lines like this.</p>
                        <div className="name_time">
                            <p>by Mohit Gopal</p>
                            <p>5 mins</p>
                        </div>
                    </div>
                    </Link>

                </div>
                <button className="load_more_blogs">Load more</button>
                <Footer />
            </div>
        )
    }
}

export default Blog
