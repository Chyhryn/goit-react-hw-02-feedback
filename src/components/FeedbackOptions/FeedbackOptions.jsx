import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.button_list}>
      <li className={css.button_item}>
        <button
          className={css.button}
          type="button"
          onClick={onLeaveFeedback}
          name="good"
        >
          Good
        </button>
      </li>
      <li className={css.button_item}>
        <button
          className={css.button}
          type="button"
          onClick={onLeaveFeedback}
          name="neutral"
        >
          Neutral
        </button>
      </li>
      <li className={css.button_item}>
        <button
          className={css.button}
          type="button"
          onClick={onLeaveFeedback}
          name="bad"
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
