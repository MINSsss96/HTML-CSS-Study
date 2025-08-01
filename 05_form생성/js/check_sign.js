function check_sign(event) {
  event.preventDefault();
  console.log("가입하기 단추 눌림")
  let userId = document.querySelector("#uid");

  // 비밀번호 일치 확인용 변수
  let pwd = document.querySelector("#pwd");
  let confirm = document.querySelector("#confirm");

  // 나머지 내용 변수로 받기
  let email = document.querySelector("#email");
  let path = document.querySelector("#path");
  let memo = document.querySelector("#memo");
  let mail = document.getElementsByName("#mail");
  let bus = document.querySelector("#bus");
  let metro = document.querySelector("#metro");
  let walking = document.querySelector("#walking");

  if (bus.checked) {
    bus.value = "OK";
  } else {
    bus.value = "NO";
  }

  if (metro.checked) {
    metro.value = "OK";
  } else {
    metro.value = "NO";
  }

  if (walking.checked) {
    walking.value = "OK";
  } else {
    walking.value = "NO";
  }


  // 이메일 수신 여부
  let mailReceive = "";
  mail.forEach((x) => {
    if (x.checked) {
      if (x.value == 'yes') {
        mailReceive = '메일수신';

      } else {
        mailReceive = '메일수신 거부';
      }
    }
  })


  // 아이디 글자 수 확인 (4자~10자 사이)
  let idLength = userId.value.length;
  if (idLength < 4 || idLength > 10) {
    alert("아이디는 4자~10자 사이입니다.");
    userId.value = '';
    userId.focus();
    return;
  }

  //비밀번호 일치 확인
  if (pwd.value != confirm.value) {
    alert("비밀번호가 일치하지 않아요.")
    pwd.focus();
  }

  //결과 출력하기
  let result = '';
  result = result + '아이디 : ' + userId.value + '\n';
  result = result + '이메일 : ' + email.value + '\n';
  result = result + '비밀번호 : ' + pwd.value + '\n';
  result = result + '가입경로 : ' + path.value + '\n';
  result = result + '메모 : ' + memo.value + '\n';
  result = result + '지하철' + metro.value + mailReceive + '\n';
  result = result + '버스' + bus.value + mailReceive + '\n';
  result = result + '도보' + walking.value + mailReceive + '\n';
  console.log(result);
}
