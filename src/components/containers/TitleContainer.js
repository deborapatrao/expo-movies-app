import { Box, 
    Text, 
    Divider, 
    Heading, 
    Image,
    Center, 
    VStack, 
    HStack} from "native-base"

const TitleContainer = ({ route }) => {
    const { id, title, imgUri, description, popularity, releaseDate } = route.params
    
    return(
        
        <Box
        width='100%'
        height='100%'
        alignContent='center'
        my={10}>
            
            <VStack
            space={7}
            mx={10}
            alignItems='center'>
                <Heading size='lg'>{title}</Heading>

                <Box>
                <Image alt={title} 
                    source={{uri:imgUri}} 
                    size='2xl' />
                </Box>

                <Text fontSize='xs'>{description}</Text>

                <HStack>
                    <Text fontSize='xs' >Popularity: {popularity}</Text>
                    <Divider orientation="vertical" mx={3}/>
                    <Text fontSize='xs' >Release Date: {releaseDate}</Text>
                </HStack>
            </VStack>
        </Box>
        
    )
}

export default TitleContainer