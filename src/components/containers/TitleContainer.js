import { Box, 
    Text, 
    Divider, 
    Heading, 
    Image, 
    VStack } from "native-base"

const TitleContainer = ({ navigation, route }) => {
    const { title, imgUri, description, popularity, releaseDate } = route.params

    return(
        <>
        <Box>
            <VStack>
                <Heading size='lg'>{title}</Heading>

                <Box>
                <Image alt={title} 
                    source={{uri:imgUri}} 
                    size='2xl' />
                </Box>

                <Text>{description}</Text>

                <Box>
                    <Text>Popularity: {popularity}</Text>
                    <Divider orientation="vertical" mx='3'/>
                    <Text>Release Date: {releaseDate}</Text>
                </Box>
            </VStack>
        </Box>
        </>
    )
}

export default TitleContainer