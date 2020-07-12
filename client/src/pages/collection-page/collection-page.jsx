import React from "react";
import "./collection-page.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../components/collection/collection";

const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStatetoProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStatetoProps)(CollectionPage);
