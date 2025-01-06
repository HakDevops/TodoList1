    // je selection les id 
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    
    // on créer la fonction qui permet d'ajouter une tache
    addTask.addEventListener('click', ()=>{
        const taskText = taskInput.value.trim();
    
        if(taskText !== ''){
            // on creer la liste li
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
    
            // ajouter un boutton supprimer
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Supprimer';
            deleteBtn.innerHTML += '<ion-icon name="trash-outline"></ion-icon>';
            deleteBtn.classList.add('del-btn');
            deleteBtn.addEventListener('click', () =>{
                let choix = prompt("voulez-vous supprimer cette tache ? oui ou non !!");
                if (choix === "o"){
                    taskItem.remove();
                }else{
                    return;
                }

            }) ;
            // taskItem.remove())

            // ajouter un boutton modifier
            const editbutton = document.createElement('button');
            editbutton.textContent = 'Modifier ';
            editbutton.innerHTML +='<ion-icon name="pencil-outline"></ion-icon>'
            editbutton.classList.add('edit-btn');
            editbutton.addEventListener('click', () =>{
                let newText = prompt("modifier la tache ",taskItem.textContent);
                if(newText === ""){
                    return
                }else{
                    taskItem.firstChild.textContent = newText;
                }
            }  )
    
            // ajouter le  bouton delete sur le  li
            taskItem.appendChild(deleteBtn);
    
            // ajouter le li a la liste
            taskList.appendChild(taskItem);

            // ajouter le button modifier sur lr li
            taskItem.appendChild(editbutton);
    
            // vider le champs de saisi après ajout
            taskInput.value = '';
        }else{
            alert("veuillez entrer une tache :");
        }
    
    });
    
    // permet au touche entrer de valider les tache
    taskInput.addEventListener('keypress', (e) =>{
        if(e.key === 'Enter'){
            console.log("cest bon");
            addTask.click();
        }
    });
  
