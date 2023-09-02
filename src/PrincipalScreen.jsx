import PropTypes from 'prop-types'

const PrincipalScreen = ({children}) => {
  return (
    <div className='text-black bg-sahara w-full p-10'>
      {children}
    </div>
  );
};

export { PrincipalScreen };

PrincipalScreen.propTypes = {
  children: PropTypes.node
}