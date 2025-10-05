localStorage.clear();

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
        "description": "Compile the monthly sales data into a report.",
        "date": "2025-10-02",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Meeting",
        "description": "Discuss project requirements with client.",
        "date": "2025-10-04",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM",
        "description": "Add new client information to CRM.",
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
        "description": "Create initial mockups for homepage redesign.",
        "date": "2025-10-03",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Login Bug",
        "description": "Debug and fix login form error.",
        "date": "2025-09-30",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Team Sync",
        "description": "Weekly sync with the development team.",
        "date": "2025-10-05",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review PRs",
        "description": "Review pending GitHub pull requests.",
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
        "description": "Revise API documentation for new release.",
        "date": "2025-10-01",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Unit Testing",
        "description": "Write test cases for new backend services.",
        "date": "2025-10-06",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy Update",
        "description": "Push latest changes to staging server.",
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
        "description": "Analyze competitor pricing strategies.",
        "date": "2025-10-02",
        "category": "Research",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Social Media Campaign",
        "description": "Plan posts for next month’s campaign.",
        "date": "2025-10-07",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Presentation",
        "description": "Revamp slides for board meeting.",
        "date": "2025-09-27",
        "category": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Missed Deadline Report",
        "description": "Submit report on project delays.",
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
        "description": "Perform weekly database backup.",
        "date": "2025-09-30",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Optimize Query",
        "description": "Improve performance of slow SQL queries.",
        "date": "2025-10-03",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server Monitoring",
        "description": "Check uptime and CPU usage of servers.",
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