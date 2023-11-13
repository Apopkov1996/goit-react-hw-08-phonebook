import React from 'react';

const { ThreeDots } = require('react-loader-spinner');

export const Loading = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#3498db"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
