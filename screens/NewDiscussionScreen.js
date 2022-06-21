import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons'; 
import CustomInput from '../componenets/CustomiedInput';
import Categories from '../constants/Categories'; 
import { CATEGORIES }  from '../data/dummydata';
import  SUBCATEGORIES from '../data/dummydata';
import axios from "axios";
import {useQuery, queryClient, useQueryClient } from "react-query";

const setItemHandler = CATEGORIES.map((val, index)=>{
  //console.log(val.name);
  let label,value,newArr; 
  newArr = { label:val.name, value:val.id }
  //console.log(newArr);
  return (newArr);     
}); 


function StartDiscussion({route, navigation}){   
    // All constants needed
    const [inputValue, setInputValue] = useState({
        title:'',
        description:'',
    });

    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputValue((currentInputValue)=>{
                return{ ...currentInputValue,[inputIdentifier]:enteredValue  }
        });
    };
    const [catOpen, setCatOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false); 
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(setItemHandler);

    // const { status, data, error, isFetching } = useQuery('cat', async()=>{
    //   const cats = await axios.get("http://143.244.183.12:4200/categories.json").then((res) => res.data);
    //   return cats;
    // }); 
   
  //   const cats = useQuery("categories", () =>
  //   axios.get(
  //     "http://143.244.183.12:4200/categories.json"
  //   ).then((res) => res.data)
  // );
    
    const subsCategoryval = SUBCATEGORIES.filter((subItem)=>{ 
            return subItem.categoryId.indexOf(value) >= 0 ;  
          });
    const subsCategoryvalItem = subsCategoryval.map((val, index)=>{
              let label,value,SubsArr; 
              SubsArr = {label:val.id, value:val.id }; 
              //console.log(SubsArr); label what is shown not the value 
              return (SubsArr);   
          });
    const [subsValue, setSubsValues] = useState(null);
    const [subsItems, setSubsItems] = useState(subsCategoryvalItem);
    //console.log('subsCategoryvalItem',subsCategoryvalItem);
    const [firstVisible, setFirstVisible] = useState(false);
    const [firstClose, setFirstClose] = useState(false)
    
    const CatOpenHandler = ()=>{
      setCatOpen(true)
      setSubOpen(false)
      setFirstVisible(false)
    }; 
    const SubOpenHandler = ()=>{
      setCatOpen(false),
      setSubOpen(true)  
    }; 
    const closingFirst = ()=>{ setCatOpen(false) };
    const closingSecond = () =>{ setSubOpen(false)};
    //for Enable-Disable button,,,the default will show the author name
    const [anonymous, setAnonymous] = useState(false); 
    const pressingYa = ()=>{
        setAnonymous(true);
        //console.log(anonymous)
    };
    const confirmDiscussion =( ) =>{
        
        let NewDiscuss = {
          
           catName:value, 
           subName:subsValue,
           discName:inputValue.title,
           discDesc:inputValue.description,
           AnonyVal:anonymous,
        }
        console.log(NewDiscuss);
    }

    return(
        <View>
        <Text style={styles.formTitle}>Start A New Discussion</Text>
        <View style={styles.container}>

    <View style={{backgroundColor:'yellow'}}>
    <DropDownPicker
      zIndex={3000}
      zIndexInverse={1000}
      open={catOpen}
      onClose={closingFirst}
      value={value}
      items={items}
      setOpen={CatOpenHandler}
      setValue={setValue}
      setItems={setItems}
      listMode="MODAL"
      style={{
        backgroundColor: "crimson",
      }}
      labelStyle={{
        fontWeight: "bold"
      }}
      textStyle={{
        fontSize: 15,
        color:'orange'
      }}
      containerStyle={{
             margin:16,
             marginTop:20,
             width:'80%',
             justifyContent:'center'}}
    />
   
    <DropDownPicker
      zIndex={2000}
      zIndexInverse={2000}
      open={subOpen}
      value={subsValue}
      items={subsCategoryvalItem}
      setOpen={SubOpenHandler}
      onClose={closingSecond}
      setValue={setSubsValues}
      setItems={setSubsItems}
      listMode="MODAL"
      style={{
        backgroundColor: "crimson",
      }}
      labelStyle={{
        fontWeight: "bold"
      }}
      textStyle={{
        fontSize: 15,
        color:'orange'
      }}
      containerStyle={{
             margin:16,
             marginTop:20,
             width:'80%',
             justifyContent:'center',
             alignItems:'center'}}
    />
    </View>
             <CustomInput 
              label="Title"
              configProps={{
                placeholder:"Title",
                autoCapitalize:'none', 
                onChangeText:inputChangeHandler.bind(this,'title'),
                value:inputValue.title }}     
              />

             <CustomInput 
             style={styles.item}
             label="Description"
             configProps={{
                placeholder:"Descrption",
                autoCapitalize:'none', 
                multiline:true,
                onChangeText:inputChangeHandler.bind(this,'description'),
                value:inputValue.description }}
              />
        
            {/* For Check Icon Anonoymus */}
             <View style={styles.horz}>
             <AntDesign.Button   
                name="checkcircleo" 
                borderRadius= {40}
                size={18} 
                iconStyle={ {
                justifyContent:'center',
                marginRight:"auto" }}
                style={styles.enableButton}
                onPress={pressingYa}
                backgroundColor='orange'
                />
              <Text style={styles.sen}>Show my name</Text>
              </View> 

              <Button title='Add Your Discussion' onPress={confirmDiscussion} /> 
       
        </View>
        </View>
    );     
};

const styles = StyleSheet.create({
    container:{
        padding:16,
       
    },
    formTitle:{
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        marginVertical:15,
    },
    horz:{
        flexDirection:"row",
        margin:13,
        padding:5,

    },
    enableButton:{
      
    },
    sen:{
        marginTop:7,
        fontSize:18,
        fontWeight:'bold'
    }
});

export default StartDiscussion; 