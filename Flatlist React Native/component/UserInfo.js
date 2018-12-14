
import React from 'react';
import {Text,View,StyleSheet, Image} from 'react-native';

class UserInfo extends React.Component{

  static navigationOptions = {
    title : 'User Information'
  }
    constructor(props){
        super(props);
        console.log(this.props.navigation.state.params)
    }
    render(){
      const {item}=this.props.navigation.state.params
        return (
          <View style={style.mainview}>
            <View style ={[{flex:.7},style.info]}>
                <Image style={style.imageview} source={{ uri: item.picture.large }}></Image>
            </View>
            <View style ={[{flex:1.3 ,justifyContent:'center',paddingLeft: 25}]}>
              <Text style={style.textview}>NAME : {item.name.title.toUpperCase()}. {item.name.first.toUpperCase()} {item.name.last.toUpperCase()}</Text> 

              <Text style={style.textview}>ADDRESS : {item.location.street.toUpperCase()}, {item.location.city.toUpperCase()} </Text>

              <Text style={style.textview}>EMAIL : {item.email}</Text>
              <Text style={style.textview}>PHONE NO : {item.phone}</Text>
            </View>
          </View>
        )
    }
}

export default UserInfo;

const style=StyleSheet.create({
  mainview:{
    flex:1,
    backgroundColor:'#8b9dc3',
    flexDirection:'column'
  },
  info:{
    alignItems:'center',
    justifyContent: 'center',
  },
  imageview:{
    top:70,
    height:200,
    width:200,
    borderRadius:100
  },
  textview:{
    fontSize: 20,
    color: 'white',
    fontWeight:'bold'
  }
})