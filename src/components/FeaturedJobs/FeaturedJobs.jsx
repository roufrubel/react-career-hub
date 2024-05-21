import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
            <p className="text-base">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
            {
                jobs.slice(0, dataLength).map(job =><Job job={job} key={job.id}></Job>)
            }
             
            </div>
            
            <button
            className={dataLength === jobs.length ? 'hidden' : 'btn btn-primary mt-4'}
            onClick={ () => setDataLength(jobs.length)}
         >Show All</button>
            
        </div>
    );
};

export default FeaturedJobs;