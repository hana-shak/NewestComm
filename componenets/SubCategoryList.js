import {View, Text, StyleSheet, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useNavigation}  from '@react-navigation/native' ;



function SubCategoryList({ id ,name , ImageURI , description}){
    
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate(
          'Single Sub', {
            subcatID : id,
            subcatName : name,
            }
        )
        };

    return(
        <View style={styles.mainList}>
            <Pressable 
                   style={({pressed})=>  [styles.singleItem , pressed ? styles.buttonPressed : null  ]}
                   android_ripple={{color:'#ccc'}}
                   onPress={pressHandler}
                   >
           
           
            <Image source={{ uri : ImageURI }} style={styles.image} />
            
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.des}>
                {description}
            </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    mainList:{
          flex:1, 
          padding:16,
          margin:16,
          height:300,
          maxHeight:660,
          borderRadius:8,
          elevation:8,
          shadowColor:'black',
          shadowOpacity:0.35,
          shadowOffset:{height:2, width:0},
          shadowRadius:8,
          backgroundColor:'white',
          overflow: Platform.OS === 'android' ? 'hidden' : 'visible',


    },
    singleItem:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
    },
    name:{
        fontWeight:'bold',
        fontSize:18,
        margin:5,

    },
    image:{
        width:200,
        height:120,
        padding:5,
    },
    buttonPressed:{
        opacity:.35,
    },
    des:{
        height:170,
    }

})
export default SubCategoryList; 