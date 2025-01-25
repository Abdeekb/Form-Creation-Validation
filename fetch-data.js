document.addEventListener('DOMContentLoaded', async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Element to display data

    // Async function to fetch and display user data
    const fetchUserData = async () => {
        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            const users = await response.json(); // Parse JSON data

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through users and create list items for each user
            users.forEach(user => {
                const userItem = document.createElement('li');
                userItem.textContent = user.name; // Set the user's name
                userList.appendChild(userItem); // Append <li> to <ul>
            });

            // Append the user list to the container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    };

    // Invoke the fetch function
    fetchUserData();
});
