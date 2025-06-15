// Define the asynchronous function to fetch user data
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    const users = await response.json();

    // Clear any existing content
    dataContainer.innerHTML = '';

    // Create a list to display user names
    const userList = document.createElement('ul');

    // Iterate through the users and create list items
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors by displaying a message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Invoke the fetchUserData function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
