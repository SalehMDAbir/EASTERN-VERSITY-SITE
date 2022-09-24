let passwordRecover = document.getElementById('password-recover');
let password = document.getElementById("password");
password.addEventListener('click',function(){
  passwordRecover.style.display = 'block';
});

document.getElementById('profile').style.display = 'none';
document.getElementById('second-part').style.display = 'none';
      
const body = document.getElementById('body');
let main = document.getElementById('main');
let submits = document.getElementById('submits');
submits.addEventListener('click',function(){
  const firstInput = document.getElementById('first-input').value;
  const secondInput = document.getElementById('second-input').value;
  if(firstInput === '' && secondInput === ''){
    alert('Please enter the user id');
  }
  else if(firstInput === ''){
    alert('Please enter the user id');
  }
  else if (secondInput === ''){
    alert('Please enter the password');
  }
  else if(firstInput === '181400081' && secondInput === '1486'){
    main.style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('second-part').style.display = 'block';
    document.getElementById('invalid-password').style.display = 'none';
  }
  else{
    document.getElementById('invalid-password').style.display = 'block';
    document.getElementById('heading').style.marginBottom = '1px';
  }
  
})

const result = document.getElementById('result');
result.addEventListener('click',function(){
  document.getElementById('para').style.display = 'none';
  document.getElementById('marks').style.display = 'block';
  document.getElementById('finishing-marks').style.display = 'block';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';
})

const logout = document.getElementById('logout');
logout.addEventListener('click',function(){
  document.getElementById('profile').style.display = 'none';
  document.getElementById('second-part').style.display = 'none';
  document.getElementById('main').style.display = 'block';
})

const academicStatus = document.getElementById('academic-status');
academicStatus.addEventListener('click',function(){
  document.getElementById('para').style.display = 'none';
  document.getElementById('marks').style.display = 'block';
  document.getElementById('finishing-marks').style.display = 'block';
  document.getElementById('guide-para').style.display = 'none';
  document.getElementById('library-guide').style.display = 'none';
  document.getElementById('laboratory-guide').style.display = 'none';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';
})

const goToProfile = document.getElementById('go-to-profile');
goToProfile.addEventListener('click',function(){
  document.getElementById('marks').style.display = 'none';
  document.getElementById('finishing-marks').style.display = 'none';
  document.getElementById('para').style.display = 'none';
  document.getElementById('guide-para').style.display = 'none';
  document.getElementById('library-guide').style.display = 'none';
  document.getElementById('laboratory-guide').style.display = 'none';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'block';
})
const profileGone = document.getElementById('profile-gone');
profileGone.addEventListener('click',function(){
  document.getElementById('marks').style.display = 'none';
  document.getElementById('finishing-marks').style.display = 'none';
  document.getElementById('para').style.display = 'block';
  document.getElementById('guide-para').style.display = 'none';
  document.getElementById('library-guide').style.display = 'none';
  document.getElementById('laboratory-guide').style.display = 'none';
  document.getElementById('notice-board').style.display = 'block';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';
})

const userGuideOne = document.getElementById('user-guide-one');
userGuideOne.addEventListener('click',function(){ 
  document.getElementById('guide-para').style.display = 'block';
  document.getElementById('library-guide').style.display = 'none';
  document.getElementById('laboratory-guide').style.display = 'none';
  document.getElementById('para').style.display = 'none';
  document.getElementById('marks').style.display = 'none';
  document.getElementById('finishing-marks').style.display = 'none';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';
})

const userGuideTwo = document.getElementById('user-guide-two');
userGuideTwo.addEventListener('click',function(){ 
  document.getElementById('library-guide').style.display = 'block';
  document.getElementById('guide-para').style.display = 'none';
  document.getElementById('laboratory-guide').style.display = 'none';
  document.getElementById('para').style.display = 'none';
  document.getElementById('marks').style.display = 'none';
  document.getElementById('finishing-marks').style.display = 'none';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';
})

const userGuideThree = document.getElementById('user-guide-three');
userGuideThree.addEventListener('click',function(){ 
  document.getElementById('laboratory-guide').style.display = 'block';
  document.getElementById('library-guide').style.display = 'none';
  document.getElementById('guide-para').style.display = 'none';
  document.getElementById('para').style.display = 'none';
  document.getElementById('marks').style.display = 'none';
  document.getElementById('finishing-marks').style.display = 'none';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('payment-online').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';
})

const onlinePayment = document.getElementById("online-payment");
onlinePayment.addEventListener('click',function(){
  document.getElementById('payment-online').style.display = 'block';
  document.getElementById('guide-para').style.display = 'none';
  document.getElementById('library-guide').style.display = 'none';
  document.getElementById('laboratory-guide').style.display = 'none';
  document.getElementById('para').style.display = 'none';
  document.getElementById('notice-board').style.display = 'none';
  document.getElementById('marks').style.display = 'none';
  document.getElementById('finishing-marks').style.display = 'none';
  document.getElementById('my-profile').style.display = 'none';

})