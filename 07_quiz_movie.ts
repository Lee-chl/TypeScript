// 전체 movieinfos / 개별 movie 
interface MovieInfos{
    articleList:Movie[];
    lastPublishTime:number;
    moreList:boolean;
}

interface Movie{
    title:string;
    url:string;
    image:string;
    authorName:string;
    authorUrl:string;
    authorImage:string;
    createTime:string;
}