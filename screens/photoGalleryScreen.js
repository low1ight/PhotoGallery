import React from 'react';
import {View,Image, ScrollView, Text, Button, StyleSheet} from 'react-native'
import {connect} from "react-redux";
import {useEffect} from 'react'
import {getPhoto} from "../redux/photoReducer";
import PhotoItem from "../component/photoItem";

const PhotoGalleryScreen = (props) => {

    useEffect(() => {
        function fetchData(){
            props.getPhoto()
        }
        fetchData()
    },[]);

    const goToPhoto = (imgUrl) => {
        props.navigation.navigate('Photo',{ imgUrl })

    };
    if(props.isFetching) return <View style={styles.container}><Text style={styles.text}>Loading...</Text></View>;

    return (
        <View style={styles.container}>
            {!props.photo  ?
            <View>
                <Text>Whoops.... network error</Text>
                <Text style={{textAlign:'center',fontWeight:'bold',color:'blue',...styles.text}} onPress={() => props.getPhoto()}>Reload</Text>
            </View>:
            <ScrollView>
                    {props.photo.map(item =>
                        <PhotoItem goToPhoto={goToPhoto}
                                   key={item.id}
                                   user={item.user.username}
                                   img={item.urls.regular}
                                   description={item.alt_description}/>)}
                </ScrollView>
        }
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight:'bold',
        fontSize:20
    },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

const MapStateToProps = (state) => {
    return {
        photo:state.photoPage.photo,
        isFetching:state.photoPage.isFetching
    }
};



export default connect(MapStateToProps,{getPhoto})(PhotoGalleryScreen);
