import { Box, 
    HStack,
    Image,
    VStack,
    Text,
    Button,
    Divider,
    Heading} from "native-base"

const TitleCard = props => {
    const {navigation, title, popularity, releaseDate, poster, description} = props
    const imgBaseUri = 'https://image.tmdb.org/t/p/w185'
    const imgUri= `${imgBaseUri}${poster}`

    return(
        <Box>
            <HStack
            justifyContent='center'

            >
                <Box width='30%' alignSelf='center'>
                    <Image alt={title} 
                    source={{uri:imgUri}} 
                    size='lg' />
                </Box>

                <VStack width='70%' alignContent='start'>
                    <Heading size='xs'>{title}</Heading>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Button bg='#C9184A'
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