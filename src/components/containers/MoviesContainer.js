import { Center, Container } from "native-base"
import { useState } from "react"
import MoviesForm from "../forms/MoviesForm"
import { getTitles } from "../services/api"


const MoviesContainer = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [movieListType, setMovieListType] = useState('popular')


    const fetchTitles = () => {
        setIsLoading(true)

        getTitles('movie', movieListType).then(
            movies => {
                setMovies(movies)
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
        <Container minWidth='100%'
        justifyItems='center'>
            <MoviesForm onTypeChange={handleTypeChange}
            fetchTitles={fetchTitles}/>
        </Container>
    )
}

export default MoviesContainer