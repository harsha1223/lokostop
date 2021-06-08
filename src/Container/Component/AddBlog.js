import React from 'react'
import { Button, Form, Header, Icon, Modal } from "semantic-ui-react";
import {useState} from 'react'
import './Addblog.css'

function AddBlog() {
    const [open, setOpen] = useState(false)
    return (
        
        <Modal closeIcon onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open} 
        trigger={<button className="add_blog">+ ADD A BLOG (Review any product of any brand)</button>}>
            <p className='Heading_add_blog'>BLOG SECTION</p>
            <div className="button_box_blog">
                <button className='cancelBlog'>Cancel Blog</button>
                <button className='shareblog'>Share blog</button>
            </div>
        </Modal>
    )
}

export default AddBlog
