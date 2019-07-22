// Unix Epoch - January 1st 1970 00:00:00

const now = new Date('January 1 2001 6:25:01')
const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

const firstDate = new Date('August 01 2019 12:00:00')
const secondDate = new Date()

const firstTimestamp = firstDate.getTime()
const secondTimestamp = secondDate.getTime()

if(firstTimestamp < secondTimestamp){
    console.log(firstDate.toString())
} else if(secondTimestamp < firstTimestamp){
    console.log(secondDate.toString())
}

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

//    Using the moments library
// const now = moment()
// now.add(1, 'week').subtract(20, 'days') 
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(nowTimestamp)
// console.log(moment(nowTimestamp).toString())

const bday = moment()
// bday.year(1995).month(9).date(2)
console.log(bday.getYear())
// console.log(bday.format('MMM D, YYYY'))
