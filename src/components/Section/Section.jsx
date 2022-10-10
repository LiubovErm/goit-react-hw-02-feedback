import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box maxWidth={350} backgroundColor = 'lightGrey' mx='auto' mt={16} p={10} boxShadow='normal'>
      <Title>{title}</Title>
      {children}
    </Box>
  );
};


Section.propTypes = {
  title: PropTypes.string.isRequired,
};