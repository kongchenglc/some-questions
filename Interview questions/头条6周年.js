var n = parseInt(readline());
    for (var i = 0; i < n; i++) {
        str1 = readline();
        A();
    }

    function A() {


        const NumArr = [];
        const XXArr = [];
        let isNum = false;

        for (let i = 0; i < str1.length; i++) {
            if (str1[i] === '6') {
                if (isNum) {
                    NumArr[NumArr.length - 1] = NumArr[NumArr.length - 1] + '6';
                } else {
                    NumArr.push('6');
                    isNum = true;
                }
            } else {
                XXArr.push(str1[i]);
                isNum = false;
            }
        }

        let NumArray = NumArr.map(item => {
            return Number(item);
        })


        for (let i = 0; i < XXArr.length; i++) {
            if (XXArr[i] === '*') {
                NumArray[i + 1] = NumArray[i] * NumArray[i + 1];
                NumArray.shift();
                XXArr.shift();
            } else if (XXArr[i] !== '*' && XXArr[i + 1] === '*') {
                NumArray[i + 2] = NumArray[i + 1] * NumArray[i + 2];
                NumArray.splice(i + 1, i + 1);
                XXArr.splice(i + 1, i + 1);
            }
        }

        let result = NumArray[0];
        for (let i = 0; i < NumArray.length - 1; i++) {
            if (XXArr[i] === '+') {
                result += NumArray[i + 1];
            } else {
                result -= NumArray[i + 1];
            }
        }
        result = String(result).split('');

        let theStr = ''


        function the0(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '6...6';
                    break;
                case 2:
                    theStr += '6...6';
                    break;
                case 3:
                    theStr += '6...6'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }

        function the1(Num) {
            switch (Num) {
                case 0:
                    theStr += '....6';
                    break;
                case 1:
                    theStr += '....6';
                    break;
                case 2:
                    theStr += '....6';
                    break;
                case 3:
                    theStr += '....6'
                    break;
                case 4:
                    theStr += '....6'
                    break;
            }
        }

        function the2(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '....6';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '6....'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }

        function the3(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '....6';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '....6'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }

        function the4(Num) {
            switch (Num) {
                case 0:
                    theStr += '6...6';
                    break;
                case 1:
                    theStr += '6...6';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '....6'
                    break;
                case 4:
                    theStr += '....6'
                    break;
            }
        }

        function the5(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '6....';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '....6'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }

        function the6(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '6....';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '6...6'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }

        function the7(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '....6';
                    break;
                case 2:
                    theStr += '....6';
                    break;
                case 3:
                    theStr += '....6'
                    break;
                case 4:
                    theStr += '....6'
                    break;
            }
        }

        function the8(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '6...6';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '6...6'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }

        function the9(Num) {
            switch (Num) {
                case 0:
                    theStr += '66666';
                    break;
                case 1:
                    theStr += '6...6';
                    break;
                case 2:
                    theStr += '66666';
                    break;
                case 3:
                    theStr += '....6'
                    break;
                case 4:
                    theStr += '66666'
                    break;
            }
        }


        for (let i = 0; i < 5; i++) {
            result.map(item => {
                switch (item) {
                    case '0':
                        the0(i);
                        break;
                    case '1':
                        the1(i);
                        break;
                    case '2':
                        the2(i);
                        break;
                    case '3':
                        the3(i);
                        break;
                    case '4':
                        the4(i);
                        break;
                    case '5':
                        the5(i);
                        break;
                    case '6':
                        the6(i);
                        break;
                    case '7':
                        the7(i);
                        break;
                    case '8':
                        the8(i);
                        break;
                    case '9':
                        the9(i);
                        break;
                }
                theStr += '..'

            })
            theStr = theStr.slice(0, -2)
            print(theStr);
            theStr = ''
        }
    }