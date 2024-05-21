import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = filter => {
        if(filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs =appliedJobs.filter(job => job.remote_or_onsite==='Remote');
            setDisplayJobs(remoteJobs)
        }
        else if(filter === 'onsite'){
            const onsiteJobs =appliedJobs.filter(job => job.remote_or_onsite==='Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }

    const jobs = useLoaderData();
    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // const jobsApplied = [];
            // for (const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     if(job){
            //         jobsApplied.push(job);
            //     }
            // }
            // console.log(jobsApplied);
        }
    }, [jobs])

    return (
        <div>
            <h2>Applied Jobs: {appliedJobs.length}</h2>
            {/* dropdown */}
            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
    <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
  </ul>
</details>

            {
            displayJobs.map(job => <ul job={job} key={job.id}>
                <li><span>{job.job_title}</span>
                <span>{job.company_title}</span> 
                <span>{job.remote_or_onsite}</span>
                </li>
            </ul>)
            }
        </div>
    );
};

export default AppliedJobs;