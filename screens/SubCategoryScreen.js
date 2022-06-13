import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SubCategoryList from '../componenets/SubCategoryList';
import  SUBCATEGORIES  from '../data/dummydata';
import axios from "axios";
import { useQuery} from "react-query";

function SubCategoryScreen ({route, navigation}){
  const {catID, catName, catSlug} = route.params;  
  //console.log(catID);
  //List Topics
  const fetchTopics = async () => {
    const res = await fetch(`http://143.244.183.12:4200//c/${catSlug}/${catID}.json`);
     return res.json();
  };

  const Subs = useQuery('fetchTopics', fetchTopics);
  
  

  //const response = useQuery("Topics", fetchTopics);
  let arrOfTopics; 
  if (Subs.isSuccess) {
    arrOfTopics = Subs.data.topic_list.topics; 
  }
  
  //console.log("fetchTopics.data.topic_list.topics" , fetchTopics.data.topic_list.topics)
//  const EEE =  eee.map((item) => {<Text>{item}</Text>}); 
//  console.log(EEE)
  if (Subs.isLoading) return <Text>"Loading..."</Text>;
  if (Subs.error) return <Text>"An error has occurred: " + {Subs.error.message} </Text>;
 //console.log("NEVER GIVE UP")
 //console.log(response);
 //console.log(response.data.topic_list.topics);
 
  //const arrTopics = response.data.topic_list.topics;  //array of objects 

     const displayedSubs =  arrOfTopics.filter((subItem)=> {
       return subItem.category_id == catID ;
     } );

    //  useLayoutEffect(()=> {
    //   //const CategoryName = SUBCATEGORIES.find((category)=> category.id === catID).name;
    //   //DID NOT WORK USING .name like what he used - ask hasan
    //    navigation.setOptions({
    //     title : catName
    //    })
    //  },[catName, navigation]);

     

     const renderSubItem = (dataItem) => {
      const item = dataItem.item; 
      const  subcategoryProps = {
        id:item.id,
        name: item.title,
        ImageURI: item.image,
        description: item.description,
      };

      return( <SubCategoryList  
                   { ...subcategoryProps} 
                    /> )
     };

    return(
        <View> 
            {/* <Text>
              This {catName}, it's ID is {catID}
            </Text> */}
           
            <FlatList
               data={displayedSubs}
               keyExtractor={(item) => item.id}
               renderItem={renderSubItem}
               
            />
           
           
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:16
    }
})

export default SubCategoryScreen;