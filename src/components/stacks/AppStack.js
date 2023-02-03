import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import TitleScreen from "../screens/TitleScreen";
import MoviesScreen from "../screens/MoviesScreen";
import TvScreen from "../screens/TvScreen"
import Header from "../layout/Header";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={{
                headerShown: false
            }}
            />

            <Stack.Screen 
            name='Title'
            component={TitleScreen}
            options={({ route }) => ({
                title:route.params.title,
                headerBackTitle: 'Back to List',
                headerTintColor: '#A4133C'
            })}
            />

            <Stack.Screen 
            name='Movies'
            component={MoviesScreen}/>

            <Stack.Screen
            name='Tv'
            component={TvScreen}
            />

            <Stack.Screen 
            name='header'
            component={Header}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}


// const Tab = createMaterialTopTabNavigator()

// const AppStack = () => {
//     return(
//     <NavigationContainer>
//         <Tab.Navigator>
//             <Tab.Screen
//             name='Index'
//             component={IndexScreen}
//             />

//             <Tab.Screen 
//             name='Title'
//             component={TitleScreen}
//             />

//             <Tab.Screen 
//             name='Movies'
//             component={MoviesScreen}
//             />

//             <Tab.Screen 
//             name='Tv'
//             component={TvScreen}
//             />
//         </Tab.Navigator>
//     </NavigationContainer>
//     )
// }

export default AppStack