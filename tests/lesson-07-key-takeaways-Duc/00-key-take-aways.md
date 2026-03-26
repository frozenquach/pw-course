XPath axes
child               //div/child::p              - lấy thẻ p trong div
descendant          //div/descendant::span      - lấy tất cả span thuộc con cháu của div
parent              //p/parent::div             - lấy thẻ div là cha của thẻ p
ancestor            //span/ancestor::div        - lấy thẻ div là tổ tiên của thẻ span
following-sibling   //h2/following-sibling::p   - tất cả p thuộc bên phải (sau) h2 cùng cấp
preceding-sibling   //h3/preceding-sibling::h2  - tất cả h2 thuộc bên trái (trước) h3 cùng cấp
following           //h1/following::p           - tất cả p sau h1 trong toàn document
preceding           //h1/preceding::p           - tất cả p trước h1 trong toàn document
attribute           //div/attribute::class      - thuộc tính "class" của div
self                //p/self::p                 - chính node p
descendant-or-self  //div/descendant-or-self::p - tất cả p và bao gồm chính div
ancestor-or-self    //div/ancestor-or-self::p   - div và tổ tiên của p
namespace           //element/namespace::*      - chưa có ví dụ