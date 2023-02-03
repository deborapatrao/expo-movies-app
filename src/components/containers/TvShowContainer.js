import { Center, Container } from "native-base"
import { useState } from "react"
import TvForm from "../forms/TvForm"
import { getTitles } from "../services/api"
import TitlesList from "../lists/TitlesList"
import Loading from "../layout/Loading"


const TvShowContainer = ({navigation, route}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [titles, setTitles] = useState([])
    const [tvListType, setTvListType] = useState('popular')


    const fetchTitles = () => {
        setIsLoading(true)

        getTitles('tv', tvListType).then(
            titles => {
                setTitles(titles)
                setIsLoading(false)
            }, error => {
                console.log('Error: ', error)
            }
        )
    }

    const handleTypeChange = tvListType => {
        setTvListType(tvListType)
    }

    return(
        <Container maxWidth='100%'
        bg='#fff'
        justifyItems='center'>
            <Center px={4}>
            <TvForm onTypeChange={handleTypeChange}
            fetchTitles={fetchTitles}/>
            {isLoading ? <Loading /> : <TitlesList titles={titles} navigation={navigation} route={route} type={'tv'}/>}
            </Center>
        </Container>
    )
}

export default TvShowContainer