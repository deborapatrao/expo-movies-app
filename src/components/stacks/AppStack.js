import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import TitleScreen from "../screens/TitleScreen";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='Index'
            component={IndexScreen}
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
                title:route.params.title
            })}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppStack