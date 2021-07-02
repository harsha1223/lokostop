import React, { Component } from 'react'

export class ComplaintPop extends Component {
    render() {
        return (
            <div>
            <button style={{outline:'none'}} type="button" class="btn complaintbutton" data-bs-toggle="modal" data-bs-target="#exampleModal">
            WRITE COMPLAINT
            </button>

            <div style={{background:' rgb(0,0,0,0.7)'}} class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div style={{marginTop: '34%'}}class="modal-content">
                        <div style={{borderBottom:'none'}} class="modal-header">
                            <h5 class="Heading_add_blog" id="exampleModalLabel">COMPLAINT SECTION</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                        </div>
                        <div style={{borderTop:'none' , margin:'auto'}}  class="modal-footer">
                            <button type="button" class="btn cancelBlog" data-bs-dismiss="modal">Cancel Complaint</button>
                            <button type="button" class="btn shareblog">Share Complaint</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ComplaintPop
