import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import {wp,hp} from '../responsive'
const HeaderRight = () => {
    return (
      <Image 
      source={require('../assets/icons/bell.png')}
      resizeMode="contain"  style={styles.bell}/>
    )
}

export default HeaderRight

const styles = StyleSheet.create({
    bell:{
        width:wp(20)
    }
})
