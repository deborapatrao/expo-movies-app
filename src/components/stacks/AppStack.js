import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import TitleScreen from "../screens/TitleScreen";
import MoviesScreen from "../screens/MoviesScreen";
import TvScreen from "../screens/TvScreen"
import Header from "../layout/Header";


const Tab = createMaterialTopTabNavigator()

const AppStack = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: { textTransform: 'none', fontSize: 14.5  },
                tabBarActiveTintColor: '#A4133C',
                tabBarIndicatorStyle: {
                    backgroundColor: '#A4133C',
                    height: 3,
                }
        }}>
            <Tab.Screen
            name='Index'
            component={IndexScreen}
            />

            {/* <Tab.Screen 
            name='Title'
            component={TitleScreen}
            /> */}

            <Tab.Screen 
            name='Movies'
            component={MoviesScreen}
            />

            <Tab.Screen 
            name='Tv'
            component={TvScreen}
            />
        </Tab.Navigator>

    )
}

export default AppStack