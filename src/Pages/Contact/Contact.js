import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="400" id='contact-me'>
            <h2>Contact Me</h2>
            <form className='p-5' target="_blank" action="https://formsubmit.co/tuhinkhandakar99@gmail.com" method="POST">
                <div className='row pt-5 mx-auto'>
                    <div className='col-8 form-group mx-auto p-2'>
                        <input type='text' className='form-control' placeholder='Name' name='name' />
                    </div>
                    <div className='col-8 form-group mx-auto p-2'>
                        <input type='email' className='form-control' placeholder='Email' name='email' />
                    </div>
                    <div className='col-8 form-group mx-auto p-2'>
                        <input type='text' className='form-control' placeholder='Subject' name='subject' />
                    </div>
                    <div className='col-8 form-group mx-auto p-2'>
                        <input type='text' className='form-control' placeholder='Message' name='message' />
                    </div>
                    <div className='col-8 form-group mx-auto p-2'>
                        <input type='submit' className='btn btn-info' value='send message' />
                    </div>
                </div>
            </form>
            <div className='bg p-5'>
                <Link to={{ pathname: "https://github.com/MDTaiyaburRahmanTuhin" }} target="_blank" ><i className="fab fa-github-square p-2 bg" /></Link>
                <Link to={{ pathname: "https://mail.google.com/mail/u/0/#inbox" }} target="_blank" ><i class="fas fa-envelope-open-text p-2 bg"></i></Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/md-taiyabur-rahman-tuhin-2505b921a/" }} target="_blank" ><i class="fab fa-linkedin p-2 bg"></i></Link>
                <Link to={{ pathname: "https://www.facebook.com/profile.php?id=100069380872447" }} target="_blank" ><i class="fab fa-facebook p-2 bg"></i></Link>
            </div>
        </div>
    );
};

export default Contact;