import {Text, View, Pressable, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function CustButton({ name, size, color, onPress}){
    return(
        <Pressable
           //style = {}
           onPress={onPress}
         >
       <Ionicons name={name} size={size} color={color}/>  
       </Pressable>   
    )
};

const styles = StyleSheet.create({
    // buttonStyle : {}, 
    // pressed : {}
})

export default CustButton; 

// import { AntDesign } from '@expo/vector-icons'; 
// <AntDesign name="ellipsis1" size={24} color="black" /> . . .
//import { Feather } from '@expo/vector-icons';
//<Feather name="edit" size={24} color="black" /> edit
//import { MaterialIcons } from '@expo/vector-icons';
//<MaterialIcons name="delete" size={24} color="black" /> delete
//import { FontAwesome5 } from '@expo/vector-icons';
//<FontAwesome5 name="reply" size={24} color="black" /> reply 
//import { MaterialCommunityIcons } from '@expo/vector-icons';
//<MaterialCommunityIcons name="message-reply-outline" size={24} color="black" /> msg
//import { MaterialIcons } from '@expo/vector-icons';
//<MaterialIcons name="report" size={24} color="black" /> report