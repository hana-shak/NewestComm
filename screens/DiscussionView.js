import {View, Text, Image, StyleSheet} from 'react-native';
import { useLayoutEffect} from 'react';
import axios from "axios";
import { useQuery} from "react-query";



function DiscussionView({route, navigation}){

    const {discussionID ,
        discussionTitle,
        discussionImage,
        discussionAnonymous } = route.params;
   // console.log(discussionID)
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:discussionTitle,
            
         } );
    },[discussionTitle,navigation],
     
    );

    return(
        <View>
            
            <Image source={{ uri: discussionImage}}  style={styles.img}/> 
            <Text style={styles.name}> {discussionTitle} </Text>
            
        </View>
    )
};

const styles = StyleSheet.create({
    img:{
        height:100,
        width:'75%',
        margin:16,

    },
    name:{
        fontWeight:'bold',
        fontSize:18,
        margin:16,

    },

})

export default DiscussionView;