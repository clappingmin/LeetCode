/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    // 방법 1
    // return s.trim().split(' ').pop().length;

    // 방법 2 
    // s = s.trim();
    // let length = 0;
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] !== ' ')
    //         length++;
    //     else length = 0;
    // }

    // return length;

    // 방법 3 - 메서드 안쓰기
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {

        // 맨 뒤 공백은 패스
        if (length === 0 && s[i] === ' ')
            continue;

        if (s[i] !== ' ')
            length++;
        else break;
    }

    return length;
};
