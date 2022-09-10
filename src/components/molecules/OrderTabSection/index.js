import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: 0.3,
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const InProgres = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        ratings={4}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={5}
        price="50.000"
        name="Soup Bumil"
      />
      <ItemListFood
        ratings={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={5}
        price="50.000"
        name="Soup Bumil"
      />
      <ItemListFood
        ratings={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={5}
        price="50.000"
        name="Soup Bumil"
      />
      <ItemListFood
        ratings={3}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={5}
        price="50.000"
        name="Soup Bumil"
      />
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        ratings={3}
        image={FoodDummy4}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={5}
        price="50.000"
        name="Soup Bumil"
        date="jun 12, 14:00"
      />
      <ItemListFood
        ratings={3}
        image={FoodDummy1}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={5}
        price="50.000"
        name="Soup Bumil"
        date="jun 12, 14:00"
        status="Cancel"
      />
      <ItemListFood
        ratings={3}
        image={FoodDummy2}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={5}
        price="50.000"
        name="Soup Bumil"
        date="jun 12, 14:00"
        status="Cancel"
      />
      <ItemListFood
        ratings={3}
        image={FoodDummy3}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={5}
        price="50.000"
        name="Soup Bumil"
        date="jun 12, 14:00"
        status="Cancel"
      />
    </ScrollView>
  );
};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Order'},
  ]);

  const renderScene = SceneMap({
    1: InProgres,
    2: PastOrder,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: Dimensions.get('window').width}}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
