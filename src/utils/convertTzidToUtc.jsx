export default function convertTzidToUtc(timeZone) {
    const now = new Date();
    const utcOffset = -now.getTimezoneOffset(); // Offset hiện tại của hệ thống (phút)
    
    // Tạo một date ở timeZone mong muốn
    const dateInTz = new Intl.DateTimeFormat("en-US", { 
        timeZone, 
        hour12: false, 
        timeZoneName: "longOffset" 
    }).formatToParts(now);

    const offsetPart = dateInTz.find(part => part.type === "timeZoneName");
    
    return offsetPart ? offsetPart.value.replace("GMT", "UTC") : `UTC${utcOffset / 60}`;
}

// Ví dụ
console.log(convertTzidToUtc("Europe/Paris"));  // "UTC+1"
console.log(convertTzidToUtc("Asia/Tokyo"));    // "UTC+9"
console.log(convertTzidToUtc("America/New_York")); // "UTC-4" hoặc "UTC-5" (tùy DST)
