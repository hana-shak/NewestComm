import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../screens/CategoryScreen';
import SubCategoryScreen from '../screens/SubCategoryScreen';
import SingleSubCategory from '../screens/SingleSubCategoryScreen';
import DiscussionView from '../screens/DiscussionView';

const Stack = createNativeStackNavigator();

function StackNavigation(){
  return(
    <Stack.Navigator 
    
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: 'white', // My Home
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerShown:false,
     }
     }
>

<Stack.Screen 
     name='MainCategories' 
     component={CategoryScreen}
     options={{title: 'My home' ,  headerShown:false}
    }
     
/>
<Stack.Screen 
     name='Subs' 
     component={SubCategoryScreen}
     

    //  options={({ route, navigation }) => { 
    //    const catID  = route.params.categoryID;
    //    return {title:catID,} ;
    //  }}        //ASK HASAN DID NOT WORK 
/>

<Stack.Screen
     name='Single Sub'
     component={SingleSubCategory}
  />

<Stack.Screen
     name='Single Discussion'
     component={DiscussionView} />
{/* <CategoryScreen />  */}
</Stack.Navigator>

  )
};

export default StackNavigation;