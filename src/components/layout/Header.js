import { HStack, StatusBar, Text, Box, VStack, Stack, Center } from "native-base"
import { Pressable } from "react-native"

const Header = ({ navigation, route }) => {

    return(
        <>
        <StatusBar backgroundColor='#800F2F' barStyle='light-content'/>
        <Box safeAreaTop backgroundColor='#800F2F'>
            <HStack bg='#800F2F' px={1} py={3} alingItems='center' justifyContent='center'>
                <Text color='#fff' fontSize={20} fontWeight='bold'>
                    Movies App
                </Text>
            </HStack>
        </Box>

        <HStack
        direction='row'
        py={3}
        justifyContent='space-around'
        >
                <Pressable onPress={() => {
                    navigation.navigate('Movies', {navigation})
                }}>
                    <Text>
                    Movies
                    </Text>
                </Pressable>

                <Pressable>
                <Text>
                    Search
                    </Text>
                </Pressable>

                <Pressable>
                <Text>
                    TV Shows
                    </Text>
                </Pressable>

        </HStack>
        </>
    )
}

export default Header