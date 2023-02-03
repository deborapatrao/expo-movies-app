import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import IndexScreen from "../screens/IndexScreen";
import MoviesScreen from "../screens/MoviesScreen";

const Tab = createMaterialTopTabNavigator();

const TabStack = () =>{

    return(
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Index' component={IndexScreen} />
            {/* <Tab.Screen name='Movies' component={MoviesScreen} /> */}
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabStack