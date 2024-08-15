document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;

    const eventList = document.getElementById('eventList');

    const listItem = document.createElement('li');

    listItem.textContent = `${eventName} is taking place on ${eventDate}. Time: ${eventTime} Venue: ${eventLocation}`;
    eventList.appendChild(listItem);

    document.getElementById('eventForm').reset();
});