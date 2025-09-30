import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          <b>
            “Every rep you do today is an investment in the stronger version of
            yourself tomorrow.”
          </b>
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          <b>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            impedit quasi sunt amet rerum accusamus odio eveniet unde?
          </b>
        </p>
        <div className="bootcamps">
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
          <div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe repellendus nemo sit facere ipsam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
