import i18next from "i18next";


export const BookProduct:React.FC = ()=>{


    console.log(i18next.t("name"))
    return( 
        <div >Book {i18next.t('name')}</div>
    )
}