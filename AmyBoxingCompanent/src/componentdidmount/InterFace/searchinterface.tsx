export interface SearchData{
    SearchName:string,
    SearchAuthor:string,
    SearchUrl:string,
    SearchId:string,
    SearchCaover:string
    SearchPrice:string
    SearchFiles:FilesHref[]

}

export interface FilesHref{
    fileName:string,
    fileHreaf:string,
    filePath:string,
    fileType:string,
    fileSize:string
  }

