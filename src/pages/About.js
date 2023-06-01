import React from "react";


const About = () => {
    return (
        <div>
            <div>
                <section id="vip">
                <h1>About Josh</h1>
                  <p>
                    Hi & welcome! My name is Joshua Ewuoso, but you can call me Josh. New to the tech field, I began my journey into Pursuit to grow into a Full-Stack Web Engineer.
                  </p>
                </section>
            </div>
        <section className="description">
          <h2>Project Description</h2>
            <p>
              This Project lets you search for YouTube videos using the YouTube
              API, then choose a video from a list to watch. In this project we
              use Trello Board to track the ToDo lists for this website like
              functionality, styling, and etch. Furthermore, while we were working
              on this project we encountered several roadblocks. For example, we
              learned that some API's like Youtube have limited fetch quotas of 10,000 units.
            </p>
        </section>
      </div>
    );
  };

export default About;