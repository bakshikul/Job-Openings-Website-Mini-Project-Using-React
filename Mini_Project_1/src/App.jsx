import React from 'react'
import Cards from './Components/Cards'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://q8.itc.cn/q_70/images03/20250524/c684bc7f504a43a4bdcb0d71d2d6b828.jpeg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.HKoDLEf2PVCQK500SS4TAwHaHa?pid=Api&P=0&h=180",
      companyName: "Apple",
      datePosted: "5 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://tse1.mm.bing.net/th/id/OIP.mzp7qjNYxT5a1WBZG52e0AHaHI?pid=Api&P=0&h=180",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "London, UK"
    },
    {
      brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Seattle, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/571/original/netflix-logo-on-transparent-background-free-vector.jpg",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$80/hr",
      location: "Los Angeles, USA"
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.7IgX6OczyQrC3djWBE8xnwHaHa?pid=Api&P=0&h=180",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.QZRUtEA8SeOZrUtbE7XCegHaHa?pid=Api&P=0&h=180",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.tXLN6CSmxYzHiq0ArWwvEQHaHa?pid=Api&P=0&h=180",
      companyName: "NVIDIA",
      datePosted: "1 day ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hr",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.i46ZYQ96Cr4QQlisKZXN0gHaHa?pid=Api&P=0&h=180",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Data Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Amsterdam, Netherlands"
    },
    {
      brandLogo: "https://tse2.mm.bing.net/th/id/OIP.xU7DxbgmJaBqHbtYsF2B5QHaFj?pid=Api&P=0&h=180",
      companyName: "Adobe",
      datePosted: "3 days ago",
      post: "UI/UX Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India"
    }
  ];

  // export default jobOpenings;
  return (
    <div>
      <div className="Parent">
        {jobOpenings.map(function(elem) {
          return <Cards Company={elem.companyName} Logo={elem.brandLogo} Post={elem.post} Location={elem.location} Pay={elem.pay} DatePosted={elem.datePosted} Tag1={elem.tag1} Tag2={elem.tag2} />
        })}
      </div>
    </div>
  )
}

export default App
