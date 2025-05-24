"use strict";var input=document.querySelectorAll(".field-text");input.forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name,e.parentNode.prepend(t),e.setAttribute("placeholder",e.name[0].toUpperCase()+e.name.slice(1))});
//# sourceMappingURL=js_task_fix_form_DOM.d36085c5.js.map
