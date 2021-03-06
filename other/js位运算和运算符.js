// 为了解 1342.将数字变成 0 的操作次数 问题

// 左移相当于×2，左移几位，乘几次2 2<<2 === 8       0b10<<2 === 0b1000
    // 左移会保留它所操作数值的符号 -2<<2 === -8    0b10<<2 === 0b1000
// 有符号右移相当于/2，右移几位，除几次2 8>>2 === 2       0b1000>>2 === 0b10
    // 右移会舍弃最后一位，不管是0还是1 7>>1 === 2  0b101>>1 === 0b10
    // 有符号右移>>会保留它所操作数值的符号 -8>>2 === -2     0b10>>2 === 0b1000
// 无符号右移包括符号位也会跟着一起右移
    // -5在内存中的存储形式为：1111 1111 1111 1111 1111 1111 1111 1011
        // 在计算机中，负数以其正值的补码形式表达。
        // 先获取5的原码    0000 0000 0000 0000 0000 0000 0000 0101
        // 获取原码的反码   1111 1111 1111 1111 1111 1111 1111 1010
        // 获取反码的补码   1111 1111 1111 1111 1111 1111 1111 1011
    // >>>1      后得到：　　　0111 1111 1111 1111 1111 1111 1111 1101
    // 值为2147483645
// 算术右移 >> ：舍弃最低位，高位用符号位填补；
// 逻辑右移 >>> ：舍弃最低位，高位用 0 填补。

// 与运算（&）
    // 规则0&0=0 0&1=0 1&0=0 1&1=1
    // 3&5
    // 3：0000 0011
    // 5：0000 0101
    // (0b00000011 & 0b00000101) == 0b00000001//(1)
    // 1和奇数做与运算为1,1和偶数做与运算为0
// 或运算（|）
    // 规则0|0=0 0|1=1 1|0=1 1|1=1
    // (3|5) === 7
// 异或运算XOR（^）
    // 规则：0^0=0 0^1=1 1^0=1 1^1=0
    // (3^5) === 6
    
    // 0^0=0 0^1=1 0^a=a
    // 1^1=0 a^a=0
    // =>异或满足交换律和结合律
    // a^b^a = (a^a)^b = 0^b = b

// 按位取反运算符(~) 
    // 规则:运算符查看表达式的二进制表示形式的值，并执行位非运算
    // ~~将小数位舍弃(因为位运算会自动舍弃小数位)

// **是求乘方运算符
    // 2**31 = Math.pow(2,31)