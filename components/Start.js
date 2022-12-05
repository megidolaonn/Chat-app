import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const backgroundColors = {
  black: '#090C08',
  purple: '#474056',
  grey: '#8A95A5',
  green: '#B9C6AE',
};

export default class Start extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      background: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../A5_project_assets/Background-Image.png')} style={styles.image}>
          <Text style={styles.appTitle}>Chat App</Text>
          <View style={styles.menuWrapper}>

            <View style={styles.inputWrapper}>
              <Image style={styles.icon} source={require('../A5_project_assets/icon.png')} />
              <TextInput
                style={styles.input}
                placeholder='Your Name'
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}>
              </TextInput>
            </View>

            <View style={styles.colorWrapper}>
              <Text style={styles.colorText}>Choose Background Color:</Text>

              <View style={styles.colorChoiceWrapper}>
                <TouchableOpacity style={[styles.color, { backgroundColor: backgroundColors.black }]}
                  onPress={() => this.setState({ background: backgroundColors.black })} />
                <TouchableOpacity style={[styles.color, { backgroundColor: backgroundColors.purple }]}
                  onPress={() => this.setState({ background: backgroundColors.purple })} />
                <TouchableOpacity style={[styles.color, { backgroundColor: backgroundColors.grey }]}
                  onPress={() => this.setState({ background: backgroundColors.grey })} />
                <TouchableOpacity style={[styles.color, { backgroundColor: backgroundColors.green }]}
                  onPress={() => this.setState({ background: backgroundColors.green })} />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Chat',
                { name: this.state.name, background: this.state.background })}
              style={styles.button}>
              {/* transfer name and background color to the chat screen */}
              <Text style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    resizeMode: 'cover',
    paddingBottom: '6%',
  },
  appTitle: {
    fontSize: 45,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingTop: '22%'
  },
  menuWrapper: {
    backgroundColor: 'white',
    height: '44%',
    width: '88%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '6%',
    borderRadius: 10
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    opacity: 50,
    height: 60,
    width: '88%',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    height: 60,
    borderColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    left: -2,
    paddingLeft: 45,
    paddingRight: 20,
    width: '101%'
  },
  colorWrapper: {
    width: '88%',
  },
  colorText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
    opacity: 100,
  },
  colorChoiceWrapper: {
    flexDirection: 'row',
  },
  color: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginTop: 10,
    marginRight: 25,
  },
  button: {
    height: 60,
    width: '88%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#757083',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});