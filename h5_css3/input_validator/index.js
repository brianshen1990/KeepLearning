const validate = (target) => {
  if ( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(target.value) ) {
    target.parentElement.className = "validator pass";
    target.parentElement.children[ target.parentElement.children.length-1 ].innerHTML = "";
  } else {
    target.parentElement.className = "validator fail";
    target.parentElement.children[ target.parentElement.children.length-1 ].innerHTML = "Invalid Email Format";
  }
}