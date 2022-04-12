class Game {
    constructor(game, developer, platform, releaseDate) {
        this.game = game;
        this.developer = developer;
        this.platform = platform;
        this.releaseDate = releaseDate;
    }
}

class UI {
    addGametoList(game) {
        const list = document.getElementById('game-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
            <td>${game.title}</td>
            <td>${game.developer}</td>
            <td>${game.platform}</td>
            <td>${game.releaseDate}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
    
        list.appendChild(row);
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        // create div
        div.className = `alert ${className}`;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        // get form
        const form = document.querySelector('#game-form');
        // insert alert
        container.insertBefore(div, form);
    
        // reset after failure 
        setTimeout(function(){
            document.querySelector('.alert')
            .remove();
        }, 3000);
    }

    deleteGame(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('developer').value = '';
        document.getElementById('platform').value = '';
        document.getElementById('release').value = '';
    }
}

// Event Listeners for add game
document.getElementById('game-form').addEventListener('submit', 
function(e){
    // Get form values
    const title = document.getElementById('title').value,
          developer = document.getElementById('developer').value,
          platform = document.getElementById('platform').value,
          releaseDate = document.getElementById('release').value;

    const game = new Game(title, developer, platform, releaseDate);

    const ui = new UI();

    console.log(ui);

    // Validate
    if(title === '' || developer === '' || platform === '' || releaseDate === ''){
        ui.showAlert('Please fill all in fields', 'error');
    } else {
        ui.addGametoList(game);

        // Show success
        ui.showAlert('Game Added!', 'success');

        // Clear Fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('game-list').addEventListener
('click', function(e){

    const ui = new UI();

    ui.deleteGame(e.target);

    ui.showAlert('Game Removed!', 'success');

    e.preventDefault();
});