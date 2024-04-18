export const validation = (email,password)=>{
    const isemailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if (!isemailvalid){
        return  "Please enter a valid email address.";
    }
    if(!ispasswordvalid){
        return  "Password must be at least 8 characters long"
    }
    return null

}