import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      password: "",
      email: "",
      validEmail: true
    };
  }

  onSubmit = () => {
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ error: "Kindly Fill All The Fields" });
    } else if (this.state.validEmail === false) {
      this.setState({ error: "Kindly Enter Correct Email" });
    } else {
      this.setState({ error: "" });
      this.props.navigation.navigate("HOME")
    }
  };

  checkEmail=(email)=>  {
    this.setState({ email: email });
  
    const emailCheckRegex = /\w+([-+.']\w+)@\w+([-.]\w+)\.\w+([-.]\w+)*/;
    // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))£/;
    if (emailCheckRegex.test(String(email)) === true) {
      this.setState({ validEmail: true });
    } else if (emailCheckRegex.test(String(email)) === false) {
      this.setState({ validEmail: false });
    }
  }

  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `${email} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: 'powderblue' }}>{this.state.error}</Text>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onSubmit.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
