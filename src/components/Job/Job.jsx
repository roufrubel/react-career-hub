import { CiLocationOn } from "react-icons/ci";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="w-20" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex space-x-6">
    <button className="border rounded border-[#7E90FE] text-[#7E90FE] px-4 py-2">{remote_or_onsite}</button>
    <button className="border rounded border-[#7E90FE] text-[#7E90FE] px-4 py-2">{job_type}</button>
    </div>
    <div className="flex justify-between">
    <div className="flex justify-between items-end space-x-2">
            <CiLocationOn className="text-2xl"></CiLocationOn>
        <h2>{location}</h2>
        </div>
        <div className="flex justify-between items-center space-x-2">
        <MdCurrencyExchange className="text-2xl"></MdCurrencyExchange>
        <h2>{salary}</h2>
    </div>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
     </div>
</div>
    );
};

export default Job;