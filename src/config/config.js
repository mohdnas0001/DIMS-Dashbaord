export const studentTabs = [
    { 
      name: 'Dashboard', 
      icon: '/images/navbar/dashboard.svg', 
      activeIcon: '/images/navbar/active-dashboard.svg', 
      path: '/student/home' 
    },
    { 
      name: 'Courses', 
      icon: '/images/navbar/course.svg', 
      activeIcon: '/images/navbar/course.svg', 
      path: '/student/course' 
    },
    { 
      name: 'Resources', 
      icon: '/images/navbar/faculty.svg', 
      activeIcon: '/images/navbar/active-faculty.svg', 
      path: '/student/resources' 
    },
    { 
      name: 'Result', 
      icon: '/images/navbar/result.svg', 
      activeIcon: '/images/navbar/active-result.svg', 
      path: '/student/result' 
    },
    { 
      name: 'Faculty', 
      icon: '/images/navbar/faculty.svg', 
      activeIcon: '/images/navbar/active-faculty.svg',
      path: '/student/faculty' 
    },
    { 
      name: 'Events & News', 
      icon: '/images/navbar/events-news.svg', 
      activeIcon: '/images/navbar/active-events-news.svg', 
      path: '/student/events-news' 
    },
    { 
      name: 'Notification', 
      icon: '/images/navbar/notifications.svg', 
      activeIcon: '/images/navbar/active-notifications.svg', 
      path: '/student/notification' 
    },
  ];
 

  export const adminTabs = [
    { name: "Dashboard", path: "/admin/home", icon: "/images/icons/home.svg", activeIcon: "/images/icons/home-active.svg" },
    { name: "Manage Users", path: "/admin/users", icon: "/images/icons/users.svg", activeIcon: "/images/icons/users-active.svg" },
    { name: "Reports", path: "/admin/reports", icon: "/images/icons/reports.svg", activeIcon: "/images/icons/reports-active.svg" },
  ];
  
  export const facultyTabs = [
    { name: "Dashboard", path: "/faculty/home", icon: "/images/icons/home.svg", activeIcon: "/images/icons/home-active.svg" },
    { name: "Manage Courses", path: "/faculty/courses", icon: "/images/icons/courses.svg", activeIcon: "/images/icons/courses-active.svg" },
    { name: "Student Performance", path: "/faculty/performance", icon: "/images/icons/performance.svg", activeIcon: "/images/icons/performance-active.svg" },
  ];
  

  export const semesters = [
    '100L First Semester',
    '100L Second Semester',
    '200L First Semester',
    '200L Second Semester',
    '300L First Semester',
    '300L Second Semester',
    '400L First Semester',
    '400L Second Semester',
  ];

  export const results = [
    {
      lecturer: "Dr. Jane Smith",
      profilePicture: "https://api.startup.gov.ng/api/v1/files/4474675d-e00e-4526-9407-a3d5485fe638.png",
      title: "Advanced Algorithms",
      code: "CS502",
      unit: "3",
      score: "85"
    },
    {
      lecturer: "Prof. John Doe",
      profilePicture: "https://api.startup.gov.ng/api/v1/files/4474675d-e00e-4526-9407-a3d5485fe638.png",
      title: "Distributed Systems",
      code: "CS504",
      unit: "4",
      score: "92"
    },
    {
      lecturer: "Dr. Emily Johnson",
      profilePicture: "https://api.startup.gov.ng/api/v1/files/4474675d-e00e-4526-9407-a3d5485fe638.png",
      title: "Machine Learning",
      code: "CS506",
      unit: "3",
      score: "88"
    }
  ];
  