const convertDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'long' });
    return formattedDate;
}

const convertTime = (dateString) => {
    const date = new Date(dateString);
    const formattedTime = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    return formattedTime;
}

export { convertDate, convertTime }