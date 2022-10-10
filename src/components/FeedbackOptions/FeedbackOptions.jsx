import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button} from './FeedbackOptions.styled';
import { Box } from '../Box/Box';

export const FeedbackOptions = ({ options, onClickFeedBack }) => {
  return (
    <Box>
      <ButtonList>
        {options.map(option => {
          return (
            <ButtonItem key={option}>
              <Button type="button" onClick={() => {onClickFeedBack(option);}}>{option}</Button>
            </ButtonItem>
          );
        })}
      </ButtonList>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onClickFeedBack: PropTypes.func,
};