/*
 * RecommendCardItem.js
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
} from 'react-native'
import { Right, Card, CardItem } from 'native-base'
import StarRating from 'react-native-star-rating'

class RecommendCardItem extends Component {
  static propTypes = {
    imageUri: PropTypes.number.isRequired,
    itemName: PropTypes.string.isRequired,
    itemCreater: PropTypes.string.isRequired,
    itemPrice: PropTypes.string.isRequired,
    saving: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card style={{ marginHorizontal: 5 }}>
        <CardItem style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
          <View style={{ marginRight: 10 }}>
            <Image
              style={{ height: 90, width: 60 }}
              source={this.props.imageUri}
            />
          </View>

          <Right style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', height: 90 }}>
            <Text>
              {this.props.itemName}
            </Text>
            <Text style={{ color: 'grey', fontSize: 11 }}>
              {this.props.itemCreater}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#c4402f' }}>
              {this.props.itemPrice}
            </Text>
            <Text style={{ color: 'grey', fontWeight: '300', fontSize: 11 }}>
              You save <Text>{this.props.saving}</Text>
            </Text>
            <StarRating
              disabled={true}
              maxStar={5}
              rating={this.props.rating}
              starSize={12}
              fullStarColor='orange'
              emptyStarColor='orange'
            />
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default RecommendCardItem
