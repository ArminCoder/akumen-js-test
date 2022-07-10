function check (arr, expectedCheck) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return console.log('%c Stop trying to break me, OMG: "' + arr + '"', 'color: #fff; background: red; padding: 20px; margin: 10px 0')
    }

    let checkCase = typeCheck(arr);
    if (checkCase === 'neither') {
        coolConsole(arr, checkCase, expectedCheck)
        return
    }

    let stopChecking = false
    
    arr.forEach((item, index) => {
        if (index === 0 || stopChecking) {
            return
        }
        let currentCase = '';
        if (item < arr[index - 1]) {
            currentCase = 'decreasing';
        }

        if (item > arr[index - 1]) {
            currentCase = 'increasing';
        }

        if (currentCase !== checkCase) {
            checkCase = 'neither'
            return stopChecking = true;
        }
    })
    coolConsole(arr, checkCase, expectedCheck)
}

function typeCheck (arr) {
    let increaseCase;
    if(arr[1] > arr[0]) {
        increaseCase = 'increasing';
    } else if (arr[1] < arr[0]) {
        increaseCase = 'decreasing';
    } else {
        increaseCase = 'neither';
    }
    return increaseCase
}

function coolConsole (arr, checkCase, expectedCase) {
    console.log('%c array: ' + arr, 'color: #fff;')
    console.log('%c expected: ' + expectedCase, 'color: orange;')
    console.log('%c result: ' + checkCase, 'color: #e26161;')

    if(checkCase === expectedCase) {
        console.log('%c success', 'background-color: green;padding: 10px;color: #fff;')
    } else {
        console.log('%c well sh*t I failed, but how?? :(', 'color: #eee; background-color: red')
    }
    console.log('------------------------')
}

check([1, 2, 3], 'increasing')
check([3, 2, 1], 'decreasing') 
check([1, 2, 1], 'neither') 
check([1, 1, 2], 'neither')


console.log('%c More checks:', 'color: #fff; background-color: #444; padding: 20px; margin: 20px 0; border-radius: 2px')

check([1, 2], 'increasing')

check([3, 2, 1, 0, -1, -2], 'decreasing') 

check([1])

check([3, 2, 1, 0, -1, 0], 'neither') 
check([1, 2, 1, 1, 2, 3], 'neither')

check({test: 'test'})

check([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, -10], 'neither') 

check('ahahha')

check([1, 20, 30, 300000000], 'increasing')
