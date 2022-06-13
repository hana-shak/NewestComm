//  const useGetFetchQuery = (name) => {
//   const queryClient = useQueryClient();
//   return queryClient.getQueryData(name);
// };
// const xxx = useGetFetchQuery('repoData')
//   //console.log('wwwwwwwwww',xxx.category_list['categories']);

 
     
  // const cats = useQuery("categories",() => 
  //         axios.get(
  //           'http://143.244.183.12:4200/categories.json'
  //         ).then((res) => res.data)      
  //   );
  //   let arrOfCategories = [{label:'choose One only', value:'choose One only'}] ; 
  //  //const [updateCats, setupdateCats] = useState();

  //  let updateCats;
  //   if(cats.isSuccess){
  //     updateCats = cats.data.category_list['categories'] 
  //     //console.log('5555cats.data.category_list.categories',cats.data.category_list['categories']); 
  //   };
    //console.log([{...arrOfCategories,...updateCats}])
    // const setItemHandler = arrCate.data.category_list['categories'].map((val, index)=>{
    //    //console.log(val.name);
    //    let label,value,newArr; 
    //    newArr = { label:val.slug, value:val.id }
    //    //console.log(newArr);
    //    return (newArr);     
    //    });

  //console.log(cats.status,setItemHandler);

  
     
    //const test = navigation.
   

     //For SubCategories
    // const fetchSubTopics = async () => {
    //     const res = await fetch(`http://143.244.183.12:4200/c/5/${value}.json`);
    //      return res.json();
    //   };
    //  const subCategories = useQuery("SubsTopics", fetchSubTopics);
    // // console.log(response)
    // let arrOFSubs; 
    // if(subCategories.isStale || subCategories.isLoading || subCategories.isRefetching){
    //   arrOFSubs = [];
    // }else{
    //   arrOFSubs = subCategories.data; 
    //   //console.log(arrOFSubs)
    // };
    // const displayedSubs =  SUBCATEGORIES.filter((subItem)=> {
    //   return subItem.category_id == value ;
    // } );



// const setItemHandler = CATEGORIES.map((val, index)=>{
//   //console.log(val.name);
//   let label,value,newArr; 
//   newArr = { label:val.name, value:val.id }
//   //console.log(newArr);
//   return (newArr);     
// }); 