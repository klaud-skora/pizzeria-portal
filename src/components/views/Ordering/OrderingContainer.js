import { connect } from 'react-redux';
import Ordering from './Ordering';
import { getAll, fetchFromAPI, getLoadingState, updateFetch } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateTables: (tableId, tableStatus) => dispatch(updateFetch(tableId, tableStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ordering);
