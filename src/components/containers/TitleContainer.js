import { Box, 
    Text, 
    Divider, 
    Heading, 
    Image,
    Center, 
    VStack, 
    HStack,
    Icon} from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { getTitle } from "../services/api"
import { useEffect, useState } from "react"

const TitleContainer = ({ route }) => {
    const { id,
        type
        // title, 
        // imgUri, 
        // description, 
        // popularity, 
        // releaseDate 
    } = route.params
    const [title, setTitle] = useState([])
    const imgUri = `https://image.tmdb.org/t/p/w185${title.poster_path}`

    const fetchTitle = () => {
        getTitle(id, type). then(
            title => {
                setTitle(title)
            }, error => {
                console.log('Error: ', error)
            }
        )
    }

    useEffect(() => {
        fetchTitle()
    }, [])
    
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
                <Heading size='lg'>{title.original_title ? title.original_title : title.original_name}</Heading>

                <Box>
                {title.poster_path ? 
                    <Image alt={title.poster_path ? title.poster_path : `${title}${releaseDate}${popularity}`} 
                    source={{uri:imgUri}} 
                    size='2xl' /> :
                    <Icon as={Ionicons} name='image' size='lg'/>}
                </Box>

                <Text fontSize='xs'>{title.overview}</Text>

                <HStack>
                    <Text fontSize='xs' >Popularity: {title.popularity}</Text>
                    <Divider orientation="vertical" mx={3}/>
                    <Text fontSize='xs' >Release Date: {title.release_date}</Text>
                </HStack>
            </VStack>
        </Box>
        
    )
}

export default TitleContainer