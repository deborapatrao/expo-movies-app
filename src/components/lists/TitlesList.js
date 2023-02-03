import { FlatList } from "native-base"
import TitleCard from "../listItems/TitleCard"

const TitlesList = ({ navigation, route, titles, type }) => {

    return(
        <FlatList 
        py={3}
        data={titles}
        renderItem={({ item }) => 
            <TitleCard 
            id={item.id}
            title={item.original_title ? item.original_title : item.original_name}
            popularity={item.popularity}
            releaseDate={item.release_date}
            poster={item.poster_path}
            description={item.overview}
            navigation={navigation}
            route={route}
            type={type == 'multi' ? item.media_type : type}
            />
        }
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        />
    )
}

export default TitlesList