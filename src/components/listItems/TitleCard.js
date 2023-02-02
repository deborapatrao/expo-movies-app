import { Box, 
    HStack,
    Image,
    VStack,
    Text,
    Button,
    Divider,
    Heading} from "native-base"

const TitleCard = props => {
    const {id, title, popularity, releaseDate, poster, description} = props
    const imageBaseUri = 'https://image.tmdb.org/t/p/w185'

    console.log('poster: ', `${imageBaseUri}${poster}`)

    return(
        <Box>
            <HStack
            justifyContent='center'

            >
                <Box width='30%' alignSelf='center'>
                    <Image alt={title} 
                    source={{uri:`${ imageBaseUri}${poster}`}} 
                    size='lg' />
                </Box>

                <VStack width='70%' alignContent='start'>
                    <Heading size='xs'>{title}</Heading>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Button bg='#C9184A'>More details</Button>
                </VStack>
            </HStack>

            <Divider my={3} bg='#FFCCD5'/>
        </Box>
    )
}

export default TitleCard