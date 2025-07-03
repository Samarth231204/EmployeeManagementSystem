const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCount: { active: 0, completed: 1, failed: 1, newTask: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue with user login API",
        date: "2025-04-10T10:30:00Z",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update README",
        description: "Add installation steps and screenshots",
        date: "2025-04-05T14:00:00Z",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy to staging",
        description: "Staging deployment failed due to missing env variables",
        date: "2025-04-08T17:15:00Z",
        category: "Deployment"
      }
    ]
  },
  {
    id: 2,
    firstName: "Diya",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 0, completed: 2, failed: 1, newTask: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design login page",
        description: "Create responsive UI for login screen",
        date: "2025-04-13T11:00:00Z",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare pitch deck",
        description: "Slides for investor meeting",
        date: "2025-04-02T09:00:00Z",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit bug report",
        description: "Log UI issues on dashboard",
        date: "2025-04-01T16:00:00Z",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Optimize images",
        description: "Reduce image sizes for faster load time",
        date: "2025-04-03T12:00:00Z",
        category: "Performance"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 1, completed: 2, failed: 0, newTask: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Research competitors",
        description: "Analyze key features from 3 competitors",
        date: "2025-04-12T08:00:00Z",
        category: "Research"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix mobile nav",
        description: "Navigation menu doesn't toggle correctly",
        date: "2025-04-06T15:00:00Z",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email template",
        description: "Create reusable template for marketing emails",
        date: "2025-04-04T18:00:00Z",
        category: "Marketing"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 0, completed: 2, failed: 1, newTask: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create test cases",
        description: "Write test cases for login and signup modules",
        date: "2025-04-11T09:00:00Z",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Run UI audit",
        description: "Failed to complete UI consistency check",
        date: "2025-04-07T13:00:00Z",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Sync meeting notes",
        description: "Summarize and upload to Notion",
        date: "2025-04-05T10:30:00Z",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client feedback",
        description: "Compile feedback from last sprint",
        date: "2025-04-03T16:30:00Z",
        category: "Communication"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 0, completed: 2, failed: 1, newTask: 1 },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update user flow",
        description: "Revise onboarding journey for new users",
        date: "2025-04-13T14:45:00Z",
        category: "UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix search bar",
        description: "Search not returning expected results",
        date: "2025-04-09T10:30:00Z",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Push to Git",
        description: "Code pushed to remote repository",
        date: "2025-04-06T17:00:00Z",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare weekly report",
        description: "Summarize project status and blockers",
        date: "2025-04-04T08:45:00Z",
        category: "Reporting"
      }
    ]
  }
];

  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];

  export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))  
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
  }