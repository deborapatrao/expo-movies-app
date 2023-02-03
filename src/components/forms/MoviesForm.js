import { FormControl, 
    Select, 
    VStack,
    Icon,
    CheckIcon,
    Box} from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react"

const MoviesForm = props => {
    const {onTypeChange, fetchTitles} = props
    const [movieListType, setMovieListType] = useState('popular')
console.log('movie type: ', movieListType)
    
    useEffect(() => {
        fetchTitles()
    }, [movieListType])

    return (
        <Box 
        py={5}
        width='100%'
        >
            <FormControl
            alignItems='center'>
                <Select
                width='70%'
                dropdownIcon={<Icon size={5} paddingRight={7} as={<Ionicons name='chevron-down-outline'/>}
                color='gray.400'/>}
                selectedValue={movieListType}
                    onValueChange={value => {
                        onTypeChange(value)
                        setMovieListType(value)}}
                accessibilityLabel='Choose search type'
                placeholder='Choose search type'
                _selectedItem={{
                    bg:'#FFCCD5',
                    endIcon: <CheckIcon size={5} />
                }}
                >
                    <Select.Item label='popular' value='popular'/>
                    <Select.Item label='now playing' value='now_playing'/>
                    <Select.Item label='top rated' value='top_rated'/>
                    <Select.Item label='upcoming' value='upcoming'/>
                </Select>
            </FormControl>
        </Box>
    )
}

export default MoviesForm