const url: string =
  "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

// 전체 movieinfos / 개별 movie / showRank는 출력되는 것 
interface MovieInfos {
  articleList: Array<Movie>;
}

interface Movie {
  title: string;
}

interface showRank {
  title: string;
  rank: number;
}

async function fetchMovieData(url: string):Promise<MovieInfos> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("요청 실패 상태 코드 : " + response.status);
  }
  const data:MovieInfos = await response.json();
  return data;
}

function validataMovieData(data: MovieInfos):void {
  if (!data.articleList || data.articleList.length === 0) {
    throw new Error("데이터가 없습니다.");
  }
}

function extractMovieInfos(articleList: Array<Movie>):Array<showRank> {
  return articleList.map((articleList, idx) => ({
    title: articleList.title,
    rank: idx + 1,
  }));
}

function displayMovies(movieinfos: Array<showRank>):void {
  for (const movie of movieinfos) {
    console.log(`[${movie.rank}위] ${movie.title}`);
  }
}

async function movies():Promise<void> {
  try {
    const data = await fetchMovieData(url);
    validataMovieData(data);
    const movieinfo = extractMovieInfos(data.articleList);
    displayMovies(movieinfo);
  } catch (err: unknown) {
    // js에서는 error타입으로 아무거나 넘어올 수 있기때문에 Ts에서는 unknown으로 처리하고 뒤에서 
    if (err instanceof Error) { // Error 타입일 경우 메세지가 나오도록 처리 any와 다르다 unknow는 뭐 하기 전에 타입 체크해야한다. any는 모두 받아준다.
        // Error 의 실제 예 
      console.error("에러 발생: ", err.message);
    }
  }
}

movies();
