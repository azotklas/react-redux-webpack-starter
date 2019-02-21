import { connect } from 'react-redux';
import ResultComponent from '../components/ResultComponent';
const mapStateToProps = state => {
  console.log('TEST STATE', state);
  const { ...params } = state.testDATA;
  console.log('paaa',params)
  return {
    ...params
  };
};

const mapDispatchToProps = dispatch => {
  console.log('TEST DISPATCH', dispatch)
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultComponent);