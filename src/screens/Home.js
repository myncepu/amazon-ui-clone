/*
 * Home.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native'
import { Icon, Item, Input, Card, CardItem } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
import RecommendCardItem from '../components/RecommendCardItem'

class Home extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >
        Home
      </Text>
    ),
    headerLeft: (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Icon
            name="md-menu"
            style={{  color: 'white', marginRight: 15 }}
            onPress={() => {
              navigation.openDrawer()
            }}
          />
        </TouchableOpacity>
        <FAIcon name="amazon" style={{ fontSize: 20, color: 'white' }} />
      </View>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10, padding: 10 }}>
        <Icon name="md-cart" style={{ color: 'white' }} />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#3a455c',
    },
  })

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
          <TouchableOpacity>
            <View style={{ width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>

              <Text style={{ fontSize: 12 }}>Shop by</Text>
              <Text style={{ fontWeight: 'bold' }}>Category</Text>
            </View>
          </TouchableOpacity>

          <View style={{ flex: 1, height: '100%', marginLeft: 5, justifyContent: 'center' }}>
            <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4 }}>
              <Icon name="search" style={{ fontSize: 20, paddingTop: 5 }} />
              <Input placeholder="Search" />
            </Item>
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={{ backgroundColor: '#d5d5d6', marginTop: 5 }}>
            <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }}>
              <Text>Hello, Varun Nath</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>Your Account </Text>
                <Icon name="arrow-forward" style={{ fontSize: 18 }} />
              </View>
            </View>
          </View>

          <Swiper autoplay={true} style={{ height: 100 }}>
            <View style={{ flex: 1 }}>
              <Image
                source={require('../assets/swiper_2.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require('../assets/swiper_3.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require('../assets/swiper_2.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
              />
            </View>
          </Swiper>

          <Card>
            <CardItem header>
              <Text>Your Recommendation</Text>
            </CardItem>
            <RecommendCardItem
              itemName='You can heal your life'
              itemCreater='Louise Hay'
              itemPrice='$10'
              rating={5}
              saving='2.5'
              imageUri={require('../assets/recommended_1.jpg')}
            />
            <RecommendCardItem
              itemName='You can heal your life'
              itemCreater='Louise Hay'
              itemPrice='$10'
              rating={4.3}
              saving='2.5'
              imageUri={require('../assets/recommended_2.jpg')}
            />
            <RecommendCardItem
              itemName='You can heal your life'
              itemCreater='Louise Hay'
              itemPrice='$10'
              rating={5}
              saving='2.5'
              imageUri={require('../assets/recommended_3.jpg')}
            />
          </Card>
        </ScrollView>
      </View>
    )
  }
}

export default Home
