// 검색 버튼 클릭 이벤트
$(document).ready(function() {
    $('.search-btn').on('click', function(e) {
        e.preventDefault();  // 페이지 새로고침 방지

        // 입력된 검색어 가져오기
        let searchQuery = $('.search-txt').val();  

        if (searchQuery.trim() === '') {
            // 검색어가 비어 있을 경우
            alert('검색어를 입력해주세요.');
        } else {
            // 검색어가 있을 때 - 실제 검색을 수행하거나 페이지 이동
            console.log('검색어:', searchQuery);
            // 검색기능구현
        }
    });
});