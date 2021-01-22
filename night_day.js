
var body_color = {
    setColor : function(color) {
        document.querySelector('body').style.color = color;
    },
    
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

var link = {
    setColor : function(color) {
        var a_list = document.querySelectorAll('a');
        var i = 0;
        while(i < a_list.length) {
            a_list[i].style.color = color;
            i = i + 1;
        }
    }
}

function night_day(self) {
        if(self.value === 'night') {
            body_color.setBackgroundColor('black');
            body_color.setColor('white');
            self.value = 'day';

            link.setColor('yellow');
        }
        else {
            body_color.setBackgroundColor('white');
            body_color.setColor('black');
            self.value = 'night';
            
            link.setColor('blue');
         }
    }