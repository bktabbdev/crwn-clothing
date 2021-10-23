import React from "react";
import { connect } from "react-redux";

// import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";

const CollectionPage = ({ collection, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  //ownProps is props of component we are wrapping in connect
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
