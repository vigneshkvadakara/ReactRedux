import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity ,Image, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from '../FriendAction';
import { useState } from 'react';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import Design from '../style/Design';



function AddStud({navigation}) {
    // render(){
        const [name,setName] = useState('')
        const [Age,stAge] = useState('')
        const [Address,setAddress] = useState('')
        const [Location,setLocation] = useState('')
        const [Class,setClass] = useState('')
    return (
      <View style={{ flex: 1,backgroundColor:'#fff' }}>  
        <Text style ={Design.Addtext}>Name</Text>
        <TextInput style ={Design.textInput}
         placeholder='Name'
         onChangeText={(text)=>setName(text)}/>
         <Text style ={Design.Addtext}>Age</Text>
        <TextInput style ={Design.textInput}
         placeholder='Age'
         onChangeText={(text)=>stAge(text)}/>
         <Text style ={Design.Addtext}>Class</Text>
        <TextInput style ={Design.textInput}
         placeholder='Class'
         onChangeText={(text)=>setClass(text)}/>
         <Text style ={Design.Addtext}>Address</Text>
        <TextInput style ={Design.textInput}
         placeholder='Address'
         onChangeText={(text)=>setAddress(text)}/>
         <Text style ={Design.Addtext}>Location</Text>
        <TextInput style ={Design.textInput}
         placeholder='Location'
         onChangeText={(text)=>setLocation(text)}/>
         <TouchableOpacity style ={{height:30,width:'80%',backgroundColor:'#fff',alignItems:'center',justifyContent:'center',flexDirection:'row',elevation:5,borderRadius:20,marginVertical:'15%',marginHorizontal:'10%'}}
         onPress={()=>navigation.navigate('Home')}>
            <Text style = {{color:'#4f4f4f',fontSize:13,opacity:0.7,fontWeight:'300'}}>Save Changes</Text>
        </TouchableOpacity>
        
        {/* {
          this.props.friends.possible.map((friend, index) => (
            <Button
              key={ friend }
              title={ `Add ${ friend }` }
              onPress={() =>
                this.props.addFriend(friend)
              }
            />
          ))
        } */}
      </View>
    );
}
//   }
//   const mapStateToProps = (state) => {
//     const { friends } = state
//     return { friends }
//   };
//   const mapDispatchToProps = dispatch => (
//     bindActionCreators({
//       addFriend,
//     }, dispatch)
//   );
  
//   export default connect(mapStateToProps,mapDispatchToProps)(AddStud);
export default AddStud;