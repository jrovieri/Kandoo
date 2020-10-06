import { ModalForm } from './modalForm.js';

export const addProject = () => {
  const form = ModalForm('Novo Projeto', (data) => {
    
    // Atualiza o menu lateral esquerdo
    document.getElementById('projects-list').insertAdjacentHTML('afterbegin', `
      <li class="project-menu" data-project-id="${data.id}">
        <button class="menu-options">
          ${data.name}
          <i class="fas fa-sort-up menu-left-arrow"></i>
    `);

    // Atualiza o container central
    document.getElementById('content').insertAdjacentHTML('afterbegin', `
      <section class="content-project" data-project-id="${data.id}">
        <div class="project-title">
          <h3>${data.name}</h3>
        </div>
      </section>
    `)
  });
  form.addTextField('Nome', 'name', true);
  form.show();
}