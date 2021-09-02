import React from 'react';

const Resources = ({ resources }) => {
  return(
    <React.Fragment>
      {resources.map((resource) => (
        <p key={resource.id}>{resource.title}</p>
      ))}
    </React.Fragment>
  );
};

export default Resources;
