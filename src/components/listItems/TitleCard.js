import { Box, 
    HStack,
    Image,
    VStack,
    Text,
    Button,
    Divider,
    Heading,
    Icon} from "native-base"
import { Ionicons } from "@expo/vector-icons"

const TitleCard = props => {
    const {navigation, title, popularity, releaseDate, poster, description} = props
    const imgBaseUri = 'https://image.tmdb.org/t/p/w185'
    const imgUri= `${imgBaseUri}${poster}`

    return(
        <Box>
            <HStack
            justifyContent='center'
            maxWidth='100%'>
                <Box width='28%' 
                alignSelf='center'
                alignItems='center'
                justifyContent='center'
                mr={3}>
                    {poster ? 
                    <Image alt={poster ? poster : `${title}${releaseDate}${popularity}`} 
                    source={{uri:imgUri}} 
                    size='lg' /> :
                    <Icon as={Ionicons} name='image' size='lg'/>}
                    
                </Box>

                <VStack width='68%' alignContent='start'>
                    <Heading size='xs'>{title}</Heading>
                    <Text fontSize='xs'>Popularity: {popularity}</Text>
                    <Text fontSize='xs'>Release Date: {releaseDate}</Text>
                    <Button bg='#C9184A'
                    _pressed={{ backgroundColor:'#800F2F' }}
                    onPress={() => {
                        navigation.navigate('Title', {
                            title,
                            imgUri,
                            description,
                            popularity,
                            releaseDate
                        })
                    }}>More details</Button>
                </VStack>
            </HStack>

            <Divider my={3} bg='#FFCCD5'/>
        </Box>
    )
}

export default TitleCard