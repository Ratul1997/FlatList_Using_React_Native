
import React from 'react';
import { Image, StyleSheet, Alert, AppRegistry, ActivityIndicator, Text, View, FlatList } from 'react-native';
import { List, SearchBar, Icon, ListItem, Avatar ,TouchableOpacity} from 'react-native-elements';
import { Button } from 'react-native-button';

import flatlistData from '../data/flatlistData';

class Flatlists extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      data:[],
      loading: false,
      page: 0,
      query: ''

    }
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true })
   // const response = await fetch("https://randomuser.me/api?results=15&seed=hi&page=${this.state.page}");
    //const json = await response.json();
    this.setState(state => ({
      data: flatlistData,
      loading: false,
    }));
  }

  separator = () => {
    return (
      <View style={style.separate}></View>
    )
  }

  handleSearch = (text)=> {
    console.log(text)
    this.setState({query:text})
  }

  headerComponent = () => {
    return (
      <SearchBar
        lightTheme
        round
        placeholder='Type Here...'
        onChangeText={this.handleSearch}

        />
    )
  }

  footerComponent = () => {
    return (
      !this.state.loading
        ? null
        : <ActivityIndicator size="large" animating />
    )
  }

  handleEnd = () => {
    this.setState(state => ({ page: state.page + 1 }), () => this.fetchData());
  };


  render() {
    const { navigate } = this.props.navigation


    return (

      <View   style={{ flex:1, justifyContent:'center',alignItems:'stretch' }}>
        <List containerStyle={{ borderBottomWidth: 0, borderTopWidth: 0, marginTop: 0 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i.toString()}
            ItemSeparatorComponent={this.separator}
            ListHeaderComponent={this.headerComponent}
            ListFooterComponent={this.footerComponent}
           // onEndReached={() => this.handleEnd()}
           // onEndReachedThreshold={50}
            renderItem={({ item, index }) => 
              <ListItem
                avatar={
                  <Avatar
                    rounded
                    medium
                    source={{ uri: item.picture.medium }}
                  />
                }
                title={
                  <View>
                    <Text style={style.textview}>{item.name.first} <Text style={style.textview}>{item.name.last}</Text></Text>

                  </View>
                }
                containerStyle={{ borderBottomWidth: 0 }}
                subtitle={item.email}
                rightIcon={
                  <Icon
                    raised
                    name='md-arrow-forward'
                    type='ionicon'
                    color='#517fa4'
                    onPress={()=> {navigate('Second',{item: item})}}
                  />
                }
              />
            }
            
          ></FlatList>
        </List>
      </View>
    );
  }
}

export default Flatlists;

const style = StyleSheet.create({

  textview: {
    fontSize: 20,
    padding: 10
  },
  separate: {
    height: 1,
    width: '84%',
    backgroundColor: '#CED0CE',
    marginLeft: '16%'
  },
  activityindicator: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#CED0CE'
  }
})

