import { FlatList } from "native-base"
import TitleCard from "../listItems/TitleCard"

const TitlesList = ({ navigation, titles }) => {

    return(
        <FlatList 
        py={3}
        data={titles}
        renderItem={({ item }) => 
            <TitleCard 
            title={item.original_title}
            popularity={item.popularity}
            releaseDate={item.release_date}
            poster={item.poster_path}
            description={item.overview}
            navigation={navigation}
            />
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        />
    )
}

export default TitlesList