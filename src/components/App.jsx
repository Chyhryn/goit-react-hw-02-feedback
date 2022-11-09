import React from 'react';
import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedbacks = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(0);
    return Number(positiveFeedbacks);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const isFeedback = Object.values(this.state).find(value => value > 0);

    return (
      <div className={css.container}>
        <Section title="Please Leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onBtnClick} />
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
