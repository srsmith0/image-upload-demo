import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Container, Divider, Grid, Header, Image, Button, Form } from 'semantic-ui-react';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class Profile extends React.Component {

  state = {editing: false, formValues: { name: "", email: ""} };

  componentDidMount() {
    //AuthProvider has current user information.  We use that to get what we need
    const { auth: {user: {name, email}}} = this.props

    this.setState({ formValues: { name, email } });
  }
  handleChange = (e) => {

  };

  handleSubmit= (e) => {

  };

  editView = () => {
    const { auth: { user }, } = this.props;
    const { formValues: { name, email } } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            required
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
    )
  }

profileView = () => {
  const { auth: {user} } = this.props;
  return (
    <>
      <Grid.Column width={4}>
        <Image src={user.image || defaultImage}/>
      </Grid.Column>
      <Grid.Column width={8}>
        <Header as="h1">Name: {user.name}</Header>
        <Header as="h1">Email: {user.email}</Header>
      </Grid.Column>
    </>
  )
}

toggleEdit= () => {
  this.setState({
    editing: !this.state.editing
  })
}

  render (){
    const {editing} = this.state;

    return (
      <Container>
        <Divider />
        <Grid>
          <Grid.Row>
          {editing ? this.editView() : this.profileView()}
          <Grid.Column>
            <Button onClick={this.toggleEdit}>{editing ? "Cancel" : "Edit"}</Button>
          </Grid.Column>
          </Grid.Row>
          </Grid>
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


