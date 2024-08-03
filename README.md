# one.edu

[![Watch the video](https://github.com/TheCleverIdiott/one.edu/blob/master/videopreview.jpg)](https://youtu.be/tz962W-xpQ4)

## Introduction
one.edu is an all-in-one educational platform designed to help students manage their academic responsibilities more effectively. It tackles common problems such as disorganization, limited access to study resources, lack of motivation, and struggles with understanding course material. The platform incentivizes students by providing rewards for completing tasks and assignments on time, attending classes regularly, and helping peers by solving their doubts.

## Key Features
- **Task Management**: Track and manage assignments, projects, and deadlines efficiently.
- **Attendance Tracking**: Monitor class attendance and receive incentives for regular attendance.
- **Resource Library**: Access study materials, previous year questions, and notes.
- **Doubt Solving**: Participate in a discussion forum where students can post and answer questions.
- **Progress Tracker**: Keep track of grades and academic performance.
- **Incentive System**: Earn 'study coins' for completing tasks and use them to redeem books or courses.
- **Integrated Calendar**: Sync with Google Calendar to manage events and deadlines.

## Problem Statement
Students face several challenges that hinder their academic success:
1. **Disorganization**: Difficulty in keeping track of assignments and deadlines.
2. **Limited Study Resources**: Lack of access to quality study materials and resources.
3. **Lack of Motivation**: Struggle to stay motivated and productive.
4. **Understanding Course Material**: Difficulty in comprehending and retaining course content.

## Our Solution
one.edu addresses these challenges by providing a structured platform that:
- Encourages students to complete tasks and assignments on time.
- Promotes regular class attendance.
- Facilitates peer-to-peer learning through doubt-solving features.
- Provides easy access to study resources and progress tracking.

## Challenges Faced
Developing one.edu involved overcoming several challenges:
- **UI/UX Design**: Creating a modern, user-friendly interface that appeals to students.
- **Functionality vs. Aesthetics**: Balancing a visually appealing design with practical functionality.
- **Integration**: Seamlessly integrating multiple features such as task management, attendance tracking, and resource access.

## File Structure

```
one.edu/
│
├── src/
│   ├── components/
│   │   ├── TaskManager.js
│   │   ├── AttendanceTracker.js
│   │   ├── ResourceLibrary.js
│   │   └── DiscussionForum.js
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── Dashboard.js
│   │   └── Profile.js
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   │
│   ├── utils/
│   └── App.js
│
├── public/
│   ├── index.html
│   └── manifest.json
│
├── .gitignore
├── package.json
├── README.md
└── video-preview.jpg
```

```
one.edu/
│
├── credit_shop/
│   └── fc
│
├── dashboard/
│   └── fc
│
├── forum/
│   └── fc
│
├── home-page/
│   └── fc
│
├── images/
│   └── Add files via upload
│
├── login_page/
│   └── fc
│
├── README.md
├── index.html
├── script.js
├── style.css
└── videopreview.jpg
```


## Installation
To run one.edu locally, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheCleverIdiott/one.edu.git
   cd one.edu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

## Usage
1. **Login and Sign Up**: Users can log in using their existing ID or sign up for a new account.
2. **Dashboard**: After logging in, users are taken to the welcome page and then to the student dashboard.
   - **Task Management**: View completed and pending tasks updated via Google Classroom.
   - **Class Assessment**: View evaluations by the class teacher.
   - **Progress Tracker**: See subject-wise marks obtained in the last three exams.
   - **Attendance Tracker**: Monitor lecture attendance.
   - **Recent Submissions**: Check recent submissions via Google Classroom.
3. **Side Panel Features**:
   - **Student Contacts**: Directory for storing student contacts, with filtering and search options.
   - **Faculty Contacts**: Similar to student contacts, for storing faculty contacts.
   - **Profile Form**: Update profile information.
   - **Calendar**: Add and view events, sorted chronologically.
   - **Credit System**: Earn credits for submitting assignments on time and attending classes regularly. Exchange credits for rewards.
4. **Additional Features**:
   - **Results**: View and download examination results.
   - **Resource Archive**: Access notes, books, and previous year questions for different subjects.
   - **Discussion Forum**: Post and answer questions for peer-to-peer discussion. Attach links and images to questions.

## Contributing
We welcome contributions to improve one.edu. Please fork the repository and submit pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any queries or issues, please contact Aritra Ghosh at hello@aritraghosh.co
