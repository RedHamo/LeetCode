/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let result = {}
    for(let el of emails){
        let val = el.split("@")
        val[0] = val[0].replace(/\+.*/, "").replace(/\./g, "")
        result[val.join("@")] = true;
    }
    return Object.keys(result).length;
};
