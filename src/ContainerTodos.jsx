import PropTypes from 'prop-types';

const ContainerTodos = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default ContainerTodos;

ContainerTodos.propTypes = {
  children : PropTypes.node
}
