import React, { Fragment } from "react";
import news from "../../../../assets/news.png";
import blog from "../../../../assets/blog.png";
import "./footer.scss";

export default () => (
  <>
    <div className="footer">
      <div className="newsletter">
        Sign up to our newsletter for the latest news and exclusive deals
        <button type="button" className="button black-button">
          SIGN UP
        </button>
      </div>
      <div className="more-about">
        <div className="pages">
            <div>
                <h6 className="primary-header">Pages</h6>
                Zero6 World<br/>
                About Us<br/>
                Collections
            </div>
            <div>
                <h6 className="primary-header">My Account</h6>
                Login<br/>
                Register
            </div>
        </div>
        <div className="subscriptions">
          <div className="tile">
            <img src={blog} alt="blog" />
            <div className="name">BLOG</div>
          </div>
          <div className="tile">
            <img src={news} alt="blog" />
            <div className="name">NEWSLETTER</div>
          </div>
        </div>
      </div>
      <div className="socials">
        Terms and conditions Terms of use Privacy Policy Cookie Policy
      </div>
    </div>
  </>
);
