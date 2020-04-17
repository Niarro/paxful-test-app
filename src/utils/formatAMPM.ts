export function formatAMPM(date: Date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  let resMinutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + resMinutes + ' ' + ampm;
  return strTime;
}
