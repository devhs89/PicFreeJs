$(document).ready(() => {
  const contactForm = $(".contactFormContainer > form");

  contactForm.submit(evt => {
    console.log(contactForm);

    const allFields = contactForm.serializeArray();
    console.log(allFields);

    for (const field of allFields) {
      if (field.value === "") {
        evt.preventDefault();
        evt.stopImmediatePropagation();

        const ele = $(`#${field.name}`);
        ele.addClass("invalidInput");
        ele.attr("placeholder", "Invalid Input");
      }
    }
  });
});