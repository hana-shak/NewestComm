import  React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View,
       Text, 
       TouchableWithoutFeedback ,
       StyleSheet, 
       Pressable, 
       Modal, 
       TextInput, 
       Button, 
       Alert,
       Image,
       TouchableOpacity
} from 'react-native'
import { CATEGORIES }  from '../data/dummydata';
import  SUBCATEGORIES from '../data/dummydata';
import { AntDesign } from '@expo/vector-icons';
import Categories from '../constants/Categories'
import axios from "axios";
import { useQuery} from "react-query";
import CustomPicker from '../componenets/Basics/CustomPicker'
import useCategories from '../utilis/useCategoriesRQ';


export type testing = {
    id ?: string,
    userName : string, 
    userImg ?: any, 
    email : string,
}; 


function Profile(){
  return(
    <View style={styles.mainContainer}>
     
      <View style={styles.definitionPart}>
        
        <Image 
           style={styles.userImg}
           source={require('../assets/usericonimageorange.jpeg')}
        />
       
        
        <View  style={styles.textContainer}>
        <Text>Samera </Text>
        <Text>Samera@gmail.com</Text>
        </View>
      

      </View>

      {/* List Posts, update, Settings, ContactUs */}
      <View>

      </View>

    </View> 

)

};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
   
  },
  definitionPart:{
    color:'black',
    backgroundColor:'yellow',
    width:'85%',
    height:250,
    margin:25,
    padding:20,
  },
  
  userImg:{
    width:165,
    height:165,
    borderRadius:500,
    borderWidth:3,
    borderColor:'red',
    marginHorizontal:'20%',
  },
  textContainer:{
    fontWeight:'bold',
    margin:5,
    alignItems:'center'

  }
});
 
 export default Profile; 