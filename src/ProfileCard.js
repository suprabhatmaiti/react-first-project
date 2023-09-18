
function ProfileCard({title ,handle,image,content}){
    return(
        <div className="card">
            <div className="card-image">
                <figure className="image is-5by5">
                    <img src={image} alt="pda img"/>
                </figure>
            </div> 
            <div class="media-content">
                <p class="title is-4">{title}</p>
                <p class="subtitle is-6">{handle}</p>
            </div>
            <div className="content">
                {content}
            </div>
        </div>


        
    )
}
export default ProfileCard;