

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
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
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Job;