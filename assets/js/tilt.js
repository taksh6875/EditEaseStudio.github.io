// YouTube Player API ready function
function onYouTubeIframeAPIReady() {
    // Player instances
    var players = [];

    // Function to create YouTube players
    function createYouTubePlayer(playerId, videoId) {
        return new YT.Player(playerId, {
            videoId: videoId,
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // Initialize players
    players.push(createYouTubePlayer('player1', '_bnkd47Rx7c'));
    players.push(createYouTubePlayer('player2', 'LMulIDnJL-I'));
    players.push(createYouTubePlayer('player3', 'Jzy9oZIZyyg'));

    // Function to pause other videos
    function pauseOtherPlayers(currentPlayer) {
        players.forEach(function(player) {
            if (player !== currentPlayer) {
                player.pauseVideo();
            }
        });
    }

    // Event listener for state change
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            var currentPlayer = event.target;
            pauseOtherPlayers(currentPlayer);
        }
    }
}
