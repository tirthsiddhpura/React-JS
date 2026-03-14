import React from 'react'
import JobCard from './JobCard'

const MulCard = () => {
    const jobsData = [
        {
            id: 1,
            logo: "A",
            logoBg: "bg-orange-500",
            company: "Amazon",
            postedTime: "5 days ago",
            title: "Senior UI/UX Designer",
            tags: ["Part-time", "Senior level"],
            salary: "$120/hr",
            location: "San Francisco, CA",
            saved: false
        },
        {
            id: 2,
            logo: "G",
            logoBg: "bg-blue-500",
            company: "Google",
            postedTime: "30 days ago",
            title: "Graphic Designer",
            tags: ["Full-time", "Flexible schedule"],
            salary: "$150 - 220k",
            location: "Mountain View, CA",
            saved: true
        },
        {
            id: 3,
            logo: "D",
            logoBg: "bg-pink-500",
            company: "Dribbble",
            postedTime: "18 days ago",
            title: "Senior Motion Designer",
            tags: ["Contract", "Remote"],
            salary: "$85/hr",
            location: "San Francisco, CA",
            saved: false
        },
        {
            id: 4,
            logo: "M",
            logoBg: "bg-blue-600",
            company: "Meta",
            postedTime: "3 months ago",
            title: "UX Designer",
            tags: ["Full-time", "In office"],
            salary: "$200 - 250k",
            location: "New York, NY",
            saved: false
        },
        {
            id: 5,
            logo: "A",
            logoBg: "bg-red-500",
            company: "Airbnb",
            postedTime: "1 day ago",
            title: "Junior UX/UI Designer",
            tags: ["Contract", "Remote"],
            salary: "$100/hr",
            location: "San Francisco, CA",
            saved: false
        },
        {
            id: 6,
            logo: "🍎",
            logoBg: "bg-black",
            company: "Apple",
            postedTime: "6 days ago",
            title: "Graphic Designer",
            tags: ["Full-time", "Flexible schedule"],
            salary: "$85 - 120k",
            location: "Cupertino, CA",
            saved: true
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-100 to-purple-200 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Job Opportunities</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {jobsData.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MulCard
