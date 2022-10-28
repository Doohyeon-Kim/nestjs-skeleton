export const oneDay: number = 24 * 60 * 60 * 1000;

export const formatToDateTimeString = (date: string | null): string => {
    if (!date) {
        return '';
    }
    const dateTimeKR = new Date(date);
    dateTimeKR.setHours(dateTimeKR.getHours() + 9);
    return dateTimeKR.toISOString().replace(/(Z)/, 'T').split('.')[0];
    // return datetime.toISOString().replace(/(T|Z)/, ' ').split('.')[0];
};
//
// export function utcToDateString(){
//
// }
//
// export function localDateStringToUTCDate(dateString: string){
//     let utcDate: Date = new Date(dateString);
//     let localDate:Date = new Date();
//     localDate.setHours(utcDate.getDate() + 9);
//     return localDate;
// }
//
// export function utcDateToLocalDateString(date: Date):string{
//     const dateTimeKR = new Date(date);
//     dateTimeKR.setHours(dateTimeKR.getHours() + 9);
//     return dateTimeKR.toISOString().replace(/(Z)/, 'T').split('.')[0];
// }
//
// export function utcDateToDateString(date: Date):string{
//     return new Date(date).toISOString().replace(/(Z)/, 'T').split('.')[0];
// }
//
// export function currentTime(): string {
//     const currentTimeUTC: Date = new Date();
//     return moment(currentTimeUTC).local(true).format("YYYY-MM-DD HH:mm:ss");
// }
//
// export function subtractTime(dateTime: Date, value:number): string {
//     const currentTimeUTC: Date = new Date();
//     return moment( dateTime.setTime(dateTime.getTime() - value)).local(true).format("YYYY-MM-DD HH:mm:ss");
// }
//
// export function getCurrentDateISOString(): string {
//     const currentTimeUTC: Date = new Date();
//     return moment(currentTimeUTC).local(true).format("YYYY-MM-DDTHH:mm:ss");
// }
//
// export function getLocalDateStringAddedDays(dateString: string, amount: number) {
//     return moment(dateString).local(true).add(amount, 'days').format('YYYY-MM-DDTHH:mm:ss');
// }
