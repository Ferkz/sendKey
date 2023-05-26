const date = new Date
const formatter = Intl.DateTimeFormat('pt-br',{
    dateStyle:'short',
    timeStyle:"short"
})
const dataHelper = formatter.format(date)
module.exports = dataHelper
