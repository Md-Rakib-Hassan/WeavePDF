import useAxiosPublic from "../../hooks/useAxiosPublic";

const AddNumber = () => {
    const axiosPublic = useAxiosPublic();
    const handleUpload = (e) =>{
        e.preventDefault();
        const form = e.target;
        const filedata = document.getElementById('input').files[0];
        const position = form.position.value;
        

        
    }
    return (
        <div>
            <form onSubmit={handleUpload} action="">
            <input type="file" accept="application/pdf" name="file" id="input" /><br />
            <label htmlFor="position">Position for Page Number</label>
            <select name="position" id="">
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="middle">Middle</option>
            </select><br />
            <input type="submit" value="Add Number" />
            </form>
        </div>
    );
};

export default AddNumber;
