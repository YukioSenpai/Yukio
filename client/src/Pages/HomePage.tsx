import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { dummyGenre, Genre } from '../business/Genre'
import { Spin } from '../components/spin/Spin'
// import { dummyFetch, ResultFetch, } from '../business/ResultFetch'
// import { List } from '../components/list/List'
// import { ListItem } from '../components/list/ListItem'
// import { Spin } from '../components/spin/Spin'

export const HomePage: React.FC = () => {

    // const [trending, SetTrending] = useState<ResultFetch>(dummyFetch)
    const [trending, SetTrending] = useState<Genre>(dummyGenre)
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=9844384d8d3472c7feebfa4c61e3e51c'
        ).then((res) => {
            SetTrending(res.data)
        })
    }, [])
    console.log(trending.genres)
    return (
        <div>
            <div>
                {trending === dummyGenre ? <Spin /> : <div>{trending.genres.map(a => a.name)}</div>}
                {/* {trending === dummyFetch ? <Spin /> :
                    <List
                        itemLayout="vertical"
                        size="large"
                        header={
                            <h6>
                                <span>{trending.total_results}</span>
                            </h6>
                        }
                        grid={{ gutter: 16, xl: 3, column: 2 }}
                        dataSource={trending.results}
                        pagination={{
                            onChange: setPage,
                            pageSize: 5,
                            total: 10,
                            current: page
                        }}
                        renderItem={results => (
                            <ListItem>
                                {results.title}
                            </ListItem>
                        )}
                    />} */}
            </div>
        </div>
    )
}
