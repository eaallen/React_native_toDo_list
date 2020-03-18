import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Icon } from 'react-native-elements'
import ListItem from './comps/ListItem'
import produce from 'immer'
// import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      task:{}
    }
    this.actions ={
      addTask: this.addTask
    }
  }

  addTask = (title,text) =>{
    this.setState(state=> produce(state, draft=>{
      // let qnt = 'quantity'
      console.log('DRAFT______', title)
      console.log('DRAFT-----', draft.task[title])
      //pid
      if(!draft.task[title]){
          console.log('data in add to cart->',draft.task[title])
          draft.task[title] = text
          console.log('data in add to cart->',draft.task[title])
          
          
      }else{
          draft.task[title] = text
      }
  })) 

  }
  removeTask = (title) =>{
    console.log('inthe removeTask---------->------>')
    this.setState(state=>produce(state,draft =>{
        delete draft.task[title]
    }))


  }
  render=()=>{
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the Minimal To-Do List React Native App!</Text>
        
        <ListItem state={this.state} action={this.actions}/>
        {Object.entries(this.state.task).map(item=>{
          return(
            <View key={item[0]+'card'} style={styles.card} >
              <View key={item[0]+'title'} style={styles.cardHeader}>

                <Text style={{width: '90%',fontSize:'1.5rem',}}>
                  {item[0]}            
                </Text >
                <Text style={{fontSize:'2rem', }}  onPress={()=>this.removeTask(item[0])}>
                  <Icon style={{textAlign:'right'}} name="delete"></Icon>
                </Text>
              </View>
              <View key={item[0]+'body'} style={styles.cardBody}>
                <Text style={{fontSize:'1.5rem'}}>
                  {item[1]}
                </Text>
                <View>
                </View>
              </View>      
            </View>
         )
        })}
      </View>
    );
  }
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
    backgroundColor: 'slategray',
    
  },
  row: {
    margin: '1rem',
  },
  header:{
    fontSize: '2rem',
    textAlign: "center",
    color: '#fff'
  },
  card:{
    width:'20rem',
    marginTop:'.5rem',
    marginBottom:'.5rem',
    
  },
  cardHeader:{
    backgroundColor:'lightgray',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.4rem',
    paddingRight: '.4rem',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
  },
  cardBody:{
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.4rem',
    paddingRight: '.4rem',
    backgroundColor:'whitesmoke',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,

  }
});
