import AboutmeCard from "../components/AboutmeCard";
import "../Styles/Home.css";

const AboutMe = () => {
  return (
    <div className="h-auto bg-gradient-to-r text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold bg-gray-100 text-black pb-8 text-center  dark:text-white dark:bg-gray-900 transition-colors duration-300">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
          About Me
        </span>
      </h2>

      <div className="h-auto bg-blue-500 dark:bg-blue-700 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden sm:block w-1 bg-blue-300 dark:bg-blue-900 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            <AboutmeCard
              details={
                <>
                  {" "}
                  Introduced to HTML in{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    2016
                  </span>
                </>
              }
              position="left"
            />
            <AboutmeCard
              details={
                <>
                  Write my first program in{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    HTML/CSS
                  </span>
                  {<br />}
                  (A Train Reservation Form)
                </>
              }
              position="right"
            />
            <AboutmeCard
              details={
                <>
                  Completed my class,{<br />}{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    10th in 2019 , 12th in 2021
                  </span>
                  {<br />}
                  from CBSE Board
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    &nbsp;with above 90%
                  </span>
                </>
              }
              position="left"
            />
            <AboutmeCard
              details={
                <>
                  Joined{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    JSS Academy
                  </span>
                  &nbsp;of Technical Education, Noida in November 2021
                </>
              }
              position="right"
            />
            <AboutmeCard
              details={
                <>
                  Learned{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    C++&nbsp;
                  </span>
                  in 2021 and started learning&nbsp;
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    DSA &nbsp;
                  </span>
                  <br />
                  ( 2022 )
                </>
              }
              position="left"
            />
            <AboutmeCard
              details={
                <>
                  Started{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    Game Dev&nbsp;
                  </span>
                  using Unity in&nbsp;
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    C#&nbsp;
                  </span>
                  Made my First Game
                  <br /> ( 2022 )
                </>
              }
              position="right"
            />
            <AboutmeCard
              details={
                <>
                  Started Working on{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    Javascript&nbsp;
                  </span>
                  and learned about Web Development <br />
                  ( 2023 )
                </>
              }
              position="left"
            />
            <AboutmeCard
              details={
                <>
                  Got internships at{" "}
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    CodeClause and Fitness Bell India&nbsp;
                  </span>
                  and learned about Web Designing <br />
                  ( June 2024 )
                </>
              }
              position="right"
            />
            <AboutmeCard
              details={
                <>
                  Worked for&nbsp;
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    2 Months &nbsp;
                  </span>
                  as Backend Developer Intern at&nbsp;
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    Educase India&nbsp;
                  </span>
                  and learnt about NodeJs, Javascript, SQL <br />
                  ( Sep 2024 )
                </>
              }
              position="left"
            />
            <AboutmeCard
              details={
                <>
                  Review Paper Accepted in
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    &nbsp; IEEE Xplore at OTCON 4.0 <br />
                  </span>
                  ( April 2025 )
                </>
              }
              position="right"
            />
            <AboutmeCard
              details={
                <>
                  Currently working at TecoreLabs as a &nbsp;
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    Junior Full Stack Engineer &nbsp;
                  </span>
                  ( April 2025 )
                </>
              }
              position="left"
            />
            <AboutmeCard
              details={
                <>
                  Promoted to &nbsp;
                  <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text animated-gradient-text">
                    Software Engineer
                  </span>
                  &nbsp; at TecoreLabs. <br /> ( July 2025 )
                </>
              }
              position="right"
            />

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
