import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Practice.css";

export const Practice = () => {
  return (
    <section id="git-calendar">
      <h1 className="practice-tit">More harder, More greener</h1>

      <GitHubCalendar username="jeong-jj" blockSize={16} />
    </section>
  );
};
