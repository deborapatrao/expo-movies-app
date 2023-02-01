import { Button, 
    CheckIcon, 
    FormControl, 
    HStack, 
    Icon, 
    Input, 
    Select, 
    VStack } from "native-base"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

const Form = props => {
    const { fetchTitles, onInputChange } =props
    const [searchData, setSearchData] = useState({})
    const [searchType, setSearchType] = useState('multi')
    const [errors, setErrors] = useState({})


    const onSubmit = () => {
        fetchTitles()
    }

    return(
        <VStack space={2} width='100%' py={5}>
        
            <FormControl isRequired>
                <FormControl.Label fontSize='sm'>Search Movie/Show Name</FormControl.Label>
                <Input 
                placeholder='i.e. James Bond, CSI'
                variant='filled'
                br='gray.200'
                px={3}
                width='100%'
                InputLeftElement={<Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />}/>}

                onChangeText={value => {
                    onInputChange(value)
                    setSearchData({...searchData, name:value})
                }}
                />

            <FormControl.Label 
                fontSize='sm'
                width='100%'>
                    Choose Search Type
            </FormControl.Label>
            <HStack width='100%' space={2} alignItems='center'>
                    <Select 
                    minWidth='70%'
                    dropdownIcon={<Icon size={5} paddingRight={7} as={<Ionicons name='chevron-down-outline'/>}
                    color='gray.400'/>}
                    selectedValue={searchType}
                    onValueChange={itemValue => setSearchType(itemValue)}
                    accessibilityLabel='Choose search type'
                    placeholder='Choose search type'
                    _selectedItem={{
                        bg:'#FFCCD5',
                        endIcon: <CheckIcon size={5} />
                    }}>
                        <Select.Item label='movies' value='movies'/>
                        <Select.Item label='multi' value='multi '/>
                        <Select.Item label='tv' value='tv'/>
                    </Select>
                    <Button
                    onPress={onSubmit}
                    startIcon={<Icon as={Ionicons} name='ios-search'/>}
                    width='30%'
                    bg='#C9184A'
                    >Search</Button>
            </HStack>
            </FormControl>
        </VStack>
    )
}

export default Form