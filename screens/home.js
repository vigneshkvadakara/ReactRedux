import * as React from 'react';
import { View, Text, Image, TouchableOpacity ,SafeAreaView, FlatList} from 'react-native';
import { connect } from 'react-redux';
import FriendReducer from '../FriendReducer';
import Design from '../style/Design';



class HomeScreen extends React.Component{
    render(){
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'vignesh',
            Age:'23',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Arun',
          Age:'23',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'abiram',
          Age:'23',
        },
        {
          id: '58694a0f-3da1-471f-bd96-15571e29d72',
          title: 'bineesh',
          Age:'23',
        },
        {
          id: '58694a0f-3da1-471f-bd96-14571e29d72',
          title: 'Tether',
          Age:'23',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e2d72',
          title: 'bibin',
          Age:'23',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145529d72',
          title: 'rahul',
          Age:'23',
        },
      ];
      const renderItem = ({ item }) => (
        <View style ={Design.mainView}>
            <View style ={Design.view1}>
                <Text style = {Design.text1}>Name</Text>
                <Text style = {Design.text1}>Age</Text>
                <Text style = {Design.text1}>Class</Text>
                <Text style = {Design.text1}>Address</Text>
                <Text style = {{color:'grey',marginTop:20}}>location</Text>
            </View>
            <View style ={{width:'50%',justifyContent:'center'}}>
                <Text style = {Design.text3}>:    {item.title}</Text>
                <Text style = {Design.text3}>:    {item.Age}</Text>
                <Text style = {Design.text3}>:    10</Text>
                <Text style = {Design.text3}>:    kakkadantavida</Text>
                <Text style = {Design.text3}>:    kurikkilad po</Text>
                <Text style = {Design.text3}>:    vadakara</Text>
            </View>
            <View style ={{width:'10%',alignItems:'flex-end',marginTop:'10%'}}>
                <TouchableOpacity>
                    <Image style ={{height:20,width:20,marginBottom:20}} source ={{uri:'https://www.iconsdb.com/icons/preview/color/838383/trash-9-xxl.png'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('stud')}>
                    <Image style ={{height:20,width:20}} source ={{uri:'https://www.iconsdb.com/icons/preview/color/838383/edit-8-xxl.png'}}/>
                </TouchableOpacity>
            </View>
        </View>
      );
    
    return (
      <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#fff' }}>  
        <Text style ={{color:'grey',fontSize:17,fontWeight:'500',marginTop:20,marginBottom:20}}>STUDENTS</Text>
        <SafeAreaView style={{  height:'80%',width:'100%', backgroundColor:'#fff'}}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
        <TouchableOpacity style ={{height:30,width:'80%',backgroundColor:'#fff',alignItems:'center',justifyContent:'center',flexDirection:'row',elevation:5,borderRadius:20,marginVertical:'10%'}}
            onPress={()=>this.props.navigation.navigate('stud')}>
            <Image style ={{height:10,width:10}} source = {{uri:'https://www.iconsdb.com/icons/preview/color/4F4F4F/plus-8-xxl.png'}}/>
            <Text style = {{color:'#4f4f4f',marginLeft:20,fontSize:13,opacity:0.7,fontWeight:'300'}}>Add Students</Text>
        </TouchableOpacity>
      </View>
    );
    }
  }
  const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
  };
  export default connect(mapStateToProps)(HomeScreen);
