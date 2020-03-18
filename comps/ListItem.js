import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: '', title:''};
    }
    
    addingTask = (_text) =>{
        console.log('_____>', this.state)
        this.setState({text:_text})
    }
    addingTitle = (title) =>{
        this.setState({title})
    }
    handleSubmit = () =>{
        console.log('this is the state of afairs', this.state)
        this.props.action.addTask(this.state.title, this.state.text)
    }
    render() {
      return (<>
        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40, backgroundColor:'white'}}
            placeholder="Type title here!"
            onChangeText={text=>this.addingTitle(text)}
            value={this.state.title}
          /> 
          </View>
          <View>    
          <TextInput
            style={{height: 40, backgroundColor:'white'}}
            placeholder="Type your task here"
            onChangeText={text=>this.addingTask(text)}
            value={this.state.text}
          />     
        </View>
        <View>
            <TouchableOpacity
                onPress={this.handleSubmit}
                style={styles.button}
            >
              <Text>Submit Task</Text>
            </TouchableOpacity>
        </View>
        
        </>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'#FFCC00',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.4rem',
    paddingRight: '.4rem',
    marginTop: '1rem',
    borderRadius:7,

  }
});
