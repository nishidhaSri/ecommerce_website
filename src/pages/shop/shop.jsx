import React from "react";

import collections from "./shop.data";
import CollectionPreview from "../../components/preview/preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: collections,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
