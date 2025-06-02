import './exercise-article.css'

const Article = ({children}) => {
    return( 
        <article className="exercise">{children}</article>
    )
}

export {Article}