var container = document.getElementById('container');

                         
        var output = '';
        var letterIndex = 1;

        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 10; j++) {
                var letter = letterIndex;
                var index = i * 10 + j + 1;
                output += `<div class="box" onclick="alert('Vị trí: ${index}')">+ lett</div>`;
                letterIndex++;
                if (letterIndex >= letters.length) {
                    letterIndex = 0;
                }
            }
            output += '<br>';
        }
        container.innerHTML = output;