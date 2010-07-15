var bcat = {
  options: {
    'Wrap': 'toggleWrap',
    'Dark': 'toggleDark'
  },
  
  buildMenu: function() {
    var $menu = $('<ul />');
    $menu
      .css({
        position: 'fixed',
        top: '15px',
        right: '15px',
        width: '200px',
        backgroundColor: '#CCCCCC',
        fontFamily: 'Arial, sans-serif',
        fontSize: '0.8em',
        listStyleType: 'none',
        padding: '5px',
        margin: '0px',
        cursor: 'pointer'
      })
     .prependTo('body');
    $.each(bcat.options, function(name, meth) {
      var $item = $('<li/>');
      $item.text(name)
      .toggle(function() { $(this).css('font-weight', 'bold'); },
              function() { $(this).css('font-weight', 'normal'); })
      .click(bcat[meth])
      .appendTo($menu);
    });
  },
    
  toggleWrap: function() {
    if ($('pre').is('.wrapped')) {
      $('pre')
        .css({'width': 'auto', 'white-space': 'pre'})
        .removeClass('wrapped');
    } else {
      $('pre')
        .css({'width': '100%', 'white-space': 'pre-wrap'})
        .addClass('wrapped');
    }
  },
  
  toggleDark: function() {
    if ($('pre').is('.dark')) {

    } else {
      
    }
  }
    
};

setTimeout(function() {
  bcat.buildMenu();
}, 100);


