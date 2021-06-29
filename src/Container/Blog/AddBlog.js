import './Addblog.css'
import React, { Component } from 'react'

export class AddBlog extends Component {
    render() {
        return (
            <div>
            <button style={{outline:'none'}} type="button" class="btn add_blog" data-bs-toggle="modal" data-bs-target="#exampleModal">
            + ADD A BLOG (Review any product of any brand)
            </button>

            <div style={{background:' rgb(0,0,0,0.7)'}} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div style={{marginTop: '34%'}}class="modal-content">
                        <div style={{borderBottom:'none'}} class="modal-header">
                            <h5 class="Heading_add_blog" id="exampleModalLabel">BLOG SECTION</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                        </div>
                        <div style={{borderTop:'none' , margin:'auto'}}  class="modal-footer">
                            <button type="button" class="btn cancelBlog" data-bs-dismiss="modal">Cancel Blog</button>
                            <button type="button" class="btn shareblog">Share blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AddBlog
