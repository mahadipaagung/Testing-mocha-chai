function volumeBola(r){
    const result = 4/3 * Math.PI * r * r * r
    
    if(r === undefined || r === null){
        return 'Data kosong'
    }    
    if(typeof r !== 'number'){
        return 'Parameter adalah string'
    }
    return result
}

export default volumeBola