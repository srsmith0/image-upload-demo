import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Container, Divider } from 'semantic-ui-react';

class Profile extends React.Component {
  state = {editing: false, formValues: { name: "", email: ""} };

  componentDidMount() {
    //AuthProvider has current user information.  We use that to get what we need
    const { auth: {user: {name, email}}} = this.props
    this.setState({ formValues: { name, email } });
  }

  render (){
    return (
      <Container>
        <Divider />
        <h1>New Profile</h1>
      </Container>
    )
  }
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    {auth => <Profile {...props} auth={auth}/>}
  </AuthConsumer>
)

export default ConnectedProfile;