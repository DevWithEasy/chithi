import bn from "number-to-bangla";
const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);

    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(secondsAgo / 3600);
    const daysAgo = Math.floor(secondsAgo / 86400);

    if (daysAgo > 0) {
        return `${bn.engToNumber(daysAgo)} দিন আগে`;
    } else if (hoursAgo > 0) {
        return `${bn.engToNumber(hoursAgo)} ঘন্টা আগে`;
    } else if (minutesAgo > 0) {
        return `${bn.engToNumber(minutesAgo)} মিনিট আগে`;
    } else {
        return 'কিছুক্ষন আগে';
    }
}

export default getTimeAgo