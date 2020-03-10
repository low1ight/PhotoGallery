import React from 'react'
import {View,TouchableOpacity,Dimensions, StyleSheet,Text, Image} from 'react-native'



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PhotoItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.goToPhoto(props.img)} style={styles.container}>
            <View>
                <Text style={styles.authorNameText}>{props.user}</Text>
                <Image source = {{uri:props.img}}
                       style = {{width:windowWidth,height:windowHeight / 2}}/>
            </View>
           <Text style={styles.description}>{props.description}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFF0F1',
        marginTop:10,
        borderStyle:'solid',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.50)'
    },
    imgContainer: {
        position:'relative'
    },
    authorNameText: {
        color:'white',
        fontWeight:'bold',
        position: 'absolute',
        zIndex:100,
        left:5,
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10,
    },
    description: {
        padding:5,
        fontWeight:'bold',
        opacity:0.9

    }


});

export default PhotoItem