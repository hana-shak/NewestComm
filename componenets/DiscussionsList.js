import { useState } from 'react';
import {View, Text, StyleSheet, Pressable, Modal, TextInput, Button, Alert} from 'react-native';
import {useNavigation}  from '@react-navigation/native' ;
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function DiscussionsList({id, body, image, anonymous, postNumber}){
    
    const navigation = useNavigation();
    const[bookMarked, setBookMarked] = useState(false); 
    const pressHandler = () => {
        navigation.navigate('Single Discussion',{
            discussionID : id,
            discussionBody:body,
            discussionImage:image,
            discussionAnonymous:anonymous,        
        })  
    };
    

     // Modal Navigation Code
    const replyHandler = () =>{
      // navigation.navigate('Write a Reply',{
      
      // })
      
    };

    const specialMsgHandler = () =>{
         return(
           <View>  
           </View>
         )
    };

    // https://{defaultHost}/t/{id}/bookmark.json
    const bookmarkHandler = () =>{
          return(setBookMarked(true))
    };
    
    const editHandler = () =>{
      navigation.navigate('Edit Topic',{
        discussionID : id,
        discussionBody:body,
      });
    };

    const deleteHandler = () =>{
      return(
        <View> 
        </View>
      )
    };



    return(
      <View style={[styles.mainList]}>
            <Pressable 
                    style={({pressed})=>  [
                          styles.singleItem ,
                          pressed ? styles.buttonPressed : null ,
                          postNumber == 1 ? styles.First : styles.singleItem
                        ]}
                    android_ripple={{color:'#ccc'}}
                    onPress={pressHandler}
               >
               <Text style={styles.title}>{body}</Text>
               <View style={styles.iconContainer}>
               <FontAwesome5  
                    name="reply" 
                    size={24} 
                    color="black" 
                    onPress={replyHandler}
               />    

               <MaterialCommunityIcons 
                       name="message-reply-text" 
                       size={24} 
                       color='black' 
                       onPress={specialMsgHandler}
                       iconStyle={{color:'red'}}
                />    
              {/* if marked or not  */}
              <View>{
               bookMarked ?
                 <FontAwesome 
                 name="bookmark" 
                 size={24} 
                 color="black"
                 onPress={()=>{setBookMarked(false)}}
                 />
                :
              <FontAwesome 
              name="bookmark-o" 
              size={24} 
              color='black'
              onPress={bookmarkHandler} 
               /> 
               } 
              </View>
             
                {/* Update form */}
               <AntDesign 
                   name="edit" 
                   size={24} 
                   color="black"
                   onPress={editHandler} 
                /> 

                {/* Delete Topic */}
               <AntDesign 
                   name="delete" 
                   size={24} 
                   color="black"
                   onPress={deleteHandler} 
                />  
             
               
               </View>
            </Pressable>   
           
      </View>
    )
};

const styles = StyleSheet.create({
      mainList:{
          flex:1,
          padding:16,
          
      },
      singleItem:{
          backgroundColor:'yellow',
          borderColor:'red',
          padding:7,
          borderWidth:2,
          borderRadius: 18,
          
      },
      title:{
          fontWeight:'bold',
          fontSize:18,

      },
      buttonPressed:{
          opacity:0.5,
      },
      First: {
          backgroundColor:"white",
          borderColor:'green'
      },
      iconContainer:{
        // backgroundColor:'orange',
        display:'flex',
        flexDirection:'row' ,
        justifyContent:'space-between',
        margin:'2%', 
      },
      input: {
        height: 300,
        margin:16,
        padding:16,
        borderWidth: 2,
        width:'80%', 
      },
      testingIconsStyling:{
        color:'red',
      
        
      }
      
});

export default DiscussionsList;