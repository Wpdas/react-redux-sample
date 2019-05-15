import React from 'react';
import { connect } from 'react-redux';
import * as userActions from '../store/user/action';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.handlerOnChangeFirstName = this.handlerOnChangeFirstName.bind(this);
    this.handlerOnChangeLastName = this.handlerOnChangeLastName.bind(this);
  }

  handlerOnChangeFirstName(event) {
    const { onUpdateFirstName } = this.props;
    onUpdateFirstName(event.target.value);
  }

  handlerOnChangeLastName(event) {
    const { onUpdateLastName } = this.props;
    onUpdateLastName(event.target.value);
  }

  render() {
    const { firstName, lastName } = this.props.user;

    return (
      <React.Fragment>
        <div>First Name: {firstName}</div>
        <input type="text" value={firstName} onChange={this.handlerOnChangeFirstName} />
        <div>Last Name: {lastName}</div>
        <input type="text" value={lastName} onChange={this.handlerOnChangeLastName} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapActionToProps = {
  onUpdateFirstName: userActions.onUpdateFirstName,
  onUpdateLastName: userActions.onUpdateLastName
}

export default connect( mapStateToProps, mapActionToProps)(User);