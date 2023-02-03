import { Box, Center, Container, Text } from "native-base"
import { useState } from "react"
import Form from "../forms/Form"
import { getSearchTitles } from "../services/api"
import Loading from "../layout/Loading"
import TitlesList from "../lists/TitlesList"

const SearchContainer = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [titles, setTitles] = useState([])
    const [searchKeyword, setSearchKeyword] = useState(null)
    const [searchType, setSearchType] = useState(null)

    const fetchTitles = () => {
        setIsLoading(true)

        getSearchTitles(searchKeyword, searchType).then(
            titles => {
                setTitles(titles)
                setIsLoading(false)
            },
            error => {
                console.log('Error: ', error)
            }
        )
    }

    const handleKeywordChange = searchKeyword => {
        setSearchKeyword(searchKeyword)
    }

    const handleTypeChange = searchType => {
        setSearchType(searchType)
    }


    return(
        <Container maxWidth='100%' bg='#fff'>
            <Center px={4}>
                <Form onKeywordChange={handleKeywordChange}
                onTypeChange={handleTypeChange}
                fetchTitles={fetchTitles}/>
                {titles.length===0 ? <Text fontSize='xl' bold mt={20}>Please initiate a search</Text> : null}
                {isLoading ? <Loading /> : <TitlesList titles={titles} navigation={navigation} route={route} type={searchType}/>}
            </Center>
        </Container>
    )
}

export default SearchContainer