import React, {Fragment} from "react";
import f from '../../../../assets/fly-bg.jpg';

export default () =>(
    <>
    <div className="footer">
        <div className="pages">
            Collections
        </div>
        <div className="more-about">
            <div>
                <img src={f} alt="blog"/>
                <h3>BLOG</h3>
            </div>
            <div>
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