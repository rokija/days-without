import { connect } from "react-redux";
import AddItem from "../../components/AddItem";
import { updateList } from "../../actions/userActions";

export default connect(
  undefined,
  { updateList }
)(AddItem);
