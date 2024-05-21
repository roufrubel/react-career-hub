import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const notify = () => toast("You have Applied successfully !");
    return (
        <div className="grid grid-cols-4 gap-6">
            <div className="col-span-3 border">  
            <h2>{jobs.length}</h2>
            <h2>{job.job_title}</h2>
            </div>
            <div className="col-span-1 border">
            <h2>{job.job_title}</h2>
            <button className="btn btn-outline"
            onClick={notify}
            >Apply Now</button>
            <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;