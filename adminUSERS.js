
    document.addEventListener("DOMContentLoaded", function() {
        const userList = [
            { id: 1, name: "Matthew Lim", course: "CS", section: "1-A" },
            { id: 2, name: "Mosses Ramos", course: "IT", section: "2A" },
            { id: 3, name: "Marie Abao", course: "CS", section: "3B" },
            { id: 4, name: "Jomark Abello", course: "IT", section: "4C" },
            { id: 5, name: "Emir Bahjin", course: "CS", section: "1-B" }
            // Add more user data as needed
        ];

        const userTable = document.getElementById("user-list");

        function populateUserList(users) {
            userTable.innerHTML = "";
            users.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.course}</td>
                    <td>${user.section}</td>
                    <td><button class="delete-btn" data-id="${user.id}">Delete</button></td>
                `;
                userTable.appendChild(row);
            });
        }

        populateUserList(userList);

        function deleteUser(userId) {
            userList.splice(userList.findIndex(user => user.id === userId), 1);
            populateUserList(userList);
        }

        document.addEventListener("click", function(event) {
            if (event.target.classList.contains("delete-btn")) {
                const userId = parseInt(event.target.getAttribute("data-id"));
                deleteUser(userId);
            }
        });

        document.getElementById("course-filter").addEventListener("change", function() {
            const selectedCourse = this.value;
            const selectedSection = document.getElementById("section-filter").value;
            const filteredUsers = userList.filter(user => {
                return (selectedCourse === "" || user.course === selectedCourse) &&
                       (selectedSection === "" || user.section === selectedSection);
            });
            populateUserList(filteredUsers);
        });

        document.getElementById("section-filter").addEventListener("change", function() {
            const selectedSection = this.value;
            const selectedCourse = document.getElementById("course-filter").value;
            const filteredUsers = userList.filter(user => {
                return (selectedSection === "" || user.section === selectedSection) &&
                       (selectedCourse === "" || user.course === selectedCourse);
            });
            populateUserList(filteredUsers);
        });
    });

