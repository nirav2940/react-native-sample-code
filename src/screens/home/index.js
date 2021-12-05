import React from 'react';
import {View, Image, Text, Dimensions, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/button';
import logOut from './action';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import {wp, hp, fp, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../responsive';
import Ripple from 'react-native-material-ripple';

const HomeScreen = ({navigation, logOut}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{height: hp(300)}}>
        <Carousel
          autoplay={true}
          data={[
            {
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUTnBavmWEyuUU6uwdC6ZO9OhoqFllDbsng&usqp=CAU',
            },
            {img: 'https://in.all.biz/img/in/catalog/29689.jpeg'},
            {
              img: 'https://img3.exportersindia.com/product_images/bc-full/2019/10/6680838/agro-products-1570366921-5107031.jpg',
            },
          ]}
          renderItem={({item, index}) => (
            <Image
              source={{uri: item.img}}
              resizeMode="contain"
              style={{
                padding: wp(10),
                width: '100%',
                height: hp(300),
              }}
            />
          )}
          loop={true}
          autoplayInterval={3000}
          sliderWidth={wp(400)}
          itemWidth={SCREEN_WIDTH}
        />
      </View>
      <View style={{margin: hp(5)}}>
        <Text style={{fontSize: fp(20),marginLeft:5, color: '#000', marginBottom: hp(10)}}>
          Seeds
        </Text>
        <View
          style={{
            width:'100%',
            justifyContent:'space-around',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
{
  [1,2,3,4,5].map(()=>{
    return (
      <View
        style={{
          flexGrow:1,
          height: hp(250),
          position: 'relative',
          justifyContent: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: fp(10),
          alignItems: 'center',
        margin:5,
          // marginRight: wp(10),
         
        }}>
        <Image
          resizeMode="contain"
          resizeMethod="scale"
          source={require('../../assets/icons/heart.png')}
          style={{
            height: hp(20),
            width: wp(20),
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        />
        <Image
          resizeMode="contain"
          resizeMethod="scale"
          source={require('../../assets/images/seed-1.png')}
          style={{height: hp(150), width: wp(150)}}
        />
        <Text
          style={{
            color: '#000000',
            opacity: 0.5,
            fontWeight: 'bold',
            fontSize: fp(16),
            marginBottom: hp(3),
          }}>
          Peanuts
        </Text>
        <Text
          style={{
            color: '#000000',
            marginBottom: hp(3),
            fontWeight: 'bold',
            fontSize: fp(18),
          }}>
          $ 5
        </Text>
        <Ripple
          style={{
            height: hp(30),
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            backgroundColor: '#ffa51e',
          }}>
          <Text style={{color: '#000'}}>Buy Now</Text>
        </Ripple>
      </View>
    )
  })
}
      
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => ({
  logOut: callback => dispatch(logOut(callback)),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
