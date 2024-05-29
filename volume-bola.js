const volumeBola = (r) => {
    if(r === undefined || r === null){
        return 'Data kosong'
    }    
    if(typeof r !== 'number'){
        return 'Parameter adalah string'
    }
    const result = 4/3 * Math.PI * r * r * r
    return Math.round(result)
}

export default volumeBola