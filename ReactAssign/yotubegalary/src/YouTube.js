

import react from "react";




function YouTube(props) {

    return (



    

        <div className="Main">

            <div className="CardContainer">
                <div className="PosterContainer">
                    <img className="PosterImg" src={props.video.Poster}></img>

                </div>

                <div className="FullDetails">

                    <div className="chnnelLogo">
                        <img className="channellogimg" src={props.video.ChanenlLogo}></img>
                        

                    </div>


                    <div className="InfoPart">
                       
                        <p className="VTitle">{props.video.Title}</p>
                        <p className="chname">{props.video.ChannelNmae}</p>
                        <h3 className="Vlikes">Likes:{props.video.likes}</h3>
                        <h3 className="vViews">Views:{props.video.Views}</h3>

                    </div>



                </div>



            </div>

        </div>









    )

}



export default YouTube