import { img } from "../../Assets/Data";
import './ImageDesplay.css'
function ImageDesplay(){
    return(
       <div className="image-desplay">
       <div className="img-conainer">
        {
            img.map((item,index)=>{
                return(
                    <>
                    <div className="img-desplay-container">
                        <img src={item.img} alt=""/>
                        <p>{item.name}</p>
                        <h3>{item.cost}</h3>
                        <p id="p">{item.del}</p>
                        <button>3.6   <i class="fa-solid fa-star"></i></button>
                        </div>
                       
                            </>
                )
            })
          
           
            
            
        }
        </div>
        
       </div>
    )
}
export default ImageDesplay;