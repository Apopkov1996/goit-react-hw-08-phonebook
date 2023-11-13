import React from 'react';
import lcss from './loader.module.css';
const { Dna } = require('react-loader-spinner');

export const Loader = () => {
  return (
    <div className={lcss.wraper}>
      <div className={lcss.loader}>
        <Dna
          visible={true}
          height="100"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
      <p className={lcss.text}>PhoneBook is loading ...</p>
    </div>
  );
};
