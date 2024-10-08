import { GoBookmark } from "react-icons/go";
import { Article } from "../Context/data";
import { Link } from "react-router-dom";

export const ArticleCard = ({column}) => {
  return (
    <div className="grid-container">
            {
             Article.filter(({category}) => category === column).map(({heading, description, image },index) => (
                <Link to={`/page/${heading}`} className={`grid-item ${index === 0 ? 'full-width' : ''}`}>
                    <img style={{height: index === 0 ? "20rem" : "12rem", width: "100%", borderRadius: "1rem 1rem 0 0"}} src={image} alt="articleImg" />
                    <div style={{padding: "0rem .9rem .5rem"}}>
                    <p className="text-xl font-semibold text-slate-800 my-1 font-roboto">{heading}</p>
                    <p className="heading">{description}</p>

                    <div className="flex flex-wrap justify-between items-center mt-1">
                     <p className="flex flex-wrap items-center gap-1"> 
                      <img src="https://techcrunch.com/wp-content/uploads/2024/10/argo-space-corp.jpg" alt="author" className="h-4 w-4 rounded-xl" /> 
                      elymc</p>
                     <GoBookmark />
                    </div>
                    </div>
                </Link>
             ))
            }
        </div>
  )
}
