import { Center, Container } from "native-base"
import { useState } from "react"
import MoviesForm from "../forms/MoviesForm"
import { getTitles } from "../services/api"
import TitlesList from "../lists/TitlesList"
import Loading from "../layout/Loading"


const MoviesContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [titles, setTitles] = useState([])
    const [movieListType, setMovieListType] = useState('popular')


    const fetchTitles = () => {
        setIsLoading(true)

        getTitles('movie', movieListType).then(
            titles => {
                setTitles(titles)
                setIsLoading(false)
            }, error => {
                console.log('Error: ', error)
            }
        )
    }

    const handleTypeChange = movieListType => {
        setMovieListType(movieListType)
    }

    return(
        <Container maxWidth='100%'
        justifyItems='center'>
            <Center px={4}>
            <MoviesForm onTypeChange={handleTypeChange}
            fetchTitles={fetchTitles}/>
            {isLoading ? <Loading /> : <TitlesList titles={titles} navigation={navigation}/>}
            </Center>
        </Container>
    )
}

export default MoviesContainer