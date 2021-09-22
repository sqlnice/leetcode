/*

 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串 *  * "abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

function reverseLeftWords(s: string, n: number): string {
  const reverse = (str: string, left: number, right: number) => {
    let strArr = str.split('');
    for (; left < right; left++, right--) {
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    }
    return strArr.join('');
  };
  s = reverse(s, 0, n - 1);
  s = reverse(s, n, s.length - 1);
  s = reverse(s, 0, s.length - 1);
  return s;
}

const res = reverseLeftWords('abcdefg', 2);
