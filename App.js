import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import SubCategoryScreen from './screens/SubCategoryScreen';
import SingleSubCategory from './screens/SingleSubCategoryScreen';
import DiscussionView from './screens/DiscussionView';
import MyTabs from './navigation/TabTopNavigation';
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient(); 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
    <StatusBar style='dark' />
    <NavigationContainer >
      <MyTabs />
      {/* <Stack.Navigator
          screenOptions={
            {
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: 'white', // My Home
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }
           }
      >
      <Stack.Screen 
           name='MainCategories' 
           component={CategoryScreen}
           options={{title: 'My home' }}
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
    {/* </Stack.Navigator> */} 
    </NavigationContainer>
   
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container:{}
});
