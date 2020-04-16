
export const SignUp = () => {
    return (
        <div className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-htmlForm">
                        <h2 className="htmlForm-title">Sign up</h2>
                        <form method="POST" className="register-htmlForm" id="register-htmlForm">
                            <div className="htmlForm-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="htmlForm-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="htmlForm-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="htmlForm-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="htmlForm-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="htmlForm-group htmlForm-button">
                                <input type="submit" name="signup" id="signup" className="htmlForm-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <img src="images/signup-image.jpg" alt="sing up image">
                        <a href="#" className="signup-image-link">I am already member</a>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}