import React, {Fragment} from "react";
import f from '../../../../assets/fly-bg.jpg';
import './footer.scss';

export default () =>(
    <>
    <div className="footer">
        <div className="pages">
            Collections
        </div>
        <div className="more-about">
            <div className="tile">
                <img src={f} alt="blog"/>
                <h3>BLOG</h3>
            </div>
            <div className="tile">
                <img src={f} alt="blog"/>
                <h3>NEWSLETTER</h3>
            </div>
        </div>
        <div className="socials">
            Terms and conditions
            Terms of use
            Privacy Policy
            Cookie Policy
        </div>
  </div>
    </>
);