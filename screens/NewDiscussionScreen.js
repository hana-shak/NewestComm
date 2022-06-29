import { View, Text, StyleSheet, Button , Alert} from "react-native";
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
    const[isLoadingData,setIsLoadingData]=useState(false);
    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputValue((currentInputValue)=>{
                return{ ...currentInputValue,[inputIdentifier]:enteredValue  }
        });
    };
    const [catOpen, setCatOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false); 
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(setItemHandler);

    // useEffect=(()=>{ 
    //   setIsLoadingData(false);
    //   fetch('http://143.244.183.12:4200/categories.json') 
    //   .then(res => { if(res.ok){ return res.json() } throw res; }) 
    //   .then(data=>{ setItems(data); {CorrectJSON(data),()=>{ setIsLoadingData(true); }} }) 
    //   .catch(error=>{ console.log(error); }) },[]); 
   
   
   
    //   const cats = useQuery("categories", () =>
    //   axios.get(
    //     "http://143.244.183.12:4200/categories.json"
    //   ).then((res) => res.data)
    // );
    
    const CatOpenHandler = ()=>{
      setCatOpen(true)
      setSubOpen(false)
    }; 
    
    const closingFirst = ()=>{ setCatOpen(false) };
    
    const confirmDiscussion =() =>{
     let NewDiscuss={
      catName:value, 
      discName:inputValue.title,
      discDesc:inputValue.description,
     }; 
     //console.log(NewDiscuss);
      
      if(
        //  (value === "" || undefined || null) ||
        //  (subsValue === "" || undefined || null) ||
        //  (inputValue.title === "") ||
        //  inputValue.description == "")

         (value == null || undefined) ||
         (inputValue.title == false || (inputValue.title.length <= 6) ) ||
         inputValue.description == false || (inputValue.description <= 50)){
            Alert.alert('Empty Fields', 'Make sure all fields filled with right amount of words', 
                   [{text:'Ok'}]) 
          }else{
            NewDiscuss = {
              catName:value, 
              discName:inputValue.title,
              discDesc:inputValue.description,
           }
           
           console.log(NewDiscuss); 
           //post request to create new post 
          }
         
    }

    // const CorrectJSON=(dataJSON)=>{ 
    //   let newArrObj 
    //   if(dataJSON){ 
    //     dataJSON.map((ele)=>{
    //       newArrObj.push({ "label":ele.slug, "value":ele.value })
    //      }).then(setItems(newArrObj)) } }

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