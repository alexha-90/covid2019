import moment from "moment";
//============================================================================//

export function easternTimeZoneFormatter(utcDate) {
  let estTime = (moment(utcDate).utcOffset('-0500').format('x'));
  estTime = new Date(parseInt(estTime));
  return moment(estTime).format("MM/DD/YYYY h:mm A") + " EST"
}
