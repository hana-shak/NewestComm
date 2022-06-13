import {View, Text, StyleSheet} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation}  from '@react-navigation/native' ;



function DiscussionsList({id, title, image, anonymous}){
      
    const navigation = useNavigation();

    const pressHandler = ()=>{

        navigation.navigate('Single Discussion',{
            discussionID : id,
            discussionTitle:title,
            discussionImage:image,
            discussionAnonymous:anonymous,        
        })   
    };




    return(
        <View style={styles.mainList}>
            <Pressable 
                    style={({pressed})=>  [styles.singleItem , pressed ? styles.buttonPressed : null  ]}
                    android_ripple={{color:'#ccc'}}
                    onPress={pressHandler}
               >
               <Text style={styles.title}>{title}</Text>
               
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
      }
});

export default DiscussionsList;