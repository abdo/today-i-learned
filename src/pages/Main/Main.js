import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import * as DailyActions from '../../store/actions/dailyActions';
import DailyBody from '../../components/DailyBody/DailyBody';

const MainPublic = (props) => {

  useEffect(() => {
    const { getAllDailies, getPublicDailies } = props;
    if (props.isAuthenticated) {
      getAllDailies();
    } else {
      getPublicDailies();
    }
  }, [props.isAuthenticated])


  let shownDailies = [];

  if (props.isAuthenticated) {
    shownDailies = props.allDailies
  } else {
    shownDailies = props.publicDailies;
  }


  return (
    <div className="mb-5 pb-5">
      {shownDailies.map((daily) => (
        <DailyBody daily={daily} key={daily._id} />
      ))}
    </div>
  );
};

MainPublic.propTypes = {};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  allDailies: state.daily.allDailies,
  publicDailies: state.daily.publicDailies
});

const mapDispatchToProps = {
  getAllDailies: DailyActions.getAllDailies,
  getPublicDailies: DailyActions.getPublicDailies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPublic);

