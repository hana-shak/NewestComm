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
  
  const[modalVisible, setModalVisible] = useState(false);
   
  const pressHandler = ()=>{
    setModalVisible(true)
  }

  return (
    <View>
      <Text>
        This is Profile Screen WOW == Usder Authentication Section
       Categories()
      </Text>
      <Button title="Press Me" onPress={pressHandler} />
    

{/* // Modal Testing and new try */}  
 <View style={styles.screen}>
{modalVisible ? 
    <Modal
         presentationStyle='fullScreen'
         transparent={false}
         visible={modalVisible}
         style={styles.modalStyle}
         onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                this.setModalVisible(!modalVisible);
              
      }}
      >
       <View>
         
         <View style={styles.inputStyling}>
           <TextInput 
             placeholder="useless placeholder"
             style={styles.texting}
             keyboardAppearance='default'
             autoCapitalize='none'
            //  onChangeText={inputHandler}
            //  value={enterVal}
           />
           <View style={styles.buttonContainer}>
           <Button  title="Reply" onPress={console.log('Replied')}/>
           <Button  title="Cancel" onPress={console.log('Cancelled')}/>
           </View>
         </View>
       </View>
      </Modal>  :  
     null
    }
  </View>   
  {/* Modal Code Finished */}

  </View>
  )
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    marginBottom:20, 
   // alignItems:'center',
},
  modalStyle:{
    margin:30,
    
    

  },
  inputStyling:{
    margin:30,
    padding:16,
    // height:'80%',
    // width:'80%',
    borderWidth: 1,
  },
  texting:{
    margin:3,
    height:'80%',
    width:'95%',
    borderWidth: 1,
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row' ,
    justifyContent:'space-between',
    margin:'2%', 
  }
});


 
 export default Profile; 