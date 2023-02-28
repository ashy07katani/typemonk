const getCookie = (cookieName)=>{
	let cook = decodeURIComponent(document.cookie)
	
	let ca = cook.split(";")
	
	let fetchedCookie=""
	
	ca.forEach((item)=>{
		console.log("cookie name ",cookieName,item);
		if(item.indexOf(`${cookieName}=`)>=0)
			{ 
				fetchedCookie= item.slice(item.indexOf(`${cookieName}=`)+`${cookieName}=`.length)}
	}
	)
	console.log("inside getcookie function",fetchedCookie)
	return fetchedCookie
}
export default getCookie;