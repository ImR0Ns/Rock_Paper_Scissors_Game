$(document).ready(()=>{
    var you = 0, bot = 0
    var beats = {
        'paper':['rock', 'scissors'],
        'rock': ['scissors', 'paper'],
        'scissors':['paper', 'rock']
    }

    //paper
    $('.paper').click(()=>{
        $('.paper').css('color', 'blue')
        var random_arr = ['paper', 'rock', 'scissors']
        var item = random_arr[Math.floor(Math.random()*random_arr.length)];
        if(item == 'paper') { 
            
            $('#exampleModalLongTitle').text('You made a tie!')
            $('.what_i').text('You chose paper')
            $('.what_bot').text('The bot also chose paper')

            //color
            $('.bot_paper').css('color', 'blue');

        }else if(beats[item][0] == 'paper') { 

            $('#exampleModalLongTitle').text('You lose!')
            $('.what_i').text('You chose paper')
            $('.what_bot').text('The bot  chose scissors')

            $('.bot_sciss').css('color', 'blue')

            //score
            bot++
            $('.score').text('Score:' + you + '-' + bot + '( You/Bot )')

        }
        else if(beats[item][1] == 'paper'){ 
            $('#exampleModalLongTitle').text('You won!')
            $('.what_i').text('You chose paper')
            $('.what_bot').text('The bot  chose rock')

            $('.bot_rock').css('color', 'blue')

            //score
            you++
            $('.score').text('Score:' + you + '-' + bot + '( You/Bot )')
        }
    })

    //rock
    $('.rock').click(()=>{
        $('.rock').css('color', 'blue')
        var random_arr = ['paper', 'rock', 'scissors']
        var item = random_arr[Math.floor(Math.random()*random_arr.length)];
        if(item == 'rock') { 
            
            $('#exampleModalLongTitle').text('You made a tie!')
            $('.what_i').text('You chose rock')
            $('.what_bot').text('The bot also chose rock')

            //color
            $('.bot_rock').css('color', 'blue');

        }else if(beats[item][0] == 'rock') { 

            $('#exampleModalLongTitle').text('You lose!')
            $('.what_i').text('You chose rock')
            $('.what_bot').text('The bot  chose paper')

            $('.bot_paper').css('color', 'blue')

            //score
            bot++
            $('.score').text('Score:' + you + '-' + bot + '( You/Bot )')
            

        }
        else if(beats[item][1] == 'rock') { 
            $('#exampleModalLongTitle').text('You won!')
            $('.what_i').text('You chose rock')
            $('.what_bot').text('The bot  chose scissors')

            $('.bot_sciss').css('color', 'blue')

            //score
            you++
            $('.score').text('Score:' + you + '-' + bot + '( You/Bot )')
        }
    })

    //scissors
    $('.sciss').click(()=>{
        $('.sciss').css('color', 'blue')
        var random_arr = ['paper', 'rock', 'scissors']
        var item = random_arr[Math.floor(Math.random()*random_arr.length)];
        if(item == 'scissors') { 
            
            $('#exampleModalLongTitle').text('You made a tie!')
            $('.what_i').text('You chose scissors')
            $('.what_bot').text('The bot also chose scissors')

            //color
            $('.bot_sciss').css('color', 'blue');

        }else if(beats[item][0] == 'scissors') { 

            $('#exampleModalLongTitle').text('You lose!')
            $('.what_i').text('You chose scissors')
            $('.what_bot').text('The bot  chose rock')

            $('.bot_rock').css('color', 'blue')

            //score
            bot++
            $('.score').text('Score:' + you + '-' + bot + '( You/Bot )')

        }
        else if(beats[item][1] == 'scissors') { 
            $('#exampleModalLongTitle').text('You won!')
            $('.what_i').text('You chose scissors')
            $('.what_bot').text('The bot  chose paper')

            $('.bot_paper').css('color', 'blue')

            //score
            you++
            $('.score').text('Score:' + you + '-' + bot + '( You/Bot )')
        }
    })

    $('.close').click(()=>{
        //player colors reset
        $('.rock').css('color', 'gray')
        $('.sciss').css('color', 'gray')
        $('.paper').css('color', 'gray');
        //bot colors reset
        $('.bot_rock').css('color', 'gray')
        $('.bot_sciss').css('color', 'gray')
        $('.bot_paper').css('color', 'gray');
    })

})
