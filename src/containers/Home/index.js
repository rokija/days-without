import { connect } from "react-redux";
import Home from "../../components/Home";

export default connect(
  state => ({ user: state.user }),
  undefined
)(Home);
