import PropTypes from 'prop-types';
import { Line, Btn } from './stalyes';

export const ContactElement = ({ el, id, onClick }) => {
  return (
    <Line key={id}>
      {el.name}: {el.number}
      <Btn name={el.name} onClick={onClick}>
        Delete
      </Btn>
    </Line>
  );
};

ContactElement.propTypes = {
  el: PropTypes.object.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired
}