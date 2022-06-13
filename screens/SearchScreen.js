import { useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { useQuery} from "react-query";




function Search(){
  const {isLoading, error, data, isFetching, isSuccess } = useQuery("repoData", () =>
    axios.get(
      "http://143.244.183.12:4200/categories.json"
    ).then((res) => res.data)
  );

  if (isLoading) return <Text>"Loading..."</Text>;

  if (error) return <Text>"An error has occurred: " + {error.message} </Text>;

 
   
    //console.log( data.map((item)=> {return <Text> {item}</Text>}))
    //console.log("try sth new 9")
    
        // console.log(arr)
        // for(const key in data ){
          const arr = data.category_list['categories'];
    return(
      
      //console.log('in return' , arr),
      <View>
             <Text>Hey PPL</Text>
            {arr.map((item, index)=>{return <Text key={index}>{item.name} , {item.id} </Text>
                //  <Text>{item.id.}</Text>
            })}       
      </View>
   
        
    )
  
};

export default Search;