/**
 React native
 Independent Assignments

 Author: Akhmad Rizki Prayoga
 */

import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default class Blink extends Component {
  constructor(props) 
  {
    super(props)
    this.state = {
      isShowingText: false,
      defaultText: 'Tampilkan',
      showText: '',
      inputText: '',
      result: ''
    };
  }

  textChange = () => {
    this.setState((Prev) => ({
      isShowingText: !Prev.isShowingText,
    }));
    if (!this.state.isShowingText) {
      this.setState({ defaultText: 'Sembunyikan', showText: 'Hello World!' });
    } else {
      this.setState({ defaultText: 'Tampilkan', showText: '' });
    }
  };

  render() {
    return(
      <View style={styles.mainBackground}>
        <Image source={{uri: 'http://spada.primakara.ac.id/pluginfile.php/1/theme_alpha/customlogotopbar/1603071694/favicon.png'}} style={styles.lgo} />
        <TouchableOpacity style={styles.buttonShow} onPress={this.textChange}>
          <Text style={styles.text}>{ this.state.defaultText }</Text>
        </TouchableOpacity>
        <Text style={styles.textShow}>{this.state.showText}</Text>

        <Text style={styles.textResult}>{this.state.result}</Text>
        <TextInput style={styles.input} onChangeText={(inputText) => this.setState({inputText})}>
        </TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text} onPress={() =>{
            this.setState({result: this.state.inputText})
          }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: '#0096b5',
    alignItems: 'center'
  },
  lgo: {
    width: 100,
    height: 100,
    marginTop: 60
 },
  buttonShow: {
    padding: 14,
    borderRadius: 8,
    width: 200,
    backgroundColor: '#fff',
    marginTop: 60
  },
  button: {
    backgroundColor: '#fff',
    padding: 8,
    width: 100,
    marginTop: 20
  },
  textShow: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
  text: {
    color: '#777',
    textAlign: 'center',
    fontSize: 18
  },
  textResult: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  },
  input: {
    height: 40,
    width: 200,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#777'
  }
})