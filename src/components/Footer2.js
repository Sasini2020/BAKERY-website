import React from 'react';
import './Footer2.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer2() {
  return (
    <div className='footer2-container'>
      <section className='footer2-subscription'>
        <p className='footer2-subscription-heading'>
          Subscribe to Our Newsletter
        </p>
       
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email Address'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer2-links'>
        <div className='footer2-link-wrapper'>
          <div class='footer2-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer2-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Productions</Link>
            <Link to='/'>Help</Link>
          </div>
        </div>
        <div className='footer2-link-wrapper'>
          <div class='footer2-link-items'>
            <h2>Recipes</h2>
            <Link to='/'>Famous</Link>
            <Link to='/'>Amazing</Link>
            <Link to='/'>Tasty</Link>
            <Link to='/'>Delicious</Link>
          </div>
          <div class='footer2-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer2-logo'>
            <Link to='/' className='social-logo'>
              JOHN'S BAKERY <i class="fas fa-utensils"></i>
            </Link>
          </div>
          <small class='website-rights'>JOHN'S BAKERY<i class="fas fa-utensils"></i> &nbsp;© 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer2;