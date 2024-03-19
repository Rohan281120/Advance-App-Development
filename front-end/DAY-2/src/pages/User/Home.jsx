import "../../assets/css/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'
import jobhome from "../../assets/images/4165382.jpg"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-container">
      <nav>
        <div className="nav__logo"><Link to="#">Job Finder</Link></div>
        <ul className="nav__links">
          <li className="link"><Link to="/#">Home</Link></li>
          <li className="link"><Link to="/jobcategory">Job Listing</Link></li>
          <li className="link"><Link to="/aboutus">About Us</Link></li>
          <li className="link"><Link to="/company">Companies</Link></li>
          <li className="link"><Link to="/contact">Contact</Link></li>
          <li className="link"><Link to="/login" className="nav__btn">Login</Link></li>
          <li className="link"><Link to="/signup" className="nav__btn">SignUp</Link></li>
        </ul>
      </nav>
      <section className="container">
        <div className="content__container">
          <h1>     
            <span className="heading__1">Best Job Seeker Platform</span><br />
            <span className="heading__2">in The World</span>
          </h1>
          <p>
          Join us on our mission to revolutionize the job-seeking experience and unlock the full potential of every individual. With our innovative online job application platform, the future of career advancement is within reach.
          </p>
          <div className="apply-btn">
            <Link to="/jobcategory"><button className="btn btn-primary">Apply a Job</button></Link>
          </div>
        </div>
        <div className="image__container">
          <img src={jobhome} alt="header" />
        </div>
      </section>
        
    </div>

  );
}

export default Home;