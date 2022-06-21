// this screen to display all discussions related to single subcategory 
// List view with #replies, #likes
import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { DISCUSSIONS } from '../data/dummydata';
import DiscussionsList from '../componenets/DiscussionsList';
import axios from "axios";
import {useQuery} from "react-query";



//`https://143.244.183.12:4200/t/${id}posts/.json`
function SingleSubCategory({route, navigation}){
    //const subcatID  = route.params.subcatID; 
    const {subcatID, subcatName}  = route.params;
    const fetchTopicsRplies = async () => {
        const res = await fetch(`http://143.244.183.12:4200/t/${subcatID}/posts.json`);
           return res.json();
        };
    const response = useQuery("Replies", fetchTopicsRplies);
      
      //if (response.isLoading) return <Text>"Loading..."</Text>;
      //if (response.error) return <Text>"An error has occurred: " + {error.message} </Text>;
      // console.log(response)
      //console.log("NEVER GIVE UP")
      //console.log(response.data.post_stream.posts);
       let displayedDiscussions; 
       if(response.isSuccess){
        displayedDiscussions = response.data.post_stream.posts; 
       }
    //    const displayedDiscussions = response.data.post_stream.posts;

    //I need the filtered list of discussions to be equalled to data in flatlist
    // const displayedDiscussions = DISCUSSIONS.filter((item)=>{
    //     return item.subcategoryId === subcatID ; 
    // });

    // useLayoutEffect(()=>{
    //     navigation.setOptions({
    //         title:subcatName
    //     })
    // },[subcatName, navigation]);

    const renderHandler = (dataItem) => {
        const item = dataItem.item;
        const renderhandlerProps = {
            id:item.id,
            title:item.cooked.replace(/<\/?[^>]+(>|$)/g, ""),
            image:item.image,
            anonymous:item.anonymous,

        };
        console.log(dataItem);
           return(
               <DiscussionsList {...renderhandlerProps} />   
           )
    };
    
   
    return(
        <View>
            {/* <Text>
                Finally,,Here I am {subcatID} which is {subcatName}
            </Text> */}
            <FlatList 
               data={displayedDiscussions}
               keyExtractor={(item) => item.id}
               renderItem={renderHandler}
            />
        </View>
    )
    
};

const styles = StyleSheet.create({

});



export default SingleSubCategory; 