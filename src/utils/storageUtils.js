export function getUser () {
    return localStorage.getItem('user') || null
}
export function isUser () {
    if(localStorage.getItem('user')){
        return true
    }else{
        return false
    }
}
export function removeUser () {
    localStorage.removeItem('user')
}
export function setUser (user) {
    localStorage.setItem('user',user)
}
