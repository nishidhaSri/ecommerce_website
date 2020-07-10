import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop-selector";
import { compose } from "redux";
import { connect } from "react-redux";
import collectionPage from "./collection-page";
import WithSpinner from "../../components/with-spinner/with-spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionPage);

export default CollectionPageContainer;
