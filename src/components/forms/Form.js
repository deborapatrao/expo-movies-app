import { Button, Center, FormControl, HStack, Input, Select, VStack } from "native-base"
import { useState } from "react"

const Form = () => {
    const [formData, setData] = useState({})
    const [errors, setErrors] = useState({})

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
                />

            <FormControl.Label 
                fontSize='sm'
                width='100%'>
                    Choose Search Type
            </FormControl.Label>
            <HStack width='100%' space={2}>
                    <Select minWidth='70%'>
                        <Select.Item label='movies'/>
                        <Select.Item label='multi'/>
                    </Select>
                    <Button
                    // onPress={onSubmit}
                    width='30%'>Search</Button>
            </HStack>
            </FormControl>
        </VStack>
    )
}

export default Form