function giaiPhuongTrinh() {
    var a = parseFloat(document.getElementById('input-a').value);
    var b = parseFloat(document.getElementById('input-b').value);
    var resultEl = document.getElementById('result');

      if (a === 0) {
        if (b === 0) {
          resultEl.innerHTML = "Phương trình vô số nghiệm";
      } else {
          resultEl.innerHTML = "Phương trình vô nghiệm";
      }
        } else {
            var x = -b / a;
              resultEl.innerHTML = "Nghiệm của phương trình là x = " + x;
        }
        }

function bai2(){
    const name = document.getElementById("input-name").value;
    const phone = document.getElementById("input-phone").value;
    const email = document.getElementById("input-email").value;
    const option = document.getElementById("input-customer-type");
    const optionText = option.options[option.selectedIndex].text;
    const mathe = document.getElementById("input-card").value;   
    const invoiceid = document.getElementById("input-invoice").value;
    const textarea = document.getElementById("input-description").value;
    window.alert(" Họ và tên: " + name +"\n Mã thẻ: " + mathe +"\n Số điện thoại: "+ phone +"\n Email: " + email +"\n Loại KH: " + optionText +"\n Nội dung góp ý: "+ textarea
    );
}

function bai3(){
const hoten = document.getElementById("bai3-ten").value;
const email = document.getElementById("bai3-email").value;
const title = document.getElementById("bai3-title").value;
const textarea = document.getElementById("bai3-description").value;

const confirmBox = confirm(
    " Họ và tên: " + hoten +"\n Email: " + email  +"\n Nội dung góp ý: "+ textarea
);
}

function bai4(){
    const health = [
        {
             loai: '0',
             message: 'Khám định kì '
         },
         {
             loai: '1',
             message: 'Tập thể dục thường xuyên '
         },
         {
             loai: '2',
             message: 'Hạn chế ăn mỡ động vật '
         }
     ]
     const weight = parseFloat(document.getElementById("weight").value);
     const height = parseFloat(document.getElementById("height").value);
     const bai4Select = document.getElementById("bai4-select");
     const bai4Option =  bai4Select.options[bai4Select.selectedIndex].value;
     const BMI = weight/(height*height)
     for(let i =0 ; i< health.length ; i++){
        const loaiVar = health[i].loai
        if(bai4Option===loaiVar){
            console.log(health[i].message)
          document.getElementById("message").innerHTML = health[i].message
        }
       }
    document.getElementById("bai4-number").innerHTML = BMI
    const categories = document.getElementById("categories")
    if(BMI<18.5){
    categories.innerHTML = "dưới chuẩn"
    }else if(BMI > 18.5 && BMI <24.9){
        categories.innerHTML = "Bình thường"
    }else if(BMI>25 && BMI<29.9){
        categories.innerHTML = "thừa cân"
    }else if(BMI>30 && BMI<34.9){
        categories.innerHTML = "béo phì cấp 1"
    }else if(BMI>35 && BMI<39.9){
        categories.innerHTML = "béo phì cấp 2"
    }else{
        categories.innerHTML = "béo phì cấp 3"
    }
}
   
function bai5(){
    const tentk = document.getElementById("bai5-name");
    var passWord = document.getElementById("bai5-MK");
    const conFirm = confirm("Bạn muốn hiện mật khẩu");
    if(conFirm){
        passWord.type = 'text';
    }
}

    function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

    function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);