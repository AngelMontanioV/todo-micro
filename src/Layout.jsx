import PropTypes from "prop-types"
const Layout = ({children}) => {
  return (
    <div className="w-screen h-screen p-3 bg-primary flex">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children : PropTypes.node
}

export default Layout;