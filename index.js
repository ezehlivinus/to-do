
    let input = document.querySelector("input[name='task']");
      

    const createTask = () => {
      input.style.border = '';
      const task = input.value;
      if (task.length === 0) {
        input.style.border = 'red solid 1px';
        return false;
      }
      
      const listDiv = document.querySelector(".list");
      listDiv.style.display = 'block'

      let theTask = `
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
                <p contenteditable="true">${task}</p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
      `;
      

      let tasks = document.querySelector(".tasks");
      $('.tasks').append(theTask);
      
    }

    $('.createBtn').click((event) => {
      event.preventDefault();
      createTask();

      input.value = '';

    });
