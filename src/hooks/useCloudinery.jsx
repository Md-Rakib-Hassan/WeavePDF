import axios from "axios";

const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
const cloud_name = import.meta.env.VITE_CLOUD_NAME

const getFileUrl = (file) =>{
    const formdata = new FormData()
    formdata.append('file', file)
    formdata.append('upload_preset', upload_preset)
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formdata)
        .then(res=>{
            console.log(res.data);
            // return(res.data.secure_url)
            url = res.data.secure_url
        })
}

const useCloudinery = () => {
    return getFileUrl;
};

export default useCloudinery;