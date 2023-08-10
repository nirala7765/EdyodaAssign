import './App.css';
import './YouTube';
import YouTube from './YouTube';

function App() {
  const videos = [
    { "Title": "Thor", "likes": "13 K", "Views": "800369", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Thor: Ragnarok", "likes": "17 K", "Views": "3501632", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Thor: The Dark World", "likes": "16 K", "Views": "1981115", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Thor: Love and Thunder", "likes": "22 K", "Views": "10648342", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Team Thor", "likes": "16 K", "Views": "6016776", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZmEyODRkYmQtMjM3Yi00ZTkxLWI0NWEtOTJhMzBjNWY5MjJjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Thor: Tales of Asgard", "likes": "17 K", "Views": "1667903", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxOTU4NzIxMV5BMl5BanBnXkFtZTcwNzE3NjAxNQ@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Team Thor: Part 2", "likes": "21 K", "Views": "6599818", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BODczODMwOTgtODhkOC00YjFiLWIzYmUtZTI3NThhZDE1NDhkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Valhalla - The Legend of Thor", "likes": "19 K", "Views": "8956872", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTA0OGZjODctYjg2ZS00YWQ1LWEyZjgtMDZkNmYyZDAwYzg0XkEyXkFqcGdeQXVyMzcwNjA5Mzg@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Almighty Thor", "likes": "31 K", "Views": "1792794", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTcwNjI5MTAzNF5BMl5BanBnXkFtZTcwNTcyOTIwNQ@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Thor: Finding Korg", "likes": "18 K", "Views": "8513006", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNjI0ZmZlYzktZWNhMC00YjYwLThhZDItOGE4MTg1ZDM1YTMxXkEyXkFqcGdeQXVyNDM2MzU3Njc@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Iron Man", "likes": "8 K", "Views": "371746", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Iron Man 3", "likes": "13 K", "Views": "1300854", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Iron Man 2", "likes": "10 K", "Views": "1228705", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "The Iron Giant", "likes": "19 K", "Views": "2129167", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYzBjZTNkMzQtZmNkOC00Yzk0LTljMjktZjk3YWVlZjY3NTk2XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "The Man in the Iron Mask", "likes": "98 K", "Views": "2120744", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Iron Fist", "likes": "18 K", "Views": "3322310", "Type": "series", "Poster": "https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "The Iron Lady", "likes": "11 K", "Views": "1007029", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BODEzNDUyMDE3NF5BMl5BanBnXkFtZTcwMTgzOTg3Ng@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Iron Sky", "likes": "12 K", "Views": "1034314", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM2MDg5MzgxNF5BMl5BanBnXkFtZTcwODUzNjMxOA@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "The Man with the Iron Fists", "likes": "12 K", "Views": "1258972", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "3-Iron", "likes": "24 K", "Views": "423866", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYzBmODdkMzItNTk0NS00MDc5LWFmZjgtNmNlZmNhMzFlMmQ3XkEyXkFqcGdeQXVyMTI3ODAyMzE2._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" },
    { "Title": "Thor: Ragnarok", "likes": "17 K", "Views": "3501632", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg", "ChanenlLogo": "https://yt3.googleusercontent.com/ytc/AOPolaScKjL0WX4x86dFzw92zmF7JlM6gZcSWe1fDtA3=s900-c-k-c0x00ffffff-no-rj", "ChannelNmae": "Edyoda" }
  ]



  return (
    <div className="App">




      {
        videos.map((vedio)=>{
          return <YouTube video = {vedio} />


        })
      }

      {/* <YouTube video={videos[0]} /> */}



      {/* <YouTube video={videos[0]} />
      <YouTube video={videos[1]} />
      <YouTube video={videos[2]} />
      <YouTube video={videos[3]} />
      <YouTube video={videos[4]} /> */}

    </div>
  );
}

export default App;