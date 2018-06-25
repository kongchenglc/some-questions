// 92.反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

var reverseBetween = function(head, m, n) {
    let p = head, q = new ListNode(null), temp = p.next
    q.next = p
    for(let i = 1; i < n ; i++) {
        if(i < m) {
            q = p
            p = p.next
        } else {
            p.next = p.next.next
            temp.next = q.next
            q.next = temp
        }
        temp = p.next
    }
    if(m === 1) head = q.next
    return head
};