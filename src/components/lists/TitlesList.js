import { FlatList } from "native-base"
import TitleCard from "../listItems/TitleCard"

const TitlesList = ({ titles }) => {

    console.log('Title List', titles)

    return(
        <FlatList 
        py={3}
        data={titles}
        renderItem={({ item }) => 
            <TitleCard 
            id={item.id}
            title={item.original_title}
            popularity={item.popularity}
            releaseDate={item.release_date}
            poster={item.poster_path}
            description={item.overview}
            />
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        />
    )
}

export default TitlesList