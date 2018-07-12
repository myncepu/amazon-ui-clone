/*
 * Setting.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React, { Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { Icon } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'

class Setting extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }} >
        Setting
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting</Text>
      </View>
    )
  }
}

export default Setting
