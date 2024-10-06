import { GoBookmark } from "react-icons/go";
import { Article } from "./data";

export const ArticleCard = ({column}) => {
  return (
    <div className="grid-container">
            {
             Article.filter(({category}) => category === column).map(({heading, description, image },index) => (
                <div className={`grid-item ${index === 0 ? 'full-width' : ''}`}>
                    <img style={{height: index === 0 ? "20rem" : "12rem", width: "100%", borderRadius: "1rem 1rem 0 0"}} src={image} alt="articleImg" />
                    <div style={{padding: "0rem .9rem .5rem"}}>
                    <h2>{heading}</h2>
                    <p className="heading">{description}</p>
                    <div className="flex justify-between items-center mt-1">
                     <p className="flex items-center gap-1"> 
                      <img src="https://techcrunch.com/wp-content/uploads/2024/10/argo-space-corp.jpg" alt="author" className="h-4 w-4 rounded-xl" /> 
                      elymc</p>
                     <GoBookmark />
                    </div>
                    </div>
                </div>
             ))
            }
        </div>
  )
}
