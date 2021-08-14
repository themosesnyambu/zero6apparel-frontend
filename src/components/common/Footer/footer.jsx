import React from "react";
import news from "../../../../assets/news.png";
import blog from "../../../../assets/blog.png";
import instagram from "../../../../assets/icons/instagram1.png";
import copyright from "../../../../assets/icons/copyright1.png";
import "./footer.scss";

export default () => (
  <>
    <div className="footer">
      <div className="newsletter">
        Sign up to our newsletter for the latest news and exclusive deals
        <button type="button" className="button black-button rounded">
          SIGN UP
        </button>
      </div>
      <div className="more-about">
        <div className="pages">
          <div>
            <div className="primary-header">PAGES</div>
            Zero6 World
            <br />
            About Us
            <br />
            Collections
          </div>
          <div>
            <div className="primary-header">MY ACCOUNT</div>
            Login
            <br />
            Register
          </div>
        </div>
        <div className="subscriptions">
          <div className="primary-header">MORE ABOUT ZERO6 APPAREL</div>
          <div className="tiles">
            <div className="tile">
              <img src={blog} alt="blog" />
              <div className="name">BLOG</div>
            </div>
            <div className="tile">
              <img src={news} alt="blog" />
              <div className="name">NEWSLETTER</div>
            </div>
          </div>
          <div className="socials">
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>

      <hr />
      <div className="legals">
        <div>
          <span>
            <img src={copyright} alt="" /> 2021 | Zero6 Apparel | All rights reserved
          </span>
        </div>
        <div>
          Terms and Conditions | Terms of Use | Privacy Policy | Cookie Policy
        </div>
      </div>
    </div>
  </>
);
