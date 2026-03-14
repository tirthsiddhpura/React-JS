import React from 'react'
import { Bookmark } from 'lucide-react'

const JobCard = ({ job }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${job.logoBg} flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}>
                        {job.logo}
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">{job.company}</h3>
                        <p className="text-xs text-gray-500">{job.postedTime}</p>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-yellow-400">
                    <Bookmark className="w-5 h-5" fill={job.saved ? "currentColor" : "none"} />
                </button>
            </div>

            <h2 className="text-lg font-bold text-gray-900 mb-3">{job.title}</h2>

            <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <p className="text-lg font-bold text-gray-900">{job.salary}</p>
                    <p className="text-xs text-gray-500">{job.location}</p>
                </div>
                <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-800 transition">
                    Apply now
                </button>
            </div>
        </div>
    )
}

export default JobCard
