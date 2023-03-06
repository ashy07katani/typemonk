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
 export const  expireCookie = () =>{
	
	
	
	document.cookie=`access-token=""; expires=Sun, 20 Aug 2000 12:00:00 UTC; SameSite=None; path='/';`;
    document.cookie=`refresh-token=""; expires=Sun, 20 Aug 2000 12:00:00 UTC; SameSite=None; path='/';`;
	document.cookie=`username=""; expires=Sun, 20 Aug 2000 12:00:00 UTC;SameSite=None; path='/';`;
	
}
export default getCookie;