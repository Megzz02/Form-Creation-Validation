// JavaScript Code (fetch-data.js)

// Asynchronous function to fetch user data from the API
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();
        
        // Clear loading message
        dataContainer.innerHTML = '';
        
        // Create a user list element
        const userList = document.createElement('ul');
        
        // Loop through users and append them to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors during fetch
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);