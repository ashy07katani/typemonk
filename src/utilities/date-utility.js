export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
export const getTestTime = (dateString)=>{
    const date= new Date(dateString)
const testTime=date.toLocaleTimeString()
return testTime
}
