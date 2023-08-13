const host = 'http://' + window.location.host;

// function refreshModalContent() {
//     // 모달 내용을 불러오는 AJAX 요청
//     fetch('url_to_fetch_modal_content')
//         .then(function (response) {
//             return response.text();
//         })
//         .then(function (modalHtml) {
//             // 모달 컨테이너에 새로운 모달 내용 업데이트
//             document.getElementById('modalContentContainer').innerHTML = modalHtml;
//         });
// }

// 카드 이름 수정 토글
function toggleName(state) {
    if (state === 'input') {
        document.getElementById('name-default').style.display = 'none';
        document.getElementById('name-input').style.display = 'flex';
    }
}

// 카드 이름 수정하기
function updateAndToggleName(state, boardId, sideId, cardId) {
    if (state === 'default') {
        let name = $('#card-name-input').val();
        let requestDto = {"name": name};

        fetch(`/boards/${boardId}/sides/${sideId}/cards/${cardId}/name`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestDto)
        })
            .then(function (response) {
                return response.json();
            })

            .then(function (responseDto) {
                alert("이름 수정 완료!");

                // 모달 내용을 업데이트한 후 창을 새로고침
                location.reload();
                // toggleName('input')

                // Update description text and toggle back to default state
                $('#name-default .card-text').text(name);
                document.getElementById('name-default').style.display = 'block';
                document.getElementById('name-input').style.display = 'none';
                // // 모달 내용을 다시 불러와서 업데이트
                // refreshModalContent();
            });
    }
}

// 설명 수정 토글
function toggleDescription(state) {
    if (state === 'input') {
        document.getElementById('description-default').style.display = 'none';
        document.getElementById('description-input').style.display = 'block';
    }
}

// 설명 수정하기
function updateAndToggleDescription(state, boardId, sideId, cardId) {
    if (state === 'default') {
        let description = $('#card-description-input').val();
        let requestDto = {"description": description};

        fetch(`/boards/${boardId}/sides/${sideId}/cards/${cardId}/desc`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestDto)
        })
            .then(function (response) {
                return response.json();
            })

            .then(function (responseDto) {
                alert("설명 수정 완료!");

                // 모달 내용을 업데이트한 후 창을 새로고침
                location.reload();
                // toggleDescription('input')

                // Update description text and toggle back to default state
                $('#description-default .card-text').text(description);
                document.getElementById('description-default').style.display = 'block';
                document.getElementById('description-input').style.display = 'none';
                // // 모달 내용을 다시 불러와서 업데이트
                // refreshModalContent();
            });
    }
}

// 첨부파일 추가하기
function addAttachment(boardId, sideId, cardId) {
    let fileInput = document.getElementById('card-attachment-input');
    let file = fileInput.files[0];

    if (file) {
        let formData = new FormData();
        formData.append('file', file);

        fetch(`/boards/${boardId}/sides/${sideId}/cards/${cardId}/files`, {
            method: "POST",
            body: formData
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (responseDto) {
                alert("파일 추가 완료!");

                // 모달 내용을 업데이트한 후 창을 새로고침
                location.reload();
            });
    }
}

// 첨부파일명 수정 토글
function toggleAttachmentName(state) {
    if (state === 'input') {
        document.getElementById('attachment-file-name-default').style.display = 'none';
        document.getElementById('attachment-file-name-update').style.display = 'flex';
    }
}

// 첨부파일명 수정하기
function updateAndtoggleAttachmentName(state, boardId, sideId, cardId, fileId) {
    if (state === 'default') {
        let fileName = $('#attachment-file-name-input').val();
        let requestDto = {"fileName": fileName};

        fetch(`/boards/${boardId}/sides/${sideId}/cards/${cardId}/files/${fileId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestDto)
        })
            .then(function (response) {
                return response.json();
            })

            .then(function (responseDto) {
                alert("첨부 파일명 수정 완료!");

                // 모달 내용을 업데이트한 후 창을 새로고침
                location.reload();
                // toggleName('input')

                // Update description text and toggle back to default state
                $('#attachment-file-name-default .card-text').text(name);
                document.getElementById('attachment-file-name-default').style.display = 'block';
                document.getElementById('attachment-file-name-update').style.display = 'none';
                // // 모달 내용을 다시 불러와서 업데이트
                // refreshModalContent();
            });
    }
}

// 첨부파일 삭제
function deleteAttachment(boardId, sideId, cardId, fileId) {
        fetch(`/boards/${boardId}/sides/${sideId}/cards/${cardId}/files/${fileId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(function (response) {
                return response.json();
            })

            .then(function (responseDto) {
                alert("첨부 파일 삭제 완료!");

                // 모달 내용을 업데이트한 후 창을 새로고침
                location.reload();
                // toggleName('input')

                // // 모달 내용을 다시 불러와서 업데이트
                // refreshModalContent();
            });

}