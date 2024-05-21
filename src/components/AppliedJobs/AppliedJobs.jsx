import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            // const jobsApplied = [];
            // for (const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     if(job){
            //         jobsApplied.push(job);
            //     }
            // }
            console.log(jobsApplied);
        }
    }, [])

    return (
        <div>
            <h2>Applied Jobs</h2>
        </div>
    );
};

export default AppliedJobs;