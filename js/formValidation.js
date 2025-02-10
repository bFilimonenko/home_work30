document.forms.registration.button.addEventListener("click", (event) => {
  let isValid = false;

  const firstName = document.forms.registration.firstName;
  const lastName = document.forms.registration.lastName;
  const namePattern = /^[A-Za-zА-Яа-яЁёІіЇїЄє]{2,25}$/;

  if (namePattern.test(firstName.value.trim())) {
    firstName.classList.remove("invalid");
    isValid = true;
  } else {
    firstName.classList.add("invalid");
    isValid = false;
  }
  if (namePattern.test(lastName.value.trim())) {
    lastName.classList.remove("invalid");
    isValid = true;
  } else {
    lastName.classList.add("invalid");
    isValid = false;
  }

  const dateOfBirth = document.forms.registration.dateOfBirth;
  const dateReg = /^\d{4}(.|-|\/)\d{2}(.|-|\/)\d{2}$/;
  if (dateReg.test(dateOfBirth.value.trim())) {
    const year = dateOfBirth.value.split("-" && "/" && ".")[0];
    const month = dateOfBirth.value.split("-" && "/" && ".")[1];
    const day = dateOfBirth.value.split("-" && "/" && ".")[2];
    if (year < 2018 && year > 1910 &&
      month <= 12 && month > 0 &&
      day <= 31 && day > 0) {
      dateOfBirth.classList.remove("invalid");
      document.querySelector(".data-warning").classList.add("hidden");
      isValid = true;
    } else {
      document.querySelector(".data-warning").classList.remove("hidden");
      dateOfBirth.classList.add("invalid");
      isValid = false;
    }
  } else {
    dateOfBirth.classList.add("invalid");
    isValid = false;
  }

  if (document.forms.registration.gender.value === "") {
    document.querySelector(".gender-warning").classList.remove("hidden");
    isValid = true;
  } else {
    document.querySelector(".gender-warning").classList.add("hidden");
    isValid = false;
  }

  if (document.forms.registration.city.value === "") {
    document.forms.registration.city.classList.add("invalid");
    isValid = true;
  } else {
    document.forms.registration.city.classList.remove("invalid");
    isValid = false;
  }

  const address = document.forms.registration.address;
  const addressPattern = /^(вул.|вулиця|пр.|проспект)? ?[А-Яа-яЁёІіЇїЄє-]{2,30} ?(буд.|будинок)? ?[0-9]{1,3}$/;
  if (addressPattern.test(address.value.trim())) {
    address.classList.remove("invalid");
    isValid = true;
  } else {
    address.classList.add("invalid");
    isValid = false;
  }

  if (isValid) {
    document.querySelector(".success").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".success").classList.add("hidden");
      document.forms.registration.reset();

    }, 2500);
  } else {
    document.querySelector(".error").classList.remove("hidden");
    setTimeout(() => {
      document.querySelector(".error").classList.add("hidden");
    }, 2000);
  }

});
