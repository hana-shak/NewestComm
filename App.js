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
    </NavigationContainer> 
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container:{}
});
