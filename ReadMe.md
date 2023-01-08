<div align="center">
      <h1>MIS</h1>
     </div>


# Description
MIS is a student management information system (MIS), that can be used by educational institutes to streamline the administration process. This project contains an admin Register and Login page. The admin is verified and allowed access to the admin dashboard. The dashboard contains the list of students enrolled. When we click on a particular student card, we can see further details like name, admission number, email address etc. The admin can add a new student by filling in the required input fields. The admin may edit a particular student's details or delete the student.

# Features
- Secured Admin Registration and Login via JWT Authentication
- Protected admin routes
- Students list represents each student in card format
- Each card contains further student details represented in tabular form
- The admin may edit student information or delete student if they have un-enrolled
- The admin can create a new student who has enrolled in the institute
- The student details and admin details are stored securely in MongoDB database
# Screenshots
 <img src="https://snipboard.io/dmh3Hr.jpg"> <img src="https://snipboard.io/ptkfVX.jpg"> <img src="https://snipboard.io/mL2KBH.jpg"> <img src="https://snipboard.io/KlHIVm.jpg"> <img src="https://snipboard.io/UVHA7q.jpg">
# Tech Used
 ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
      
# Contributors:
### Vinayaka
- Created the student model and backend of the project
- Created the frontend using React and Bootstrap
- Implemented CRUD functionality
- Connected the frontend and backend
### Dhruv 
- Created the admin model
- Added Admin authentication using JWT Auth
- Created Admin register and login pages in EJS
### How to Setup:
- Step 1: Download the zip of the project
- Step 2: open two terminals
- Step 3: In first terminal, cd into frontend. In second terminal cd into backend
- Step 4: run 'npm install' on both terminals
- Step 5: run 'npm start' on both terminals    