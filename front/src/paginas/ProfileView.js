import React, { useEffect, useState} from "react";
import Table from "../components/Table";
import API from "../utils/API";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
import Navbar from "../components/Navigation";
import Graphs from "../components/Graphs";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/scoreboard.css";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function ProfileView(){

    const[profileList, setProfileList] = useState([])
    const[currentScoreList, setCurrentScoreList] = useState([])
    const[isLoading, setLoading] = useState(false)
    const[message, setMessage] = useState("")

    const loadData = () =>{
        setLoading(true)
        setMessage("")
        API.call(
            "profile/current_profile/",
            (response)=>{
            console.log(response)
            setProfileList(response)
            setLoading(false)
        },
        (error)=>{
            setMessage("Error en el sistema")
            console.log(error)
            setLoading(false)
        }
        )
    }
    const loadData2 = () =>{
        setLoading(true)
        setMessage("")
        API.call(
            "scores/current_user_scores/",
            (response)=>{
            console.log(response)
            setCurrentScoreList(response)
            setLoading(false)
        },
        (error)=>{
            setMessage("Error en el sistema")
            console.log(error)
            setLoading(false)
        }
        )
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const [newPassword, setNewPassword] = useState("");

    const onImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };
      
    const onPasswordChange = (name, value) => {
        setNewPassword(value);
    };
      
    const updateProfileImage = (file) => {
        let formData = new FormData();
        formData.append("image", file);
        
        API.call(
            "profile/update_image/",
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            },
            {
              method: "POST",
              body: formData,
              headers: {
                "Content-Type": null,
              },
            }
        );
    };
      
    const updatePassword = () => {
        API.call(
          "profile/update_password/",
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          },
          {
            method: "post",
            body: JSON.stringify({ password: newPassword }),
          }
        );
    };
      


    useEffect(()=> {
        loadData()
    },[])

    useEffect(()=> {
        loadData2()
    },[])



    return(<div>
    <Navbar className="navbar"/>
    <main className="container">
    <section>
        <Table headers = {[
            {title:"", key:"image", render: (value)=>{ return (<> <img className="rounded-circle" height={10} src={value}/></>)} },
            {title:"Email", key:"user.email"},
            {title:"First Name", key:"user.first_name"},
            {title:"Total score", key:"user.total_score"},
            {title:"Average score", key:"user.average_score"},
            {title:"Last login", key:"user.last_login"},


        ]} data = {profileList}/>
    </section>
    <section>
    <h2>Lista de scores</h2>
    {isLoading ? 
        <Spinner msg = "Loading..."/>: 
        <Table headers = {[
            {title: "User", key:"user.email"},
            {title: "Score", key: "score"},
            {title: "Average score", key: "user.average_score"},
            {title: "Total score", key: "user.total_score"}

        ]} data = {currentScoreList}/>}
    </section>
    <section id="fields">
        <div className="inputs">
            <input type="file" name="image" onChange={onImageChange} />
            <Button onClick={updateProfileImage} type="secondary">Cambiar foto de perfil</Button>
            <hr />
        </div>
        <div className="inputs">
            <Input name="password" type="password" onChangeValue={onPasswordChange} label="Password" />
            <Button onClick={updatePassword} type="secondary">Cambiar contraseña</Button>
        </div>
    </section>
    <Graphs/>
  </main>
  <Footer/>
</div>)
}

export default ProfileView;