export const ModalForm = (title, renderCallback) => {
  const fields = new Map();

  // Obtém as informações inseridas no formulário
  const getFormData = () => {
    let result = {};
    
    let keys = Array.from(fields.keys());
    keys.map(el => {
      let newKey = el.split('-')[2];
      result[newKey] = document.getElementById(el).value;
    });
    return result;
  }

  const removeForm = () => document.getElementById('modal-section').remove();

  return {
    show: () => {
      // Adiciona o modelo do formulário
      document.getElementById('lateral-menu-right').insertAdjacentHTML('afterend', `
        <section class="modal-background" id="modal-section">
          <div class="modal-form" id="modal-form">
              <h2 class="modal-title">${title}</h2>
              <fieldset class="fieldset-btn">
                  <button id="modal-form-save" class="modal-save-btn" type="submit">Adicionar</button>
                  <button id="modal-form-abort" class="modal-reset-btn" type="reset">Descartar</button>
              </fieldset>
          </div>
        </section>
      `);

      // Junta todos os campos do formulário e inseri depois de h2
      let htmlFields = '';
      for (let field of fields.values()) htmlFields += field;
      document.querySelector('.modal-title').insertAdjacentHTML('afterend', htmlFields);

      document.getElementById('modal-form-save').addEventListener('click', () => {
        let data = getFormData();
        data.id = 10;
        removeForm();
        renderCallback(data);
      })

      document.getElementById('modal-form-abort').addEventListener('click', removeForm);

      document.getElementById('modal-section').style.display = "flex";
    },
    /* Adiciona um campo tipo texto no formulário */
    addTextField: (label, name, isRequired) => {
      let fieldId = `modal-field-${name}`;
      fields.set(fieldId, `
        <label for="name">${label}</label>
        <input id="${fieldId}" type="text" name="${name}" ${isRequired ? 'required': ''}>
      `);
    }
  }
}