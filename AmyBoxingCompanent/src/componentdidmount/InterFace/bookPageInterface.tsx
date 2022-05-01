export  interface BookinformationCard {
    name_am:string,
    name_ru:string,
    name_en:string,
    author_am:string ,
    author_ru:string ,
    author_en:string,
    price:string,
    Language_am:string,
    get_absolute_url:string,
    ցategory:string,
    date:string,
    _id:string,
    files:FilesHref[]
  }

 export interface FilesHref{
    fileName:string,
    fileHreaf:string,
    filePath:string,
    fileType:string,
    fileSize:string
  }