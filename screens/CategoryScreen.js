import { FlatList , View, Text} from "react-native";
// import { CATEGORIES } from '../data/dummydata';
import CategoryGridTile from '../componenets/CategoryGridTile';
import axios from "axios";
import { useQuery} from "react-query";


function CategoryScreen({ navigation}){    
  const catQu = useQuery("repoData", () =>
    axios.get(
      "http://143.244.183.12:4200/categories.json"
    ).then((res) => res.data)
  );

  if(catQu.isLoading) return <Text>"Loading..."</Text>;

  if(catQu.error) return <Text>"An error has occurred: " + {catQu.error.message} </Text>;
   
  //console.log('catQu',catQu);
  let arr; 
  if(catQu.isSuccess){
    arr = catQu.data.category_list['categories'];
  };
 
  // const arr = catQu.data.category_list['categories']
  //const arr = data.category_list['categories']; 
  //console.log(arr)
  
  //  if(isSuccess){
  // const arr = data.category_list['categories'];
  //   // console.log(arr)      
  // {arr.map((item, index)=>{return <Text key={index}>{item.name} , {item.id} </Text> })}   
  // }
    function ItemCategoryRender(dataItem){
        function pressHandler (){
             navigation.navigate('Subs', {
                catID : dataItem.item.id,
                catName : dataItem.item.name,
                catSlug : dataItem.item.slug, 
             })
            //  console.log(dataItem.item.color)
         };
        return(<CategoryGridTile 
                    name={dataItem.item.name} 
                    color={dataItem.item.color}
                    onPress={pressHandler}
                    />
                    );      
    }
    
    return <FlatList
                //data={CATEGORIES}
                data={arr}
                keyExtractor={(item) => item.id}
                renderItem={ItemCategoryRender}
                numColumns={2}                
     />;
    
};

export default CategoryScreen; 