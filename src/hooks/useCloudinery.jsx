import axios from "axios";

const upload_preset = import.meta.env.VITE_UPLOAD_PRESET
const cloud_name = import.meta.env.VITE_CLOUD_NAME

const getFileUrl = async(file) =>{
    const formdata = new FormData()
    formdata.append('file', file)
    formdata.append('upload_preset', upload_preset)
    const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formdata)
    // console.log(res.data?.secure_url);
    return res.data?.secure_url
}

const useCloudinery = () => {
    return getFileUrl;
};

export default useCloudinery;