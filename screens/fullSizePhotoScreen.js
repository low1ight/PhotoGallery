import React from 'react'
import {View, Image, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const FullSizePhotoScreen = ({navigation,route}) => {
    return (
        <View>
            <Image source = {{uri:route.params.imgUrl}}
                   style = {{width:windowWidth,height:windowHeight}}/>
        </View>
    )
}