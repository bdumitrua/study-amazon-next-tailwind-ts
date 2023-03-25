export const getStoreLocal = (name: string) => { 
    if (typeof localStorage === 'undefined'){
        return null
    }

    const ls = localStorage.getItem(name) 
    return ls ? JSON.parse(ls) as string : null 
} 