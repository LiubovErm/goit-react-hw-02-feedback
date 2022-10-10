import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { StatisticsItem} from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => {
  return (
      <Box p={3}>
            <StatisticsItem>Good: {good}</StatisticsItem>
            <StatisticsItem>Neutral: {neutral}</StatisticsItem>
            <StatisticsItem>Bad: {bad}</StatisticsItem>
            <StatisticsItem>Total: {total}</StatisticsItem>
            <StatisticsItem>Positive feedback: {positiveFeedbackPercentage}%</StatisticsItem>
      </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};