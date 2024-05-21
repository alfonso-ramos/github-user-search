export function formatJoinedDate(apiDate: string): string {
    const date = new Date(apiDate);
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [month, day, year] = formattedDate.split(' ');

    return `Joined ${day} ${month} ${year}`;
}