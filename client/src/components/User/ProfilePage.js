import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getUserWithId } from "../../actions/UserActions";
import { useNavigate } from "react-router-dom";
import Homepage from "../Ui/HomePage";


const ProfilePage = () => {
    const { id } = useParams()
    const [profileUser, setProfileUser] = useState(undefined)
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate()
    
    const [navState, setNavState] = useState("posts")


    const LoadUserData = async () => { 
        const user_Data = await getUserWithId(id)
            if (!('response' in user_Data)) {
                if (user_Data !== undefined) {
                    setProfileUser(user_Data)
                }
            }
            else {
                console.log("here")
                navigate("/")
            }
    }



    useEffect(() => {
        //window.location.reload()
        console.log(navState)
        LoadUserData()
        // setUpdate(!update)
    }, [update]);


    return (
        <>
        { profileUser !== undefined &&
            <div className=" w-full flex flex-col justify-center items-center gap-8">

                <h1 className=" text-2xl font-bold">{profileUser.email}</h1>

                <form className="btn-group">
                    <input onClick={() => setNavState("posts")} defaultChecked type="radio" value="posts" name="options" data-title="Posts" className="btn"/>
                    <input onClick={() => setNavState("collections")}  type="radio" value="collections" name="options" data-title="Collections" className="btn" />
                </form>


                { (navState === "posts" && profileUser !== undefined) &&
                <>  
                    <Homepage type="profile" search_value={profileUser._id}/>
                </>
                }


                { navState === "collections" &&
                <>


                    <div>
                        collections
                    </div>


                </>
                }



            </div>
        }
        { profileUser === undefined &&
            <div className=" w-100% h-screen flexjustify-center">
            <button class="btn loading mt-10">loading</button>
        </div>
        }
        </>
    )
}

export default ProfilePage

