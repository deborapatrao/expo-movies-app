import { Center, Container } from "native-base"
import { useState } from "react"
import Form from "../forms/Form"

const SearchContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [searchTitle, setSearchTitle] = useState(null)

    return(
        <Container>
            <Center px={4}>
                <Form />
            </Center>
        </Container>
    )
}

export default SearchContainer