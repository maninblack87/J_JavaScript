// __Ex1__
window.onload = function () {

    // ex1의 (모든) 리스트 가져오기
    var ex1_items = document.querySelectorAll("#ex1 ul li");

    // 첫번째 요소 외 모든 요소 숨기기
    ex1_items.forEach(function (item, index) {
        if (index === 0) {
            item.style.display = 'block';   // 보이기
        } else {
            item.style.display = 'none';    // 안 보이기
        }
    })

};