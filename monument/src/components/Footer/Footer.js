import React from 'react';
export default Footer;

function Footer(props) {
    return <footer>
    <div class="wrap">
        <div class="social-links">
            <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <input type="text" placeholder="Email Address"/>
        <button type="submit">{props.action}</button>
    </div>

    <p class="copyright">&copy;2016 Sarah Holden</p>
</footer>
}
