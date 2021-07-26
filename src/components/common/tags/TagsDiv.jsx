import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tag from "./Tags";
import "./tagsDiv.scss";

const TagsDiv = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    release: { tags },
  } = props;
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    setAllTags(tags);
  }, [tags]);

  return (
    <div className="tags-container">
      <p>Tags</p>
      <div className="collection-tags">
        {allTags.map((tag) => (
          <Tag key={tag} tagName={tag} />
        ))}
      </div>
    </div>
  );
};

TagsDiv.propTypes = {
  release: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  release: state.release,
});

export default connect(mapStateToProps, null)(TagsDiv);
