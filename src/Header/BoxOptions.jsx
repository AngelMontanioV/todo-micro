import PropTypes from 'prop-types';

const BoxOptions = ({ children }) => {

  return (
    <div className="absolute top-18 md:top-8  right-0 mt-2 w-80 h-80 bg-primary border rounded-sm z-10 p-3">
      <h5 className="mb-2">Tema</h5>
      <div className="grid grid-cols-5 m-auto gap-2">
        {children}
      </div>
    </div>

  );
};

export default BoxOptions;

BoxOptions.propTypes = {
  children : PropTypes.node
}