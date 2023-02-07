/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView, Platform, TextInput, Touchable, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/tasks';

function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
     setTask(null);
    
  }


  const CompleteTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy);
  }

  return (<View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go */}
          {
            taskItems.map((item, index)=>{
              return <TouchableOpacity key={index} onPress={()=>CompleteTask(index)}>
                <Task text={item} />
                </TouchableOpacity>
            })
          }
        </View>
      </View>
      {/* Writing a task */}

      <KeyboardAvoidingView
        behavior={Platform.OS ==='ios' ? 'padding' : 'height'}
       style={styles.writeTaskWrapper}>

         <TextInput 
         style={styles.input}
          // value={task}
          onChangeText={text => setTask(text)}> </TextInput>
         <TouchableOpacity onPress={() =>  handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
         </TouchableOpacity>
       </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop : 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#000'
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:280,
    color:'#000'
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor:'#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{
    color:'#000',
    fontWeight:'bold'
  }

});

export default App;
