import PropTypes from "prop-types";
import Header from "./Header";

const PageLayout = ({ userName, pageTitle, children }) => {
  return (
    <>
      <Header userName={userName} pageTitle={pageTitle} />
      <div className="p-6">{children}</div>
    </>
  );
};

PageLayout.propTypes = {
  userName: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
