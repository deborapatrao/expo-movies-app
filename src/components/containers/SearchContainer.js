import { Center, Container } from "native-base"
import { useState } from "react"
import Form from "../forms/Form"
import { getTitles } from "../services/api"

const SearchContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [titles, setTitles] = useState([])
    const [searchKeyword, setSearchKeyword] = useState(null)

    const fetchTitles = () => {
        setIsLoading(true)

        getTitles(searchKeyword, 'movie').then(
            titles => {
                setTitles(titles)
                setIsLoading(false)
            },
            error => {
                console.log('Search container error', error)
            }
        )
    }

    const handleInputChange = searchKeyword => {
        setSearchKeyword(searchKeyword)
    }

    console.log('search', searchKeyword)

    return(
        <Container maxWidth='100%'>
            <Center px={4}>
                <Form onInputChange={handleInputChange} fetchTitles={fetchTitles}/>
            </Center>
        </Container>
    )
}

export default SearchContainer