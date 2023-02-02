import { Center, Container } from "native-base"
import { useState } from "react"
import Form from "../forms/Form"
import { getTitles } from "../services/api"
import Loading from "../layout/Loading"
import TitlesList from "../lists/TitlesList"

const SearchContainer = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [titles, setTitles] = useState([])
    const [searchKeyword, setSearchKeyword] = useState(null)
    const [searchType, setSearchType] = useState(null)
    
    const fetchTitles = () => {
        setIsLoading(true)

        getTitles(searchKeyword, searchType).then(
            titles => {
                setTitles(titles)
                setIsLoading(false)
                console.log('TITLES: ', titles)
            },
            error => {
                console.log('Search container error', error)
            }
        )
    }

    const handleKeywordChange = searchKeyword => {
        setSearchKeyword(searchKeyword)
    }

    const handleTypeChange = searchType => {
        setSearchType(searchType)
    }


    console.log('search', searchKeyword)

    return(
        <Container maxWidth='100%'>
            <Center px={4}>
                <Form onKeywordChange={handleKeywordChange}
                onTypeChange={handleTypeChange}
                fetchTitles={fetchTitles}/>
                {isLoading ? <Loading /> : <TitlesList titles={titles}/>}
            </Center>
        </Container>
    )
}

export default SearchContainer