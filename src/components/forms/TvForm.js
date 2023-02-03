import { FormControl, 
    Select, 
    VStack,
    Icon,
    CheckIcon,
    Box} from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react"

const TvForm = props => {
    const {onTypeChange, fetchTitles} = props
    const [tvListType, setTvListType] = useState('popular')

    
    useEffect(() => {
        fetchTitles()
    }, [tvListType])

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
                selectedValue={tvListType}
                    onValueChange={value => {
                        onTypeChange(value)
                        setTvListType(value)}}
                _selectedItem={{
                    bg:'#FFCCD5',
                    endIcon: <CheckIcon size={5} />
                }}
                >
                    <Select.Item label='Popular' value='popular'/>
                    <Select.Item label='Airing today' value='airing_today'/>
                    <Select.Item label='On the air' value='on_the_air'/>
                    <Select.Item label='Top rated' value='top_rated'/>
                </Select>
            </FormControl>
        </Box>
    )
}

export default TvForm