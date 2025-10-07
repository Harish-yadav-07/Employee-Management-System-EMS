
const Employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile the monthly sales data into a comprehensive report, including revenue trends, client acquisition statistics, and a summary of top-performing products to present to the management team.",
        "date": "2025-10-02",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project requirements, timelines, and deliverables with the client, ensuring that all concerns are addressed and expectations are clearly aligned.",
        "date": "2025-10-04",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Add new client information to the CRM system, update contact details, log interactions, and ensure all data is accurate and up-to-date for future reference.",
        "date": "2025-09-28",
        "category": "Admin",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Riya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Design Homepage",
        "description": "Create initial mockups for the homepage redesign, focusing on user experience, intuitive navigation, and responsive layouts suitable for multiple devices.",
        "date": "2025-10-03",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Login Bug",
        "description": "Debug and resolve the login form error, identify root causes, implement a secure solution, and test thoroughly to ensure all user accounts can access the system without issues.",
        "date": "2025-09-30",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Sync",
        "description": "Conduct a weekly synchronization meeting with the development team to discuss ongoing tasks, blockers, and project updates to ensure smooth collaboration.",
        "date": "2025-10-05",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review PRs",
        "description": "Review pending pull requests on GitHub, provide feedback on code quality, ensure best practices are followed, and approve changes that meet project standards.",
        "date": "2025-09-29",
        "category": "Code Review",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Vihaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Update Documentation",
        "description": "Revise the API documentation for the new release, ensuring all endpoints, parameters, and examples are clearly documented for developers and stakeholders.",
        "date": "2025-10-01",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Unit Testing",
        "description": "Write comprehensive unit tests for new backend services, verify edge cases, and confirm that all functions perform as expected under various scenarios.",
        "date": "2025-10-06",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy Update",
        "description": "Push the latest code changes to the staging server, verify deployment success, and monitor logs for any errors or inconsistencies.",
        "date": "2025-09-29",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Ishita",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Market Research",
        "description": "Analyze competitor pricing strategies, gather market trends, and prepare insights that can influence product positioning and strategic planning.",
        "date": "2025-10-02",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Campaign",
        "description": "Plan and schedule posts for next month’s campaign, including content creation, hashtags, and target audience engagement strategies.",
        "date": "2025-10-07",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Presentation",
        "description": "Revamp slides for the board meeting, improving clarity, visuals, and incorporating the latest performance metrics and strategic initiatives.",
        "date": "2025-09-27",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Missed Deadline Report",
        "description": "Submit a detailed report on project delays, highlighting reasons for missed deadlines, potential risks, and recommended corrective actions.",
        "date": "2025-09-25",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Karan",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Database Backup",
        "description": "Perform the weekly database backup, ensuring data integrity, proper storage, and that all critical files are securely saved for disaster recovery purposes.",
        "date": "2025-09-30",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize Query",
        "description": "Analyze slow SQL queries, improve their efficiency, and implement indexing or query restructuring to enhance overall database performance.",
        "date": "2025-10-03",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server Monitoring",
        "description": "Monitor server uptime, CPU usage, and memory consumption, generate reports on server health, and proactively address any potential issues.",
        "date": "2025-10-02",
        "category": "Ops",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  }
];


const Admin = [
  {
    "id": 101,
    "firstname": "Harish",
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(Employees));
    localStorage.setItem("admin", JSON.stringify(Admin));
}

export const getLocalStorage = () => {
   const employeesData = JSON.parse(localStorage.getItem("employees"));
   const adminData = JSON.parse(localStorage.getItem("admin"));
   return {employeesData, adminData}; 
}