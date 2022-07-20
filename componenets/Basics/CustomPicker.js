//For Wednesday Reusable dropdown picker 
import { Text,
         View, 
         Pressable, 
         StyleSheet,
         FlatList,
         TouchableOpacity
        } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import useCategories from '../../utilis/useCategoriesRQ';

const CustomPicker = () =>{
    // const [arr, arrSetValues] = useState({});
    const [selectedId, setSelectedId] = useState(null);
    const [pressedArrow, setPressedArrow] = useState(false); 
    //Getting data directly from query
    const {isLoading, error, isSuccess, data } = useCategories(); 
    
    let arrCat; 
      if(isSuccess){
        arrCat = data.category_list['categories']; 
       }; 

    console.log(pressedArrow); 
    const pressingArrow = () => { 
         return setPressedArrow(true)
    }
    console.log('after prressing'+pressedArrow); 
    
    const renderItem = (dataItem) => {
        return (
            <TouchableOpacity>
               <Text>
                   {dataItem.item.name}
               </Text>
            </TouchableOpacity>
        );
      };

      

    return <View>
            <Pressable 
               onPress={console.log("pressed the pressable")}
               style={styles.container}>
                
                <View style={styles.downArrow}>
                <MaterialIcons 
                    name="arrow-drop-down" 
                    size={24} 
                    color="black" 
                    onPress={pressingArrow}
                />
                </View>   
            </Pressable>
            <View>
                {pressedArrow && isSuccess ? 
                
                <FlatList 
                data={arrCat}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
             />
                : 
                null
                }
            </View>
          </View>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        padding:13,
        margin:20,
    },
    downArrow:{
        alignItems:'flex-end'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
        color : 'white'
      },
      
}); 

export default CustomPicker; 
