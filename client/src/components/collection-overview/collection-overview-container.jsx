import { createStructuredSelector } from "reselect";
import { selectCollectionFetching } from "../../redux/shop/shop-selector";
import WithSpinner from "../with-spinner/with-spinner";
import CollectionOverview from "./collection-overview";
import { compose } from "redux";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
