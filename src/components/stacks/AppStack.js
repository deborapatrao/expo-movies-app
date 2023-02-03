import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import TitleScreen from "../screens/TitleScreen";
import MoviesScreen from "../screens/MoviesScreen";
import TvScreen from "../screens/TvScreen"

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='Movies'
            component={TvScreen}
            options={{
                title:'Movies App',
                headerStyle: {
                    backgroundColor:'#800F2F'
                },
                headerTitleStyle: {
                    color: '#fff'
                }
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
//         </Tab.Navigator>
//     </NavigationContainer>
//     )
// }

export default AppStack