import React from 'react';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistic_list}>
      <li className={css.statistic_item}>Good: {good}</li>
      <li className={css.statistic_item}>Neutral: {neutral}</li>
      <li className={css.statistic_item}>Bad: {bad}</li>
      <li className={css.statistic_item}>Total: {total}</li>
      <li className={css.statistic_item}>
        Positive feedbacks: {positivePercentage || 0}%
      </li>
    </ul>
  );
};
