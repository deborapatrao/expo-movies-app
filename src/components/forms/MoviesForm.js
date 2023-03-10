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
    
    useEffect(() => {
        fetchTitles()
    }, [movieListType])

    return (
        <Box 
        py={5}
        width='100%'
        alignItems='center'
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
                _selectedItem={{
                    bg:'#FFCCD5',
                    endIcon: <CheckIcon size={5} />
                }}
                >
                    <Select.Item label='Popular' value='popular'/>
                    <Select.Item label='Now playing' value='now_playing'/>
                    <Select.Item label='Top rated' value='top_rated'/>
                    <Select.Item label='Upcoming' value='upcoming'/>
                </Select>
            </FormControl>
        </Box>
    )
}

export default MoviesForm