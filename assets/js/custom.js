// const skills = document.querySelectorAll('#skills .item');

// for (let skill of skills) {

//     skill.addEventListener('click', (e) => {
//         skillModal = skill.nextElementSibling;
//         skillModal.style.visibility = 'visible';
//         skillModal.style.opacity = 1;

//         skillModal.addEventListener('click', (e) => {
//             e.stopPropagation();
//             if (e.target === skillModal) {
//                 skillModal.style.opacity = 0;
//                 setTimeout(() => skillModal.style.visibility = 'hidden', 300)

//             }
//         })
//     })
// }


const sites = document.querySelectorAll('#portfolio .item .image');

for (let site of sites) {

    site.addEventListener('click', (e) => {
        siteModal = site.parentElement.nextElementSibling;
        siteModal.style.visibility = 'visible';
        siteModal.style.opacity = 1;

        siteModal.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target === siteModal) {
                siteModal.style.opacity = 0;
                setTimeout(() => siteModal.style.visibility = 'hidden', 300)

            }
        })
    })
}

window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

if (!window.mobileCheck()) {

    (function ($) {

        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */

        $.fn.visible = function (partial) {

            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

        };

    })(jQuery);


    var win = $(window);
    var allMods = $(".cols");

    // Already visible modules
    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });

    win.scroll(function (event) {

        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in");
            }
        });

    });
}


// 1. Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const gameRef = database.ref('lorcana_game');

// 2. Secret Trigger Logic (Double click "Ken" in the header)
document.getElementById('secret-trigger').addEventListener('dblclick', function(e) {
    e.preventDefault();
    document.getElementById('lorcana-modal').classList.remove('lorcana-hidden');
});

// Close modal
document.querySelector('.lorcana-close').addEventListener('click', function() {
    document.getElementById('lorcana-modal').classList.add('lorcana-hidden');
});

// 3. Realtime Database Sync
gameRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Update Scores
        document.getElementById('p1-score').innerText = data.p1 || 0;
        document.getElementById('p2-score').innerText = data.p2 || 0;
        
        // Update Log
        if (data.log) {
            const logBox = document.getElementById('lorcana-log');
            logBox.innerHTML = data.log.join('<br>');
            logBox.scrollTop = logBox.scrollHeight; // Auto-scroll to bottom
        }
    } else {
        // Initialize if DB is empty
        resetLorcana();
    }
});

// 4. Game Functions
function changeLore(player, amount) {
    gameRef.once('value').then((snapshot) => {
        let data = snapshot.val() || { p1: 0, p2: 0, log: [] };
        
        // Calculate new score (clamped between 0 and 20 for standard Lorcana play)
        let currentScore = data[player] || 0;
        let newScore = Math.max(0, Math.min(20, currentScore + amount));
        
        if (currentScore === newScore) return; // No change

        data[player] = newScore;
        
        // Add log entry
        let playerName = player === 'p1' ? 'Illumineer 1' : 'Illumineer 2';
        let action = amount > 0 ? `gained ${amount}` : `lost ${Math.abs(amount)}`;
        let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        if (!data.log) data.log = [];
        data.log.push(`[${timestamp}] ${playerName} ${action} Lore (${newScore})`);
        
        // Keep log short (last 10 moves)
        if (data.log.length > 10) data.log.shift();

        // Check Win Condition
        if (newScore === 20) {
            data.log.push(`🎉 ${playerName} wins the race to 20 Lore!`);
        }

        gameRef.set(data);
    });
}

function resetLorcana() {
    if(confirm("Are you sure you want to reset the match?")) {
        gameRef.set({
            p1: 0,
            p2: 0,
            log: ["Match started. First to 20 Lore wins!"]
        });
    }
}
