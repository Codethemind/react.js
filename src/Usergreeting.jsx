function Usergreeting(prop){
    if(prop.isLogged){
        return <h1>welcome {prop.username}</h1>
    }
}
export default Usergreeting