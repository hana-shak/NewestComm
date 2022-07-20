import { useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View,
       Text, 
       TouchableWithoutFeedback ,
       StyleSheet, 
       Pressable, 
       Modal, 
       TextInput, 
       Button, 
       Alert
} from 'react-native'
import { CATEGORIES }  from '../data/dummydata';
import  SUBCATEGORIES from '../data/dummydata';
import { AntDesign } from '@expo/vector-icons';
import Categories from '../constants/Categories'
import axios from "axios";
import { useQuery} from "react-query";
import CustomPicker from '../componenets/Basics/CustomPicker'

// const setItemHandler = CATEGORIES.map((val, index)=>{
//   //console.log(val.name);
//   let label,value,newArr; 
//   newArr = { label:val.name, value:val.id }
//   //console.log(newArr);
//   return (newArr);     
// });
 
// const subsCategoryval = SUBCATEGORIES.filter((subItem)=>{ 
  //         return subItem.categoryId.indexOf(value) >= 0 ;  
  //       });


  // const subsCategoryvalItem = subsCategoryval.map((val, index)=>{
  //           let label,value,SubsArr; 
  //           SubsArr = {label:val.id, value:val.id }; 
  //          // console.log(SubsArr);
  //           return (SubsArr);   
  //       });

  
// if (catQu.isLoading) return <Text>"Loading..."</Text>;
// if (catQu.error) return <Text>"An error has occurred: " + {error.message} </Text>;
// const arr = catQu.data.category_list['categories']
//console.log('DIYWL')


function Profile(){
  

  return (
    <View>
      <Text>
        This is Profile Screen WOW == Usder Authentication Section
       Categories()
      </Text>
      <Button title="Press Me" onPress={()=>{}} />
      <CustomPicker />


  </View>
  )
};

const styles = StyleSheet.create({
  

});


 
 export default Profile; 