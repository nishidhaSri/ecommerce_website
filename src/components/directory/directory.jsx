import React from "react";
import section from "./directory-data";

import "./directory.scss";
import MenuItem from "../menu-item/menu-item";

class Directory extends React.Component {
  constructor() {
    super();
    this.status = {
      sections: [],
    };
  }

  componentWillMount() {
    this.setState({
      sections: section,
    });
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
