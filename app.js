// Book Constructor
function Game(title, developer, platform, releaseDate) {
    this.title = title;
    this.developer = developer;
    this.platform = platform;
    this.releaseDate = releaseDate;
}

// UI Contructor
function UI() {

}

// Show alert
UI.prototype.showAlert = function(message, className){
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

UI.prototype.addGametoList = function(game){
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

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('developer').value = '';
    document.getElementById('platform').value = '';
    document.getElementById('release').value = '';
}

// Event Listeners
document.getElementById('game-form').addEventListener('submit', 
function(e){
    // Get form values
    const title = document.getElementById('title').value,
          developer = document.getElementById('developer').value,
          platform = document.getElementById('platform').value,
          releaseDate = document.getElementById('release').value;

    const game = new Game(title, developer, platform, releaseDate);

    const ui = new UI();

    // Validate
    if(title === '' || developer === '' || platform === '' || releaseDate === ''){
        ui.showAlert('Please fill all in fields', 'error');
    } else {
        ui.addGametoList(game);

        // Show success
        ui.showAlert('Game Added!', 'success');

        ui.clearFields();
    }

    // Add game to list
    ui.addGametoList(game);

    // Clear Fields
    ui.clearFields();

    e.preventDefault();
});