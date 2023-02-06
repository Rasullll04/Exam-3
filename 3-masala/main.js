const masala = alert('go to console.log')


const arrayMinus = (arr) => {
    let result = [];
    for(let i in arr){
        if(arr[i] < 0){
            result.push(arr[i]);
        }
    }
    console.log(result);
}

arrayMinus([0, -1 , 1 , 2, -2, -5,6 ,-7])