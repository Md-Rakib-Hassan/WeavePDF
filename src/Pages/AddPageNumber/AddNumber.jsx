import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddNumber = () => {
    const axiosPublic = useAxiosPublic();
    const handleUpload = () =>{
        const filedata = document.getElementById('input').files[0];
        console.log(filedata);
        // const fileBlob = new Blob([file], { type: 'application/pdf' })
        // const url = URL.createObjectURL(fileBlob).replace('blob:','');
        // console.log(url);
        // const url = 'https://www.uou.ac.in/sites/default/files/slm/BHMAECC-II.pdf'
        const obj = { file: 'cdcdcpf', filedata }
        axiosPublic.post('/add-number',obj)
        .then(res=>console.log(res.data))
    }
    return (
        <div>
            <input onChange={handleUpload} type="file" accept="application/pdf" name="" id="input" />
        </div>
    );
};

export default AddNumber;