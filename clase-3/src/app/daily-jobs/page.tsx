import React from 'react'
import getDailyJobs from '../utils/server-utils'
import Link from 'next/link'

const DailyJobs = async() => {
  const jobs = await getDailyJobs()
  const filteredData = jobs.data
  return (
    <div>
      <div className="flex justify-center m-16 p-5 w-[50%] before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-700 relative  ">
        <h2 className="relative text-white font-bold">Dayly Jobs</h2>
      </div>

      <div className='m-20'>
        {filteredData.map((job) => (
          <Link href={job.job_apply_link}>
            <div className="flex justify-between">
                <p>{job.job_title}</p>
                <img src={job.employer_logo ? job.employer_logo : "/job-search.png" } alt="Employer Logo" width={100} height={100} />
            </div>
          </Link>
          
        
        ))}
      </div>
            
        
     </div>
  )
}

  
export default DailyJobs