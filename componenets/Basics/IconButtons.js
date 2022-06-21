import {Text, View, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({ name, size, color, onPress}){
    return(
        <Pressable
           style = {}
           onPress={onPress}
         >
       <Ionicons name={name} size={size} color={color}/>  
       </Pressable>   
    )
};

const styles = StyleSheet.create({
    buttonStyle : {}, 
    pressed : {}
})

export default IconButton; 