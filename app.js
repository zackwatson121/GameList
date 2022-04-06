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

    // Add game to list
    ui.addGametoList(game);

    // Clear Fields
    ui.clearFields();

    e.preventDefault();
});