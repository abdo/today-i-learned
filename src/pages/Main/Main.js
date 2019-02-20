import PropTypes from 'prop-types';
import React from 'react';

import DailyBody from '../../components/DailyBody/DailyBody';
import dailySamples from '../../assets/samples/dailySamples';
import Daily from '../Daily/Daily';

const MainPublic = (props) => {
  return (
    <div className="mb-5 pb-5">
      {dailySamples.map((daily) => (
        <DailyBody daily={daily} key={daily._id} />
      ))}
    </div>
  );
};

MainPublic.propTypes = {};

export default MainPublic;
