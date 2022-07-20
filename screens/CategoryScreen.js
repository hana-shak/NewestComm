import { FlatList , View, Text} from "react-native";
// import { CATEGORIES } from '../data/dummydata';
import CategoryGridTile from '../componenets/CategoryGridTile';
import useCategories  from '../utilis/useCategoriesRQ';



function CategoryScreen({ navigation}){    
  const {isLoading, error, isSuccess, data } = useCategories(); 

  if(isLoading) return <Text>"Loading..."</Text>;

  if(error) return <Text>"An error has occurred: " + {error.message} </Text>;
   
  //console.log('catQu',catQu);
  let arr; 
  if(isSuccess){
    arr = data.category_list['categories'];
    //console.log(data);
  };
 
  
    function ItemCategoryRender(dataItem){
        function pressHandler (){
             navigation.navigate('All Topics of Category', {
                catID : dataItem.item.id,
                catName : dataItem.item.name,
                catSlug : dataItem.item.slug, 
             })
              //console.log("dataItem.item",dataItem.item)
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