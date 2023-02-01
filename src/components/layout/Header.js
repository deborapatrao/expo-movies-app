import { HStack, StatusBar, Text, Box } from "native-base"

const Header = () => {

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
        </>
    )
}

export default Header