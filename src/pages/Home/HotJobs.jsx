import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res =>res.json())
        .then(data => 
            setJobs(data))
    })

 
    return (
        <div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
                {
                    jobs.map(job => <HotJobsCard job={job} key={job._id}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;