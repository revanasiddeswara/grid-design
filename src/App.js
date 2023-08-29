import React from "react";
import "./Assignment2.css";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="menu-icon" id="menuIcon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="menu" id="menu">
          <li>
            <h4>EDYODA</h4>
            <p>Stories</p>
          </li>
          <li>
            <span id="dropdownText">
              Explore Categories
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                alt="downarrow"
              />
            </span>
          </li>
        </ul>
      </header>

      <nav>
        <h1>Trending Posts</h1>
        <p>
          <i className="fa fa-filter" style={{ fontSize: "24px" }}></i>Filter by
          Category
        </p>
        <ul>
          <a href="#">
            <li id="activeCategory">All</li>
          </a>
          <a href="#">
            <li>Artificial Intelligence</li>
          </a>
          <a href="#">
            <li>Cloud Computing</li>
          </a>
          <a href="#">
            <li>DevOps</li>
          </a>
          <a href="#">
            <li>Programming Languages</li>
          </a>
          <a href="#">
            <li>Mobile Application Development</li>
          </a>
          <a href="#">
            <li>Technology and Tools</li>
          </a>
          <a href="#">
            <li>Get a Job in a Tech Company</li>
          </a>
          <a href="#">
            <li>Others</li>
          </a>
        </ul>
      </nav>
      <main>
        <section>
          <a
            className="section-link"
            href="https://www.edyoda.com/stories/fresh-graduate-or-it-professional-looking-for-a-new-job-7-reasons-to-learn-python-now"
          >
            <div className="imgSection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
                alt="Story"
              />
            </div>
            <div className="textSection">
              <p className="title">
                Fresh Graduate or IT professional Looking for...
              </p>
              <div className="author">
                <i>Arman Ahmed</i>
                <span> | 05 Jul 2019</span>
              </div>
              <p className="discription">
                If you are a fresh graduate - or new to IT - looking for the
                next job, you need to read this. The last couple of years
                zekeLabs gave me a unique ...
              </p>
            </div>
          </a>
        </section>
        <section>
          <a
            className="section-link"
            href="https://www.edyoda.com/stories/introducing-you-all-to-edyoda-wwwedyodacom"
          >
            <div className="imgSection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
                alt="Story"
              />
            </div>
            <div className="textSection">
              <p className="title">
                Introducing you all to <br />
                EdYoda -...
              </p>
              <div className="author">
                <i>Arman Ahmed</i>
                <span> | 05 Jul 2019</span>
              </div>
              <p className="discription">
                Really ecstatic and immensely proud to introduce you all to our{" "}
                <br />
                latest attempt of adding value and making an impact to the world
                we are a part of....
              </p>
            </div>
          </a>
        </section>
        <section>
          <a
            className="section-link"
            href="https://www.edyoda.com/stories/from-identity-crisis-to-the-success-story-the-devops-revolution"
          >
            <div className="imgSection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
                alt="Story"
              />
            </div>
            <div className="textSection">
              <p className="title">
                Typical day of Data Scientist - An insider...
              </p>
              <div className="author">
                <i>Kalyan Mahalingam</i>
                <span> | 05 Jul 2019</span>
              </div>
              <p className="discription">
                DevOps is a paradigm shift in the way how software products are
                being built in the modern day Information Technology (IT)
                organizations. ...
              </p>
            </div>
          </a>
        </section>
        <section>
          <a
            className="section-link"
            href="https://www.edyoda.com/stories/typical-day-of-a-data-scientist-an-insider-story"
          >
            <div className="imgSection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
                alt="Story"
              />
            </div>
            <div className="textSection">
              <p className="title">
                Typical day of Data Scientist - An insider...
              </p>
              <div className="author">
                <i>Saurav Ghosh</i>
                <span> | 05 Jul 2019</span>
              </div>
              <p className="discription">
                I’ve been a Data Scientist for three years now and I can only
                say that Chris Lynch was right - “ Big Data and Data Science are
                the foundation of all the trends that are emerging in the world
                today.” To me...
              </p>
            </div>
          </a>
        </section>
        <section>
          <a
            className="section-link"
            href="https://www.edyoda.com/stories/amazon-web-services-aws-cloud-day-bangalore"
          >
            <div className="imgSection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
                alt="Story"
              />
            </div>
            <div className="textSection">
              <p className="title">Amazon Web Services (AWS) Cloud Day -...</p>
              <div className="author">
                <i>Kalyan Mahalingam</i>
                <span> | 05 Jul 2019</span>
              </div>
              <p className="discription">
                It was indeed a hectic day with back to back session sandwiched
                by good food and tea (on a lighter note, need to investigate the
                tactics behind the 5-star hotels keeping the plates so......
              </p>
            </div>
          </a>
        </section>
        <section>
          <a
            className="section-link"
            href="https://www.edyoda.com/stories/meetup-01-data-migration-at-scale-on-cloud-an-experience"
          >
            <div className="imgSection">
              <img
                src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
                alt="Story"
              />
            </div>
            <div className="textSection">
              <p className="title">edYoda Meetup #01 : A Date with Cloud...</p>
              <div className="author">
                <i>Ashish Pandey</i>
                <span> | 05 Jul 2019</span>
              </div>
              <p className="discription">
                I recently had the opportunity to lead the initiative to
                organize the first Cloud meetup for edYoda. Here, I recount my
                experience in organizing the very first in the series of meetups
                planned by the...
              </p>
            </div>
          </a>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-column footer-section-first">
          <h3 className="edyoda">EDYODA</h3>
          <p>
            1st Floor,
            <br /> Gopalan Millennium Tower,
            <br /> ITPL Main Rd, Brookefield,
            <br /> Bengaluru, Karnataka-560037,
            <br /> India
          </p>
          <p>
            <a href="mailto:hello@edyoda.com">
              <img
                className="mail-img"
                src="https://www.edyoda.com/static/media/email-white.e7d51381.svg"
              />
              hello@edyoda.com
            </a>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            fill="#ffffff"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <span style={{marginLeft:"5px"}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
       </span> 
       <span style={{marginLeft:"5px"}}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"fill="#fff"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></span></div>
        <div className="footer-column">
          <h3 >EDYODA</h3>
          <ul>
            <li>About Us</li>
            <li>Carreers</li>
            <li>Contact Us</li>
            <li>Term Of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>RESOURCES</h3>
          <ul>
            <li>Jobs</li>
            <li>Learning Paths</li>
            <li>Courses</li>
            <li>Learning Videos</li>
            <li>Educators</li>
            <li>EdYoda Stories</li>
            <li>University</li>
          </ul>
        </div>
        <div className="footer-column footer-section-last">
          <h3>FOR ENTERPRISES</h3>
          <p>Train Your Employees</p>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Learn and Earn</li>
            <li>Become a Learning-Enabler</li>
            <li>Tips for Learning-Enabler</li>
            <li>Request New Topic</li>
            <li>Certification</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        <span>© 2023 zekeLabs Technologies Private Limited</span>
      </div>
    </div>
  );
}

export default App;
