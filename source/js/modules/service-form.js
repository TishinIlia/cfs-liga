const openFormServiceBtn = document.querySelector('.service-content__button');
const serviceFormEl = document.querySelector('.service-top__form');
const nameFormEl = document.querySelector('#name');
const emailFormEl = document.querySelector('#email');
const submitFormEl = document.querySelector('#send');
const successFormEl = document.querySelector('.success-form');

const openServiceForm = () => {
  if (openFormServiceBtn) {
    if (openFormServiceBtn.classList.contains('visually-hidden')) {
      openFormServiceBtn.classList.remove('visually-hidden');
    }
  }

  if (serviceFormEl) {
    if (!serviceFormEl.classList.contains('desktop-hidden')) {
      serviceFormEl.classList.add('desktop-hidden');
    }
  }

  if (serviceFormEl && openFormServiceBtn) {
    openFormServiceBtn.addEventListener('click', function () {
      if (serviceFormEl.classList.contains('desktop-hidden') && !openFormServiceBtn.classList.contains('visually-hidden')) {
        serviceFormEl.classList.remove('desktop-hidden');
        openFormServiceBtn.classList.add('visually-hidden');
      }
    });
  }
};

const validateEmail = (elem) => {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(elem) === false) {
    return false;
  } else {
    return true;
  }
};

const validateName = (elem) => {
  let text = /^[a-zA-Zа-яА-Я ,.'-]+$/i;
  if (elem.value.match(text)) {
    return true;
  } else {
    return false;
  }
};

const openSuccessForm = () => {
  if (successFormEl) {
    if (successFormEl.classList.contains('success-form--close')) {
      successFormEl.classList.remove('success-form--close');
    }
    setTimeout(function () {
      if (!successFormEl.classList.contains('success-form--close')) {
        successFormEl.classList.add('success-form--close');
      }
    }, 5000);
  }
};

const serviceFormError = (el) => {
  if (el) {
    el.classList.add('error-service');
    setTimeout(function () {
      if (el.classList.contains('error-service')) {
        el.classList.remove('error-service');
      }
    }, 2500);
  }
};

const validationForm = () => {
  if (nameFormEl && emailFormEl && submitFormEl) {
    submitFormEl.addEventListener('click', function () {
      if (emailFormEl.value.length > 0 && nameFormEl.value.length > 0 && validateEmail(emailFormEl.value) && validateName(nameFormEl) === true) {
        localStorage.setItem('email-service', emailFormEl.value);
        localStorage.setItem('name-service', emailFormEl.value);
        openSuccessForm();
        nameFormEl.value = '';
        emailFormEl.value = '';
      } else {
        if (emailFormEl.value.length === 0) {
          serviceFormError(emailFormEl);
        }
        if (!validateEmail(emailFormEl.value)) {
          serviceFormError(emailFormEl);
        }
        if (nameFormEl.value.length === 0) {
          serviceFormError(nameFormEl);
        }
        if (!validateName(nameFormEl)) {
          serviceFormError(nameFormEl);
        }
      }
    });
  }
};

export {openServiceForm, validationForm};
