import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TitleScreen from "../screens/TitleScreen";
import TabStack from "./TabStack";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name='Index'
            component={TabStack}
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

export default AppStack
