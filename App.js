import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { Icon } from 'native-base'

import Home from './src/screens/Home'
import Explore from './src/screens/Explore'
import Setting from './src/screens/Setting'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
  }
})

const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
  }
})

const SettingStack = createStackNavigator({
  Setting: {
    screen: Setting,
  }
})
const CustomDrawerContentComponent = (props) => {
  return (
    <View>
      <SafeAreaView
        style={{ backgroundColor: '#3a455c', height: 90 }}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View
          style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10, justifyContent: 'flex-start' }}
        >
          <Icon name='person' style={{ color: 'white' }} />
          <Text style={{ marginLeft: 10, fontSize: 22, color: 'white', fontStyle:'italic' }}>
            Hello, Yan
          </Text>
        </View>
      </SafeAreaView>
      <DrawerItems {...props} />
    </View>
  )
}

const AppDrawerNavigator = new createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Explore: {
    screen: ExploreStack,
  },
  Setting: {
    screen: SettingStack,
  }
}, {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: '#3a455c',
    itemsContainerStyle: {
      marginVertical: 0,
      borderBottomWidth: 0.5,
      borderBottomColor: '#3a455c',
    },
    iconContainerStyle: {
      opacity: 1
    },
  }
})

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    )
  }
}
