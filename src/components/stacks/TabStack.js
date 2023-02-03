import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import TitleScreen from "../screens/TitleScreen";
import MoviesScreen from "../screens/MoviesScreen";
import TvScreen from "../screens/TvScreen"
import Header from "../layout/Header";


const Tab = createMaterialTopTabNavigator()

const TabStack = () => {
    return(
        <Tab.Navigator
        initialRouteName="Search"
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
            name='Movies'
            component={MoviesScreen}
            />

            <Tab.Screen
            name='Search'
            component={SearchScreen}
            />

            <Tab.Screen 
            name='Tv'
            component={TvScreen}
            />
        </Tab.Navigator>

    )
}

export default TabStack