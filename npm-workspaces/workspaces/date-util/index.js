const availableFormats = {
    'dd-mm-yyyy': '$<day>-$<month>-$<year>',
    'dd/mm/yyyy': '$<day>/$<month>/$<year>',
    'yyyy-mm-dd': '$<year>-$<month>-$<day>',
    'yyyy/mm/dd': '$<year>/$<month>/$<day>',
}

const yymmdd = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/g
const ddmmyy = /(?<day>\d{2}).(?<month>\d{2}).(?<year>\d{4})/g

const stringToDateExps = {
    'dd-mm-yyyy': ddmmyy,
    'dd/mm/yyyy': ddmmyy,
    'yyyy-mm-dd': yymmdd,
    'yyyy/mm/dd': yymmdd,
}


export default class DateUtil {
    static formateDate(date, format) {
        if(!Object.keys(availableFormats).includes(format)){
            return{
                error: `the format ${format} is not available yet :(`
            }
        }
    }

    static formatString(date, currentFormat, expectedFormat){
        
    }
}