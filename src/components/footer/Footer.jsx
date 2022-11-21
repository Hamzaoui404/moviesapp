import React from 'react';

import { Link } from 'react-router-dom';
import './footer.css'
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">World Movies</Link>
                    </div>
                    <div className="Footer_link_container">
                    <div className='Footer_list'>
                        <a href="">Recent Watch</a>
                        <a href="">FAQ</a>
                        <a href="">Help Center</a>
                       <a href="">Privacy</a>
                       
                    </div>
                    <div className='Footer_list'>
                        <a href="">Terms of Use</a>
                        <a href="">Contact Us</a>
                        <a href="">Media Center</a>
                       <a href="">Ways to Watch</a>
                       
                    </div>
                    <div className='Footer_list'>
                        <a href="">Cookie Preferences</a>
                        <a href="">Legal Notices</a>
                       
                    </div>
                    <div className="container">
	<div className="container__item">
		<form className="form">
			<input type="email" className="form__field" placeholder="Your E-Mail Address" />
			<button type="button" className="btn btn--primary btn--inside uppercase">Send</button>
		</form>
	</div>

                    </div>
                </div>
                </div>
            </div>
            </div>
    );
}

export default Footer;
